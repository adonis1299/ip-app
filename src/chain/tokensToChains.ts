import { ChainIDs } from './chains'

export const tokensToChains = {
  WBTC: {
    [ChainIDs.MAINNET]: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    [ChainIDs.ROPSTEN]: '0x442Be68395613bDCD19778e761f03261ec46C06D',
    [ChainIDs.GOERLI]: '0x442Be68395613bDCD19778e761f03261ec46C06D',
    [ChainIDs.POLYGON]: '0xa8A6d7c39270ddc658DC53ECbd0500a4C64C9Cc9',
    [ChainIDs.LOCAL]: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  },
  WETH: {
    [ChainIDs.MAINNET]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [ChainIDs.ROPSTEN]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    [ChainIDs.GOERLI]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    [ChainIDs.POLYGON]: '0x8afBfe06dA3D035c82C5bc55C82EB3FF05506a20',
    [ChainIDs.LOCAL]: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  },
  stETH: {
    [ChainIDs.MAINNET]: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  UNI: {
    [ChainIDs.MAINNET]: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    [ChainIDs.ROPSTEN]: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    [ChainIDs.GOERLI]: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    [ChainIDs.POLYGON]: '0xBAB395136FaEa31F33f32737218D79E2e92b32C1',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  MATIC: {
    [ChainIDs.MAINNET]: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
  },
  ENS: {
    [ChainIDs.MAINNET]: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  AAVE: {
    [ChainIDs.MAINNET]: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  BAL: {
    [ChainIDs.MAINNET]: '0xba100000625a3754423978a60c9317c58a424e3D',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  DYDX: {
    [ChainIDs.MAINNET]: '0x92d6c1e31e14520e676a687f0a93788b716beff5',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  CRV: {
    [ChainIDs.MAINNET]: '0xd533a949740bb3306d119cc777fa900ba034cd52',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  LDO: {
    [ChainIDs.MAINNET]: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  cbETH: {
    [ChainIDs.MAINNET]: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  rETH: {
    [ChainIDs.MAINNET]: '0xae78736cd615f374d3085123a210448e74fc6393',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  ZRX: {
   [ChainIDs.MAINNET]: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
    [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
    [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
  },
  CHAI: {
    [ChainIDs.MAINNET]: '0x06AF07097C9Eeb7fD685c692751D5C66dB49c215',
     [ChainIDs.ROPSTEN]: '0x0000000000000000000000000000000000000000',
     [ChainIDs.GOERLI]: '0x0000000000000000000000000000000000000000',
     [ChainIDs.POLYGON]: '0x0000000000000000000000000000000000000000',
     [ChainIDs.LOCAL]: '0x0000000000000000000000000000000000000000',
   },
}
