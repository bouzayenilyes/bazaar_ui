import Content from "./content";
// API FUNCTIONS
import api from "utils/__api__/furniture-2";

export default async function Section4() {
  const products = await api.getTrendingProducts();
  return <Content products={products} />;
}
