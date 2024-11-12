import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H2, Paragraph } from "components/Typography";
import SubscribeInput from "components/subscribe-input";
// STYLED COMPONENT
import { RootStyle } from "./styles";
// IMPORT IMAGES
import bgImage from "../../../../public/assets/images/banners/banner-37.jpg";

export default function Section8() {
  return (
    <Container>
      <RootStyle>
        <LazyImage src={bgImage} alt="offer" />

        <div className="content">
          <H2 mt={3} mb={1} lineHeight={1.2} fontSize={{ sm: 36, xs: 30 }}>
            GET $20 OFF YOUR <br />
            FIRST ORDER
          </H2>

          <Paragraph mb={3} lineHeight={1.2} fontSize={{ sm: 16, xs: 14 }}>
            On your next purchase
          </Paragraph>

          <SubscribeInput fullWidth />
        </div>
      </RootStyle>
    </Container>
  );
}
