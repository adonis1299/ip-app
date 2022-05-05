import { Box, Button, Typography, useTheme } from "@mui/material";
import { useLight } from "../../../hooks/useLight";
import { formatGradient, gradient, formatColor, neutral } from "../../../theme";
import { SwapContainer } from "../swap";
import { TitleText } from "../text";

export const ProtocolStatsCard = () => {
  const isLight = useLight();

  return (
    <Box
      sx={{
        padding: {xs: 3, md: 6},
        backgroundImage: `linear-gradient(${formatGradient(
          isLight ? gradient.gradient1 : gradient.gradient2
        )})`,
        borderRadius: {xs: 5, md: 17},
      }}
    >
      <Box
        about="Minted and Deposited stats"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: 2,
          marginBottom: 4,
        }}
      >
        <TitleText title="USDi Minted" text="672,233,324" />
        <TitleText title="USDC Deposited" text="350,375,764" />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Box
          component="img"
          src="images/ReserveRatio.png"
          width={17}
          height={18}
          marginRight={1}
        />
        <Typography variant="caption">Reserve Ratio: 52.12%</Typography>
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <SwapContainer />
      </Box>

      <Button variant="contained" sx={{color: formatColor(neutral.white)}}>Swap</Button>
    </Box>
  );
};
