import { cache } from "react";
import axios from "../../utils/axiosInstance";
import Product from "models/Product.model";
import Service from "models/Service.model";

const getGrocery1Navigation = cache(async () => {
  const response = await axios.get("/api/grocery-1/navigation");
  return response.data;
});

const getPopularProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-1/products?tag=popular");
  return response.data;
});

const getTrendingProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-1/products?tag=trending");
  return response.data;
});

const getProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-1/products");
  return response.data;
});

const getServices = cache(async (): Promise<Service[]> => {
  const response = await axios.get("/api/grocery-1/services");
  return response.data;
});

export default {
  getServices,
  getProducts,
  getPopularProducts,
  getTrendingProducts,
  getGrocery1Navigation,
};
