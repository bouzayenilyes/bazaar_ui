"use client";

import styled from "@mui/material/styles/styled";

export const BannerCardWrapper = styled("div")(({ theme }) => ({
  borderRadius: 12,
  overflow: "hidden",
  position: "relative",
  ":after": {
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0.55,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black"
  },
  img: {
    minHeight: 230,
    display: "block",
    objectFit: "cover"
  },
  ".content": {
    inset: 0,
    zIndex: 2,
    width: "100%",
    color: "white",
    margin: "auto",
    height: "100%",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down(375)]: {
      h3: { fontSize: 30 }
    }
  },
  ".btn-wrapper": {
    maxWidth: 120,
    width: "100%",
    marginTop: "1.5rem"
  }
}));
