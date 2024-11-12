import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// STYLED COMPONENTS
import Card1 from "./components/card-1";
import Card2 from "./components/card-2";
import Card3 from "./components/card-3";
import Card4 from "./components/card-4";
import Card5 from "./components/card-5";
import Card6 from "./components/card-6";

export default function Section1() {
  return (
    <Container>
      <Grid container spacing={3}>
        {/* MEN'S COLLECTION BANNER SECTION */}
        <Grid item md={6} xs={12}>
          <Card1 />
        </Grid>

        <Grid item container md={6} xs={12} spacing={3}>
          {/* NEW SPORT BANNER SECTION */}
          <Grid item sm={6} xs={12}>
            <Card2 />
          </Grid>

          {/* WOMEN BANNER SECTION */}
          <Grid item sm={6} xs={12}>
            <Card3 />
          </Grid>
        </Grid>

        {/* 2ND ROW  */}
        <Grid item container md={6} xs={12} spacing={3}>
          {/* 50% OFF BANNER SECTION */}
          <Grid item sm={6} xs={12}>
            <Card4 />
          </Grid>

          {/* COUPON BANNER SECTION */}
          <Grid item sm={6} xs={12}>
            <Card5 />
          </Grid>
        </Grid>

        {/* NEW GADGET BANNER SECTION */}
        <Grid item md={6} xs={12}>
          <Card6 />
        </Grid>
      </Grid>
    </Container>
  );
}
