/// <reference path="@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@scom/scom-dapp-container/@ijstech/eth-wallet/index.d.ts" />
/// <reference path="@ijstech/eth-contract/index.d.ts" />
/// <amd-module name="@scom/scom-xchain-bridge-record/store/data/core.ts" />
declare module "@scom/scom-xchain-bridge-record/store/data/core.ts" {
    export interface TokenConstant {
        address: string;
        name: string;
        decimals: number;
        symbol: string;
    }
    export interface ContractSet {
        WETH9: string;
        GOV_TOKEN: string;
        OSWAP_ConfigStore: string;
        TrollRegistry: string;
    }
    export const MainnetMainChain = 56;
    export const TestnetMainChain = 97;
    export const Mainnets: number[];
    export const Testnets: number[];
    export const orderMinOutRate = "0.005";
    export enum VaultType {
        Project = "Project",
        Exchange = "Exchange"
    }
    export interface VaultConstant {
        chainId: number;
        assetToken: TokenConstant;
        vaultRegistryAddress: string;
        vaultAddress: string;
        vaultDecimals?: number;
        softCap: number;
        baseFee: string;
        protocolFee: string;
        transactionFee: string;
        imbalanceFee: string;
    }
    export interface VaultGroupConstant {
        assetName: string;
        vaultType: VaultType;
        vaults: {
            [chainId: number]: VaultConstant;
        };
        deprecated?: boolean;
    }
    export const VaultGroupList: VaultGroupConstant[];
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/avalanche.ts" />
declare module "@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/avalanche.ts" {
    export const Tokens_Avalanche: {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
    }[];
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/bsc.ts" />
declare module "@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/bsc.ts" {
    export const Tokens_BSC: {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
    }[];
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/index.ts" />
declare module "@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/index.ts" {
    export { Tokens_Avalanche } from "@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/avalanche.ts";
    export { Tokens_BSC } from "@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/bsc.ts";
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/data/tokens/testnet/bsc-testnet.ts" />
declare module "@scom/scom-xchain-bridge-record/store/data/tokens/testnet/bsc-testnet.ts" {
    export const Tokens_BSC_Testnet: {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
    }[];
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/data/tokens/testnet/fuji.ts" />
declare module "@scom/scom-xchain-bridge-record/store/data/tokens/testnet/fuji.ts" {
    export const Tokens_Fuji: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/data/tokens/testnet/index.ts" />
declare module "@scom/scom-xchain-bridge-record/store/data/tokens/testnet/index.ts" {
    export { Tokens_BSC_Testnet } from "@scom/scom-xchain-bridge-record/store/data/tokens/testnet/bsc-testnet.ts";
    export { Tokens_Fuji } from "@scom/scom-xchain-bridge-record/store/data/tokens/testnet/fuji.ts";
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/data/tokens/index.ts" />
declare module "@scom/scom-xchain-bridge-record/store/data/tokens/index.ts" {
    import { ITokenObject } from "@scom/scom-token-list";
    const SupportedERC20Tokens: {
        [chainId: number]: ITokenObject[];
    };
    export { SupportedERC20Tokens };
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/data/index.ts" />
declare module "@scom/scom-xchain-bridge-record/store/data/index.ts" {
    export * from "@scom/scom-xchain-bridge-record/store/data/core.ts";
    export { SupportedERC20Tokens } from "@scom/scom-xchain-bridge-record/store/data/tokens/index.ts";
}
/// <amd-module name="@scom/scom-xchain-bridge-record/global/helper.ts" />
declare module "@scom/scom-xchain-bridge-record/global/helper.ts" {
    export enum SITE_ENV {
        DEV = "dev",
        TESTNET = "testnet",
        MAINNET = "mainnet"
    }
    export const DefaultDateTimeFormat = "DD/MM/YYYY HH:mm:ss";
    export const DefaultDateFormat = "DD/MM/YYYY";
    export const formatDate: (date: any, customType?: string, showTimezone?: boolean) => string;
    export const showResultMessage: (result: any, status: 'warning' | 'success' | 'error', content?: string | Error) => void;
}
/// <amd-module name="@scom/scom-xchain-bridge-record/global/common.ts" />
declare module "@scom/scom-xchain-bridge-record/global/common.ts" {
    import { ISendTxEventsOptions } from "@ijstech/eth-wallet";
    import { ITokenObject } from "@scom/scom-token-list";
    export type TokenMapType = {
        [token: string]: ITokenObject;
    };
    export const registerSendTxEvents: (sendTxEventHandlers: ISendTxEventsOptions) => void;
}
/// <amd-module name="@scom/scom-xchain-bridge-record/global/interface.ts" />
declare module "@scom/scom-xchain-bridge-record/global/interface.ts" {
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
}
/// <amd-module name="@scom/scom-xchain-bridge-record/global/index.ts" />
declare module "@scom/scom-xchain-bridge-record/global/index.ts" {
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
    }
    export const enum EventId {
        ConnectWallet = "connectWallet",
        IsWalletConnected = "isWalletConnected",
        IsWalletDisconnected = "IsWalletDisconnected",
        Paid = "Paid",
        chainChanged = "chainChanged",
        SlippageToleranceChanged = "slippageToleranceChanged"
    }
    export { DefaultDateTimeFormat, DefaultDateFormat, formatDate, SITE_ENV, showResultMessage } from "@scom/scom-xchain-bridge-record/global/helper.ts";
    export { registerSendTxEvents, TokenMapType } from "@scom/scom-xchain-bridge-record/global/common.ts";
    export * from "@scom/scom-xchain-bridge-record/global/interface.ts";
}
/// <amd-module name="@scom/scom-xchain-bridge-record/data.json.ts" />
declare module "@scom/scom-xchain-bridge-record/data.json.ts" {
    const _default: {
        infuraId: string;
        defaultBuilderData: {
            assetNames: string[];
            defaultChainId: number;
            networks: {
                chainId: number;
            }[];
            wallets: {
                name: string;
            }[];
            showHeader: boolean;
            showFooter: boolean;
        };
        supportedNetworks: ({
            chainId: number;
            isMainChain: boolean;
            isCrossChainSupported: boolean;
            isTestnet?: undefined;
        } | {
            chainId: number;
            isMainChain: boolean;
            isCrossChainSupported: boolean;
            isTestnet: boolean;
        } | {
            chainId: number;
            isCrossChainSupported: boolean;
            isTestnet: boolean;
            isMainChain?: undefined;
        } | {
            chainId: number;
            isCrossChainSupported: boolean;
            isMainChain?: undefined;
            isTestnet?: undefined;
        })[];
    };
    export default _default;
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/utils.ts" />
declare module "@scom/scom-xchain-bridge-record/store/utils.ts" {
    import { BigNumber, ERC20ApprovalModel } from '@ijstech/eth-wallet';
    import { IExtendedNetwork } from "@scom/scom-xchain-bridge-record/global/index.ts";
    import { VaultConstant, VaultType, TokenConstant } from "@scom/scom-xchain-bridge-record/store/data/core.ts";
    import { ITokenObject } from '@scom/scom-token-list';
    import { INetworkConfig } from '@scom/scom-network-picker';
    export enum WalletPlugin {
        MetaMask = "metamask",
        Coin98 = "coin98",
        TrustWallet = "trustwallet",
        BinanceChainWallet = "binancechainwallet",
        ONTOWallet = "onto",
        WalletConnect = "walletconnect",
        BitKeepWallet = "bitkeepwallet",
        FrontierWallet = "frontierwallet"
    }
    export enum NetworkType {
        Mainnet = 0,
        Testnet = 1,
        NotSupported = 2
    }
    export function getNetworkType(chainId: number): NetworkType;
    export function getNetworksByType(chainId: number): number[];
    export function forEachNumberIndexAwait<T>(list: {
        [index: number]: T;
    }, callbackFn: (item: T, index: number) => Promise<void>): Promise<void>;
    export function forEachNumberIndex<T>(list: {
        [index: number]: T;
    }, callbackFn: (item: T, index: number) => void): void;
    export interface VaultGroupStore {
        assetName: string;
        vaultType: VaultType;
        vaults: {
            [chainId: number]: VaultStore;
        };
        deprecated?: boolean;
    }
    export interface VaultStore extends VaultConstant {
        tokenBalance: BigNumber;
        imbalance: BigNumber;
        ordersLength: number;
        userTokenAmount: BigNumber;
        userOrders: VaultOrderStore[];
    }
    export interface VaultOrderStore {
        id: number;
        status: VaultOrderStatus;
        expire: BigNumber;
        fromOwner: string;
        fromChain: number;
        fromToken: TokenConstant;
        fromAmount: BigNumber;
        fromStatus: ContractVaultOrderStatus;
        toOwner: string;
        toChain: number;
        toToken: TokenConstant;
        toAmount: BigNumber;
        toAmountMin: BigNumber;
        toStatus: ContractVaultOrderStatus;
        protocolFee: string;
    }
    export enum ContractVaultOrderStatus {
        NotSpecified = 0,
        Pending = 1,
        Executed = 2,
        RequestCancel = 3,
        RefundApproved = 4,
        Cancelled = 5,
        RequestAmend = 6
    }
    export enum VaultOrderStatus {
        Pending = 0,
        Executed = 1,
        RequestCancel = 2,
        RefundApproved = 3,
        Cancelled = 4,
        RequestAmend = 5,
        Expired = 6
    }
    export interface VaultOrderItem {
        assetName: string;
        fromVaultAddress: string;
        toVaultAddress: string;
        orderId: number;
        expire: BigNumber;
        fromNetwork: IExtendedNetwork;
        toNetwork: IExtendedNetwork;
        price: string;
        protocolFee: BigNumber;
        fromAmount: string;
        fromToken: TokenConstant;
        toToken: TokenConstant;
        toAmount: string;
        minOutAmount: string;
        sourceVaultToken: TokenConstant;
        sourceVaultInAmount: string;
        statusCode: VaultOrderStatus;
        status: string;
        sender: string;
    }
    export type ProxyAddresses = {
        [key: number]: string;
    };
    export class State {
        defaultChainId: number;
        slippageTolerance: string;
        crossChainTransactionDeadline: number;
        proxyAddresses: ProxyAddresses;
        infuraId: string;
        rpcWalletId: string;
        networkMap: {
            [key: number]: IExtendedNetwork;
        };
        networkConfig: INetworkConfig[];
        vaultGroups: VaultGroupStore[];
        supportedAssetNames: string[];
        approvalModel: ERC20ApprovalModel;
        constructor(options: any);
        initRpcWallet(defaultChainId: number): string;
        getRpcWallet(): import("@ijstech/eth-wallet").IRpcWallet;
        isRpcWalletConnected(): boolean;
        getProxyAddress(chainId?: number): string;
        getNetworkInfo: (chainId: number) => IExtendedNetwork;
        getMatchNetworks: (conditions: NetworkConditions) => IExtendedNetwork[];
        getNetworkExplorerName: (chainId: number) => string;
        viewOnExplorerByTxHash: (chainId: number, txHash: string) => void;
        viewOnExplorerByAddress: (chainId: number, address: string) => void;
        getChainId(): number;
        getSlippageTolerance: () => number;
        setSlippageTolerance: (value: number) => void;
        getCrossChainTransactionDeadline: () => number;
        setCrossChainTransactionDeadline: (value: number) => void;
        setSupportedAssetNames: (value: string[]) => void;
        getSupportedAssetNames: () => string[];
        setVaultGroups: (vaultGroups: VaultGroupStore[]) => void;
        getVaultGroups: () => VaultGroupStore[];
        setNetworkConfig: (networks: INetworkConfig[]) => void;
        getNetworkConfig: () => INetworkConfig[];
        private initData;
    }
    export function isContractVaultOrderStatus(n: number): n is ContractVaultOrderStatus;
    export function isVaultOrderStatus(n: number): n is VaultOrderStatus;
    export function determineOrderStatus(expire: number | BigNumber, fromChainStatus: ContractVaultOrderStatus, toChainStatus: ContractVaultOrderStatus): VaultOrderStatus;
    interface NetworkConditions {
        isDisabled?: boolean;
        isTestnet?: boolean;
        isCrossChainSupported?: boolean;
        isMainChain?: boolean;
    }
    export function getWalletProvider(): string;
    export function isWalletConnected(): boolean;
    export const getChainNativeToken: (chainId: number) => ITokenObject;
}
/// <amd-module name="@scom/scom-xchain-bridge-record/store/index.ts" />
declare module "@scom/scom-xchain-bridge-record/store/index.ts" {
    import { VaultConstant, VaultGroupConstant } from "@scom/scom-xchain-bridge-record/store/data/index.ts";
    import { State } from "@scom/scom-xchain-bridge-record/store/utils.ts";
    export * from "@scom/scom-xchain-bridge-record/store/data/index.ts";
    export const nullAddress = "0x0000000000000000000000000000000000000000";
    export const getTokenIcon: (address: string, chainId: number) => string;
    export const getNetworkImg: (state: State, chainId: number) => string;
    export function findConstantTokenByVault(chainId: number, vaultAddress: string): import("@scom/scom-xchain-bridge-record/store/data/core.ts").TokenConstant;
    export function findConstantVaultGroupByToken(chainId: number, tokenAddress: string): VaultGroupConstant;
    export function findConstantVault(vaultGroup: VaultGroupConstant, chainId: number): VaultConstant;
    export function findConstantToVault(fromChainId: number, tokenAddress: string, toChainId: number): VaultConstant;
    export function findConstantAllAsset(fromChainId: number): VaultConstant[];
    export * from "@scom/scom-xchain-bridge-record/store/utils.ts";
}
/// <amd-module name="@scom/scom-xchain-bridge-record/column.ts" />
declare module "@scom/scom-xchain-bridge-record/column.ts" {
    import { State, VaultOrderItem } from "@scom/scom-xchain-bridge-record/store/index.ts";
    import { Icon, Label, VStack, Panel } from '@ijstech/components';
    const truncateAddress: (address: string, length: number, separator?: string) => string;
    const toTokenIcon: (data: any) => string;
    const viewTransaction: (state: State, chainId: number, txHash: string) => void;
    const bridgeRecordColumns: ({
        title: string;
        fieldName: string;
        onRenderCell: (source: any, data: number, row: VaultOrderItem) => Label;
        type?: undefined;
    } | {
        title: string;
        fieldName: string;
        onRenderCell: (source: any, data: any, row: VaultOrderItem) => VStack;
        type?: undefined;
    } | {
        title: string;
        fieldName: string;
        onRenderCell: (source: any, data: any, row: VaultOrderItem) => Panel;
        type?: undefined;
    } | {
        title: string;
        fieldName: string;
        type: string;
        onRenderCell: (source: any, data: any, row: VaultOrderItem) => Promise<Icon>;
    })[];
    export { bridgeRecordColumns, toTokenIcon, viewTransaction, truncateAddress };
}
/// <amd-module name="@scom/scom-xchain-bridge-record/assets.ts" />
declare module "@scom/scom-xchain-bridge-record/assets.ts" {
    function fullPath(path: string): string;
    const _default_1: {
        fullPath: typeof fullPath;
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-xchain-bridge-record/index.css.ts" />
declare module "@scom/scom-xchain-bridge-record/index.css.ts" {
    export const bridgeStyle: string;
    export const buttonProps: {
        height: string;
        minHeight: number;
        background: {
            color: string;
        };
        font: {
            color: string;
            weight: number;
        };
        padding: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        };
    };
}
/// <amd-module name="@scom/scom-xchain-bridge-record/languages/main.json.ts" />
declare module "@scom/scom-xchain-bridge-record/languages/main.json.ts" {
    const _default_2: {
        en: {
            data_last_updated_0_seconds_ago: string;
            data_last_updated_seconds_ago: string;
            latest_swap: string;
            no_data: string;
            please_connect_with_your_wallet: string;
            oldest_swap: string;
            destination_chain: string;
            source_chain: string;
            token_group: string;
            confirming: string;
            request_cancel: string;
            withdraw: string;
            "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": string;
            the_token_will_be_returned_to_your_wallet_after_withdrawal: string;
            "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": string;
            "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": string;
            amend_order: string;
            minimum_receive: string;
            the_address_has_been_copied: string;
            loading: string;
            withdraw_amount: string;
            switch_network: string;
            token_receive: string;
            expected_receive: string;
            confirm: string;
            token_swap: string;
            from: string;
            to: string;
            status: string;
            pending: string;
            executed: string;
            refund_approved: string;
            cancelled: string;
            cancel_approved: string;
            request_amend: string;
            expired: string;
            sender_address: string;
            amount_lower_than_base_fee: string;
        };
        "zh-hant": {
            data_last_updated_0_seconds_ago: string;
            data_last_updated_seconds_ago: string;
            latest_swap: string;
            no_data: string;
            please_connect_with_your_wallet: string;
            oldest_swap: string;
            destination_chain: string;
            source_chain: string;
            token_group: string;
            confirming: string;
            request_cancel: string;
            withdraw: string;
            "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": string;
            the_token_will_be_returned_to_your_wallet_after_withdrawal: string;
            "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": string;
            "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": string;
            amend_order: string;
            minimum_receive: string;
            the_address_has_been_copied: string;
            loading: string;
            withdraw_amount: string;
            switch_network: string;
            token_receive: string;
            expected_receive: string;
            confirm: string;
            token_swap: string;
            from: string;
            to: string;
            status: string;
            pending: string;
            executed: string;
            refund_approved: string;
            cancelled: string;
            cancel_approved: string;
            request_amend: string;
            expired: string;
            sender_address: string;
            amount_lower_than_base_fee: string;
        };
        vi: {
            data_last_updated_0_seconds_ago: string;
            data_last_updated_seconds_ago: string;
            latest_swap: string;
            no_data: string;
            please_connect_with_your_wallet: string;
            oldest_swap: string;
            destination_chain: string;
            source_chain: string;
            token_group: string;
            confirming: string;
            request_cancel: string;
            withdraw: string;
            "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": string;
            the_token_will_be_returned_to_your_wallet_after_withdrawal: string;
            "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": string;
            "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": string;
            amend_order: string;
            minimum_receive: string;
            the_address_has_been_copied: string;
            loading: string;
            withdraw_amount: string;
            switch_network: string;
            token_receive: string;
            expected_receive: string;
            confirm: string;
            token_swap: string;
            from: string;
            to: string;
            status: string;
            pending: string;
            executed: string;
            refund_approved: string;
            cancelled: string;
            cancel_approved: string;
            request_amend: string;
            expired: string;
            sender_address: string;
            amount_lower_than_base_fee: string;
        };
    };
    export default _default_2;
}
/// <amd-module name="@scom/scom-xchain-bridge-record/languages/index.ts" />
declare module "@scom/scom-xchain-bridge-record/languages/index.ts" {
    import mainJson from "@scom/scom-xchain-bridge-record/languages/main.json.ts";
    import configJson from "@scom/scom-xchain-bridge-record/languages/main.json.ts";
    export { mainJson, configJson };
}
/// <amd-module name="@scom/scom-xchain-bridge-record/crosschain-utils/API.ts" />
declare module "@scom/scom-xchain-bridge-record/crosschain-utils/API.ts" {
    import { VaultGroupStore, VaultStore, State } from "@scom/scom-xchain-bridge-record/store/index.ts";
    import { Wallet, BigNumber } from "@ijstech/eth-wallet";
    import '@ijstech/eth-contract';
    const initCrossChainWallet: (state: State, chainId: number) => Wallet;
    function isSupportedCrossChain(fromChain: number, toChain: number): boolean;
    function getFeeAmounts(vault: VaultStore, amountIn: BigNumber): {
        totalFeeAmount: BigNumber;
        baseFeeAmount: BigNumber;
        protocolFeeAmount: BigNumber;
        transactionFeeAmount: BigNumber;
        imbalanceFeeAmount: BigNumber;
    };
    interface Route {
        fromVault: VaultStore;
        fromAmount: BigNumber;
        toVault: VaultStore;
        toAmount: BigNumber;
        feeAmounts: {
            totalFeeAmount: BigNumber;
            baseFeeAmount: BigNumber;
            protocolFeeAmount: BigNumber;
            transactionFeeAmount: BigNumber;
            imbalanceFeeAmount: BigNumber;
        };
    }
    function getRoute(swapInfo: SwapInfo): Route;
    interface SwapInfo {
        vaultGroup: VaultGroupStore;
        toChainId: number;
        fromChainId: number;
        inAmount: BigNumber;
    }
    function findVaultGroupByToken(state: State, chainId: number, tokenAddress: string): Promise<VaultGroupStore>;
    function getVaultGroups(state: State, isUpdate?: boolean): Promise<VaultGroupStore[]>;
    function getVaultGroupsUpdateUserOrders(state: State, isUpdate?: boolean): Promise<VaultGroupStore[]>;
    export { isSupportedCrossChain, getFeeAmounts, getVaultGroups, getVaultGroupsUpdateUserOrders, initCrossChainWallet, Route, getRoute, findVaultGroupByToken, };
}
/// <amd-module name="@scom/scom-xchain-bridge-record/crosschain-utils/index.ts" />
declare module "@scom/scom-xchain-bridge-record/crosschain-utils/index.ts" {
    export * from "@scom/scom-xchain-bridge-record/crosschain-utils/API.ts";
}
/// <amd-module name="@scom/scom-xchain-bridge-record/API.ts" />
declare module "@scom/scom-xchain-bridge-record/API.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    import { State, VaultOrderItem } from "@scom/scom-xchain-bridge-record/store/index.ts";
    import { ITokenObject } from "@scom/scom-token-list";
    import { I18n } from "@ijstech/components";
    const getAllUserOrders: (state: State, i18n: I18n) => Promise<{
        orders: VaultOrderItem[];
        total: number;
    }>;
    interface IRequestCancelOrderParams {
        vaultAddress: string;
        sourceChainId: number;
        orderId: number;
    }
    const requestCancelOrder: (params: IRequestCancelOrderParams) => Promise<import("@ijstech/eth-contract").TransactionReceipt>;
    interface IWithdrawUnexecutedOrderParams {
        vaultAddress: string;
        orderId: number;
    }
    const withdrawUnexecutedOrder: (params: IWithdrawUnexecutedOrderParams) => Promise<import("@ijstech/eth-contract").TransactionReceipt>;
    interface IRequestAmendOrderParams {
        vaultAddress: string;
        orderId: number;
        tokenOut: ITokenObject;
        minAmountOut: number | BigNumber;
    }
    const requestAmendOrder: (state: State, params: IRequestAmendOrderParams, callbackFn?: (err: Error, receipt?: string) => Promise<void>) => Promise<false | import("@ijstech/eth-contract").TransactionReceipt>;
    export { getAllUserOrders, IRequestCancelOrderParams, requestCancelOrder, IWithdrawUnexecutedOrderParams, withdrawUnexecutedOrder, IRequestAmendOrderParams, requestAmendOrder };
}
/// <amd-module name="@scom/scom-xchain-bridge-record/formSchema.ts" />
declare module "@scom/scom-xchain-bridge-record/formSchema.ts" {
    export function getBuilderSchema(): {
        dataSchema: {
            type: string;
            properties: {
                assetNames: {
                    title: string;
                    type: string;
                    required: boolean;
                    items: {
                        type: string;
                        maxItems: number;
                        title: string;
                        enum: string[];
                        required: boolean;
                    };
                };
            };
        };
        uiSchema: {
            type: string;
            elements: {
                type: string;
                scope: string;
                detail: {
                    type: string;
                };
            }[];
        };
    };
}
/// <amd-module name="@scom/scom-xchain-bridge-record/model.ts" />
declare module "@scom/scom-xchain-bridge-record/model.ts" {
    import { Module } from "@ijstech/components";
    import { State, VaultOrderItem } from "@scom/scom-xchain-bridge-record/store/index.ts";
    import { IExtendedNetwork, IXchainBridgeRecordData, TokenMapType } from "@scom/scom-xchain-bridge-record/global/index.ts";
    import { IWalletPlugin } from "@scom/scom-wallet-modal";
    import { INetworkConfig } from "@scom/scom-network-picker";
    import { ITokenObject } from "@scom/scom-token-list";
    import { Route } from "@scom/scom-xchain-bridge-record/crosschain-utils/index.ts";
    export const pageSize = 5;
    export const enum ActionType {
        Cancel = 0,
        Resubmit = 1,
        Withdraw = 2
    }
    export const enum DateOptions {
        LATEST = "Latest",
        OLDEST = "Oldest"
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
        private module;
        private state;
        private _data;
        private options;
        private _switchChainId;
        private _chainId;
        private _isCancel;
        private _resubmitToken;
        private _orderHash;
        private _needToRefresh;
        private _selectedItem;
        private _filter;
        private _orders;
        private _newMinAmountOut;
        private _targetTokenBalances;
        private _targetTokenMap;
        private _itemStart;
        private _itemEnd;
        private _currentAction;
        private _sortByDate;
        private _initializedState;
        constructor(module: Module, state: State, options: IOptions);
        get defaultChainId(): number;
        set defaultChainId(value: number);
        get wallets(): IWalletPlugin[];
        set wallets(value: IWalletPlugin[]);
        get networks(): INetworkConfig[];
        set networks(value: INetworkConfig[]);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        get assetNames(): string[];
        set assetNames(value: string[]);
        get urlParamsEnabled(): boolean;
        set urlParamsEnabled(value: boolean);
        private get supportedChainIds();
        setData(value: IXchainBridgeRecordData): Promise<void>;
        getData(): IXchainBridgeRecordData;
        getTag(): any;
        setTag(value: any): void;
        private updateTag;
        getConfigurators(): {
            name: string;
            target: string;
            getActions: any;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        }[];
        private getActions;
        get switchChainId(): number;
        set switchChainId(value: number);
        get chainId(): number;
        set chainId(value: number);
        get isCancel(): boolean;
        set isCancel(value: boolean);
        get resubmitToken(): ITokenObject;
        set resubmitToken(value: ITokenObject);
        get orderHash(): string;
        set orderHash(value: string);
        get needToRefresh(): boolean;
        set needToRefresh(value: boolean);
        get selectedItem(): VaultOrderItem;
        set selectedItem(value: VaultOrderItem);
        get filter(): IVaultOrderRecordFilter;
        set filter(value: IVaultOrderRecordFilter);
        get orders(): VaultOrderItem[];
        set orders(value: VaultOrderItem[]);
        get newMinAmountOut(): string;
        set newMinAmountOut(value: string);
        get targetTokenBalances(): any;
        set targetTokenBalances(value: any);
        get targetTokenMap(): TokenMapType;
        set targetTokenMap(value: TokenMapType);
        get itemStart(): number;
        set itemStart(value: number);
        get itemEnd(): number;
        set itemEnd(value: number);
        get currentAction(): ActionType;
        set currentAction(value: ActionType);
        get sortByDate(): DateOptions;
        set sortByDate(value: DateOptions);
        get initializedState(): {
            chainId: number;
            connected: boolean;
            loading: boolean;
        };
        set initializedState(value: {
            chainId: number;
            connected: boolean;
            loading: boolean;
        });
        get networkList(): IExtendedNetwork[];
        get dataListFiltered(): VaultOrderItem[];
        get paginatedData(): VaultOrderItem[];
        get targetTokenList(): ITokenObject[];
        removeCurrentValues(): void;
        removeUrlParams(): void;
        updateUrlParams(record: VaultOrderItem): void;
        handleUrlParams(): void;
        getAllUserOrders(): Promise<void>;
        getRoute(): Promise<Route>;
        findConstantToVault(): import("@scom/scom-xchain-bridge-record/store/index.ts").VaultConstant;
        getTargetInfoObj(targetChainId: number): Promise<void>;
        requestCancelOrder(): Promise<void>;
        requestAmendOrder(callback?: (err: Error, receipt?: string) => Promise<void>): Promise<void>;
        withdrawUnexecutedOrder(): Promise<void>;
    }
}
/// <amd-module name="@scom/scom-xchain-bridge-record" />
declare module "@scom/scom-xchain-bridge-record" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    import { IXchainBridgeRecordData } from "@scom/scom-xchain-bridge-record/global/index.ts";
    import { IWalletPlugin } from '@scom/scom-wallet-modal';
    import { INetworkConfig } from '@scom/scom-network-picker';
    import { BlockNoteEditor, BlockNoteSpecs, callbackFnType, executeFnType } from '@scom/scom-blocknote-sdk';
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
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-xchain-bridge-record']: ScomXchainBridgeRecordElement;
            }
        }
    }
    export default class ScomXchainBridgeRecord extends Module implements BlockNoteSpecs {
        private bridgeRecordTable;
        private mobilePanel;
        private hStackPagination;
        private largeLoading;
        private requestCancelModal;
        private txStatusModal;
        private titleModalLabel;
        private lbAmendOrder;
        private confirmNetwork;
        private switchNetworkPnl;
        private networkNameLabel;
        private networkNameVal;
        private withdrawAmount;
        private noteCancelOrWithdraw;
        private noteNetwork;
        private resubmitOrderModal;
        private tokenReceiveSelection;
        private resubmitConfirmNetwork;
        private resubmitConfirmPnl;
        private resubmitExpectedReceive;
        private lbResubmitError;
        private btnResubmit;
        private btnResubmitNetwork;
        private wrapperTimer;
        private _lastUpdated;
        private lastUpdatedText;
        private paging;
        private iconRefresh;
        private timer;
        private $eventBus;
        private oldSource;
        private oldDestination;
        private searchSourceBtn;
        private searchDestinationBtn;
        private sortDateBtn;
        private btnLatestSwap;
        private btnOldestSwap;
        private searchTokenGroupBtn;
        private searchSourceModal;
        private searchDestinationModal;
        private sortDateModal;
        private searchTokenGroupModal;
        private assetName;
        private sourceChain;
        private destinationChain;
        private emptyMsg;
        private btnElm;
        private isModalRefreshed;
        private bridgeRecordMobile;
        private listPagination;
        private dappContainer;
        private mdWallet;
        private state;
        private clientEvents;
        private model;
        tag: any;
        constructor(parent?: Container, options?: ScomXchainBridgeRecordElement);
        onHide(): void;
        private registerEvent;
        get defaultChainId(): number;
        set defaultChainId(value: number);
        get wallets(): IWalletPlugin[];
        set wallets(value: IWalletPlugin[]);
        get networks(): INetworkConfig[];
        set networks(value: INetworkConfig[]);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        get assetNames(): string[];
        set assetNames(value: string[]);
        get urlParamsEnabled(): boolean;
        set urlParamsEnabled(value: boolean);
        set width(value: string | number);
        getConfigurators(): {
            name: string;
            target: string;
            getActions: any;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        }[];
        getConfigJson(): {
            en: {
                data_last_updated_0_seconds_ago: string;
                data_last_updated_seconds_ago: string;
                latest_swap: string;
                no_data: string;
                please_connect_with_your_wallet: string;
                oldest_swap: string;
                destination_chain: string;
                source_chain: string;
                token_group: string;
                confirming: string;
                request_cancel: string;
                withdraw: string;
                "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": string;
                the_token_will_be_returned_to_your_wallet_after_withdrawal: string;
                "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": string;
                "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": string;
                amend_order: string;
                minimum_receive: string;
                the_address_has_been_copied: string;
                loading: string;
                withdraw_amount: string;
                switch_network: string;
                token_receive: string;
                expected_receive: string;
                confirm: string;
                token_swap: string;
                from: string;
                to: string;
                status: string;
                pending: string;
                executed: string;
                refund_approved: string;
                cancelled: string;
                cancel_approved: string;
                request_amend: string;
                expired: string;
                sender_address: string;
                amount_lower_than_base_fee: string;
            };
            "zh-hant": {
                data_last_updated_0_seconds_ago: string;
                data_last_updated_seconds_ago: string;
                latest_swap: string;
                no_data: string;
                please_connect_with_your_wallet: string;
                oldest_swap: string;
                destination_chain: string;
                source_chain: string;
                token_group: string;
                confirming: string;
                request_cancel: string;
                withdraw: string;
                "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": string;
                the_token_will_be_returned_to_your_wallet_after_withdrawal: string;
                "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": string;
                "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": string;
                amend_order: string;
                minimum_receive: string;
                the_address_has_been_copied: string;
                loading: string;
                withdraw_amount: string;
                switch_network: string;
                token_receive: string;
                expected_receive: string;
                confirm: string;
                token_swap: string;
                from: string;
                to: string;
                status: string;
                pending: string;
                executed: string;
                refund_approved: string;
                cancelled: string;
                cancel_approved: string;
                request_amend: string;
                expired: string;
                sender_address: string;
                amount_lower_than_base_fee: string;
            };
            vi: {
                data_last_updated_0_seconds_ago: string;
                data_last_updated_seconds_ago: string;
                latest_swap: string;
                no_data: string;
                please_connect_with_your_wallet: string;
                oldest_swap: string;
                destination_chain: string;
                source_chain: string;
                token_group: string;
                confirming: string;
                request_cancel: string;
                withdraw: string;
                "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": string;
                the_token_will_be_returned_to_your_wallet_after_withdrawal: string;
                "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": string;
                "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": string;
                amend_order: string;
                minimum_receive: string;
                the_address_has_been_copied: string;
                loading: string;
                withdraw_amount: string;
                switch_network: string;
                token_receive: string;
                expected_receive: string;
                confirm: string;
                token_swap: string;
                from: string;
                to: string;
                status: string;
                pending: string;
                executed: string;
                refund_approved: string;
                cancelled: string;
                cancel_approved: string;
                request_amend: string;
                expired: string;
                sender_address: string;
                amount_lower_than_base_fee: string;
            };
        };
        addBlock(blocknote: any, executeFn: executeFnType, callbackFn?: callbackFnType): {
            block: any;
            slashItem: {
                name: string;
                execute: (editor: BlockNoteEditor) => void;
                aliases: string[];
                group: string;
                icon: {
                    name: string;
                };
                hint: string;
            };
            moduleData: {
                name: string;
                localPath: string;
            };
        };
        private resetRpcWallet;
        removeRpcWalletEvents(): void;
        getData(): IXchainBridgeRecordData;
        setData(value: IXchainBridgeRecordData): Promise<void>;
        getTag(): any;
        setTag(value: any): Promise<void>;
        private setContainerTag;
        private updateStyle;
        private updateTheme;
        private onChainChange;
        onWalletConnect: () => Promise<void>;
        private onUpdateReceiveVal;
        get lastUpdated(): number;
        set lastUpdated(value: number);
        private onSelectIndex;
        private updatePageNumber;
        private refreshData;
        private refreshUI;
        private renderEmpty;
        private onChangeSorting;
        private onChangeSource;
        private onChangeDestination;
        private onChangeTokenGroup;
        private generateData;
        private resetData;
        private expandRecord;
        private updateRecords;
        private renderRecords;
        private switchNetworkByWallet;
        private resizeLayout;
        private onConfirm;
        private onSwitchNetwork;
        private updateSwitchButton;
        private showCancelOrWithdrawModal;
        private showResubmitModal;
        private closeRequestCancel;
        private closeResubmitModal;
        private resetReceiveVal;
        private updateReceiveVal;
        private onRefresh;
        private renderFilterButton;
        private onRenderDataMobile;
        private onExpandedRowRender;
        private onCellClick;
        private onShowFilter;
        onLoad(): Promise<void>;
        private initModel;
        private isEmptyData;
        init(): Promise<void>;
        render(): any;
    }
}
