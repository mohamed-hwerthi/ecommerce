import { Component, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/services/category/categorys.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductModel } from 'src/models/ProductModel';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  allProducts: ProductModel[] = [];
  allCategorys: String[] = [];

  constructor(
    private productService: ProductsService,
    private categoryService: CategorysService
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategorys();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (res: any) => {
        this.allProducts = res as ProductModel[];
      },
      (err: any) => {
        alert(err.message);
      }
    );
  }
  getAllCategorys() {
    this.categoryService.getAllCategorys().subscribe((res: any) => {
      this.allCategorys = res;
    });
    (err: any) => {
      alert(err.message);
    };
  }

  filterProdcutsWithCategorys(event: any) {
    console.log(event.target.value);
    let value = event.target.value;
    value == 'All'
      ? this.getAllProducts()
      : this.productService.getProductsByCategorys(value).subscribe(
          (res: any) => {
            this.allProducts = res;
          },
          (err) => {
            console.log(err);
          }
        );
  }
}
