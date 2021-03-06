import { Component, OnInit } from '@angular/core';
class Item {
  purchase: string;
  done: boolean;
  price: number;
  constructor(purchase: string, price: number) {

    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  text: string;
  price: number;

  items: Item[] =
    [
      { purchase: "Хлеб", done: false, price: 15.9 },
      { purchase: "Масло", done: false, price: 60 },
      { purchase: "Картофель", done: true, price: 22.6 },
      { purchase: "Сыр", done: false, price: 310 }
    ];
  addItem(): void {
    if (this.text == null || this.text.trim() == "" || this.price == null)
      return;
    this.items.push(new Item(this.text, this.price));
  }
}
