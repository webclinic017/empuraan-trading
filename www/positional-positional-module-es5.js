(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["positional-positional-module"], {
    /***/
    "Qaw3":
    /*!****************************************************************!*\
      !*** ./src/app/pages/learning/positional/positional.module.ts ***!
      \****************************************************************/

    /*! exports provided: PositionalPageModule */

    /***/
    function Qaw3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PositionalPageModule", function () {
        return PositionalPageModule;
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


      var _positional_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./positional-routing.module */
      "dujK");
      /* harmony import */


      var _positional_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./positional.page */
      "YoFf");

      var PositionalPageModule = function PositionalPageModule() {
        _classCallCheck(this, PositionalPageModule);
      };

      PositionalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _positional_routing_module__WEBPACK_IMPORTED_MODULE_5__["PositionalPageRoutingModule"]],
        declarations: [_positional_page__WEBPACK_IMPORTED_MODULE_6__["PositionalPage"]]
      })], PositionalPageModule);
      /***/
    },

    /***/
    "dujK":
    /*!************************************************************************!*\
      !*** ./src/app/pages/learning/positional/positional-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: PositionalPageRoutingModule */

    /***/
    function dujK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PositionalPageRoutingModule", function () {
        return PositionalPageRoutingModule;
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


      var _positional_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./positional.page */
      "YoFf");

      var routes = [{
        path: '',
        component: _positional_page__WEBPACK_IMPORTED_MODULE_3__["PositionalPage"]
      }];

      var PositionalPageRoutingModule = function PositionalPageRoutingModule() {
        _classCallCheck(this, PositionalPageRoutingModule);
      };

      PositionalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PositionalPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=positional-positional-module-es5.js.map