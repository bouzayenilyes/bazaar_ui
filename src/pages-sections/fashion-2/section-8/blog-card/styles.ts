"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
export const RootStyle = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  boxShadow: theme.shadows[2],
  ".content": {
    paddingTop: ".5rem",
    paddingInline: "1rem",
    paddingBottom: "1.5rem"
  }
}));

export const ImageBox = styled("div")({
  margin: 16,
  maxHeight: 220,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  img: { transition: "0.3s", display: "block" },
  ":hover": { img: { transform: "scale(1.1)" } }
});

export const DateBox = styled("div")(({ theme }) => ({
  top: 30,
  left: 30,
  width: 50,
  height: 50,
  display: "flex",
  textAlign: "center",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.grey[200]
}));
