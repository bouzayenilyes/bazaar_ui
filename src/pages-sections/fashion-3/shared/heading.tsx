import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import { FlexBetween } from "components/flex-box";
// STYLED COMPONENT
import { StyledButton } from "./styles";

// ==============================================================
interface Props {
  title: string;
}
// ==============================================================

export default function Heading({ title }: Props) {
  return (
    <FlexBetween mb={4}>
      <H2 fontSize={24}>{title}</H2>
      <StyledButton disableFocusRipple endIcon={<ArrowRightAlt fontSize="inherit" />}>
        View All
      </StyledButton>
    </FlexBetween>
  );
}
