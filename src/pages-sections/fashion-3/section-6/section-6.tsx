import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph, Span } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import BoxButton from "../shared/box-button";
// STYLED COMPONENT
import { RootStyle } from "./styles";
// IMPORT BANNER IMAGE
import banner from "../../../../public/assets/images/banners/banner-48.jpg";

export default async function Section6() {
  return (
    <Container className="mt-4">
      <RootStyle>
        <LazyImage src={banner} alt="banner" />

        <div className="content">
          <Paragraph fontSize={{ xl: 24, md: 20, xs: 16 }}>UP TO</Paragraph>

          <H3 lineHeight={1.3} fontSize={{ xl: 60, lg: 48, xs: 36 }}>
            30% OFF
          </H3>

          <Paragraph mb={4} fontSize={{ xl: 24, md: 20, xs: 16 }}>
            FOR ALL KIND OF <Span fontWeight={700}>BAG ITEMS</Span>
          </Paragraph>

          <BoxButton>Shop Now</BoxButton>
        </div>
      </RootStyle>
    </Container>
  );
}
