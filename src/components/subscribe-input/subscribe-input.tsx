import { SxProps, Theme } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
// STYLED COMPONENT
import { StyledButton } from "./styles";

// ==============================================================
interface Props {
  buttonText?: string;
  buttonSx?: SxProps<Theme>;
}
// ==============================================================

export default function SubscribeInput({
  fullWidth,
  InputProps,
  buttonSx = {},
  variant = "outlined",
  buttonText = "SUBSCRIBE",
  placeholder = "Enter Your Mail Here",
  ...props
}: Props & TextFieldProps) {
  const INPUT_PROPS = {
    endAdornment: <StyledButton sx={buttonSx}>{buttonText}</StyledButton>,
    sx: {
      border: 0,
      padding: 0,
      borderRadius: 2,
      backgroundColor: "white",
      ...InputProps?.sx
    },
    ...InputProps
  };

  return (
    <TextField
      variant={variant}
      fullWidth={fullWidth}
      placeholder={placeholder}
      InputProps={INPUT_PROPS}
      {...props}
    />
  );
}
