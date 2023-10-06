import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategorysService {
  constructor(private httpClient: HttpClient) {}

  //getting all categories  :
  getAllCategorys() {
    return this.httpClient.get('https://fakestoreapi.com/products/categories');
  }
}
