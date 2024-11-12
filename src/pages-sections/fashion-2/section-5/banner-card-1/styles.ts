"use client";

import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
export const CardWrapper = styled("div")({
  maxHeight: 240,
  overflow: "hidden",
  position: "relative",
  img: { transition: "0.3s" },
  ":hover": { img: { transform: "scale(1.1)" } }
});

export const CardContent = styled("div")({
  top: 0,
  zIndex: 1,
  padding: 32,
  width: "100%",
  color: "white",
  height: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "space-between"
});
