// import Mock from "../../mock";
import * as db from "./data";

// get featured products
export const MedicalEndpoints = (Mock) => {
  const featuredProducts = db.products.filter((item) => item.for.type === "featured");

  Mock.onGet("/api/medical/products?tag=featured").reply(() => {
    try {
      return [200, featuredProducts];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  // get best seller products
  const bestSellerProducts = db.products.filter((item) => item.for.type === "best");

  Mock.onGet("/api/medical/products?tag=best").reply(() => {
    try {
      return [200, bestSellerProducts];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/medical/services").reply(() => {
    try {
      return [200, db.serviceList];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/medical/blogs").reply(() => {
    try {
      return [200, db.blogs];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/medical/testimonials").reply(() => {
    try {
      return [200, db.testimonialList];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });
}