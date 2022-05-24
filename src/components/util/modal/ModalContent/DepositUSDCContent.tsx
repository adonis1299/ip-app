import { useState, useEffect } from "react";

import { Box, Typography, Button } from "@mui/material";
import { formatColor, neutral } from "../../../../theme";
import { DecimalInput } from "../../textFields";
import { DisableableModalButton } from "../../button/DisableableModalButton";
import { ModalInputContainer } from "./ModalInputContainer";
import {
  ModalType,
  useModalContext,
} from "../../../libs/modal-content-provider/ModalContentProvider";
import { useStableCoinsContext } from "../../../libs/stable-coins-provider/StableCoinsProvider";

export const DepositUSDCContent = () => {
  const { USDC: USDCToken } = useStableCoinsContext();
  const { setType, updateUSDC, USDC } = useModalContext();
  const [disabled, setDisabled] = useState(true);
  const [focus, setFocus] = useState(false);
  const [isMoneyValue, setIsMoneyValue] = useState(false);
  const toggle = () => setFocus(!focus);

  const setMax = () =>
    updateUSDC("amountToDeposit", USDCToken.wallet_amount.toString());

  const numAmountToDeposit = Number(USDC.amountToDeposit);

  useEffect(() => {
    setDisabled(numAmountToDeposit <= 0);
  }, [USDC.amountToDeposit]);
  console.log(USDC);
  return (
    <Box>
      <Typography
        variant="body2"
        fontWeight={600}
        color={formatColor(neutral.gray10)}
        textAlign="right"
      >
        {" "}
        Wallet Balance: {USDCToken.wallet_balance} USDC
      </Typography>

      <ModalInputContainer focus={focus}>
        <DecimalInput
          onFocus={toggle}
          onBlur={toggle}
          onChange={(amount) => updateUSDC("amountToDeposit", amount)}
          placeholder={`0 ${isMoneyValue ? "USD" : USDCToken.ticker}`}
          value={USDC.amountToDeposit}
          isMoneyValue={isMoneyValue}
        />

        <Box sx={{ display: "flex", paddingBottom: 0.5, alignItems: "center" }}>
          <Button
            onClick={setMax}
            sx={{
              minWidth: "auto",
              height: 30,
              paddingY: 2,
              paddingX: 1,
              "&:hover": {
                backgroundColor: "transparent",
                ".MuiTypography-root.MuiTypography-body1": {
                  color: formatColor(neutral.gray1),
                },
              },
            }}
          >
            <Typography
              sx={{
                color: formatColor(neutral.gray3),
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Max
            </Typography>
          </Button>
        </Box>
      </ModalInputContainer>

      <Box marginTop={2}>
        <DisableableModalButton
          text="Deposit"
          disabled={disabled}
          onClick={() => setType(ModalType.DepositUSDCConfirmation)}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 2,
        }}
      >
        <Typography variant="caption">Borrowing Power</Typography>
        <Box
          component="img"
          src="images/up_arrow_blue.png"
          width={10}
          height={12}
          marginX={1}
        />
        <Typography variant="caption">$0</Typography>
      </Box>
    </Box>
  );
};
