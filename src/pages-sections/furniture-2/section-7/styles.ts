"use client";

import styled from "@mui/material/styles/styled";

export const Wrapper = styled("div")(({ theme }) => ({
  borderRadius: 16,
  padding: "4rem 3rem",
  backgroundColor: theme.palette.grey[200],
  [theme.breakpoints.down("lg")]: { padding: "2rem" }
}));

export const ImageWrapper = styled("div")({
  width: 50,
  height: 50,
  flexShrink: 0,
  display: "flex",
  overflow: "hidden",
  borderRadius: "50%",
  border: "2px solid white"
});
