import { cache } from "react";
import axios from "../../utils/axiosInstance";
import Blog from "models/Blog.model";
import Brand from "models/Brand.model";
import Product from "models/Product.model";
import Service from "models/Service.model";
import Category from "models/Category.model";
import MainCarouselItem from "models/Market-1.model";

const getProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/fashion-shop-2/products");
  return response.data;
});

const getFeatureProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/fashion-shop-2/products?tag=feature");
  return response.data;
});

const getSaleProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/fashion-shop-2/products?tag=sale");
  return response.data;
});

const getPopularProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/fashion-shop-2/products?tag=popular");
  return response.data;
});

const getLatestProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/fashion-shop-2/products?tag=latest");
  return response.data;
});

const getBestWeekProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get(
    "/api/fashion-shop-2/products?tag=best-week",
  );
  return response.data;
});

const getBlogs = cache(async (): Promise<Blog[]> => {
  const response = await axios.get("/api/fashion-shop-2/blogs");
  return response.data;
});

const getServices = cache(async (): Promise<Service[]> => {
  const response = await axios.get("/api/fashion-shop-2/service");
  return response.data;
});

const getCategories = cache(async (): Promise<Category[]> => {
  const response = await axios.get("/api/fashion-shop-2/category");
  return response.data;
});

const getMainCarouselData = cache(async (): Promise<MainCarouselItem[]> => {
  const response = await axios.get("/api/fashion-shop-2/main-carousel");
  return response.data;
});

const getBrands = cache(async (): Promise<Brand[]> => {
  const response = await axios.get("/api/fashion-shop-2/brands");
  return response.data;
});

export default {
  getBlogs,
  getBrands,
  getProducts,
  getServices,
  getCategories,
  getSaleProducts,
  getLatestProducts,
  getPopularProducts,
  getFeatureProducts,
  getBestWeekProducts,
  getMainCarouselData,
};
