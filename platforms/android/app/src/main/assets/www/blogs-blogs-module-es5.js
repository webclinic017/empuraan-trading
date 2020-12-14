(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blogs-blogs-module"], {
    /***/
    "FBbJ":
    /*!**************************************************************!*\
      !*** ./src/app/pages/learning/blogs/blogs-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: BlogsPageRoutingModule */

    /***/
    function FBbJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogsPageRoutingModule", function () {
        return BlogsPageRoutingModule;
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


      var _blogs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blogs.page */
      "3Gte");

      var routes = [{
        path: '',
        component: _blogs_page__WEBPACK_IMPORTED_MODULE_3__["BlogsPage"]
      }];

      var BlogsPageRoutingModule = function BlogsPageRoutingModule() {
        _classCallCheck(this, BlogsPageRoutingModule);
      };

      BlogsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BlogsPageRoutingModule);
      /***/
    },

    /***/
    "grfK":
    /*!******************************************************!*\
      !*** ./src/app/pages/learning/blogs/blogs.module.ts ***!
      \******************************************************/

    /*! exports provided: BlogsPageModule */

    /***/
    function grfK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogsPageModule", function () {
        return BlogsPageModule;
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


      var _blogs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blogs-routing.module */
      "FBbJ");
      /* harmony import */


      var _blogs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./blogs.page */
      "3Gte");

      var BlogsPageModule = function BlogsPageModule() {
        _classCallCheck(this, BlogsPageModule);
      };

      BlogsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _blogs_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogsPageRoutingModule"]],
        declarations: [_blogs_page__WEBPACK_IMPORTED_MODULE_6__["BlogsPage"]]
      })], BlogsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=blogs-blogs-module-es5.js.map