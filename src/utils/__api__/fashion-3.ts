import { cache } from "react";
import axios from "../../utils/axiosInstance";
// CUSTOM DATA MODELS
import Blog from "models/Blog.model";
import Product from "models/Product.model";
import Service from "models/Service.model";
import { MainCarouselItem } from "models/Market-2.model";
import Brand from "models/Brand.model";

const getProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/fashion-3/products?tag=feature");
  return response.data;
});

const getBestProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/fashion-3/products?tag=best");
  return response.data;
});

const getMainCarouselData = cache(async (): Promise<MainCarouselItem[]> => {
  const response = await axios.get("/api/fashion-3/main-carousel");
  return response.data;
});

const getServices = cache(async (): Promise<Service[]> => {
  const response = await axios.get("/api/fashion-3/services");
  return response.data;
});

const getBlogs = cache(async (): Promise<Blog[]> => {
  const response = await axios.get("/api/fashion-3/blogs");
  return response.data;
});

const getBrands = cache(async (): Promise<Brand[]> => {
  const response = await axios.get("/api/fashion-3/brands");
  return response.data;
});

export default {
  getProducts,
  getBestProducts,
  getMainCarouselData,
  getServices,
  getBlogs,
  getBrands,
};
