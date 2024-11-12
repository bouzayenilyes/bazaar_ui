import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import ServiceCard2 from "components/service-cards/service-card-2";
// STYLED COMPONENTS
import { StyledFlexBox } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/fashion-1";

export default async function Section7() {
  const serviceList = await api.getServiceList();

  return (
    <Container className="mb-4">
      <StyledFlexBox>
        {serviceList.map(({ icon, id, title, description }) => (
          <ServiceCard2 key={id} title={title} description={description} icon={icon} />
        ))}
      </StyledFlexBox>
    </Container>
  );
}
