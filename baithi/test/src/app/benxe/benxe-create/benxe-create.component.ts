import {Component, OnInit} from '@angular/core';
import {DiemDi} from "../../../model/diem-di";
import {DiemDen} from "../../../model/diem-den";
import {FormControl, FormGroup} from "@angular/forms";
import {XeService} from "../../../service/xe.service";
import {DiemDiService} from "../../../service/diem-di.service";
import {DiemDenService} from "../../../service/diem-den.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-benxe-create',
  templateUrl: './benxe-create.component.html',
  styleUrls: ['./benxe-create.component.css']
})
export class BenxeCreateComponent implements OnInit {
  diemDi: DiemDi[]
  diemDen: DiemDen[]
  xeForm: FormGroup = new FormGroup({
    id: new FormControl(),
    bienSoXe: new FormControl(),
    loaiXe: new FormControl(),
    tenNhaXe: new FormControl(),
    diemDi: new FormControl(),
    diemDen: new FormControl(),
    soDienThoai: new FormControl(),
    email: new FormControl(),
    gioDi: new FormControl(),
    gioDen: new FormControl()
  })

  constructor(private xeService : XeService,private diemDiService: DiemDiService,private diemDenService: DiemDenService,
             private router: Router) {
  }

  ngOnInit(): void {
    this.diemDiService.getAll().subscribe(next => this.diemDi = next);
    this.diemDenService.getAll().subscribe(next => this.diemDen = next);
  }

  submit(){
    const xe = this.xeForm.value;
    this.xeService.create(xe).subscribe(next => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm mới thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl("/xe")
    })
  }
}
