import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiemDenService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get("http://localhost:8080/xeRest/diaDiem")
  }
  findDiemDenById(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/xeRest/diaDiem/" + id);
  }
}
