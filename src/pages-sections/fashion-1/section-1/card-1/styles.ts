"use client";

import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";

// STYLED COMPONENTS
export const StyledRoot = styled("div")(({ theme }) => ({
  height: "100%",
  borderRadius: 4,
  backgroundColor: "white",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  border: `1px solid ${theme.palette.grey[200]}`,

  ":hover": {
    borderColor: "transparent",
    boxShadow: theme.shadows[3]
  },

  ".content": {
    padding: "1.5rem",
    paddingTop: 0
  },

  [theme.breakpoints.between("sm", "md")]: {
    display: "flex",
    padding: "2rem",
    alignItems: "center",
    ".content": { padding: 0, width: "50%" }
  },

  [theme.breakpoints.down("sm")]: {
    padding: "2rem",
    ".content": { padding: 0, marginTop: 10 }
  }
}));

export const StyledImage = styled(LazyImage)(({ theme }) => ({
  padding: "2rem",
  marginInline: "auto",
  [theme.breakpoints.down("sm")]: { padding: 0 },
  [theme.breakpoints.between("sm", "md")]: { width: "50%", padding: "1rem" }
}));
