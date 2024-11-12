// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { ProductCard2 } from "components/product-cards/product-card-2";
// CUSTOM DATA MODEL
import Product from "models/Product.model";

// ===============================================================
type Props = { products: Product[] };
// ===============================================================

export default function ProductCarousel({ products }: Props) {
  const responsive = [
    { breakpoint: 1100, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <Carousel
      slidesToShow={4}
      responsive={responsive}
      arrowStyles={{ top: "32%", color: "dark.main", backgroundColor: "white" }}>
      {products.map((item, ind) => (
        <ProductCard2
          key={ind}
          hideFavoriteIcon
          slug={item.slug}
          title={item.title}
          price={item.price}
          off={item.discount}
          rating={item.rating}
          imgUrl={item.thumbnail}
        />
      ))}
    </Carousel>
  );
}
