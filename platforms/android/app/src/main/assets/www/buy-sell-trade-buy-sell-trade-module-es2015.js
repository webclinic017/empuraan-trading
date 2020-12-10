(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-sell-trade-buy-sell-trade-module"],{

/***/ "kyfd":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/chart/buy-sell-trade/buy-sell-trade-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BuySellTradePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySellTradePageRoutingModule", function() { return BuySellTradePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buy_sell_trade_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy-sell-trade.page */ "HbeO");




const routes = [
    {
        path: '',
        component: _buy_sell_trade_page__WEBPACK_IMPORTED_MODULE_3__["BuySellTradePage"]
    }
];
let BuySellTradePageRoutingModule = class BuySellTradePageRoutingModule {
};
BuySellTradePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuySellTradePageRoutingModule);



/***/ }),

/***/ "yBpd":
/*!*********************************************************************!*\
  !*** ./src/app/pages/chart/buy-sell-trade/buy-sell-trade.module.ts ***!
  \*********************************************************************/
/*! exports provided: BuySellTradePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySellTradePageModule", function() { return BuySellTradePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _buy_sell_trade_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buy-sell-trade-routing.module */ "kyfd");
/* harmony import */ var _buy_sell_trade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buy-sell-trade.page */ "HbeO");







let BuySellTradePageModule = class BuySellTradePageModule {
};
BuySellTradePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buy_sell_trade_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuySellTradePageRoutingModule"]
        ],
        declarations: [_buy_sell_trade_page__WEBPACK_IMPORTED_MODULE_6__["BuySellTradePage"]]
    })
], BuySellTradePageModule);



/***/ })

}]);
//# sourceMappingURL=buy-sell-trade-buy-sell-trade-module-es2015.js.map