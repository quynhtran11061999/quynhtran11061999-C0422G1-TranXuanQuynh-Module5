import {Component, OnInit} from '@angular/core';
import {IFacility} from "../../../model/ifacility";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: IFacility[] = [];

  constructor(private facilityService: FacilityService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(next => {
      this.facilities = next;
    })
  }
}
