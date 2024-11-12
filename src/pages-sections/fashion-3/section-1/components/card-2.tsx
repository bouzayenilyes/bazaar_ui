import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import { H3, Span } from "components/Typography";
// STYLED COMPONENT
import { Card2Wrapper } from "../styles";
// IMPORT IMAGES
import banner2 from "../../../../../public/assets/images/banners/banner-40.png";

export default function Card2() {
  return (
    <Card2Wrapper>
      <Image src={banner2} alt="banner" className="banner-img" />

      <div className="content">
        <Span fontSize={16}>#NEW</Span>

        <H3 lineHeight={1.2} fontSize={{ xl: 36, lg: 30, xs: 28 }}>
          SPORTS
        </H3>
      </div>
    </Card2Wrapper>
  );
}
