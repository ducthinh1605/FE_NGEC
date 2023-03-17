import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../model/product.model';
import { Catagory } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://cuoikynhom14.somee.com/api';
  httpOptions = {
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  //http://cuoikynhom14.somee.com/api/Product/GetProducts?category=electronics&subcategory=mobiles&count=1000
  getAll(categoryParams: any) {
    return this.httpClient.get(this.apiUrl
      + '/Product/GetProducts'
      + `?category=${categoryParams?.category}&subcategory=${categoryParams?.subCategory}&count=1000`
    );
  }

  getById(id: string) {
    return this.httpClient.get(this.apiUrl
      + `/Product/GetProduct/${id}`
    );
  }
}