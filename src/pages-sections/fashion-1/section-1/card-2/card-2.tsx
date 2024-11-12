import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { NavLink2 } from "components/nav-link";
import { H1, Paragraph, Span } from "components/Typography";
// STYLED COMPONENT
import { StyledGrid } from "./styles";
// IMPORT IMAGE
import imgUrl from "../../../../../public/assets/images/products/jacket.png";

export default function Card2() {
  return (
    <StyledGrid container>
      <Grid item sm={7} xs={12} p="30px" className="content">
        <Paragraph mb={1} color="grey.500">
          JACKETS
        </Paragraph>

        <H1 lineHeight={1.3}>
          <Span lineHeight={1.3} color="primary.main">
            Minimalist
          </Span>{" "}
          Genuine <br /> Cotton Jacket
        </H1>

        <Paragraph mt={1} mb={2}>
          Handcrafted from genuine Italian leather. <br /> One inner compartment with black satin
          lining
        </Paragraph>

        <NavLink2 url="/shops/scarlett-beauty" title="SHOP NOW" borderColor="primary.main" />
      </Grid>

      <Grid item sm={5} xs={12}>
        <LazyImage alt="apple-watch-1" src={imgUrl} sx={{ mx: "auto", maxWidth: 350 }} />
      </Grid>
    </StyledGrid>
  );
}
