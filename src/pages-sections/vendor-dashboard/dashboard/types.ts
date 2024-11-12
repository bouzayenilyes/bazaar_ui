export interface Card {
  id: number;
  title: string;
  color: string;
  amount1: string;
  amount2: number;
  status?: string;
  percentage: string;
}

export interface RecentPurchased {
  id: string;
  amount: number;
  payment: string;
  product: string;
}

export interface StockOut {
  stock: string;
  amount: number;
  product: string;
}
