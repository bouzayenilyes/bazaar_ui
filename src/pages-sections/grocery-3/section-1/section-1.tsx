import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H1 } from "components/Typography";
import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel";
// CUSTOM DATA MODEL
import { MainCarouselItem } from "models/Grocery-3.model";
// STYLED COMPONENTS
import { COMMON_DOT_STYLES } from "components/carousel/styles";
import { StyledRoot, StyledGrid, StyledButton } from "../styles";

// ===================================================================
type Props = { mainCarouselData: MainCarouselItem[] };
// ===================================================================

export default function Section1({ mainCarouselData }: Props) {
  return (
    <StyledRoot id="carouselBox">
      <Container>
        <Carousel
          dots
          autoplay
          arrows={false}
          spaceBetween={0}
          slidesToShow={1}
          dotStyles={COMMON_DOT_STYLES}>
          {mainCarouselData.map((item, ind) => (
            <div key={ind}>
              <StyledGrid container spacing={10}>
                <Grid item md={6} sm={6} xs={12}>
                  <Box pt={{ sm: 6 }}>
                    <LazyImage width={800} height={886} alt={item.title} src={item.imgUrl} />
                  </Box>
                </Grid>

                <Grid item md={6} sm={6} xs={12} className="content">
                  <H1
                    lineHeight={1.3}
                    fontWeight={600}
                    mb={{ md: 5, xs: 3 }}
                    pt={{ xs: 5, md: 0 }}
                    maxWidth={{ md: 500 }}
                    fontSize={{ lg: 50, md: 45, xs: 38 }}>
                    {item.title}
                  </H1>

                  <StyledButton variant="contained" color="primary">
                    {item.buttonText}
                  </StyledButton>
                </Grid>
              </StyledGrid>
            </div>
          ))}
        </Carousel>
      </Container>
    </StyledRoot>
  );
}
