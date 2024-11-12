import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography";
import ProductCard13 from "components/product-cards/product-card-13";
// API FUNCTIONS
import api from "utils/__api__/medical";

export default async function Section3() {
  const products = await api.getFeaturedProducts();

  return (
    <Container>
      <H3 mt={8} mb={4} fontSize={{ sm: 30, xs: 27 }}>
        Featured Product
      </H3>

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
