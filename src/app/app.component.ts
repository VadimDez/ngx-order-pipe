import { Component } from "@angular/core";

import { OrderPipe } from "./order-pipe/ngx-order.pipe";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  order: string = "info.name";
  reverse: boolean = false;
  collection: any[] = [
    {
      id: 1,
      info: {
        name: "john",
        number: "555-1212",
        age: 10,
        isAdult: function() {
          return this.age >= 21;
        }
      }
    },
    {
      id: 5,
      info: {
        name: "Mary",
        number: "555-9876",
        age: 19,
        isAdult: function() {
          return this.age >= 21;
        }
      }
    },
    {
      id: 2,
      info: {
        name: "Mike",
        number: "555-4321",
        age: 21,
        isAdult: function() {
          return this.age >= 21;
        }
      }
    },
    {
      id: 3,
      info: {
        name: "Julie",
        number: "555-8765",
        age: 29,
        isAdult: function() {
          return this.age >= 21;
        }
      }
    },
    {
      id: 4,
      info: {
        name: "Adam",
        number: "555-5678",
        age: 35,
        isAdult: function() {
          return this.age >= 21;
        }
      }
    }
  ];

  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   */
  constructor(private orderPipe: OrderPipe) {
    console.log(this.orderPipe.transform(this.collection, this.order));
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
