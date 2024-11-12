// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
import Newsletter from "components/newsletter";
// LOCAL CUSTOM SECTION COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";

export default function FashionOnePageView() {
  return (
    <div className="bg-white">
      {/* HERO SECTION AND SERVICE CARDS */}
      <Section1 />

      {/* FLASH DEALS */}
      <Section2 />

      {/* NEW ARRIVALS */}
      <Section3 />

      {/* DEALS OF THE WEEK GRID CAROUSEL */}
      <Section4 />

      {/* HOT DEALS CAROUSEL */}
      <Section5 />

      {/* TRENDING ITEMS */}
      <Section6 />

      {/* SERVICE ITEMS */}
      <Section7 />

      {/* SUBSCRIBE NEWSLETTER */}
      <Section8 />

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </div>
  );
}
