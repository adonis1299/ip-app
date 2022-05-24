import { Box, Typography } from "@mui/material";
import { formatColor, neutral } from "../../../theme";
import {
  ModalType,
  useModalContext,
} from "../../libs/modal-content-provider/ModalContentProvider";
import { BaseModal } from "./BaseModal";
import { useLight } from "../../../hooks/useLight";
import { DisableableModalButton } from "../button/DisableableModalButton";
import { ForwardIcon } from "../../icons/misc/ForwardIcon";
import { useWithdrawUSDC } from "../../../hooks/useWithdraw";
import { useRolodexContext } from "../../libs/rolodex-data-provider/RolodexDataProvider";

export const WithdrawConfirmationModal = () => {
  const { type, setType, withdraw } = useModalContext();
  const rolodex = useRolodexContext()

  const isLight = useLight();

  return (
    <BaseModal
      open={type === ModalType.WithdrawConfirmation}
      setOpen={() => {
        setType(ModalType.Withdraw);
      }}
    >
      <Typography
        variant="body1"
        fontWeight={600}
        color={
          isLight ? formatColor(neutral.gray1) : formatColor(neutral.white)
        }
      >
        Confirm Withdraw
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          mt: 3,
          py: 2,
          borderRadius: "10px",
          columnGap: 4,
          backgroundColor: isLight
            ? formatColor(neutral.gray5)
            : formatColor(neutral.gray7),
        }}
      >


        <Box display="flex" alignItems="center">
          <Box>
            <Typography variant="h3" color="text.secondary">
              $1
            </Typography>
          </Box>

          <Box
            component="img"
            width={36}
            height={36}
            src={`images/USDI.svg`}
            alt="USDI"
            marginLeft={3}
          ></Box>
        </Box>

        <ForwardIcon sx={{width: 15, height: 15}} strokecolor={formatColor(neutral.gray3)}/>
        
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            width={36}
            height={36}
            src={`images/${withdraw.token.ticker}.svg`}
            alt={withdraw.token.ticker}
            marginRight={3}
          ></Box>
          <Box>
            <Typography variant="h3" color="text.secondary">
              ${withdraw.token.value}
            </Typography>
          </Box>
        </Box>

      </Box>

      <Box>
        <Typography
          variant="body1"
          color={formatColor(neutral.gray3)}
          fontStyle="italic"
          fontWeight={500}
          textAlign="center"
        >
          1 {withdraw.token.ticker} = 1 USDi ($1){" "}
        </Typography>
      </Box>

      <Box
        my={5}
        color={
          isLight ? formatColor(neutral.gray1) : formatColor(neutral.white)
        }
      >
        <Typography variant="body1" fontWeight={500} mb={1}>
          {withdraw.token.name} withdraw: {withdraw.amountFrom}
        </Typography>
        <Typography variant="body1" fontWeight={500}>
          USDi to be receive: {withdraw.amountTo}
        </Typography>
      </Box>

      <DisableableModalButton
        text="Confirm Withdraw"
        disabled={false}
        onClick={() => useWithdrawUSDC(withdraw.amountFrom, rolodex!)}
      />
    </BaseModal>
  );
};
