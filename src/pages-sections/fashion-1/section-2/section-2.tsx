// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { SectionCreator } from "components/section-header";
import { ProductCard2 } from "components/product-cards/product-card-2";
// CUSTOM ICON COMPONENT
import Light from "icons/Light";
// API FUNCTIONS
import api from "utils/__api__/fashion-1";

export default async function Section2() {
  const products = await api.getFlashDeals();

  const responsive = [
    { breakpoint: 950, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <SectionCreator icon={<Light color="primary" />} title="Flash Deals">
      <Carousel
        slidesToShow={4}
        responsive={responsive}
        arrowStyles={{ color: "#2B3445", backgroundColor: "white" }}>
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
    </SectionCreator>
  );
}
