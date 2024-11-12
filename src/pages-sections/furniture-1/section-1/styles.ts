"use client";

import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

export const Wrapper = styled("div")({
  marginBottom: 60,
  overflow: "hidden",
  ".carousel-content": { maxWidth: 600 }
});

export const ContentWrapper = styled("div")(({ theme }) => ({
  minHeight: 650,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url('/assets/images/headers/furniture-1.jpg')",
  [theme.breakpoints.down("md")]: { h1: { fontSize: 50 }, paddingInline: 16 },
  [theme.breakpoints.down("sm")]: { textAlign: "center", h1: { fontSize: 40 } }
}));

export const StyledButton = styled(Button)({
  color: "#fff",
  fontWeight: 400,
  borderRadius: 0,
  fontSize: "16px",
  padding: "8px 30px"
});
