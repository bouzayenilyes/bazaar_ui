import { cache } from "react";
import axios from "../../utils/axiosInstance";
import Product from "models/Product.model";

export const getFrequentlyBought = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/frequently-bought-products");
  return response.data;
});

export const getRelatedProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/related-products");
  return response.data;
});
