"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS
import FlexRowCenter from "components/flex-box/flex-row-center";

export const ContentBox = styled(Card)({
  height: 220,
  display: "flex",
  alignItems: "center",
  "& .content": { width: "50%" }
});

export const RightContent = styled(FlexRowCenter)(({ theme }) => ({
  width: "50%",
  height: "100%",
  flexDirection: "column",
  borderRadius: "0px 50% 50% 0px",
  background: theme.palette.primary[200],
  "& p": { fontSize: 13, lineHeight: 1.4 }
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  "& img": { width: "90%" },
  [theme.breakpoints.down("sm")]: { "& img": { width: "100%" } },
  [theme.breakpoints.up("lg")]: { "& img": { width: "60%" } }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "12px",
  marginTop: "16px",
  padding: "4px 12px",
  background: theme.palette.primary.main,
  "&:hover": { background: theme.palette.primary[400] }
}));
