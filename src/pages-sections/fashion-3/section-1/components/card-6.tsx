import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import { H3, Span, Paragraph } from "components/Typography";
// STYLED COMPONENT
import { Card6Wrapper } from "../styles";
// IMPORT IMAGES
import banner5 from "../../../../../public/assets/images/banners/banner-43.png";

export default function Card6() {
  return (
    <Card6Wrapper>
      <Image src={banner5} alt="banner" className="banner-img" />

      <div className="content">
        <Span fontSize={16}>#EXCLUSIVE</Span>

        <H3 lineHeight={1.2} fontSize={{ xl: 48, lg: 40, xs: 34 }}>
          <Span fontWeight={400}>NEW</Span> <br />
          GADGETS
        </H3>

        <Paragraph mt={4} fontWeight={600} fontSize={{ sm: 18, xs: 16 }}>
          #LATEST_COLLECTION2022
        </Paragraph>
      </div>
    </Card6Wrapper>
  );
}
