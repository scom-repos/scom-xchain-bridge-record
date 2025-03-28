export interface TokenConstant {
  address: string;
  name: string;
  decimals: number;
  symbol: string;
}

export interface ContractSet {
  WETH9: string,
  GOV_TOKEN: string,
  OSWAP_ConfigStore: string,
  TrollRegistry: string // FIXME Main or Side ChainTrollRegistry
}

export const MainnetMainChain = 56;
export const TestnetMainChain = 97;

export const Mainnets = [56, 43114];
export const Testnets = [97, 43113];

export const orderMinOutRate = "0.005";

export enum VaultType { // not used
  Project = 'Project',
  Exchange = 'Exchange',
};

export interface VaultConstant {
  //STATIC
  //basic
  chainId: number,
  assetToken: TokenConstant,
  vaultRegistryAddress: string,
  vaultAddress: string,
  vaultDecimals?: number,
  softCap: number,
  //fee, may changed by trolls
  baseFee: string,//fixed amount
  protocolFee: string,//linear proportional with amount in
  transactionFee: string,//linear proportional with amount in
  imbalanceFee: string,//linear proportional with amount in
}

export interface VaultGroupConstant {
  assetName: string,//must be unique
  vaultType: VaultType,
  vaults: { [chainId: number]: VaultConstant },
  deprecated?: boolean,
}

export const VaultGroupList: VaultGroupConstant[] = [
  {
    assetName: "OSWAP",
    vaultType: VaultType.Project,
    vaults: {
      97: {
        chainId:97,
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
        chainId:43113,
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
        chainId:97,
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
        chainId:43113,
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
]