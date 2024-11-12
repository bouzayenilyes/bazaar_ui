import { cache } from "react";
import axios from "../../utils/axiosInstance";
import Product from "models/Product.model";
import Category from "models/Category.model";
import products from "data/product-database";

const getCategories = cache(async (): Promise<Category[]> => {
  const response = await axios.get("/api/sales-1/categories");
  return response.data;
});

const getCategoriesTwo = cache(async (): Promise<Category[]> => {
  const response = await axios.get("/api/sales-2/categories");
  return response.data;
});

const getProducts = cache(async (page: number = 1): Promise<Product[]> => {
  const PAGE_SIZE = 28;
  const currentProducts = products.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE,
  );
  // @ts-ignore
  return currentProducts;
});

export default { getCategories, getProducts, getCategoriesTwo };
