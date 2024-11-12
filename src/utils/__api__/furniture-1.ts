import { cache } from "react";
import axios from "../../utils/axiosInstance";
// CUSTOM DATA MODELS
import Product from "models/Product.model";
import CategoryNavList from "models/CategoryNavList.model";
import { FurnitureCarouselItem } from "models/Carousel.model";

const getTopNewProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/furniture-1/products?tag=new");
  return response.data;
});

const getTopSellingProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/furniture-1/products?tag=top-selling");
  return response.data;
});

const getFurnitureProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/furniture-1/all-products");
  return response.data;
});

const getFurnitureShopNavList = cache(async (): Promise<CategoryNavList[]> => {
  const response = await axios.get("/api/furniture-1/navigation");
  return response.data;
});

const getMainCarouselData = cache(async (): Promise<FurnitureCarouselItem[]> => {
  const response = await axios.get("/api/furniture-1/main-carousel");
  return response.data;
});

export default {
  getTopNewProducts,
  getMainCarouselData,
  getFurnitureProducts,
  getTopSellingProducts,
  getFurnitureShopNavList,
};
