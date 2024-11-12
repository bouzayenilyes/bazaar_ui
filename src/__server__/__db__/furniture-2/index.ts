// import Mock from "../../mock";
import * as db from "./data";
export const Furniture2Endpoints = (Mock) => {

  // get new products
  const newArrivalProducts = db.products.filter((item) => item.for.type === "new-arrival");

  Mock.onGet("/api/furniture-2/products?tag=new-arrival").reply(() => {
    try {
      return [200, newArrivalProducts];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  // get trending products
  const trendingProducts = db.products.filter((item) => item.for.type === "trending");

  Mock.onGet("/api/furniture-2/products?tag=trending").reply(() => {
    try {
      return [200, trendingProducts];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/furniture-2/testimonial").reply(() => {
    try {
      return [200, db.testimonialList];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/furniture-2/services").reply(() => {
    try {
      return [200, db.serviceList];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });
}