import Content from "./content";
// API FUNCTIONS
import api from "utils/__api__/gadget-2";

export default async function Section4() {
  const newArrivalProducts = await api.getNewArrivalProducts();
  return <Content products={newArrivalProducts} />;
}
