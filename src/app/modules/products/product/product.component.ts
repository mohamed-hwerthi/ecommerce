import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/models/ProductModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() product!: ProductModel;
  quantityDisplayed: boolean = false;
  quantity: number = 1;

  addToCart() {
    this.quantityDisplayed = true;
  }
  add() {
    this.quantityDisplayed = !this.quantityDisplayed;
    console.log(this.quantity);
    console.log(this.product);
  }
}
