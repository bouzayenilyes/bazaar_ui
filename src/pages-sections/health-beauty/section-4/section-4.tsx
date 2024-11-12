import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import { ProductCard5 } from "components/product-cards/product-card-5";
// CUSTOM DATA MODEL
import Product from "models/Product.model";
// STYLED COMPONENT
import { SubTitle } from "../styles";

// ===========================================================
type Props = { products: Product[] };
// ===========================================================

export default function Section4({ products }: Props) {
  return (
    <div className="mb-3">
      <H2 fontWeight="bold">All Products</H2>
      <SubTitle>Best deal with medical and beauty items</SubTitle>

      <Grid container spacing={3}>
        {products.slice(0, 8).map((item) => (
          <Grid key={item.id} item xl={3} md={4} sm={6} xs={12}>
            <ProductCard5
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              imgUrl={item.thumbnail}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
