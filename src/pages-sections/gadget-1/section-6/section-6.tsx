import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { NavLink2 } from "components/nav-link";
import { H2, Paragraph } from "components/Typography";
// STYLED COMPONENT
import { StyledCard } from "./styles";

export default function Section6() {
  return (
    <Container className="mt-4">
      <StyledCard>
        <div className="content">
          <H2 lineHeight={1.3}>Build Your Own Youtube Studio Save Upto 70%</H2>

          <Paragraph color="grey.600" mt="0.5rem" mb="1.5rem">
            Everything you need to create your youtube studio
          </Paragraph>

          <NavLink2 title="DISCOVER EQUIPMENTS" url="#" />
        </div>
      </StyledCard>
    </Container>
  );
}
