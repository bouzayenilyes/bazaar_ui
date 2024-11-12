"use client";

import styled from "@mui/material/styles/styled";

export const BannerWrapper = styled("div")(() => ({
  height: "100%",
  borderRadius: 4,
  display: "flex",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  alignItems: "flex-end",
  justifyContent: "center",
  backgroundColor: "#F891A9",

  ":before": {
    top: 0,
    left: 0,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 46.49%, rgba(0, 0, 0, 0.85) 99.96%)"
  },

  img: { height: "100%", objectFit: "cover" },

  ".content": { bottom: 30, color: "white", position: "absolute" }
}));

export const RootStyle = styled("div")(({ theme }) => ({
  gap: 16,
  borderRadius: 4,
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  border: `1px solid ${theme.palette.grey[300]}`,

  ".content": { paddingRight: 4, overflow: "hidden" },

  a: { flexShrink: 0 },
  ":hover": {
    img: { transform: "scale(1.1)" }
  },
  ".img-wrapper": {
    maxWidth: 100,
    display: "flex",
    backgroundColor: theme.palette.grey[300],
    img: { transition: "0.3s" },
    [theme.breakpoints.up("lg")]: { maxWidth: 120 }
  }
}));
