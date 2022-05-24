import {
  Box,
  BoxProps,
  Button,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { StringifyOptions } from "querystring";
import React from "react";
import { formatColor, neutral, blue } from "../../../theme";
import { ForwardIcon } from "../../icons/misc/ForwardIcon";
import {
  ModalType,
  useModalContext,
} from "../../libs/modal-content-provider/ModalContentProvider";
import {useVaultDataContext} from "../../libs/vault-data-provider/VaultDataProvider";

interface UserTokenCardProps extends BoxProps {
  tokenName: string;
  tokenValue: string;
  vaultBalance: string;
  tokenAmount: string;
  image: {
    src: string;
    alt: string;
  };
  LTVPercent: string;
  penaltyPercent: string;
}

export const UserTokenCard = (props: UserTokenCardProps) => {
  const theme = useTheme();

  const {tokens} = useVaultDataContext();
  const {type, setType, setToken } = useModalContext();

  const {
    tokenName,
    tokenValue,
    vaultBalance,
    tokenAmount,
    image,
    LTVPercent,
    penaltyPercent,
  } = props;

  const openDeposit = () => {
    setToken((tokens as any)[tokenName])
    setType(ModalType.Deposit);
  };

  const openWithdraw = () => {
    setToken((tokens as any)[tokenName])
    setType(ModalType.Withdraw);
  };

  return (
    <Box
      sx={{
        backgroundColor: "smallCard.background",
        borderRadius: 5,
        padding: 5,
        [theme.breakpoints.down("lg")]: {
          paddingX: 2,
          paddingY: 4,
        },
        ...props.sx,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2.5 }}>
        <Box>
          <Typography variant="body1" color={formatColor(neutral.gray3)}>
            {tokenName}
          </Typography>
          <Typography variant="h3" color="text.secondary" mb={1}>
            {tokenValue}
          </Typography>

          <Typography variant="body2" color={formatColor(neutral.gray3)}>
            Vault Balance
          </Typography>
          <Typography variant="h3" color="text.secondary">
            {vaultBalance}
          </Typography>

          <Typography variant="body2" color={formatColor(neutral.gray10)}>
            {tokenAmount} {tokenName}
          </Typography>
        </Box>
        <Box
          component="img"
          width={80}
          height={80}
          src={`images/${image.src}.svg`}
          alt={image.alt}
        ></Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
        <Typography variant="body2" color={formatColor(neutral.gray3)}>
          LTV: {LTVPercent}%
        </Typography>
        <Typography
          variant="body2"
          color={formatColor(neutral.gray3)}
          marginLeft={2}
        >
          Penalty: {penaltyPercent}%
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          justifyContent: "space-between",
          gridTemplateColumns: "1fr 1fr",
          columnGap: 2.5,
        }}
      >
        <Button variant="cta" onClick={openDeposit}>
          Deposit
        </Button>
        <Button variant="cta" onClick={openWithdraw}>
          Withdraw
        </Button>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="text"
          sx={{
            width: "fit-content",
            color: formatColor(blue.blue1),
            "&:hover": {
              backgroundColor: "transparent",
              color: formatColor(neutral.gray3),

              "& path": {
                stroke: formatColor(neutral.gray3),
              },
            },
          }}
        >
          Delegate
          <ForwardIcon
            sx={{
              marginLeft: 1,
              width: 12,
              height: 10,
            }}
            strokecolor={formatColor(blue.blue1)}
          />{" "}
        </Button>
      </Box>
    </Box>
  );
};
