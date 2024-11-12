"use client";

import Image from "next/image";
import { ReactNode } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
const CardWrapper = styled(Box)({
  overflow: "hidden",
  position: "relative"
});

const CardContent = styled("div")(({ theme }) => ({
  top: 0,
  left: 32,
  zIndex: 1,
  height: "100%",
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  ...(theme.direction === "rtl" && { left: "auto", right: 32, textAlign: "right" })
}));

// ========================================================
interface Props extends BoxProps {
  img: string;
  children: ReactNode;
  imageFull?: boolean;
}
// ========================================================

export default function BannerCard({ img, children, imageFull, ...props }: Props) {
  return (
    <CardWrapper {...props}>
      <Image
        src={img}
        width={330}
        height={239}
        alt="category"
        style={{ width: "100%", objectFit: "cover", height: imageFull ? "100%" : "auto" }}
      />
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
}
