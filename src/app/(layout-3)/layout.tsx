import { PropsWithChildren } from "react";
import ShopLayout3 from "components/layouts/shop-layout-3";

export default function Layout({ children }: PropsWithChildren) {
  return <ShopLayout3>{children}</ShopLayout3>;
}
