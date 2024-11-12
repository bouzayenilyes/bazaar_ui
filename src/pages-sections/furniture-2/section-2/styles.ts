"use client";

import styled from "@mui/material/styles/styled";

export const BannerCardWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  minHeight: 220,
  maxHeight: 300,
  borderRadius: 8,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  img: { objectFit: "cover" },
  ".content": {
    zIndex: 1,
    right: 50,
    top: "50%",
    textAlign: "right",
    position: "absolute",
    transform: "translateY(-50%)",
    [theme.breakpoints.down(574)]: { right: 35, h6: { fontSize: 27 } },
    ...(theme.direction === "rtl" && { left: 50, textAlign: "left", right: "auto" })
  }
}));
