export interface IProduct {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface IProductProps {
  products: IProduct[];
}
