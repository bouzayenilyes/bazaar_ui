// GLOBAL CUSTOM COMPONENTS
import { H3, Span, Paragraph } from "components/Typography";
// STYLED COMPONENT
import { Card5Wrapper } from "../styles";

export default function Card5() {
  return (
    <Card5Wrapper>
      <div>
        <Span fontSize={16}>#EXPLORE</Span>

        <H3 lineHeight={1.2} fontSize={{ xl: 36, lg: 30, xs: 28 }}>
          COUPONS
        </H3>

        <Paragraph mt={4} fontWeight={600} fontSize={{ sm: 18, xs: 16 }}>
          #LATEST_COLLECTION2022
        </Paragraph>
      </div>
    </Card5Wrapper>
  );
}
