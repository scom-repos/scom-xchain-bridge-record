import {
  customModule,
  Control,
  Module,
  Modal,
  Table,
  application,
  IEventBus,
  Panel,
  observable,
  Styles,
  Label,
  Icon,
  Button,
  Pagination,
  Container,
  VStack,
  ControlElement,
  customElements,
  HStack,
  FormatUtils
} from '@ijstech/components';
import { bridgeRecordColumns, toTokenIcon, truncateAddress } from './column';
import Assets from './assets';
import { bridgeStyle, buttonProps } from './index.css';
import { EventId, IExtendedNetwork, registerSendTxEvents, showResultMessage, IXchainBridgeRecordData } from './global/index';

import {
  isWalletConnected,
  getNetworkImg,
  VaultOrderItem,
  State,
  getTokenIcon,
  VaultGroupList,
  VaultOrderStatus,
} from './store/index';
import { Wallet, BigNumber, Constants } from '@ijstech/eth-wallet';
import ScomTokenInput from '@scom/scom-token-input';
import { ITokenObject, assets as tokenAssets } from '@scom/scom-token-list';
import ScomTxStatusModal from '@scom/scom-tx-status-modal';
import { configJson, mainJson } from './languages/index';
import { ActionType, DateOptions, IVaultOrderRecordFilter, Model, pageSize } from './model';
import ScomWalletModal, { IWalletPlugin } from '@scom/scom-wallet-modal';
import ScomDappContainer from '@scom/scom-dapp-container';
import { INetworkConfig } from '@scom/scom-network-picker';
import configData from './data.json';
import { Block, BlockNoteEditor, BlockNoteSpecs, callbackFnType, executeFnType, getWidgetEmbedUrl, parseUrl } from '@scom/scom-blocknote-sdk';

const Theme = Styles.Theme.ThemeVars;

interface IPagination {
  position: string,
  pageSize: number,
  currentPage: number,
  totalPage?: number
}

interface INetworkFilter extends IExtendedNetwork {
  url?: string
}

interface ScomXchainBridgeRecordElement extends ControlElement {
  lazyLoad?: boolean;
  defaultChainId?: number;
  networks: INetworkConfig[];
  wallets: IWalletPlugin[];
  showHeader?: boolean;
  showFooter?: boolean;
  assetNames: string[];
  urlParamsEnabled?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-scom-xchain-bridge-record']: ScomXchainBridgeRecordElement;
    }
  }
};

@customModule
@customElements('i-scom-xchain-bridge-record')
export default class ScomXchainBridgeRecord extends Module implements BlockNoteSpecs {
  private bridgeRecordTable: Table;
  private mobilePanel: Panel;
  private hStackPagination: HStack;
  private largeLoading: Panel;
  private requestCancelModal: Modal;
  private txStatusModal: ScomTxStatusModal;
  private titleModalLabel: Label;
  private lbAmendOrder: Label;
  private confirmNetwork: Panel;
  private switchNetworkPnl: Panel;
  private networkNameLabel: Label;
  private networkNameVal: Label;
  private withdrawAmount: Label;
  private noteCancelOrWithdraw: Label;
  private noteNetwork: Label;
  private resubmitOrderModal: Modal;
  private tokenReceiveSelection: ScomTokenInput;
  private resubmitConfirmNetwork: Panel;
  private resubmitConfirmPnl: Panel;
  private resubmitExpectedReceive: Label;
  // private resubmitMinimumReceive: Label;
  private lbResubmitError: Label;
  private btnResubmit: Button;
  private btnResubmitNetwork: Button;
  private wrapperTimer: HStack;
  private _lastUpdated: number = 0;
  @observable()
  private lastUpdatedText: string = '$data_last_updated_0_seconds_ago';
  @observable()
  private paging: IPagination = {
    position: 'bottomRight',
    pageSize,
    currentPage: 1
  }
  private iconRefresh: Icon;
  private timer: any;
  private $eventBus: IEventBus;
  private oldSource: INetworkFilter;
  private oldDestination: INetworkFilter;
  private searchSourceBtn: Button;
  private searchDestinationBtn: Button;
  private sortDateBtn: Button;
  private btnLatestSwap: Button;
  private btnOldestSwap: Button;
  private searchTokenGroupBtn: Button;
  private searchSourceModal: Modal;
  private searchDestinationModal: Modal;
  private sortDateModal: Modal;
  private searchTokenGroupModal: Modal;
  private assetName: string;
  private sourceChain: INetworkFilter;
  private destinationChain: INetworkFilter;
  private emptyMsg: Label;
  private btnElm: Button;
  private isModalRefreshed: { [key: string]: boolean } = {};

  private bridgeRecordMobile: VStack;
  private listPagination: Pagination;
  private dappContainer: ScomDappContainer;
  private mdWallet: ScomWalletModal;
  private state: State;
  private clientEvents: any[] = [];
  private model: Model;
  tag: any = {};

  constructor(parent?: Container, options?: ScomXchainBridgeRecordElement) {
    super(parent, options);
    this.initModel();
    this.$eventBus = application.EventBus;
    this.registerEvent();
  }

  onHide() {
    this.dappContainer.onHide();
    this.removeRpcWalletEvents();
    for (let event of this.clientEvents) {
      event.unregister();
    }
    this.clientEvents = [];
  }

  private registerEvent() {
    this.clientEvents.push(this.$eventBus.register(this, EventId.SlippageToleranceChanged, this.onUpdateReceiveVal));
  }

  get defaultChainId() {
    return this.model.defaultChainId;
  }

  set defaultChainId(value: number) {
    this.model.defaultChainId = value;
  }

  get wallets() {
    return this.model.wallets ?? [];
  }

  set wallets(value: IWalletPlugin[]) {
    this.model.wallets = value;
  }

  get networks() {
    return this.model.networks ?? [];
  }

  set networks(value: INetworkConfig[]) {
    this.model.networks = value;
  }

  get showHeader() {
    return this.model.showHeader ?? true;
  }

  set showHeader(value: boolean) {
    this.model.showHeader = value;
  }

  get showFooter() {
    return this.model.showFooter ?? true;
  }

  set showFooter(value: boolean) {
    this.model.showFooter = value;
  }

  get assetNames() {
    return this.model.assetNames || [];
  }

  set assetNames(value: string[]) {
    this.model.assetNames = value;
  }

  get urlParamsEnabled() {
    return this.model.urlParamsEnabled;
  }

  set urlParamsEnabled(value: boolean) {
    this.model.urlParamsEnabled = value;
  }

  set width(value: string | number) {
    this.resizeLayout(value);
  }

  getConfigurators() {
    this.initModel();
    return this.model.getConfigurators();
  }

  getConfigJson() {
    return configJson;
  }

