import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENT
import ServiceCard1 from "components/service-cards/service-card-1";
// API FUNCTIONS
import api from "utils/__api__/gadget-2";

export default async function Section7() {
  const services = await api.getServices();

  return (
    <Container>
      <Grid container spacing={3} mt={8}>
        {services.map(({ icon, id, title, description }) => (
          <Grid item lg={3} sm={6} xs={12} key={id}>
            <ServiceCard1 icon={icon} title={title} description={description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
