import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H1, Paragraph, Span } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// STYLED COMPONENT
import { StyledGrid } from "./styles";
// IMPORT IMAGE
import imgUrl from "../../../../../public/assets/images/products/paper-bag.png";

export default function Card5() {
  return (
    <StyledGrid container>
      <Grid item sm={7} xs={12} p="2rem" className="grid-1">
        <Paragraph color="grey.500" mb={1}>
          SPECIAL OFFER
        </Paragraph>

        <H1 lineHeight={1.3}>
          <Span color="primary.600" lineHeight={1.3}>
            {currency(100)} Off
          </Span>{" "}
          Over {currency(1200)}
        </H1>

        <Paragraph color="grey.600" mt={1}>
          Handcrafted from genuine Italian. One inner compartment
        </Paragraph>
      </Grid>

      <Grid item sm={5} xs={12} className="grid-2">
        <LazyImage alt="women's bag" src={imgUrl} className="banner" />
      </Grid>
    </StyledGrid>
  );
}
