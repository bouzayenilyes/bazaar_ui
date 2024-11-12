import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import BannerCard from "./banner-card";
// GLOBAL CUSTOM COMPONENT
import LazyImage from "components/LazyImage";
// IMPORT IMAGES
import bannerOne from "../../../../public/assets/images/medical/m1.png";
import bannerTwo from "../../../../public/assets/images/medical/m2.png";

export default function Section2() {
  return (
    <Container>
      <Grid container spacing={3} pt={3}>
        <Grid item md={6} xs={12}>
          <BannerCard
            bgColor="#D7E2F2"
            price="$1.00 – $55.00"
            title="Medicine Product"
            tag="Home Medical Supplies"
            ImageComponent={<LazyImage alt="Banner" src={bannerOne} />}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <BannerCard
            bgColor="#E6F5F6"
            price="$1.00 – $55.00"
            title="Medicine Product"
            tag="Home Medical Supplies"
            ImageComponent={<LazyImage alt="Banner" src={bannerTwo} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
