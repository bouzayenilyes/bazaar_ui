"use client";

import { Fragment, useEffect, useState } from "react";
import axios from "../../../utils/axiosInstance";
// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
import { Footer2 } from "components/footer";
import Newsletter from "components/newsletter";
import StickyWrapper from "components/sticky-wrapper";
import SideNavbar from "components/page-sidenav/side-navbar";
import { MobileNavigationBar2 } from "components/mobile-navigation";
// Local CUSTOM COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
// CUSTOM DATA MODELS
import Product from "models/Product.model";
import Service from "models/Service.model";
import CategoryNavList from "models/CategoryNavList.model";
// STYLED COMPONENTS

// =====================================================
interface Props {
  products: Product[];
  serviceList: Service[];
  popularProducts: Product[];
  trendingProducts: Product[];
  grocery1NavList: CategoryNavList[];
}
// =====================================================

export default function GroceryOnePageView(props: Props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  // FETCH PRODUCTS BASED ON THE SELECTED CATEGORY
  useEffect(() => {
    axios
      .get("/api/grocery-1/category-based-products", { params: { category: selectedCategory } })
      .then(({ data }) => setFilterProducts(data));
  }, [selectedCategory]);

  // HANDLE CHANGE CATEGORY
  const handleSelectCategory = (category: string) => setSelectedCategory(category);

  // SIDE NAVBAR COMPONENT
  const SideNav = (
    <SideNavbar navList={props.grocery1NavList} handleSelect={handleSelectCategory} />
  );

  return (
    <div className="bg-white">
      {/* TOP HERO AREA */}
      <Section1 />

      {/* SERVICE AREA */}
      <Section2 services={props.serviceList} />

      {/* SIDEBAR WITH OTHER CONTENTS */}
      <StickyWrapper SideNav={SideNav}>
        {selectedCategory ? (
          // FILTERED PRODUCT LIST
          <Section4 products={filterProducts} title={selectedCategory} />
        ) : (
          <Fragment>
            {/* POPULAR PRODUCTS AREA */}
            <Section3 title="Popular Products" products={props.popularProducts} />

            {/* TRENDING PRODUCTS AREA */}
            <Section3 title="Trending Products" products={props.trendingProducts} />

            {/* ALL PRODUCTS AREA */}
            <Section4 products={props.products} />
          </Fragment>
        )}

        {/* DISCOUNT BANNER AREA */}
        <Section5 />

        {/* FOOTER AREA */}
        <Footer2 />
      </StickyWrapper>

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter image="/assets/images/newsletter/bg-2.png" />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />

      {/* MOBILE NAVIGATION WITH SIDE NAVBAR */}
      <MobileNavigationBar2>{SideNav}</MobileNavigationBar2>
    </div>
  );
}
