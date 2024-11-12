"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
export const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: 0,
  overflow: "unset",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  "&:hover": { boxShadow: theme.shadows[2] }
}));
