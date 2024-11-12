import { Fragment, ReactNode, useState } from "react";
import Menu from "@mui/material/Menu";
import { SxProps, Theme } from "@mui/material/styles";

// ===============================================================
interface Props {
  open?: boolean;
  sx?: SxProps<Theme>;
  handler: (e: any) => ReactNode;
  options: (e: () => void) => ReactNode;
  direction?: "left" | "right" | "center";
}
// ===============================================================

export default function BazaarMenu({
  open,
  handler,
  options,
  direction = "left",
  ...props
}: Props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);

  return (
    <Fragment>
      {handler ? handler(handleClick) : null}

      <Menu
        elevation={0}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open !== undefined ? open : !!anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: direction }}
        transformOrigin={{ vertical: "top", horizontal: direction }}
        {...props}>
        {options(handleClose)}
      </Menu>
    </Fragment>
  );
}
