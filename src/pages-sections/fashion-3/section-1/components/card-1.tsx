import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import { H3, Paragraph, Span } from "components/Typography";
// STYLED COMPONENT
import { Card1Wrapper } from "../styles";
// IMPORT IMAGES
import banner1 from "../../../../../public/assets/images/banners/banner-39.png";

export default function Card1() {
  return (
    <Card1Wrapper>
      <Image src={banner1} alt="banner" />

      <div className="content">
        <Span fontSize={16}>#EXCLUSIVE</Span>

        <H3 lineHeight={1.2} fontSize={{ xl: 48, lg: 40, xs: 34 }}>
          MEN’S <br />
          COLLECTIONS
        </H3>

        <Paragraph mt={4} fontSize={18} fontWeight={600}>
          #LATEST_COLLECTION2022
        </Paragraph>
      </div>
    </Card1Wrapper>
  );
}
