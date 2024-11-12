import { SyntheticEvent } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
// GLOBAL CUSTOM COMPONENT
import { Paragraph } from "components/Typography";

// ==============================================================
interface Props {
  name: string;
  title: string;
  checked: boolean;
  handleChange: (event: SyntheticEvent<Element, Event>, checked: boolean) => void;
}
// ==============================================================

export default function FormLabel({ name, checked, title, handleChange }: Props) {
  return (
    <FormControlLabel
      name={name}
      onChange={handleChange}
      label={<Paragraph fontWeight={600}>{title}</Paragraph>}
      control={<Radio checked={checked} color="primary" size="small" />}
    />
  );
}
