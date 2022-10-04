import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Icustomer} from '../model/customer/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get("http://localhost:3000/customer")
  }
  createCustomer(customer){
    return this.http.post("http://localhost:3000/customer",customer);
  }

  findByIdCustomer(id: number){
    return this.http.get("http://localhost:3000/customer/"+id);
  }

  updateCustomer(customer: Icustomer){
    return this.http.put("http://localhost:3000/customer/" + customer.id,customer);
  }

  deleteCustomer(id: number){
    return this.http.delete("http://localhost:3000/customer/"+id);
  }

  search(name: string, email: string): Observable<any>{
    return this.http.get("http://localhost:3000/customer?name_like="+ name + "&email_like=" +email)
  }
}
