"use client";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

// USED IN SECTION 3 & 4
export const TitleBox = styled("div")(({ theme }) => ({
  marginBlock: "2rem",
  textAlign: "center",
  "& h1": {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: { fontSize: 28 }
  },
  "& div": {
    width: 200,
    height: "2px",
    margin: "auto",
    background: theme.palette.primary.main
  }
}));

// USED IN SECTION 2
export const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  boxShadow: "none",
  alignItems: "center",
  padding: "20px 50px",
  justifyContent: "center",
  background: theme.palette.paste[50],
  [theme.breakpoints.down("sm")]: {
    padding: "20px 30px",
    "& h3": { fontSize: 20 }
  }
}));

// USED IN SECTION 1
export const StyledRoot = styled("div")(({ theme }) => ({
  marginBottom: 60,
  overflow: "hidden",
  backgroundColor: theme.palette.paste[50]
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    ".content": { textAlign: "center" }
  }
}));

export const StyledButton = styled(Button)({
  fontSize: 16,
  color: "#fff",
  paddingBlock: 6,
  fontWeight: 400,
  paddingInline: 30
});
