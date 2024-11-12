import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography";
import FlexBetween from "components/flex-box/flex-between";
import ProductCard13 from "components/product-cards/product-card-13";
// API FUNCTIONS
import api from "utils/__api__/medical";

export default async function Section5() {
  const products = await api.getBestSellerProducts();

  return (
    <Container>
      <FlexBetween flexWrap="wrap" gap={2} mt={8} mb={4}>
        <H3 fontSize={{ sm: 30, xs: 27 }}>Best Seller Products</H3>

        <Button variant="contained" color="primary">
          View All
        </Button>
      </FlexBetween>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
            <ProductCard13 product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
