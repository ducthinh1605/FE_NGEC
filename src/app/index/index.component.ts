import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Catagory } from 'src/model/category.model';
import { Product } from 'src/model/product.model';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  isProductSession: boolean = false;
  category: any;
  data: Catagory[]=[];

  products: Product[] = [];

  @Output() clickCategoryEvent = new EventEmitter<string>();

  constructor(
    private categoryList: CategoryService,
    private productService: ProductService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
    // this.getCatagory();
    // this.getProducts();
  }

  // getProducts() {
  //   const categoryParam: {} = {
  //     category: 'electronics',
  //     subCategory: 'mobiles'
  //   }

  //   this.productService.getAll(categoryParam).subscribe((data) => {
  //     this.products = data as Product[];
  //   })
  // }

  // getCatagory() {
  //   this.categoryList.getCategoryList()
  //   .subscribe((data: Catagory[]) => {
  //     this.data = data;
  //   });
  // }

  onCategoryChange(value: any) {
    this.category = value;
    this.isProductSession = true;
  }
  

}
