// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { StyledLink, BannerRoot } from "../styles";
// IMPORT IMAGE
import chairImage from "../../../../../public/assets/images/furniture-products/b-4.png";

export default function Card1() {
  return (
    <BannerRoot>
      <div>
        <Paragraph fontSize={16}>Modern Furniture.</Paragraph>

        <H3 fontSize={36} color="primary.main">
          Big Sale
        </H3>

        <Paragraph mb={1} fontSize={20} fontWeight={600}>
          UP TO 50% OFF
        </Paragraph>

        <StyledLink href="/sales-1">Shop Now</StyledLink>
      </div>

      <div className="img-wrapper img-res">
        <LazyImage alt="chair" src={chairImage} />
      </div>
    </BannerRoot>
  );
}
