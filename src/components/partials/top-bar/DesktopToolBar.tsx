import { Box, Toolbar } from "@mui/material";
import { useContext } from "react";

import { Link } from "../../util/link";
import { ConnectWalletButton, SelectedChainButton } from "../../util/button";
import { BaseSwitch } from "../../util/switch";
import { LightIcon } from "../../icons/misc/LightIcon";
import { DarkIcon } from "../../icons/misc/DarkIcon";
import { PaletteModeContext } from "../../libs/palette-mode-provider/palette-mode-provider";
import { useLight } from "../../../hooks/useLight";
import { useAppGovernanceContext } from "../../libs/app-governance-provider/AppGovernanceProvider";
import Cookies from "universal-cookie";

export const DesktopToolBar = () => {
  //desktop menu config

  const isLight = useLight();

  const cookies = new Cookies();
  const { toggleMode } = useContext(PaletteModeContext);

  const { setIsApp } = useAppGovernanceContext();
  return (
    <Toolbar>
      <Link to="/landing" role="heading" aria-level={1}>
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
