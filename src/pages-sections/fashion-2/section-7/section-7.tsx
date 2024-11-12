"use client";

import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import { H1, H3, Paragraph, Span } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import { RootStyle } from "./styles";

export default function Section7() {
  return (
    <RootStyle>
      <H3 fontWeight={400} fontSize={30} lineHeight={1}>
        Extra <Span color="primary.main">30% Off</Span> Online
      </H3>

      <H1 fontSize={50} lineHeight={1} mb={1}>
        Summer Season Sale
      </H1>

      <Paragraph fontWeight={600} fontSize={18} mb={4}>
        Free shipping on orders over $99
      </Paragraph>

      <Button variant="contained" size="large" color="dark">
        Shop Now
      </Button>
    </RootStyle>
  );
}
