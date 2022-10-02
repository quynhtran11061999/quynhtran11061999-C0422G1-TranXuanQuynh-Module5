import {Component, OnInit} from '@angular/core';
import {IFacility} from "../../../model/ifacility";
import {Icustomer} from "../../../model/customer/icustomer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Icustomer[] = [];

  constructor(private customerService : CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.customerService.getAll().subscribe(next =>{
      this.customers = next;
    });
  }
}
