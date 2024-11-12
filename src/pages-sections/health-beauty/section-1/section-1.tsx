"use client";

import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
// GLOBAL CUSTOM COMPONENTS
import { H1 } from "components/Typography";
import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel";
// STYLED COMPONENTS
import { COMMON_DOT_STYLES } from "components/carousel/styles";
import { GridItemOne, GridItemTwo, StyledButton, StyledGrid } from "./styles";
// CUSTOM DATA MODEL
import { HealthCarouselItem } from "models/Carousel.model";

// ==========================================================================
type Props = { carouselData: HealthCarouselItem[] };
// ==========================================================================

export default function Section1({ carouselData }: Props) {
  const { palette } = useTheme();

  return (
    <Container className="mb-1">
      <Carousel
        dots
        arrows={false}
        slidesToShow={1}
        dotColor={palette.primary.main}
        dotStyles={COMMON_DOT_STYLES}>
        {carouselData.map((item) => (
          <div key={item.id}>
            <StyledGrid container>
              <GridItemOne item md={7} sm={7} xs={12}>
                <H1 className="title">{item.title}</H1>

                <StyledButton variant="contained" size="large">
                  Shop Now
                </StyledButton>
              </GridItemOne>

              <GridItemTwo item md={5} sm={5} xs={12}>
                <LazyImage priority width={570} height={360} src={item.imgUrl} alt={item.title} />
              </GridItemTwo>
            </StyledGrid>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}
