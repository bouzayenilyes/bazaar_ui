import { cache } from "react";
import axios from "../../utils/axiosInstance";
// CUSTOM DATA MODEL
import Shop from "models/Shop.model";
import { SlugParams } from "models/Common";

export const getShopList = cache(async (): Promise<Shop[]> => {
  const response = await axios.get("/api/shops");
  return response.data;
});

export const getSlugs = cache(async (): Promise<SlugParams[]> => {
  const response = await axios.get("/api/shops/slugs");
  return response.data;
});

export const getProductsBySlug = cache(async (slug: string): Promise<Shop> => {
  const response = await axios.get("/api/shops/single", { params: { slug } });
  return response.data;
});

export default { getShopList, getSlugs, getProductsBySlug };
