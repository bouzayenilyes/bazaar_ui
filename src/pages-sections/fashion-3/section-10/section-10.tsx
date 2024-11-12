import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import BoxButton from "../shared/box-button";
// STYLED COMPONENT
import { BannerWrapper } from "./styles";
// IMPORT BANNER IMAGE
import banner1 from "../../../../public/assets/images/banners/banner-51.jpg";
import banner2 from "../../../../public/assets/images/banners/banner-52.png";

export default async function Section10() {
  return (
    <Container className="mt-4">
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <BannerWrapper>
            <LazyImage src={banner1} alt="banner" />

            <div className="content">
              <Paragraph fontWeight={600} fontSize={{ md: 16, xs: 14 }}>
                #NEW_YEAR
              </Paragraph>

              <H3 mb={3} fontSize={{ md: 30, xs: 24 }}>
                WOMEN EXCLUSIVE
              </H3>

              <BoxButton variant="dark">Shop Now</BoxButton>
            </div>
          </BannerWrapper>
        </Grid>

        <Grid item md={6} xs={12}>
          <BannerWrapper>
            <LazyImage src={banner2} alt="banner" />

            <div className="content-2">
              <Paragraph fontWeight={600} fontSize={{ md: 16, xs: 14 }}>
                #NEW_YEAR
              </Paragraph>

              <H3 mb={3} fontSize={{ md: 30, xs: 24 }}>
                MEN EXCLUSIVE
              </H3>

              <BoxButton variant="dark">Shop Now</BoxButton>
            </div>
          </BannerWrapper>
        </Grid>
      </Grid>
    </Container>
  );
}
