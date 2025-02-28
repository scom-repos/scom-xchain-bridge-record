import { IWalletPlugin } from '@scom/scom-wallet-modal';

export interface INetworkConfig {
  chainName?: string;
  chainId: number;
}

export interface IXchainBridgeRecordData {
  defaultChainId: number;
  wallets: IWalletPlugin[];
  networks: INetworkConfig[];
  showHeader?: boolean;
  showFooter?: boolean;
  urlParamsEnabled?: boolean;
  assetNames: string[];
}