// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
// LOCAL CUSTOM SECTION COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";
import Section9 from "../section-9";

export default function FurnitureTwoPageView() {
  return (
    <div className="bg-white pt-2">
      {/* TOP BANNER SECTION */}
      <Section1 />

      {/* BANNER GRID SECTION */}
      <Section2 />

      {/* NEW ARRIVALS PRODUCTS SECTION */}
      <Section3 />

      {/* BED ROOM & DINNING DEAL SECTION */}
      <Section4 />

      {/* TRENDING PRODUCTS SECTION */}
      <Section5 />

      {/* GRID BANNERS SECTION */}
      <Section6 />

      {/* TESTIMONIAL SECTION */}
      <Section7 />

      {/* NEWSLETTER BANNER SECTION */}
      <Section8 />

      {/* SERVICES SECTION */}
      <Section9 />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </div>
  );
}
