webpackJsonp(["wow.module"],{

/***/ "../../../../../src/app/feature/libs/wow/wow-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WowRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wow_component__ = __webpack_require__("../../../../../src/app/feature/libs/wow/wow.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__wow_component__["a" /* WowComponent */]
    }
];
var WowRoutingModule = (function () {
    function WowRoutingModule() {
    }
    return WowRoutingModule;
}());
WowRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], WowRoutingModule);

//# sourceMappingURL=wow-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/feature/libs/wow/wow.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"animated wow fadeInLeft\">\n  asdasd\n</section>\n<section class=\"animated wow fadeInLeft\">\n  asdasd\n</section>\n<section class=\"animated wow fadeInLeft\">\n  asdasd\n</section>\n<section class=\"animated wow fadeInLeft\">\n  asdasd\n</section>\n<section class=\"animated wow fadeInLeft\">\n  asdasd\n</section>\n<section class=\"animated wow fadeInLeft\">\n  asdasd\n</section>"

/***/ }),

/***/ "../../../../../src/app/feature/libs/wow/wow.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  height: 500px;\n  border: 1px solid #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature/libs/wow/wow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_wow__ = __webpack_require__("../../../../ngx-wow/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WowComponent = (function () {
    function WowComponent(wow) {
        this.wow = wow;
    }
    WowComponent.prototype.ngOnInit = function () {
        this.wow.init();
    };
    return WowComponent;
}());
WowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wow',
        template: __webpack_require__("../../../../../src/app/feature/libs/wow/wow.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feature/libs/wow/wow.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_wow__["b" /* NgwWowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_wow__["b" /* NgwWowService */]) === "function" && _a || Object])
], WowComponent);

var _a;
//# sourceMappingURL=wow.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature/libs/wow/wow.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WowModule", function() { return WowModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_wow__ = __webpack_require__("../../../../ngx-wow/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wow_routing_module__ = __webpack_require__("../../../../../src/app/feature/libs/wow/wow-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wow_component__ = __webpack_require__("../../../../../src/app/feature/libs/wow/wow.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WowModule = (function () {
    function WowModule() {
    }
    return WowModule;
}());
WowModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__wow_routing_module__["a" /* WowRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_wow__["a" /* NgwWowModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__wow_component__["a" /* WowComponent */]]
    })
], WowModule);

//# sourceMappingURL=wow.module.js.map

/***/ }),

/***/ "../../../../ngx-wow/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wow_module__ = __webpack_require__("../../../../ngx-wow/wow.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__wow_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__("../../../../ngx-wow/models/index.js");
/* unused harmony reexport NgwWowConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../ngx-wow/services/index.js");
/* unused harmony reexport WindowService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__services_index__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-wow/models/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wow_config__ = __webpack_require__("../../../../ngx-wow/models/wow-config.js");
/* unused harmony reexport NgwWowConfig */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-wow/models/wow-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgwWowConfig */
/**
 * Configuration for the NgwWowService service.
 */
var NgwWowConfig = (function () {
    function NgwWowConfig() {
        /**
         * Class name that reveals the hidden box when user scrolls.
         */
        this.boxClass = 'wow';
        /**
         * Class name that triggers the CSS animations ('animated' by default for the animate.css library)
         */
        this.animateClass = 'animated';
        /**
         * Define the distance between the bottom of browser viewport and the top of hidden box.
         * When the user scrolls and reach this distance the hidden box is revealed.
         */
        this.offset = 0;
        /**
         * Turn on/off WOW.js on mobile devices.
         */
        this.mobile = true;
        /**
         * Consatantly check for new WOW elements on the page.
         */
        this.live = true;
    }
    return NgwWowConfig;
}());
//# sourceMappingURL=wow-config.js.map

/***/ }),

/***/ "../../../../ngx-wow/services/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window_service__ = __webpack_require__("../../../../ngx-wow/services/window.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__window_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wow_service__ = __webpack_require__("../../../../ngx-wow/services/wow.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__wow_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-wow/services/window.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

/**
 * Service to interact with the window object.
 */
var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    WindowService.ctorParameters = [];
    return WindowService;
}());
function _window() {
    // Return the global native browser window object
    return typeof window !== 'undefined' ? window : undefined;
}
//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "../../../../ngx-wow/services/wow.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgwWowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__window_service__ = __webpack_require__("../../../../ngx-wow/services/window.service.js");



var NgwWowService = (function () {
    function NgwWowService(windowService) {
        // Observable  source
        this.itemRevealedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable  stream
        this.itemRevealed$ = this.itemRevealedSource.asObservable();
        this.window = windowService.nativeWindow;
    }
    NgwWowService.prototype.init = function (config) {
        var _this = this;
        if (this.window) {
            var conf = config || {};
            // Set callback hook:
            conf.callback = function () { return _this.itemRevealedSource.next(); };
            // Initializes the library
            new WOW(config).init();
        }
    };
    NgwWowService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    NgwWowService.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_2__window_service__["a" /* WindowService */], },
    ];
    return NgwWowService;
}());
//# sourceMappingURL=wow.service.js.map

/***/ }),

/***/ "../../../../ngx-wow/wow.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgwWowModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../ngx-wow/services/index.js");



/**
 * Main module of the library
 */
var NgwWowModule = (function () {
    function NgwWowModule() {
    }
    NgwWowModule.forRoot = function () {
        return {
            ngModule: NgwWowModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* WindowService */], __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* NgwWowService */]]
        };
    };
    NgwWowModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
                    ]
                },] },
    ];
    /** @nocollapse */
    NgwWowModule.ctorParameters = [];
    return NgwWowModule;
}());
//# sourceMappingURL=wow.module.js.map

/***/ })

});
//# sourceMappingURL=wow.module.chunk.js.map