"use client";

import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
export const StyledListItem = styled(ListItem)(({ theme }) => ({
  fontSize: 13,
  fontWeight: 500,
  cursor: "pointer",
  padding: "10px 0 0 0",
  transition: "all 0.3s",
  ":hover": { color: theme.palette.primary.main }
}));

export const StyledCard = styled(Card)({
  border: 0,
  height: "100%",
  borderRadius: "3px",
  padding: "1rem 2rem"
});
