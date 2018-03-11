
export class Order {

  //產品列表
  products: Array<Product> = []; 
  //總額
  total : number;
  constructor() {
  }
}

//產品
export class Product {
  name:string;
  price :number;
  amount:number;  
  change:boolean;
}