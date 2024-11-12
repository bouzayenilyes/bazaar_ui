import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENT
import LazyImage from "components/LazyImage";
// LOCAL CUSTOM COMPONENTS
import Banner1 from "./banner-1";
import Banner2 from "./banner-2";
// IMPORT IMAGES
import banner1 from "../../../../public/assets/images/banners/banner-33.jpg";
import banner2 from "../../../../public/assets/images/banners/banner-34.jpg";
import banner3 from "../../../../public/assets/images/banners/banner-35.jpg";
import banner4 from "../../../../public/assets/images/banners/banner-36.jpg";

export default function Section6() {
  return (
    <Container>
      <Grid container spacing={3} mt={6}>
        {/* COUNT DOWN BANNER */}
        <Grid item lg={7} md={6} xs={12}>
          <Banner1 />
        </Grid>

        {/* OFFICE TABLE BANNER */}
        <Grid item lg={5} md={6} xs={12}>
          <Banner2 title="Office Table" ImageComponent={<LazyImage src={banner1} alt="banner" />} />
        </Grid>

        {/* SOFA STYLE BANNER */}
        <Grid item lg={3} md={6} xs={12}>
          <Banner2
            isContentCenter
            ImageComponent={<LazyImage src={banner2} alt="banner" />}
            title={
              <>
                Sofa style <br /> 2024
              </>
            }
          />
        </Grid>

        {/* LIGHTING BANNER */}
        <Grid item lg={6} md={6} xs={12}>
          <Banner2 title="Lighting" ImageComponent={<LazyImage src={banner3} alt="banner" />} />
        </Grid>

        {/* SALE UP BANNER */}
        <Grid item lg={3} md={6} xs={12}>
          <Banner2
            ImageComponent={<LazyImage src={banner4} alt="banner" />}
            title={
              <>
                sale up to <br /> 30% off
              </>
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
}
