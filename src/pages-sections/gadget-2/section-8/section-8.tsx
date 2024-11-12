import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H2, Paragraph } from "components/Typography";
import SubscribeInput from "components/subscribe-input";
//STYLED COMPONENTS
import { RootStyle } from "./styles";

export default function Section8() {
  return (
    <Container maxWidth="lg">
      <RootStyle>
        <div className="content">
          <Paragraph fontSize={18}>Sign Up Newsletter & Promotions!</Paragraph>

          <H2 mt={3} mb={1} className="heading">
            Get 50% Discount
          </H2>

          <Paragraph mb={6} className="heading">
            On your next purchase
          </Paragraph>

          <SubscribeInput fullWidth />
        </div>
      </RootStyle>
    </Container>
  );
}
