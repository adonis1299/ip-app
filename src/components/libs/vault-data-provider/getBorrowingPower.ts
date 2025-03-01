import { utils } from 'ethers'
import { Rolodex } from '../../../chain/rolodex/rolodex'
import { BNtoDec } from '../../../easy/bn'

export const getVaultBorrowingPower = async (
  vaultID: string,
  rolodex: Rolodex
): Promise<string> => {
  try {
    // get user balance
    const BP = await rolodex.VC?.vaultBorrowingPower(vaultID)
    if (BP?._isBigNumber) {
      return utils.formatUnits(BP, 18)
      //return BNtoDec(BP)
    }
    return '0'
  } catch (err) {
    console.error(err)
    throw new Error('Error getting Borrowing Power')
  }
}
