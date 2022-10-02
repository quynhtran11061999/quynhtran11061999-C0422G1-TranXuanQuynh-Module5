import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityAddComponent } from './facility/facility-add/facility-add.component';
import { FacilityUpdateComponent } from './facility/facility-update/facility-update.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FacilityListComponent,
    FacilityAddComponent,
    FacilityUpdateComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
