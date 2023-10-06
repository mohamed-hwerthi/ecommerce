import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }

  getProductsByCategorys(category: string) {
    return this.httpClient.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }
}
