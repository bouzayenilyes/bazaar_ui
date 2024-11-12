// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
import Newsletter from "components/newsletter";
// LOCAL CUSTOM COMPONENTS
import Sidebar from "../sidebar";
import Section1 from "../section-1";
import Section3 from "../section-3";
import Section4 from "../section-4";
// API FUNCTIONS
import api from "utils/__api__/furniture-1";

export default async function FurnitureOnePageView() {
  const [topNewProducts, furnitureProducts, topSellingProducts, sidebarNavList] = await Promise.all(
    [
      api.getTopNewProducts(),
      api.getFurnitureProducts(),
      api.getTopSellingProducts(),
      api.getFurnitureShopNavList()
    ]
  );

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <Section1 />

      {/* LEFT SIDEBAR & OFFER BANNERS AREA */}
      <Sidebar navList={sidebarNavList} />

      {/* TOP NEW PRODUCTS AREA */}
      <Section3
        heading="Top New Product"
        products={topNewProducts}
        description="Tall blind but were, been folks not the expand"
      />

      {/* TOP SELLING PRODUCT AREA */}
      <Section3
        heading="Top Selling Product"
        products={topSellingProducts}
        description="Tall blind but were, been folks not the expand"
      />

      {/* ALL PRODUCTS AREA */}
      <Section4 products={furnitureProducts} />

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter image="/assets/images/newsletter/bg-3.png" />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </div>
  );
}
