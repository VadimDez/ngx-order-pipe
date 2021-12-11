# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### 2.2.0 - 2021-12-11

### Changed

- [[#106](https://github.com/VadimDez/ngx-order-pipe/pull/106)] - Update underlying project dependencies to Angular 10
- Minor types and naming changes

### 2.1.2

- [[#131](https://github.com/VadimDez/ngx-order-pipe/pull/131)] - Fix expression array being reversed

### 2.1.1

- [[#107](https://github.com/VadimDez/ngx-order-pipe/issues/107)] - Error ordering by null date property
- [[#108](https://github.com/VadimDez/ngx-order-pipe/pull/108)] - Fix error ordering by null date property

### 2.1.0

- [[#91](https://github.com/VadimDez/ngx-order-pipe/issues/91)] - Multiple orders with date, second item is reversed
- [[#103](https://github.com/VadimDez/ngx-order-pipe/pull/103)] - Fixed date comparison in default comparator

### 2.0.4

- [[#87](https://github.com/VadimDez/ngx-order-pipe/pull/87)] - fix error when expression point on sub-property of an undefined object

### 2.0.3

- [[#82](https://github.com/VadimDez/ngx-order-pipe/issues/82)] - Upgrade to Angular 8

### 2.0.2

- [[#79](https://github.com/VadimDez/ngx-order-pipe/pull/79)] - feature: support for callable function attribute on data source
- [[#74](https://github.com/VadimDez/ngx-order-pipe/issues/74)] - Allow to sort also by function return value?

### 2.0.1

- [[#54](https://github.com/VadimDez/ngx-order-pipe/pull/54)] - multiple fields sorting
- [[#14](https://github.com/VadimDez/ngx-order-pipe/issues/14)] - Multi Ordering

### Feature

Expression now accepts `string` as well as `array of strings` to perform multi order.

Example, order by `name` and `age`:

```html
<div *ngFor="let item of items | orderBy: ['name', 'age']">
  {{ item | json }}
</div>
```

### 2.0.0

#### Breaking changes

- [[#52](https://github.com/VadimDez/ngx-order-pipe/issues/52)] - Value passed to transform() should not be modified.

Now the value passed to pipe is not directly modified

### 1.2.1

- [[#48](https://github.com/VadimDez/ngx-order-pipe/issues/48)] - Add OrderPipe as provider in the OrderModule

### Features

#### Use OrderPipe in the component

Import `OrderPipe` to your component:

```typescript
import { OrderPipe } from "ngx-order-pipe";
```

Add `OrderPipe` to the constructor of your component and you're ready to use it:

```typescript
constructor(private orderPipe: OrderPipe) {
  console.log(this.orderPipe.transform(this.collection, this.order));
}
```

### 1.2.0

- [[#46](https://github.com/VadimDez/ngx-order-pipe/pull/46)] - Restructure
- [[#45](https://github.com/VadimDez/ngx-order-pipe/issues/45)] - Use packagr
- [[#32](https://github.com/VadimDez/ngx-order-pipe/issues/32)] - Angular 5

_Bundle location is changed, therefore SYSTEMJS config should be updated to_

Append to `map`

```js
var map = {
    ...
    'ngx-order-pipe': 'node_modules/ngx-order-pipe/bundles'
}
```

and then add to `packages`

```js
var packages = {
    ...
    'ngx-order-pipe': { defaultExtension: 'js' }
}
```

### 1.1.3

- [[#35](https://github.com/VadimDez/ngx-order-pipe/issues/35)] - Null or undefined values
- [[#44](https://github.com/VadimDez/ngx-order-pipe/pull/44)] - Changing default comparator so it would properly sort null and undefined values.

### 1.1.2

- [[#42](https://github.com/VadimDez/ngx-order-pipe/issues/42)] - Can't find module

### 1.1.1

- [[#23](https://github.com/VadimDez/ngx-order-pipe/issues/34)] - order sorting issue in asc & dec
- [[#31](https://github.com/VadimDez/ngx-order-pipe/pull/36)] - Added comparator

### 1.1.0

- [[#23](https://github.com/VadimDez/ngx-order-pipe/issues/23)] - Refresh orderBy after \*ngFor is updated?
- [[#31](https://github.com/VadimDez/ngx-order-pipe/pull/31)] - Made pipe impure to detect all the changes

### 1.0.4

- [[#26](https://github.com/VadimDez/ngx-order-pipe/issues/26)] - Feature request to switch it to case-insensitive
- [[#27](https://github.com/VadimDez/ngx-order-pipe/pull/27)] - Adding support for case insensitive ordering

### 1.0.3

[[#28](https://github.com/VadimDez/ngx-order-pipe/pull/28)] - Fix when a or b might be null (e.g. Async items)

### 1.0.2

[[#21](https://github.com/VadimDez/ngx-order-pipe/issues/21)] - Can not sort by embedded object value

### 1.0.1

[[#19](https://github.com/VadimDez/ngx-order-pipe/issues/19)] - Create UMD bundle

### 1.0.0

[[#15](https://github.com/VadimDez/ngx-order-pipe/issues/15)] - Change name to `ngx-order-pipe`

### 0.1.5

[[#10](https://github.com/VadimDez/ng2-order-pipe/issues/10)] - Deep properties support

Example

```html
<div>{{ { prop: { list: [3, 2, 1] } } | orderBy: 'prop.list' | json }}</div>
```

Result

```html
<div>{ prop: { list: [1, 2, 3] } }</div>
```

### 0.1.4

[[#11](https://github.com/VadimDez/ng2-order-pipe/issues/11)] - Sort array without expression

```html
<div *ngFor="let i of [3, 2, 1] | orderBy">{{ i }}</div>
```

Result:

```html
<div>1</div>
<div>2</div>
<div>3</div>
```

### 0.1.3

Angular 4

### 0.1.2

[[#5](https://github.com/VadimDez/ng2-order-pipe/issues/5)] - error when using http to load data

### 0.1.1

[[#2](https://github.com/VadimDez/ng2-order-pipe/issues/2)] - Add param to reverse array
