"use client";

import styled from "@mui/material/styles/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  minHeight: 400,
  borderRadius: 8,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  ".banner": { objectFit: "cover" },
  ".content": {
    top: 30,
    insetInline: 0,
    textAlign: "center",
    position: "absolute",
    [theme.breakpoints.down(375)]: { h2: { fontSize: 36 } }
  }
}));
