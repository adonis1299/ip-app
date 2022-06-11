import { Box, Toolbar, Typography, Button, Link } from "@mui/material";
import { useContext } from "react";

import { ConnectWalletButton, SelectedChainButton } from "../../util/button";
import { BaseSwitch } from "../../util/switch";
import { LightIcon } from "../../icons/misc/LightIcon";
import { DarkIcon } from "../../icons/misc/DarkIcon";
import { PaletteModeContext } from "../../libs/palette-mode-provider/palette-mode-provider";
import { useLight } from "../../../hooks/useLight";
import { useAppGovernanceContext } from "../../libs/app-governance-provider/AppGovernanceProvider";
import Cookies from "universal-cookie";
import { formatColor, green } from "../../../theme";

export const DesktopToolBar = () => {
  //desktop menu config

  const isLight = useLight();

  const cookies = new Cookies();
  const { toggleMode } = useContext(PaletteModeContext);

  const { setIsApp } = useAppGovernanceContext();
  return (
    <Toolbar>
      <Link href="#/landing" role="heading" aria-level={1}>
        <Box
          component="img"
          src="images/ip_green.svg"
          width={50}
          height={50}
        ></Box>
      </Link>
      {setIsApp !== undefined ? (
        <Box sx={{ gap: 3 }} display="flex" ml={3}>
          <BaseSwitch
            option1="App"
            option2="Governance"
            onOptionChange={setIsApp}
          />
          <Box display="flex" alignItems="center"></Box>
        </Box>
      ) : (
        <></>
      )}
      {window.location.hash !== "#/sale" && (
        <Box mx={2} maxWidth={200} width="100%">
          {/* <Button variant="outlined">
                <Link href="#/whitelist">
                  <Typography variant="body3">Whitelist</Typography>
                </Link>
              </Button> */}
          <Link href="#/sale">
            <Button variant="outlined">
              <Typography variant="body3" color={formatColor(green.green2)}>
                IPT Sale
              </Typography>
            </Button>
          </Link>
        </Box>
      )}

      <Box sx={{ gap: 2 }} display="flex" mr={-1} ml="auto">
        <SelectedChainButton />
        <ConnectWalletButton />
        <BaseSwitch
          option1={<LightIcon sx={{ width: 15 }} />}
          option2={<DarkIcon sx={{ width: 15 }} />}
          onOptionChange={toggleMode}
          defaultIsOption1={isLight}
        />
      </Box>
    </Toolbar>
  );
};
