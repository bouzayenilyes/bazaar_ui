// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import MockAdapter from "axios-mock-adapter";
import capitalize from "lodash/capitalize";
import shuffle from "lodash/shuffle";
import * as db from "./data";

export const Grocery4Endpoints = (Mock: MockAdapter) => {
  Mock.onGet("/api/grocery-4/stories").reply(async () => {
    try {
      return [200, db.stories];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/grocery-4/products").reply(async (config) => {
    try {
      return [200, db.products];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/grocery-4/products-by-slug").reply(async (config) => {
    try {
      return [200, shuffle(db.products)];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/grocery-4/categories").reply(async () => {
    try {
      return [200, db.categories];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/grocery-4/breadcrumb").reply(async (config) => {
    try {
      if (!config.params.slug) return [200, null];

      const formatted = config.params.slug
        .split("-")
        .map((item: string) => capitalize(item))
        .join(" ");

      return [200, `Grocery / Products / ${formatted}`];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });
};
