import { Component } from '@angular/core';
import { Order,Product } from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent{
  // 訂單
  public order: Order = new Order();
  // 每筆產品
  public product:Product = new Product();
  public isSend : boolean = false;
  constructor() { 
    this.product = new Product();
    this.order = new Order();
  }
  
  addProduct(){
      this.product.change=false;
      this.order.products.push(this.product);
      this.countTotal();
      //重置
      this.product = new Product();
  }
  
  countTotal(){
    this.order.total=0;
    for (let p of this.order.products) {
      this.order.total += p.price*p.amount;      
    }
  }

  del(index){
    this.order.products.splice(index,1);
    this.countTotal();
  }
 
  onChange(index,newValue){
    this.order.products[index].amount=newValue;
    this.order.products[index].change=!this.order.products[index].change;
    this.countTotal();
  }
}
