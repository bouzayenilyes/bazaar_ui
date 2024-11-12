import { PropsWithChildren } from "react";
import ShopLayout2 from "components/layouts/shop-layout-2";

export default function Layout({ children }: PropsWithChildren) {
  return <ShopLayout2>{children}</ShopLayout2>;
}
