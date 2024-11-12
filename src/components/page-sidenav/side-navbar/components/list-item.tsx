import { Fragment } from "react";
import { SvgIconComponent } from "@mui/icons-material";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
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
    <Fragment>
      <Icon fontSize="small" />
      <Span fontWeight="600">{title}</Span>
    </Fragment>
  );
}
