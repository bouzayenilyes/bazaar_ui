"use client";

import styled from "@mui/material/styles/styled";

export const BannerWrapper = styled("div")({
  minHeight: 300,
  height: "100%",
  display: "flex",
  borderRadius: 12,
  overflow: "hidden",
  position: "relative",
  img: { objectFit: "cover" }
});

export const BannerOneWrapper = styled(BannerWrapper)(({ theme }) => ({
  minHeight: 400,
  ".content": {
    top: 40,
    left: 40,
    zIndex: 1,
    position: "absolute",
    ...(theme.direction === "rtl" && { right: 40, left: "auto", textAlign: "right" })
  },
  ".count-down": {
    gap: 24,
    marginTop: 24,
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down(375)]: {
      maxWidth: 140,
      marginRight: "auto",
      justifyContent: "space-between"
    }
  }
}));

export const ContentWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "center"
})<{ center: boolean }>(({ center }) => ({
  top: 40,
  zIndex: 1,
  insetInline: 0,
  textAlign: "center",
  position: "absolute",
  ...(center && { top: "40%", transform: "translateY(-50%)" })
}));

export const CountBoxWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  ".label": {
    marginTop: 8,
    fontWeight: 600,
    color: theme.palette.grey[600]
  }
}));
