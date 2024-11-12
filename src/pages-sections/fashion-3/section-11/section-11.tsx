import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import Heading from "../shared/heading";
// GLOBAL CUSTOM COMPONENT
import ProductCard8 from "components/product-cards/product-card-8";
// API FUNCTIONS
import api from "utils/__api__/fashion-3";

export default async function Section11() {
  const products = await api.getProducts();

  return (
    <Container className="mt-4">
      <Heading title="New Arrival" />

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={3} sm={6} xs={12} key={product.id}>
            <ProductCard8 product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
