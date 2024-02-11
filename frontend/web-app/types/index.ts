export type PagedResult<T> = {
  results: T[];
  pageCount: number;
  pageSize: number;
  totalCount: number;
};

export type Auction = {
  reservePrice: number;
  seller: string;
  winner?: string;
  soldAmount: number;
  currentHighBid: number;
  createdAt: string;
  upDateAt: string;
  auctionEnd: string;
  status: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  imageUrl: string;
  id: string;
};
