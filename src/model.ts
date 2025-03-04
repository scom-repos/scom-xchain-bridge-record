import { Module } from "@ijstech/components";
import { findConstantToVault, isWalletConnected, State, VaultGroupList, VaultOrderItem } from "./store/index";
import { IExtendedNetwork, IXchainBridgeRecordData, TokenMapType } from "./global/index";
import { IWalletPlugin } from "@scom/scom-wallet-modal";
import { INetworkConfig } from "@scom/scom-network-picker";
import { ITokenObject, tokenStore } from "@scom/scom-token-list";
import { getAllUserOrders, requestAmendOrder, requestCancelOrder, withdrawUnexecutedOrder } from "./API";
import { findVaultGroupByToken, getRoute, initCrossChainWallet, Route } from "./crosschain-utils/index";
import { BigNumber } from "@ijstech/eth-contract";
import configData from './data.json';
import { getBuilderSchema } from "./formSchema";
import { Wallet } from "@ijstech/eth-wallet";

export const pageSize = 5;

export const enum ActionType {
  Cancel,
  Resubmit,
  Withdraw
}

export const enum DateOptions {
  LATEST = 'Latest',
  OLDEST = 'Oldest',
}

export interface IVaultOrderRecordFilter {
  sort?: DateOptions;
  sourceChain?: number | string;
  targetChain?: number | string;
  assetName?: string;
}

interface IOptions {
  refreshWidget: (isConnected: boolean) => Promise<void>;
  updatePageNumber: (page: number) => void;
  resetFilterUI: () => void;
  resetRpcWallet: () => void;
  setContainerTag: (value: any) => void;
  updateTheme: () => void;
}

export class Model {
  private module: Module;
  private state: State;
  private _data: IXchainBridgeRecordData = {
    defaultChainId: 0,
    wallets: [],
    networks: [],
    assetNames: []
  }
  private options: IOptions = {
    refreshWidget: async () => { },
    updatePageNumber: (page: number) => { },
    resetFilterUI: () => { },
    resetRpcWallet: () => { },
    setContainerTag: (value: any) => { },
    updateTheme: () => { }
  }

  private _switchChainId: number;
  private _chainId: number;
  private _isCancel: boolean;
  private _resubmitToken: ITokenObject;
  private _orderHash: string;
  private _needToRefresh: boolean;
  private _selectedItem: VaultOrderItem;
  private _filter: IVaultOrderRecordFilter = {};
  private _orders: VaultOrderItem[] = [];
  private _newMinAmountOut: string;
  private _targetTokenBalances: any;
  private _targetTokenMap: TokenMapType;
  private _itemStart = 0;
  private _itemEnd = pageSize;
  private _currentAction: ActionType;
  private _sortByDate: DateOptions;
  private _isNetworkChanging = false;
  private _initializedState: { chainId: number, connected: boolean, loading: boolean };

  constructor(module: Module, state: State, options: IOptions) {
    this.module = module;
    this.state = state;
    this.options = options;
  }

  get defaultChainId() {
    return this._data.defaultChainId || this.networks[0]?.chainId;
  }

  set defaultChainId(value: number) {
    this._data.defaultChainId = value;
  }

  get wallets() {
    return this._data.wallets || [];
  }

  set wallets(value: IWalletPlugin[]) {
    this._data.wallets = value;
  }

  get networks() {
    return this._data.networks || this.supportedChainIds;
  }

  set networks(value: INetworkConfig[]) {
    this._data.networks = value;
  }

  get showHeader() {
    return this._data.showHeader ?? true;
  }

  set showHeader(value: boolean) {
    this._data.showHeader = value;
  }

  get showFooter() {
    return this._data.showFooter ?? true;
  }

  set showFooter(value: boolean) {
    this._data.showFooter = value;
  }

  get assetNames() {
    return this._data.assetNames || [];
  }

  set assetNames(value: string[]) {
    this._data.assetNames = value;
  }

  get urlParamsEnabled() {
    return this._data.urlParamsEnabled;
  }

  set urlParamsEnabled(value: boolean) {
    this._data.urlParamsEnabled = value;
  }

  get isNetworkChanging() {
    return this._isNetworkChanging;
  }

  private set isNetworkChanging(value: boolean) {
    this._isNetworkChanging = value;
  }

  private get supportedChainIds() {
    const vaultGroups = VaultGroupList.filter(v => this.assetNames.includes(v.assetName));
    const chainIdSet = new Set<number>();
    vaultGroups.forEach(v => {
      Object.keys(v.vaults).forEach(chainId => {
        chainIdSet.add(Number(chainId));
      });
    });
    const chainIds = Array.from(chainIdSet).map(id => ({ chainId: id }));
    return chainIds;
  }

