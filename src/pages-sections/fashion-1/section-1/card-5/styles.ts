"use client";

import Grid from "@mui/material/Grid";
import { alpha, styled } from "@mui/material/styles";

// STYLED COMPONENT
export const StyledGrid = styled(Grid)(({ theme }) => ({
  height: "100%",
  borderRadius: 4,
  alignItems: "center",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.5),

  ":hover": {
    borderColor: "transparent",
    boxShadow: theme.shadows[3]
  },

  ".banner": {
    maxHeight: 200,
    objectFit: "contain",
    marginInline: "auto"
  },

  [theme.breakpoints.down("sm")]: {
    ".grid-1": { order: 2 },
    ".grid-2": { order: 1 }
  }
}));
