"use client";

import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
export const BannerBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "img"
})<{ img: string }>(({ theme, img }) => ({
  padding: 32,
  overflow: "hidden",
  borderRadius: "3px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${img})`,
  ...(theme.direction === "rtl" && {
    textAlign: "right",
    "& > .MuiDivider-root": { marginLeft: "auto" }
  })
}));
