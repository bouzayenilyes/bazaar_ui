"use client";

import Chip, { ChipProps } from "@mui/material/Chip";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "shape"
})<{ shape: "rounded" | "square" }>(({ theme, shape }) => ({
  zIndex: 1,
  top: "10px",
  left: "10px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
  ...(shape === "square" && { borderRadius: 0 })
}));

// ==============================================================
interface Props extends ChipProps {
  discount: number;
  shape?: "rounded" | "square";
}
// ==============================================================

export default function DiscountChip({ discount = 0, shape = "rounded", ...props }: Props) {
  return discount > 0 ? (
    <StyledChip size="small" shape={shape} label={`${discount}% off`} {...props} />
  ) : null;
}
