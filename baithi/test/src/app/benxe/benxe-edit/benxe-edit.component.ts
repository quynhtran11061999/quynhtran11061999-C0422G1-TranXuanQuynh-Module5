import {Component, OnInit} from '@angular/core';
import {Xe} from "../../../model/xe";
import {DiemDi} from "../../../model/diem-di";
import {DiemDen} from "../../../model/diem-den";
import {FormControl, FormGroup} from "@angular/forms";
import {XeService} from "../../../service/xe.service";
import {DiemDiService} from "../../../service/diem-di.service";
import {DiemDenService} from "../../../service/diem-den.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-benxe-edit',
  templateUrl: './benxe-edit.component.html',
  styleUrls: ['./benxe-edit.component.css']
})
export class BenxeEditComponent implements OnInit {
  xe: Xe = {};
  diemDi: DiemDi[];
  diemDen: DiemDen[];
  xeForm: FormGroup;

  constructor(private xeService: XeService, private diemDiService: DiemDiService,
              private diemDenService: DiemDenService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id')
      this.xeService.findById(Number(id)).subscribe(next => {
        this.xe = next;

        this.xeForm = new FormGroup({
          id: new FormControl(this.xe.id),
          bienSoXe: new FormControl(this.xe.bienSoXe),
          loaiXe: new FormControl(this.xe.loaiXe),
          tenNhaXe: new FormControl(this.xe.tenNhaXe),
          diemDi: new FormControl(this.xe.diemDi.id),
          diemDen: new FormControl(this.xe.diemDen.id),
          soDienThoai: new FormControl(this.xe.soDienThoai),
          email: new FormControl(this.xe.email),
          gioDi: new FormControl(this.xe.gioDi),
          gioDen: new FormControl(this.xe.gioDen)
        });
      })
    })
  }

  ngOnInit(): void {
    this.diemDiService.getAll().subscribe(next => this.diemDi = next);
    this.diemDenService.getAll().subscribe(next => this.diemDen = next);
  }

  submit() {
    const xe = this.xeForm.value;
      this.xeService.update(xe).subscribe(next => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sửa thông tin thành công',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl("/xe");
      });
  }
}
