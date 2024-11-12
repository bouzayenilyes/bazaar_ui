import { SvgIconComponent } from "@mui/icons-material";

export type NavLink = {
  url: string;
  img?: string;
  title: string;
  Icon?: SvgIconComponent;
};

export type MenuItem = {
  title: string;
  child: NavLink[];
};

export type MenuList = {
  title: string;
  child: MenuItem[];
};
