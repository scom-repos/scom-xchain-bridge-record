import { INetwork } from '@ijstech/eth-wallet';

export interface IExtendedNetwork extends INetwork {
  shortName?: string;
  isDisabled?: boolean;
  isMainChain?: boolean;
  isCrossChainSupported?: boolean;
  explorerName?: string;
  explorerTxUrl?: string;
  explorerAddressUrl?: string;
  isTestnet?: boolean;
};

export const enum EventId {
  ConnectWallet = 'connectWallet',
  IsWalletConnected = 'isWalletConnected',
  IsWalletDisconnected = 'IsWalletDisconnected',
  Paid = 'Paid',
  chainChanged = 'chainChanged',
  SlippageToleranceChanged = 'slippageToleranceChanged',
}

export {
  DefaultDateTimeFormat,
  DefaultDateFormat,
  formatDate,
  SITE_ENV,
  showResultMessage
} from './helper';

export {
  registerSendTxEvents,
  TokenMapType
} from './common';

export * from './interface';