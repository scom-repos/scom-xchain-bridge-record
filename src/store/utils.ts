import { application } from '@ijstech/components';
import { BigNumber, ERC20ApprovalModel, INetwork, Wallet } from '@ijstech/eth-wallet';
import { IExtendedNetwork } from '../global/index';
import getNetworkList from '@scom/scom-network-list';
import ConfigData from '../data.json';
import { VaultConstant, Mainnets, Testnets, VaultGroupConstant, VaultType, TokenConstant, VaultGroupList, orderMinOutRate } from './data/core';
import { ChainNativeTokenByChainId, ITokenObject } from '@scom/scom-token-list';
import { INetworkConfig } from '@scom/scom-network-picker';

export enum WalletPlugin {
  MetaMask = 'metamask',
  Coin98 = 'coin98',
  TrustWallet = 'trustwallet',
  BinanceChainWallet = 'binancechainwallet',
  ONTOWallet = 'onto',
  WalletConnect = 'walletconnect',
  BitKeepWallet = 'bitkeepwallet',
  FrontierWallet = 'frontierwallet',
}

export enum NetworkType {
  Mainnet,
  Testnet,
  NotSupported,
}

export function getNetworkType(chainId: number) {
  if (Mainnets.some(network => network === chainId)) {
    return NetworkType.Mainnet;
  }
  if (Testnets.some(network => network === chainId)) {
    return NetworkType.Testnet;
  }
  return NetworkType.NotSupported;
}

export function getNetworksByType(chainId: number): number[] {
  switch (getNetworkType(chainId)) {
    case NetworkType.Mainnet:
      return Mainnets;
    case NetworkType.Testnet:
      return Testnets;
  }
  return [];
}

export async function forEachNumberIndexAwait<T>(list: { [index: number]: T }, callbackFn: (item: T, index: number) => Promise<void>) {
  for (const chainId in list) {
    if (
      Object.prototype.hasOwnProperty.call(list, chainId)
      && new BigNumber(chainId).isInteger()
    ) await callbackFn(list[chainId], Number(chainId));
  }
}

export function forEachNumberIndex<T>(list: { [index: number]: T }, callbackFn: (item: T, index: number) => void) {
  for (const chainId in list) {
    if (
      Object.prototype.hasOwnProperty.call(list, chainId)
      && new BigNumber(chainId).isInteger()
    ) callbackFn(list[chainId], Number(chainId));
  }
}

export interface VaultGroupStore {
  assetName: string,//must be unique
  vaultType: VaultType,
  vaults: { [chainId: number]: VaultStore },
  deprecated?: boolean,
}

export interface VaultStore extends VaultConstant {
  //DYNAMIC
  //vault
  tokenBalance: BigNumber,
  imbalance: BigNumber,
  ordersLength: number,
  //user
  userTokenAmount: BigNumber,
  userOrders: VaultOrderStore[]
}

export interface VaultOrderStore {
  id: number//orderId on chain
  status: VaultOrderStatus
  expire: BigNumber

  fromOwner: string,
  fromChain: number,
  fromToken: TokenConstant,
  fromAmount: BigNumber,
  fromStatus: ContractVaultOrderStatus,

  toOwner: string,
  toChain: number,
  toToken: TokenConstant,
  toAmount: BigNumber,
  toAmountMin: BigNumber,
  toStatus: ContractVaultOrderStatus,

  protocolFee: string,
}

export enum ContractVaultOrderStatus {
  //copied from contract interface IOSWAP_BridgeVault, 
  //must not be changed
  NotSpecified,//0
  Pending,//1
  Executed,//2
  RequestCancel,//3
  RefundApproved,//4
  Cancelled,//5
  RequestAmend,//6
}

export enum VaultOrderStatus {
  Pending,//1
  Executed,//2
  RequestCancel,//3
  RefundApproved,//4
  Cancelled,//5
  RequestAmend,//6

  Expired,//7 not in contract
}

export interface VaultOrderItem {
  assetName: string,
  fromVaultAddress: string,
  toVaultAddress: string,
  orderId: number,
  expire: BigNumber,
  fromNetwork: IExtendedNetwork,
  toNetwork: IExtendedNetwork,
  price: string,
  protocolFee: BigNumber,
  fromAmount: string,
  fromToken: TokenConstant,
  toToken: TokenConstant,
  toAmount: string,
  minOutAmount: string,
  sourceVaultToken: TokenConstant,
  sourceVaultInAmount: string, //TODO #xchain order check
  statusCode: VaultOrderStatus,
  status: string,
  sender: string, //FIXME find sender
  //newOrderTxId: string,
  //swapTxId: string,
  //withdrawTxId: string,
  //amendTxId: string
}

export type ProxyAddresses = { [key: number]: string };

