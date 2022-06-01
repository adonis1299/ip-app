import { Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import { DiscordIcon } from "../../components/icons/misc/DiscordIcon";
import { formatColor, formatGradient, gradient, neutral } from "../../theme";
import { generateSmoothGradient } from "../../theme/gradient/easing";

export const Community: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          paddingTop: 10,
          paddingX: 10,
          paddingBottom: 30,
          backgroundColor: formatColor(neutral.white),
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            flexBasis: "100%",
            width: "100%",
            maxWidth: 1250,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            display="inline"
            variant="h1"
            textAlign="center"
            sx={{
              color: formatColor(neutral.black),
            }}
          >
            Join the Community
          </Typography>
        </Box>
        <Box sx={{ flexBasis: "100%" }} />
        <Box
          sx={{
            flexBasis: "100%",
            flexWrap: "nowrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ flexBasis: "30%" }} />
          <Link
            href="https://discord.gg/s9Wja2tb6k"
          >
            <Box
              sx={{
                mx: 2,
                textAlign: "center",
                width: { xs: 36, md: 48 },
              }}
              component="img"
              src="/images/discord_icon_black.svg"
            ></Box>
          </Link>
          <Link href="https://twitter.com/labsgfx">
            <Box
              sx={{
                mx: 2,
                textAlign: "center",
                width: { xs: 36, md: 48 },
              }}
              component="img"
              src="/images/twitter_bird_icon_black.svg"
            ></Box>
          </Link>
          <Box sx={{ flexBasis: "30%" }} />
        </Box>
        <Box sx={{ flexBasis: "100%" }} />
        <Box sx={{ flexBasis: "100%" }} />
        <Box sx={{ flexBasis: "100%" }} />
        <Box sx={{ flexBasis: "100%" }} />
        <Typography
          display="inline"
          variant="h3"
          sx={{
            color: formatColor(neutral.gray3),
          }}
        >
          See you soon!
        </Typography>
      </Box>
    </>
  );
};
