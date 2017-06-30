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