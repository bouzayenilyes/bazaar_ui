"use client";

import styled from "@mui/material/styles/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  minHeight: 250,
  borderRadius: 8,
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
    background: "linear-gradient(180deg, rgba(252, 196, 209, 0.00) 53.41%, #F891A9 100%)"
  },

  p: { textDecoration: "underline" },

  img: {
    [theme.breakpoints.down("sm")]: { display: "none" }
  },

  ".content": {
    bottom: 30,
    color: "white",
    position: "absolute"
  }
}));
