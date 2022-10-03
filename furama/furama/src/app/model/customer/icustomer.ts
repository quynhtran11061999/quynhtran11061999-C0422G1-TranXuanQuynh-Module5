import {IcustomerType} from "./icustomer-type";

export interface Icustomer {
  id?:number;
  customerType?: IcustomerType;
  name?:string;
  dateOfBirth?:string;
  gender?: boolean;
  idCard?: string;
  phoneNumber?:string;
  email?:string;
  address?:string;
}
