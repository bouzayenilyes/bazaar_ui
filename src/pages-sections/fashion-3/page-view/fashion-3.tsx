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
import Section8 from "../section-8";
import Section9 from "../section-9";
import Section10 from "../section-10";
import Section11 from "../section-11";
import Section12 from "../section-12";
import Section13 from "../section-13";

export default function FashionThreePageView() {
  return (
    <div className="bg-white">
      {/* GRID BANNER SECTION */}
      <Section1 />

      {/* FLASH SALE PRODUCTS SECTION */}
      <Section2 />

      {/* 25% OFF BANNER SECTION */}
      <Section3 />

      {/* SHOP CATEGORY SECTION */}
      <Section4 />

      {/* FEATURE PRODUCT SECTION */}
      <Section5 />

      {/* 30% OFF BANNER SECTION */}
      <Section6 />

      {/* TOP BRANDS SECTION */}
      <Section7 />

      {/* 22% OFF SUMMER BANNER SECTION */}
      <Section8 />

      {/* SELLING PRODUCTS SECTION */}
      <Section9 />

      {/* MEN & WOMEN BANNER SECTION */}
      <Section10 />

      {/* NEW ARRIVAL PRODUCTS SECTION */}
      <Section11 />

      {/* DOWNLOAD APP BANNER SECTION */}
      <Section12 />

      {/* INSTAGRAM PHOTOS SECTION */}
      <Section13 />

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </div>
  );
}