  addBlock(blocknote: any, executeFn: executeFnType, callbackFn?: callbackFnType) {
    const blockType = 'xchain-bridge-record';
    const moduleData = {
      name: "@scom/scom-xchain-bridge-record",
      localPath: "scom-xchain-bridge-record"
    }

    function getData(href: string) {
      const widgetData = parseUrl(href);
      if (widgetData) {
        const { module, properties } = widgetData;
        if (module.localPath === moduleData.localPath) return { ...properties };
      }
      return false;
    }

    const XchainBridgeRecordBlock = blocknote.createBlockSpec({
      type: blockType,
      propSchema: {
        ...blocknote.defaultProps,
        assetNames: VaultGroupList.map(v => v.assetName),
        defaultChainId: { default: 0 },
        networks: { default: [] },
        wallets: { default: [] },
      },
      content: "none"
    },
      {
        render: (block: Block) => {
          const wrapper = new Panel();
          const props = JSON.parse(JSON.stringify(block.props));
          const customElm = new ScomXchainBridgeRecord(wrapper, { ...props });
          if (typeof callbackFn === 'function') callbackFn(customElm, block);
          wrapper.appendChild(customElm);
          return {
            dom: wrapper
          };
        },
        parseFn: () => {
          return [
            {
              tag: `div[data-content-type=${blockType}]`,
              node: blockType
            },
            {
              tag: "a",
              getAttrs: (element: string | HTMLElement) => {
                if (typeof element === "string") {
                  return false;
                }
                const href = element.getAttribute('href');
                if (href) return getData(href);
                return false;
              },
              priority: 402,
              node: blockType
            },
            {
              tag: "p",
              getAttrs: (element: string | HTMLElement) => {
                if (typeof element === "string") {
                  return false;
                }
                const child = element.firstChild as HTMLElement;
                if (child?.nodeName === 'A' && child.getAttribute('href')) {
                  const href = child.getAttribute('href');
                  return getData(href);
                }
                return false;
              },
              priority: 403,
              node: blockType
            },
          ]
        },
        toExternalHTML: (block: any, editor: any) => {
          const link = document.createElement("a");
          const url = getWidgetEmbedUrl(
            {
              type: blockType,
              props: { ...(block.props || {}) }
            },
            moduleData
          );
          link.setAttribute("href", url);
          link.textContent = blockType;
          const wrapper = document.createElement("p");
          wrapper.appendChild(link);
          return { dom: wrapper };
        }
      });

    const XchainBridgeRecordSlashItem = {
      name: "Xchain-bridge-record",
      execute: (editor: BlockNoteEditor) => {
        const block: any = {
          type: blockType,
          props: configData.defaultBuilderData
        };
        if (typeof executeFn === 'function') {
          executeFn(editor, block);
        }
      },
      aliases: [blockType, "widget"],
      group: "Widget",
      icon: { name: 'exchange-alt' },
      hint: "Insert an xchain swap",
    }

    return {
      block: XchainBridgeRecordBlock,
      slashItem: XchainBridgeRecordSlashItem,
      moduleData
    }
  }

  private async resetRpcWallet() {
    this.removeRpcWalletEvents();
    const rpcWalletId = await this.state.initRpcWallet(this.defaultChainId);
    const rpcWallet = this.state.getRpcWallet();
    const chainChangedEvent = rpcWallet.registerWalletEvent(this, Constants.RpcWalletEvent.ChainChanged, async (chainId: number) => {
      this.onChainChange();
    });
    const connectedEvent = rpcWallet.registerWalletEvent(this, Constants.RpcWalletEvent.Connected, async (connected: boolean) => {
      this.onWalletConnect();
    });
    const data: any = {
      defaultChainId: this.defaultChainId,
      wallets: this.wallets,
      networks: this.networks,
      showHeader: this.showHeader,
      showFooter: this.showFooter,
      rpcWalletId: rpcWallet.instanceId
    }
    if (this.dappContainer?.setData) this.dappContainer.setData(data);
  }

  removeRpcWalletEvents() {
    const rpcWallet = this.state.getRpcWallet();
    if (rpcWallet) rpcWallet.unregisterAllWalletEvents();
  }

  getData() {
    return this.model.getData();
  }

  async setData(value: IXchainBridgeRecordData) {
    this.model.setData(value);
  }

  getTag() {
    return this.tag;
  }

  async setTag(value: any) {
    this.model.setTag(value);
  }

  private setContainerTag(value: any) {
    if (this.dappContainer) this.dappContainer.setTag(value);
  }

  private updateStyle(name: string, value: any) {
    value ?
      this.style.setProperty(name, value) :
      this.style.removeProperty(name);
  }

