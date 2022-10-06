import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Xe} from "../model/xe";

@Injectable({
  providedIn: 'root'
})
export class XeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get("http://localhost:8080/xeRest")
  }

  findById(id: number) {
    return this.http.get("http://localhost:8080/xeRest/" + id);
  }

  delete(id: number) {
    return this.http.delete("http://localhost:8080/xeRest/delete/" + id);
  }

  update(xe: Xe){
    return this.http.put("http://localhost:8080/xeRest/update" ,xe);
  }

  create(xe) {
    return this.http.post("http://localhost:8080/xeRest/create", xe);
  }
}
