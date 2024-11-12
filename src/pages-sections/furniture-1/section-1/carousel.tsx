"use client";

import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { H1, H6, Paragraph } from "components/Typography";
import { FurnitureCarouselItem } from "models/Carousel.model";
// STYLED COMPONENTS
import { StyledButton, ContentWrapper } from "./styles";
import { COMMON_DOT_STYLES } from "components/carousel/styles";

// =============================================================================
type Props = { mainCarouselData: FurnitureCarouselItem[] };
// =============================================================================

export default function HeroCarousel({ mainCarouselData }: Props) {
  const { palette } = useTheme();

  return (
    <Carousel
      dots
      arrows={false}
      slidesToShow={1}
      spaceBetween={0}
      dotStyles={COMMON_DOT_STYLES}
      dotColor={palette.primary.main}>
      {mainCarouselData.map((item) => (
        <div key={item.id}>
          <ContentWrapper>
            <Container>
              <div className="carousel-content">
                <H6>{item.subTitle}</H6>
                <H1 lineHeight={1} fontSize={60} py={2}>
                  {item.title}
                </H1>

                <Paragraph color="grey.700" mb={5}>
                  {item.description}
                </Paragraph>

                <StyledButton color="primary" variant="contained">
                  {item.buttonText}
                </StyledButton>
              </div>
            </Container>
          </ContentWrapper>
        </div>
      ))}
    </Carousel>
  );
}
