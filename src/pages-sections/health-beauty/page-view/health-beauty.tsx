// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
import { Footer3 } from "components/footer";
import Newsletter from "components/newsletter";
import StickyWrapper from "components/sticky-wrapper";
import { MobileNavigationBar2 } from "components/mobile-navigation";
import HealthBeautySideNav from "components/page-sidenav/health-beauty-side-nav";
// LOCAL CUSTOM COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
// API FUNCTIONS
import api from "utils/__api__/healthbeauty-shop";

export default async function HealthBeautyPageView() {
  const services = await api.getServices();
  const allProducts = await api.getProducts();
  const navigationList = await api.getNavigation();
  const topNewProducts = await api.getTopNewProducts();
  const mainCarouselData = await api.getMainCarousel();

  // SIDE NAVBAR COMPONENT
  const SideNav = <HealthBeautySideNav navigation={navigationList} />;

  return (
    <div className="bg-white">
      {/* TOP HERO CAROUSEL AREA */}
      <Section1 carouselData={mainCarouselData} />

      <StickyWrapper SideNav={SideNav}>
        {/* BANNER AREA */}
        <Section2 />

        {/* TOP NEW PRODUCTS AREA */}
        <Section3 products={topNewProducts} />

        {/* ALL PRODUCTS AREA */}
        <Section4 products={allProducts} />

        {/* SERVICE LIST AREA */}
        <Section5 services={services} />

        {/* FOOTER AREA */}
        <Footer3 />
      </StickyWrapper>

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter image="/assets/images/newsletter/bg-4.png" />

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar2>{SideNav}</MobileNavigationBar2>
    </div>
  );
}
