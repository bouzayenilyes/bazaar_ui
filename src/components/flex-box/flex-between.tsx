import Box, { BoxProps } from "@mui/material/Box";

export default function FlexBetween({ children, ...props }: BoxProps) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" {...props}>
      {children}
    </Box>
  );
}
