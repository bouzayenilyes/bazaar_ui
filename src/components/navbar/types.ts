import { SvgIconComponent } from "@mui/icons-material";

export type Nav = {
  url: string;
  title: string;
  Icon?: SvgIconComponent;
};

export type NavList = {
  url: string;
  title: string;
  child: Nav[];
  megaMenu: boolean;
  megaMenuWithSub: boolean;
};
