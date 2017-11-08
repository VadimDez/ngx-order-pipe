webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button\">\n  <header class=\"mdl-layout__header\">\n    <div class=\"mdl-layout__header-row\">\n      <span class=\"mdl-layout-title\">ngx-order-pipe</span>\n      <div class=\"mdl-layout-spacer\"></div>\n      \n      <iframe src=\"https://ghbtns.com/github-btn.html?user=vadimdez&repo=ngx-order-pipe&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe>\n    </div>\n  </header>\n\n  <main class=\"mdl-layout__content\">\n    <div class=\"page-content\">\n\n      <div class=\"mdl-grid\">\n        <div class=\"mdl-cell mdl-cell--6-col mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone\">\n          <h2>Angular4 order pipe</h2>\n          <p class=\"short-description\">\n            Order your collection by a field\n          </p>\n\n          <p>\n            Press on the label to re-order table\n          </p>\n\n          <div class=\"mdl-grid mdl-grid--no-spacing\">\n            <div class=\"mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone\">\n              <table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n                <thead>\n                <tr>\n                  <th [class.active]=\"order === 'id'\"\n                      (click)=\"setOrder('id')\"\n                      class=\"mdl-data-table__cell--non-numeric\"\n                  >\n                    ID <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                  </th>\n                  <th [class.active]=\"order === 'info.name'\"\n                      (click)=\"setOrder('info.name')\"\n                      class=\"mdl-data-table__cell--non-numeric\"\n                  >\n                    Name <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                  </th>\n                  <th [class.active]=\"order === 'info.number'\"\n                      (click)=\"setOrder('info.number')\"\n                  >\n                    Phone number <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                  </th>\n                  <th [class.active]=\"order === 'info.age'\" (click)=\"setOrder('info.age')\">\n                    Age <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                  </th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let row of collection | orderBy: order:reverse:'case-insensitive'\">\n                  <td>{{ row.id }}</td>\n                  <td class=\"mdl-data-table__cell--non-numeric\">{{ row.info.name }}</td>\n                  <td>{{ row.info.number }}</td>\n                  <td>{{ row.info.age }}</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"mdl-cell mdl-cell--6-col mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone\">\n              <h5>Pipe</h5>\n              <p>\n                orderBy: \"{{ order }}\":{{ reverse}}\n              </p>\n              <h5>Collection</h5>\n              <p>\n                {{ collection | json }}\n              </p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </main>\n\n  <footer class=\"mdl-mini-footer\">\n    <div class=\"mdl-mini-footer__left-section\">\n      <div class=\"mdl-logo\">ngx-order-pipe</div>\n      <ul class=\"mdl-mini-footer__link-list\">\n        <li><a href=\"https://github.com/VadimDez/ngx-order-pipe\">Github</a></li>\n        <li><a href=\"https://github.com/VadimDez\">Vadym Yatsyuk</a></li>\n      </ul>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mdl-data-table {\n  width: 95%; }\n\nthead th {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px; }\n  thead th span {\n    visibility: hidden; }\n  thead th.active {\n    color: #000; }\n    thead th.active span {\n      visibility: visible; }\n\n.short-description {\n  color: #a7a7a7;\n  font-size: 18px;\n  border-left: solid 5px #a7a7a7;\n  padding-left: 10px; }\n\n.mdl-mini-footer {\n  padding-bottom: 22px;\n  padding-top: 16px; }\n\nh5 {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 500;\n  text-transform: uppercase; }\n  @media (min-width: 480px) {\n    h5:first-child {\n      margin-top: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.order = 'name';
        this.reverse = false;
        this.collection = [
            {
                id: 1,
                info: {
                    name: 'john',
                    number: '555-1212',
                    age: 10
                }
            }, {
                id: 5,
                info: {
                    name: 'Mary',
                    number: '555-9876',
                    age: 19
                }
            }, {
                id: 2,
                info: {
                    name: 'Mike',
                    number: '555-4321',
                    age: 21
                }
            }, {
                id: 3,
                info: {
                    name: 'Julie',
                    number: '555-8765',
                    age: 29
                }
            }, {
                id: 4,
                info: {
                    name: 'Adam',
                    number: '555-5678',
                    age: 35
                }
            },
        ];
    }
    AppComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_module__ = __webpack_require__("../../../../../src/app/order-pipe/ngx-order.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__order_pipe_ngx_order_module__["a" /* OrderModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/order-pipe/ngx-order.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_order_pipe__ = __webpack_require__("../../../../../src/app/order-pipe/ngx-order.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vadimdez on 20/01/2017.
 */


var OrderModule = (function () {
    function OrderModule() {
    }
    return OrderModule;
}());
OrderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__ngx_order_pipe__["a" /* OrderPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__ngx_order_pipe__["a" /* OrderPipe */]]
    })
], OrderModule);

//# sourceMappingURL=ngx-order.module.js.map

/***/ }),

/***/ "../../../../../src/app/order-pipe/ngx-order.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderPipe = OrderPipe_1 = (function () {
    function OrderPipe() {
    }
    /**
     * Check if a value is a string
     *
     * @param value
     */
    OrderPipe.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    OrderPipe.caseInsensitiveSort = function (a, b) {
        if (OrderPipe_1.isString(a) && OrderPipe_1.isString(b)) {
            return a.localeCompare(b);
        }
        return a > b ? 1 : -1;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    OrderPipe.prototype.transform = function (value, expression, reverse, isCaseInsensitive) {
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        if (!value) {
            return value;
        }
        if (Array.isArray(value)) {
            return this.sortArray(value, expression, reverse, isCaseInsensitive);
        }
        if (typeof value === 'object') {
            return this.transformObject(value, expression, reverse, isCaseInsensitive);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @returns {any[]}
     */
    OrderPipe.prototype.sortArray = function (value, expression, reverse, isCaseInsensitive) {
        var isDeepLink = expression && expression.indexOf('.') !== -1;
        if (isDeepLink) {
            expression = OrderPipe_1.parseExpression(expression);
        }
        var array = value.sort(function (a, b) {
            if (!expression) {
                if (isCaseInsensitive) {
                    return OrderPipe_1.caseInsensitiveSort(a, b);
                }
                return a > b ? 1 : -1;
            }
            if (!isDeepLink && expression) {
                if (isCaseInsensitive) {
                    if (a && b) {
                        return OrderPipe_1.caseInsensitiveSort(a[expression], b[expression]);
                    }
                    return OrderPipe_1.caseInsensitiveSort(a, b);
                }
                if (a && b) {
                    return a[expression] > b[expression] ? 1 : -1;
                }
                return a > b ? 1 : -1;
            }
            if (isCaseInsensitive) {
                return OrderPipe_1.caseInsensitiveSort(OrderPipe_1.getValue(a, expression), OrderPipe_1.getValue(b, expression));
            }
            return OrderPipe_1.getValue(a, expression) > OrderPipe_1.getValue(b, expression) ? 1 : -1;
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @returns {any[]}
     */
    OrderPipe.prototype.transformObject = function (value, expression, reverse, isCaseInsensitive) {
        var parsedExpression = OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = OrderPipe_1.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe_1.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    };
    return OrderPipe;
}());
OrderPipe = OrderPipe_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Pipe */])({
        name: 'orderBy',
        pure: false
    })
], OrderPipe);

var OrderPipe_1;
//# sourceMappingURL=ngx-order.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map