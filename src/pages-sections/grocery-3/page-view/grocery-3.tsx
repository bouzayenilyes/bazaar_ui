import { Fragment } from "react";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
import Newsletter from "components/newsletter";
// LOCAL CUSTOM COMPONENTS
import Section1 from "../section-1/section-1";
import Section2 from "../section-2/section-2";
import Section3 from "../section-3/section-3";
import Section4 from "../section-4/section-4";
// API FUNCTIONS
import api from "utils/__api__/grocery-3";

export default async function GroceryThreePageView() {
  const offerCards = await api.getOfferCards();
  const allProducts = await api.getAllProducts();
  const mainCarouselData = await api.getMainCarousel();
  const topSailedProducts = await api.getTopSailedProducts();

  return (
    <Fragment>
      {/* TOP HERO CAROUSEL AREA */}
      <Section1 mainCarouselData={mainCarouselData} />

      <Container className="mb-3">
        {/* DISCOUNT OFFERS AREA */}
        <Section2 offers={offerCards} />

        {/* TOP SALES PRODUCTS AREA */}
        <Section3 products={topSailedProducts} />

        {/* OUR ALL PRODUCTS AREA */}
        <Section4 products={allProducts} />
      </Container>

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter image="/assets/images/newsletter/bg-2.png" />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </Fragment>
  );
}
