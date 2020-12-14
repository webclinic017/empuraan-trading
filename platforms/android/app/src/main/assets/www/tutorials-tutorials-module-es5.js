(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorials-tutorials-module"], {
    /***/
    "+Oo0":
    /*!**************************************************************!*\
      !*** ./src/app/pages/learning/tutorials/tutorials.module.ts ***!
      \**************************************************************/

    /*! exports provided: TutorialsPageModule */

    /***/
    function Oo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TutorialsPageModule", function () {
        return TutorialsPageModule;
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


      var _tutorials_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tutorials-routing.module */
      "ZYhu");
      /* harmony import */


      var _tutorials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tutorials.page */
      "e3HS");

      var TutorialsPageModule = function TutorialsPageModule() {
        _classCallCheck(this, TutorialsPageModule);
      };

      TutorialsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tutorials_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialsPageRoutingModule"]],
        declarations: [_tutorials_page__WEBPACK_IMPORTED_MODULE_6__["TutorialsPage"]]
      })], TutorialsPageModule);
      /***/
    },

    /***/
    "ZYhu":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/learning/tutorials/tutorials-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: TutorialsPageRoutingModule */

    /***/
    function ZYhu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TutorialsPageRoutingModule", function () {
        return TutorialsPageRoutingModule;
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


      var _tutorials_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tutorials.page */
      "e3HS");

      var routes = [{
        path: '',
        component: _tutorials_page__WEBPACK_IMPORTED_MODULE_3__["TutorialsPage"]
      }];

      var TutorialsPageRoutingModule = function TutorialsPageRoutingModule() {
        _classCallCheck(this, TutorialsPageRoutingModule);
      };

      TutorialsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TutorialsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tutorials-tutorials-module-es5.js.map