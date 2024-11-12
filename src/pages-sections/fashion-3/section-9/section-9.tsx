import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import Heading from "../shared/heading";
import ProductCard from "./product-card";
// STYLED COMPONENT
import { BannerWrapper } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/fashion-3";
// IMPORT BANNER IMAGE
import banner from "../../../../public/assets/images/banners/banner-50.jpg";

export default async function Section9() {
  const products = await api.getBestProducts();

  return (
    <Container className="mt-4">
      <Heading title="Selling Products" />

      <Grid container spacing={2}>
        <Grid item md={2} display={{ md: "block", xs: "none" }}>
          <BannerWrapper>
            <LazyImage src={banner} alt="banner" />

            <div className="content">
              <H3 lineHeight={1.3} fontSize={{ lg: 36, xs: 28 }}>
                50% OFF
              </H3>

              <Paragraph fontSize={{ md: 16, xs: 14 }}>LIMITED TIME OFFER!</Paragraph>
            </div>
          </BannerWrapper>
        </Grid>

        <Grid container item md={10} xs={12} spacing={2}>
          {products.map((product) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
