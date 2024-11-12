"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  padding: "3rem 4rem",
  boxShadow: theme.shadows[4],
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top right",
  backgroundImage: `linear-gradient(to right,#fff 75%, transparent), url(/assets/images/products/bg-gradient.png)`,
  ":hover": { boxShadow: theme.shadows[2] },
  ".content": { maxWidth: 390 },
  [theme.breakpoints.down("sm")]: { padding: "2rem" }
}));
