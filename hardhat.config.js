/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");


require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  // Only for deployment
  // defaultNetwork: "sepolia",
  // networks: {
  //   hardhat: {},
  //   sepolia: {
  //     url: API_URL,
  //     accounts: [`0x${PRIVATE_KEY}`]
  //   }
  // },
}