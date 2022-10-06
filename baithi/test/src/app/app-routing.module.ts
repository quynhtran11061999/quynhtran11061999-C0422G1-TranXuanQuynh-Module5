import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {BenxeComponent} from "./benxe/benxe/benxe.component";
import {BenxeEditComponent} from "./benxe/benxe-edit/benxe-edit.component";
import {BenxeCreateComponent} from "./benxe/benxe-create/benxe-create.component";


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/create', component: CustomerCreateComponent},
  {path: 'customers/update/:id', component: CustomerEditComponent},
  {path:'xe',component:BenxeComponent},
  {path: 'xe/update/:id', component: BenxeEditComponent},
  {path: 'xe/create', component: BenxeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
