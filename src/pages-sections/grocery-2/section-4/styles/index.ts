"use client";

import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: "3rem",
  borderRadius: 8,
  alignItems: "center",
  [theme.breakpoints.down("sm")]: { gap: 24, flexDirection: "column-reverse" },
  [theme.breakpoints.between("sm", "lg")]: { "& .grid-2": { display: "none" } }
}));
