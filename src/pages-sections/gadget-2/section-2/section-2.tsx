import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H2, Paragraph } from "components/Typography";
import ProductCard11 from "components/product-cards/product-card-11";
// API FUNCTIONS
import api from "utils/__api__/gadget-2";

export default async function Section2() {
  const products = await api.getBestSellerProducts();

  return (
    <Container>
      <Box textAlign="center" mt={8} mb={5}>
        <H2 fontSize={{ sm: 34, xs: 28 }}>Best Seller Products</H2>
        <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
          There are many variations passages
        </Paragraph>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
            <Link href={`/products/${product.slug}`}>
              <ProductCard11
                title={product.title}
                image={product.thumbnail}
                sale={product.discount ? true : false}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
