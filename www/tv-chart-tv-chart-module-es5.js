(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tv-chart-tv-chart-module"], {
    /***/
    "EAfu":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/chart/tv-chart/tv-chart-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: TvChartPageRoutingModule */

    /***/
    function EAfu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TvChartPageRoutingModule", function () {
        return TvChartPageRoutingModule;
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


      var _tv_chart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tv-chart.page */
      "76FZ");

      var routes = [{
        path: '',
        component: _tv_chart_page__WEBPACK_IMPORTED_MODULE_3__["TvChartPage"]
      }];

      var TvChartPageRoutingModule = function TvChartPageRoutingModule() {
        _classCallCheck(this, TvChartPageRoutingModule);
      };

      TvChartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TvChartPageRoutingModule);
      /***/
    },

    /***/
    "xNRn":
    /*!*********************************************************!*\
      !*** ./src/app/pages/chart/tv-chart/tv-chart.module.ts ***!
      \*********************************************************/

    /*! exports provided: TvChartPageModule */

    /***/
    function xNRn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TvChartPageModule", function () {
        return TvChartPageModule;
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


      var _tv_chart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tv-chart-routing.module */
      "EAfu");
      /* harmony import */


      var _tv_chart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tv-chart.page */
      "76FZ");

      var TvChartPageModule = function TvChartPageModule() {
        _classCallCheck(this, TvChartPageModule);
      };

      TvChartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tv_chart_routing_module__WEBPACK_IMPORTED_MODULE_5__["TvChartPageRoutingModule"]],
        declarations: [_tv_chart_page__WEBPACK_IMPORTED_MODULE_6__["TvChartPage"]]
      })], TvChartPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tv-chart-tv-chart-module-es5.js.map