  private updateTheme() {
    const themeVar = this.dappContainer?.theme || 'light';
    this.updateStyle('--text-primary', this.tag[themeVar]?.fontColor);
    this.updateStyle('--background-main', this.tag[themeVar]?.backgroundColor);
    this.updateStyle('--input-font_color', this.tag[themeVar]?.inputFontColor);
    this.updateStyle('--input-background', this.tag[themeVar]?.inputBackgroundColor);
    //FIXME: temporary solution
    this.updateStyle('--primary-button-background', this.tag[themeVar]?.primaryButtonBackground || 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box');
    this.updateStyle('--primary-button-hover-background', this.tag[themeVar]?.primaryButtonHoverBackground || 'linear-gradient(255deg,#f15e61,#b52082)');
    this.updateStyle('--primary-button-disabled-background', this.tag[themeVar]?.primaryButtonDisabledBackground || 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box');
    this.updateStyle('--max-button-background', this.tag[themeVar]?.maxButtonBackground || 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box');
    this.updateStyle('--max-button-hover-background', this.tag[themeVar]?.maxButtonHoverBackground || 'linear-gradient(255deg,#f15e61,#b52082)');
    this.resizeLayout(Number(this.tag?.width))
  }

  private onChainChange = async () => {
    const chainId = this.state.getChainId();
    if (this.model.orders.length && this.model.networkList.some(v => v.chainId === chainId)) {
      this.model.chainId = chainId;
      this.updateSwitchButton();
      return;
    }
    this.model.chainId = chainId;
    this.renderFilterButton();
    await this.refreshData();
    this.updateSwitchButton();
  }

  onWalletConnect = async () => {
    this.renderFilterButton();
    this.refreshData();
  }

  private onUpdateReceiveVal = () => {
    this.updateReceiveVal();
  }

  get lastUpdated(): number {
    return this._lastUpdated;
  }

  set lastUpdated(value: number) {
    this._lastUpdated = value;
    this.lastUpdatedText = this.i18n.get('$data_last_updated_seconds_ago', { value: this._lastUpdated.toString() });
  }

  private onSelectIndex = (target: Control, oldPage: number, isClicked: boolean) => {
    if (isClicked) {
      this.model.removeUrlParams();
    }
    this.model.removeCurrentValues();
    this.model.itemStart = (this.listPagination.currentPage - 1) * pageSize;
    this.model.itemEnd = this.model.itemStart + pageSize;
    this.paging.currentPage = this.listPagination.currentPage;
    this.renderRecords();
  }

  private updatePageNumber = (pageNumber: number) => {
    if (this.paging.currentPage !== pageNumber) {
      this.paging.currentPage = pageNumber;
    }
  }

  private refreshData = async () => {
    const currentChainId = this.state.getChainId();
    const isConnected = isWalletConnected();
    const { chainId, connected, loading } = this.model.initializedState;
    if (chainId === currentChainId && connected === isConnected && loading === true) return;
    this.model.initializedState = {
      chainId: currentChainId,
      connected: isConnected,
      loading: true
    }
    await this.refreshUI(isConnected);
    this.model.initializedState.loading = false;
  }

  private refreshUI = async (connected: boolean) => {
    this.model.chainId = this.state.getChainId();
    this.model.needToRefresh = false;
    this.paging.currentPage = 1;
    this.model.sortByDate = DateOptions.LATEST;
    this.sortDateBtn.caption = this.i18n.get('$latest_swap');
    this.model.filter = {};
    this.oldSource = Object.assign({}, this.sourceChain);
    this.oldDestination = Object.assign({}, this.destinationChain);
    this.iconRefresh.enabled = false;
    this.bridgeRecordMobile.visible = false;
    this.bridgeRecordTable.data = [];
    if (connected) {
      this.emptyMsg.caption = this.i18n.get('$no_data');
      try {
        await this.generateData();
      } catch (err) {
        this.resetData();
      }
    } else {
      this.resetData();
      this.emptyMsg.caption = this.i18n.get('$please_connect_with_your_wallet');
    }
    this.bridgeRecordMobile.visible = true;
    this.iconRefresh.enabled = true;
    this.lastUpdated = 0;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.lastUpdated++;
    }, 1000)
  }

  private renderEmpty(source: Control) {
    const emptyElm = <i-panel class="empty-header">
      <i-image url={Assets.fullPath('img/icon-advice.svg')} minWidth={60} minHeight={60} />
      <i-panel>
        <i-label
          id="emptyMsg"
          caption={this.i18n.get(isWalletConnected() ? '$no_data' : '$please_connect_with_your_wallet')}
          font={{ size: '1rem', color: Theme.text.primary, bold: true }}
          margin={{ left: 10 }}
        />
      </i-panel>
    </i-panel>
    const td = source.querySelector('td');
    td && td.appendChild(emptyElm);
  }

  private onChangeSorting = async (value: DateOptions) => {
    this.sortDateModal.visible = false;
    if (this.model.sortByDate === value) return;
    this.model.sortByDate = value;
    this.sortDateBtn.caption = this.i18n.get(value === DateOptions.LATEST ? '$latest_swap' : '$oldest_swap');
    this.model.removeUrlParams();
    await this.updateRecords();
  }

  private onChangeSource = async (network?: INetworkFilter) => {
    this.searchSourceModal.visible = false;
    if ((!network && !this.sourceChain) || network?.chainId === this.sourceChain?.chainId) return;
    const networkImg = this.searchSourceBtn.querySelector('i-image.network-img');
    if (networkImg && this.searchSourceBtn) {
      this.searchSourceBtn.removeChild(networkImg);
    }
    if (network) {
      if (network.chainId == this.destinationChain?.chainId) {
        this.destinationChain = this.oldSource ? Object.assign({}, this.sourceChain) : null;
        this.oldDestination = Object.assign({}, this.destinationChain);
        const _networkImg = this.searchDestinationBtn.querySelector('i-image.network-img');
        if (_networkImg && this.searchDestinationBtn) {
          this.searchDestinationBtn.removeChild(_networkImg);
        }
        if (this.destinationChain?.chainId) {
          this.searchDestinationBtn.caption = this.destinationChain.chainName;
          const _url = this.destinationChain.url;
          this.searchDestinationBtn.prepend(<i-image class="network-img" url={_url} />);
        } else {
          this.searchDestinationBtn.caption = '$destination_chain';
        }
      }
      this.sourceChain = network;
      this.searchSourceBtn.caption = network.chainName;
      const url = network.url;
      this.searchSourceBtn.prepend(<i-image class="network-img" url={url} />);
    } else {
      this.sourceChain = null;
      this.searchSourceBtn.caption = '$source_chain';
    }
    this.oldSource = Object.assign({}, this.sourceChain);
    this.model.removeUrlParams();
    await this.updateRecords();
  }

  private onChangeDestination = async (network?: INetworkFilter) => {
    this.searchDestinationModal.visible = false;
    if ((!network && !this.destinationChain) || network?.chainId === this.destinationChain?.chainId) return;
    const networkImg = this.searchDestinationBtn.querySelector('i-image.network-img');
    if (networkImg && this.searchDestinationBtn) {
      this.searchDestinationBtn.removeChild(networkImg);
    }
    if (network) {
      if (network.chainId == this.sourceChain?.chainId) {
        this.sourceChain = this.oldDestination ? Object.assign({}, this.oldDestination) : null;
        this.oldSource = Object.assign({}, this.sourceChain);
        const _networkImg = this.searchSourceBtn.querySelector('i-image.network-img');
        if (_networkImg && this.searchSourceBtn) {
          this.searchSourceBtn.removeChild(_networkImg);
        }
        if (this.sourceChain?.chainId) {
          this.searchSourceBtn.caption = this.sourceChain.chainName;
          const _url = this.sourceChain.url;
          this.searchSourceBtn.prepend(<i-image class="network-img" url={_url} />);
        } else {
          this.searchSourceBtn.caption = this.i18n.get('$source_chain');
        }
      }
      this.destinationChain = network;
      this.searchDestinationBtn.caption = network.chainName;
      const url = network.url;
      this.searchDestinationBtn.prepend(<i-image class="network-img" url={url} />);
    } else {
      this.destinationChain = null;
      this.searchDestinationBtn.caption = this.i18n.get('$destination_chain');
    }
    this.oldDestination = Object.assign({}, this.destinationChain);
    this.model.removeUrlParams();
    await this.updateRecords();
  }

  private async onChangeTokenGroup(value?: string) {
    this.searchTokenGroupModal.visible = false;
    if (this.assetName === value) return;
    this.assetName = value;
    this.searchTokenGroupBtn.caption = value || this.i18n.get('$token_group');
    this.model.removeUrlParams();
    await this.updateRecords();
  }

  private async generateData() {
    const pageNumber = this.model.needToRefresh ? this.paging.currentPage : 1;
    await this.updateRecords(pageNumber);
  }

  private resetData() {
    this.paging.totalPage = 0;
    if (this.paging.currentPage !== 1) {
      this.paging.currentPage = 1;
    }
    this.model.itemStart = 0;
    this.model.itemEnd = this.model.itemStart + pageSize;
    this.bridgeRecordTable.data = [];
  }

  private expandRecord = () => {
    if (this.model.orderHash) {
      setTimeout(() => {
        const currentRecord = this.bridgeRecordTable.querySelector(`[order-hash="${this.model.orderHash}"]`) as Icon;
        if (currentRecord) {
          const row = currentRecord.closest('tr');
          if (!row.classList.contains('is--expanded')) {
            currentRecord.click();
          }
        }
        const currentRecordMobile = this.bridgeRecordMobile.querySelector(`[order-hash="${this.model.orderHash}"]`) as Icon;
        if (currentRecordMobile && !currentRecordMobile.hasAttribute('is--expanded')) {
          currentRecordMobile.click();
        }
      }, 500);
    }
  }

  private updateRecords = async (page?: number) => {
    if (this.model.needToRefresh) {
      this.model.needToRefresh = false;
    } else if (this.largeLoading) {
      this.wrapperTimer.visible = false;
      this.largeLoading.visible = true;
    }
    this.paging.currentPage = page || 1;
    let params: IVaultOrderRecordFilter = {
      sort: this.model.sortByDate
    }
    if (this.sourceChain) {
      params.sourceChain = this.sourceChain.chainId;
    }
    if (this.destinationChain) {
      params.targetChain = this.destinationChain.chainId;
    }
    if (this.assetName) {
      params.assetName = this.assetName;
    }
    this.model.filter = params;
    if (page) {
      await this.model.getAllUserOrders();
      this.lastUpdated = 0;
    }
    this.renderRecords();
  }

  private renderRecords = () => {
    this.model.handleUrlParams();
    this.model.itemStart = (this.listPagination.currentPage - 1) * pageSize;
    this.model.itemEnd = this.model.itemStart + pageSize;
    this.paging.totalPage = Math.ceil(this.model.dataListFiltered.length / pageSize);
    this.listPagination.visible = this.paging.totalPage > 1;
    this.onRenderDataMobile();
    if (this.largeLoading) {
      this.wrapperTimer.visible = true;
      this.largeLoading.visible = false;
    }
    this.bridgeRecordTable.data = this.model.paginatedData;
    this.expandRecord();
  }

  private async switchNetworkByWallet() {
    if (this.mdWallet) {
      await application.loadPackage('@scom/scom-wallet-modal', '*');
      this.mdWallet.networks = this.networks;
      this.mdWallet.wallets = this.wallets;
      this.mdWallet.showModal();
    }
  }

  private resizeLayout(width: number | string) {
    let interval = setInterval(() => {
      if (!this.bridgeRecordTable) return;
      clearInterval(interval);
      const tagWidth = Number(width);
      if ((this.offsetWidth !== 0 && this.offsetWidth < 768) || (window as any).innerWidth < 768 || (!isNaN(tagWidth) && tagWidth !== 0 && tagWidth < 768)) {
        this.hStackPagination.classList.add('pagination-mobile');
        this.bridgeRecordTable.visible = false;
        this.mobilePanel.visible = true;
      } else {
        this.hStackPagination.classList.remove('pagination-mobile');
        this.bridgeRecordTable.visible = true;
        this.mobilePanel.visible = false;
      }
    }, 100)
  }

  private onConfirm = async (actionType?: ActionType) => {
    if (!this.state.isRpcWalletConnected()) {
      const chainId = this.state.getChainId();
      const clientWallet = Wallet.getClientInstance();
      await clientWallet.switchNetwork(chainId);
      return;
    }
    showResultMessage(this.txStatusModal, 'warning', this.i18n.get('$confirming'));
    let btnElement = this.btnElm;

    const callback = async (err: Error, receipt?: string) => {
      if (err) {
        showResultMessage(this.txStatusModal, 'error', err);
      } else if (receipt) {
        showResultMessage(this.txStatusModal, 'success', receipt);
        if (btnElement) {
          btnElement.rightIcon.spin = true;
          btnElement.rightIcon.visible = true;
        }
      }
    };

    const confirmationCallback = async () => {
      if (btnElement) {
        btnElement.rightIcon.visible = false;
      }
      this.model.needToRefresh = true;
      await this.updateRecords(this.paging.currentPage);
    };

    registerSendTxEvents({
      transactionHash: callback,
      confirmation: confirmationCallback
    });

    if (!actionType) actionType = this.model.isCancel ? ActionType.Cancel : ActionType.Withdraw;
    switch (actionType) {
      case ActionType.Cancel:
        this.requestCancelModal.visible = false;
        this.model.requestCancelOrder();
        break;
      case ActionType.Resubmit:
        this.resubmitOrderModal.visible = false;
        this.model.requestAmendOrder(callback);
        break;
      case ActionType.Withdraw:
        this.requestCancelModal.visible = false;
        this.model.withdrawUnexecutedOrder();
        break;
      default:
        break;
    }
  }

  private onSwitchNetwork = async (action: ActionType) => {
    try {
      if (action === ActionType.Resubmit) {
        this.resubmitOrderModal.visible = false;
      } else {
        this.requestCancelModal.visible = false;
      }
      this.model.needToRefresh = true;
      this.model.currentAction = action;
      const { orderId, fromNetwork, fromVaultAddress } = this.model.selectedItem;
      this.model.orderHash = `${orderId}-${fromNetwork.chainId}-${fromVaultAddress}`;
      if (!isWalletConnected()) {
        this.switchNetworkByWallet();
      } else {
        const rpcWallet = this.state.getRpcWallet();
        if (rpcWallet.chainId != this.model.switchChainId) {
          await rpcWallet.switchNetwork(this.model.switchChainId);
        }
        const clientWallet = Wallet.getClientInstance();
        await clientWallet.switchNetwork(this.model.switchChainId);
      }
    } catch {
      this.model.removeUrlParams();
      this.model.removeCurrentValues();
    }
  }

  private updateSwitchButton = () => {
    if (this.model.selectedItem) {
      const { fromNetwork, toNetwork } = this.model.selectedItem;
      if (this.model.currentAction === ActionType.Resubmit) {
        this.resubmitOrderModal.visible = true;
        if (fromNetwork.chainId != this.model.chainId || !this.state.isRpcWalletConnected()) {
          this.resubmitConfirmPnl.visible = false;
          this.resubmitConfirmNetwork.visible = true;
        } else {
          this.resubmitConfirmPnl.visible = true;
          this.resubmitConfirmNetwork.visible = false;
        }
      } else if (this.model.currentAction === ActionType.Cancel) {
        this.requestCancelModal.visible = true;
        const network = this.model.isCancel ? toNetwork : fromNetwork;
        if (network.chainId != this.model.chainId || !this.state.isRpcWalletConnected()) {
          this.switchNetworkPnl.visible = true;
          this.confirmNetwork.visible = false;
        } else {
          this.switchNetworkPnl.visible = false;
          this.confirmNetwork.visible = true;
        }
      }
    }
  }

  private showCancelOrWithdrawModal = (elm: Button, record: VaultOrderItem, isCancel?: boolean) => {
    this.model.updateUrlParams(record);
    this.btnElm = elm;
    this.model.selectedItem = record;
    this.model.isCancel = isCancel;
    const { fromNetwork, toNetwork, protocolFee } = record;
    const network = isCancel ? toNetwork : fromNetwork;
    this.model.switchChainId = network.chainId;
    if (network.chainId != this.model.chainId || !this.state.isRpcWalletConnected()) {
      this.switchNetworkPnl.visible = true;
      this.confirmNetwork.visible = false;
    } else {
      this.switchNetworkPnl.visible = false;
      this.confirmNetwork.visible = true;
    }
    this.titleModalLabel.caption = this.i18n.get(isCancel ? '$request_cancel' : '$withdraw');
    this.networkNameLabel.caption = this.i18n.get(isCancel ? '$destination_chain' : '$source_chain');
    this.networkNameVal.caption = network.chainName;
    const amount = record.sourceVaultInAmount || null;
    const symbol = record.sourceVaultToken?.symbol || '';
    this.withdrawAmount.caption = amount === null ? '-' : `${FormatUtils.formatNumber(new BigNumber(amount).multipliedBy(new BigNumber(1).minus(protocolFee)).toFixed(), { decimalFigures: 4, hasTrailingZero: false })} ${symbol}`;
    this.noteCancelOrWithdraw.caption = isCancel ?
      this.i18n.get('$you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee', { fee: `${new BigNumber(protocolFee).multipliedBy(100).toFixed(2)}%` }) :
      this.i18n.get('$the_token_will_be_returned_to_your_wallet_after_withdrawal');
    this.noteNetwork.caption = this.i18n.get(isCancel ?
      '$the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed' :
      '$the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed');
    this.requestCancelModal.visible = true;
  }

  private showResubmitModal = async (elm: Button, record: VaultOrderItem) => {
    this.model.updateUrlParams(record);
    this.btnElm = elm;
    this.model.selectedItem = record;
    const { fromNetwork, toToken, toNetwork } = record;
    if (fromNetwork.chainId != this.model.chainId || !this.state.isRpcWalletConnected()) {
      this.resubmitConfirmPnl.visible = false;
      this.resubmitConfirmNetwork.visible = true;
    } else {
      this.resubmitConfirmPnl.visible = true;
      this.resubmitConfirmNetwork.visible = false;
    }

    if (!this.tokenReceiveSelection.onSelectToken) {
      this.tokenReceiveSelection.onSelectToken = async (token: ITokenObject) => {
        this.tokenReceiveSelection.tokenReadOnly = true;
        this.model.resubmitToken = token;
        await this.updateReceiveVal();
        this.tokenReceiveSelection.tokenReadOnly = false;
      }
    }
    if (this.tokenReceiveSelection.isBtnMaxShown) {
      this.tokenReceiveSelection.isBtnMaxShown = false;
    }
    this.model.switchChainId = fromNetwork.chainId;
    this.resubmitExpectedReceive.caption = '-';
    // this.resubmitMinimumReceive.caption = '-';
    this.lbResubmitError.visible = false;
    this.model.newMinAmountOut = record.minOutAmount;
    this.resubmitOrderModal.visible = true;
    if (this.tokenReceiveSelection.chainId != toNetwork.chainId) {
      this.tokenReceiveSelection.tokenReadOnly = true;
      this.tokenReceiveSelection.chainId = toNetwork.chainId;
      this.tokenReceiveSelection.token = { chainId: toNetwork.chainId, ...toToken };
      await this.model.getTargetInfoObj(toNetwork.chainId);
      this.tokenReceiveSelection.tokenDataListProp = this.model.targetTokenList;
      this.tokenReceiveSelection.tokenReadOnly = false;
    } else {
      this.tokenReceiveSelection.token = { chainId: toNetwork.chainId, ...toToken };
    }
    this.model.resubmitToken = { chainId: toNetwork.chainId, ...toToken };
    this.tokenReceiveSelection.tokenReadOnly = true; // No choosing token for pilot launch
    await this.updateReceiveVal();
  }

  private closeRequestCancel = () => {
    this.requestCancelModal.visible = false;
    this.model.removeCurrentValues();
  }

  private closeResubmitModal = () => {
    this.resubmitOrderModal.visible = false;
    this.model.removeCurrentValues();
  }

  private resetReceiveVal = () => {
    this.resubmitExpectedReceive.caption = '-';
    this.model.newMinAmountOut = '0';
  }

  private updateReceiveVal = async () => {
    try {
      let route = await this.model.getRoute()
      //there will be only one route
      let vaultInfo = this.model.findConstantToVault();
      if (vaultInfo) {
        const { toAmount } = route;
        const minReceivedMaxSold = toAmount.times(1 - this.state.getSlippageTolerance() / 100).toFixed();
        this.model.newMinAmountOut = minReceivedMaxSold;
        this.resubmitExpectedReceive.caption = FormatUtils.formatNumber(toAmount.toFixed(), { decimalFigures: 4, hasTrailingZero: false });
        // this.resubmitMinimumReceive.caption = formatNumber(this.newMinAmountOut);
        this.btnResubmit.enabled = toAmount.gt(0);
        this.btnResubmitNetwork.enabled = toAmount.gt(0);
        this.lbResubmitError.visible = toAmount.lte(0);
      } else {
        this.resetReceiveVal();
      }
    } catch {
      this.resetReceiveVal();
    }
  }

  private onRefresh = async () => {
    var self = this;
    this.iconRefresh.enabled = false;
    await this.updateRecords(1);
    setTimeout(function () {
      self.lastUpdated = 0;
      self.iconRefresh.enabled = true;
    }, 1000)
  }

  private renderFilterButton() {
    const dropdownSource = this.searchSourceModal.querySelector('.modal');
    const dropdownDestination = this.searchDestinationModal.querySelector('.modal');
    const dropdownTokenGroup = this.searchTokenGroupModal.querySelector('.modal');
    if (this.model.chainId) {
      if (dropdownSource && dropdownDestination) {
        dropdownSource.innerHTML = '';
        dropdownDestination.innerHTML = '';
        dropdownSource.appendChild(
          <i-button
            caption='$source_chain'
            onClick={() => this.onChangeSource()}
          />
        );
        dropdownDestination.appendChild(
          <i-button
            caption='$destination_chain'
            onClick={() => this.onChangeDestination()}
          />
        );
        this.model.networkList.forEach((item: IExtendedNetwork) => {
          const url = item.image;
          dropdownSource.appendChild(
            <i-hstack gap="0.25rem" alignItems="center" class="network-item" cursor="pointer" onClick={() => this.onChangeSource({ ...item, url })}>
              <i-image url={url} fallbackUrl={tokenAssets.fallbackUrl} width={20} height={20} minWidth={20} />
              <i-label caption={item.chainName} />
            </i-hstack>
          );
          dropdownDestination.appendChild(
            <i-hstack gap="0.25rem" alignItems="center" class="network-item" cursor="pointer" onClick={() => this.onChangeDestination({ ...item, url })}>
              <i-image url={url} fallbackUrl={tokenAssets.fallbackUrl} width={20} height={20} minWidth={20} />
              <i-label caption={item.chainName} />
            </i-hstack>
          );
        });
      }

      if (dropdownTokenGroup) {
        dropdownTokenGroup.innerHTML = '';
        dropdownTokenGroup.appendChild(
          <i-button
            caption="$token_group"
            onClick={() => this.onChangeTokenGroup()}
          />
        );
        this.state.getSupportedAssetNames().forEach((assetName) => {
          dropdownTokenGroup.appendChild(
            <i-button
              caption={assetName}
              onClick={() => this.onChangeTokenGroup(assetName)}
            />
          );
        });
      }
    } else {
      if (dropdownSource && dropdownSource && dropdownDestination) {
        dropdownSource.innerHTML = '';
        dropdownDestination.innerHTML = '';
        dropdownTokenGroup.innerHTML = '';
        dropdownTokenGroup.appendChild(
          <i-button
            caption="$token_group"
            onClick={() => this.onChangeTokenGroup()}
          />
        );
        dropdownSource.appendChild(
          <i-button
            caption='$source_chain'
            onClick={() => this.onChangeSource()}
          />
        );
        dropdownDestination.appendChild(
          <i-button
            caption='$destination_chain'
            onClick={() => this.onChangeDestination()}
          />
        );
      }
    }
  }

  private onRenderDataMobile = async () => {
    const list = this.model.paginatedData;
    this.bridgeRecordMobile.clearInnerHTML();
    if (!list.length) {
      this.bridgeRecordMobile.appendChild(
        <i-hstack class="empty-header" justifyContent="center">
          <i-image url={Assets.fullPath('img/icon-advice.svg')} minWidth={60} minHeight={60} />
          <i-panel>
            <i-label
              id="emptyMsg"
              caption={this.i18n.get(isWalletConnected() ? '$no_data' : '$please_connect_with_your_wallet')}
              font={{ size: '1rem', color: Theme.text.primary, bold: true }}
              margin={{ left: 10 }}
            />
          </i-panel>
        </i-hstack>
      );
      return;
    }

    for (const record of list) {
      const { orderId, fromToken, toToken, fromNetwork, toNetwork, fromVaultAddress } = record;
      // const date = formatDate(record.date, DefaultDateTimeFormat);
      const fromSymbol = fromToken.symbol;
      const toSymbol = toToken.symbol;
      const fromTokenImg = getTokenIcon(fromToken.address, fromNetwork.chainId);
      const toTokenImg = getTokenIcon(toToken.address, toNetwork.chainId);
      const color = record.statusCode === VaultOrderStatus.Executed ? Theme.colors.success.main : Theme.colors.error.main;
      const expandPanel = await Panel.create();
      expandPanel.visible = false;
      expandPanel.appendChild(this.onExpandedRowRender(record, true));
      const handleExpandRow = (target: Icon) => {
        expandPanel.visible = !expandPanel.visible;
        if (expandPanel.visible) {
          this.model.updateUrlParams(record);
          target.setAttribute('is--expanded', '');
        } else {
          target.removeAttribute('is--expanded');
        }
      }
      this.bridgeRecordMobile.appendChild(
        <i-panel class="bg-item">
          <i-hstack class="row-item">
            <i-vstack class="header-item">
              <i-hstack gap="4px" verticalAlignment="center">
                <i-label caption={fromSymbol} font={{ bold: true }} />
                <i-label caption={'to'} />
                <i-label caption={toSymbol} font={{ bold: true }} />
                <i-label caption={`#${orderId}`} />
              </i-hstack>
              {/* <i-label class="text-grey" font={{ size: '0.875rem' }} caption={date} /> */}
            </i-vstack>
            <i-vstack margin={{ left: 'auto' }}>
              <i-icon class="pointer" margin={{ top: 4 }} name="ellipsis-v" order-hash={`${orderId}-${fromNetwork.chainId}-${fromVaultAddress}`} fill={Theme.text.primary} width={15} height={15} onClick={handleExpandRow.bind(this)} />
            </i-vstack>
          </i-hstack>
          <i-hstack margin={{ bottom: 4 }} class="row-item" verticalAlignment="center">
            <i-image margin={{ right: 4 }} width="20px" class="inline-block" url={fromTokenImg} />
            <i-label caption={`${FormatUtils.formatNumber(record.fromAmount, { decimalFigures: 4, hasTrailingZero: false })} ${fromSymbol}`} />
          </i-hstack>
          <i-hstack class="row-item" verticalAlignment="center">
            <i-image margin={{ right: 4 }} width="20px" class="inline-block" url={getNetworkImg(this.state, fromNetwork.chainId)} />
            <i-label class="text-opacity" caption={fromNetwork.chainName} />
          </i-hstack>
          <i-icon name="arrow-down" fill={Theme.text.primary} margin={{ left: 40, bottom: 8 }} width={16} height={16} cursor="default" />
          <i-hstack margin={{ bottom: 4 }} class="row-item" verticalAlignment="center">
            <i-image margin={{ right: 4 }} width="20px" class="inline-block" url={toTokenImg} />
            <i-label caption={`${FormatUtils.formatNumber(record.toAmount, { decimalFigures: 4, hasTrailingZero: false })} ${toSymbol}`} />
          </i-hstack>
          <i-hstack class="row-item" verticalAlignment="center">
            <i-image margin={{ right: 4 }} width="20px" class="inline-block" url={getNetworkImg(this.state, toNetwork.chainId)} />
            <i-label class="text-opacity" caption={toNetwork.chainName} />
          </i-hstack>
          <i-hstack class="row-status">
            <i-label font={{ color: color, size: '0.875rem' }} caption={record.status} />
          </i-hstack>
          {expandPanel}
        </i-panel>
      )
    };
  }

  private onExpandedRowRender = (record: VaultOrderItem, isMobile?: boolean) => {
    let color = record.statusCode === VaultOrderStatus.Executed ? Theme.colors.success.main : Theme.colors.error.main;
    let btn = [];
    if (record.statusCode === VaultOrderStatus.Pending || record.statusCode === VaultOrderStatus.Expired) {
      btn = (
        <i-hstack gap={8} class="group-btn" alignItems="center" wrap="wrap" margin={{ bottom: 20 }}>
          <i-button caption="$amend_order" {...buttonProps} minWidth={150} class="text-center" onClick={(e: Button) => this.showResubmitModal(e, record)} />
          <i-button caption="$request_cancel" {...buttonProps} minWidth={150} class="text-center" onClick={(e: Button) => this.showCancelOrWithdrawModal(e, record, true)} />
        </i-hstack>
      );
    } else if (record.statusCode === VaultOrderStatus.RefundApproved) {
      btn = (
        <i-vstack margin={{ bottom: 20 }} horizontalAlignment="center">
          <i-button caption="$withdraw" {...buttonProps} minWidth={150} class="text-center" onClick={(e: Button) => this.showCancelOrWithdrawModal(e, record)} />
        </i-vstack>
      );
    }
    return (
      <i-panel class={`expanded-item flex ${isMobile ? 'expanded-item-mobile' : ''}`}>
        <i-vstack class="col-50">
          <i-hstack class="row-table">
            <i-vstack class="custom-col"><i-label class="text-grey" caption="$minimum_receive" /></i-vstack>
            <i-hstack verticalAlignment="center">
              <i-image width="20px" class="inline-block" margin={{ right: 8 }} url={toTokenIcon(record)}></i-image>
              <i-label caption={`${FormatUtils.formatNumber(record.minOutAmount, { decimalFigures: 4, hasTrailingZero: false })} ${record.toToken.symbol}`} />
            </i-hstack>
          </i-hstack>
          <i-hstack class="row-table">
            <i-vstack class="custom-col"><i-label class="text-grey" caption="$status" /></i-vstack>
            <i-vstack><i-label font={{ color: color }} caption={record.status} /></i-vstack>
          </i-hstack>
          <i-hstack class="row-table">
            <i-vstack class="custom-col"><i-label class="text-grey" caption="$sender_address" /></i-vstack>
            <i-hstack verticalAlignment="center">
              <i-label margin={{ right: 8 }} caption={truncateAddress(record.sender, 13)} />
              <i-icon
                name="copy"
                width="14px"
                height="14px"
                fill={Theme.text.primary}
                tooltip={{ content: '$the_address_has_been_copied', trigger: 'click' }}
                onClick={() => application.copyToClipboard(record.sender || '')}
                class="inline-flex pointer"
              ></i-icon>
            </i-hstack>
          </i-hstack>
        </i-vstack>
        <i-vstack class="col-50">
          {/* <i-hstack class="row-table">
            <i-vstack class="custom-col"><i-label class="text-grey" caption="Creation Transaction" /></i-vstack>
            <i-hstack visible={!!record.newOrderTxId}>
              <i-label margin={{ right: 8 }} caption={truncateAddress(record.amendTxId ? record.amendTxId : record.newOrderTxId, 13)} />
              <i-icon name="external-link-alt" fill={Theme.text.primary} width="15px" height="15px" onClick={() => viewTransaction(record.fromNetwork.chainId, record.amendTxId ? record.amendTxId : record.newOrderTxId)} />
            </i-hstack>
          </i-hstack>
          <i-hstack class="row-table" visible={!record.withdrawTxId}>
            <i-vstack class="custom-col"><i-label class="text-grey" caption="Execution Transaction" /></i-vstack>
            <i-hstack visible={!!record.swapTxId}>
              <i-label margin={{ right: 8 }} caption={truncateAddress(record.swapTxId, 13)} />
              <i-icon name="external-link-alt" fill={Theme.text.primary} width="15px" height="15px" onClick={() => viewTransaction(record.toNetwork.chainId, record.swapTxId)} />
            </i-hstack>
          </i-hstack>
          <i-hstack class="row-table" visible={!!record.withdrawTxId}>
            <i-vstack class="custom-col"><i-label class="text-grey" caption="Withdrawal Transaction" /></i-vstack>
            <i-hstack >
              <i-label margin={{ right: 8 }} caption={truncateAddress(record.withdrawTxId, 13)} />
              <i-icon name="external-link-alt" fill={Theme.text.primary} width="15px" height="15px" onClick={() => viewTransaction(record.fromNetwork.chainId, record.withdrawTxId)} />
            </i-hstack>
          </i-hstack> */}
          {btn}
        </i-vstack>
      </i-panel>
    );
  }

  private onCellClick = (target: Table, rowIndex: number, columnIdx: number, record: VaultOrderItem) => {
    const row = target.querySelector(`tr[data-index="${rowIndex}"]`);
    if (!row || row.classList.contains('is--expanded')) return;
    this.model.updateUrlParams(record);
  }

  private onShowFilter(target: Control) {
    const isRefreshed = this.isModalRefreshed[target.id];
    target.visible = !target.visible;
    if (target.visible && !isRefreshed) {
      this.isModalRefreshed[target.id] = true;
      setTimeout(() => {
        target.refresh();
      }, 1)
    }
  }

  async onLoad() {
    const isConnected = isWalletConnected();
    this.model.initializedState = {
      chainId: this.state.getChainId(),
      connected: isConnected,
      loading: true
    }
    await this.refreshData();
    this.model.initializedState.loading = false;
  }

  private initModel() {
    if (!this.state) {
      this.state = new State(configData);
    }
    if (!this.model) {
      this.model = new Model(this, this.state, {
        updateTheme: this.updateTheme.bind(this),
        refreshWidget: this.refreshUI.bind(this),
        updatePageNumber: this.updatePageNumber.bind(this),
        resetFilterUI: this.renderFilterButton.bind(this),
        resetRpcWallet: this.resetRpcWallet.bind(this),
        setContainerTag: this.setContainerTag.bind(this)
      });
    }
  }

  private isEmptyData(value: IXchainBridgeRecordData) {
    return !value || !value.assetNames || value.assetNames.length === 0;
  }

  async init() {
    this.i18n.init({ ...mainJson });
    await super.init();
    this.model.chainId = this.state.getChainId();
    this.renderFilterButton();
    this.btnLatestSwap.caption = this.i18n.get('$latest_swap');
    this.btnOldestSwap.caption = this.i18n.get('$oldest_swap');
    this.sortDateBtn.onClick = () => this.onShowFilter(this.sortDateModal);
    this.searchSourceBtn.onClick = () => this.onShowFilter(this.searchSourceModal);
    this.searchDestinationBtn.onClick = () => this.onShowFilter(this.searchDestinationModal);
    this.searchTokenGroupBtn.onClick = () => this.onShowFilter(this.searchTokenGroupModal);
    this.lbAmendOrder.caption = this.i18n.get('$amend_order');

    const lazyLoad = this.getAttribute('lazyLoad', true, false);
    if (!lazyLoad) {
      const defaultChainId = this.getAttribute('defaultChainId', true);
      const networks = this.getAttribute('networks', true);
      const wallets = this.getAttribute('wallets', true);
      const showHeader = this.getAttribute('showHeader', true);
      const showFooter = this.getAttribute('showFooter', true);
      const assetNames = this.getAttribute('assetNames', true);
      const urlParamsEnabled = this.getAttribute('urlParamsEnabled', true);
      let data = {
        defaultChainId,
        networks,
        wallets,
        showHeader,
        showFooter,
        assetNames,
        urlParamsEnabled
      };
      if (!this.isEmptyData(data)) {
        await this.setData(data);
      }
    }

    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.resizeLayout(Number(this.tag?.width));
      }, 300);
    });
    this.executeReadyCallback();
  }

  render() {
    return (
      <i-scom-dapp-container id="dappContainer">
        <i-panel class={bridgeStyle}>
          <i-panel padding={{ left: '1rem', right: '1rem', top: '1rem', bottom: '1rem' }}>
            <i-hstack wrap="wrap-reverse" justifyContent="space-between" margin={{ bottom: 20 }}>
              <i-hstack gap={5} id="wrapperTimer" minWidth={255} margin={{ top: 4 }} verticalAlignment="center">
                <i-label caption={this.lastUpdatedText}></i-label>
                <i-icon id="iconRefresh" width={15} height={15} class="rounded-icon" name="sync-alt" fill={Theme.text.primary} onClick={this.onRefresh}></i-icon>
              </i-hstack>
              <i-panel class="group-filter">
                <i-panel class="btn-dropdown" width='165px'>
                  <i-button
                    id="sortDateBtn"
                    caption="$latest_swap"
                    rightIcon={{ name: "angle-down" }}
                    width="calc(100% - 1px)"
                    font={{ size: '1rem' }}
                  ></i-button>
                  <i-modal
                    id="sortDateModal"
                    showBackdrop={false}
                    width="100%" height='auto'
                    popupPlacement='bottom'
                  >
                    <i-panel>
                      <i-button id="btnLatestSwap" caption="$latest_swap" onClick={() => this.onChangeSorting(DateOptions.LATEST)} />
                      <i-button id="btnOldestSwap" caption="$oldest_swap" onClick={() => this.onChangeSorting(DateOptions.OLDEST)} />
                    </i-panel>
                  </i-modal>
                </i-panel>

                <i-panel class="btn-dropdown" width='165px'>
                  <i-button
                    id="searchTokenGroupBtn"
                    rightIcon={{ name: "angle-down" }}
                    caption="$token_group"
                    width="calc(100% - 1px)"
                    font={{ size: '1rem' }}
                  ></i-button>
                  <i-modal
                    id="searchTokenGroupModal"
                    showBackdrop={false}
                    width='100%' height='auto'
                    popupPlacement='bottom'
                  ></i-modal>
                </i-panel>

                <i-panel class="btn-dropdown" width='165px'>
                  <i-button
                    id="searchSourceBtn"
                    rightIcon={{ name: "angle-down" }}
                    caption="$source_chain"
                    width="calc(100% - 1px)"
                    font={{ size: '1rem' }}
                  ></i-button>
                  <i-modal
                    id="searchSourceModal"
                    showBackdrop={false}
                    width='100%' height='auto'
                    popupPlacement='bottom'
                  ></i-modal>
                </i-panel>

                <i-panel class="btn-dropdown" width='165px'>
                  <i-button
                    id="searchDestinationBtn"
                    rightIcon={{ name: "angle-down" }}
                    caption="$destination_chain"
                    width="calc(100% - 1px)"
                    font={{ size: '1rem' }}
                  ></i-button>
                  <i-modal
                    id="searchDestinationModal"
                    showBackdrop={false}
                    width='100%' height='auto'
                    popupPlacement='bottom'
                  ></i-modal>
                </i-panel>
              </i-panel>
            </i-hstack>
            <i-panel>
              <i-vstack id="largeLoading" class="i-loading-overlay" background={{ color: `${Theme.background.main} !important` }}>
                <i-vstack class="i-loading-spinner" horizontalAlignment="center" verticalAlignment="center">
                  <i-icon
                    class="i-loading-spinner_icon"
                    cursor="default"
                    image={{ url: Assets.fullPath('img/loading.svg'), width: 36, height: 36 }}
                  ></i-icon>
                  <i-label
                    caption="$loading" font={{ color: '#FD4A4C', size: '1.5em' }}
                    class="i-loading-spinner_text"
                  ></i-label>
                </i-vstack>
              </i-vstack>
              <i-panel id="mobilePanel" minHeight={100} visible={false}>
                <i-hstack horizontalAlignment="center">
                  <i-vstack id="bridgeRecordMobile" />
                </i-hstack>
              </i-panel>

              <i-table
                id="bridgeRecordTable"
                class="os-table"
                margin={{ bottom: 30 }}
                columns={bridgeRecordColumns}
                expandable={{
                  onRenderExpandedRow: this.onExpandedRowRender,
                  rowExpandable: true
                }}
                onRenderEmptyTable={this.renderEmpty.bind(this)}
                onCellClick={this.onCellClick.bind(this)}
              ></i-table>
              <i-hstack id="hStackPagination" margin={{ top: 16, bottom: 20 }} class="record-pagination">
                <i-pagination
                  id="listPagination"
                  width="auto"
                  totalPages={this.paging.totalPage}
                  currentPage={this.paging.currentPage}
                  onPageChanged={this.onSelectIndex.bind(this)}
                />
              </i-hstack>
            </i-panel>
            <i-modal id="requestCancelModal" class="custom-modal_header" width={400} maxWidth="95%">
              <i-hstack class="header" horizontalAlignment="space-between">
                <i-label id="titleModalLabel" caption="$request_cancel" />
                <i-icon width={20} height={20} class="cursor-pointer" name="times" fill={Theme.colors.primary.main} onClick={this.closeRequestCancel} />
              </i-hstack>
              <i-panel background={{ color: Theme.divider }} height={2} width='100%' margin={{ top: 10, bottom: 20 }} />
              <i-hstack horizontalAlignment="space-between" margin={{ bottom: 20 }}>
                <i-label id="networkNameLabel" />
                <i-label id="networkNameVal" />
              </i-hstack>
              <i-hstack horizontalAlignment="space-between" margin={{ bottom: 20 }}>
                <i-label caption="$withdraw_amount" />
                <i-label id="withdrawAmount" />
              </i-hstack>
              <i-panel width="100%" margin={{ bottom: 30 }}>
                <i-label id="noteCancelOrWithdraw" class="inline" />
              </i-panel>
              <i-panel id="switchNetworkPnl">
                <i-panel width="100%" margin={{ bottom: 30 }}>
                  <i-label id="noteNetwork" class="inline" font={{ color: Theme.colors.warning.main }} />
                </i-panel>
                <i-hstack margin={{ top: 20, bottom: 20 }} horizontalAlignment="center">
                  <i-button
                    caption="$switch_network"
                    {...buttonProps}
                    width={150}
                    class="text-center"
                    onClick={() => this.onSwitchNetwork(ActionType.Cancel)}
                  />
                </i-hstack>
              </i-panel>
              <i-panel id="confirmNetwork" visible={false}>
                <i-hstack margin={{ top: 20, bottom: 20 }} horizontalAlignment="center">
                  <i-button
                    caption="$confirm"
                    {...buttonProps}
                    width={150}
                    class="text-center"
                    onClick={() => this.onConfirm()}
                  />
                </i-hstack>
              </i-panel>
            </i-modal>

            <i-modal id="resubmitOrderModal" class="custom-modal_header" width={400} maxWidth="95%">
              <i-hstack class="header" horizontalAlignment="space-between">
                <i-label id="lbAmendOrder" caption="$amend_order" />
                <i-icon width={20} height={20} class="cursor-pointer" name="times" fill={Theme.colors.primary.main} onClick={() => this.closeResubmitModal()} />
              </i-hstack>
              <i-panel background={{ color: Theme.divider }} height={2} width="100%" margin={{ top: 10, bottom: 20 }} />
              <i-hstack horizontalAlignment="space-between" verticalAlignment="center" margin={{ bottom: 20 }}>
                <i-label caption="$token_receive" />
                <i-scom-token-input id="tokenReceiveSelection" class="custom-token-input" isInputShown={false} isBtnMaxShown={false} isBalanceShown={false} isCommonShown={false} isSortBalanceShown={false} width="auto" />
              </i-hstack>
              <i-vstack margin={{ bottom: 20 }}>
                <i-hstack horizontalAlignment="space-between">
                  <i-label caption="$expected_receive" />
                  <i-label id="resubmitExpectedReceive" />
                </i-hstack>
                <i-label id="lbResubmitError" visible={false} caption="$amount_lower_than_base_fee" font={{ size: '0.75rem', color: Theme.colors.error.main }} />
              </i-vstack>
              <i-panel id="resubmitConfirmNetwork">
                <i-hstack margin={{ top: 20, bottom: 20 }} horizontalAlignment="center">
                  <i-button
                    id="btnResubmitNetwork"
                    caption="$switch_network"
                    {...buttonProps}
                    width={150}
                    class="text-center"
                    onClick={() => this.onSwitchNetwork(ActionType.Resubmit)}
                  />
                </i-hstack>
              </i-panel>
              <i-panel id="resubmitConfirmPnl" visible={false}>
                <i-hstack margin={{ top: 20, bottom: 20 }} horizontalAlignment="center">
                  <i-button
                    id="btnResubmit"
                    caption="$confirm"
                    {...buttonProps}
                    width={150}
                    class="text-center"
                    onClick={() => this.onConfirm(ActionType.Resubmit)}
                  />
                </i-hstack>
              </i-panel>
            </i-modal>

            <i-scom-tx-status-modal id="txStatusModal" />
            <i-scom-wallet-modal id="mdWallet" wallets={[]} />
          </i-panel>
        </i-panel>
      </i-scom-dapp-container>
    )
  }
}