"use client";

import styled from "@mui/material/styles/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  marginTop: "5rem",
  display: "grid",
  placeItems: "center",
  color: "white",
  borderRadius: 20,
  padding: "1.5rem",
  position: "relative",
  backgroundImage: "url(/assets/images/banners/banner-27.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top center",
  ":after": {
    top: 0,
    left: 0,
    opacity: 0.6,
    content: "''",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "absolute",
    backgroundColor: "black"
  },

  ".content": {
    zIndex: 1,
    maxWidth: 600,
    width: "100%",
    textAlign: "center",
    paddingBlock: "3rem",
    position: "relative",

    ".heading": {
      fontSize: 52,
      lineHeight: 1.2,
      [theme.breakpoints.down("sm")]: { fontSize: 42 },
      [theme.breakpoints.down(768)]: { fontSize: 32 },
      [theme.breakpoints.down(375)]: { fontSize: 27 }
    }
  }
}));
