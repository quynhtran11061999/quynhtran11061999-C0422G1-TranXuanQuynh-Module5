import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {};
  productForm: FormGroup;

  constructor(private iProductService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id')
      this.iProductService.findById(Number(id)).subscribe(next => {
        this.product = next;

        this.productForm = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name),
          price: new FormControl(this.product.price),
          description: new FormControl(this.product.description),
        });
      })
    });


  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.iProductService.updateProduct(product).subscribe(next => {
      this.productForm.reset();
      this.router.parseUrl("/product/list");
    });
  }
}
