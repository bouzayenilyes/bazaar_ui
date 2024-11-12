import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";
// LOCAL CUSTOM COMPONENT
import Heading from "../shared/heading";
// API FUNCTIONS
import api from "utils/__api__/fashion-3";

export default async function Section7() {
  const brands = await api.getBrands();

  return (
    <Container className="mt-4">
      <Heading title="Top Brands" />

      <Grid container spacing={3}>
        {brands.map(({ id, image, name }) => (
          <Grid item sm={3} xs={6} key={id}>
            <FlexBox borderRadius={2} overflow="hidden">
              <LazyImage src={image} alt={name} width={278} height={278} />
            </FlexBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
