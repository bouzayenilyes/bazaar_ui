import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// Local CUSTOM COMPONENT
import Card3 from "./card";
// API FUNCTIONS
import api from "utils/__api__/gadget-1";

export default async function Section3() {
  const [firstItem, secondItem] = await api.getTwoBanner();

  return (
    <Container className="mt-4">
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Card3
            title={firstItem.title}
            imgUrl={firstItem.thumbnail}
            body={firstItem.description}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Card3
            color="white"
            bgColor="grey.600"
            title={secondItem.title}
            body={secondItem.description}
            imgUrl={secondItem.thumbnail}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
