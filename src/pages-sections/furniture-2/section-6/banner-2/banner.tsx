import { ReactNode } from "react";
import Button from "@mui/material/Button";
import { H3, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { BannerWrapper, ContentWrapper } from "../styles";

// ==============================================================
interface Props {
  title: ReactNode;
  ImageComponent: ReactNode;
  isContentCenter?: boolean;
}
// ==============================================================

export default function Banner2({ ImageComponent, title, isContentCenter }: Props) {
  return (
    <BannerWrapper>
      {/* BACKGROUND IMAGE */}
      {ImageComponent}

      <ContentWrapper center={isContentCenter}>
        <Paragraph fontSize={16} fontWeight={600}>
          New Arrivals
        </Paragraph>

        <H3 mb={4} textTransform="uppercase" fontWeight={700} fontSize={32} lineHeight={1.1}>
          {title}
        </H3>

        <Button variant="contained" color="orange" size="large">
          Shop Now
        </Button>
      </ContentWrapper>
    </BannerWrapper>
  );
}
