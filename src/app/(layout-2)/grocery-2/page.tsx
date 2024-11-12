import { Metadata } from "next";
import { GroceryTwoPageView } from "pages-sections/grocery-2/page-view";

export const metadata: Metadata = {
  title: "Grocery 2 - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

export default async function GroceryTwo() {
  return <GroceryTwoPageView />;
}
