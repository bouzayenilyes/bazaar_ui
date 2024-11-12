"use client";

import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
export const StyledGrid = styled(Grid)(({ theme }) => ({
  borderRadius: 4,
  alignItems: "center",
  backgroundColor: "white",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  border: `1px solid ${theme.palette.grey[200]}`,

  ":hover": {
    boxShadow: theme.shadows[3],
    borderColor: "transparent"
  },

  ".banner": {
    maxWidth: 300,
    display: "flex",
    marginInline: "auto"
  },

  [theme.breakpoints.down("sm")]: {
    padding: "2rem",
    paddingBottom: 0
  }
}));