export class State {
  defaultChainId: number = 0;
  slippageTolerance = new BigNumber(orderMinOutRate).shiftedBy(2).toFixed();
  crossChainTransactionDeadline = 72 * 60; //72 hours
  proxyAddresses: ProxyAddresses = {};
  infuraId: string = "";
  rpcWalletId: string = "";
  networkMap = {} as { [key: number]: IExtendedNetwork };
  networkConfig = [] as INetworkConfig[];
  vaultGroups = initVaultGroupsStore(VaultGroupList);
  supportedAssetNames: string[] = VaultGroupList.map(v => v.assetName);
  approvalModel: ERC20ApprovalModel;

  constructor(options: any) {
    this.initData(options);
  }

  initRpcWallet(defaultChainId: number) {
    this.defaultChainId = defaultChainId;
    if (this.rpcWalletId) {
      return this.rpcWalletId;
    }
    const clientWallet = Wallet.getClientInstance();
    const networkList: INetwork[] = Object.values(application.store?.networkMap || []);
    const instanceId = clientWallet.initRpcWallet({
      networks: networkList,
      defaultChainId,
      infuraId: application.store?.infuraId,
      multicalls: application.store?.multicalls
    });
    this.rpcWalletId = instanceId;
    if (clientWallet.address) {
      const rpcWallet = Wallet.getRpcWalletInstance(instanceId);
      rpcWallet.address = clientWallet.address;
    }
    const defaultNetworkList = getNetworkList();
    const defaultNetworkMap = defaultNetworkList.reduce((acc, cur) => {
      acc[cur.chainId] = cur;
      return acc;
    }, {});
    const supportedNetworks = ConfigData.supportedNetworks || [];
    for (let network of networkList) {
      const networkInfo = defaultNetworkMap[network.chainId];
      const supportedNetwork = supportedNetworks.find(v => v.chainId == network.chainId);
      if (!networkInfo || !supportedNetwork) continue;
      if (this.infuraId && network.rpcUrls && network.rpcUrls.length > 0) {
        for (let i = 0; i < network.rpcUrls.length; i++) {
          network.rpcUrls[i] = network.rpcUrls[i].replace(/{InfuraId}/g, this.infuraId);
        }
      }
      this.networkMap[network.chainId] = {
        ...networkInfo,
        ...network,
        isCrossChainSupported: supportedNetwork.isCrossChainSupported,
        isTestnet: supportedNetwork.isTestnet
      };
    }
    return instanceId;
  }

  getRpcWallet() {
    return this.rpcWalletId ? Wallet.getRpcWalletInstance(this.rpcWalletId) : null;
  }

  isRpcWalletConnected() {
    const wallet = this.getRpcWallet();
    return wallet?.isConnected;
  }

  getProxyAddress(chainId?: number) {
    const _chainId = chainId || Wallet.getInstance().chainId;
    const proxyAddresses = this.proxyAddresses;
    if (proxyAddresses) {
      return proxyAddresses[_chainId];
    }
    return null;
  }

  getNetworkInfo = (chainId: number) => {
    return this.networkMap[chainId];
  }

  getMatchNetworks = (conditions: NetworkConditions): IExtendedNetwork[] => {
    let networkFullList = Object.values(this.networkMap);
    let out = matchFilter(networkFullList, conditions);
    return out;
  }

  getNetworkExplorerName = (chainId: number) => {
    if (this.getNetworkInfo(chainId)) {
      return this.getNetworkInfo(chainId).explorerName;
    }
    return 'Unknown';
  }

  viewOnExplorerByTxHash = (chainId: number, txHash: string) => {
    let network = this.getNetworkInfo(chainId);
    if (network && network.explorerTxUrl) {
      let url = `${network.explorerTxUrl}${txHash}`;
      window.open(url);
    }
  }

  viewOnExplorerByAddress = (chainId: number, address: string) => {
    let network = this.getNetworkInfo(chainId);
    if (network && network.explorerAddressUrl) {
      let url = `${network.explorerAddressUrl}${address}`;
      window.open(url);
    }
  }

  getChainId() {
    const rpcWallet = this.getRpcWallet();
    return rpcWallet?.chainId;
  }

  getSlippageTolerance = (): number => {
    return Number(this.slippageTolerance) || 0;
  }

  setSlippageTolerance = (value: number) => {
    this.slippageTolerance = new BigNumber(value).toFixed();
  }

  getCrossChainTransactionDeadline = (): number => {
    return this.crossChainTransactionDeadline;
  }

  setCrossChainTransactionDeadline = (value: number) => {
    this.crossChainTransactionDeadline = value;
  }

  setSupportedAssetNames = (value: string[]) => {
    this.supportedAssetNames = value;
  }

  getSupportedAssetNames = () => {
    const assetNames = this.supportedAssetNames || [];
    return [...new Set(assetNames)];
  }

  setVaultGroups = (vaultGroups: VaultGroupStore[]) => {
    this.vaultGroups = vaultGroups;
  }

