// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { BannerRoot, StyledLink } from "../styles";
// IMPORT IMAGE
import sofaImage from "../../../../../public/assets/images/furniture-products/b-2.png";

export default function Card5() {
  return (
    <BannerRoot>
      <div>
        <Paragraph>December New!</Paragraph>

        <H3 mb={2} fontSize={22} color="primary.main">
          Sofa Chair
        </H3>

        <StyledLink href="/sales-1">Shop Now</StyledLink>
      </div>

      <div className="img-wrapper max-w-lg">
        <LazyImage alt="chair" src={sofaImage} />
      </div>
    </BannerRoot>
  );
}
