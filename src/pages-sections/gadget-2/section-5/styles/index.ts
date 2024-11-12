"use client";

import ButtonBase from "@mui/material/ButtonBase";
import styled from "@mui/material/styles/styled";

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  fontWeight: 600,
  borderRadius: 32,
  padding: ".7rem 1.5rem",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[800]
}));

export const YellowBox = styled("div")(({ theme }) => ({
  padding: "3rem",
  borderRadius: 24,
  position: "relative",
  backgroundColor: "#FEEA71",
  ".img-wrapper": {
    right: 0,
    zIndex: 1,
    bottom: 0,
    width: 380,
    display: "block",
    position: "absolute",
    img: { display: "block" },
    [theme.breakpoints.down("sm")]: { display: "none" }
  },
  [theme.breakpoints.down(375)]: {
    padding: "2rem",
    h2: { fontSize: 27 }
  }
}));

export const BlackBox = styled("div")(({ theme }) => ({
  height: "100%",
  color: "white",
  display: "flex",
  borderRadius: 24,
  position: "relative",
  backgroundColor: "black",
  ".img-wrapper": {
    width: 260,
    display: "flex",
    img: { alignSelf: "flex-end" },
    [theme.breakpoints.down("sm")]: { display: "none" }
  },
  ".content": {
    paddingBlock: "3rem",
    [theme.breakpoints.down("sm")]: { paddingInline: "3rem" },
    [theme.breakpoints.down(375)]: { h2: { fontSize: 27 } }
  }
}));
