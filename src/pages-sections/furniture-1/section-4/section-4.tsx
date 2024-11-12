import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H1, Paragraph } from "components/Typography";
import { ProductCard7 } from "components/product-cards/product-card-7";
// CUSTOM DATA MODEL
import Product from "models/Product.model";

// ===================================================================
type Props = { products: Product[] };
// ===================================================================

export default function Section4({ products }: Props) {
  return (
    <Container className="mt-4 pb-4">
      <H1>All Product</H1>
      <Paragraph color="grey.600" mb={4}>
        Tall blind but were, been folks not the expand
      </Paragraph>

      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid key={item.id} item md={4} sm={6} xs={12}>
            <ProductCard7
              hideRating
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              status={item.status}
              imgUrl={item.thumbnail}
              productColors={item.colors}
            />
          </Grid>
        ))}
      </Grid>

      <Box mt={6} display="flex" justifyContent="center">
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </Box>
    </Container>
  );
}