  async setData(value: IXchainBridgeRecordData) {
    this._data = value;
    this.state.setNetworkConfig(this.networks);
    this.state.setSupportedAssetNames(value.assetNames);
    for (let network of this.networks) {
      tokenStore.updateTokenMapData(network.chainId);
    }
    await this.options.resetRpcWallet();
    const isConnected = isWalletConnected();
    this.initializedState = {
      chainId: this.state.getChainId(),
      connected: isConnected,
      loading: true
    }
    await this.options.refreshWidget(isConnected);
    this.options.resetFilterUI();
    this.initializedState.loading = false;
  }

  getData() {
    return this._data;
  }

  getTag() {
    return this.module.tag;
  }

  setTag(value: any) {
    const newValue = value || {};
    for (let prop in newValue) {
      if (newValue.hasOwnProperty(prop)) {
        if (prop === 'light' || prop === 'dark')
          this.updateTag(prop, newValue[prop]);
        else
          this.module.tag[prop] = newValue[prop];
      }
    }
    this.options.setContainerTag(this.module.tag);
    this.options.updateTheme();
  }

  private updateTag(type: 'light' | 'dark', value: any) {
    this.module.tag[type] = this.module.tag[type] ?? {};
    for (let prop in value) {
      if (value.hasOwnProperty(prop))
        this.module.tag[type][prop] = value[prop];
    }
  }

  getConfigurators() {
    return [
      {
        name: 'Builder Configurator',
        target: 'Builders',
        getActions: this.getActions.bind(this),
        getData: this.getData.bind(this),
        setData: async (value: any) => {
          const defaultData = configData.defaultBuilderData;
          this.setData({ ...defaultData, ...value });
        },
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      },
      {
        name: 'Editor',
        target: 'Editor',
        getActions: this.getActions.bind(this),
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      }
    ];
  }

  private getActions() {
    const formSchema = getBuilderSchema();
    const actions = [
      {
        name: 'Edit',
        icon: 'edit',
        command: (builder: any, userInputData: any) => {
          let oldData: IXchainBridgeRecordData = {
            defaultChainId: 0,
            wallets: [],
            networks: [],
            assetNames: []
          };
          let oldTag = {};
          return {
            execute: async () => {
              oldData = JSON.parse(JSON.stringify(this._data));
              const {
                networks,
                ...themeSettings
              } = userInputData;

              const generalSettings = {
                networks,
              };
              this._data.networks = generalSettings.networks;
              this._data.defaultChainId = this._data.networks[0]?.chainId;
              await this.options.resetRpcWallet();
              this.options.refreshWidget(isWalletConnected());
              if (builder?.setData) builder.setData(userInputData);

              oldTag = JSON.parse(JSON.stringify(this.module.tag));
              if (builder?.setTag) builder.setTag(themeSettings);
              else this.setTag(themeSettings);
              this.options.setContainerTag(themeSettings);
            },
            undo: () => {
              this._data = JSON.parse(JSON.stringify(oldData));
              this.options.refreshWidget(isWalletConnected());
              if (builder?.setData) builder.setData(this._data);

              this.module.tag = JSON.parse(JSON.stringify(oldTag));
              if (builder?.setTag) builder.setTag(this.module.tag);
              else this.setTag(this.module.tag);
              this.options.setContainerTag(this.module.tag);
            },
            redo: () => { }
          }
        },
        userInputDataSchema: formSchema.dataSchema,
        userInputUISchema: formSchema.uiSchema
      }
    ]
    return actions;
  }

  get switchChainId(): number {
    return this._switchChainId;
  }
  set switchChainId(value: number) {
    this._switchChainId = value;
  }

  get chainId(): number {
    return this._chainId;
  }
  set chainId(value: number) {
    this._chainId = value;
  }

  get isCancel(): boolean {
    return this._isCancel;
  }
  set isCancel(value: boolean) {
    this._isCancel = value;
  }

  get resubmitToken(): ITokenObject {
    return this._resubmitToken;
  }
  set resubmitToken(value: ITokenObject) {
    this._resubmitToken = value;
  }

  get orderHash(): string {
    return this._orderHash;
  }
  set orderHash(value: string) {
    this._orderHash = value;
  }

  get needToRefresh(): boolean {
    return this._needToRefresh;
  }
  set needToRefresh(value: boolean) {
    this._needToRefresh = value;
  }

