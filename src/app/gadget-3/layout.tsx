import { PropsWithChildren } from "react";
import ShopLayout4 from "components/layouts/shop-layout-4";
// API FUNCTIONS
import api from "utils/__api__/gadget-3";

export default async function Layout({ children }: PropsWithChildren) {
  const categories = await api.getCategories();

  return <ShopLayout4 navigation={categories}>{children}</ShopLayout4>;
}
