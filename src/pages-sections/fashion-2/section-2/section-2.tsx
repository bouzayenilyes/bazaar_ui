import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENT
import ServiceCard3 from "components/service-cards/service-card-3";
// STYLED COMPONENTS
import { RootStyle } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

export default async function Section2() {
  const services = await api.getServices();

  return (
    <Container className="mt-2">
      <RootStyle>
        {services.map(({ id, icon, title, description }) => (
          <ServiceCard3 key={id} icon={icon} title={title} description={description} />
        ))}
      </RootStyle>
    </Container>
  );
}
