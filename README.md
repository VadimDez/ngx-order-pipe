# Angular 4 Order Pipe [![Build Status](https://travis-ci.org/VadimDez/ngx-order-pipe.svg?branch=master)](https://travis-ci.org/VadimDez/ngx-order-pipe) ![https://www.npmjs.com/package/ng2-order-pipe](https://img.shields.io/npm/dm/ng2-order-pipe.svg?style=flat) ![https://www.npmjs.com/package/ngx-order-pipe](https://img.shields.io/npm/dm/ngx-order-pipe.svg?style=flat)

> Order your collection by a field

<img src="https://cloud.githubusercontent.com/assets/3748453/22164327/08764608-df57-11e6-9c90-075aeca26fd6.gif" width="300">

### Demo page
[https://vadimdez.github.io/ngx-order-pipe/](https://vadimdez.github.io/ngx-order-pipe/)

## Install

```
npm install  ngx-order-pipe --save
```

## Usage

In case you're using `systemjs` - see configuration [here](https://github.com/VadimDez/ngx-order-pipe/blob/master/SYSTEMJS.md).

##### In HTML template

```html
{{ collection | orderBy: expression : reverse }}
```

### Arguments

| Param | Type | Details |
| --- | --- | --- |
| collection | `array` or `object` | The collection or object to sort |
| expression  | `string` | The key to determinate order |
| reverse *(optional)* | `boolean`| Reverse sorting order |

Import `OrderModule` to your module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';

import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [BrowserModule, OrderModule],
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
  array: any[] = [{ name: 'John'} , { name: 'Mary' }, { name: 'Adam' }];
  order: string = 'name';
}
```

### Deep sorting
Use comma separated path for deep properties when passing object.
```html
<div>{{ { prop: { list: [3, 2, 1] } } | orderBy: 'prop.list' | json }}</div>
```
Result:
```html
<div>{ prop: { list: [1, 2, 3] } }</div>
```


## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
