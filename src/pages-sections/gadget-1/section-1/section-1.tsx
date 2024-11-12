import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENTS
import Card1 from "./card";
import ProductCarousel from "./product-carousel";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import { Carousel } from "components/carousel";
import CarouselCard3 from "components/carousel-cards/carousel-card-3";
// API FUNCTIONS
import api from "utils/__api__/gadget-1";

export default async function Section1() {
  const [products, mainCarousel] = await Promise.all([
    api.getTopPicksList(),
    api.getMainCarousel()
  ]);

  return (
    <Container className="pt-3">
      <Grid container spacing={5}>
        <Grid item md={5} xs={12}>
          <Carousel
            slidesToShow={1}
            arrowStyles={{ boxShadow: 0, color: "dark.main", background: "transparent" }}>
            {mainCarousel.map((product) => (
              <CarouselCard3 product={product} key={product.id} />
            ))}
          </Carousel>
        </Grid>

        <Grid item md={7} xs={12}>
          <H2 fontWeight="bold" mb={3}>
            Top Picks
          </H2>

          {/* TOP PICK LIST PRODUCT */}
          <ProductCarousel products={products} />

          {/* MIDDLE BANNER AREA */}
          <div className="mt-3 mb-3">
            <Card1
              title="Converse Collections"
              body="Get the most exciting deals. Starting at $59"
              imgUrl="/assets/images/products/red-shoe.png"
            />
          </div>

          {/* BOTTOM PICK LIST PRODUCT */}
          <ProductCarousel products={products} />
        </Grid>
      </Grid>
    </Container>
  );
}
