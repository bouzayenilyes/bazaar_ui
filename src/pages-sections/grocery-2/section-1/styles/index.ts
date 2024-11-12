"use client";

import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
export const StyledRoot = styled("div")({
  borderRadius: 8,
  overflow: "hidden"
});

export const StyledGrid = styled(Grid)(({ theme }) => ({
  position: "relative",
  alignItems: "center",
  display: "flex !important",
  padding: "2rem 1rem 5rem 2.5rem",
  backgroundColor: theme.palette.primary.main,
  ...(theme.direction === "rtl" && { padding: "2rem 2.5rem 5rem 1rem" }),
  [theme.breakpoints.down("sm")]: { flexDirection: "column-reverse" }
}));

export const GridItemOne = styled(Grid)({ color: "white" });

export const GridItemTwo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { padding: "1.8rem" }
}));
