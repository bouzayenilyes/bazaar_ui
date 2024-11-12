import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { NavLink2 } from "components/nav-link";
import { H1, Paragraph, Span } from "components/Typography";
// STYLED COMPONENT
import { StyledGrid } from "./styles";
// IMPORT IMAGE
import imgUrl from "../../../../../public/assets/images/products/t-shirt2.png";

export default function Card3() {
  return (
    <StyledGrid container>
      <Grid item sm={5} xs={12}>
        <LazyImage alt="t-shirt" src={imgUrl} className="banner" />
      </Grid>

      <Grid item sm={7} xs={12} py={4}>
        <Paragraph mb={1} color="grey.500">
          MENS SHIRTS
        </Paragraph>

        <H1 lineHeight={1.3}>
          <Span lineHeight={1.3} color="primary.main">
            Stylish
          </Span>{" "}
          Genuine <br /> Comfy T-shirts
        </H1>

        <Paragraph mt={1} mb={2} maxWidth={{ md: 350, xs: "100%" }}>
          Handcrafted from genuine Italian leather. One inner compartment with black satin lining
        </Paragraph>

        <NavLink2 url="/shops/scarlett-beauty" title="SHOP NOW" borderColor="primary.main" />
      </Grid>
    </StyledGrid>
  );
}
