import { ReactNode } from "react";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { BannerCardWrapper } from "./styles";

// ==============================================================
interface Props {
  tag: string;
  price: string;
  title: string;
  bgColor?: string;
  ImageComponent: ReactNode;
}
// ==============================================================

export default function BannerCard({ ImageComponent, tag, title, price, bgColor }: Props) {
  return (
    <BannerCardWrapper bgColor={bgColor}>
      <div className="content">
        <Paragraph fontWeight={600} fontSize={{ xl: 20, sm: 16, xs: 14 }}>
          {tag}
        </Paragraph>

        <H6 lineHeight={1} fontWeight={700} fontSize={{ xl: 33, sm: 27, xs: 22 }}>
          {title}
        </H6>

        <Paragraph
          mt={1}
          mb={2}
          fontWeight={700}
          color="error.main"
          fontSize={{ xl: 24, sm: 20, xs: 18 }}>
          {price}
        </Paragraph>

        <Button variant="contained" color="primary">
          Shop Now
        </Button>
      </div>

      {/* IMAGE COMPONENT */}
      <div className="img-wrapper">{ImageComponent}</div>
    </BannerCardWrapper>
  );
}
