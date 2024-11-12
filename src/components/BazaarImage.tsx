import Box, { BoxProps } from "@mui/material/Box";

// ==============================================================
interface Props extends BoxProps {
  src: string;
  alt: string;
}
// ==============================================================

export default function BazaarImage(props: Props) {
  return <Box component="img" {...props} />;
}
