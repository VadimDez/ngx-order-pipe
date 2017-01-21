import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  order: string = 'name';
  reverse: boolean = false;
  collection: any[] = [
    {
      name: 'John',
      number: '555-1212',
      age: 10
    },{
      name: 'Mary',
      number: '555-9876',
      age: 19
    },{
      name: 'Mike',
      number: '555-4321',
      age: 21
    },{
      name: 'Julie',
      number: '555-8765',
      age: 29
    },{
      name: 'Adam',
      number: '555-5678',
      age: 35
    },
  ];

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
