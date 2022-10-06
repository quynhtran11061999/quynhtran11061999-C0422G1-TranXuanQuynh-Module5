import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {Customer} from "../../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = []
  deleteCustomer: Customer = null;
  id: number = 0;
  nameDelete: string = "";

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(next => {
      this.customers = next;
    })
  }

  delete(id: number, name: string) {
    this.id = id;
    this.nameDelete = name;
  }

  deleteModal(id: number) {
    this.customerService.deleteCustomer(id).subscribe(next => {
      this.deleteCustomer = next;
      this.getAll();
    });
  }

  search(name: string, email: string) {
    this.customerService.search(name,email).subscribe(next => {
      this.customers = next;
    })
  }
}
