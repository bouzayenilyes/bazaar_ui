// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { StyledLink, Banner3Root } from "../styles";
// IMPORT IMAGE
import sofaImage from "../../../../../public/assets/images/furniture-products/b-5.png";

export default function Card2() {
  return (
    <Banner3Root>
      <div>
        <Paragraph fontSize={16}>Sofa Collection</Paragraph>

        <H3 fontSize={22} color="primary.main">
          UP TO 60% OFF
        </H3>

        <StyledLink href="/sales-1">Shop Now</StyledLink>
      </div>

      <div className="img-wrapper">
        <LazyImage alt="chair" src={sofaImage} />
      </div>
    </Banner3Root>
  );
}
