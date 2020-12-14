(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historical-data-historical-data-module"], {
    /***/
    "GUL6":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/chart/historical-data/historical-data-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: HistoricalDataPageRoutingModule */

    /***/
    function GUL6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalDataPageRoutingModule", function () {
        return HistoricalDataPageRoutingModule;
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


      var _historical_data_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./historical-data.page */
      "7hgu");

      var routes = [{
        path: '',
        component: _historical_data_page__WEBPACK_IMPORTED_MODULE_3__["HistoricalDataPage"]
      }];

      var HistoricalDataPageRoutingModule = function HistoricalDataPageRoutingModule() {
        _classCallCheck(this, HistoricalDataPageRoutingModule);
      };

      HistoricalDataPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistoricalDataPageRoutingModule);
      /***/
    },

    /***/
    "lTUE":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/chart/historical-data/historical-data.module.ts ***!
      \***********************************************************************/

    /*! exports provided: HistoricalDataPageModule */

    /***/
    function lTUE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalDataPageModule", function () {
        return HistoricalDataPageModule;
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


      var _historical_data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./historical-data-routing.module */
      "GUL6");
      /* harmony import */


      var _historical_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./historical-data.page */
      "7hgu");

      var HistoricalDataPageModule = function HistoricalDataPageModule() {
        _classCallCheck(this, HistoricalDataPageModule);
      };

      HistoricalDataPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _historical_data_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoricalDataPageRoutingModule"]],
        declarations: [_historical_data_page__WEBPACK_IMPORTED_MODULE_6__["HistoricalDataPage"]]
      })], HistoricalDataPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=historical-data-historical-data-module-es5.js.map