// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, H6, Paragraph, Span } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import CountDown from "./count-down";
// STYLED COMPONENTS
import { BannerOneWrapper } from "../styles";
// IMPORT IMAGE
import bannerImg from "../../../../../public/assets/images/banners/banner-32.jpg";

export default function Banner1() {
  return (
    <BannerOneWrapper>
      <LazyImage src={bannerImg} alt="banner" />

      <div className="content">
        <H6 color="primary.main" fontSize={27}>
          Deal of the day
        </H6>

        <H3 textTransform="uppercase" fontSize={36} lineHeight={1.2}>
          LIGHTNING
        </H3>

        <Paragraph color="grey.600">
          Start from{" "}
          <Span color="primary.main" fontWeight={700}>
            $40.45
          </Span>
        </Paragraph>

        {/* COUNT DOWN SECTION */}
        <CountDown />
      </div>
    </BannerOneWrapper>
  );
}
