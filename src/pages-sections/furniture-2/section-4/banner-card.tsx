import { ReactNode } from "react";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import { H3, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { BannerCardWrapper } from "./styles";

// ==============================================================
interface Props {
  title: string;
  description: string;
  ImageComponent: ReactNode;
}
// ==============================================================

export default function BannerCard({ ImageComponent, title, description }: Props) {
  return (
    <BannerCardWrapper>
      {/* BACKGROUND IMAGE */}
      {ImageComponent}

      <div className="content">
        <H3 lineHeight={1.2} textTransform="uppercase" fontSize={{ sm: 42, xs: 36 }}>
          {title}
        </H3>

        <Paragraph fontSize={{ sm: 16, xs: 14 }}>{description}</Paragraph>

        <div className="btn-wrapper">
          <Button fullWidth variant="contained" color="orange">
            Shop Now
          </Button>
        </div>
      </div>
    </BannerCardWrapper>
  );
}
