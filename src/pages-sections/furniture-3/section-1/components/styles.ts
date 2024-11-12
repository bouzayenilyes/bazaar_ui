"use client";

import styled from "@mui/material/styles/styled";

export const StyledRoot = styled("div")(({ theme }) => ({
  borderRadius: 8,
  display: "flex",
  overflow: "hidden",
  position: "relative",

  ".button-wrapper": {
    left: 50,
    bottom: 40,
    position: "absolute",
    "& .MuiButton-contained": { color: "white" },
    [theme.breakpoints.down(425)]: { bottom: 40, left: 30 }
  },

  ".text-content": {
    top: 40,
    left: 50,
    width: "100%",
    height: "100%",
    position: "absolute",
    [theme.breakpoints.down(425)]: { top: 30, left: 30 }
  },

  [theme.breakpoints.down(350)]: {
    h2: { fontSize: 27 }
  }
}));

export const StyledWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  borderRadius: 8,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  border: `1px solid ${theme.palette.divider}`,
  justifyContent: "center",
  alignItems: "center",

  ".text-content": {
    top: 20,
    left: 25,
    position: "absolute"
  },

  "& img": {
    display: "block",
    objectFit: "cover"
  }
}));
