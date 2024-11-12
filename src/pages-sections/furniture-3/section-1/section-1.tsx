import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
// LOCAL CUSTOM COMPONENTS
import BannerOne from "./components/banner-1";
import BannerTwo from "./components/banner-2";
// IMPORT IMAGES
import banner2 from "../../../../public/assets/images/banners/banner-56.png";
import banner3 from "../../../../public/assets/images/banners/banner-57.png";
import banner4 from "../../../../public/assets/images/banners/banner-58.png";

export default function Section1() {
  return (
    <div className="mb-2 mt-1">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={6} xl={6}>
          <BannerOne />
        </Grid>

        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <Stack spacing={3} height="100%">
            <BannerTwo title="Table" description="20% off">
              <LazyImage src={banner2} alt="banner" />
            </BannerTwo>

            <BannerTwo title="Table" description="20% off">
              <LazyImage src={banner3} alt="banner" />
            </BannerTwo>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <BannerTwo title="Table" description="20% off">
            <LazyImage src={banner4} alt="banner" />
          </BannerTwo>
        </Grid>
      </Grid>
    </div>
  );
}
