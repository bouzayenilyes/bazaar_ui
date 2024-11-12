import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import BannerCard from "./banner-card";
// GLOBAL CUSTOM COMPONENT
import LazyImage from "components/LazyImage";
// IMPORT IMAGES
import bannerOne from "../../../../public/assets/images/banners/banner-30.jpg";
import bannerTwo from "../../../../public/assets/images/banners/banner-31.jpg";

export default function Section4() {
  return (
    <Container>
      <Grid container spacing={3} mt={6}>
        <Grid item lg={6} md={6} xs={12}>
          <BannerCard
            title="Bed Room"
            description="Up To 20% Off All Furniture On Store"
            ImageComponent={<LazyImage alt="bed room" src={bannerOne} />}
          />
        </Grid>

        <Grid item lg={6} md={6} xs={12}>
          <BannerCard
            title="Dining deals"
            description="Up To 20% Off All Furniture On Store"
            ImageComponent={<LazyImage alt="dining room" src={bannerTwo} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
