import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import WhiteButton from "components/WhiteButton";
import { H3, Paragraph, Span } from "components/Typography";
// STYLED COMPONENT
import { BannerWrapper } from "./styles";

export default function Section7() {
  return (
    <Container className="mt-4 mb-4">
      <BannerWrapper>
        <div className="content">
          <H3 lineHeight={1} fontSize={{ sm: 36, xs: 28 }}>
            GIFT <Span color="primary.main">50% OFF</Span> PERFECT STYLES
          </H3>

          <Paragraph fontSize={16}>
            Only until the end of this week. Terms and conditions apply
          </Paragraph>
        </div>

        <WhiteButton size="large">Discover Now</WhiteButton>
      </BannerWrapper>
    </Container>
  );
}
