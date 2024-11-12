import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import LazyImage from "components/LazyImage";
// STYLED COMPONENTS
import { ImageWrapper, InstagramIcon } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/fashion-3";

export default async function Section13() {
  const blogs = await api.getBlogs();

  return (
    <Container className="mt-4">
      <H2 fontSize={24} mb={4}>
        Our Instagram
      </H2>

      <Grid container spacing={2}>
        {blogs.map(({ id, thumbnail }) => (
          <Grid item md={2} sm={4} xs={6} key={id}>
            <ImageWrapper>
              <LazyImage alt="post" width={220} height={220} src={thumbnail} />
              <InstagramIcon />
            </ImageWrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
