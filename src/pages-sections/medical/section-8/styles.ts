"use client";

import styled from "@mui/material/styles/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  minHeight: 300,
  borderRadius: 12,
  display: "flex",
  marginTop: "5rem",
  overflow: "hidden",
  position: "relative",

  img: { objectFit: "cover" },

  ".content": {
    top: "50%",
    left: "15%",
    maxWidth: 350,
    position: "absolute",
    transform: "translateY(-50%)",
    [theme.breakpoints.down("sm")]: { insetInline: 0, padding: "2rem" },
    [theme.breakpoints.up("lg")]: { maxWidth: 400 },
    ...(theme.direction === "rtl" && {
      right: "15%",
      left: "auto",
      textAlign: "right",
      [theme.breakpoints.down("sm")]: { left: 0, right: 0, margin: "auto" }
    })
  },

  [theme.breakpoints.down(375)]: {
    h2: { fontSize: 22 }
  }
}));
