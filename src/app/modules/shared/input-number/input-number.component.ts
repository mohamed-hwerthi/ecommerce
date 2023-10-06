import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
})
export class InputNumberComponent implements OnInit {
  ngOnInit(): void {}
  @Input() quantityDisplayed!: boolean;

  @Output() quantityDisplayed2 = new EventEmitter<boolean>();
  add() {
    this.quantityDisplayed2.emit(false);
  }
}
