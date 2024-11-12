import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { Props } from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
// STYLED COMPONENT
import { StyledScrollBar } from "./styles";

// =============================================================
interface ScrollbarProps extends Props {
  autoHide?: boolean;
  sx?: SxProps<Theme>;
  children: ReactNode;
}
// =============================================================

export default function Scrollbar({ children, autoHide = true, sx, ...props }: ScrollbarProps) {
  return (
    <StyledScrollBar sx={sx} autoHide={autoHide} {...props}>
      {children}
    </StyledScrollBar>
  );
}
