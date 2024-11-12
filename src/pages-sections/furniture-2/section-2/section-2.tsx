import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import BannerCard from "./banner-card";
// GLOBAL CUSTOM COMPONENT
import LazyImage from "components/LazyImage";
// IMPORT IMAGES
import bannerOne from "../../../../public/assets/images/banners/banner-28.jpg";
import bannerTwo from "../../../../public/assets/images/banners/banner-29.jpg";

export default function Section2() {
  return (
    <Container>
      <Grid container spacing={3} pt={3}>
        <Grid item lg={7} md={6} xs={12}>
          <BannerCard
            tag="Modern"
            title="Furniture"
            ImageComponent={<LazyImage alt="Banner" src={bannerOne} />}
          />
        </Grid>

        <Grid item lg={5} md={6} xs={12}>
          <BannerCard
            tag="New"
            title="Lighting"
            ImageComponent={<LazyImage alt="Banner" src={bannerTwo} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
