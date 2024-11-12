"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
export const StyledCard = styled(Card)(({ theme }) => ({
  gap: "1rem",
  height: "100%",
  display: "flex",
  padding: "1.5rem",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: 20,
    textAlign: "center",
    flexDirection: "column"
  }
}));
