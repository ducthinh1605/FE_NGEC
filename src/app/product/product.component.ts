import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Catagory } from 'src/model/category.model';
import { Product } from 'src/model/product.model';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  categoryId: string = '';
  categoryData: any = {};

  rangeValue: number = 0;
  minValue: number = 0;
  maxValue: number = 0;

  paginationLength: number = 0;

  products: Product[] = [];
  productsOriginal: Product[] = [];
  productsPage: Product[] = [];

  pageCurrent: number = 1;
  productArrayFilter: number = 6;
  totalItems: number = 0;

  currentUser: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.categoryService.getById(this.categoryId)
      .subscribe((data: Catagory) => {
        this.categoryData = data;
        this.getProducts();
      });
    });
  }

  // onRangeChange() {
  //   this.maxValue = this.rangeValue;
  // }

  // onMaxChange() {
  //   this.rangeValue = this.maxValue;
  // }

  // filterPrice() {
  //   this.products = this.productsOriginal.filter((product: any) => product.price >= this.minValue && product.price <= this.maxValue);
  //   this.totalItems = this.products.length;
  // }

  // clearFilter() {
  //   this.products = this.productsOriginal;
  //   this.totalItems = this.products.length;
  //   this.rangeValue = 0;
  //   this.maxValue = 0;
  //   this.minValue = 0;
  // }

  getProducts() {
    const categoryParam: {} = {
      category: this.categoryData.category,
      subCategory: this.categoryData.subCategory
    }

    this.productService.getByCategory(categoryParam).subscribe((data) => {
      this.products = data as Product[];
      this.productsOriginal = this.products;
      this.totalItems = this.products.length;
    })
  }

  arrayFromNumber(num: number) {
    return Array.from({length: num}, (_, i) => i);
  }

  formatTitle(title: any): string {
    return title?.slice(0, 32) + '...';
  }

  navigateDetails(product: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: { productId: product.id }
    };

    this.router.navigate(['/single'], navigationExtras);
  }

}

