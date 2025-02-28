var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-xchain-bridge-record/store/data/core.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VaultGroupList = exports.VaultType = exports.orderMinOutRate = exports.Testnets = exports.Mainnets = exports.TestnetMainChain = exports.MainnetMainChain = void 0;
    exports.MainnetMainChain = 56;
    exports.TestnetMainChain = 97;
    exports.Mainnets = [56, 43114];
    exports.Testnets = [97, 43113];
    exports.orderMinOutRate = "0.005";
    var VaultType;
    (function (VaultType) {
        VaultType["Project"] = "Project";
        VaultType["Exchange"] = "Exchange";
    })(VaultType = exports.VaultType || (exports.VaultType = {}));
    ;
    exports.VaultGroupList = [
        {
            assetName: "OSWAP",
            vaultType: VaultType.Project,
            vaults: {
                97: {
                    chainId: 97,
                    assetToken: {
                        name: "OpenSwap",
                        symbol: "OSWAP",
                        address: "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
                        decimals: 18,
                    },
                    vaultRegistryAddress: "0x6991c11980C2F2096f6a9017c7032F4394aFdf94",
                    vaultAddress: "0x6E10d62dd0FD6e7A9F4Dd027F5BCf107663cb73f",
                    softCap: 30000,
                    baseFee: "1",
                    protocolFee: "0.001",
                    transactionFee: "0.001",
                    imbalanceFee: "0.001",
                },
                43113: {
                    chainId: 43113,
                    assetToken: {
                        name: "OpenSwap",
                        symbol: "OSWAP",
                        address: "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                        decimals: 18,
                    },
                    vaultRegistryAddress: "0x1a90D8aEAd171C58adf3De15b814d51A65829D60",
                    vaultAddress: "0xB788b29C563D464486C52DA476098e880C0c1fA8",
                    softCap: 30000,
                    baseFee: "1",
                    protocolFee: "0.001",
                    transactionFee: "0.001",
                    imbalanceFee: "0.001",
                },
            }
        },
        {
            assetName: "ABC",
            vaultType: VaultType.Project,
            vaults: {
                97: {
                    chainId: 97,
                    assetToken: {
                        name: "ABC",
                        symbol: "ABC",
                        address: "0xE36d2875B3C02ACFeFB8F20F2FeFCD727222B73F",
                        decimals: 18,
                    },
                    vaultRegistryAddress: "0x010a273131428538005602555C24fb58737A71A4",
                    vaultAddress: "0x358664aa6c270C250e1664482655142ea5a2Cda0",
                    softCap: 30000,
                    baseFee: "0",
                    protocolFee: "0.002",
                    transactionFee: "0.001",
                    imbalanceFee: "0.001",
                },
                43113: {
                    chainId: 43113,
                    assetToken: {
                        name: "ABC",
                        symbol: "ABC",
                        address: "0x34eCa87583F451eaA4672ce3E1F921C7fD3F5D03",
                        decimals: 18,
                    },
                    vaultRegistryAddress: "0x06f66a062cc94feab258f4cbdfd7020d9e7ebe10",
                    vaultAddress: "0xb985cc325aa7ec630d52065b6620f1bc336c85bf",
                    softCap: 30000,
                    baseFee: "0",
                    protocolFee: "0.002",
                    transactionFee: "0.001",
                    imbalanceFee: "0.001",
                },
            }
        }
    ];
});
define("@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/avalanche.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_Avalanche = void 0;
    ///<amd-module name='@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/avalanche.ts'/> 
    exports.Tokens_Avalanche = [
        {
            "name": "OpenSwap",
            "symbol": "OSWAP",
            "address": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
            "decimals": 18,
            "isCommon": true
        },
        { "address": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
            "name": "Tether USD",
            "symbol": "USDT.e",
            "decimals": 6,
            "isCommon": true
        },
    ];
});
define("@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/bsc.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_BSC = void 0;
    ///<amd-module name='@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/bsc.ts'/> 
    exports.Tokens_BSC = [
        {
            "name": "OpenSwap",
            "symbol": "OSWAP",
            "address": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
            "decimals": 18,
            "isCommon": true
        },
        {
            "name": "Binance Pegged USDT",
            "symbol": "USDT",
            "address": "0x55d398326f99059fF775485246999027B3197955",
            "decimals": 18,
            "isCommon": true
        }
    ];
});
define("@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/index.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/avalanche.ts", "@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/bsc.ts"], function (require, exports, avalanche_1, bsc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_BSC = exports.Tokens_Avalanche = void 0;
    Object.defineProperty(exports, "Tokens_Avalanche", { enumerable: true, get: function () { return avalanche_1.Tokens_Avalanche; } });
    Object.defineProperty(exports, "Tokens_BSC", { enumerable: true, get: function () { return bsc_1.Tokens_BSC; } });
});
define("@scom/scom-xchain-bridge-record/store/data/tokens/testnet/bsc-testnet.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_BSC_Testnet = void 0;
    ///<amd-module name='@scom/scom-xchain-bridge-record/store/data/tokens/testnet/bsc-testnet.ts'/> 
    exports.Tokens_BSC_Testnet = [
        {
            "name": "USDT",
            "address": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
            "symbol": "USDT",
            "decimals": 6,
            "isCommon": true
        },
        {
            "name": "OpenSwap",
            "address": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
            "symbol": "OSWAP",
            "decimals": 18,
            "isCommon": true
        },
        {
            name: "ABC",
            symbol: "ABC",
            address: "0xE36d2875B3C02ACFeFB8F20F2FeFCD727222B73F",
            decimals: 18,
            isCommon: true
        }
    ];
});
define("@scom/scom-xchain-bridge-record/store/data/tokens/testnet/fuji.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_Fuji = void 0;
    ///<amd-module name='@scom/scom-xchain-bridge-record/store/data/tokens/testnet/fuji.ts'/> 
    exports.Tokens_Fuji = [
        {
            "name": "OpenSwap",
            "address": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
            "symbol": "OSWAP",
            "decimals": 18,
            "isCommon": true
        },
        {
            "name": "Tether USD",
            "address": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
            "symbol": "USDT.e",
            "decimals": 6
        },
        {
            name: "ABC",
            symbol: "ABC",
            address: "0x34eCa87583F451eaA4672ce3E1F921C7fD3F5D03",
            decimals: 18,
            isCommon: true
        }
    ];
});
define("@scom/scom-xchain-bridge-record/store/data/tokens/testnet/index.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/store/data/tokens/testnet/bsc-testnet.ts", "@scom/scom-xchain-bridge-record/store/data/tokens/testnet/fuji.ts"], function (require, exports, bsc_testnet_1, fuji_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens_Fuji = exports.Tokens_BSC_Testnet = void 0;
    Object.defineProperty(exports, "Tokens_BSC_Testnet", { enumerable: true, get: function () { return bsc_testnet_1.Tokens_BSC_Testnet; } });
    Object.defineProperty(exports, "Tokens_Fuji", { enumerable: true, get: function () { return fuji_1.Tokens_Fuji; } });
});
define("@scom/scom-xchain-bridge-record/store/data/tokens/index.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/store/data/tokens/mainnet/index.ts", "@scom/scom-xchain-bridge-record/store/data/tokens/testnet/index.ts"], function (require, exports, index_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupportedERC20Tokens = void 0;
    const SupportedERC20Tokens = {
        56: index_1.Tokens_BSC.map(v => { return { ...v, chainId: 56 }; }),
        97: index_2.Tokens_BSC_Testnet.map(v => { return { ...v, chainId: 97 }; }),
        43113: index_2.Tokens_Fuji.map(v => { return { ...v, chainId: 43113 }; }),
        43114: index_1.Tokens_Avalanche.map(v => { return { ...v, chainId: 43114 }; }),
    };
    exports.SupportedERC20Tokens = SupportedERC20Tokens;
});
define("@scom/scom-xchain-bridge-record/store/data/index.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/store/data/core.ts", "@scom/scom-xchain-bridge-record/store/data/tokens/index.ts"], function (require, exports, core_1, index_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupportedERC20Tokens = void 0;
    ///<amd-module name='@scom/scom-xchain-bridge-record/store/data/index.ts'/> 
    __exportStar(core_1, exports);
    Object.defineProperty(exports, "SupportedERC20Tokens", { enumerable: true, get: function () { return index_3.SupportedERC20Tokens; } });
});
define("@scom/scom-xchain-bridge-record/global/helper.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.showResultMessage = exports.formatDate = exports.DefaultDateFormat = exports.DefaultDateTimeFormat = exports.SITE_ENV = void 0;
    var SITE_ENV;
    (function (SITE_ENV) {
        SITE_ENV["DEV"] = "dev";
        SITE_ENV["TESTNET"] = "testnet";
        SITE_ENV["MAINNET"] = "mainnet";
    })(SITE_ENV = exports.SITE_ENV || (exports.SITE_ENV = {}));
    exports.DefaultDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';
    exports.DefaultDateFormat = 'DD/MM/YYYY';
    const formatDate = (date, customType, showTimezone) => {
        const formatType = customType || exports.DefaultDateFormat;
        const formatted = (0, components_1.moment)(date).format(formatType);
        if (showTimezone) {
            let offsetHour = (0, components_1.moment)().utcOffset() / 60;
            //will look like UTC-2 UTC+2 UTC+0
            return `${formatted} (UTC${offsetHour >= 0 ? "+" : ""}${offsetHour})`;
        }
        return formatted;
    };
    exports.formatDate = formatDate;
    const showResultMessage = (result, status, content) => {
        if (!result)
            return;
        let params = { status };
        if (status === 'success') {
            params.txtHash = content;
        }
        else {
            params.content = content;
        }
        result.message = { ...params };
        result.showModal();
    };
    exports.showResultMessage = showResultMessage;
});
define("@scom/scom-xchain-bridge-record/global/common.ts", ["require", "exports", "@ijstech/eth-wallet"], function (require, exports, eth_wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.registerSendTxEvents = void 0;
    const registerSendTxEvents = (sendTxEventHandlers) => {
        const wallet = eth_wallet_1.Wallet.getClientInstance();
        wallet.registerSendTxEvents({
            transactionHash: (error, receipt) => {
                if (sendTxEventHandlers.transactionHash) {
                    sendTxEventHandlers.transactionHash(error, receipt);
                }
            },
            confirmation: (receipt) => {
                if (sendTxEventHandlers.confirmation) {
                    sendTxEventHandlers.confirmation(receipt);
                }
            },
        });
    };
    exports.registerSendTxEvents = registerSendTxEvents;
});
define("@scom/scom-xchain-bridge-record/global/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-xchain-bridge-record/global/index.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/global/helper.ts", "@scom/scom-xchain-bridge-record/global/common.ts", "@scom/scom-xchain-bridge-record/global/interface.ts"], function (require, exports, helper_1, common_1, interface_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.registerSendTxEvents = exports.showResultMessage = exports.SITE_ENV = exports.formatDate = exports.DefaultDateFormat = exports.DefaultDateTimeFormat = void 0;
    ;
    Object.defineProperty(exports, "DefaultDateTimeFormat", { enumerable: true, get: function () { return helper_1.DefaultDateTimeFormat; } });
    Object.defineProperty(exports, "DefaultDateFormat", { enumerable: true, get: function () { return helper_1.DefaultDateFormat; } });
    Object.defineProperty(exports, "formatDate", { enumerable: true, get: function () { return helper_1.formatDate; } });
    Object.defineProperty(exports, "SITE_ENV", { enumerable: true, get: function () { return helper_1.SITE_ENV; } });
    Object.defineProperty(exports, "showResultMessage", { enumerable: true, get: function () { return helper_1.showResultMessage; } });
    Object.defineProperty(exports, "registerSendTxEvents", { enumerable: true, get: function () { return common_1.registerSendTxEvents; } });
    __exportStar(interface_1, exports);
});
define("@scom/scom-xchain-bridge-record/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-xchain-bridge-record/data.json.ts'/> 
    const InfuraId = "adc596bf88b648e2a8902bc9093930c5";
    exports.default = {
        "infuraId": InfuraId,
        "defaultBuilderData": {
            "assetNames": [
                "OSWAP",
                "ABC"
            ],
            "defaultChainId": 43113,
            "networks": [
                {
                    "chainId": 43113
                },
                {
                    "chainId": 97
                }
            ],
            "wallets": [
                {
                    "name": "metamask"
                }
            ],
            "showHeader": true,
            "showFooter": true
        },
        "supportedNetworks": [
            {
                "chainId": 56,
                "isMainChain": true,
                "isCrossChainSupported": true
            },
            {
                "chainId": 97,
                "isMainChain": true,
                "isCrossChainSupported": true,
                "isTestnet": true
            },
            {
                "chainId": 43113,
                "isCrossChainSupported": true,
                "isTestnet": true
            },
            {
                "chainId": 43114,
                "isCrossChainSupported": true
            }
        ]
    };
});
define("@scom/scom-xchain-bridge-record/store/utils.ts", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-network-list", "@scom/scom-xchain-bridge-record/data.json.ts", "@scom/scom-xchain-bridge-record/store/data/core.ts", "@scom/scom-token-list"], function (require, exports, components_2, eth_wallet_2, scom_network_list_1, data_json_1, core_2, scom_token_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getChainNativeToken = exports.isWalletConnected = exports.getWalletProvider = exports.determineOrderStatus = exports.isVaultOrderStatus = exports.isContractVaultOrderStatus = exports.State = exports.VaultOrderStatus = exports.ContractVaultOrderStatus = exports.forEachNumberIndex = exports.forEachNumberIndexAwait = exports.getNetworksByType = exports.getNetworkType = exports.NetworkType = exports.WalletPlugin = void 0;
    var WalletPlugin;
    (function (WalletPlugin) {
        WalletPlugin["MetaMask"] = "metamask";
        WalletPlugin["Coin98"] = "coin98";
        WalletPlugin["TrustWallet"] = "trustwallet";
        WalletPlugin["BinanceChainWallet"] = "binancechainwallet";
        WalletPlugin["ONTOWallet"] = "onto";
        WalletPlugin["WalletConnect"] = "walletconnect";
        WalletPlugin["BitKeepWallet"] = "bitkeepwallet";
        WalletPlugin["FrontierWallet"] = "frontierwallet";
    })(WalletPlugin = exports.WalletPlugin || (exports.WalletPlugin = {}));
    var NetworkType;
    (function (NetworkType) {
        NetworkType[NetworkType["Mainnet"] = 0] = "Mainnet";
        NetworkType[NetworkType["Testnet"] = 1] = "Testnet";
        NetworkType[NetworkType["NotSupported"] = 2] = "NotSupported";
    })(NetworkType = exports.NetworkType || (exports.NetworkType = {}));
    function getNetworkType(chainId) {
        if (core_2.Mainnets.some(network => network === chainId)) {
            return NetworkType.Mainnet;
        }
        if (core_2.Testnets.some(network => network === chainId)) {
            return NetworkType.Testnet;
        }
        return NetworkType.NotSupported;
    }
    exports.getNetworkType = getNetworkType;
    function getNetworksByType(chainId) {
        switch (getNetworkType(chainId)) {
            case NetworkType.Mainnet:
                return core_2.Mainnets;
            case NetworkType.Testnet:
                return core_2.Testnets;
        }
        return [];
    }
    exports.getNetworksByType = getNetworksByType;
    async function forEachNumberIndexAwait(list, callbackFn) {
        for (const chainId in list) {
            if (Object.prototype.hasOwnProperty.call(list, chainId)
                && new eth_wallet_2.BigNumber(chainId).isInteger())
                await callbackFn(list[chainId], Number(chainId));
        }
    }
    exports.forEachNumberIndexAwait = forEachNumberIndexAwait;
    function forEachNumberIndex(list, callbackFn) {
        for (const chainId in list) {
            if (Object.prototype.hasOwnProperty.call(list, chainId)
                && new eth_wallet_2.BigNumber(chainId).isInteger())
                callbackFn(list[chainId], Number(chainId));
        }
    }
    exports.forEachNumberIndex = forEachNumberIndex;
    var ContractVaultOrderStatus;
    (function (ContractVaultOrderStatus) {
        //copied from contract interface IOSWAP_BridgeVault, 
        //must not be changed
        ContractVaultOrderStatus[ContractVaultOrderStatus["NotSpecified"] = 0] = "NotSpecified";
        ContractVaultOrderStatus[ContractVaultOrderStatus["Pending"] = 1] = "Pending";
        ContractVaultOrderStatus[ContractVaultOrderStatus["Executed"] = 2] = "Executed";
        ContractVaultOrderStatus[ContractVaultOrderStatus["RequestCancel"] = 3] = "RequestCancel";
        ContractVaultOrderStatus[ContractVaultOrderStatus["RefundApproved"] = 4] = "RefundApproved";
        ContractVaultOrderStatus[ContractVaultOrderStatus["Cancelled"] = 5] = "Cancelled";
        ContractVaultOrderStatus[ContractVaultOrderStatus["RequestAmend"] = 6] = "RequestAmend";
    })(ContractVaultOrderStatus = exports.ContractVaultOrderStatus || (exports.ContractVaultOrderStatus = {}));
    var VaultOrderStatus;
    (function (VaultOrderStatus) {
        VaultOrderStatus[VaultOrderStatus["Pending"] = 0] = "Pending";
        VaultOrderStatus[VaultOrderStatus["Executed"] = 1] = "Executed";
        VaultOrderStatus[VaultOrderStatus["RequestCancel"] = 2] = "RequestCancel";
        VaultOrderStatus[VaultOrderStatus["RefundApproved"] = 3] = "RefundApproved";
        VaultOrderStatus[VaultOrderStatus["Cancelled"] = 4] = "Cancelled";
        VaultOrderStatus[VaultOrderStatus["RequestAmend"] = 5] = "RequestAmend";
        VaultOrderStatus[VaultOrderStatus["Expired"] = 6] = "Expired";
    })(VaultOrderStatus = exports.VaultOrderStatus || (exports.VaultOrderStatus = {}));
    class State {
        constructor(options) {
            this.defaultChainId = 0;
            this.slippageTolerance = new eth_wallet_2.BigNumber(core_2.orderMinOutRate).shiftedBy(2).toFixed();
            this.crossChainTransactionDeadline = 72 * 60; //72 hours
            this.proxyAddresses = {};
            this.infuraId = "";
            this.rpcWalletId = "";
            this.networkMap = {};
            this.networkConfig = [];
            this.vaultGroups = initVaultGroupsStore(core_2.VaultGroupList);
            this.supportedAssetNames = core_2.VaultGroupList.map(v => v.assetName);
            this.getNetworkInfo = (chainId) => {
                return this.networkMap[chainId];
            };
            this.getMatchNetworks = (conditions) => {
                let networkFullList = Object.values(this.networkMap);
                let out = matchFilter(networkFullList, conditions);
                return out;
            };
            this.getNetworkExplorerName = (chainId) => {
                if (this.getNetworkInfo(chainId)) {
                    return this.getNetworkInfo(chainId).explorerName;
                }
                return 'Unknown';
            };
            this.viewOnExplorerByTxHash = (chainId, txHash) => {
                let network = this.getNetworkInfo(chainId);
                if (network && network.explorerTxUrl) {
                    let url = `${network.explorerTxUrl}${txHash}`;
                    window.open(url);
                }
            };
            this.viewOnExplorerByAddress = (chainId, address) => {
                let network = this.getNetworkInfo(chainId);
                if (network && network.explorerAddressUrl) {
                    let url = `${network.explorerAddressUrl}${address}`;
                    window.open(url);
                }
            };
            this.getSlippageTolerance = () => {
                return Number(this.slippageTolerance) || 0;
            };
            this.setSlippageTolerance = (value) => {
                this.slippageTolerance = new eth_wallet_2.BigNumber(value).toFixed();
            };
            this.getCrossChainTransactionDeadline = () => {
                return this.crossChainTransactionDeadline;
            };
            this.setCrossChainTransactionDeadline = (value) => {
                this.crossChainTransactionDeadline = value;
            };
            this.setSupportedAssetNames = (value) => {
                this.supportedAssetNames = value;
            };
            this.getSupportedAssetNames = () => {
                const assetNames = this.supportedAssetNames || [];
                return [...new Set(assetNames)];
            };
            this.setVaultGroups = (vaultGroups) => {
                this.vaultGroups = vaultGroups;
            };
            this.getVaultGroups = () => {
                return this.vaultGroups;
            };
            this.setNetworkConfig = (networks) => {
                this.networkConfig = networks;
            };
            this.getNetworkConfig = () => {
                return this.networkConfig;
            };
            this.initData(options);
        }
        initRpcWallet(defaultChainId) {
            this.defaultChainId = defaultChainId;
            if (this.rpcWalletId) {
                return this.rpcWalletId;
            }
            const clientWallet = eth_wallet_2.Wallet.getClientInstance();
            const networkList = Object.values(components_2.application.store?.networkMap || []);
            const instanceId = clientWallet.initRpcWallet({
                networks: networkList,
                defaultChainId,
                infuraId: components_2.application.store?.infuraId,
                multicalls: components_2.application.store?.multicalls
            });
            this.rpcWalletId = instanceId;
            if (clientWallet.address) {
                const rpcWallet = eth_wallet_2.Wallet.getRpcWalletInstance(instanceId);
                rpcWallet.address = clientWallet.address;
            }
            const defaultNetworkList = (0, scom_network_list_1.default)();
            const defaultNetworkMap = defaultNetworkList.reduce((acc, cur) => {
                acc[cur.chainId] = cur;
                return acc;
            }, {});
            const supportedNetworks = data_json_1.default.supportedNetworks || [];
            for (let network of networkList) {
                const networkInfo = defaultNetworkMap[network.chainId];
                const supportedNetwork = supportedNetworks.find(v => v.chainId == network.chainId);
                if (!networkInfo || !supportedNetwork)
                    continue;
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
            return this.rpcWalletId ? eth_wallet_2.Wallet.getRpcWalletInstance(this.rpcWalletId) : null;
        }
        isRpcWalletConnected() {
            const wallet = this.getRpcWallet();
            return wallet?.isConnected;
        }
        getProxyAddress(chainId) {
            const _chainId = chainId || eth_wallet_2.Wallet.getInstance().chainId;
            const proxyAddresses = this.proxyAddresses;
            if (proxyAddresses) {
                return proxyAddresses[_chainId];
            }
            return null;
        }
        getChainId() {
            const rpcWallet = this.getRpcWallet();
            return rpcWallet?.chainId;
        }
        initData(options) {
            if (options.infuraId) {
                this.infuraId = options.infuraId;
            }
            if (options.proxyAddresses) {
                this.proxyAddresses = options.proxyAddresses;
            }
        }
    }
    exports.State = State;
    function isContractVaultOrderStatus(n) {
        return (n <= 6 && n >= 0);
    }
    exports.isContractVaultOrderStatus = isContractVaultOrderStatus;
    function isVaultOrderStatus(n) {
        return (n <= 6 && n >= 0);
    }
    exports.isVaultOrderStatus = isVaultOrderStatus;
    function determineOrderStatus(expire, fromChainStatus, toChainStatus) {
        switch (toChainStatus) {
            case ContractVaultOrderStatus.Executed:
                return VaultOrderStatus.Executed;
            case ContractVaultOrderStatus.RequestCancel:
                if (fromChainStatus == ContractVaultOrderStatus.RefundApproved)
                    return VaultOrderStatus.RefundApproved;
                if (fromChainStatus == ContractVaultOrderStatus.Cancelled)
                    return VaultOrderStatus.Cancelled;
                return VaultOrderStatus.RequestCancel;
            case ContractVaultOrderStatus.RefundApproved:
                return VaultOrderStatus.RefundApproved;
            case ContractVaultOrderStatus.Cancelled:
                return VaultOrderStatus.Cancelled;
            case ContractVaultOrderStatus.RequestAmend:
                return VaultOrderStatus.RequestAmend;
            case ContractVaultOrderStatus.Pending:
                if (fromChainStatus == ContractVaultOrderStatus.Pending && new eth_wallet_2.BigNumber(new Date().getTime()).shiftedBy(-3).gte(expire)) {
                    return VaultOrderStatus.Expired;
                }
                else {
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
                        if (new eth_wallet_2.BigNumber(new Date().getTime()).shiftedBy(-3).gte(expire)) {
                            return VaultOrderStatus.Expired;
                        }
                        else {
                            return VaultOrderStatus.Pending;
                        }
                }
            }
        }
    }
    exports.determineOrderStatus = determineOrderStatus;
    function castToVaultStore(vc) {
        return {
            ...vc,
            tokenBalance: new eth_wallet_2.BigNumber("0"),
            imbalance: new eth_wallet_2.BigNumber("0"),
            userTokenAmount: new eth_wallet_2.BigNumber("0"),
            userOrders: [],
            ordersLength: 0
        };
    }
    function castToVaultGroupStore(vgc) {
        let vaults = {};
        forEachNumberIndex(vgc.vaults, (v, chainId) => vaults[chainId] = castToVaultStore(v));
        return {
            ...vgc,
            vaults,
        };
    }
    function initVaultGroupsStore(vgcs) {
        return vgcs.map(g => castToVaultGroupStore(g));
    }
    function matchFilter(list, filter) {
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
                    console.log(`matchFilter do not support ${typeof filter[f]} yet!`);
                    return false;
            }
        }));
    }
    // wallet
    function getWalletProvider() {
        return localStorage.getItem('walletProvider') || '';
    }
    exports.getWalletProvider = getWalletProvider;
    function isWalletConnected() {
        const wallet = eth_wallet_2.Wallet.getClientInstance();
        return wallet.isConnected;
    }
    exports.isWalletConnected = isWalletConnected;
    const getChainNativeToken = (chainId) => {
        return scom_token_list_1.ChainNativeTokenByChainId[chainId];
    };
    exports.getChainNativeToken = getChainNativeToken;
});
define("@scom/scom-xchain-bridge-record/store/index.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/store/data/index.ts", "@scom/scom-token-list", "@scom/scom-xchain-bridge-record/store/utils.ts", "@scom/scom-xchain-bridge-record/store/data/index.ts", "@scom/scom-xchain-bridge-record/store/utils.ts"], function (require, exports, index_4, scom_token_list_2, utils_1, index_5, utils_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findConstantAllAsset = exports.findConstantToVault = exports.findConstantVault = exports.findConstantVaultGroupByToken = exports.findConstantTokenByVault = exports.getNetworkImg = exports.getTokenIcon = exports.nullAddress = void 0;
    __exportStar(index_5, exports);
    exports.nullAddress = "0x0000000000000000000000000000000000000000";
    const getTokenIcon = (address, chainId) => {
        if (!address)
            return '';
        const tokenMap = scom_token_list_2.tokenStore.getTokenMapByChainId(chainId);
        let ChainNativeToken;
        let tokenObject;
        if ((0, utils_1.isWalletConnected)()) {
            ChainNativeToken = (0, utils_1.getChainNativeToken)(chainId);
            tokenObject = address == ChainNativeToken.symbol ? ChainNativeToken : tokenMap[address.toLowerCase()];
        }
        else {
            tokenObject = tokenMap[address.toLowerCase()];
        }
        return scom_token_list_2.assets.tokenPath(tokenObject, chainId);
    };
    exports.getTokenIcon = getTokenIcon;
    const getNetworkImg = (state, chainId) => {
        try {
            const network = state.getNetworkInfo(chainId);
            if (network) {
                return network.image;
            }
        }
        catch { }
        return scom_token_list_2.assets.fallbackUrl;
    };
    exports.getNetworkImg = getNetworkImg;
    function findConstantTokenByVault(chainId, vaultAddress) {
        let x = index_4.VaultGroupList.find(group => group.vaults[chainId].vaultAddress.toLowerCase() == vaultAddress.toLowerCase());
        if (!x)
            return;
        return x.vaults[chainId].assetToken;
    }
    exports.findConstantTokenByVault = findConstantTokenByVault;
    function findConstantVaultGroupByToken(chainId, tokenAddress) {
        return index_4.VaultGroupList.find(group => group.vaults[chainId].assetToken.address.toLowerCase() == tokenAddress.toLowerCase());
    }
    exports.findConstantVaultGroupByToken = findConstantVaultGroupByToken;
    function findConstantVault(vaultGroup, chainId) {
        try {
            return vaultGroup.vaults[chainId];
        }
        catch (error) {
            return undefined;
        }
    }
    exports.findConstantVault = findConstantVault;
    function findConstantToVault(fromChainId, tokenAddress, toChainId) {
        let group = findConstantVaultGroupByToken(fromChainId, tokenAddress);
        if (!group || !group.vaults)
            throw new Error(`No such token ${tokenAddress} recorded in chain ${fromChainId}`);
        return findConstantVault(group, toChainId);
    }
    exports.findConstantToVault = findConstantToVault;
    function findConstantAllAsset(fromChainId) {
        let out = [];
        index_4.VaultGroupList.forEach(group => {
            const vaults = findConstantVault(group, fromChainId);
            if (vaults)
                out.push(vaults);
        });
        return out;
    }
    exports.findConstantAllAsset = findConstantAllAsset;
    __exportStar(utils_2, exports);
});
define("@scom/scom-xchain-bridge-record/column.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/store/index.ts", "@scom/scom-token-list", "@ijstech/components"], function (require, exports, index_6, scom_token_list_3, components_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.truncateAddress = exports.viewTransaction = exports.toTokenIcon = exports.bridgeRecordColumns = void 0;
    const Theme = components_3.Styles.Theme.ThemeVars;
    const truncateAddress = (address, length, separator) => {
        if (!address || address.length <= length)
            return address;
        separator = separator || '...';
        const sepLen = separator.length;
        const charsToShow = length - sepLen;
        const frontChars = Math.ceil(charsToShow / 2);
        const backChars = Math.floor(charsToShow / 2);
        return address.substr(0, frontChars) + separator + address.substr(address.length - backChars);
    };
    exports.truncateAddress = truncateAddress;
    const fromTokenIcon = (data) => {
        return scom_token_list_3.assets.tokenPath(data.fromToken, data.fromNetwork.chainId);
    };
    const toTokenIcon = (data) => {
        return scom_token_list_3.assets.tokenPath(data.toToken, data.toNetwork.chainId);
    };
    exports.toTokenIcon = toTokenIcon;
    const viewTransaction = (state, chainId, txHash) => {
        state.viewOnExplorerByTxHash(chainId, txHash);
    };
    exports.viewTransaction = viewTransaction;
    const getBridgeRecordColumns = () => {
        return [
            {
                title: 'ID',
                fieldName: 'orderId',
                onRenderCell: function (source, data, row) {
                    const lb = new components_3.Label(undefined, { caption: `#${data}` });
                    return lb;
                }
            },
            {
                title: '$token_swap',
                fieldName: 'token_swap',
                onRenderCell: function (source, data, row) {
                    return renderFromToToken(row);
                }
            },
            {
                title: '$from',
                fieldName: 'from',
                onRenderCell: function (source, data, row) {
                    return renderTokenFrom(row);
                }
            },
            {
                title: '$to',
                fieldName: 'to',
                onRenderCell: function (source, data, row) {
                    return renderTokenTo(row);
                }
            },
            {
                title: '$status',
                fieldName: 'status',
                onRenderCell: function (source, data, row) {
                    return renderStatus(row.statusCode, row.status);
                }
            },
            {
                title: '',
                fieldName: '',
                type: 'actions',
                onRenderCell: async function (source, data, row) {
                    const { orderId, fromNetwork, fromVaultAddress } = row;
                    const orderHash = `${orderId}-${fromNetwork.chainId}-${fromVaultAddress}`;
                    const icon = await components_3.Icon.create();
                    icon.id = 'detail';
                    icon.name = 'ellipsis-v';
                    icon.fill = Theme.text.primary;
                    icon.width = '15px';
                    icon.height = '15px';
                    icon.setAttribute('order-hash', orderHash);
                    icon.style.float = 'right';
                    return icon;
                }
            },
        ];
    };
    const bridgeRecordColumns = getBridgeRecordColumns();
    exports.bridgeRecordColumns = bridgeRecordColumns;
    const renderFromToToken = (row, justify = 'start') => {
        // const date = moment(row.date).format(DefaultDateTimeFormat);
        const vstack = new components_3.VStack();
        const hstack = new components_3.HStack(vstack, {
            gap: '5px',
            verticalAlignment: 'center'
        });
        const fromLb = new components_3.Label(hstack, {
            caption: row.fromToken.symbol,
            font: { bold: true }
        });
        const to = new components_3.Label(hstack, {
            caption: 'to',
        });
        const toLb = new components_3.Label(hstack, {
            caption: row.toToken.symbol,
            font: { bold: true }
        });
        hstack.append(fromLb, to, toLb);
        // const dateLb = new Label(vstack, {
        //   caption: date,
        //   font: { size: '0.875rem', color: 'hsla(0, 0%, 100%, 0.55)' },
        //   margin: { right: '0.5rem' }
        // })
        // vstack.append(hstack, dateLb);
        return vstack;
    };
    const renderTokenFrom = (row) => {
        const wrapper = new components_3.Panel();
        const hstack = new components_3.HStack(wrapper, {
            gap: '4px',
            verticalAlignment: 'center'
        });
        new components_3.Image(hstack, {
            url: fromTokenIcon(row),
            width: 20
        });
        new components_3.Label(hstack, {
            caption: `${components_3.FormatUtils.formatNumber(row.fromAmount, { decimalFigures: 4, hasTrailingZero: false })} ${row.fromToken.symbol}`,
        });
        new components_3.Label(wrapper, {
            caption: row.fromNetwork.chainName,
            class: 'text-opacity'
        });
        return wrapper;
    };
    const renderTokenTo = (row) => {
        const wrapper = new components_3.Panel();
        const hstack = new components_3.HStack(wrapper, {
            gap: '4px',
            verticalAlignment: 'center'
        });
        new components_3.Image(hstack, {
            url: toTokenIcon(row),
            width: 20
        });
        new components_3.Label(hstack, {
            caption: `${components_3.FormatUtils.formatNumber(row.toAmount, { decimalFigures: 4, hasTrailingZero: false })} ${row.toToken.symbol}`
        });
        new components_3.Label(wrapper, {
            caption: row.toNetwork.chainName,
            class: 'text-opacity'
        });
        return wrapper;
    };
    const renderStatus = (statusCode, status) => {
        let color = statusCode === index_6.VaultOrderStatus.Executed ? Theme.colors.success.main : Theme.colors.error.main;
        return new components_3.Label(new components_3.VStack(), {
            caption: status,
            font: { color: color }
        });
    };
});
define("@scom/scom-xchain-bridge-record/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_4.application.currentModuleDir;
    function fullPath(path) {
        return `${moduleDir}/${path}`;
    }
    exports.default = {
        fullPath
    };
});
define("@scom/scom-xchain-bridge-record/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buttonProps = exports.bridgeStyle = void 0;
    const Theme = components_5.Styles.Theme.ThemeVars;
    exports.bridgeStyle = components_5.Styles.style({
        marginInline: 'auto',
        maxWidth: '1420px',
        $nest: {
            '.modal': {
                width: '480px',
                borderRadius: '12px',
                padding: '20px',
            },
            '.row-table': {
                marginBottom: '15px'
            },
            '.i-icon': {
                display: 'inline-block',
                cursor: 'pointer'
            },
            '.empty-header': {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                minHeight: 65
            },
            '.group-filter': {
                display: 'flex',
                flexWrap: 'wrap',
                marginLeft: 'auto',
                marginTop: '.25rem',
            },
            '.btn-dropdown': {
                marginLeft: '.25rem',
                marginBlock: '.25rem',
                $nest: {
                    '> i-button': {
                        background: Theme.background.modal,
                        opacity: 0.9,
                        boxShadow: 'none',
                        border: 'none',
                        borderRadius: 0,
                        height: '2.5rem',
                        padding: '1rem 0.5rem',
                        justifyContent: 'space-between',
                        minWidth: '9.3rem',
                        $nest: {
                            '&:hover': {
                                background: `${Theme.background.modal} !important`,
                                opacity: 1
                            }
                        }
                    },
                    'i-modal': {
                        width: '100%'
                    },
                    '.modal': {
                        padding: '0.25rem 0',
                        marginTop: 0,
                        border: `2px solid ${Theme.action.focusBackground}`,
                        background: Theme.background.modal,
                        borderRadius: 4,
                        minWidth: 0,
                        maxHeight: '50vh',
                        overflow: 'auto',
                        $nest: {
                            '&::-webkit-scrollbar': {
                                width: '3px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '5px',
                            },
                            'i-button': {
                                display: 'block',
                                padding: '0.35rem 0.5rem',
                                background: Theme.background.modal,
                                borderRadius: '0',
                                border: 'none',
                                boxShadow: 'none',
                                fontSize: '0.875rem',
                                height: 'auto',
                                $nest: {
                                    '&:hover': {
                                        background: Theme.action.focusBackground,
                                    },
                                    'i-image': {
                                        display: 'flex',
                                        flexDirection: 'row-reverse',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                    },
                                    // 'img': {
                                    //   minWidth: '24px',
                                    //   height: '24px',
                                    //   marginRight: '0.25rem',
                                    //   width: 'auto'
                                    // },
                                },
                            },
                            'i-button:last-child': {
                                marginBottom: 0
                            },
                            '.network-item': {
                                padding: '0.35rem 0.5rem',
                                background: Theme.background.modal,
                                borderRadius: '0',
                                border: 'none',
                                boxShadow: 'none',
                                fontSize: '0.875rem',
                                height: 'auto',
                                $nest: {
                                    '&:hover': {
                                        background: Theme.action.focusBackground,
                                    },
                                    'i-image': {
                                        display: 'flex',
                                        flexDirection: 'row-reverse',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                    }
                                },
                            },
                            '.network-item:last-child': {
                                marginBottom: 0
                            }
                        }
                    },
                    '.caption': {
                        background: Theme.text.primary,
                    },
                    '.icon': {
                        // background: Theme.background.paper,
                        border: 'none',
                        borderRadius: 'inherit',
                        height: 'auto',
                        width: '18px',
                        paddingRight: '10px',
                    },
                    '.network-img': {
                        width: '24px',
                        minWidth: '24px',
                        height: '24px',
                        display: 'flex',
                        marginRight: '0.2rem',
                    },
                },
            },
            '.text-grey *': {
                opacity: 0.75,
            },
            '.text-opacity *': {
                opacity: 0.75,
            },
            '.custom-modal_header': {
                $nest: {
                    '.i-modal_header': {
                        display: 'none',
                    },
                    '.header': {
                        display: 'flex',
                        justifyContent: 'space-between',
                    },
                    '.header > i-label *': {
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: Theme.colors.primary.main,
                    },
                    '.header > i-icon': {
                        fill: Theme.colors.primary.main,
                        cursor: 'pointer'
                    },
                    '#tokenSelectionModal .i-modal_header': {
                        display: 'flex',
                    },
                    '#tokenSelectionModal > div': {
                        overflow: 'hidden',
                        height: 'auto',
                    },
                },
            },
            '.col-50': {
                width: '50%',
            },
            '.custom-col': {
                width: '40%',
            },
            '.custom-token-input': {
                $nest: {
                    '#gridTokenInput': {
                        background: 'transparent'
                    },
                    'i-button.disabled': {
                        opacity: 1,
                        $nest: {
                            'i-label': {
                                color: Theme.colors.primary.dark,
                                fontWeight: 'bold'
                            }
                        }
                    }
                }
            },
            '#bridgeRecordTable': {
                background: Theme.background.modal,
                $nest: {
                    '&.os-table table': {
                        minWidth: '100%',
                        $nest: {
                            '.i-table-cell': {
                                borderRight: 'none',
                                borderTop: `1px solid ${Theme.divider}`
                            },
                            'thead th': {
                                fontWeight: 'bold',
                                padding: '1rem',
                                textTransform: 'capitalize'
                            },
                            '.i-table-header > tr > th': {
                                border: 'none',
                                // borderBottom: `1px solid ${Theme.divider}`,
                                background: Theme.background.modal
                            },
                            '.i-table-body .i-table-cell': {
                                padding: '1rem 0.5rem',
                                border: 'none',
                                borderTop: `1px solid ${Theme.text.primary}`,
                                verticalAlign: 'inherit'
                            },
                            '.i-table-body .is--expanded td': {
                                background: Theme.action.focusBackground
                            },
                            '.i-table-body .i-table-row--child > td': {
                                background: Theme.action.focusBackground,
                                paddingTop: '1rem',
                                border: 'none'
                            },
                        },
                    },
                    '.expanded-item': {
                        paddingInline: '1rem',
                    }
                },
            },
            '.record-pagination': {
                justifyContent: 'flex-end'
            },
            'i-pagination': {
                $nest: {
                    '.pagination-main': {
                        display: 'flex',
                        flexWrap: 'wrap',
                    },
                    '.paginate_button': {
                        backgroundColor: 'rgb(12, 18, 52)',
                        border: `1px solid ${Theme.colors.primary.main}`,
                        color: Theme.text.third,
                        padding: '4px 16px',
                        $nest: {
                            '&.active': {
                                backgroundColor: '#d05271',
                                border: '1px solid #d05271',
                                color: '#fff',
                            }
                        }
                    }
                }
            },
            '#mobilePanel': {
                marginInline: 'auto',
            },
            '#bridgeRecordMobile': {
                width: '420px',
                maxWidth: '100%',
                marginInline: 'auto',
            },
            '.bg-item': {
                background: Theme.background.modal,
                marginBottom: '1rem',
                padding: '1rem',
                position: 'relative',
                width: '100%',
            },
            '.row-status': {
                position: 'absolute',
                top: '3.75rem',
                right: '1.25rem',
            },
            '.row-item': {
                marginBottom: '0.5rem',
            },
            '.expanded-item-mobile': {
                $nest: {
                    '&.expanded-item': {
                        flexDirection: 'column',
                        display: 'flex',
                        marginTop: '1rem',
                        $nest: {
                            '.col-50': {
                                width: '100% !important',
                            },
                            '.custom-col': {
                                maxWidth: '60%',
                                width: '10rem',
                            },
                        },
                    },
                    '.row-table': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                    '.group-btn': {
                        justifyContent: 'center',
                    }
                }
            },
            '.pagination-mobile': {
                $nest: {
                    '&.record-pagination': {
                        justifyContent: 'center'
                    },
                    'i-pagination': {
                        $nest: {
                            '.paginate_button': {
                                $nest: {
                                    '&.previous, &.next': {
                                        display: 'none',
                                    },
                                },
                            },
                        },
                    },
                }
            }
        }
    });
    exports.buttonProps = {
        height: 'auto',
        minHeight: 36,
        background: { color: Theme.colors.primary.main },
        font: { color: Theme.text.primary, weight: 700 },
        padding: { left: 4, right: 4, top: 4, bottom: 4 },
    };
});
define("@scom/scom-xchain-bridge-record/languages/main.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-xchain-bridge-record/languages/main.json.ts'/> 
    exports.default = {
        "en": {
            "data_last_updated_0_seconds_ago": "Data last updated 0 seconds ago",
            "data_last_updated_seconds_ago": "Data last updated {{value}} seconds ago",
            "latest_swap": "Latest Swap",
            "no_data": "No Data",
            "please_connect_with_your_wallet": "Please connect with your wallet",
            "oldest_swap": "Oldest Swap",
            "destination_chain": "Destination Chain",
            "source_chain": "Source Chain",
            "token_group": "Token Group",
            "confirming": "Confirming",
            "request_cancel": "Request Cancel",
            "withdraw": "Withdraw",
            "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": "You can withdraw the tokens after the cancellation is approved by the bridge trolls. The cancellation is subjected to a {{fee}}% cancellation fee.",
            "the_token_will_be_returned_to_your_wallet_after_withdrawal": "The token will be returned to your wallet after withdrawal.",
            "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": "The request must be submitted from the destination chain, please switch your network as instructed.",
            "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": "The request must be submitted from the source chain, please switch your network as instructed.",
            "amend_order": "Amend Order",
            "minimum_receive": "Minimum Receive",
            "the_address_has_been_copied": "The address has been copied",
            "loading": "Loading...",
            "withdraw_amount": "Withdraw Amount",
            "switch_network": "Switch Network",
            "token_receive": "Token Receive",
            "expected_receive": "Expected Receive",
            "confirm": "Confirm",
            "token_swap": "Token Swap",
            "from": "From",
            "to": "To",
            "status": "Status",
            "pending": "Pending",
            "executed": "Executed",
            "refund_approved": "Refund Approved",
            "cancelled": "Cancelled",
            "cancel_approved": "Cancel Approved",
            "request_amend": "Request Amend",
            "expired": "Expired",
            "sender_address": "Sender Address",
            "amount_lower_than_base_fee": "Amount lower than base fee",
        },
        "zh-hant": {
            "data_last_updated_0_seconds_ago": "資料最後更新於 0 秒前",
            "data_last_updated_seconds_ago": "資料最後更新於 {{value}} 秒前",
            "latest_swap": "最新交換",
            "no_data": "無資料",
            "please_connect_with_your_wallet": "請連接您的錢包",
            "oldest_swap": "最舊交換",
            "destination_chain": "目標鏈",
            "source_chain": "來源鏈",
            "token_group": "代幣群組",
            "confirming": "確認中",
            "request_cancel": "請求取消",
            "withdraw": "提領",
            "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": "您可以在取消被橋樑管理員批准後提領代幣。取消需支付 {{fee}}% 的取消費用。",
            "the_token_will_be_returned_to_your_wallet_after_withdrawal": "代幣將在提領後返回到您的錢包。",
            "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": "請從目標鏈提交請求，請按照指示切換您的網絡。",
            "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": "請從來源鏈提交請求，請按照指示切換您的網絡。",
            "amend_order": "修改訂單",
            "minimum_receive": "最小接收量",
            "the_address_has_been_copied": "地址已複製",
            "loading": "載入中...",
            "withdraw_amount": "提領金額",
            "switch_network": "切換網絡",
            "token_receive": "代幣接收",
            "expected_receive": "預期接收",
            "confirm": "確認",
            "token_swap": "代幣交換",
            "from": "從",
            "to": "到",
            "status": "狀態",
            "pending": "待處理",
            "executed": "已執行",
            "refund_approved": "退款批准",
            "cancelled": "已取消",
            "cancel_approved": "取消已批准",
            "request_amend": "請求修改",
            "expired": "已過期",
            "sender_address": "發件人地址",
            "amount_lower_than_base_fee": "金額低於基本費用",
        },
        "vi": {
            "data_last_updated_0_seconds_ago": "Dữ liệu được cập nhật lần cuối cách đây 0 giây",
            "data_last_updated_seconds_ago": "Dữ liệu được cập nhật lần cuối cách đây {{value}} giây",
            "latest_swap": "Hoán đổi mới nhất",
            "no_data": "Không có dữ liệu",
            "please_connect_with_your_wallet": "Vui lòng kết nối với ví của bạn",
            "oldest_swap": "Hoán đổi cũ nhất",
            "destination_chain": "Chuỗi đích",
            "source_chain": "Chuỗi nguồn",
            "token_group": "Nhóm token",
            "confirming": "Đang xác nhận",
            "request_cancel": "Yêu cầu hủy",
            "withdraw": "Rút tiền",
            "you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee": "Bạn có thể rút token sau khi việc hủy được duyệt bởi các bridge troll. Việc hủy sẽ phải chịu một khoản phí hủy là {{fee}}%.",
            "the_token_will_be_returned_to_your_wallet_after_withdrawal": "Token sẽ được trả lại ví của bạn sau khi rút tiền.",
            "the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed": "Yêu cầu phải được gửi từ chuỗi đích, vui lòng chuyển mạng của bạn theo hướng dẫn.",
            "the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed": "Yêu cầu phải được gửi từ chuỗi nguồn, vui lòng chuyển mạng của bạn theo hướng dẫn.",
            "amend_order": "Sửa đổi lệnh",
            "minimum_receive": "Nhận tối thiểu",
            "the_address_has_been_copied": "Địa chỉ đã được sao chép",
            "loading": "Đang tải...",
            "withdraw_amount": "Số tiền rút",
            "switch_network": "Chuyển mạng",
            "token_receive": "Token nhận được",
            "expected_receive": "Dự kiến nhận",
            "confirm": "Xác nhận",
            "token_swap": "Hoán đổi Token",
            "from": "Từ",
            "to": "Đến",
            "status": "Trạng thái",
            "pending": "Đang chờ xử lý",
            "executed": "Đã thực hiện",
            "refund_approved": "Hoàn tiền đã được phê duyệt",
            "cancelled": "Đã hủy",
            "cancel_approved": "Hủy đã được phê duyệt",
            "request_amend": "Yêu cầu sửa đổi",
            "expired": "Hết hạn",
            "sender_address": "Địa chỉ người gửi",
            "amount_lower_than_base_fee": "Số tiền thấp hơn phí cơ bản",
        }
    };
});
define("@scom/scom-xchain-bridge-record/languages/index.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/languages/main.json.ts", "@scom/scom-xchain-bridge-record/languages/main.json.ts"], function (require, exports, main_json_1, main_json_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configJson = exports.mainJson = void 0;
    exports.mainJson = main_json_1.default;
    exports.configJson = main_json_2.default;
});
define("@scom/scom-xchain-bridge-record/crosschain-utils/API.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/store/index.ts", "@ijstech/eth-wallet", "@scom/oswap-cross-chain-bridge-contract", "@scom/scom-multicall", "@ijstech/eth-contract"], function (require, exports, index_7, eth_wallet_3, oswap_cross_chain_bridge_contract_1, scom_multicall_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findVaultGroupByToken = exports.getRoute = exports.initCrossChainWallet = exports.getVaultGroupsUpdateUserOrders = exports.getVaultGroups = exports.getFeeAmounts = exports.isSupportedCrossChain = void 0;
    const initCrossChainWallet = (state, chainId) => {
        const wallet = eth_wallet_3.Wallet.getClientInstance();
        const networkInfo = state.getNetworkInfo(chainId);
        let rpcEndpoint = networkInfo.rpcUrls[0];
        let crossChainWallet = new eth_wallet_3.Wallet(rpcEndpoint, { address: wallet.address });
        let mul = (0, scom_multicall_1.getMulticallInfoList)().find(x => x.chainId === chainId);
        crossChainWallet.multicallInfoMap = { [chainId]: mul };
        return crossChainWallet;
    };
    exports.initCrossChainWallet = initCrossChainWallet;
    function isSupportedCrossChain(fromChain, toChain) {
        try {
            if ([fromChain, toChain].some(c => c <= 0))
                return false;
            if (fromChain === toChain)
                return false;
            if (index_7.Mainnets.includes(fromChain))
                return index_7.Mainnets.includes(toChain);
            if (index_7.Testnets.includes(fromChain))
                return index_7.Testnets.includes(toChain);
        }
        catch (error) { }
        return false;
    }
    exports.isSupportedCrossChain = isSupportedCrossChain;
    // CrossChain
    function getFeeAmounts(vault, amountIn) {
        let deci = vault.assetToken.decimals;
        let weiAmountIn = amountIn.shiftedBy(deci);
        let baseFeeAmount = new eth_wallet_3.BigNumber(vault.baseFee);
        let protocolFeeAmount = new eth_wallet_3.BigNumber(weiAmountIn).times(vault.protocolFee).dp(0, eth_wallet_3.BigNumber.ROUND_DOWN).shiftedBy(-deci);
        let transactionFeeAmount = new eth_wallet_3.BigNumber(weiAmountIn).times(vault.transactionFee).dp(0, eth_wallet_3.BigNumber.ROUND_DOWN).shiftedBy(-deci);
        let imbalance = new eth_wallet_3.BigNumber(vault.imbalance).minus(weiAmountIn);
        let imbalanceFeeAmount = imbalance.lt(0) ? imbalance.times(-vault.imbalanceFee).dp(0, eth_wallet_3.BigNumber.ROUND_DOWN).shiftedBy(-deci) : new eth_wallet_3.BigNumber("0");
        return {
            totalFeeAmount: baseFeeAmount.plus(protocolFeeAmount).plus(transactionFeeAmount).plus(imbalanceFeeAmount),
            baseFeeAmount,
            protocolFeeAmount,
            transactionFeeAmount,
            imbalanceFeeAmount,
        };
    }
    exports.getFeeAmounts = getFeeAmounts;
    function getRoute(swapInfo) {
        let fromVault = findVault(swapInfo.vaultGroup, swapInfo.fromChainId);
        let toVault = findVault(swapInfo.vaultGroup, swapInfo.toChainId);
        if (!fromVault || !toVault)
            return null;
        let feeAmounts = getFeeAmounts(fromVault, swapInfo.inAmount);
        return {
            fromVault,
            fromAmount: swapInfo.inAmount,
            toVault,
            toAmount: swapInfo.inAmount.minus(feeAmounts.totalFeeAmount),
            feeAmounts,
        };
    }
    exports.getRoute = getRoute;
    async function findVaultGroupByToken(state, chainId, tokenAddress) {
        return (await getVaultGroups(state)).find(group => group.vaults[chainId]?.assetToken.address.toLowerCase() == tokenAddress.toLowerCase());
    }
    exports.findVaultGroupByToken = findVaultGroupByToken;
    function findVault(vaultGroup, chainId) {
        try {
            return vaultGroup.vaults[chainId];
        }
        catch (error) {
            return undefined;
        }
    }
    async function getVaultGroups(state, isUpdate) {
        let walletChainId = eth_wallet_3.Wallet.getClientInstance().chainId;
        let networks = (0, index_7.getNetworksByType)(walletChainId);
        let allVaultGroups = state.getVaultGroups();
        let vaultGroupsStore = allVaultGroups?.filter(v => state.getSupportedAssetNames().includes(v.assetName));
        if (!vaultGroupsStore || vaultGroupsStore.length < 1) {
            //vaultGroupsStore = VaultGroupList.map(g => castToVaultGroupStore(g));
            state.setVaultGroups(vaultGroupsStore);
        }
        if (!isUpdate)
            return vaultGroupsStore;
        let chainTask = {};
        //only update DYNAMIC items in VaultGroupList
        for (let i = 0; i < vaultGroupsStore.length; i++) {
            const group = vaultGroupsStore[i];
            await (0, index_7.forEachNumberIndexAwait)(group.vaults, async (vault, chainId) => {
                if (networks.every(n => n !== chainId))
                    return;
                if (!chainTask[chainId]) {
                    chainTask[chainId] = {
                        assetNames: [],
                        wallet: initCrossChainWallet(state, Number(chainId)),
                        calls: [],
                    };
                }
                let vaultContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(chainTask[chainId].wallet, vault.vaultAddress);
                let tokenContract = new oswap_cross_chain_bridge_contract_1.Contracts.ERC20(chainTask[chainId].wallet, vault.assetToken.address);
                chainTask[chainId].assetNames.push(group.assetName);
                chainTask[chainId].calls.push({
                    to: vault.vaultAddress,
                    contract: vaultContract,
                    methodName: "lpAssetBalance",
                    params: []
                }, {
                    to: vault.vaultAddress,
                    contract: vaultContract,
                    methodName: "imbalance",
                    params: []
                }, {
                    to: vault.vaultAddress,
                    contract: vaultContract,
                    methodName: "ordersLength",
                    params: []
                }, {
                    to: vault.assetToken.address,
                    contract: tokenContract,
                    methodName: "balanceOf",
                    params: [chainTask[chainId].wallet.address]
                });
            });
        }
        await (0, index_7.forEachNumberIndexAwait)(chainTask, async (x, chainId) => {
            try {
                let res = await x.wallet.doMulticall(x.calls);
                if (!res)
                    throw new Error(`doMulticall result is empty`);
                vaultGroupsStore.forEach((group, gIndex) => {
                    let callIndex = x.assetNames.findIndex(asset => asset === group.assetName);
                    if (callIndex < 0)
                        return;
                    group.vaults[chainId].tokenBalance = res[callIndex * 4]; //TODO decimal offset
                    group.vaults[chainId].imbalance = res[callIndex * 4 + 1]; //TODO decimal offset
                    group.vaults[chainId].ordersLength = res[callIndex * 4 + 2];
                    group.vaults[chainId].userTokenAmount = res[callIndex * 4 + 3]; //TODO decimal offset
                });
            }
            catch (error) {
                console.log(`Error on getVaultGroups chainId ${chainId}.`, error, x);
            }
        });
        state.setVaultGroups(vaultGroupsStore);
        return vaultGroupsStore;
    }
    exports.getVaultGroups = getVaultGroups;
    async function getVaultGroupsUpdateUserOrders(state, isUpdate) {
        return getVaultGroupsUpdateOrders(state, true, isUpdate);
    }
    exports.getVaultGroupsUpdateUserOrders = getVaultGroupsUpdateUserOrders;
    async function getVaultGroupsUpdateOrders(state, onlyUserOrder, isUpdate) {
        let wallet = eth_wallet_3.Wallet.getClientInstance();
        let walletAddress = wallet.address;
        let walletChainId = wallet.chainId;
        let networks = (0, index_7.getNetworksByType)(walletChainId);
        let vaultGroupsStore = await getVaultGroups(state, isUpdate);
        if (!isUpdate)
            return vaultGroupsStore;
        let chainTask = {};
        //MARK: ordersLength
        vaultGroupsStore.forEach(group => {
            (0, index_7.forEachNumberIndex)(group.vaults, (vault, chainId) => {
                if (networks.every(n => n !== chainId))
                    return;
                if (!chainTask[chainId]) {
                    chainTask[chainId] = {
                        assetNames: [],
                        wallet: initCrossChainWallet(state, Number(chainId)),
                        calls: [],
                        resPromise: null
                    };
                }
                let vaultContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(chainTask[chainId].wallet, vault.vaultAddress);
                chainTask[chainId].assetNames.push(group.assetName);
                chainTask[chainId].calls.push({
                    to: vault.vaultAddress,
                    contract: vaultContract,
                    methodName: "ordersLength",
                    params: []
                });
            });
        });
        let tasks = [];
        for (const chainId in chainTask) {
            if (Object.prototype.hasOwnProperty.call(chainTask, chainId)
                && new eth_wallet_3.BigNumber(chainId).isInteger()) {
                chainTask[chainId].resPromise = chainTask[chainId].wallet.doMulticall(chainTask[chainId].calls);
                tasks.push(chainTask[chainId].resPromise);
            }
        }
        await Promise.all(tasks);
        await (0, index_7.forEachNumberIndexAwait)(chainTask, async (x, chainId) => {
            try {
                let res = await x.resPromise;
                if (!res)
                    throw new Error(`doMulticall result is empty. trying to call ordersLength() ${x.calls.reduce((prev, curr) => { return `${prev}, ${curr.to}`; }, "")}`);
                vaultGroupsStore.forEach((group, gIndex) => {
                    let callIndex = x.assetNames.findIndex(asset => asset === group.assetName);
                    if (callIndex < 0)
                        return;
                    vaultGroupsStore[gIndex].vaults[chainId].ordersLength = res[callIndex];
                });
            }
            catch (error) {
                console.log(`Error on getVaultGroups chainId ${chainId}.`, error);
            }
        });
        //MARK: orders
        const size = 100;
        for (const group of vaultGroupsStore) {
            await (0, index_7.forEachNumberIndexAwait)(group.vaults, async (vault, chainId) => {
                if (networks.every(n => n !== chainId))
                    return;
                let rawOrders = await fetchOrders(chainTask[chainId].wallet, vault.vaultAddress, vault.ordersLength, size);
                let rawOrders2 = rawOrders.map((o, i) => { return { ...o, id: i }; });
                if (onlyUserOrder)
                    rawOrders2 = rawOrders2.filter(o => o.to === walletAddress);
                let orders = rawOrders2.map((o, i) => {
                    let toChain = o.peerChain.toNumber();
                    return {
                        id: o.id,
                        status: index_7.VaultOrderStatus.Pending,
                        expire: o.expire,
                        fromOwner: o.to,
                        fromChain: chainId,
                        fromToken: vault.assetToken,
                        fromAmount: new eth_wallet_3.BigNumber(o.inAmount),
                        fromStatus: index_7.ContractVaultOrderStatus.NotSpecified,
                        toOwner: o.to,
                        toChain,
                        toToken: group.vaults[toChain].assetToken,
                        toAmount: new eth_wallet_3.BigNumber(o.minOutAmount),
                        toAmountMin: new eth_wallet_3.BigNumber(o.minOutAmount),
                        toStatus: index_7.ContractVaultOrderStatus.NotSpecified,
                        protocolFee: vault.protocolFee
                    };
                });
                vault.userOrders = orders;
            });
        }
        //MARK: orderStatus
        vaultGroupsStore = await fetchOrdersStatus(state, vaultGroupsStore).catch(x => {
            console.log("fetchOrdersStatus failed", x);
            return [];
        });
        state.setVaultGroups(vaultGroupsStore);
        return vaultGroupsStore;
    }
    async function fetchOrders(wallet, vaultAddress, ordersLength, batchSize) {
        let orders = [];
        let vaultContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(wallet, vaultAddress);
        for (let i = 0; i < ordersLength; i += batchSize) {
            let orderBatch = await vaultContract.getOrders({ start: i, length: batchSize });
            orders = orders.concat(orderBatch);
        }
        return orders;
    }
    async function fetchOrdersStatus(state, vaultGroupsStore) {
        let walletAddress = eth_wallet_3.Wallet.getClientInstance().address;
        let chainTask = new Map();
        //add calls
        for (let i = 0; i < vaultGroupsStore.length; i++) {
            let contrs = new Map();
            (0, index_7.forEachNumberIndex)(vaultGroupsStore[i].vaults, (vault, chainId) => {
                if (!chainTask.has(chainId)) {
                    chainTask.set(chainId, {
                        wallet: initCrossChainWallet(state, chainId),
                        callsTo: [],
                        calls: [],
                        callsToIndex: [],
                        prom: null,
                        res: []
                    });
                }
                contrs.set(chainId, new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(chainTask.get(chainId).wallet, vault.vaultAddress));
            });
            (0, index_7.forEachNumberIndex)(vaultGroupsStore[i].vaults, (vault, chainId) => {
                for (let j = 0; j < vault.userOrders.length; j++) {
                    const t = chainTask.get(chainId);
                    t.calls.push({
                        to: vault.vaultAddress,
                        contract: contrs.get(chainId),
                        methodName: "orderStatus",
                        params: [vault.userOrders[j].id]
                    });
                    const t2 = chainTask.get(vault.userOrders[j].toChain);
                    const orderHash = t2.wallet.soliditySha3({ t: 'address', v: walletAddress }, { t: 'uint256', v: vault.userOrders[j].toChain }, { t: 'address', v: vaultGroupsStore[i].vaults[vault.userOrders[j].toChain].vaultAddress }, { t: 'uint256', v: chainId }, { t: 'uint256', v: vault.userOrders[j].id });
                    t2.callsToIndex.push({ fromChain: chainId, vgIndex: i, orderIndex: j });
                    t2.callsTo.push({
                        to: vaultGroupsStore[i].vaults[vault.userOrders[j].toChain].vaultAddress,
                        contract: contrs.get(vault.userOrders[j].toChain),
                        methodName: "swapOrderStatus",
                        params: [orderHash]
                    });
                }
            });
        }
        //call
        let promises = [];
        chainTask.forEach((t, chainId) => {
            let prom = t.wallet.doMulticall(t.calls.concat(t.callsTo)).then(res => t.res = res).catch(x => { console.log("fetchOrdersStatus call failed", chainId, t.calls, x); return []; });
            t.prom = prom;
            if (t.calls.length > 0)
                promises.push(prom);
        });
        await Promise.all(promises);
        //write
        for (let i = 0; i < vaultGroupsStore.length; i++) {
            (0, index_7.forEachNumberIndex)(vaultGroupsStore[i].vaults, async (v, chainId) => {
                let t = chainTask.get(chainId);
                if (t?.calls.length <= 0 || t.res.length <= 0)
                    return console.log("fetchOrdersStatus write no results or no calls", chainId, t);
                for (let j = 0; j < v.userOrders.length; j++) {
                    let x = t.res[j];
                    if (x)
                        v.userOrders[j].fromStatus = x.toNumber();
                }
            });
        }
        //write toChain OrderStatus
        chainTask.forEach((t, chainId) => {
            if (t.callsTo.length <= 0)
                return;
            let start = t.calls.length;
            for (let i = 0; i < t.callsTo.length; i++) {
                let ids = t.callsToIndex[i];
                let res = t.res[i + start];
                let order = vaultGroupsStore[ids.vgIndex].vaults[ids.fromChain].userOrders[ids.orderIndex];
                order.toStatus = res?.toNumber();
                order.status = (0, index_7.determineOrderStatus)(order.expire, order.fromStatus, order.toStatus);
                console.log(`${order.fromChain},${vaultGroupsStore[ids.vgIndex].assetName},${order.id} `, `${contractOrderStatusToString(order.fromStatus)}->${contractOrderStatusToString(order.toStatus)} = ${orderStatusToString(order.status)}`, `${new eth_wallet_3.BigNumber(new Date().getTime()).shiftedBy(-3).gte(order.expire) ? "💀expired" : "⏳not expired"}`);
            }
        });
        return vaultGroupsStore;
    }
    function contractOrderStatusToString(os) {
        if ((0, index_7.isContractVaultOrderStatus)(os)) {
            switch (os) {
                case index_7.ContractVaultOrderStatus.NotSpecified: //0
                    return "NotSpecified";
                case index_7.ContractVaultOrderStatus.Pending: //1
                    return "Pending";
                case index_7.ContractVaultOrderStatus.Executed: //2
                    return "Executed";
                case index_7.ContractVaultOrderStatus.RequestCancel: //3
                    return "RequestCancel";
                case index_7.ContractVaultOrderStatus.RefundApproved: //4
                    return "RefundApproved";
                case index_7.ContractVaultOrderStatus.Cancelled: //5
                    return "Cancelled";
                case index_7.ContractVaultOrderStatus.RequestAmend: //6:
                    return "RequestAmend";
            }
        }
        console.log("error vaultOrderStatusToString", os);
    }
    function orderStatusToString(os) {
        if ((0, index_7.isVaultOrderStatus)(os)) {
            switch (os) {
                case index_7.VaultOrderStatus.Pending:
                    return "Pending";
                case index_7.VaultOrderStatus.Executed:
                    return "Executed";
                case index_7.VaultOrderStatus.RequestCancel:
                    return "RequestCancel";
                case index_7.VaultOrderStatus.RefundApproved:
                    return "RefundApproved";
                case index_7.VaultOrderStatus.Cancelled:
                    return "Cancelled";
                case index_7.VaultOrderStatus.RequestAmend:
                    return "RequestAmend";
                case index_7.VaultOrderStatus.Expired:
                    return "Expired";
            }
        }
        console.log("error orderStatusToString", os);
    }
});
define("@scom/scom-xchain-bridge-record/crosschain-utils/index.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/crosschain-utils/API.ts"], function (require, exports, API_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-xchain-bridge-record/crosschain-utils/index.ts'/> 
    __exportStar(API_1, exports);
});
define("@scom/scom-xchain-bridge-record/API.ts", ["require", "exports", "@ijstech/eth-wallet", "@scom/scom-xchain-bridge-record/crosschain-utils/index.ts", "@scom/scom-xchain-bridge-record/store/index.ts", "@scom/oswap-cross-chain-bridge-contract"], function (require, exports, eth_wallet_4, index_8, index_9, oswap_cross_chain_bridge_contract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.requestAmendOrder = exports.withdrawUnexecutedOrder = exports.requestCancelOrder = exports.getAllUserOrders = void 0;
    // Bridge Record - Read
    const getVaultOrderStatusLabel = (i18n, status) => {
        let label = '';
        switch (status) {
            case index_9.VaultOrderStatus.Pending:
                label = '$pending';
                break;
            case index_9.VaultOrderStatus.RequestCancel:
                label = '$cancel_requested';
                break;
            case index_9.VaultOrderStatus.Cancelled:
                label = '$canceled';
                break;
            case index_9.VaultOrderStatus.RefundApproved:
                label = '$cancel_approved';
                break;
            case index_9.VaultOrderStatus.Executed:
                label = '$executed';
                break;
            case index_9.VaultOrderStatus.RequestAmend:
                label = '$request_amend';
                break;
            case index_9.VaultOrderStatus.Expired:
                label = '$expired';
                break;
        }
        return i18n.get(label);
    };
    const getAllUserOrders = async (state, i18n) => {
        let vgs = await (0, index_8.getVaultGroupsUpdateUserOrders)(state, true);
        let orders = [];
        vgs.forEach(vg => {
            (0, index_9.forEachNumberIndex)(vg.vaults, vault => {
                orders = orders.concat(vault.userOrders);
            });
        });
        const networkList = state.networkMap;
        const decodeOrderData = (order) => {
            let fromNetwork = networkList[order.fromChain];
            let toNetwork = networkList[order.toChain];
            let vg = (0, index_9.findConstantVaultGroupByToken)(order.toChain, order.toToken.address);
            if (!vg)
                return null;
            let fromVault = vg.vaults[order.fromChain];
            let toVault = vg.vaults[order.toChain];
            if (!fromVault || !toVault)
                return null;
            let fromVaultAddress = fromVault.vaultAddress;
            let fromToken = order.fromToken;
            let fromAmount = new eth_wallet_4.BigNumber(order.fromAmount).shiftedBy(-fromToken.decimals).toFixed();
            let toToken = order.toToken;
            let minOutAmount = new eth_wallet_4.BigNumber(order.toAmountMin).shiftedBy(-toToken.decimals).toFixed();
            let toAmount = minOutAmount; //TODO #xchain order check find a way to grab the real toAmount.
            //sourceVaultToken must be fromToken. targetVaultAsset must be toToken.
            //let sourceVaultToken = findConstantTokenByVault(order.chainId, address);
            //let targetVaultAsset = vaultTokenMap[order.targetChainId][order.targetVaultAddress.toLowerCase()] || "";
            let price = new eth_wallet_4.BigNumber(minOutAmount).div(fromAmount).toFixed();
            let protocolFee = new eth_wallet_4.BigNumber(fromAmount).times(order.protocolFee).dp(0, eth_wallet_4.BigNumber.ROUND_DOWN);
            let statusCode = order.status;
            //TODO #xchain order check
            //if (order.swapTxId) statusCode = VaultOrderStatus.Executed
            if (order.status == index_9.VaultOrderStatus.Pending && new Date().getTime() > order.expire.shiftedBy(3).toNumber())
                statusCode = index_9.VaultOrderStatus.Expired;
            return {
                assetName: vg.assetName,
                fromVaultAddress,
                toVaultAddress: toVault.vaultAddress,
                orderId: order.id,
                //orderHash: order.,
                //date: order.timeCreated ? order.timeCreated * 1000 : 0,
                expire: order.expire,
                fromNetwork,
                toNetwork,
                price,
                protocolFee,
                fromAmount,
                fromToken,
                toToken,
                toAmount,
                minOutAmount,
                sourceVaultToken: fromToken,
                sourceVaultInAmount: minOutAmount,
                statusCode,
                status: getVaultOrderStatusLabel(i18n, statusCode),
                sender: order.toOwner, //FIXME find sender
                //newOrderTxId: order.newOrderTxId,
                //swapTxId: order.swapTxId,
                //withdrawTxId: order.withdrawTxId,
                //amendTxId: order.amendTxId
            };
        };
        let decodedOrders = orders.map(order => decodeOrderData(order)).filter(v => !!v);
        return {
            orders: decodedOrders,
            total: decodedOrders.length
        };
    };
    exports.getAllUserOrders = getAllUserOrders;
    const requestCancelOrder = async (params) => {
        let { vaultAddress, sourceChainId, orderId } = params;
        const wallet = eth_wallet_4.Wallet.getClientInstance();
        let vaultContract = new oswap_cross_chain_bridge_contract_2.Contracts.OSWAP_BridgeVault(wallet, vaultAddress);
        let receipt = vaultContract.requestCancelOrder({ sourceChainId, orderId });
        return receipt;
    };
    exports.requestCancelOrder = requestCancelOrder;
    const withdrawUnexecutedOrder = async (params) => {
        let { vaultAddress, orderId } = params;
        const wallet = eth_wallet_4.Wallet.getClientInstance();
        let vaultContract = new oswap_cross_chain_bridge_contract_2.Contracts.OSWAP_BridgeVault(wallet, vaultAddress);
        let receipt = vaultContract.withdrawUnexecutedOrder(orderId);
        return receipt;
    };
    exports.withdrawUnexecutedOrder = withdrawUnexecutedOrder;
    const requestAmendOrder = async (state, params, callbackFn) => {
        try {
            let { vaultAddress, orderId, tokenOut, minAmountOut } = params;
            const wallet = eth_wallet_4.Wallet.getClientInstance();
            let vaultContract = new oswap_cross_chain_bridge_contract_2.Contracts.OSWAP_BridgeVault(wallet, vaultAddress);
            let order = await vaultContract.orders(orderId);
            let minAmountOutTokenAmount = eth_wallet_4.Utils.toDecimals(minAmountOut, tokenOut.decimals);
            if (tokenOut.isNative) {
                tokenOut.address = index_9.nullAddress;
            }
            const transactionDeadlineInMinutes = state.getCrossChainTransactionDeadline();
            let transactionDeadline = Math.floor(Date.now() / 1000 + (transactionDeadlineInMinutes * 60));
            let editOrder = {
                peerChain: order.peerChain,
                inAmount: order.inAmount,
                outToken: tokenOut.address || "",
                minOutAmount: minAmountOutTokenAmount,
                to: order.to,
                expire: transactionDeadline
            };
            let receipt = await vaultContract.requestAmendOrder({ orderId, order: editOrder });
            return receipt;
        }
        catch (error) {
            if (callbackFn) {
                callbackFn(error);
            }
            return false;
        }
    };
    exports.requestAmendOrder = requestAmendOrder;
});
define("@scom/scom-xchain-bridge-record/formSchema.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/store/index.ts"], function (require, exports, index_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getBuilderSchema = void 0;
    function getBuilderSchema() {
        return {
            dataSchema: {
                type: 'object',
                properties: {
                    // urlParamsEnabled: {
                    //     title: '$enable_url_params',
                    //     type: 'boolean'
                    // },
                    assetNames: {
                        title: '$asset_names',
                        type: 'array',
                        required: true,
                        items: {
                            type: 'string',
                            maxItems: index_10.VaultGroupList.length,
                            title: '$asset_name',
                            enum: index_10.VaultGroupList.map(v => v.assetName),
                            required: true
                        }
                    }
                }
            },
            uiSchema: {
                type: 'VerticalLayout',
                elements: [
                    // {
                    //     type: 'Control',
                    //     scope: '#/properties/urlParamsEnabled'
                    // },
                    {
                        type: 'Control',
                        scope: '#/properties/assetNames',
                        detail: {
                            type: 'VerticalLayout'
                        }
                    }
                ]
            }
        };
    }
    exports.getBuilderSchema = getBuilderSchema;
});
define("@scom/scom-xchain-bridge-record/model.ts", ["require", "exports", "@scom/scom-xchain-bridge-record/store/index.ts", "@scom/scom-token-list", "@scom/scom-xchain-bridge-record/API.ts", "@scom/scom-xchain-bridge-record/crosschain-utils/index.ts", "@ijstech/eth-contract", "@scom/scom-xchain-bridge-record/data.json.ts", "@scom/scom-xchain-bridge-record/formSchema.ts"], function (require, exports, index_11, scom_token_list_4, API_2, index_12, eth_contract_1, data_json_2, formSchema_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Model = exports.pageSize = void 0;
    exports.pageSize = 5;
    class Model {
        constructor(module, state, options) {
            this._data = {
                defaultChainId: 0,
                wallets: [],
                networks: [],
                assetNames: []
            };
            this.options = {
                refreshWidget: async () => { },
                updatePageNumber: (page) => { },
                resetFilterUI: () => { },
                resetRpcWallet: () => { },
                setContainerTag: (value) => { },
                updateTheme: () => { }
            };
            this._filter = {};
            this._orders = [];
            this._itemStart = 0;
            this._itemEnd = exports.pageSize;
            this.module = module;
            this.state = state;
            this.options = options;
        }
        get defaultChainId() {
            return this._data.defaultChainId || this.networks[0]?.chainId;
        }
        set defaultChainId(value) {
            this._data.defaultChainId = value;
        }
        get wallets() {
            return this._data.wallets || [];
        }
        set wallets(value) {
            this._data.wallets = value;
        }
        get networks() {
            return this._data.networks || this.supportedChainIds;
        }
        set networks(value) {
            this._data.networks = value;
        }
        get showHeader() {
            return this._data.showHeader ?? true;
        }
        set showHeader(value) {
            this._data.showHeader = value;
        }
        get showFooter() {
            return this._data.showFooter ?? true;
        }
        set showFooter(value) {
            this._data.showFooter = value;
        }
        get assetNames() {
            return this._data.assetNames || [];
        }
        set assetNames(value) {
            this._data.assetNames = value;
        }
        get urlParamsEnabled() {
            return this._data.urlParamsEnabled;
        }
        set urlParamsEnabled(value) {
            this._data.urlParamsEnabled = value;
        }
        get supportedChainIds() {
            const vaultGroups = index_11.VaultGroupList.filter(v => this.assetNames.includes(v.assetName));
            const chainIdSet = new Set();
            vaultGroups.forEach(v => {
                Object.keys(v.vaults).forEach(chainId => {
                    chainIdSet.add(Number(chainId));
                });
            });
            const chainIds = Array.from(chainIdSet).map(id => ({ chainId: id }));
            return chainIds;
        }
        async setData(value) {
            this._data = value;
            this.state.setNetworkConfig(this.networks);
            this.state.setSupportedAssetNames(value.assetNames);
            for (let network of this.networks) {
                scom_token_list_4.tokenStore.updateTokenMapData(network.chainId);
            }
            await this.options.resetRpcWallet();
            const isConnected = (0, index_11.isWalletConnected)();
            this.initializedState = {
                chainId: this.state.getChainId(),
                connected: isConnected,
                loading: true
            };
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
        setTag(value) {
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
        updateTag(type, value) {
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
                    setData: async (value) => {
                        const defaultData = data_json_2.default.defaultBuilderData;
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
        getActions() {
            const formSchema = (0, formSchema_1.getBuilderSchema)();
            const actions = [
                {
                    name: 'Edit',
                    icon: 'edit',
                    command: (builder, userInputData) => {
                        let oldData = {
                            defaultChainId: 0,
                            wallets: [],
                            networks: [],
                            assetNames: []
                        };
                        let oldTag = {};
                        return {
                            execute: async () => {
                                oldData = JSON.parse(JSON.stringify(this._data));
                                const { networks, ...themeSettings } = userInputData;
                                const generalSettings = {
                                    networks,
                                };
                                this._data.networks = generalSettings.networks;
                                this._data.defaultChainId = this._data.networks[0]?.chainId;
                                await this.options.resetRpcWallet();
                                this.options.refreshWidget((0, index_11.isWalletConnected)());
                                if (builder?.setData)
                                    builder.setData(userInputData);
                                oldTag = JSON.parse(JSON.stringify(this.module.tag));
                                if (builder?.setTag)
                                    builder.setTag(themeSettings);
                                else
                                    this.setTag(themeSettings);
                                this.options.setContainerTag(themeSettings);
                            },
                            undo: () => {
                                this._data = JSON.parse(JSON.stringify(oldData));
                                this.options.refreshWidget((0, index_11.isWalletConnected)());
                                if (builder?.setData)
                                    builder.setData(this._data);
                                this.module.tag = JSON.parse(JSON.stringify(oldTag));
                                if (builder?.setTag)
                                    builder.setTag(this.module.tag);
                                else
                                    this.setTag(this.module.tag);
                                this.options.setContainerTag(this.module.tag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: formSchema.dataSchema,
                    userInputUISchema: formSchema.uiSchema
                }
            ];
            return actions;
        }
        get switchChainId() {
            return this._switchChainId;
        }
        set switchChainId(value) {
            this._switchChainId = value;
        }
        get chainId() {
            return this._chainId;
        }
        set chainId(value) {
            this._chainId = value;
        }
        get isCancel() {
            return this._isCancel;
        }
        set isCancel(value) {
            this._isCancel = value;
        }
        get resubmitToken() {
            return this._resubmitToken;
        }
        set resubmitToken(value) {
            this._resubmitToken = value;
        }
        get orderHash() {
            return this._orderHash;
        }
        set orderHash(value) {
            this._orderHash = value;
        }
        get needToRefresh() {
            return this._needToRefresh;
        }
        set needToRefresh(value) {
            this._needToRefresh = value;
        }
        get selectedItem() {
            return this._selectedItem;
        }
        set selectedItem(value) {
            this._selectedItem = value;
        }
        get filter() {
            return this._filter;
        }
        set filter(value) {
            this._filter = value;
        }
        get orders() {
            return this._orders;
        }
        set orders(value) {
            this._orders = value;
        }
        get newMinAmountOut() {
            return this._newMinAmountOut;
        }
        set newMinAmountOut(value) {
            this._newMinAmountOut = value;
        }
        get targetTokenBalances() {
            return this._targetTokenBalances;
        }
        set targetTokenBalances(value) {
            this._targetTokenBalances = value;
        }
        get targetTokenMap() {
            return this._targetTokenMap;
        }
        set targetTokenMap(value) {
            this._targetTokenMap = value;
        }
        get itemStart() {
            return this._itemStart;
        }
        set itemStart(value) {
            this._itemStart = value;
        }
        get itemEnd() {
            return this._itemEnd;
        }
        set itemEnd(value) {
            this._itemEnd = value;
        }
        get currentAction() {
            return this._currentAction;
        }
        set currentAction(value) {
            this._currentAction = value;
        }
        get sortByDate() {
            return this._sortByDate;
        }
        set sortByDate(value) {
            this._sortByDate = value;
        }
        get initializedState() {
            return this._initializedState;
        }
        set initializedState(value) {
            this._initializedState = value;
        }
        get networkList() {
            const list = this.state.getMatchNetworks({ isDisabled: false });
            const networks = this.state.getNetworkConfig();
            const testnetSupportedList = list.filter(v => v.isTestnet && networks.some(n => n.chainId == v.chainId));
            const mainnetSupportedList = list.filter(v => !v.isTestnet && networks.some(n => n.chainId == v.chainId));
            const isMainnet = mainnetSupportedList.some((item) => item.chainId == this.chainId);
            const supportList = isMainnet ? mainnetSupportedList : testnetSupportedList;
            return supportList;
        }
        get dataListFiltered() {
            let list = this.orders;
            if (!Object.keys(this.filter).length)
                return list;
            const { sourceChain, targetChain, sort, assetName } = this.filter;
            if (sourceChain) {
                list = list.filter((order) => order.fromNetwork.chainId == sourceChain);
            }
            if (targetChain) {
                list = list.filter((order) => order.toNetwork.chainId == targetChain);
            }
            if (assetName) {
                list = list.filter((order) => order.assetName === assetName);
            }
            if (sort) {
                list = list.sort((a, b) => sort === "Latest" /* DateOptions.LATEST */ ? b.orderId - a.orderId : a.orderId - b.orderId);
            }
            return list;
        }
        get paginatedData() {
            return this.dataListFiltered.slice(this.itemStart, this.itemEnd);
        }
        get targetTokenList() {
            let dataList = [];
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
                    }
                    else {
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
            if (!this.urlParamsEnabled)
                return;
            const wHref = window.location.href;
            const startIdx = wHref.indexOf('?');
            if (startIdx > -1 && (0, index_11.isWalletConnected)()) {
                const newURL = window.location.protocol + "//" + window.location.host + '/' + location.hash.split("?")[0];
                window.history.replaceState({}, '', newURL);
                this.removeCurrentValues();
            }
        }
        updateUrlParams(record) {
            if (!record || !this.urlParamsEnabled)
                return;
            const queryRouter = {
                orderId: record.orderId,
                chainId: record.fromNetwork.chainId,
                vaultAddress: record.fromVaultAddress
            };
            const queryString = new URLSearchParams(queryRouter).toString();
            const newURL = window.location.protocol + "//" + window.location.host + '/' + location.hash.split("?")[0] + '?' + queryString;
            window.history.replaceState({}, '', newURL);
        }
        handleUrlParams() {
            if (!this.urlParamsEnabled)
                return;
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
                    const pageNumber = Math.ceil((index + 1) / exports.pageSize);
                    const orderHash = `${orderId}-${chainId}-${vaultAddress}`;
                    this.options.updatePageNumber(pageNumber);
                    this.orderHash = orderHash;
                }
            }
        }
        async getAllUserOrders() {
            try {
                let vaultOrders = await (0, API_2.getAllUserOrders)(this.state, this.module.i18n);
                this.orders = vaultOrders.orders;
            }
            catch { }
            ;
        }
        async getRoute() {
            let route;
            try {
                const params = { ...this.selectedItem, toToken: { ...this.resubmitToken } };
                let vaultGroup = await (0, index_12.findVaultGroupByToken)(this.state, params.fromNetwork.chainId, params.sourceVaultToken.address);
                route = (0, index_12.getRoute)({
                    vaultGroup,
                    toChainId: params.toNetwork.chainId,
                    fromChainId: params.fromNetwork.chainId,
                    inAmount: new eth_contract_1.BigNumber(params.sourceVaultInAmount)
                });
            }
            catch { }
            return route;
        }
        findConstantToVault() {
            //there will be only one route
            return (0, index_11.findConstantToVault)(this.selectedItem.fromNetwork.chainId, this.selectedItem.sourceVaultToken.address, this.selectedItem.toNetwork.chainId);
        }
        async getTargetInfoObj(targetChainId) {
            let tokenBalances = scom_token_list_4.tokenStore.getTokenBalancesByChainId(targetChainId);
            if (!tokenBalances || !Object.keys(tokenBalances).length) {
                await scom_token_list_4.tokenStore.updateTokenBalancesByChainId(targetChainId);
            }
            const tokenMap = scom_token_list_4.tokenStore.getTokenMapByChainId(targetChainId);
            tokenBalances = scom_token_list_4.tokenStore.getTokenBalancesByChainId[targetChainId];
            this.targetTokenBalances = tokenBalances;
            this.targetTokenMap = Object.keys(tokenMap || {})
                .reduce((obj, key) => {
                obj[key] = (tokenMap || {})[key];
                return obj;
            }, {});
        }
        async requestCancelOrder() {
            const { toVaultAddress, fromNetwork, orderId } = this.selectedItem;
            await (0, API_2.requestCancelOrder)({ vaultAddress: toVaultAddress, sourceChainId: fromNetwork.chainId, orderId });
        }
        async requestAmendOrder(callback) {
            const { fromVaultAddress, orderId } = this.selectedItem;
            const tokenOut = Object.assign({}, this.resubmitToken);
            await (0, API_2.requestAmendOrder)(this.state, { vaultAddress: fromVaultAddress, orderId, tokenOut, minAmountOut: new eth_contract_1.BigNumber(this.newMinAmountOut) }, callback);
        }
        async withdrawUnexecutedOrder() {
            const { fromVaultAddress, orderId } = this.selectedItem;
            await (0, API_2.withdrawUnexecutedOrder)({ vaultAddress: fromVaultAddress, orderId });
        }
    }
    exports.Model = Model;
});
define("@scom/scom-xchain-bridge-record", ["require", "exports", "@ijstech/components", "@scom/scom-xchain-bridge-record/column.ts", "@scom/scom-xchain-bridge-record/assets.ts", "@scom/scom-xchain-bridge-record/index.css.ts", "@scom/scom-xchain-bridge-record/global/index.ts", "@scom/scom-xchain-bridge-record/store/index.ts", "@ijstech/eth-wallet", "@scom/scom-token-list", "@scom/scom-xchain-bridge-record/languages/index.ts", "@scom/scom-xchain-bridge-record/model.ts", "@scom/scom-xchain-bridge-record/data.json.ts", "@scom/scom-blocknote-sdk"], function (require, exports, components_6, column_1, assets_1, index_css_1, index_13, index_14, eth_wallet_5, scom_token_list_5, index_15, model_1, data_json_3, scom_blocknote_sdk_1) {
    "use strict";
    var ScomXchainBridgeRecord_1;
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_6.Styles.Theme.ThemeVars;
    ;
    let ScomXchainBridgeRecord = ScomXchainBridgeRecord_1 = class ScomXchainBridgeRecord extends components_6.Module {
        constructor(parent, options) {
            super(parent, options);
            this._lastUpdated = 0;
            this.lastUpdatedText = '$data_last_updated_0_seconds_ago';
            this.paging = {
                position: 'bottomRight',
                pageSize: model_1.pageSize,
                currentPage: 1
            };
            this.isModalRefreshed = {};
            this.clientEvents = [];
            this.tag = {};
            this.onChainChange = async () => {
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
            };
            this.onWalletConnect = async () => {
                this.renderFilterButton();
                this.refreshData();
            };
            this.onUpdateReceiveVal = () => {
                this.updateReceiveVal();
            };
            this.onSelectIndex = (target, oldPage, isClicked) => {
                if (isClicked) {
                    this.model.removeUrlParams();
                }
                this.model.removeCurrentValues();
                this.model.itemStart = (this.listPagination.currentPage - 1) * model_1.pageSize;
                this.model.itemEnd = this.model.itemStart + model_1.pageSize;
                this.paging.currentPage = this.listPagination.currentPage;
                this.renderRecords();
            };
            this.updatePageNumber = (pageNumber) => {
                if (this.paging.currentPage !== pageNumber) {
                    this.paging.currentPage = pageNumber;
                }
            };
            this.refreshData = async () => {
                const currentChainId = this.state.getChainId();
                const isConnected = (0, index_14.isWalletConnected)();
                const { chainId, connected, loading } = this.model.initializedState;
                if (chainId === currentChainId && connected === isConnected && loading === true)
                    return;
                this.model.initializedState = {
                    chainId: currentChainId,
                    connected: isConnected,
                    loading: true
                };
                await this.refreshUI(isConnected);
                this.model.initializedState.loading = false;
            };
            this.refreshUI = async (connected) => {
                this.model.chainId = this.state.getChainId();
                this.model.needToRefresh = false;
                this.paging.currentPage = 1;
                this.model.sortByDate = "Latest" /* DateOptions.LATEST */;
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
                    }
                    catch (err) {
                        this.resetData();
                    }
                }
                else {
                    this.resetData();
                    this.emptyMsg.caption = this.i18n.get('$please_connect_with_your_wallet');
                }
                this.bridgeRecordMobile.visible = true;
                this.iconRefresh.enabled = true;
                this.lastUpdated = 0;
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    this.lastUpdated++;
                }, 1000);
            };
            this.onChangeSorting = async (value) => {
                this.sortDateModal.visible = false;
                if (this.model.sortByDate === value)
                    return;
                this.model.sortByDate = value;
                this.sortDateBtn.caption = this.i18n.get(value === "Latest" /* DateOptions.LATEST */ ? '$latest_swap' : '$oldest_swap');
                this.model.removeUrlParams();
                await this.updateRecords();
            };
            this.onChangeSource = async (network) => {
                this.searchSourceModal.visible = false;
                if ((!network && !this.sourceChain) || network?.chainId === this.sourceChain?.chainId)
                    return;
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
                            this.searchDestinationBtn.prepend(this.$render("i-image", { class: "network-img", url: _url }));
                        }
                        else {
                            this.searchDestinationBtn.caption = '$destination_chain';
                        }
                    }
                    this.sourceChain = network;
                    this.searchSourceBtn.caption = network.chainName;
                    const url = network.url;
                    this.searchSourceBtn.prepend(this.$render("i-image", { class: "network-img", url: url }));
                }
                else {
                    this.sourceChain = null;
                    this.searchSourceBtn.caption = '$source_chain';
                }
                this.oldSource = Object.assign({}, this.sourceChain);
                this.model.removeUrlParams();
                await this.updateRecords();
            };
            this.onChangeDestination = async (network) => {
                this.searchDestinationModal.visible = false;
                if ((!network && !this.destinationChain) || network?.chainId === this.destinationChain?.chainId)
                    return;
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
                            this.searchSourceBtn.prepend(this.$render("i-image", { class: "network-img", url: _url }));
                        }
                        else {
                            this.searchSourceBtn.caption = this.i18n.get('$source_chain');
                        }
                    }
                    this.destinationChain = network;
                    this.searchDestinationBtn.caption = network.chainName;
                    const url = network.url;
                    this.searchDestinationBtn.prepend(this.$render("i-image", { class: "network-img", url: url }));
                }
                else {
                    this.destinationChain = null;
                    this.searchDestinationBtn.caption = this.i18n.get('$destination_chain');
                }
                this.oldDestination = Object.assign({}, this.destinationChain);
                this.model.removeUrlParams();
                await this.updateRecords();
            };
            this.expandRecord = () => {
                if (this.model.orderHash) {
                    setTimeout(() => {
                        const currentRecord = this.bridgeRecordTable.querySelector(`[order-hash="${this.model.orderHash}"]`);
                        if (currentRecord) {
                            const row = currentRecord.closest('tr');
                            if (!row.classList.contains('is--expanded')) {
                                currentRecord.click();
                            }
                        }
                        const currentRecordMobile = this.bridgeRecordMobile.querySelector(`[order-hash="${this.model.orderHash}"]`);
                        if (currentRecordMobile && !currentRecordMobile.hasAttribute('is--expanded')) {
                            currentRecordMobile.click();
                        }
                    }, 500);
                }
            };
            this.updateRecords = async (page) => {
                if (this.model.needToRefresh) {
                    this.model.needToRefresh = false;
                }
                else if (this.largeLoading) {
                    this.wrapperTimer.visible = false;
                    this.largeLoading.visible = true;
                }
                this.paging.currentPage = page || 1;
                let params = {
                    sort: this.model.sortByDate
                };
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
            };
            this.renderRecords = () => {
                this.model.handleUrlParams();
                this.model.itemStart = (this.listPagination.currentPage - 1) * model_1.pageSize;
                this.model.itemEnd = this.model.itemStart + model_1.pageSize;
                this.paging.totalPage = Math.ceil(this.model.dataListFiltered.length / model_1.pageSize);
                this.listPagination.visible = this.paging.totalPage > 1;
                this.onRenderDataMobile();
                if (this.largeLoading) {
                    this.wrapperTimer.visible = true;
                    this.largeLoading.visible = false;
                }
                this.bridgeRecordTable.data = this.model.paginatedData;
                this.expandRecord();
            };
            this.onConfirm = async (actionType) => {
                if (!this.state.isRpcWalletConnected()) {
                    const chainId = this.state.getChainId();
                    const clientWallet = eth_wallet_5.Wallet.getClientInstance();
                    await clientWallet.switchNetwork(chainId);
                    return;
                }
                (0, index_13.showResultMessage)(this.txStatusModal, 'warning', this.i18n.get('$confirming'));
                let btnElement = this.btnElm;
                const callback = async (err, receipt) => {
                    if (err) {
                        (0, index_13.showResultMessage)(this.txStatusModal, 'error', err);
                    }
                    else if (receipt) {
                        (0, index_13.showResultMessage)(this.txStatusModal, 'success', receipt);
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
                (0, index_13.registerSendTxEvents)({
                    transactionHash: callback,
                    confirmation: confirmationCallback
                });
                if (!actionType)
                    actionType = this.model.isCancel ? 0 /* ActionType.Cancel */ : 2 /* ActionType.Withdraw */;
                switch (actionType) {
                    case 0 /* ActionType.Cancel */:
                        this.requestCancelModal.visible = false;
                        this.model.requestCancelOrder();
                        break;
                    case 1 /* ActionType.Resubmit */:
                        this.resubmitOrderModal.visible = false;
                        this.model.requestAmendOrder(callback);
                        break;
                    case 2 /* ActionType.Withdraw */:
                        this.requestCancelModal.visible = false;
                        this.model.withdrawUnexecutedOrder();
                        break;
                    default:
                        break;
                }
            };
            this.onSwitchNetwork = async (action) => {
                try {
                    if (action === 1 /* ActionType.Resubmit */) {
                        this.resubmitOrderModal.visible = false;
                    }
                    else {
                        this.requestCancelModal.visible = false;
                    }
                    this.model.needToRefresh = true;
                    this.model.currentAction = action;
                    const { orderId, fromNetwork, fromVaultAddress } = this.model.selectedItem;
                    this.model.orderHash = `${orderId}-${fromNetwork.chainId}-${fromVaultAddress}`;
                    if (!(0, index_14.isWalletConnected)()) {
                        this.switchNetworkByWallet();
                    }
                    else {
                        const rpcWallet = this.state.getRpcWallet();
                        if (rpcWallet.chainId != this.model.switchChainId) {
                            await rpcWallet.switchNetwork(this.model.switchChainId);
                        }
                        const clientWallet = eth_wallet_5.Wallet.getClientInstance();
                        await clientWallet.switchNetwork(this.model.switchChainId);
                    }
                }
                catch {
                    this.model.removeUrlParams();
                    this.model.removeCurrentValues();
                }
            };
            this.updateSwitchButton = () => {
                if (this.model.selectedItem) {
                    const { fromNetwork, toNetwork } = this.model.selectedItem;
                    if (this.model.currentAction === 1 /* ActionType.Resubmit */) {
                        this.resubmitOrderModal.visible = true;
                        if (fromNetwork.chainId != this.model.chainId || !this.state.isRpcWalletConnected()) {
                            this.resubmitConfirmPnl.visible = false;
                            this.resubmitConfirmNetwork.visible = true;
                        }
                        else {
                            this.resubmitConfirmPnl.visible = true;
                            this.resubmitConfirmNetwork.visible = false;
                        }
                    }
                    else if (this.model.currentAction === 0 /* ActionType.Cancel */) {
                        this.requestCancelModal.visible = true;
                        const network = this.model.isCancel ? toNetwork : fromNetwork;
                        if (network.chainId != this.model.chainId || !this.state.isRpcWalletConnected()) {
                            this.switchNetworkPnl.visible = true;
                            this.confirmNetwork.visible = false;
                        }
                        else {
                            this.switchNetworkPnl.visible = false;
                            this.confirmNetwork.visible = true;
                        }
                    }
                }
            };
            this.showCancelOrWithdrawModal = (elm, record, isCancel) => {
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
                }
                else {
                    this.switchNetworkPnl.visible = false;
                    this.confirmNetwork.visible = true;
                }
                this.titleModalLabel.caption = this.i18n.get(isCancel ? '$request_cancel' : '$withdraw');
                this.networkNameLabel.caption = this.i18n.get(isCancel ? '$destination_chain' : '$source_chain');
                this.networkNameVal.caption = network.chainName;
                const amount = record.sourceVaultInAmount || null;
                const symbol = record.sourceVaultToken?.symbol || '';
                this.withdrawAmount.caption = amount === null ? '-' : `${components_6.FormatUtils.formatNumber(new eth_wallet_5.BigNumber(amount).multipliedBy(new eth_wallet_5.BigNumber(1).minus(protocolFee)).toFixed(), { decimalFigures: 4, hasTrailingZero: false })} ${symbol}`;
                this.noteCancelOrWithdraw.caption = isCancel ?
                    this.i18n.get('$you_can_withdraw_the_tokens_after_the_cancellation_is_approved_by_the_bridge_trolls._the_cancellation_is_subjected_to_a_cancellation_fee', { fee: `${new eth_wallet_5.BigNumber(protocolFee).multipliedBy(100).toFixed(2)}%` }) :
                    this.i18n.get('$the_token_will_be_returned_to_your_wallet_after_withdrawal');
                this.noteNetwork.caption = this.i18n.get(isCancel ?
                    '$the_request_must_be_submitted_from_the_destination_chain,_please_switch_your_network_as_instructed' :
                    '$the_request_must_be_submitted_from_the_source_chain,_please_switch_your_network_as_instructed');
                this.requestCancelModal.visible = true;
            };
            this.showResubmitModal = async (elm, record) => {
                this.model.updateUrlParams(record);
                this.btnElm = elm;
                this.model.selectedItem = record;
                const { fromNetwork, toToken, toNetwork } = record;
                if (fromNetwork.chainId != this.model.chainId || !this.state.isRpcWalletConnected()) {
                    this.resubmitConfirmPnl.visible = false;
                    this.resubmitConfirmNetwork.visible = true;
                }
                else {
                    this.resubmitConfirmPnl.visible = true;
                    this.resubmitConfirmNetwork.visible = false;
                }
                if (!this.tokenReceiveSelection.onSelectToken) {
                    this.tokenReceiveSelection.onSelectToken = async (token) => {
                        this.tokenReceiveSelection.tokenReadOnly = true;
                        this.model.resubmitToken = token;
                        await this.updateReceiveVal();
                        this.tokenReceiveSelection.tokenReadOnly = false;
                    };
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
                }
                else {
                    this.tokenReceiveSelection.token = { chainId: toNetwork.chainId, ...toToken };
                }
                this.model.resubmitToken = { chainId: toNetwork.chainId, ...toToken };
                this.tokenReceiveSelection.tokenReadOnly = true; // No choosing token for pilot launch
                await this.updateReceiveVal();
            };
            this.closeRequestCancel = () => {
                this.requestCancelModal.visible = false;
                this.model.removeCurrentValues();
            };
            this.closeResubmitModal = () => {
                this.resubmitOrderModal.visible = false;
                this.model.removeCurrentValues();
            };
            this.resetReceiveVal = () => {
                this.resubmitExpectedReceive.caption = '-';
                this.model.newMinAmountOut = '0';
            };
            this.updateReceiveVal = async () => {
                try {
                    let route = await this.model.getRoute();
                    //there will be only one route
                    let vaultInfo = this.model.findConstantToVault();
                    if (vaultInfo) {
                        const { toAmount } = route;
                        const minReceivedMaxSold = toAmount.times(1 - this.state.getSlippageTolerance() / 100).toFixed();
                        this.model.newMinAmountOut = minReceivedMaxSold;
                        this.resubmitExpectedReceive.caption = components_6.FormatUtils.formatNumber(toAmount.toFixed(), { decimalFigures: 4, hasTrailingZero: false });
                        // this.resubmitMinimumReceive.caption = formatNumber(this.newMinAmountOut);
                        this.btnResubmit.enabled = toAmount.gt(0);
                        this.btnResubmitNetwork.enabled = toAmount.gt(0);
                        this.lbResubmitError.visible = toAmount.lte(0);
                    }
                    else {
                        this.resetReceiveVal();
                    }
                }
                catch {
                    this.resetReceiveVal();
                }
            };
            this.onRefresh = async () => {
                var self = this;
                this.iconRefresh.enabled = false;
                await this.updateRecords(1);
                setTimeout(function () {
                    self.lastUpdated = 0;
                    self.iconRefresh.enabled = true;
                }, 1000);
            };
            this.onRenderDataMobile = async () => {
                const list = this.model.paginatedData;
                this.bridgeRecordMobile.clearInnerHTML();
                if (!list.length) {
                    this.bridgeRecordMobile.appendChild(this.$render("i-hstack", { class: "empty-header", justifyContent: "center" },
                        this.$render("i-image", { url: assets_1.default.fullPath('img/icon-advice.svg'), minWidth: 60, minHeight: 60 }),
                        this.$render("i-panel", null,
                            this.$render("i-label", { id: "emptyMsg", caption: this.i18n.get((0, index_14.isWalletConnected)() ? '$no_data' : '$please_connect_with_your_wallet'), font: { size: '1rem', color: Theme.text.primary, bold: true }, margin: { left: 10 } }))));
                    return;
                }
                for (const record of list) {
                    const { orderId, fromToken, toToken, fromNetwork, toNetwork, fromVaultAddress } = record;
                    // const date = formatDate(record.date, DefaultDateTimeFormat);
                    const fromSymbol = fromToken.symbol;
                    const toSymbol = toToken.symbol;
                    const fromTokenImg = (0, index_14.getTokenIcon)(fromToken.address, fromNetwork.chainId);
                    const toTokenImg = (0, index_14.getTokenIcon)(toToken.address, toNetwork.chainId);
                    const color = record.statusCode === index_14.VaultOrderStatus.Executed ? Theme.colors.success.main : Theme.colors.error.main;
                    const expandPanel = await components_6.Panel.create();
                    expandPanel.visible = false;
                    expandPanel.appendChild(this.onExpandedRowRender(record, true));
                    const handleExpandRow = (target) => {
                        expandPanel.visible = !expandPanel.visible;
                        if (expandPanel.visible) {
                            this.model.updateUrlParams(record);
                            target.setAttribute('is--expanded', '');
                        }
                        else {
                            target.removeAttribute('is--expanded');
                        }
                    };
                    this.bridgeRecordMobile.appendChild(this.$render("i-panel", { class: "bg-item" },
                        this.$render("i-hstack", { class: "row-item" },
                            this.$render("i-vstack", { class: "header-item" },
                                this.$render("i-hstack", { gap: "4px", verticalAlignment: "center" },
                                    this.$render("i-label", { caption: fromSymbol, font: { bold: true } }),
                                    this.$render("i-label", { caption: 'to' }),
                                    this.$render("i-label", { caption: toSymbol, font: { bold: true } }),
                                    this.$render("i-label", { caption: `#${orderId}` }))),
                            this.$render("i-vstack", { margin: { left: 'auto' } },
                                this.$render("i-icon", { class: "pointer", margin: { top: 4 }, name: "ellipsis-v", "order-hash": `${orderId}-${fromNetwork.chainId}-${fromVaultAddress}`, fill: Theme.text.primary, width: 15, height: 15, onClick: handleExpandRow.bind(this) }))),
                        this.$render("i-hstack", { margin: { bottom: 4 }, class: "row-item", verticalAlignment: "center" },
                            this.$render("i-image", { margin: { right: 4 }, width: "20px", class: "inline-block", url: fromTokenImg }),
                            this.$render("i-label", { caption: `${components_6.FormatUtils.formatNumber(record.fromAmount, { decimalFigures: 4, hasTrailingZero: false })} ${fromSymbol}` })),
                        this.$render("i-hstack", { class: "row-item", verticalAlignment: "center" },
                            this.$render("i-image", { margin: { right: 4 }, width: "20px", class: "inline-block", url: (0, index_14.getNetworkImg)(this.state, fromNetwork.chainId) }),
                            this.$render("i-label", { class: "text-opacity", caption: fromNetwork.chainName })),
                        this.$render("i-icon", { name: "arrow-down", fill: Theme.text.primary, margin: { left: 40, bottom: 8 }, width: 16, height: 16, cursor: "default" }),
                        this.$render("i-hstack", { margin: { bottom: 4 }, class: "row-item", verticalAlignment: "center" },
                            this.$render("i-image", { margin: { right: 4 }, width: "20px", class: "inline-block", url: toTokenImg }),
                            this.$render("i-label", { caption: `${components_6.FormatUtils.formatNumber(record.toAmount, { decimalFigures: 4, hasTrailingZero: false })} ${toSymbol}` })),
                        this.$render("i-hstack", { class: "row-item", verticalAlignment: "center" },
                            this.$render("i-image", { margin: { right: 4 }, width: "20px", class: "inline-block", url: (0, index_14.getNetworkImg)(this.state, toNetwork.chainId) }),
                            this.$render("i-label", { class: "text-opacity", caption: toNetwork.chainName })),
                        this.$render("i-hstack", { class: "row-status" },
                            this.$render("i-label", { font: { color: color, size: '0.875rem' }, caption: record.status })),
                        expandPanel));
                }
                ;
            };
            this.onExpandedRowRender = (record, isMobile) => {
                let color = record.statusCode === index_14.VaultOrderStatus.Executed ? Theme.colors.success.main : Theme.colors.error.main;
                let btn = [];
                if (record.statusCode === index_14.VaultOrderStatus.Pending || record.statusCode === index_14.VaultOrderStatus.Expired) {
                    btn = (this.$render("i-hstack", { gap: 8, class: "group-btn", alignItems: "center", wrap: "wrap", margin: { bottom: 20 } },
                        this.$render("i-button", { caption: "$amend_order", ...index_css_1.buttonProps, minWidth: 150, class: "text-center", onClick: (e) => this.showResubmitModal(e, record) }),
                        this.$render("i-button", { caption: "$request_cancel", ...index_css_1.buttonProps, minWidth: 150, class: "text-center", onClick: (e) => this.showCancelOrWithdrawModal(e, record, true) })));
                }
                else if (record.statusCode === index_14.VaultOrderStatus.RefundApproved) {
                    btn = (this.$render("i-vstack", { margin: { bottom: 20 }, horizontalAlignment: "center" },
                        this.$render("i-button", { caption: "$withdraw", ...index_css_1.buttonProps, minWidth: 150, class: "text-center", onClick: (e) => this.showCancelOrWithdrawModal(e, record) })));
                }
                return (this.$render("i-panel", { class: `expanded-item flex ${isMobile ? 'expanded-item-mobile' : ''}` },
                    this.$render("i-vstack", { class: "col-50" },
                        this.$render("i-hstack", { class: "row-table" },
                            this.$render("i-vstack", { class: "custom-col" },
                                this.$render("i-label", { class: "text-grey", caption: "$minimum_receive" })),
                            this.$render("i-hstack", { verticalAlignment: "center" },
                                this.$render("i-image", { width: "20px", class: "inline-block", margin: { right: 8 }, url: (0, column_1.toTokenIcon)(record) }),
                                this.$render("i-label", { caption: `${components_6.FormatUtils.formatNumber(record.minOutAmount, { decimalFigures: 4, hasTrailingZero: false })} ${record.toToken.symbol}` }))),
                        this.$render("i-hstack", { class: "row-table" },
                            this.$render("i-vstack", { class: "custom-col" },
                                this.$render("i-label", { class: "text-grey", caption: "$status" })),
                            this.$render("i-vstack", null,
                                this.$render("i-label", { font: { color: color }, caption: record.status }))),
                        this.$render("i-hstack", { class: "row-table" },
                            this.$render("i-vstack", { class: "custom-col" },
                                this.$render("i-label", { class: "text-grey", caption: "$sender_address" })),
                            this.$render("i-hstack", { verticalAlignment: "center" },
                                this.$render("i-label", { margin: { right: 8 }, caption: (0, column_1.truncateAddress)(record.sender, 13) }),
                                this.$render("i-icon", { name: "copy", width: "14px", height: "14px", fill: Theme.text.primary, tooltip: { content: '$the_address_has_been_copied', trigger: 'click' }, onClick: () => components_6.application.copyToClipboard(record.sender || ''), class: "inline-flex pointer" })))),
                    this.$render("i-vstack", { class: "col-50" }, btn)));
            };
            this.onCellClick = (target, rowIndex, columnIdx, record) => {
                const row = target.querySelector(`tr[data-index="${rowIndex}"]`);
                if (!row || row.classList.contains('is--expanded'))
                    return;
                this.model.updateUrlParams(record);
            };
            this.initModel();
            this.$eventBus = components_6.application.EventBus;
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
        registerEvent() {
            this.clientEvents.push(this.$eventBus.register(this, "slippageToleranceChanged" /* EventId.SlippageToleranceChanged */, this.onUpdateReceiveVal));
        }
        get defaultChainId() {
            return this.model.defaultChainId;
        }
        set defaultChainId(value) {
            this.model.defaultChainId = value;
        }
        get wallets() {
            return this.model.wallets ?? [];
        }
        set wallets(value) {
            this.model.wallets = value;
        }
        get networks() {
            return this.model.networks ?? [];
        }
        set networks(value) {
            this.model.networks = value;
        }
        get showHeader() {
            return this.model.showHeader ?? true;
        }
        set showHeader(value) {
            this.model.showHeader = value;
        }
        get showFooter() {
            return this.model.showFooter ?? true;
        }
        set showFooter(value) {
            this.model.showFooter = value;
        }
        get assetNames() {
            return this.model.assetNames || [];
        }
        set assetNames(value) {
            this.model.assetNames = value;
        }
        get urlParamsEnabled() {
            return this.model.urlParamsEnabled;
        }
        set urlParamsEnabled(value) {
            this.model.urlParamsEnabled = value;
        }
        set width(value) {
            this.resizeLayout(value);
        }
        getConfigurators() {
            this.initModel();
            return this.model.getConfigurators();
        }
        getConfigJson() {
            return index_15.configJson;
        }
        addBlock(blocknote, executeFn, callbackFn) {
            const blockType = 'xchain-bridge-record';
            const moduleData = {
                name: "@scom/scom-xchain-bridge-record",
                localPath: "scom-xchain-bridge-record"
            };
            function getData(href) {
                const widgetData = (0, scom_blocknote_sdk_1.parseUrl)(href);
                if (widgetData) {
                    const { module, properties } = widgetData;
                    if (module.localPath === moduleData.localPath)
                        return { ...properties };
                }
                return false;
            }
            const XchainBridgeRecordBlock = blocknote.createBlockSpec({
                type: blockType,
                propSchema: {
                    ...blocknote.defaultProps,
                    assetNames: index_14.VaultGroupList.map(v => v.assetName),
                    defaultChainId: { default: 0 },
                    networks: { default: [] },
                    wallets: { default: [] },
                },
                content: "none"
            }, {
                render: (block) => {
                    const wrapper = new components_6.Panel();
                    const props = JSON.parse(JSON.stringify(block.props));
                    const customElm = new ScomXchainBridgeRecord_1(wrapper, { ...props });
                    if (typeof callbackFn === 'function')
                        callbackFn(customElm, block);
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
                            getAttrs: (element) => {
                                if (typeof element === "string") {
                                    return false;
                                }
                                const href = element.getAttribute('href');
                                if (href)
                                    return getData(href);
                                return false;
                            },
                            priority: 402,
                            node: blockType
                        },
                        {
                            tag: "p",
                            getAttrs: (element) => {
                                if (typeof element === "string") {
                                    return false;
                                }
                                const child = element.firstChild;
                                if (child?.nodeName === 'A' && child.getAttribute('href')) {
                                    const href = child.getAttribute('href');
                                    return getData(href);
                                }
                                return false;
                            },
                            priority: 403,
                            node: blockType
                        },
                    ];
                },
                toExternalHTML: (block, editor) => {
                    const link = document.createElement("a");
                    const url = (0, scom_blocknote_sdk_1.getWidgetEmbedUrl)({
                        type: blockType,
                        props: { ...(block.props || {}) }
                    }, moduleData);
                    link.setAttribute("href", url);
                    link.textContent = blockType;
                    const wrapper = document.createElement("p");
                    wrapper.appendChild(link);
                    return { dom: wrapper };
                }
            });
            const XchainBridgeRecordSlashItem = {
                name: "Xchain-bridge-record",
                execute: (editor) => {
                    const block = {
                        type: blockType,
                        props: data_json_3.default.defaultBuilderData
                    };
                    if (typeof executeFn === 'function') {
                        executeFn(editor, block);
                    }
                },
                aliases: [blockType, "widget"],
                group: "Widget",
                icon: { name: 'exchange-alt' },
                hint: "Insert an xchain swap",
            };
            return {
                block: XchainBridgeRecordBlock,
                slashItem: XchainBridgeRecordSlashItem,
                moduleData
            };
        }
        async resetRpcWallet() {
            this.removeRpcWalletEvents();
            const rpcWalletId = await this.state.initRpcWallet(this.defaultChainId);
            const rpcWallet = this.state.getRpcWallet();
            const chainChangedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_5.Constants.RpcWalletEvent.ChainChanged, async (chainId) => {
                this.onChainChange();
            });
            const connectedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_5.Constants.RpcWalletEvent.Connected, async (connected) => {
                this.onWalletConnect();
            });
            const data = {
                defaultChainId: this.defaultChainId,
                wallets: this.wallets,
                networks: this.networks,
                showHeader: this.showHeader,
                showFooter: this.showFooter,
                rpcWalletId: rpcWallet.instanceId
            };
            if (this.dappContainer?.setData)
                this.dappContainer.setData(data);
        }
        removeRpcWalletEvents() {
            const rpcWallet = this.state.getRpcWallet();
            if (rpcWallet)
                rpcWallet.unregisterAllWalletEvents();
        }
        getData() {
            return this.model.getData();
        }
        async setData(value) {
            this.model.setData(value);
        }
        getTag() {
            return this.tag;
        }
        async setTag(value) {
            this.model.setTag(value);
        }
        setContainerTag(value) {
            if (this.dappContainer)
                this.dappContainer.setTag(value);
        }
        updateStyle(name, value) {
            value ?
                this.style.setProperty(name, value) :
                this.style.removeProperty(name);
        }
        updateTheme() {
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
            this.resizeLayout(Number(this.tag?.width));
        }
        get lastUpdated() {
            return this._lastUpdated;
        }
        set lastUpdated(value) {
            this._lastUpdated = value;
            this.lastUpdatedText = this.i18n.get('$data_last_updated_seconds_ago', { value: this._lastUpdated.toString() });
        }
        renderEmpty(source) {
            const emptyElm = this.$render("i-panel", { class: "empty-header" },
                this.$render("i-image", { url: assets_1.default.fullPath('img/icon-advice.svg'), minWidth: 60, minHeight: 60 }),
                this.$render("i-panel", null,
                    this.$render("i-label", { id: "emptyMsg", caption: this.i18n.get((0, index_14.isWalletConnected)() ? '$no_data' : '$please_connect_with_your_wallet'), font: { size: '1rem', color: Theme.text.primary, bold: true }, margin: { left: 10 } })));
            const td = source.querySelector('td');
            td && td.appendChild(emptyElm);
        }
        async onChangeTokenGroup(value) {
            this.searchTokenGroupModal.visible = false;
            if (this.assetName === value)
                return;
            this.assetName = value;
            this.searchTokenGroupBtn.caption = value || this.i18n.get('$token_group');
            this.model.removeUrlParams();
            await this.updateRecords();
        }
        async generateData() {
            const pageNumber = this.model.needToRefresh ? this.paging.currentPage : 1;
            await this.updateRecords(pageNumber);
        }
        resetData() {
            this.paging.totalPage = 0;
            if (this.paging.currentPage !== 1) {
                this.paging.currentPage = 1;
            }
            this.model.itemStart = 0;
            this.model.itemEnd = this.model.itemStart + model_1.pageSize;
            this.bridgeRecordTable.data = [];
        }
        async switchNetworkByWallet() {
            if (this.mdWallet) {
                await components_6.application.loadPackage('@scom/scom-wallet-modal', '*');
                this.mdWallet.networks = this.networks;
                this.mdWallet.wallets = this.wallets;
                this.mdWallet.showModal();
            }
        }
        resizeLayout(width) {
            let interval = setInterval(() => {
                if (!this.bridgeRecordTable)
                    return;
                clearInterval(interval);
                const tagWidth = Number(width);
                if ((this.offsetWidth !== 0 && this.offsetWidth < 768) || window.innerWidth < 768 || (!isNaN(tagWidth) && tagWidth !== 0 && tagWidth < 768)) {
                    this.hStackPagination.classList.add('pagination-mobile');
                    this.bridgeRecordTable.visible = false;
                    this.mobilePanel.visible = true;
                }
                else {
                    this.hStackPagination.classList.remove('pagination-mobile');
                    this.bridgeRecordTable.visible = true;
                    this.mobilePanel.visible = false;
                }
            }, 100);
        }
        renderFilterButton() {
            const dropdownSource = this.searchSourceModal.querySelector('.modal');
            const dropdownDestination = this.searchDestinationModal.querySelector('.modal');
            const dropdownTokenGroup = this.searchTokenGroupModal.querySelector('.modal');
            if (this.model.chainId) {
                if (dropdownSource && dropdownDestination) {
                    dropdownSource.innerHTML = '';
                    dropdownDestination.innerHTML = '';
                    dropdownSource.appendChild(this.$render("i-button", { caption: '$source_chain', onClick: () => this.onChangeSource() }));
                    dropdownDestination.appendChild(this.$render("i-button", { caption: '$destination_chain', onClick: () => this.onChangeDestination() }));
                    this.model.networkList.forEach((item) => {
                        const url = item.image;
                        dropdownSource.appendChild(this.$render("i-hstack", { gap: "0.25rem", alignItems: "center", class: "network-item", cursor: "pointer", onClick: () => this.onChangeSource({ ...item, url }) },
                            this.$render("i-image", { url: url, fallbackUrl: scom_token_list_5.assets.fallbackUrl, width: 20, height: 20, minWidth: 20 }),
                            this.$render("i-label", { caption: item.chainName })));
                        dropdownDestination.appendChild(this.$render("i-hstack", { gap: "0.25rem", alignItems: "center", class: "network-item", cursor: "pointer", onClick: () => this.onChangeDestination({ ...item, url }) },
                            this.$render("i-image", { url: url, fallbackUrl: scom_token_list_5.assets.fallbackUrl, width: 20, height: 20, minWidth: 20 }),
                            this.$render("i-label", { caption: item.chainName })));
                    });
                }
                if (dropdownTokenGroup) {
                    dropdownTokenGroup.innerHTML = '';
                    dropdownTokenGroup.appendChild(this.$render("i-button", { caption: "$token_group", onClick: () => this.onChangeTokenGroup() }));
                    this.state.getSupportedAssetNames().forEach((assetName) => {
                        dropdownTokenGroup.appendChild(this.$render("i-button", { caption: assetName, onClick: () => this.onChangeTokenGroup(assetName) }));
                    });
                }
            }
            else {
                if (dropdownSource && dropdownSource && dropdownDestination) {
                    dropdownSource.innerHTML = '';
                    dropdownDestination.innerHTML = '';
                    dropdownTokenGroup.innerHTML = '';
                    dropdownTokenGroup.appendChild(this.$render("i-button", { caption: "$token_group", onClick: () => this.onChangeTokenGroup() }));
                    dropdownSource.appendChild(this.$render("i-button", { caption: '$source_chain', onClick: () => this.onChangeSource() }));
                    dropdownDestination.appendChild(this.$render("i-button", { caption: '$destination_chain', onClick: () => this.onChangeDestination() }));
                }
            }
        }
        onShowFilter(target) {
            const isRefreshed = this.isModalRefreshed[target.id];
            target.visible = !target.visible;
            if (target.visible && !isRefreshed) {
                this.isModalRefreshed[target.id] = true;
                setTimeout(() => {
                    target.refresh();
                }, 1);
            }
        }
        async onLoad() {
            const isConnected = (0, index_14.isWalletConnected)();
            this.model.initializedState = {
                chainId: this.state.getChainId(),
                connected: isConnected,
                loading: true
            };
            await this.refreshData();
            this.model.initializedState.loading = false;
        }
        initModel() {
            if (!this.state) {
                this.state = new index_14.State(data_json_3.default);
            }
            if (!this.model) {
                this.model = new model_1.Model(this, this.state, {
                    updateTheme: this.updateTheme.bind(this),
                    refreshWidget: this.refreshUI.bind(this),
                    updatePageNumber: this.updatePageNumber.bind(this),
                    resetFilterUI: this.renderFilterButton.bind(this),
                    resetRpcWallet: this.resetRpcWallet.bind(this),
                    setContainerTag: this.setContainerTag.bind(this)
                });
            }
        }
        isEmptyData(value) {
            return !value || !value.assetNames || value.assetNames.length === 0;
        }
        async init() {
            this.i18n.init({ ...index_15.mainJson });
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
            return (this.$render("i-scom-dapp-container", { id: "dappContainer" },
                this.$render("i-panel", { class: index_css_1.bridgeStyle },
                    this.$render("i-panel", { padding: { left: '1rem', right: '1rem', top: '1rem', bottom: '1rem' } },
                        this.$render("i-hstack", { wrap: "wrap-reverse", justifyContent: "space-between", margin: { bottom: 20 } },
                            this.$render("i-hstack", { gap: 5, id: "wrapperTimer", minWidth: 255, margin: { top: 4 }, verticalAlignment: "center" },
                                this.$render("i-label", { caption: this.lastUpdatedText }),
                                this.$render("i-icon", { id: "iconRefresh", width: 15, height: 15, class: "rounded-icon", name: "sync-alt", fill: Theme.text.primary, onClick: this.onRefresh })),
                            this.$render("i-panel", { class: "group-filter" },
                                this.$render("i-panel", { class: "btn-dropdown", width: '165px' },
                                    this.$render("i-button", { id: "sortDateBtn", caption: "$latest_swap", rightIcon: { name: "angle-down" }, width: "calc(100% - 1px)", font: { size: '1rem' } }),
                                    this.$render("i-modal", { id: "sortDateModal", showBackdrop: false, width: "100%", height: 'auto', popupPlacement: 'bottom' },
                                        this.$render("i-panel", null,
                                            this.$render("i-button", { id: "btnLatestSwap", caption: "$latest_swap", onClick: () => this.onChangeSorting("Latest" /* DateOptions.LATEST */) }),
                                            this.$render("i-button", { id: "btnOldestSwap", caption: "$oldest_swap", onClick: () => this.onChangeSorting("Oldest" /* DateOptions.OLDEST */) })))),
                                this.$render("i-panel", { class: "btn-dropdown", width: '165px' },
                                    this.$render("i-button", { id: "searchTokenGroupBtn", rightIcon: { name: "angle-down" }, caption: "$token_group", width: "calc(100% - 1px)", font: { size: '1rem' } }),
                                    this.$render("i-modal", { id: "searchTokenGroupModal", showBackdrop: false, width: '100%', height: 'auto', popupPlacement: 'bottom' })),
                                this.$render("i-panel", { class: "btn-dropdown", width: '165px' },
                                    this.$render("i-button", { id: "searchSourceBtn", rightIcon: { name: "angle-down" }, caption: "$source_chain", width: "calc(100% - 1px)", font: { size: '1rem' } }),
                                    this.$render("i-modal", { id: "searchSourceModal", showBackdrop: false, width: '100%', height: 'auto', popupPlacement: 'bottom' })),
                                this.$render("i-panel", { class: "btn-dropdown", width: '165px' },
                                    this.$render("i-button", { id: "searchDestinationBtn", rightIcon: { name: "angle-down" }, caption: "$destination_chain", width: "calc(100% - 1px)", font: { size: '1rem' } }),
                                    this.$render("i-modal", { id: "searchDestinationModal", showBackdrop: false, width: '100%', height: 'auto', popupPlacement: 'bottom' })))),
                        this.$render("i-panel", null,
                            this.$render("i-vstack", { id: "largeLoading", class: "i-loading-overlay", background: { color: `${Theme.background.main} !important` } },
                                this.$render("i-vstack", { class: "i-loading-spinner", horizontalAlignment: "center", verticalAlignment: "center" },
                                    this.$render("i-icon", { class: "i-loading-spinner_icon", cursor: "default", image: { url: assets_1.default.fullPath('img/loading.svg'), width: 36, height: 36 } }),
                                    this.$render("i-label", { caption: "$loading", font: { color: '#FD4A4C', size: '1.5em' }, class: "i-loading-spinner_text" }))),
                            this.$render("i-panel", { id: "mobilePanel", minHeight: 100, visible: false },
                                this.$render("i-hstack", { horizontalAlignment: "center" },
                                    this.$render("i-vstack", { id: "bridgeRecordMobile" }))),
                            this.$render("i-table", { id: "bridgeRecordTable", class: "os-table", margin: { bottom: 30 }, columns: column_1.bridgeRecordColumns, expandable: {
                                    onRenderExpandedRow: this.onExpandedRowRender,
                                    rowExpandable: true
                                }, onRenderEmptyTable: this.renderEmpty.bind(this), onCellClick: this.onCellClick.bind(this) }),
                            this.$render("i-hstack", { id: "hStackPagination", margin: { top: 16, bottom: 20 }, class: "record-pagination" },
                                this.$render("i-pagination", { id: "listPagination", width: "auto", totalPages: this.paging.totalPage, currentPage: this.paging.currentPage, onPageChanged: this.onSelectIndex.bind(this) }))),
                        this.$render("i-modal", { id: "requestCancelModal", class: "custom-modal_header", width: 400, maxWidth: "95%" },
                            this.$render("i-hstack", { class: "header", horizontalAlignment: "space-between" },
                                this.$render("i-label", { id: "titleModalLabel", caption: "$request_cancel" }),
                                this.$render("i-icon", { width: 20, height: 20, class: "cursor-pointer", name: "times", fill: Theme.colors.primary.main, onClick: this.closeRequestCancel })),
                            this.$render("i-panel", { background: { color: Theme.divider }, height: 2, width: '100%', margin: { top: 10, bottom: 20 } }),
                            this.$render("i-hstack", { horizontalAlignment: "space-between", margin: { bottom: 20 } },
                                this.$render("i-label", { id: "networkNameLabel" }),
                                this.$render("i-label", { id: "networkNameVal" })),
                            this.$render("i-hstack", { horizontalAlignment: "space-between", margin: { bottom: 20 } },
                                this.$render("i-label", { caption: "$withdraw_amount" }),
                                this.$render("i-label", { id: "withdrawAmount" })),
                            this.$render("i-panel", { width: "100%", margin: { bottom: 30 } },
                                this.$render("i-label", { id: "noteCancelOrWithdraw", class: "inline" })),
                            this.$render("i-panel", { id: "switchNetworkPnl" },
                                this.$render("i-panel", { width: "100%", margin: { bottom: 30 } },
                                    this.$render("i-label", { id: "noteNetwork", class: "inline", font: { color: Theme.colors.warning.main } })),
                                this.$render("i-hstack", { margin: { top: 20, bottom: 20 }, horizontalAlignment: "center" },
                                    this.$render("i-button", { caption: "$switch_network", ...index_css_1.buttonProps, width: 150, class: "text-center", onClick: () => this.onSwitchNetwork(0 /* ActionType.Cancel */) }))),
                            this.$render("i-panel", { id: "confirmNetwork", visible: false },
                                this.$render("i-hstack", { margin: { top: 20, bottom: 20 }, horizontalAlignment: "center" },
                                    this.$render("i-button", { caption: "$confirm", ...index_css_1.buttonProps, width: 150, class: "text-center", onClick: () => this.onConfirm() })))),
                        this.$render("i-modal", { id: "resubmitOrderModal", class: "custom-modal_header", width: 400, maxWidth: "95%" },
                            this.$render("i-hstack", { class: "header", horizontalAlignment: "space-between" },
                                this.$render("i-label", { id: "lbAmendOrder", caption: "$amend_order" }),
                                this.$render("i-icon", { width: 20, height: 20, class: "cursor-pointer", name: "times", fill: Theme.colors.primary.main, onClick: () => this.closeResubmitModal() })),
                            this.$render("i-panel", { background: { color: Theme.divider }, height: 2, width: "100%", margin: { top: 10, bottom: 20 } }),
                            this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", margin: { bottom: 20 } },
                                this.$render("i-label", { caption: "$token_receive" }),
                                this.$render("i-scom-token-input", { id: "tokenReceiveSelection", class: "custom-token-input", isInputShown: false, isBtnMaxShown: false, isBalanceShown: false, isCommonShown: false, isSortBalanceShown: false, width: "auto" })),
                            this.$render("i-vstack", { margin: { bottom: 20 } },
                                this.$render("i-hstack", { horizontalAlignment: "space-between" },
                                    this.$render("i-label", { caption: "$expected_receive" }),
                                    this.$render("i-label", { id: "resubmitExpectedReceive" })),
                                this.$render("i-label", { id: "lbResubmitError", visible: false, caption: "$amount_lower_than_base_fee", font: { size: '0.75rem', color: Theme.colors.error.main } })),
                            this.$render("i-panel", { id: "resubmitConfirmNetwork" },
                                this.$render("i-hstack", { margin: { top: 20, bottom: 20 }, horizontalAlignment: "center" },
                                    this.$render("i-button", { id: "btnResubmitNetwork", caption: "$switch_network", ...index_css_1.buttonProps, width: 150, class: "text-center", onClick: () => this.onSwitchNetwork(1 /* ActionType.Resubmit */) }))),
                            this.$render("i-panel", { id: "resubmitConfirmPnl", visible: false },
                                this.$render("i-hstack", { margin: { top: 20, bottom: 20 }, horizontalAlignment: "center" },
                                    this.$render("i-button", { id: "btnResubmit", caption: "$confirm", ...index_css_1.buttonProps, width: 150, class: "text-center", onClick: () => this.onConfirm(1 /* ActionType.Resubmit */) })))),
                        this.$render("i-scom-tx-status-modal", { id: "txStatusModal" }),
                        this.$render("i-scom-wallet-modal", { id: "mdWallet", wallets: [] })))));
        }
    };
    __decorate([
        (0, components_6.observable)()
    ], ScomXchainBridgeRecord.prototype, "lastUpdatedText", void 0);
    __decorate([
        (0, components_6.observable)()
    ], ScomXchainBridgeRecord.prototype, "paging", void 0);
    ScomXchainBridgeRecord = ScomXchainBridgeRecord_1 = __decorate([
        components_6.customModule,
        (0, components_6.customElements)('i-scom-xchain-bridge-record')
    ], ScomXchainBridgeRecord);
    exports.default = ScomXchainBridgeRecord;
});
