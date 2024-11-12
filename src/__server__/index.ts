import MockAdapter from "axios-mock-adapter";

import { Market1Endpoints } from "./__db__/market-1";
import { Market2Endpoints } from "./__db__/market-2";
import { MedicalEndpoints } from "./__db__/medical";

import { Furniture1Endpoints } from "./__db__/furniture-1";
import { Furniture2Endpoints } from "./__db__/furniture-2";
import { Furniture3Endpoints } from "./__db__/furniture-3";

import { Grocery1Endpoints } from "./__db__/grocery-1";
import { Grocery2Endpoints } from "./__db__/grocery-2";
import { Grocery3Endpoints } from "./__db__/grocery-3";
import { Grocery4Endpoints } from "./__db__/grocery-4";

import { Gadget1Endpoints } from "./__db__/gadget-1";
import { Gadget2Endpoints } from "./__db__/gadget-2";
import { Gadget3Endpoints } from "./__db__/gadget-3";

import { GiftEndpoints } from "./__db__/gift";
import { Health1Endpoints } from "./__db__/health-beauty";
import { RelatedProductsEndpoints } from "./__db__/related-products";

import { Fashion1Endpoints } from "./__db__/fashion-1";
import { Fashion2Endpoints } from "./__db__/fashion-2";
import { FashionEndpoints } from "./__db__/fashion-3";

import { ShopEndpoints } from "./__db__/shop";
import { SalesEndpoints } from "./__db__/sales";
import { UsersEndpoints } from "./__db__/users";
import { TicketsEndpoints } from "./__db__/ticket";
import { VendorEndpoints } from "./__db__/vendor";
import { UserOrders1Endpoints } from "./__db__/orders";
import { UserAddressEndpoints } from "./__db__/address";
import { ProductsEndpoints } from "./__db__/products";
import { AdminDashboardEndpoints } from "./__db__/dashboard";

export const MockEndPoints = (Mock: MockAdapter) => {
  Market1Endpoints(Mock);
  Market2Endpoints(Mock);
  MedicalEndpoints(Mock);

  Furniture1Endpoints(Mock);
  Furniture2Endpoints(Mock);
  Furniture3Endpoints(Mock);

  Grocery1Endpoints(Mock);
  Grocery2Endpoints(Mock);
  Grocery3Endpoints(Mock);
  Grocery4Endpoints(Mock);

  Gadget1Endpoints(Mock);
  Gadget2Endpoints(Mock);
  Gadget3Endpoints(Mock);

  FashionEndpoints(Mock);
  Fashion1Endpoints(Mock);
  Fashion2Endpoints(Mock);

  GiftEndpoints(Mock);
  Health1Endpoints(Mock);

  ShopEndpoints(Mock);
  SalesEndpoints(Mock);
  UsersEndpoints(Mock);
  VendorEndpoints(Mock);
  TicketsEndpoints(Mock);
  ProductsEndpoints(Mock);
  UserAddressEndpoints(Mock);
  UserOrders1Endpoints(Mock);
  AdminDashboardEndpoints(Mock);
  RelatedProductsEndpoints(Mock);

  Mock.onAny().passThrough();
};
