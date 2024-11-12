export interface ProductFilters {
  brand: string[];
  color: string[];
  sales: string[];
  price: number[];
  rating: number;
  //   category: string[];
}

export type ProductFilterKeys = keyof ProductFilters;
export type ProductFilterValues = ProductFilters[ProductFilterKeys];
