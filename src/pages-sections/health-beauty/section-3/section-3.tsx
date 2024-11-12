// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import { Carousel } from "components/carousel";
import { ProductCard5 } from "components/product-cards/product-card-5";
// CUSTOM DATA MODEL
import Product from "models/Product.model";
// STYLED COMPONENT
import { SubTitle } from "../styles";

// ================================================================
type Props = { products: Product[] };
// ================================================================

export default function Section3({ products }: Props) {
  const responsive = [
    { breakpoint: 1440, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <div className="mb-2">
      <H2 fontWeight="bold">Top New Products</H2>
      <SubTitle>Best deal with medical and beauty items</SubTitle>

      <Carousel
        slidesToShow={4}
        responsive={responsive}
        arrowStyles={{
          color: "primary.main",
          backgroundColor: "primary.100",
          "&:hover": { backgroundColor: "primary.200" }
        }}>
        {products.map((item) => (
          <div className="pb-1" key={item.id}>
            <ProductCard5
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              imgUrl={item.thumbnail}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
