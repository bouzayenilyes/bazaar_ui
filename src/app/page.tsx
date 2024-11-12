import { Metadata } from "next";
import IndexPageView from "pages-sections/landing/page-view";

export const metadata: Metadata = {
  title: "Bazaar - Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://bazaarui.vercel.app" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

export default function IndexPage() {
  return <IndexPageView />;
}
