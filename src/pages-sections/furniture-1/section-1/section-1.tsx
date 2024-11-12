// LOCAL CUSTOM COMPONENT
import HeroCarousel from "./carousel";
// STYLED COMPONENTS
import { Wrapper } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/furniture-1";

export default async function Section1() {
  const mainCarouselData = await api.getMainCarouselData();

  return (
    <Wrapper id="carouselBox">
      <HeroCarousel mainCarouselData={mainCarouselData} />
    </Wrapper>
  );
}
