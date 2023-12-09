require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Your API key for Etherscan, obtain one at https://etherscan.io/
const ETHERSCAN_API_KEY =
  process.env.ETHERSCAN_API_KEY || "Your etherscan API key";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    // localhost: {
    //     chainId: 31337,
    // },
    sepolia: {
      url: SEPOLIA_RPC_URL !== undefined ? SEPOLIA_RPC_URL : "",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      //   accounts: {
      //     mnemonic: MNEMONIC,
      //   },
      saveDeployments: true,
      // chainId: 11155111,
    },
    // mainnet: {
    //     url: MAINNET_RPC_URL,
    //     accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //     //   accounts: {
    //     //     mnemonic: MNEMONIC,
    //     //   },
    //     saveDeployments: true,
    //     chainId: 1,
    // },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.6.11",
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      viaIR: true,
    },
  },
  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      // npx hardhat verify --list-networks
      sepolia: ETHERSCAN_API_KEY,
      mainnet: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
};
