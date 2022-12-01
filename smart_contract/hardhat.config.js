// https://eth-goerli.g.alchemy.com/v2/pGKML8Ou2Sh2dcbyVMZ-alVqB9v47QoD

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/lRfk84rgk7DnffgVG2_1xEvVi9uCT6fr',
      accounts: [ '0065bc589dbafd5f2831793f7c5000021e033a34d77b71c6abaa556c2a701dc9' ]
    }
  }
}