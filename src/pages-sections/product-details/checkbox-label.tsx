import { ReactNode } from "react";
// MUI
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

// ==============================================================
interface Props extends CheckboxProps {
  label: ReactNode;
}
// ==============================================================

export default function CheckboxLabel({ label, ...props }: Props) {
  return (
    <FormControlLabel
      label={label}
      control={<Checkbox size="small" color="primary" {...props} />}
      slotProps={{ typography: { fontSize: 14, lineHeight: 1 } }}
    />
  );
}
