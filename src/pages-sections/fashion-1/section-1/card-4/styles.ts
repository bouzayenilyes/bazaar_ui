"use client";

import { alpha, styled } from "@mui/material/styles";

// STYLED COMPONENT
export const StyledRoot = styled("div")(({ theme }) => ({
  height: "100%",
  display: "grid",
  borderRadius: 4,
  alignItems: "center",
  padding: "2rem 3rem",
  justifyContent: "center",
  transition: "all 250ms ease-in-out",
  boxShadow: "0px 0px 28px rgba(3, 0, 71, 0.01)",
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  ":hover": { boxShadow: theme.shadows[3], borderColor: "transparent" },

  ".icon": { fontSize: 40, marginBottom: 16 },
  ".icon-box": { textAlign: "center" }
}));
