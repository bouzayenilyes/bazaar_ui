"use client";

import styled from "@mui/material/styles/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  minHeight: 300,
  borderRadius: 12,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  marginTop: "-10rem",

  img: { objectFit: "cover" },

  ".content": {
    top: "40%",
    right: "15%",
    position: "absolute",
    transform: "translateY(-40%)",
    ...(theme.direction === "rtl" && { left: "15%", right: "auto" }),

    [theme.breakpoints.down("sm")]: {
      top: "50%",
      insetInline: 0,
      padding: "2rem",
      transform: "translateY(-50%)"
    },

    [theme.breakpoints.down(375)]: {
      h2: { fontSize: 24, marginTop: 0 }
    }
  },

  [theme.breakpoints.down(375)]: { minHeight: 260 }
}));
