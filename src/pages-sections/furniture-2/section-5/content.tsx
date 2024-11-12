"use client";

import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
// MUI ICON COMPONENTS
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
// LOCAL CUSTOM HOOK
import useCarousel from "./useCarousel";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { FlexBetween } from "components/flex-box";
import { H3, Paragraph } from "components/Typography";
import ProductCard12 from "components/product-cards/product-card-12";
// CUSTOM DATA MODEL
import Product from "models/Product.model";

// STYLED COMPONENT
const ButtonGroup = styled("div")(({ theme }) => ({
  ".forward-btn": {
    backgroundColor: "white",
    boxShadow: theme.shadows[2],
    marginLeft: theme.spacing(0.5)
  },
  ...(theme.direction === "rtl" && {
    ".MuiSvgIcon-root": { rotate: "180deg" }
  })
}));

// ==============================================================
type Props = { products: Product[] };
// ==============================================================

export default function Content({ products }: Props) {
  const { carouselRef, responsive, handleNext, handlePrev } = useCarousel();

  return (
    <Container>
      <FlexBetween mt={10} mb={5}>
        <div>
          <H3 fontSize={{ sm: 30, xs: 27 }}>Trending Items</H3>
          <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            There are many variations passages
          </Paragraph>
        </div>

        <ButtonGroup>
          <IconButton onClick={handlePrev}>
            <ArrowBack fontSize="small" />
          </IconButton>

          <IconButton onClick={handleNext} className="forward-btn">
            <ArrowForward fontSize="small" />
          </IconButton>
        </ButtonGroup>
      </FlexBetween>

      <Carousel ref={carouselRef} slidesToShow={4} responsive={responsive} arrows={false}>
        {products.map((product) => (
          <ProductCard12 product={product} key={product.id} />
        ))}
      </Carousel>
    </Container>
  );
}
