import { SvgIconProps } from "@mui/material/SvgIcon";

export interface PackageItem {
  id: number;
  price: number;
  features: string[];
  packageName: string;
  Icon: (props: SvgIconProps) => JSX.Element;
}
