import { cache } from "react";
import axios from "../../utils/axiosInstance";
// CUSTOM DATA MODELS
import Blog from "models/Blog.model";
import Product from "models/Product.model";
import Service from "models/Service.model";

const getBestSellerProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/gadget-2/products?tag=best-seller");
  return response.data;
});

const getNewArrivalProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/gadget-2/products?tag=new-arrival");
  return response.data;
});

const getServices = cache(async (): Promise<Service[]> => {
  const response = await axios.get("/api/gadget-2/services");
  return response.data;
});

const getBlogs = cache(async (): Promise<Blog[]> => {
  const response = await axios.get("/api/gadget-2/blogs");
  return response.data;
});

export default { getBestSellerProducts, getNewArrivalProducts, getServices, getBlogs };
