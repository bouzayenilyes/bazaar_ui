import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import CarouselCard1 from "components/carousel-cards/carousel-card-1";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

export default async function Section1() {
  const carouselData = await api.getMainCarouselData();

  return (
    <Box bgcolor="grey.100" mb={7.5}>
      <Container className="pt-2 pb-2">
        <Carousel dots spaceBetween={0} slidesToShow={1} arrows={false}>
          {carouselData.map((item, ind) => (
            <CarouselCard1
              key={ind}
              buttonColor="dark"
              title={item.title}
              imgUrl={item.imgUrl}
              buttonLik={item.buttonLik}
              buttonText={item.buttonText}
              description={item.description}
            />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
