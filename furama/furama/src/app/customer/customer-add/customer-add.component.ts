import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {IcustomerType} from '../../model/customer/icustomer-type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerTypes: IcustomerType[] = [];
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
  });

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(next => this.customerTypes = next);
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.createCustomer(customer).subscribe(next => {
      this.customerForm.reset();
      this.router.navigateByUrl("/customers")
    });
  }
}
