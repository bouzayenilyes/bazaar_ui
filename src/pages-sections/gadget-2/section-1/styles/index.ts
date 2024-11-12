"use client";

import Container from "@mui/material/Container";
import ButtonBase from "@mui/material/ButtonBase";
import styled from "@mui/material/styles/styled";

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: "5rem",
  [theme.breakpoints.down("sm")]: { paddingTop: "1.5rem" }
}));

// ==============================================================
type ButtonProps = { isWhite?: boolean };
// ==============================================================

export const StyledButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "isWhite"
})<ButtonProps>(({ theme, isWhite }) => ({
  fontWeight: 600,
  borderRadius: 32,
  padding: ".5rem 1.5rem",
  backgroundColor: theme.palette.grey[800],
  ...(isWhite && { backgroundColor: theme.palette.common.white })
}));

// ==============================================================
type ContentWrapperProps = { hasGradient?: boolean };
// ==============================================================

export const ContentWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "hasGradient"
})<ContentWrapperProps>(({ theme, hasGradient }) => ({
  height: "100%",
  color: "white",
  borderRadius: 12,
  backgroundColor: theme.palette.grey[900],
  ...(hasGradient && { background: "linear-gradient(214deg, #FD814D 0.04%, #FF5745 100.04%)" })
}));
