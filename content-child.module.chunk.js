webpackJsonp(["content-child.module"],{

/***/ "../../../../../src/app/feature/libs/lib-view-child/content-child/content-child-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentChildRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_child_component__ = __webpack_require__("../../../../../src/app/feature/libs/lib-view-child/content-child/content-child.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__content_child_component__["a" /* ContentChildComponent */]
    }
];
var ContentChildRoutingModule = (function () {
    function ContentChildRoutingModule() {
    }
    return ContentChildRoutingModule;
}());
ContentChildRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], ContentChildRoutingModule);

//# sourceMappingURL=content-child-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/feature/libs/lib-view-child/content-child/content-child.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentChildModule", function() { return ContentChildModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_child_routing_module__ = __webpack_require__("../../../../../src/app/feature/libs/lib-view-child/content-child/content-child-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_child_component__ = __webpack_require__("../../../../../src/app/feature/libs/lib-view-child/content-child/content-child.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContentChildModule = (function () {
    function ContentChildModule() {
    }
    return ContentChildModule;
}());
ContentChildModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__content_child_routing_module__["a" /* ContentChildRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__content_child_component__["a" /* ContentChildComponent */]
        ]
    })
], ContentChildModule);

//# sourceMappingURL=content-child.module.js.map

/***/ })

});
//# sourceMappingURL=content-child.module.chunk.js.map