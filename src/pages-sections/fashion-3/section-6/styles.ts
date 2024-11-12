"use client";

import styled from "@mui/material/styles/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  minHeight: 270,
  borderRadius: 8,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.orange.main,

  img: {
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: { display: "none" }
  },

  ".content": {
    left: 120,
    top: "50%",
    color: "white",
    position: "absolute",
    transform: "translateY(-50%)",
    ...(theme.direction === "rtl" && { right: 120, left: "auto", textAlign: "right" }),

    [theme.breakpoints.down("lg")]: {
      left: 80,
      ...(theme.direction === "rtl" && { right: 80 })
    },
    [theme.breakpoints.down("sm")]: {
      left: 0,
      right: 0,
      textAlign: "center"
    }
  }
}));
