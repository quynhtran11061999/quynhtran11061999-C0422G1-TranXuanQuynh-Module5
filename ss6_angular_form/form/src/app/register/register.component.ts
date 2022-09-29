import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFrom: FormGroup;
  submitter= false;

  constructor() {
    this.registerFrom = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),
    password: new FormControl("",[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl("",[Validators.required,Validators.minLength(6)]),
    country: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required,Validators.min(18)]),
    gender: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required,Validators.pattern("/^\\+84\\d{9,10}$/")])
  }, {validators: this.checkPasswords});
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { check: true }
  }

  ngOnInit(): void {
  }

  createRegister() {
    this.submitter = true
    console.log(this.registerFrom)
  }
}
