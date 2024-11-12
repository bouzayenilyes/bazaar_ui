import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
// STYLED COMPONENTS
import { RootStyle, StyledButton } from "./styles";
// IMPORT IMAGE
import watch from "../../../../public/assets/images/products/watch-3.png";

export default function Section3() {
  return (
    <Container>
      <RootStyle>
        <div className="content">
          <p>Apple Watch Series 9</p>

          <h2>
            Magic. At your <br /> fingertips.
          </h2>

          <StyledButton>Shop Now</StyledButton>
        </div>

        <div className="img-wrapper">
          <LazyImage src={watch} alt="Watch" />
        </div>
      </RootStyle>
    </Container>
  );
}
