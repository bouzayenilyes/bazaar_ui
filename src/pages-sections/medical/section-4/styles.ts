"use client";

import styled from "@mui/material/styles/styled";

export const BannerCardWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "bgColor"
})<{ bgColor: string }>(({ theme, bgColor }) => ({
  height: "100%",
  minHeight: 270,
  borderRadius: 12,
  display: "flex",
  position: "relative",
  alignItems: "center",
  backgroundColor: bgColor ?? theme.palette.paste[100],
  ".img-wrapper": {
    right: 30,
    bottom: 0,
    height: 250,
    maxWidth: 170,
    position: "absolute",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain"
    }
  },
  ".content": {
    flexShrink: 0,
    marginLeft: "2rem",
    [theme.breakpoints.up("lg")]: { marginLeft: "4rem" }
  },
  [theme.breakpoints.down(425)]: {
    minHeight: 200,
    ".img-wrapper": { display: "none" }
  }
}));
