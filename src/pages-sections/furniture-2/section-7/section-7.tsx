import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H3, Paragraph } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import TestimonialCard from "./testimonial-card";
// API FUNCTIONS
import api from "utils/__api__/furniture-2";

export default async function Section7() {
  const testimonials = await api.getTestimonial();

  return (
    <Box bgcolor="grey.50" mt={10} pt={8} pb={30}>
      <Container>
        <Box mb={5} textAlign="center">
          <H3 fontSize={{ sm: 30, xs: 27 }}>Testimonial</H3>
          <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            There are many variations passages
          </Paragraph>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((item) => (
            <Grid item md={4} xs={12} key={item.id}>
              <TestimonialCard testimonial={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
