"use client";

import styled from "@mui/material/styles/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    ".item-1, .item-3": { display: "none" }
  }
}));

export const ImgWrapper = styled("div")({
  borderRadius: 8,
  display: "flex",
  overflow: "hidden"
});

export const BannerWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#F8713B",
  height: "100%",
  borderRadius: 8,
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  paddingInline: "2rem",
  gap: 16,

  ".img-box": {
    display: "flex",
    [theme.breakpoints.down("sm")]: { display: "none" }
  },

  ".content": { flex: 1 },

  [theme.breakpoints.down("md")]: { paddingBlock: "2rem" }
}));
