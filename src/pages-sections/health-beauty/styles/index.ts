"use client";

import styled from "@mui/material/styles/styled";
import { Paragraph } from "components/Typography";

// STYLED COMPONENT
export const SubTitle = styled(Paragraph)(({ theme }) => ({
  fontSize: 13,
  marginBottom: 24,
  color: theme.palette.grey[600]
}));
