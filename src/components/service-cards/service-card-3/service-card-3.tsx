import IconComponent from "../icon-component";
import { H4, Span } from "components/Typography";
// STYLED COMPONENTS
import { StyledRoot } from "./styles";

// ==============================================================
interface Props {
  icon: string;
  title: string;
  description: string;
}
// ==============================================================

export default function ServiceCard3({ icon, title, description }: Props) {
  return (
    <StyledRoot>
      <IconComponent icon={icon} sx={{ fontSize: 40 }} />

      <div>
        <H4 lineHeight={1.3}>{title}</H4>
        <Span color="grey.600">{description}</Span>
      </div>
    </StyledRoot>
  );
}
