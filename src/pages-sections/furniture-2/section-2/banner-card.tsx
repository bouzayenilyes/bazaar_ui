import { ReactNode } from "react";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph, Span } from "components/Typography";
// STYLED COMPONENTS
import { BannerCardWrapper } from "./styles";

// ==============================================================
interface Props {
  tag: string;
  title: string;
  ImageComponent: ReactNode;
}
// ==============================================================

export default function BannerCard({ ImageComponent, tag, title }: Props) {
  return (
    <BannerCardWrapper>
      {/* IMAGE COMPONENT */}
      {ImageComponent}

      <div className="content">
        <Paragraph fontWeight={600} textTransform="uppercase" fontSize={{ sm: 24, xs: 20 }}>
          {tag}
        </Paragraph>

        <H6 lineHeight={1} fontWeight={700} textTransform="uppercase" fontSize={{ sm: 36, xs: 32 }}>
          {title}
        </H6>

        <Paragraph color="grey.600" mb={2}>
          Start from{" "}
          <Span color="error.main" fontWeight={700}>
            $40.45
          </Span>
        </Paragraph>

        <Button variant="contained" color="orange">
          Shop Now
        </Button>
      </div>
    </BannerCardWrapper>
  );
}
