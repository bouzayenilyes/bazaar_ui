"use client";

import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
export const BannerWrapper = styled("div")(({ theme }) => ({
  zIndex: 1,
  gap: "5rem",
  padding: "2rem",
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  borderRadius: "3px",
  alignItems: "center",
  position: "relative",
  justifyContent: "flex-end",
  ":after": {
    top: 0,
    left: 0,
    zIndex: -1,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(/assets/images/banners/long-banner.jpg)`,
    ...(theme.direction === "rtl" && {
      transform: "rotateX(180deg) rotateZ(180deg)"
    })
  },

  [theme.breakpoints.down("md")]: {
    gap: "1rem",
    flexDirection: "column",
    justifyContent: "center"
  },

  ".content": {
    flex: 1,
    textAlign: "center"
  }
}));
