import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography";
import { NavLink3 } from "components/nav-link";
import { Carousel } from "components/carousel";
import { ProductCard10 } from "components/product-cards/product-card-10";
// CUSTOM DATA MODEL
import { CategoryBasedProducts } from "models/Market-2.model";
// STYLED COMPONENTS
import { StyledCard, StyledListItem } from "./styles";

// ======================================================================
type Props = { data: CategoryBasedProducts };
// ======================================================================

export default function Section5({ data }: Props) {
  if (!data) return null;

  const responsive = [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 426, settings: { slidesToShow: 1 } }
  ];

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <StyledCard elevation={0}>
            {/* MAIN CATEGORY NAME/TITLE */}
            <H3>{data.category.title}</H3>

            {/* SUB CATEGORY LIST */}
            <List sx={{ mb: 2 }}>
              {data.category.children.map((item) => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
            </List>

            <NavLink3 href="/" text="Browse All" color="dark.main" hoverColor="dark.main" />
          </StyledCard>
        </Grid>

        {/* CATEGORY BASED PRODUCTS CAROUSEL */}
        <Grid item md={9} xs={12}>
          <Carousel
            slidesToShow={4}
            responsive={responsive}
            arrowStyles={{ backgroundColor: "dark.main" }}>
            {data.products.map((product) => (
              <ProductCard10 product={product} key={product.id} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
}
