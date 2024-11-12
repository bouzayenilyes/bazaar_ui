import Button from "@mui/material/Button";
// LOCAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H2, Paragraph } from "components/Typography";
// STYLED COMPONENT
import { StyledRoot } from "./styles";
// IMPORT IMAGES
import banner1 from "../../../../../public/assets/images/banners/banner-55.jpg";

export default function BannerOne() {
  return (
    <StyledRoot>
      <LazyImage src={banner1} alt="banner" />

      <div className="text-content">
        <H2 lineHeight={1.2} fontSize={{ xl: 52, lg: 40, sm: 52, xs: 32 }}>
          50% off For Your <br /> First Order
        </H2>

        <Paragraph fontSize={{ xl: 18, lg: 16, sm: 18 }}>50% discount on any product</Paragraph>
      </div>

      <div className="button-wrapper">
        <Button color="primary" size="large" variant="contained">
          Shop Now
        </Button>
      </div>
    </StyledRoot>
  );
}
