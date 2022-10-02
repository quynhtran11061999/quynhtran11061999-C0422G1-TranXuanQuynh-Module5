import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {FacilityAddComponent} from "./facility/facility-add/facility-add.component";
import {FacilityUpdateComponent} from "./facility/facility-update/facility-update.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerAddComponent} from "./customer/customer-add/customer-add.component";
import {CustomerUpdateComponent} from "./customer/customer-update/customer-update.component";


const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"facilities",component:FacilityListComponent},
  {path:"facilities/create",component: FacilityAddComponent},
  {path:"facilities/update",component: FacilityUpdateComponent},
  {path:"customers",component:CustomerListComponent},
  {path:"customers/create",component: CustomerAddComponent},
  {path:"customers/update",component: CustomerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
