import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
// LOCAL CUSTOM COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
// API FUNCTIONS
import api from "utils/__api__/gadget-3";

export default async function GadgetThreePageView() {
  const [stories, products] = await Promise.all([api.getStories(), api.getAllProducts()]);

  return (
    <Fragment>
      {/* ALL STORIES */}
      <Section1 stories={stories} />

      {/* ALL PRODUCTS */}
      <Section2 products={products} />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </Fragment>
  );
}
