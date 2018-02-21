webpackJsonp(["lib-view-child.module"],{

/***/ "../../../../../src/app/feature/libs/lib-view-child/lib-view-child-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibViewChildRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_view_child_component__ = __webpack_require__("../../../../../src/app/feature/libs/lib-view-child/lib-view-child.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__lib_view_child_component__["a" /* LibViewChildComponent */]
    },
    {
        path: 'content-child',
        loadChildren: 'app/feature/libs/lib-view-child/content-child/content-child.module#ContentChildModule'
    }
];
var LibViewChildRoutingModule = (function () {
    function LibViewChildRoutingModule() {
    }
    return LibViewChildRoutingModule;
}());
LibViewChildRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], LibViewChildRoutingModule);

//# sourceMappingURL=lib-view-child-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/feature/libs/lib-view-child/lib-view-child.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://netbasal.com/understanding-viewchildren-contentchildren-and-querylist-in-angular-896b0c689f6e -->\n<!-- https://angular-2-training-book.rangle.io/handout/advanced-components/access_child_components.html -->\n<app-content-child *ngFor=\"let data of datas\" [getTitle]=\"data.title\" [getContent]=\"data.content\"></app-content-child>\n"

/***/ }),

/***/ "../../../../../src/app/feature/libs/lib-view-child/lib-view-child.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature/libs/lib-view-child/lib-view-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibViewChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_child_content_child_component__ = __webpack_require__("../../../../../src/app/feature/libs/lib-view-child/content-child/content-child.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibViewChildComponent = (function () {
    function LibViewChildComponent() {
        this.datas = [
            {
                title: 'Open section',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                title: 'Open section',
                content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
            }
        ];
    }
    LibViewChildComponent.prototype.ngOnInit = function () {
    };
    LibViewChildComponent.prototype.ngAfterViewInit = function () {
        this.viewChild.first.alo.subscribe(function (data) {
            console.log(data);
        });
    };
    return LibViewChildComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1__content_child_content_child_component__["a" /* ContentChildComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], LibViewChildComponent.prototype, "viewChild", void 0);
LibViewChildComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lib-view-child',
        template: __webpack_require__("../../../../../src/app/feature/libs/lib-view-child/lib-view-child.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feature/libs/lib-view-child/lib-view-child.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LibViewChildComponent);

var _a;
//# sourceMappingURL=lib-view-child.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature/libs/lib-view-child/lib-view-child.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibViewChildModule", function() { return LibViewChildModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_view_child_routing_module__ = __webpack_require__("../../../../../src/app/feature/libs/lib-view-child/lib-view-child-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_view_child_component__ = __webpack_require__("../../../../../src/app/feature/libs/lib-view-child/lib-view-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_child_content_child_component__ = __webpack_require__("../../../../../src/app/feature/libs/lib-view-child/content-child/content-child.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LibViewChildModule = (function () {
    function LibViewChildModule() {
    }
    return LibViewChildModule;
}());
LibViewChildModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__lib_view_child_routing_module__["a" /* LibViewChildRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__lib_view_child_component__["a" /* LibViewChildComponent */],
            __WEBPACK_IMPORTED_MODULE_4__content_child_content_child_component__["a" /* ContentChildComponent */]
        ]
    })
], LibViewChildModule);

//# sourceMappingURL=lib-view-child.module.js.map

/***/ })

});
//# sourceMappingURL=lib-view-child.module.chunk.js.map