import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
// LOCAL CUSTOM COMPONENTS
import Section1 from "../section-1/section-1";
import Section2 from "../section-2/section-2";
// API FUNCTIONS
import api from "utils/__api__/furniture-3";

export default async function FurnitureThreePageView() {
  const products = await api.getAllProducts();

  return (
    <Fragment>
      {/* BANNER SECTIONS */}
      <Section1 />

      {/* ALL PRODUCTS */}
      <Section2 products={products} />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </Fragment>
  );
}
