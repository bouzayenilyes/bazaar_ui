"use client";

import Link from "next/link";
import styled from "@mui/material/styles/styled";

export const StyledLink = styled(Link)(({ theme }) => ({
  textUnderlineOffset: 4,
  textDecoration: "underline",
  color: theme.palette.primary.main
}));

export const BannerRoot = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "1rem 2rem",
  justifyContent: "space-between",
  backgroundColor: theme.palette.grey[50],
  ".img-wrapper": {
    display: "flex",
    [theme.breakpoints.down(425)]: { maxWidth: 130 }
  },

  ".max-w-lg": { maxWidth: 160 },

  [theme.breakpoints.down(375)]: {
    gap: "2rem",
    flexWrap: "wrap",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },

  [theme.breakpoints.between(768, 1167)]: {
    ".img-res": { maxWidth: 120 }
  }
}));

export const Banner3Root = styled("div")(({ theme }) => ({
  padding: "2rem",
  textAlign: "center",
  backgroundColor: theme.palette.grey[50],

  ".img-wrapper": {
    maxWidth: 350,
    display: "flex",
    margin: "auto",
    marginTop: 24
  },

  ".max-w-xl": { maxWidth: 300 }
}));
