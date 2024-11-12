import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography";
import { Carousel } from "components/carousel";
import BazaarImage from "components/BazaarImage";
import FlexRowCenter from "components/flex-box/flex-row-center";
// CUSTOM DATA MODEL
import Brand from "models/Brand.model";

// ==========================================================
type Props = { brands: Brand[] };
// ==========================================================

export default function Section8({ brands }: Props) {
  const responsive = [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 800, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } }
  ];

  return (
    <Container className="mt-4 mb-4">
      <H3 mb={3}>Featured Brands</H3>

      <Box padding={4} bgcolor="white" sx={{ ".slick-slide": { textAlign: "center" } }}>
        <Carousel slidesToShow={5} arrows={false} responsive={responsive}>
          {brands.map(({ id, image }) => (
            <FlexRowCenter maxWidth={110} height="100%" margin="auto" key={id}>
              <BazaarImage alt="brand" width="100%" src={image} sx={{ filter: "grayscale(1)" }} />
            </FlexRowCenter>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
