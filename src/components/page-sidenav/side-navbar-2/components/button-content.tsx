import Box from "@mui/material/Box";
import { SvgIconComponent } from "@mui/icons-material";
// STYLED COMPONENT
import { ListIconWrapper } from "../styles";
// CUSTOM ICON COMPONENTS
import Icons from "icons/grocery-4";

// ==============================================================
interface Props {
  name: string;
  icon?: string;
}
// ==============================================================

export default function ButtonContent({ icon, name }: Props) {
  const Icon = icon ? (Icons[icon] as SvgIconComponent) : null;

  return (
    <Box display="flex" alignItems="center">
      {icon ? (
        <ListIconWrapper>
          <Icon />
        </ListIconWrapper>
      ) : (
        <Box marginRight="0.6rem" />
      )}

      {name}
    </Box>
  );
}
