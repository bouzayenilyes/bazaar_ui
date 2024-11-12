import { ButtonBaseProps } from "@mui/material/ButtonBase";
// STYLED COMPONENT
import { StyledButtonBase } from "./styles";

// ==============================================================
interface Props extends ButtonBaseProps {
  variant?: "light" | "dark";
}
// ==============================================================

export default function BoxButton({ variant = "light", ...props }: Props) {
  return (
    <StyledButtonBase variant={variant} {...props}>
      Shop Now
    </StyledButtonBase>
  );
}
