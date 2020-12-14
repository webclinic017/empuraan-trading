(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-trading-demo-trading-module"],{

/***/ "CYHy":
/*!********************************************************************!*\
  !*** ./src/app/pages/learning/demo-trading/demo-trading.module.ts ***!
  \********************************************************************/
/*! exports provided: DemoTradingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTradingPageModule", function() { return DemoTradingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _demo_trading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-trading-routing.module */ "PVgE");
/* harmony import */ var _demo_trading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-trading.page */ "7VrI");







let DemoTradingPageModule = class DemoTradingPageModule {
};
DemoTradingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _demo_trading_routing_module__WEBPACK_IMPORTED_MODULE_5__["DemoTradingPageRoutingModule"]
        ],
        declarations: [_demo_trading_page__WEBPACK_IMPORTED_MODULE_6__["DemoTradingPage"]]
    })
], DemoTradingPageModule);



/***/ }),

/***/ "PVgE":
/*!****************************************************************************!*\
  !*** ./src/app/pages/learning/demo-trading/demo-trading-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DemoTradingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTradingPageRoutingModule", function() { return DemoTradingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _demo_trading_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-trading.page */ "7VrI");




const routes = [
    {
        path: '',
        component: _demo_trading_page__WEBPACK_IMPORTED_MODULE_3__["DemoTradingPage"]
    }
];
let DemoTradingPageRoutingModule = class DemoTradingPageRoutingModule {
};
DemoTradingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DemoTradingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=demo-trading-demo-trading-module-es2015.js.map