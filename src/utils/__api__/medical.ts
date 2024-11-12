import { cache } from "react";
import axios from "../../utils/axiosInstance";
// CUSTOM DATA MODELS
import Blog from "models/Blog.model";
import Product from "models/Product.model";
import Service from "models/Service.model";

const getFeaturedProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/medical/products?tag=featured");
  return response.data;
});

const getBestSellerProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/medical/products?tag=best");
  return response.data;
});

const getTestimonials = cache(async (): Promise<any[]> => {
  const response = await axios.get("/api/medical/testimonials");
  return response.data;
});

const getServices = cache(async (): Promise<Service[]> => {
  const response = await axios.get("/api/medical/services");
  return response.data;
});

const getBlogs = cache(async (): Promise<Blog[]> => {
  const response = await axios.get("/api/medical/blogs");
  return response.data;
});

export default {
  getFeaturedProducts,
  getBestSellerProducts,
  getTestimonials,
  getServices,
  getBlogs,
};
