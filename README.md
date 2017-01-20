# Angular2 Order Pipe

> Order your collection by a field

## Install

```
npm install  ng2-order-pipe --save

```

## Usage

Import `Ng2FOrderPipeModule` to your module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';

import { Ng2FOrderPipeModule } from 'ng2-order-pipe';

@NgModule({
  imports: [BrowserModule, Ng2FOrderPipeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

And use pipe in your component

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'example',
  template: `
    <div>
      <ul>
        <li *ngFor="let item of array | orderBy: order">
          {{ item.name }}
        </li>
      </ul>
    </div>  
  `
})

export class AppComponent {
  array: string[] = [{ name: 'John'} , { name: 'Mary' }, { name: 'Adam' }];
  order: string = 'name';
}
```

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)