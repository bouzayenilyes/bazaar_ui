import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import CategoryCard1 from "components/category-cards/category-card-1";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

export default async function Section3() {
  const categories = await api.getCategories();

  return (
    <Container className="mt-4">
      <H2 textAlign="center" mb={4}>
        Best selling Categories
      </H2>

      <Grid container spacing={3}>
        {categories.map((item) => (
          <Grid item md={3} sm={6} xs={12} key={item.id}>
            <CategoryCard1 image={item.image} title={item.name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
