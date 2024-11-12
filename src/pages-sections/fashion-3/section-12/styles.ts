"use client";

import styled from "@mui/material/styles/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  minHeight: 400,
  borderRadius: 8,
  display: "flex",
  overflow: "hidden",
  position: "relative",

  ".content": {
    left: 100,
    top: "50%",
    position: "absolute",
    transform: "translateY(-50%)",

    [theme.breakpoints.down("lg")]: { left: 80 },
    [theme.breakpoints.down("sm")]: {
      padding: 8,
      insetInline: 0,
      display: "grid",
      textAlign: "center",
      placeItems: "center"
    },
    [theme.breakpoints.down(375)]: { padding: 16 }
  },

  ".mobile-img": {
    bottom: 0,
    right: 150,
    display: "flex",
    position: "absolute",
    [theme.breakpoints.up("lg")]: { width: 300 },
    [theme.breakpoints.down("md")]: { display: "none" }
  },

  [theme.breakpoints.down("sm")]: { minHeight: 330 },
  [theme.breakpoints.down(575)]: { minHeight: 400 }
}));
