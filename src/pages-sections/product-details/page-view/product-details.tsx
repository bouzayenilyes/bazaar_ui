import Container from "@mui/material/Container";
// Local CUSTOM COMPONENTS
import ProductTabs from "../product-tabs";
import ProductIntro from "../product-intro";
import AvailableShops from "../available-shops";
import RelatedProducts from "../related-products";
import FrequentlyBought from "../frequently-bought";
// CUSTOM DATA MODEL
import Product from "models/Product.model";

// ==============================================================
interface Props {
  product: Product;
  relatedProducts: Product[];
  frequentlyBought: Product[];
}
// ==============================================================

export default function ProductDetailsPageView(props: Props) {
  return (
    <Container className="mt-2 mb-2">
      {/* PRODUCT DETAILS INFO AREA */}
      <ProductIntro product={props.product} />

      {/* PRODUCT DESCRIPTION AND REVIEW */}
      <ProductTabs />

      {/* FREQUENTLY BOUGHT PRODUCTS AREA */}
      <FrequentlyBought products={props.frequentlyBought} />

      {/* AVAILABLE SHOPS AREA */}
      <AvailableShops />

      {/* RELATED PRODUCTS AREA */}
      <RelatedProducts products={props.relatedProducts} />
    </Container>
  );
}
