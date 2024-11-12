import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import { Carousel } from "components/carousel";
import ProductCard8 from "components/product-cards/product-card-8";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

export default async function Section4() {
  const products = await api.getProducts();

  const responsive = [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 426, settings: { slidesToShow: 1 } }
  ];

  return (
    <Container className="mt-4">
      <H2 textAlign="center" mb={4}>
        Best Selling Product
      </H2>

      <Carousel
        slidesToShow={4}
        responsive={responsive}
        arrowStyles={{ backgroundColor: "dark.main", top: "37%" }}>
        {products.map((product) => (
          <ProductCard8 key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
}
