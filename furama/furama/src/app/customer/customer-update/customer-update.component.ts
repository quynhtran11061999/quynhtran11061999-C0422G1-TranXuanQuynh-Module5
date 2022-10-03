import { Component, OnInit } from '@angular/core';
import {Icustomer} from '../../model/customer/icustomer';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IcustomerType} from '../../model/customer/icustomer-type';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerTypes: IcustomerType[];
  customer: Icustomer = {};
  customerForm: FormGroup;
  constructor(private iCustomerService: CustomerService,private activatedRoute: ActivatedRoute,
              private router: Router,private customerTypeService: CustomerTypeService) {
    this.activatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
      const id = paramMap.get('id')
      this.iCustomerService.findByIdCustomer(Number(id)).subscribe(next => {
        this.customer = next;

        this.customerForm = new FormGroup({
          id: new FormControl(this.customer.id),
          customerType: new FormControl(this.customer.customerType.id),
          name: new FormControl(this.customer.name),
          dateOfBirth: new FormControl(this.customer.dateOfBirth),
          gender: new FormControl(this.customer.gender),
          idCard: new FormControl(this.customer.idCard),
          phoneNumber: new FormControl(this.customer.phoneNumber),
          email: new FormControl(this.customer.email),
          address: new FormControl(this.customer.address)
        });
      })
    })
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(next => this.customerTypes = next);
  }
  submit() {
    const customer = this.customerForm.value;
    this.customerTypeService.findCustomerTypeById(this.customerForm.value.customerType).subscribe(customerType => {
      customer.customerType = customerType;
      console.log(customer);
      this.iCustomerService.updateCustomer(customer).subscribe(next => {
        this.customerForm.reset();
        this.router.navigateByUrl("/customers");
      });
    });
  }
}