  get selectedItem(): VaultOrderItem {
    return this._selectedItem;
  }
  set selectedItem(value: VaultOrderItem) {
    this._selectedItem = value;
  }

  get filter(): IVaultOrderRecordFilter {
    return this._filter;
  }
  set filter(value: IVaultOrderRecordFilter) {
    this._filter = value;
  }

  get orders(): VaultOrderItem[] {
    return this._orders;
  }
  set orders(value: VaultOrderItem[]) {
    this._orders = value;
  }

  get newMinAmountOut(): string {
    return this._newMinAmountOut;
  }
  set newMinAmountOut(value: string) {
    this._newMinAmountOut = value;
  }

  get targetTokenBalances(): any {
    return this._targetTokenBalances;
  }
  set targetTokenBalances(value: any) {
    this._targetTokenBalances = value;
  }

  get targetTokenMap(): TokenMapType {
    return this._targetTokenMap;
  }
  set targetTokenMap(value: TokenMapType) {
    this._targetTokenMap = value;
  }

  get itemStart(): number {
    return this._itemStart;
  }
  set itemStart(value: number) {
    this._itemStart = value;
  }

  get itemEnd(): number {
    return this._itemEnd;
  }
  set itemEnd(value: number) {
    this._itemEnd = value;
  }

  get currentAction(): ActionType {
    return this._currentAction;
  }
  set currentAction(value: ActionType) {
    this._currentAction = value;
  }

  get sortByDate() {
    return this._sortByDate;
  }
  set sortByDate(value: DateOptions) {
    this._sortByDate = value;
  }

  get initializedState(): { chainId: number, connected: boolean, loading: boolean } {
    return this._initializedState;
  }
  set initializedState(value: { chainId: number, connected: boolean, loading: boolean }) {
    this._initializedState = value;
  }

  get networkList(): IExtendedNetwork[] {
    const list = this.state.getMatchNetworks({ isDisabled: false });
    const networks = this.state.getNetworkConfig();
    const testnetSupportedList = list.filter(v => v.isTestnet && networks.some(n => n.chainId == v.chainId));
    const mainnetSupportedList = list.filter(v => !v.isTestnet && networks.some(n => n.chainId == v.chainId));
    const isMainnet = mainnetSupportedList.some((item: IExtendedNetwork) => item.chainId == this.chainId);
    const supportList = isMainnet ? mainnetSupportedList : testnetSupportedList;
    return supportList;
  }

  get dataListFiltered() {
    let list = this.orders;
    if (!Object.keys(this.filter).length) return list;
    const { sourceChain, targetChain, sort, assetName } = this.filter;
    if (sourceChain) {
      list = list.filter((order) => order.fromNetwork.chainId == sourceChain);
    }
    if (targetChain) {
      list = list.filter((order) => order.toNetwork.chainId == targetChain);
    }
    if (assetName) {
      list = list.filter((order) => order.assetName === assetName)
    }
    if (sort) {
      list = list.sort((a, b) => sort === DateOptions.LATEST ? b.orderId - a.orderId : a.orderId - b.orderId);
    }
    return list;
  }

  get paginatedData() {
    return this.dataListFiltered.slice(this.itemStart, this.itemEnd);
  }

  get targetTokenList() {
    let dataList: ITokenObject[] = [];
    if (this.targetTokenMap) {
      for (const key of Object.keys(this.targetTokenMap)) {
        const tokenAddress = key;
        const tokenObject = this.targetTokenMap[tokenAddress];
        if (this.targetTokenBalances) {
          dataList.push({
            ...tokenObject,
            status: false,
            balance: this.targetTokenBalances[tokenAddress] || 0,
          });
        } else {
          dataList.push({
            ...tokenObject,
            status: null,
          });
        }
      }
    }
    return dataList;
  }

  removeCurrentValues() {
    this.needToRefresh = false;
    this.orderHash = '';
  }

  removeUrlParams() {
    if (!this.urlParamsEnabled) return;
    const wHref = window.location.href;
    const startIdx = wHref.indexOf('?');
    if (startIdx > -1 && isWalletConnected()) {
      const newURL = window.location.protocol + "//" + window.location.host + '/' + location.hash.split("?")[0];
      window.history.replaceState({}, '', newURL);
      this.removeCurrentValues();
    }
  }

