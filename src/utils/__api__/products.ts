import { cache } from "react";
import axios from "../../utils/axiosInstance";
// CUSTOM DATA MODEL
import { SlugParams } from "models/Common";
import Product from "models/Product.model";

// get all product slug
const getSlugs = cache(async (): Promise<SlugParams[]> => {
  const response = await axios.get("/api/products/slug-list");
  return response.data;
});

// get product based on slug
const getProduct = cache(async (slug: string): Promise<Product> => {
  const response = await axios.get("/api/products/slug", { params: { slug } });
  return response.data;
});

// search products
const searchProducts = cache(async (name?: string, category?: string): Promise<string[]> => {
  const response = await axios.get("/api/products/search", {
    params: { name, category }
  });
  return response.data;
});

export default { getSlugs, getProduct, searchProducts };
