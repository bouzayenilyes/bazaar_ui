import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H3, Paragraph } from "components/Typography";
import ProductCard12 from "components/product-cards/product-card-12";
// API FUNCTIONS
import api from "utils/__api__/furniture-2";

export default async function Section3() {
  const products = await api.getNewArrivalProducts();

  return (
    <Container>
      <Box mt={8} mb={4} textAlign="center">
        <H3 fontSize={{ sm: 30, xs: 27 }}>New Arrivals</H3>
        <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
          There are many variations passages
        </Paragraph>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
            <ProductCard12 product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
