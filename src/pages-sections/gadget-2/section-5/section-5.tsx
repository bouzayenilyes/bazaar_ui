import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H2, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { BlackBox, StyledButton, YellowBox } from "./styles";
// IMPORT IMAGES
import iphone12 from "../../../../public/assets/images/products/iphone-12-2.png";
import speaker from "../../../../public/assets/images/products/lenovo-speaker.png";

export default function Section5() {
  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item lg={6} xs={12}>
          <YellowBox>
            <div>
              <Paragraph fontSize={16} mb={1}>
                Lenovo Think plus K3 Mini
              </Paragraph>

              <H2 mb={4} lineHeight={1.2} fontSize={{ sm: 42, xs: 36 }}>
                Waterproof <br /> Speakers
              </H2>

              <StyledButton>Shop Now</StyledButton>
            </div>

            <div className="img-wrapper">
              <LazyImage src={speaker} alt="Watch" />
            </div>
          </YellowBox>
        </Grid>

        <Grid item lg={6} xs={12}>
          <BlackBox>
            <div className="img-wrapper">
              <LazyImage src={iphone12} alt="Watch" />
            </div>

            <div className="content">
              <Paragraph fontSize={16} mb={1}>
                Blast Past Fast.
              </Paragraph>

              <H2 mb={4} lineHeight={1.2} fontSize={{ sm: 42, xs: 36 }}>
                IPhone 12 Pro <br /> For You
              </H2>

              <StyledButton>Shop Now</StyledButton>
            </div>
          </BlackBox>
        </Grid>
      </Grid>
    </Container>
  );
}
