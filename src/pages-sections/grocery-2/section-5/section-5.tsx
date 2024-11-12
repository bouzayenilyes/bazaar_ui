import Grid from "@mui/material/Grid";
// LOCAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { H5, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import {
  StyledCard,
  StyledQuote,
  StyledAvatar,
  StyledContent,
  StyledGridContainer
} from "./styles";
// CUSTOM DATA MODEL
import { Testimonial } from "models/Grocery-2.model";

// ======================================================================
type Props = { testimonials: Testimonial[] };
// ======================================================================

export default function Section5({ testimonials = [] }: Props) {
  return (
    <div className="mb-3">
      <Carousel slidesToShow={1} spaceBetween={0}>
        {testimonials.map((data, ind) => (
          <StyledCard key={ind}>
            <StyledContent>
              <StyledQuote className="first" />

              <StyledGridContainer container spacing={1}>
                <Grid item xl={1} lg={2} md={3}>
                  <StyledAvatar src={data.user.avatar} />
                </Grid>

                <Grid item lg={10} md={9}>
                  <Paragraph color="grey.700">{data.comment}</Paragraph>
                  <H5 mt={1} fontWeight="700">
                    {data.user.name}
                  </H5>
                </Grid>
              </StyledGridContainer>

              <StyledQuote className="last" />
            </StyledContent>
          </StyledCard>
        ))}
      </Carousel>
    </div>
  );
}
