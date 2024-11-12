import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import { H3, Span } from "components/Typography";
// STYLED COMPONENT
import { Card4Wrapper } from "../styles";
// IMPORT IMAGES
import banner4 from "../../../../../public/assets/images/banners/banner-42.png";

export default function Card4() {
  return (
    <Card4Wrapper>
      <Image src={banner4} alt="banner" className="banner-img" />

      <div className="content">
        <Span fontSize={16}>#SUNGLASSES</Span>

        <H3 lineHeight={1.2} fontSize={{ xl: 36, lg: 30, xs: 28 }}>
          50% OFF
        </H3>
      </div>
    </Card4Wrapper>
  );
}
