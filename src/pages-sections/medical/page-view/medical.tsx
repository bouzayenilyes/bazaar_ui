import Setting from "components/settings/setting";
// LOCAL CUSTOM SECTION COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";

export default function MedicalPageView() {
  return (
    <div className="bg-white pt-3">
      {/* HEADER BANNER SECTION */}
      <Section1 />

      {/* TWO BANNER SECTION */}
      <Section2 />

      {/* FEATURED PRODUCTS SECTION */}
      <Section3 />

      {/* TWO BANNER SECTION */}
      <Section4 />

      {/* BEST SELLER PRODUCTS SECTION */}
      <Section5 />

      {/* FROM OUR BLOG SECTION */}
      <Section6 />

      {/* SERVICES SECTION */}
      <Section7 />

      {/* SUBSCRIBE FORM SECTION */}
      <Section8 />

      <Setting />
    </div>
  );
}
