"use client";

import Card, { CardProps } from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

// ===============================================
interface Props extends CardProps {
  hoverEffect?: boolean;
}
// ===============================================

const BazaarCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "hoverEffect"
})<Props>(({ theme, hoverEffect }) => ({
  overflow: "unset",
  borderRadius: "8px",
  transition: "all 250ms ease-in-out",
  "&:hover": { ...(hoverEffect && { boxShadow: theme.shadows[3] }) }
}));

export default BazaarCard;
