import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import BazaarImage from "components/BazaarImage";
import FlexRowCenter from "components/flex-box/flex-row-center";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

export default async function Section9() {
  const brands = await api.getBrands();

  const responsive = [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 426, settings: { slidesToShow: 1 } }
  ];

  return (
    <Container className="mt-4">
      <Divider sx={{ mb: 4, borderColor: "grey.400" }} />

      <Carousel autoplay arrows={false} slidesToShow={5} responsive={responsive}>
        {brands.map(({ id, image }) => (
          <FlexRowCenter
            key={id}
            height="100%"
            margin="auto"
            maxWidth={110}
            display="flex !important">
            <BazaarImage alt="brand" width="100%" src={image} sx={{ filter: "grayscale(1)" }} />
          </FlexRowCenter>
        ))}
      </Carousel>

      <Divider sx={{ mt: 4, borderColor: "grey.400" }} />
    </Container>
  );
}
