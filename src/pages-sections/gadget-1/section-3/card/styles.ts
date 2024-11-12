"use client";

import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
export const Wrapper = styled(Box)(({ theme }) => ({
  gap: 10,
  display: "flex",
  borderRadius: 2,
  alignItems: "center",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  ":hover": { boxShadow: theme.shadows[2] },
  ".content": { paddingLeft: "2rem", width: "60%" },
  ".img-wrapper": { display: "flex", width: "40%" },
  [theme.breakpoints.down("sm")]: { ".content": { padding: "1.5rem" } }
}));
