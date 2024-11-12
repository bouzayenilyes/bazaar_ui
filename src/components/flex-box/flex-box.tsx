import Box, { BoxProps } from "@mui/material/Box";

export default function FlexBox({ children, ...props }: BoxProps) {
  return (
    <Box display="flex" {...props}>
      {children}
    </Box>
  );
}
