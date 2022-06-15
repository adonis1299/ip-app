import { Box, Typography, useTheme } from '@mui/material'
import { useState, useEffect } from 'react'
import { useLight } from '../../../hooks/useLight'
import { formatColor, formatGradient, gradient, neutral } from '../../../theme'
import {
  ModalType,
  useModalContext,
} from '../../libs/modal-content-provider/ModalContentProvider'
import { useRolodexContext } from '../../libs/rolodex-data-provider/RolodexDataProvider'
import { useVaultDataContext } from '../../libs/vault-data-provider/VaultDataProvider'
import { useWeb3Context } from '../../libs/web3-data-provider/Web3Provider'
import { ConnectWalletButton, CopyButton, InverseButton } from '../button'
import { TitleText } from '../text'
import { addressShortener } from '../text/'
import { SingleStatCard } from './SingleStatCard'
import { UserTokenCard } from './UserTokenCard'
import { BN, round } from '../../../easy/bn'
import { OpenVaultButton } from '../button/OpenVaultButton'

const StatsBodyTypography = ({ text }: { text: string }) => (
  <Typography
    variant="label2"
    color={formatColor(neutral.gray3)}
    whiteSpace="nowrap"
  >
    {text}
  </Typography>
)

export const UserStats = () => {
  const isLight = useLight()
  const [borrowAPR, setBorrowAPR] = useState(0)
  const [depositAPR, setDepositAPR] = useState(0)

  const [token_cards, setTokenCards] = useState<JSX.Element | undefined>(
    undefined
  )

  const theme = useTheme()
  const { connected, currentAccount, dataBlock } = useWeb3Context()
  const rolodex = useRolodexContext()
  const {
    tokens,
    vaultID,
    redraw,
    hasVault,
    vaultAddress,
    borrowingPower,
    accountLiability,
    totalBaseLiability,
  } = useVaultDataContext()
  const { setType } = useModalContext()

  useEffect(() => {
    if (rolodex) {
      rolodex!
        .USDI!.reserveRatio()
        .then((ratio) => {
          const ratioDec = ratio.div(1e14).toNumber() / 1e4
          return rolodex!.Curve?.getValueAt(
            '0x0000000000000000000000000000000000000000',
            ratio
          ).then((apr) => {
            const ba = apr.div(BN('1e14')).toNumber() / 100
            setBorrowAPR(ba)
            setDepositAPR(round(ba * (1 - ratioDec) * 0.9, 3))
          })
        })
        .catch((e) => {
          setBorrowAPR(0)
        })
    }
  }, [rolodex, dataBlock])

  useEffect(() => {
    if (tokens) {
      let el: Array<any> = []
      for (const [key, val] of Object.entries(tokens)) {
        el.push(
          <UserTokenCard
            key={key}
            tokenName={val.ticker}
            tokenValue={'$' + val.value?.toLocaleString()!}
            vaultBalance={'$' + val.vault_balance?.toLocaleString()!}
            tokenAmount={val.vault_amount?.toLocaleString()!}
            image={{
              src: val.ticker,
              alt: val.ticker,
            }}
            LTVPercent={val.token_LTV!.toLocaleString()}
            penaltyPercent={val.token_penalty!.toLocaleString()}
            canDelegate={val.can_delegate ? true : false}
          />
        )
      }
      setTokenCards(<>{el}</>)
    }
  }, [redraw])

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(${formatGradient(
          isLight ? gradient.statDefaultLight : gradient.statDefaultDark
        )})`,
        paddingX: 6,
        paddingY: 7,
        borderRadius: 16,
        [theme.breakpoints.down('md')]: {
          paddingX: 2,
          paddingY: 6,
          borderRadius: 5,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: {
            xs: 'flex-end',
            md: 'space-between',
          },
          alignItems: 'center',
          marginBottom: 3,
        }}
      >
        <Box display={{ xs: 'none', md: 'flex' }}>
          {vaultID ? <StatsBodyTypography text={`Vault #${vaultID}`} /> : <></>}
        </Box>

        <Box display="flex" alignItems="center" columnGap={2}>
          <StatsBodyTypography text="Vault Address" />
          {connected ? (
            vaultAddress ? (
              <CopyButton
                text={addressShortener(vaultAddress!)}
                copy={vaultAddress}
              />
            ) : (
              <CopyButton
                text={addressShortener(
                  '0x0000000000000000000000000000000000000000'
                )}
                copy={`0x0000000000000000000000000000000000000000`}
              />
            )
          ) : (
            <ConnectWalletButton />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          justifyContent: 'space-between',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 4,
          marginBottom: 4,
          [theme.breakpoints.down('lg')]: {
            gridAutoFlow: 'column',
            gridTemplateColumns: '1fr 1fr',
            gap: 3,
            marginBottom: 0,
          },
          [theme.breakpoints.down('sm')]: {
            gap: 2,
          },
        }}
      >
        <SingleStatCard>
          <TitleText
            title="Borrowing Power"
            text={
              borrowingPower !== null
                ? '$' + Math.round(borrowingPower).toLocaleString()
                : null
            }
          />
        </SingleStatCard>

        <SingleStatCard>
          <TitleText
            title="Borrow APR"
            text={borrowAPR !== null ? borrowAPR.toString() + '%' : null}
          />
        </SingleStatCard>
        <SingleStatCard>
          <TitleText
            title="Deposit APR"
            text={depositAPR !== null ? depositAPR.toFixed(2) + '%' : null}
          />
        </SingleStatCard>
        <SingleStatCard>
          <TitleText
            title="IPT PER YEAR"
            text={
              totalBaseLiability !== null && accountLiability !== 0
                ? `${Math.round(
                    ((94017 * accountLiability) / totalBaseLiability) * 52.143
                  )}` + ''
                : '0'
            }
          />
        </SingleStatCard>

        <SingleStatCard
          sx={{
            gridColumn: '1 / -1',
            [theme.breakpoints.down('lg')]: {
              gridRow: 3,
            },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              [theme.breakpoints.down('lg')]: {
                flexWrap: 'wrap',
                rowGap: 2,
              },
            }}
          >
            <TitleText
              title="USDi Borrowed"
              text={
                accountLiability !== null
                  ? '$' + Math.round(accountLiability).toLocaleString()
                  : null
              }
            />

            {hasVault ? (
              <Box
                display="grid"
                alignItems="center"
                columnGap={2}
                gridTemplateColumns="1fr 1fr"
                sx={{
                  [theme.breakpoints.down('lg')]: {
                    width: '100%',
                  },
                  [theme.breakpoints.down('sm')]: {
                    gridTemplateColumns: '1fr',
                    rowGap: 2,
                  },
                }}
              >
                <InverseButton onClick={() => setType(ModalType.Borrow)}>
                  <Typography variant="body3">Borrow</Typography>
                </InverseButton>

                <InverseButton onClick={() => setType(ModalType.Repay)}>
                  <Typography variant="body3">Repay</Typography>
                </InverseButton>
              </Box>
            ) : (
              <Box
                maxWidth={{ xs: 'auto', md: 350 }}
                width="100%"
                display="flex"
                alignItems="center"
              >
                <OpenVaultButton />
              </Box>
            )}
          </Box>
        </SingleStatCard>
      </Box>
      <Box
        sx={{
          mt: { xs: 2, md: 3 },
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr',
            lg: 'repeat(3, 1fr)',
          },
          columnGap: 3,
          rowGap: 3,
        }}
      >
        {connected && currentAccount ? token_cards : <></>}
      </Box>
    </Box>
  )
}
