import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
import AppStore from "components/footer/components/app-store";
// STYLED COMPONENT
import { RootStyle } from "./styles";
// IMPORT BANNER IMAGE
import phone from "../../../../public/assets/images/banners/banner-53.png";
import banner from "../../../../public/assets/images/headers/fashion-3.jpg";

export default async function Section12() {
  return (
    <Container className="mt-4">
      <RootStyle>
        <LazyImage src={banner} alt="banner" />

        <div className="content">
          <H3 lineHeight={1.3} fontSize={{ xl: 48, lg: 42, xs: 36 }}>
            DOWNLOAD <br />
            OUR APP
          </H3>

          <Paragraph mt={1} mb={4} fontSize={{ md: 16, xs: 14 }}>
            Fashion you can buy, but style you possess. <br /> The key to style is learning who you
            are, which takes years.
          </Paragraph>

          <AppStore />
        </div>

        <div className="mobile-img">
          <LazyImage src={phone} alt="banner" />
        </div>
      </RootStyle>
    </Container>
  );
}
