import { cache } from "react";
import axios from "../axiosInstance";
// CUSTOM DATA MODEL
import Product from "models/Product.model";
import { Category } from "models/Common";

const getAllProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/furniture-3/products");
  return response.data;
});

const getAllProductsBySlug = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/furniture-3/products-by-slug");
  return response.data;
});

const getCategories = cache(async (): Promise<Category[]> => {
  const response = await axios.get("/api/furniture-3/categories");
  return response.data;
});

const getBreadcrumb = cache(async (slug?: string): Promise<string> => {
  const response = await axios.get("/api/furniture-3/breadcrumb", { params: { slug } });
  return response.data;
});

export default { getAllProducts, getCategories, getBreadcrumb, getAllProductsBySlug };
