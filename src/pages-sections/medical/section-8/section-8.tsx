import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H2, Paragraph } from "components/Typography";
import SubscribeInput from "components/subscribe-input";
// STYLED COMPONENT
import { RootStyle } from "./styles";
// IMPORT IMAGES
import bgImage from "../../../../public/assets/images/banners/banner-38.png";

export default function Section8() {
  const BUTTON_STYLE = {
    margin: 0.5,
    borderRadius: 8,
    paddingBlock: 1,
    backgroundColor: "primary.main"
  };

  const INPUT_PROPS = {
    sx: {
      pr: 0,
      borderRadius: 8,
      background: "white"
    }
  };

  return (
    <Container>
      <RootStyle>
        <LazyImage src={bgImage} alt="offer" />

        <div className="content">
          <H2 mt={3} mb={1} lineHeight={1.2} fontSize={{ xl: 42, sm: 36, xs: 30 }}>
            Subscribe Now For <br />
            Get Every Day Tips
          </H2>

          <Paragraph mb={3} lineHeight={1.6} fontSize={{ sm: 16, xs: 14 }}>
            A wonderful serenity has taken possession Far far away, behind the word mountains.
          </Paragraph>

          <SubscribeInput
            fullWidth
            buttonText="Submit"
            buttonSx={BUTTON_STYLE}
            InputProps={INPUT_PROPS}
          />
        </div>
      </RootStyle>
    </Container>
  );
}
