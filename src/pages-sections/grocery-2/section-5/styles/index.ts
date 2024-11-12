"use client";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import styled from "@mui/material/styles/styled";
// CUSTOM ICON COMPONENT
import Quote from "icons/Quote";

// STYLED COMPONENTS
export const StyledCard = styled(Card)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  padding: "2rem 4rem",
  [theme.breakpoints.down("sm")]: { padding: "2rem" }
}));

export const StyledContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  position: "relative",
  padding: "4rem 6rem",
  [theme.breakpoints.down("sm")]: { padding: "2rem 4rem" }
}));

export const StyledQuote = styled(Quote)(({ theme }) => ({
  opacity: 0.08,
  fontSize: "4rem",
  position: "absolute",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: { fontSize: "3rem" },
  "&.first": {
    top: 0,
    ...(theme.direction === "rtl" ? { right: 0 } : { left: 0 })
  },
  "&.last": {
    bottom: 0,
    transform: "rotate(180deg)",
    ...(theme.direction === "rtl" ? { left: 0 } : { right: 0 })
  }
}));

export const StyledAvatar = styled(Avatar)({
  width: 64,
  height: 64,
  margin: "auto",
  display: "block"
});

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  flexWrap: "wrap",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gap: 16,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center"
  }
}));
