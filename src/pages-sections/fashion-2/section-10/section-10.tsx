import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import ListBlock from "./block";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

export default async function Section10() {
  const [saleProducts, latestProducts, popularProducts, bestWeekProducts] = await Promise.all([
    api.getSaleProducts(),
    api.getLatestProducts(),
    api.getPopularProducts(),
    api.getBestWeekProducts()
  ]);

  return (
    <Container className="pt-5 pb-5">
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <ListBlock title="Sale Products" products={saleProducts} />
        </Grid>

        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <ListBlock title="Latest Products" products={latestProducts} />
        </Grid>

        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <ListBlock title="Best of the Week" products={bestWeekProducts} />
        </Grid>

        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <ListBlock title="Popular Products" products={popularProducts} />
        </Grid>
      </Grid>
    </Container>
  );
}
