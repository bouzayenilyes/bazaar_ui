import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import { Carousel } from "components/carousel";
import { ProductCard2 } from "components/product-cards/product-card-2";
// API FUNCTIONS
import api from "utils/__api__/gadget-1";

export default async function Section4() {
  const products = await api.getMostViewedList();

  const responsive = [
    { breakpoint: 950, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <div className="mt-4">
      <Container>
        <H2 mb={4} lineHeight={1}>
          Most Views Products
        </H2>

        <Carousel
          slidesToShow={4}
          responsive={responsive}
          arrowStyles={{ color: "dark.main", backgroundColor: "white" }}>
          {products.map((item) => (
            <ProductCard2
              key={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              imgUrl={item.thumbnail}
            />
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
