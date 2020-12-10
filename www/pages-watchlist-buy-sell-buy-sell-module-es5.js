(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-watchlist-buy-sell-buy-sell-module"], {
    /***/
    "EJ7/":
    /*!*************************************************************!*\
      !*** ./src/app/pages/watchlist/buy-sell/buy-sell.module.ts ***!
      \*************************************************************/

    /*! exports provided: BuySellPageModule */

    /***/
    function EJ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuySellPageModule", function () {
        return BuySellPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _buy_sell_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buy-sell-routing.module */
      "U7Of");
      /* harmony import */


      var _buy_sell_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./buy-sell.page */
      "aY2Y");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var BuySellPageModule = function BuySellPageModule() {
        _classCallCheck(this, BuySellPageModule);
      };

      BuySellPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _buy_sell_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuySellPageRoutingModule"]],
        declarations: [_buy_sell_page__WEBPACK_IMPORTED_MODULE_6__["BuySellPage"]]
      })], BuySellPageModule);
      /***/
    },

    /***/
    "U7Of":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/watchlist/buy-sell/buy-sell-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: BuySellPageRoutingModule */

    /***/
    function U7Of(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuySellPageRoutingModule", function () {
        return BuySellPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _buy_sell_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buy-sell.page */
      "aY2Y");

      var routes = [{
        path: '',
        component: _buy_sell_page__WEBPACK_IMPORTED_MODULE_3__["BuySellPage"]
      }];

      var BuySellPageRoutingModule = function BuySellPageRoutingModule() {
        _classCallCheck(this, BuySellPageRoutingModule);
      };

      BuySellPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BuySellPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-watchlist-buy-sell-buy-sell-module-es5.js.map