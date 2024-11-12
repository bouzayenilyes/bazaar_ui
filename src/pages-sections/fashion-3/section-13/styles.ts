"use client";

import styled from "@mui/material/styles/styled";
// MUI ICON COMPONENTS
import Instagram from "@mui/icons-material/Instagram";

// STYLED COMPONENTS
export const ImageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  position: "relative",
  ":hover": {
    "::before": { opacity: 0.6 },
    "& .MuiSvgIcon-root": {
      opacity: 1,
      transform: "rotate(0deg) scale(1)"
    }
  },
  "::before": {
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "all 0.3s",
    backgroundColor: theme.palette.dark.main
  }
}));

export const InstagramIcon = styled(Instagram)({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
  opacity: 0,
  color: "#fff",
  margin: "auto",
  position: "absolute",
  transition: "all 0.3s",
  transform: "rotate(90deg) scale(2)"
});
