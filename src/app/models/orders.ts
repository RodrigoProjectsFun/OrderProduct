export class Product {
    id!: string;
    name!: string;
    unitPrice!: number;
    quantity!: number;
  }
  
  export interface order {
    id?: string;
    orderNumber: string;
    date: string;
    products: Product[];
    productCount: number;
    finalPrice: number;
  }
  