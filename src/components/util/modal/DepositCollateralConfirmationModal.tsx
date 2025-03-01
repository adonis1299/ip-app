import { Box, Typography } from '@mui/material'
import { formatColor, neutral } from '../../../theme'
import { useState, useEffect } from 'react'
import { ModalType, useModalContext } from '../../libs/modal-content-provider/ModalContentProvider'
import { BaseModal } from './BaseModal'
import { useLight } from '../../../hooks/useLight'
import { DisableableModalButton } from '../button/DisableableModalButton'
import { useWeb3Context } from '../../libs/web3-data-provider/Web3Provider'
import { useVaultDataContext } from '../../libs/vault-data-provider/VaultDataProvider'
import { locale } from '../../../locale'
import { ContractReceipt, ContractTransaction, utils } from 'ethers'
import { depositCollateral } from '../../../contracts/ERC20'
import depositToVotingVault from '../../../contracts/VotingVault/depositToVotingVault'
import depositToBptVault from '../../../contracts/VotingVault/depositToBptVault'
import { ERC20Detailed__factory } from '../../../chain/contracts'
import { hasTokenAllowance } from '../../../contracts/misc/hasAllowance'
import { DEFAULT_APPROVE_AMOUNT } from '../../../constants'

export const DepositCollateralConfirmationModal = () => {
  const {
    type,
    setType,
    collateralToken,
    collateralDepositAmount,
    updateTransactionState,
    setCollateralDepositAmount,
    collateralDepositAmountMax,
    setCollateralDepositAmountMax,
    stake,
    wrap,
  } = useModalContext()
  const { provider, currentAccount, currentSigner } = useWeb3Context()
  const [loading, setLoading] = useState(false)
  const [loadmsg, setLoadmsg] = useState('')
  const { tokens, vaultAddress, vaultID, hasVotingVault, hasBptVault, hasMKRVotingVault } = useVaultDataContext()
  const [hasAllowance, setHasAllowance] = useState(false)

  const amount = collateralDepositAmountMax ? collateralToken.wallet_amount : collateralDepositAmount

  const contract = ERC20Detailed__factory.connect(collateralToken.address, currentSigner!)

  useEffect(() => {
    if (collateralToken.capped_address && amount) {
      hasTokenAllowance(currentAccount, collateralToken.capped_address, amount, collateralToken.address, collateralToken.decimals, currentSigner!).then(
        setHasAllowance
      )
    }
  }, [amount])

  const handleDepositConfirmationRequest = async () => {
    try {
      let attempt: ContractTransaction
      // IF TOKEN IS CAPPED
      if (collateralToken.capped_token && collateralToken.capped_address) {
        if ((!hasVotingVault && !collateralToken.bpt && collateralToken.ticker !== 'MKR') || 
        (!hasBptVault && collateralToken.bpt) ||
        (!hasMKRVotingVault && collateralToken.ticker == 'MKR')) {
          setLoading(false)
          setType(ModalType.EnableCappedToken)
          return
        }
        
        setLoading(true)
        setLoadmsg(locale('CheckWallet'))

        const ha = await hasTokenAllowance(
          currentAccount,
          collateralToken.capped_address,
          amount!,
          collateralToken.address,
          collateralToken.decimals,
          currentSigner!
        )
        //console.log(ha)
        setHasAllowance(ha)

        if (!ha) {
          let approveAmount = utils.parseUnits(DEFAULT_APPROVE_AMOUNT, collateralToken.decimals)

          const txn = await contract.approve(collateralToken.capped_address!, approveAmount)
          setLoadmsg(locale('TransactionPending'))

          await txn?.wait()

          setLoading(false)
          setLoadmsg('')
          setHasAllowance(true)

          return
        }

        if (collateralToken.bpt) {
          attempt = await depositToBptVault(vaultID!, currentSigner!, collateralToken, amount!, stake)
        } else if (collateralToken.can_wrap) {
          attempt = await depositToBptVault(vaultID!, currentSigner!, collateralToken, amount!, wrap)
        } else {
          attempt = await depositToVotingVault(vaultID!, currentSigner!, collateralToken, amount!)
        }
      } else {
        if (wrap) {
          const tok = tokens![collateralToken.unwrapped!]
          attempt = await depositToBptVault(vaultID!, currentSigner!, tok, amount!, wrap)
        } else {
          attempt = await depositCollateral(amount!, collateralToken.address, provider?.getSigner(currentAccount)!, vaultAddress!)
        }
        
      }
      updateTransactionState(attempt!)

      setLoadmsg(locale('TransactionPending'))
      const receipt = await attempt!.wait()

      setCollateralDepositAmount('')
      setCollateralDepositAmountMax(false)

      updateTransactionState(receipt)
    } catch (err) {
      const error = err as ContractReceipt

      updateTransactionState(error)
    }

    setLoadmsg('')
    setLoading(false)
  }

  const isLight = useLight()

  return (
    <BaseModal
      open={type === ModalType.DepositCollateralConfirmation}
      setOpen={() => {
        setType(ModalType.DepositCollateral)
      }}
    >
      <Typography variant="body1" color={isLight ? formatColor(neutral.gray1) : formatColor(neutral.white)}>
        Confirm Deposit
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          mt: 3,
          py: 2,
          borderRadius: '10px',
          columnGap: 4,
          backgroundColor: isLight ? formatColor(neutral.gray5) : formatColor(neutral.gray7),
        }}
      >
        <Box display="flex" alignItems="center">
          <Box component="img" width={36} height={36} src={`images/${collateralToken.ticker}.svg`} alt={collateralToken.ticker} marginRight={3}></Box>
          <Box>
            <Typography variant="body3" color="text.primary">
              ${(collateralToken.price * Number(collateralDepositAmount)).toFixed(2)} ({collateralDepositAmount} {collateralToken.ticker})
            </Typography>
          </Box>
        </Box>
      </Box>

      <DisableableModalButton
        text={
          !collateralToken.capped_token || hasAllowance
            ? 'Confirm Deposit'
            : 'Set Allowance'
        }
        disabled={false}
        onClick={handleDepositConfirmationRequest}
        loading={loading}
        load_text={loadmsg}
      />
    </BaseModal>
  )
}
