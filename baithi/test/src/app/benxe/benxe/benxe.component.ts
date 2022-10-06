import {Component, OnInit} from '@angular/core';
import {Xe} from "../../../model/xe";
import {XeService} from "../../../service/xe.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-benxe',
  templateUrl: './benxe.component.html',
  styleUrls: ['./benxe.component.css']
})
export class BenxeComponent implements OnInit {
  xes : Xe[] = [];
  deleteXe: Xe = null;
  id: number = 0;
  bienSoXe: string = "";

  constructor(private xeService : XeService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.xeService.getAll().subscribe(next => {
      this.xes = next;
    })
  }
  delete(id: number, bienSoXe: string) {
    this.id = id;
    this.bienSoXe = bienSoXe;
  }

  deleteModal(id: number) {
    this.xeService.delete(id).subscribe(next => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Xóa thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.deleteXe = next;
      this.getAll();
    });
  }
}
