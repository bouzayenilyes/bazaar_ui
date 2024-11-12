import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENT
import { H2 } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import Card2 from "./card";
// API FUNCTIONS
import api from "utils/__api__/gadget-1";

export default async function Section2() {
  const [firstItem, ...featured] = await api.getFeaturedCategories();

  return (
    <Container className="mt-4">
      <H2 mb={4} lineHeight="1">
        Featured Categories
      </H2>

      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Card2
            title={firstItem.name}
            imgUrl={firstItem.image}
            headingStyle={{ pl: "1.5rem", pb: "1rem", pt: "1.5rem" }}
          />
        </Grid>

        <Grid container item md={6} xs={12} spacing={3}>
          {featured.map((category, ind) => (
            <Grid item xs={6} key={ind}>
              <Card2 title={category.name} imgUrl={category.image} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
