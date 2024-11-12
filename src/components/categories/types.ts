import { SvgIconComponent } from "@mui/icons-material";

export interface CategoryItemOffer {
  url: string;
  href: string;
  position: "right" | "bottom";
}

export interface CategoryItem {
  href: string;
  title: string;
  component?: string;
  icon?: SvgIconComponent;
  children?: CategoryItem[];
  offer?: CategoryItemOffer;
}
