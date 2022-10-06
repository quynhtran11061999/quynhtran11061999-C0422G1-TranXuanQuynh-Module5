import {DiemDen} from "./diem-den";
import {DiemDi} from "./diem-di";

export interface Xe {
  id? :number;
  bienSoXe? : string;
  loaiXe?:string;
  tenNhaXe?: string;
  diemDi? : DiemDi;
  diemDen? : DiemDen;
  soDienThoai? :string;
  email? :string;
  gioDi? :string;
  gioDen? :string;
}
