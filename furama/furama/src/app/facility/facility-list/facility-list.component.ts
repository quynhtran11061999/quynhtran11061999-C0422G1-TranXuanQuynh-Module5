import { Component, OnInit } from '@angular/core';
import {IFacility} from "../../../model/ifacility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities:IFacility[]=[{id:1,name:"Villa Beach Front",area:25000,cost:1000000,maxPeople:10,standardRoom:"vip",
    descriptionOtherConvenience:"có hồ bơi",poolArea:500,numberOfFloors:4,facilityFree:"",facilityType:{id:1,name:"year"}
    ,rentTypeId:{id:1,name:"Villa"}},{id:2,name:"House Princess 01",area:25000,cost:1000000,maxPeople:10,standardRoom:"vip",
    descriptionOtherConvenience:"có hồ bơi",poolArea:500,numberOfFloors:4,facilityFree:"",facilityType:{id:1,name:"year"}
    ,rentTypeId:{id:1,name:"Villa"}},{id:3,name:"Room Twin 01",area:25000,cost:1000000,maxPeople:10,standardRoom:"vip",
    descriptionOtherConvenience:"có hồ bơi",poolArea:500,numberOfFloors:4,facilityFree:"",facilityType:{id:1,name:"year"}
    ,rentTypeId:{id:1,name:"Villa"}},{id:4,name:"House Princess 02",area:25000,cost:1000000,maxPeople:10,standardRoom:"vip",
    descriptionOtherConvenience:"có hồ bơi",poolArea:500,numberOfFloors:4,facilityFree:"",facilityType:{id:1,name:"year"}
    ,rentTypeId:{id:1,name:"Villa"}}];
  constructor() { }

  ngOnInit(): void {
  }

}
