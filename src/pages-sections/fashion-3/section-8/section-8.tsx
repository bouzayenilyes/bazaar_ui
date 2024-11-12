import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
// STYLED COMPONENT
import { RootStyle } from "./styles";
// IMPORT BANNER IMAGE
import banner from "../../../../public/assets/images/banners/banner-49.jpg";

export default async function Section8() {
  return (
    <Container className="mt-4">
      <RootStyle>
        <LazyImage src={banner} alt="banner" />

        <div className="content">
          <H3 lineHeight={1.3} fontSize={{ lg: 36, xs: 28 }}>
            22% OFF FOR SUMMER ITEMS
          </H3>

          <Paragraph fontSize={{ md: 18, xs: 16 }}>USE CODE: BASM22</Paragraph>
        </div>
      </RootStyle>
    </Container>
  );
}
