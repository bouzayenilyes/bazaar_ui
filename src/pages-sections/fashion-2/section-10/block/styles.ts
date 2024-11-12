"use client";

import styled from "@mui/material/styles/styled";

export const Wrapper = styled("div")(({ theme }) => ({
  gap: 16,
  display: "flex",
  marginBottom: 16,
  alignItems: "center",
  a: { flexShrink: 0 },
  ":last-of-type": { mb: 0 },
  ":hover": { img: { transform: "scale(1.1)" } },
  ".img-wrapper": {
    maxWidth: 100,
    display: "flex",
    borderRadius: 6,
    backgroundColor: theme.palette.grey[300],
    img: { transition: "0.3s" }
  }
}));
