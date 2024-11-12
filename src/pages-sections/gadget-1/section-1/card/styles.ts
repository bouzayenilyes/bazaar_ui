"use client";

import Grid from "@mui/material/Grid";
import { alpha, styled } from "@mui/material/styles";

// STYLED COMPONENT
export const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: "1rem 0",
  alignItems: "center",
  transition: "all 250ms ease-in-out",
  backgroundColor: alpha(theme.palette.background.paper, 1),
  ":hover": { boxShadow: theme.shadows[2] },
  [theme.breakpoints.down("sm")]: { padding: "1rem" }
}));
