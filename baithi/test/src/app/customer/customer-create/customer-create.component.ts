import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {CustomerType} from "../../../model/customer-type";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerType: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl()
  })

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(next => this.customerTypes = next);
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.createCustomer(customer).subscribe(next => {
      this.customerForm.reset();
      this.router.navigateByUrl('/customers');
    })
  }
}
