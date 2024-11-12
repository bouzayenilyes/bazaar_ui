"use client";

import Container from "@mui/material/Container";
import { SvgIconComponent } from "@mui/icons-material";
// CUSTOM ICON COMPONENT
import appIcons from "icons";
// GLOBAL CUSTOM COMPONENTS
import { H4, Span } from "components/Typography";
// CUSTOM DATA MODEL
import Service from "models/Service.model";
// STYLED COMPONENTS
import { StyledFlexBox, ServiceItem } from "./styles";

// ===========================================================
type Props = { serviceList: Service[] };
// ===========================================================

export default function Section2({ serviceList }: Props) {
  return (
    <Container className="mt-2">
      <StyledFlexBox>
        {serviceList.map((item, ind) => {
          const Icon = appIcons[item.icon] as SvgIconComponent;

          return (
            <ServiceItem flexGrow={1} gap={2} key={ind}>
              <Icon sx={{ fontSize: 40 }} />
              <div>
                <H4 lineHeight={1.3}>{item.title}</H4>
                <Span color="grey.600">{item.description}</Span>
              </div>
            </ServiceItem>
          );
        })}
      </StyledFlexBox>
    </Container>
  );
}
