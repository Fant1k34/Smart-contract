/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");


require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { vars } = require("hardhat/config");

const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  // For running test those info is not necessary
  // defaultNetwork: "sepolia",
  // networks: {
  //   hardhat: {},
  //   sepolia: {
  //     url: API_URL,
  //     accounts: [`0x${PRIVATE_KEY}`]
  //   }
  // },
  // etherscan: {
  //   apiKey: {
  //     sepolia: ETHERSCAN_API_KEY,
  //   },
  // },
}