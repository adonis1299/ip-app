import { BigNumber } from 'ethers'
import { InitializeTokenProps, Token } from '../../../types/token'

const initializeToken = ({
  name,
  ticker,
  address,
  capped_address,
  capped_token = false,
  can_delegate = false,
  decimals = 18,
  price = 0,
  bpt = false,
  icons,
  can_wrap = false,
  unwrapped,
  display = true,
}: InitializeTokenProps): Token => ({
  name,
  address,
  ticker,
  price,
  decimals,
  bpt,
  vault_balance: '0',
  vault_amount_str: '0',
  vault_amount: BigNumber.from(0),
  wallet_balance: '0',
  wallet_amount: BigNumber.from(0),
  wallet_amount_str: '0',
  token_LTV: 0,
  token_penalty: 0,
  capped_token,
  capped_address,
  can_delegate,
  icons,
  can_wrap,
  unwrapped,
  display,
})

export default initializeToken
