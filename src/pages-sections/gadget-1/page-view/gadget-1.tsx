import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
import Newsletter from "components/newsletter";
// LOCAL CUSTOM COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";

export default function GadgetOnePageView() {
  return (
    <Fragment>
      {/* MAIN PRODUCT CAROUSEL AND TOP PICK PRODUCTS AREA */}
      <Section1 />

      {/* FEATURED CATEGORIES AREA */}
      <Section2 />

      {/* DISCOUNT BANNER AREA */}
      <Section3 />

      {/* MOST VIEWED PRODUCTS AREA */}
      <Section4 />

      {/* MAKEUP AND SUNGLASSES PRODUCT */}
      <Section5 />

      {/* YOUTUBE BANNER AREA */}
      <Section6 />

      {/* OUR BLOG AREA */}
      <Section7 />

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </Fragment>
  );
}
