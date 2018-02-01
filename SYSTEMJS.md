## SystemJS

In your `system.config.js`

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