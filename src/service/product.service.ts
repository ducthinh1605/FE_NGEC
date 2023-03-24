import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catagory } from 'src/model/category.model';
import { Product } from 'src/model/product.model';

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

  getTotal() {
    return this.httpClient.get(this.apiUrl + '/Product/TotalOfProducts');
  }

  add(product: any) {
    return this.httpClient.post(this.apiUrl
      + `/Product/InsertProduct`
      , product
    )
  }

  update(product: any) {
    return this.httpClient.put(this.apiUrl
      + `/Product/UpdateProduct`
      , product
    )
  }

  delete(id: string) {
    return this.httpClient.delete(this.apiUrl
      + `/Product/DelteProduct/${id}`
    )
  }

  getByCategory(categoryParams: any) {
    return this.httpClient.get(this.apiUrl
      + '/Product/GetProducts'
      + `?category=${categoryParams?.category}&subcategory=${categoryParams?.subCategory}&count=10000`
    );
  }

  get() {
    return this.httpClient.get(this.apiUrl
      + '/Product/GetProductsByQuantity/1000000'
    );
  }

  getById(id: string) {
    console.log("🤜 ~ id:", id)
    return this.httpClient.get(this.apiUrl
      + `/Product/GetProduct/${id}`
    );
  }
}