require("@nomicfoundation/hardhat-toolbox");
// require('@nomiclabs/hardhat-waffle');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    ganache: {
      url: "http://192.168.1.144:7545",
      accounts: ["0xxxxx"],// ganache生成的私钥
      gasPrice: 20000000000,
      gas: 8000000
    }
  },
};