  updateUrlParams(record: VaultOrderItem) {
    if (!record || !this.urlParamsEnabled) return;
    const queryRouter: any = {
      orderId: record.orderId,
      chainId: record.fromNetwork.chainId,
      vaultAddress: record.fromVaultAddress
    };
    const queryString = new URLSearchParams(queryRouter).toString();
    const newURL = window.location.protocol + "//" + window.location.host + '/' + location.hash.split("?")[0] + '?' + queryString;
    window.history.replaceState({}, '', newURL);
  }

  handleUrlParams() {
    if (!this.urlParamsEnabled) return;
    const wHref = window.location.href;
    const startIdx = wHref.indexOf('?');
    const search = wHref.substring(startIdx, wHref.length);
    const queryString = search;
    const urlParams = new URLSearchParams(queryString);
    const chainId = urlParams.get('chainId');
    const orderId = urlParams.get('orderId');
    const vaultAddress = urlParams.get('vaultAddress');
    if (chainId && orderId && vaultAddress) {
      const index = this.dataListFiltered.findIndex(v => v.fromNetwork.chainId === Number(chainId) && v.orderId === Number(orderId) && v.fromVaultAddress.toLowerCase() === vaultAddress.toLowerCase());
      if (index > -1) {
        const pageNumber = Math.ceil((index + 1) / pageSize);
        const orderHash = `${orderId}-${chainId}-${vaultAddress}`;
        this.options.updatePageNumber(pageNumber);
        this.orderHash = orderHash;
      }
    }
  }

  async getAllUserOrders() {
    try {
      const wallet = Wallet.getClientInstance();
      if (wallet.isConnected) {
        const crossChainWallet = initCrossChainWallet(this.state, wallet.chainId);
        if (!crossChainWallet.address) {
          this.isNetworkChanging = true;
          const rpcWallet = this.state.getRpcWallet();
          await rpcWallet.switchNetwork(rpcWallet.chainId);
          this.isNetworkChanging = false;
        }
      }
      let vaultOrders = await getAllUserOrders(this.state, this.module.i18n);
      this.orders = vaultOrders.orders;
    } catch (e) {
      console.log('getAllUserOrders', e);
    }
    finally {
      if (this.isNetworkChanging) {
        this.isNetworkChanging = false;
      }
    }
  }

  async getRoute() {
    let route: Route;
    try {
      const params = { ...this.selectedItem, toToken: { ...this.resubmitToken } };
      let vaultGroup = await findVaultGroupByToken(this.state, params.fromNetwork.chainId, params.sourceVaultToken.address);
      route = getRoute({
        vaultGroup,
        toChainId: params.toNetwork.chainId,
        fromChainId: params.fromNetwork.chainId,
        inAmount: new BigNumber(params.sourceVaultInAmount)
      });
    } catch { }
    return route;
  }

  findConstantToVault() {
    //there will be only one route
    return findConstantToVault(
      this.selectedItem.fromNetwork.chainId,
      this.selectedItem.sourceVaultToken.address,
      this.selectedItem.toNetwork.chainId
    )
  }

  async getTargetInfoObj(targetChainId: number) {
    let tokenBalances = tokenStore.getTokenBalancesByChainId(targetChainId);
    if (!tokenBalances || !Object.keys(tokenBalances).length) {
      await tokenStore.updateTokenBalancesByChainId(targetChainId);
    }
    const tokenMap = tokenStore.getTokenMapByChainId(targetChainId);
    tokenBalances = tokenStore.getTokenBalancesByChainId[targetChainId];
    this.targetTokenBalances = tokenBalances;
    this.targetTokenMap = Object.keys(tokenMap || {})
      .reduce((obj: TokenMapType, key: string) => {
        obj[key] = (tokenMap || {})[key];
        return obj;
      }, {});
  }

  async requestCancelOrder() {
    const { toVaultAddress, fromNetwork, orderId } = this.selectedItem;
    await requestCancelOrder({ vaultAddress: toVaultAddress, sourceChainId: fromNetwork.chainId, orderId });
  }

  async requestAmendOrder(callback?: (err: Error, receipt?: string) => Promise<void>) {
    const { fromVaultAddress, orderId } = this.selectedItem;
    const tokenOut = Object.assign({}, this.resubmitToken);
    await requestAmendOrder(this.state, { vaultAddress: fromVaultAddress, orderId, tokenOut, minAmountOut: new BigNumber(this.newMinAmountOut) }, callback);
  }

  async withdrawUnexecutedOrder() {
    const { fromVaultAddress, orderId } = this.selectedItem;
    await withdrawUnexecutedOrder({ vaultAddress: fromVaultAddress, orderId });
  }
}
