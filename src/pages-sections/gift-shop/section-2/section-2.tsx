"use client";

import Grid from "@mui/material/Grid";
import { SvgIconComponent } from "@mui/icons-material";
// CUSTOM ICON COMPONENTS
import appIcons from "icons";
// GLOBAL CUSTOM COMPONENTS
import { H4, Span } from "components/Typography";
// CUSTOM DATA MODEL
import Service from "models/Service.model";
// STYLED COMPONENTS
import { ContentRoot, IconBox } from "./styles";

// ==================================================
type Props = { serviceList: Service[] };
// ==================================================

export default function Section2({ serviceList = [] }: Props) {
  const servicesData = serviceList.slice(0, 3);

  return (
    <div>
      <Grid container spacing={3}>
        {servicesData.map((item, ind) => {
          const Icon = appIcons[item.icon] as SvgIconComponent;

          return (
            <Grid item md={4} sm={6} xs={12} key={ind}>
              <ContentRoot>
                <IconBox>
                  <Icon color="primary">{item.icon}</Icon>
                </IconBox>

                <div>
                  <H4 mb="5px" fontSize="1rem" fontWeight="600">
                    {item.title}
                  </H4>
                  <Span color="grey.600">{item.description}</Span>
                </div>
              </ContentRoot>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
