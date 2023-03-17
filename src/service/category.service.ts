import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catagory } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'http://cuoikynhom14.somee.com/api';
  httpOptions = {
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  }

  constructor(private httpClient: HttpClient) { }


  //http://cuoikynhom14.somee.com/api/Category/GetCategoryList
  getCategoryList(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + '/Category/GetCategoryList');
  }

  getById(id: any): Observable<Catagory> {
    return this.httpClient.get<Catagory>(this.apiUrl
      + '/Category/GetProductCategory/id'
      + `?id=${id}`
    );
  }
}