import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H4, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { ContentBox, RightContent, LeftContent, StyledButton } from "./styles";
// IMPORT IMAGES
import handIcon from "../../../../public/assets/images/Health Shop/Vector (1).png";
import doctorImage from "../../../../public/assets/images/Health Shop/Doctor.png";
import productImage from "../../../../public/assets/images/Health Shop/Product (4).png";

export default function Section2() {
  return (
    <Box className="mb-3" display="grid" gap={3} gridTemplateColumns={{ sm: "1fr 1fr", xs: "1fr" }}>
      <ContentBox>
        <RightContent px="20px">
          <Image alt="shop" width={40} height={40} src={handIcon} />
          <Paragraph mt={2}>Our Pharmacists are</Paragraph>
          <Paragraph>here to Help People</Paragraph>
        </RightContent>

        <LeftContent px="10px">
          <LazyImage alt="shop" src={doctorImage} />
        </LeftContent>
      </ContentBox>

      <ContentBox sx={{ px: "20px" }}>
        <div className="content">
          <Paragraph>BEAUTY PACK</Paragraph>
          <H4 fontWeight="700" fontSize={20}>
            CREAM BRIGHT
          </H4>
          <H4 fontWeight="700" fontSize={20}>
            UP TO 25%
          </H4>
          <StyledButton LinkComponent={Link} href="/shops/scarlett-beauty">
            Shop Now
          </StyledButton>
        </div>

        <div className="content">
          <LazyImage alt="shop" src={productImage} />
        </div>
      </ContentBox>
    </Box>
  );
}
