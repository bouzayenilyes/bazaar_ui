"use client";

import styled from "@mui/material/styles/styled";

const CommonDiv = styled("div")({
  gap: "2rem",
  display: "flex",
  alignItems: "center",
  position: "relative"
});

const CommonWrapper = styled(CommonDiv)({
  flex: 1,
  ".banner-img": {
    width: "100%",
    objectFit: "cover"
  },
  ".content": {
    color: "white",
    position: "absolute"
  }
});

// ==============================================================

// CARD 1 STYLED COMPONENT
export const Card1Wrapper = styled(CommonDiv)(({ theme }) => ({
  backgroundColor: "#FFA954",
  img: { position: "relative", zIndex: 1 },
  ".content": {
    color: "white",
    position: "relative",
    "::before": {
      top: 35,
      width: 180,
      height: 75,
      left: "-70%",
      content: "''",
      position: "absolute",
      background: `linear-gradient(270deg, #FFA954 0%, #FFC185 0.01%, rgba(255, 169, 84, 0.00) 100%)`,
      [theme.breakpoints.down("lg")]: { left: "-82%", top: 30, height: 70 },
      [theme.breakpoints.up("xl")]: { left: "-60%", height: 90 },
      [theme.breakpoints.down(575)]: { display: "none" }
    }
  },
  [theme.breakpoints.down(575)]: {
    padding: "2rem",
    img: { display: "none" }
  }
}));

// CARD 2 STYLED COMPONENT
export const Card2Wrapper = styled(CommonWrapper)(({ theme }) => ({
  width: "100%",
  ".content": {
    left: 30,
    ...(theme.direction === "rtl" && { right: 30, left: "auto" })
  },

  [theme.breakpoints.down(575)]: {
    ".banner-img": { objectPosition: "top" }
  }
}));

// CARD 3 STYLED COMPONENT
export const Card3Wrapper = styled(CommonWrapper)(({ theme }) => ({
  ".content": {
    top: 20,
    left: 30,
    ...(theme.direction === "rtl" && { right: 30, left: "auto" })
  }
}));

// CARD 4 STYLED COMPONENT
export const Card4Wrapper = styled(CommonWrapper)(({ theme }) => ({
  width: "100%",
  ".content": {
    top: 30,
    right: 30,
    ...(theme.direction === "rtl" && { left: 30, right: "auto" })
  }
}));

// CARD 5 STYLED COMPONENT
export const Card5Wrapper = styled(CommonWrapper)(({ theme }) => ({
  height: "100%",
  color: "white",
  textAlign: "center",
  paddingBlock: "2rem",
  justifyContent: "center",
  backgroundColor: theme.palette.paste[400],
  ".content": { right: 30, top: 30 }
}));

// CARD 6 STYLED COMPONENT
export const Card6Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  ".banner-img": {
    width: "100%",
    objectFit: "cover"
  },
  ".content": {
    left: 30,
    top: "50%",
    color: "white",
    position: "absolute",
    transform: "translateY(-50%)",
    ...(theme.direction === "rtl" && { right: 30, left: "auto", textAlign: "right" })
  }
}));
