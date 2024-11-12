import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
// LOCAL CUSTOM COMPONENTS
import Section2 from "../section-2";
// API FUNCTIONS
import api from "utils/__api__/grocery-4";

// ==============================================================
type Props = { slug: string };
// ==============================================================

export default async function GroceryFourCategoriesPageView({ slug }: Props) {
  const [products, breadcrumb] = await Promise.all([
    api.getAllProductsBySlug(),
    api.getBreadcrumb(slug)
  ]);

  return (
    <Fragment>
      {/* ALL PRODUCTS */}
      <Section2 products={products} breadcrumb={breadcrumb} />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </Fragment>
  );
}
