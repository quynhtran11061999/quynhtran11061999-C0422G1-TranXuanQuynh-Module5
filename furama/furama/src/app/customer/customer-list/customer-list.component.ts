import {Component, OnInit} from '@angular/core';
import {Icustomer} from '../../model/customer/icustomer';
import {CustomerService} from '../../service/customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import Swal from "sweetalert2";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Icustomer[] = [];
  deleteCustomer: Icustomer = null;
  customer1 : Icustomer
  id: number = 0;
  nameDelete: string = "";
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
    this.nameDelete = name;
  }

  deleteModal(id: number) {
    this.customerService.deleteCustomer(id).subscribe(next => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Xóa thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.deleteCustomer = next;
      this.getAll();
    });
  }

  detail(customer : Icustomer){
   this.customer1 = customer;
  }


  search(name: string, email: string) {
    this.customerService.search(name,email).subscribe(next => {
      this.customers = next;
    })
  }
}
