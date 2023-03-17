import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Catagory } from 'src/model/category.model';
import { CategoryService } from 'src/service/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output() clickCategoryEvent = new EventEmitter<string>();

  data: Catagory[]=[];
  constructor(
    private categoryList: CategoryService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.getCatagory();
  }

  getCatagory() {
    this.categoryList.getCategoryList()
    .subscribe((data: Catagory[]) => {
      this.data = data;
    });
  }

  onClickCategory(category: any) {
    this.clickCategoryEvent.emit(category);

    const navigationExtras: NavigationExtras = {
      queryParams: { categoryId: category.id }
    };
    
    this.router.navigate(['/product'], navigationExtras);
  }
}
