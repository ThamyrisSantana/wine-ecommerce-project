export interface Params {
  page: number;
  limit: number;
  filter?: string;
  name?: string;
}

export interface Response {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: WineItem[];
}

export interface WineItem {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size: number;
  rating: number;
  avaliations: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
}