  getVaultGroups = () => {
    return this.vaultGroups;
  }

  setNetworkConfig = (networks: INetworkConfig[]) => {
    this.networkConfig = networks;
  }

  getNetworkConfig = () => {
    return this.networkConfig;
  }

  private initData(options: any) {
    if (options.infuraId) {
      this.infuraId = options.infuraId;
    }
    if (options.proxyAddresses) {
      this.proxyAddresses = options.proxyAddresses;
    }
  }
}

export function isContractVaultOrderStatus(n: number): n is ContractVaultOrderStatus {
  return (n <= 6 && n >= 0);
}

export function isVaultOrderStatus(n: number): n is VaultOrderStatus {
  return (n <= 6 && n >= 0);
}

export function determineOrderStatus(expire: number | BigNumber, fromChainStatus: ContractVaultOrderStatus, toChainStatus: ContractVaultOrderStatus): VaultOrderStatus {
  switch (toChainStatus) {
    case ContractVaultOrderStatus.Executed:
      return VaultOrderStatus.Executed;

    case ContractVaultOrderStatus.RequestCancel:
      if (fromChainStatus == ContractVaultOrderStatus.RefundApproved) return VaultOrderStatus.RefundApproved;
      if (fromChainStatus == ContractVaultOrderStatus.Cancelled) return VaultOrderStatus.Cancelled;
      return VaultOrderStatus.RequestCancel;

    case ContractVaultOrderStatus.RefundApproved:
      return VaultOrderStatus.RefundApproved;

    case ContractVaultOrderStatus.Cancelled:
      return VaultOrderStatus.Cancelled;

    case ContractVaultOrderStatus.RequestAmend:
      return VaultOrderStatus.RequestAmend;

    case ContractVaultOrderStatus.Pending:
      if (fromChainStatus == ContractVaultOrderStatus.Pending && new BigNumber(new Date().getTime()).shiftedBy(-3).gte(expire)) {
        return VaultOrderStatus.Expired;
      } else {
        return VaultOrderStatus.Pending;
      }
    case ContractVaultOrderStatus.NotSpecified: {
      switch (fromChainStatus) {
        case ContractVaultOrderStatus.Executed:
          return VaultOrderStatus.Executed;

        case ContractVaultOrderStatus.RequestCancel:
          return VaultOrderStatus.RequestCancel;

        case ContractVaultOrderStatus.RefundApproved:
          return VaultOrderStatus.RefundApproved;

        case ContractVaultOrderStatus.Cancelled:
          return VaultOrderStatus.Cancelled;

        case ContractVaultOrderStatus.RequestAmend:
          return VaultOrderStatus.RequestAmend;

        case ContractVaultOrderStatus.NotSpecified:
        case ContractVaultOrderStatus.Pending:
          if (new BigNumber(new Date().getTime()).shiftedBy(-3).gte(expire)) {
            return VaultOrderStatus.Expired;
          } else {
            return VaultOrderStatus.Pending;
          }
      }
    }

  }
}

function castToVaultStore(vc: VaultConstant): VaultStore {
  return {
    ...vc,
    tokenBalance: new BigNumber("0"),
    imbalance: new BigNumber("0"),
    userTokenAmount: new BigNumber("0"),
    userOrders: [],
    ordersLength: 0
  }
}

function castToVaultGroupStore(vgc: VaultGroupConstant): VaultGroupStore {
  let vaults: { [chainId: number]: VaultStore } = {};
  forEachNumberIndex(vgc.vaults, (v, chainId) => vaults[chainId] = castToVaultStore(v));
  return {
    ...vgc,
    vaults,
  }
}

function initVaultGroupsStore(vgcs: VaultGroupConstant[]) {
  return vgcs.map(g => castToVaultGroupStore(g));
}

interface NetworkConditions {
  isDisabled?: boolean,
  isTestnet?: boolean,
  isCrossChainSupported?: boolean,
  isMainChain?: boolean
}

function matchFilter<O extends { [keys: string]: any }>(list: O[], filter: Partial<O>): O[] {
  let filters = Object.keys(filter);
  return list.filter(item => filters.every(f => {
    switch (typeof filter[f]) {
      case 'boolean':
        if (filter[f] === false) {
          return !item[f];
        }
      // also case for filter[f] === true 
      case 'string':
      case 'number':
        return filter[f] === item[f];
      case 'object': // have not implemented yet
      default:
        console.log(`matchFilter do not support ${typeof filter[f]} yet!`)
        return false;
    }
  }));
}

// wallet
export function getWalletProvider() {
  return localStorage.getItem('walletProvider') || '';
}

export function isWalletConnected() {
  const wallet = Wallet.getClientInstance();
  return wallet.isConnected;
}

export const getChainNativeToken = (chainId: number): ITokenObject => {
  return ChainNativeTokenByChainId[chainId];
}