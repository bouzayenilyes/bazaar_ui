"use client";

import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
export const CardRoot = styled("div")(({ theme }) => ({
  position: "relative",
  boxShadow: theme.shadows[4],
  ".banner": {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    objectPosition: "center center"
  }
}));

export const StyledParagraph = styled("p")(({ theme }) => ({
  top: "10px",
  left: "10px",
  fontWeight: 600,
  borderRadius: "5px",
  position: "absolute",
  padding: "0.5rem 1rem",
  backgroundColor: theme.palette.secondary[100]
}));

export const StyledParagraph2 = styled("p")(({ theme }) => ({
  top: "10px",
  right: "10px",
  color: "white",
  fontWeight: 600,
  borderRadius: "5px",
  position: "absolute",
  padding: "0.5rem 1.5rem",
  backgroundColor: theme.palette.primary[600]
}));
