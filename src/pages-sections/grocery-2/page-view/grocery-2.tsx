// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
import { Footer2 } from "components/footer";
import Scrollbar from "components/scrollbar";
import Newsletter from "components/newsletter";
import StickyWrapper from "components/sticky-wrapper";
import GrocerySideNav from "components/page-sidenav/grocery-side-nav";
import { MobileNavigationBar2 } from "components/mobile-navigation";
// LOCAL CUSTOM COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import ProductCarousel from "../product-carousel";
// API FUNCTIONS
import api from "utils/__api__/grocery-2";

export default async function GroceryTwoPageView() {
  const services = await api.getServices();
  const categories = await api.getCategories();
  const testimonials = await api.getTestimonials();
  const dairyProducts = await api.getDairyProducts();
  const navigationList = await api.getNavigationList();
  const mainCarouselData = await api.getMainCarousel();
  const featuredProducts = await api.getFeaturedProducts();
  const bestHomeProducts = await api.getBestHomeProducts();
  const bestSellProducts = await api.getBestSellProducts();
  const discountBanners = await api.getDiscountBannerList();

  // SIDE NAVBAR COMPONENT
  const SideNav = <GrocerySideNav navigation={navigationList} />;

  return (
    <div className="mt-1">
      <StickyWrapper SideNav={SideNav}>
        {/* TOP HERO AREA */}
        <Section1 carouselData={mainCarouselData} />

        {/* SERVICE LIST AREA */}
        <Section2 services={services} />

        {/* SHOP BY CATEGORY LIST AREA */}
        <Section3 categories={categories} />

        {/* FEATURED ITEMS AREA */}
        <ProductCarousel title="Featured Items" products={featuredProducts} />

        {/* BEST SELLER IN YOUR AREA */}
        <ProductCarousel title="Best Seller in Your Area" products={bestSellProducts} />

        {/* DISCOUNT BANNER AREA */}
        <Section4 cardList={discountBanners} />

        {/* BEST OF HOME ESSENTIALS PRODUCTS AREA  */}
        <ProductCarousel title="Best of Home Essentials" products={bestHomeProducts} />

        {/* SNACKS-DRINKS-DAIRY PRODUCTS AREA */}
        <ProductCarousel title="Snacks, Drinks, Dairy & More" products={dairyProducts} />

        {/* CLIENT TESTIMONIALS AREA */}
        <Section5 testimonials={testimonials} />

        {/* FOOTER AREA */}
        <Footer2 />
      </StickyWrapper>

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter image="/assets/images/newsletter/bg-2.png" />

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar2>
        <Scrollbar>{SideNav}</Scrollbar>
      </MobileNavigationBar2>
    </div>
  );
}
