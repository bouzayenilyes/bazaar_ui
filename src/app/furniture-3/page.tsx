import type { Metadata } from "next";
// PAGE VIEW COMPONENT
import FurnitureThreePageView from "pages-sections/furniture-3/page-view";

export const metadata: Metadata = {
  title: "Furniture 3 - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

export default function FurnitureThree() {
  return <FurnitureThreePageView />;
}
