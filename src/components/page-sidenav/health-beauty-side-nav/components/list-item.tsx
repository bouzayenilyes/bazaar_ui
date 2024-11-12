"use client";

import { SvgIconComponent } from "@mui/icons-material";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
// CUSTOM ICON COMPONENTS
import appIcons from "icons";

// ==============================================================
interface Props {
  icon: string;
  title: string;
}
// ==============================================================

export default function ListItem({ title, icon }: Props) {
  const Icon = appIcons[icon] as SvgIconComponent;

  return (
    <FlexBox py={1} gap={1.5} alignItems="center">
      <Icon fontSize="small" />
      <Span fontWeight={600}>{title}</Span>
    </FlexBox>
  );
}
