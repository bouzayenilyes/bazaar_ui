import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import WhiteButton from "components/WhiteButton";
import { Paragraph, Span } from "components/Typography";
import CategoryCard1 from "components/category-cards/category-card-1";
// CSS ANIMATION NAME
import { AdTitle1, AdWrapper } from "./styles";
// CUSTOM DATA MODEL
import Category from "models/Category.model";

// ===========================================================
type Props = { categories: Category[] };
// ===========================================================

export default function Section3({ categories }: Props) {
  return (
    <Container className="mt-4">
      <Grid container spacing={3}>
        {/* CATEGORY LIST AREA */}
        {categories.map((item) => (
          <Grid item lg={2} md={3} sm={4} xs={6} key={item.id}>
            <CategoryCard1 image={item.image} title={item.name} />
          </Grid>
        ))}

        {/* ANIMATED BANNER AREA */}
        <Grid item xs={12}>
          <AdWrapper alignItems="center">
            <AdTitle1>Black friday sale!</AdTitle1>

            <Paragraph fontSize={28} className="text-wrapper">
              <Span className="slide-text">
                Pay only for <Span className="slide-text-bold">your loving electronics</Span>
              </Span>
            </Paragraph>

            <Box padding={3} flexShrink={0} zIndex={5}>
              <WhiteButton>Shop Now</WhiteButton>
            </Box>
          </AdWrapper>
        </Grid>
      </Grid>
    </Container>
  );
}
