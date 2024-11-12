import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import BlogCard from "./blog-card";
// API FUNCTIONS
import api from "utils/__api__/gadget-2";

export default async function Section6() {
  const blogs = await api.getBlogs();

  return (
    <Container>
      <H2 mt={8} mb={4} textAlign="center" fontSize={{ sm: 34, xs: 28 }}>
        Latest Post
      </H2>

      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item lg={3} md={6} xs={12} key={blog.id}>
            <BlogCard date={blog.createdAt} title={blog.title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
