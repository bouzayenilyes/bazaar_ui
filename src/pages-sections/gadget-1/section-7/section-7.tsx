import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
// Local CUSTOM COMPONENT
import BlogCard from "./blog-card";
// API FUNCTIONS
import api from "utils/__api__/gadget-1";

export default async function Section7() {
  const blogs = await api.getBlogLists();

  return (
    <Container className="mt-4 mb-4">
      <H2 mb={3} lineHeight="1">
        Get Ideas from our Blog
      </H2>

      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item md={6} xs={12} key={blog.id}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
