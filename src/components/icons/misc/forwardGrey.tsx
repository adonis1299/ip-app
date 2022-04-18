import { SvgIcon, SvgIconProps } from "@mui/material";
import { forwardRef } from "react";
import React from "react";

export const ForwardGreyIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon
        {...props}
        ref={ref}
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M19.3333 12L24.8333 17.5M24.8333 17.5L19.3333 23M24.8333 17.5L10.1667 17.5M34 17.5C34 19.6668 33.5732 21.8124 32.744 23.8143C31.9148 25.8161 30.6994 27.6351 29.1673 29.1673C27.6351 30.6994 25.8161 31.9148 23.8143 32.744C21.8124 33.5732 19.6668 34 17.5 34C15.3332 34 13.1876 33.5732 11.1857 32.744C9.18385 31.9148 7.36491 30.6994 5.83274 29.1673C4.30057 27.6351 3.08519 25.8161 2.25599 23.8143C1.42678 21.8124 1 19.6668 1 17.5C1 13.1239 2.73839 8.92709 5.83274 5.83274C8.92709 2.73839 13.1239 1 17.5 1C21.8761 1 26.0729 2.73839 29.1673 5.83274C32.2616 8.92709 34 13.1239 34 17.5Z"
          stroke="#AFAFAF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
