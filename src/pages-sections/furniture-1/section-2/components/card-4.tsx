// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { BannerRoot, StyledLink } from "../styles";
// IMPORT IMAGE
import chairImage from "../../../../../public/assets/images/furniture-products/b-1.png";

export default function Card4() {
  return (
    <BannerRoot>
      <div>
        <Paragraph>Modern & Comfortable</Paragraph>

        <H3 mb={2} fontSize={22} color="primary.main">
          Chair Collection
        </H3>

        <StyledLink href="/sales-1">Shop Now</StyledLink>
      </div>

      <div className="img-wrapper max-w-lg">
        <LazyImage alt="chair" src={chairImage} />
      </div>
    </BannerRoot>
  );
}
