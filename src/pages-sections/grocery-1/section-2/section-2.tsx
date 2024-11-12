import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { SvgIconComponent } from "@mui/icons-material";
// CUSTOM ICON COMPONENTS
import appIcons from "icons";
// GLOBAL CUSTOM COMPONENTS
import { H4, Span } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
// CUSTOM DATA MODEL
import Service from "models/Service.model";
// STYLED COMPONENT
import { ServiceCard } from "./styles";

// =============================================================
type Props = { services: Service[] };
// =============================================================

export default function Section2({ services }: Props) {
  const servicesData = services.slice(0, 4);

  return (
    <Container className="pt-6 pb-4">
      <Grid container spacing={3}>
        {servicesData.map((item) => {
          const Icon = appIcons[item.icon] as SvgIconComponent;

          return (
            <Grid item lg={3} md={6} sm={6} xs={12} key={item.title}>
              <ServiceCard>
                <Icon fontSize="large" />

                <div>
                  <H4 color="grey.900" fontSize="1rem" fontWeight="700">
                    {item.title}
                  </H4>

                  <Span color="grey.600">{item.description}</Span>
                </div>
              </ServiceCard>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
