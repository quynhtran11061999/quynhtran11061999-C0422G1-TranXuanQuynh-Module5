import {Component, OnInit} from '@angular/core';
import {Icustomer} from '../../model/customer/icustomer';
import {CustomerService} from '../../service/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Icustomer[] = [];
  deleteCustomer: Icustomer = null;
  id: number = 0;
  name: string = null;
  totalRecords : number;
  page: number = 1;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(next => {
      this.customers = next;
      this.totalRecords = next.length;
    });
  }

  delete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  deleteModal(id: number) {
    this.customerService.deleteCustomer(id).subscribe(next => {
      this.deleteCustomer = next;
      this.getAll();
    });
  }
}
