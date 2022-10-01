import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = [{
  //   id: 1,
  //   name: 'IPhone 12',
  //   price: 2400000,
  //   description: 'New'
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  //   price: 1560000,
  //   description: 'Like new'
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  //   price: 968000,
  //   description: '97%'
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  //   price: 7540000,
  //   description: '98%'
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  //   price: 1895000,
  //   description: 'Like new'
  // }];

  constructor(private http: HttpClient) {
  }

  getAll():Observable<any>{
    return this.http.get<any>("http://localhost:3000/product");
  }

  saveProduct(product) {
    return this.http.post("http://localhost:3000/product",product);
  }
  //
  updateProduct(product: Product) {
    return this.http.put("http://localhost:3000/product/" + product.id,product);
    // for (let i = 0; i <this.products.length ; i++) {
    //   if (product.id ==this.products[i].id){
    //     this.products.splice(i,1,product);
    //   }
    // }
  }
  //
  findById(id: number) {
    // for (let i = 0; i < this.products.length; i++) {
    //   if (id == this.products[i].id) {
    //     return this.products[i];
    //   }
    // }
    return this.http.get("http://localhost:3000/product/"+ id);
  }
  //
  deleteProduct(product:Product){
    return this.http.delete("http://localhost:3000/product/"+product.id)
    // for (let i = 0; i <this.products.length ; i++) {
    //   if (product.id==this.products[i].id){
    //     this.products.splice(i,1)
    //   }
    // }
  }
}
