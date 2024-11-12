import { Metadata } from "next";
import MedicalPageView from "pages-sections/medical/page-view";

export const metadata: Metadata = {
  title: "Medical - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

export default function MedicalShop() {
  return <MedicalPageView />;
}
