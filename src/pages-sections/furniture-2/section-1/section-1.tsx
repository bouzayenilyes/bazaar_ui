import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H2, Paragraph, Span } from "components/Typography";
// STYLED COMPONENT
import { RootStyle } from "./styles";
// IMPORT IMAGES
import headerImg from "../../../../public/assets/images/headers/furniture-2.jpg";

export default function Section1() {
  return (
    <Container>
      <RootStyle>
        <LazyImage className="banner" alt="furniture shop" src={headerImg} />

        <div className="content">
          <Paragraph textTransform="uppercase" fontSize={28} fontWeight={600}>
            Spring
          </Paragraph>

          <H2 lineHeight={1} textTransform="uppercase" fontSize={{ sm: 60, xs: 48 }}>
            Collection
          </H2>

          <Paragraph fontSize={18} mt={1} mb={3}>
            Start from <Span fontWeight={700}>$40.45</Span>
          </Paragraph>

          <Button variant="contained" color="orange" size="large">
            Shop Now
          </Button>
        </div>
      </RootStyle>
    </Container>
  );
}
