import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import BannerCard from "./banner-card";
// GLOBAL CUSTOM COMPONENT
import LazyImage from "components/LazyImage";
// IMPORT IMAGES
import bannerOne from "../../../../public/assets/images/medical/m3.png";
import bannerTwo from "../../../../public/assets/images/medical/m4.png";

export default function Section2() {
  return (
    <Container>
      <Grid container spacing={3} pt={10}>
        <Grid item lg={7} md={6} xs={12}>
          <BannerCard
            bgColor="#D7E2F2"
            title="Corona Covid-19"
            tag="Home Medical Supplies"
            subTitle="Prevention & Care Supplies"
            ImageComponent={<LazyImage alt="Banner" src={bannerOne} />}
          />
        </Grid>

        <Grid item lg={5} md={6} xs={12}>
          <BannerCard
            bgColor="#E6F5F6"
            title="Home Medical"
            subTitle="$45.00 – $55.00"
            tag="Home Medical Supplies"
            ImageComponent={<LazyImage alt="Banner" src={bannerTwo} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
