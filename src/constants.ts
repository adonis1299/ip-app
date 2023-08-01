export const GOVERNOR_ADDRESS = '0x266d1020a84b9e8b0ed320831838152075f8c4ca'
export const LINK_FAST_GAS_GWEI = '0x169e633a2d1e6c10dd91238ba11c4a708dfef37c'
export const MERKLE_REDEEM_ADDRESS = '0x91a1Fb8eEaeB0E05629719938b03EE3C32348CF7'

export const DEFAULT_APPROVE_AMOUNT = '1000000000'
export const IPT_DELEGATE_ADDRESS = '0xd909c5862cdb164adb949d92622082f0092efc3d'
export const SLOWROLL_ADDRESS = '0xFbD3060Fe1Ed10c34E236Cee837d82F019cF1D1d'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const DEFAULT_CHAIN = 10
export const DISPLAY_DECIMALS = 5
export const USDI_DECIMALS = 18
export const CHART_INTEREST_RATE_OVERTIME = '/charts/interest_rates_overtime'
export const LIVE_DELTAS = '/live/deltas'
export const LIVE_AVERAGE_RATES = '/live/average_rates'
export const SALE_SUMMARY = '/sale/summary'

export const GOV_PROPOSAL_CREATED_EVENTS = '/gov/proposal_created_events'
export const GOV_PROPOSAL_VOTE_CAST_EVENTS = '/gov/proposal_vote_cast_events'

export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
  [GOVERNOR_ADDRESS]: 'Governance',
  '0x4aaE9823Fb4C70490F1d802fC697F3ffF8D5CbE3': 'Vault Controller',
  '0xb800ca12a3e37c381e92daa0a2910d70a267da6e': 'Voting Vault Controller',
  '0xf4818813045E954f5Dc55a40c9B60Def0ba3D477': 'Oracle Master',
  '0x0029abd74B7B32e6a82Bf9f62CB9Dd4Bf8e39aAf': 'Curve Master',
  '0x65dA327b1740D00fF7B366a4fd8F33830a2f03A2': 'wETH AnchoredViewRelay',
  '0x8E7d39560b15B2D29E01b2502252C4B5f26f5326': 'wBTC AnchoredViewRelay',
  '0xCE554405b9a257eD00A4e0f114fF12ab832b4e3B': 'UNI AnchoredViewRelay',
  '0x8BfE7aE486250dBf2901843Cc73B91843c2879de': 'MATIC AnchoredViewRelay',
  '0x73052741d8bE063b086c4B7eFe084B0CEE50677A': 'stETH AnchoredViewRelay',
  '0x6DB54416CBB28C6a78F606947df53E83Dd69eb70': 'ENS AnchoredViewRelay',
  '0x27FC4059860F3d9758DCC9a871838F06333fc6ed': 'AAVE AnchoredViewRelay',
  '0xf5E0e2827F60580304522E2C38177DFeC7a428a4': 'BAL AnchoredViewRelay',
  '0x93A3411c9518D9c85054693137c87C5F14E7ECF9': 'DYDX AnchoredViewRelay',
  '0x864991b13691806be077E7Ca9ef566FE7762F908': 'CRV AnchoredViewRelay',
  '0x610d4DFAC3EC32e0be98D18DDb280DACD76A1889': 'LDO AnchoredViewRelay',
  '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2': 'cbETH AnchoredViewRelay',
  '0x69F3d75Fa1eaA2a46005D566Ec784FE9059bb04B': 'rETH AnchoredViewRelay',
  '0xEF12fa3183362506A2dd0ff1CF06b2f4156e751E': 'ZRX AnchoredViewRelay',
  '0x16Ac44B1e161c735D7E372169d3573d920a23906': 'ThreeLines0_100 v2',
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 'USDC',
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': 'WETH',
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599': 'WBTC',
  '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984': 'UNI',
  '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0': 'MATIC',
  '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72': 'ENS',
  '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9': 'AAVE',
  '0xba100000625a3754423978a60c9317c58a424e3D': 'BAL',
  '0x92d6c1e31e14520e676a687f0a93788b716beff5': 'DYDX',
  '0xd533a949740bb3306d119cc777fa900ba034cd52': 'CRV',
  '0x5a98fcbea516cf06857215779fd812ca3bef1b32': 'LDO',
  '0xE41d2489571d322189246DaFA5ebDe1F4699F498': 'ZRX',
  '0xae78736cd615f374d3085123a210448e74fc6393': 'rETH',
  '0xbe9895146f7af43049ca1c1ae358b0541ea49704': 'cbETH',
  '0xae7ab96520de3a18e5e111b5eaab095312d7fe84': 'stETH',
  '0x5AC39ED42E14CF330A864D7D1B82690B4D1B9E61': 'Capped Matic',
  '0xfb42f5AFb722d2b01548F77C31AC05bf80e03381': 'Capped ENS',
  '0xd3bd7a8777c042De830965de1C1BCC9784135DD2': 'Capped AAVE',
  '0x05498574BD0Fa99eeCB01e1241661E7eE58F8a85': 'Capped BAL',
  '0xDDB3BCFe0304C970E263bf1366db8ed4DE0e357a': 'Capped DYDX',
  '0x9d878eC06F628e883D2F9F1D793adbcfd52822A8': 'Capped CRV',
  '0x7C1Caa71943Ef43e9b203B02678000755a4eCdE9': 'Capped LDO',
  '0x99bd1f28a5A7feCbE39a53463a916794Be798FC3': 'Capped cbETH',
  '0x64eA012919FD9e53bDcCDc0Fc89201F484731f41': 'Capped rETH',
  '0xDf623240ec300fD9e2B7780B34dC2F417c0Ab6D2': 'Capped ZRX',
}
