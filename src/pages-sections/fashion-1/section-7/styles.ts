"use client";

import styled from "@mui/material/styles/styled";
import { FlexBetween } from "components/flex-box";

export const StyledFlexBox = styled(FlexBetween)(({ theme }) => ({
  flexWrap: "wrap",
  borderRadius: "8px",
  padding: "1rem 2rem",
  border: `1px solid ${theme.palette.grey[400]}`,
  [theme.breakpoints.between("sm", "lg")]: { justifyContent: "space-evenly" },
  [theme.breakpoints.down("sm")]: { flexDirection: "column", alignItems: "flex-start" }
}));
