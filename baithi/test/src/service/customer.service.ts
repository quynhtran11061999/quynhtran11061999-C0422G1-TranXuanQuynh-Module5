import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get("http://localhost:3000/customer")
  }

  createCustomer(customer) {
    return this.http.post("http://localhost:3000/customer", customer);
  }

  findByIdCustomer(id: number) {
    return this.http.get("http://localhost:3000/customer/" + id);
  }

  deleteCustomer(id: number) {
    return this.http.delete("http://localhost:3000/customer/" + id);
  }

  search(name: string, email: string): Observable<any>{
    return this.http.get("http://localhost:3000/customer?name_like="+ name + "&email_like=" +email)
  }
}
