// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import * as db from "./data";
export const Gadget2Endpoints = (Mock) => {
  Mock.onGet("/api/gadget-2/services").reply(async () => {
    try {
      return [200, db.serviceList];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  const getProducts = (type: string) => db.products.filter((item) => item.for.type === type);
  const bestSellerProducts = getProducts("best-seller");
  const newArrivalProducts = getProducts("new-arrival");

  Mock.onGet("/api/gadget-2/products?tag=best-seller").reply(() => {
    try {
      return [200, bestSellerProducts];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/gadget-2/products?tag=new-arrival").reply(() => {
    try {
      return [200, newArrivalProducts];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/gadget-2/blogs").reply(() => {
    try {
      return [200, db.blogs];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });
}