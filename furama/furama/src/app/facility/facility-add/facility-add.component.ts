import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';


@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required, Validators.min(15)]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    descriptionOtherConvenience: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.min(1)]),
    numberOfFloors: new FormControl('', [Validators.required, Validators.min(1)]),
    facilityFree: new FormControl('', [Validators.required]),
    rentTypeId: new FormControl(''),
    facilityType: new FormControl('')
  });
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
