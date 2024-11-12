"use client";

import styled from "@mui/material/styles/styled";

// ==============================================================
type BannerProps = { bgColor: string };
// ==============================================================

export const BannerCardWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "bgColor"
})<BannerProps>(({ theme, bgColor }) => ({
  height: "100%",
  display: "flex",
  borderRadius: 12,
  position: "relative",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: bgColor ?? theme.palette.paste[100],
  ".img-wrapper": {
    maxWidth: 230,
    padding: "1rem 3rem 1rem 0",
    [theme.breakpoints.down(376)]: { display: "none" }
  },
  ".content": {
    flexShrink: 0,
    marginLeft: "5rem",
    paddingBlock: "4rem",
    [theme.breakpoints.down("lg")]: { marginLeft: "3rem" },
    [theme.breakpoints.down("sm")]: { marginLeft: "2rem", paddingBlock: "2rem" }
  }
}));
