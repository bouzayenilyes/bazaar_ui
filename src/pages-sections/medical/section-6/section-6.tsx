import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography";
// LOCAL CUSTOM COMPONENTS
import BlogCard from "./components/blog-card";
import TestimonialCarousel from "./components/testimonial-carousel";
// API FUNCTIONS
import api from "utils/__api__/medical";

export default async function Section6() {
  const [blogs, testimonials] = await Promise.all([api.getBlogs(), api.getTestimonials()]);

  return (
    <Container>
      <H3 mt={8} mb={4} fontSize={{ sm: 30, xs: 27 }}>
        From Our Blog
      </H3>

      <Grid container spacing={3}>
        {/* BLOG SECTION */}
        <Grid item md={6} xs={12}>
          <Stack spacing={3}>
            {blogs.map(({ id, thumbnail, title, createdAt }) => (
              <BlogCard key={id} title={title} date={createdAt} image={thumbnail} />
            ))}
          </Stack>
        </Grid>

        {/* TESTIMONIAL SECTION */}
        <Grid item md={6} xs={12}>
          <TestimonialCarousel testimonials={testimonials} />
        </Grid>
      </Grid>
    </Container>
  );
}
