import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {IcustomerType} from '../../model/customer/icustomer-type';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerTypes: IcustomerType[] = [];
  submitter = false;
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerType: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]+')]),
    dateOfBirth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^((090)|(091)|(\\\\\\\\(84\\\\\\\\)\\\\\\\\+90)|(\\\\\\\\(84\\\\\\\\)\\\\\\\\+91))[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required])
  });

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(next => this.customerTypes = next);
  }

  submit() {
    this.submitter = true;
    const customer = this.customerForm.value;
    if (this.customerForm.valid) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm mới thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.customerService.createCustomer(customer).subscribe(next => {
        this.customerForm.reset();
        this.router.navigateByUrl('/customers');
      });
    }

  }
}
