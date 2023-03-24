import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/model/product.model';
import { ProductService } from 'src/service/product.service';


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent {
  productId: string = '';
  product: any;

constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("🤜 ~ params:", params)
      this.productId = params['productId'];
      this.productService.getById(this.productId).subscribe((data) => {
        this.product = data as Product;
      })
    });
  }
}
