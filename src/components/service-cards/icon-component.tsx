"use client";

import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
// CUSTOM ICON COMPONENTS
import appIcons from "icons";

// ==============================================================
interface Props extends SvgIconProps {
  icon: string;
}
// ==============================================================

export default function IconComponent({ icon, ...props }: Props) {
  const Icon = appIcons[icon] as SvgIconComponent;
  return <Icon {...props} />;
}
