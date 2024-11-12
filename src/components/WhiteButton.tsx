import { PropsWithChildren } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

// ==================================================
interface Props extends PropsWithChildren, ButtonProps {}
// ==================================================

export default function WhiteButton({ children, ...props }: Props) {
  const STYLE = {
    color: "dark.main",
    backgroundColor: "white",
    ":hover": { color: "#fff", backgroundColor: "dark.main" }
  };

  return (
    <Button color="dark" variant="contained" sx={STYLE} {...props}>
      {children}
    </Button>
  );
}
