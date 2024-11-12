import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import BannerCard1 from "./banner-card-1";
import BannerCard2 from "./banner-card-2";

export default function Section5() {
  return (
    <Container className="mt-4">
      <Grid container spacing={3}>
        {/* FOR MEN'S BANNER CARD */}
        <Grid item md={4} xs={12}>
          <BannerCard2
            url="#"
            title="For Men's"
            contentPosition="left"
            subTitle="Starting At $29"
            img="/assets/images/banners/men's-fashion.jpg"
          />
        </Grid>

        {/* SALES BANNER CARD */}
        <Grid item md={4} xs={12}>
          <BannerCard1
            url="#"
            text3="Sale"
            text2="Black Friday"
            text1="Up to 20% Off"
            img="/assets/images/banners/banner2.jpg"
          />
        </Grid>

        {/* FOR WOMEN'S BANNER CARD */}
        <Grid item md={4} xs={12}>
          <BannerCard2
            url="#"
            subTitle="25% Off"
            title="For Women's"
            contentPosition="right"
            img="/assets/images/banners/womens-fashion.jpg"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
