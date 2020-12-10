(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "1ntl":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/account/profile/profile-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function ntl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "2IrM");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "2IrM":
    /*!*******************************************************!*\
      !*** ./src/app/pages/account/profile/profile.page.ts ***!
      \*******************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function IrM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "HXu1");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "R05P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(router) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToAccount",
          value: function navigateToAccount() {
            this.router.navigate(['home', 'account']);
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "8V8a":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/profile/profile.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function V8a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "1ntl");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "2IrM");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "HXu1":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/profile/profile.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function HXu1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button [defaultHref]=\"['home','watchlist']\" (click)=\"navigateToAccount()\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Profile</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"ion-padding profile-header\">\n\t\t<div>\n\t\t\t<ion-text><h5>Chetan Yadav</h5></ion-text>\n\t\t\t<ion-text><p>TE8123</p></ion-text>\n\t\t</div>\n\t\t<img\n\t\t\tsrc=\"https://images8.alphacoders.com/679/thumb-1920-679478.jpg\"\n\t\t\tclass=\"ion-float-right\"\n\t\t/>\n  </div>\n  <hr>\n  <ion-grid>\n    <ion-row class=\"ion-margin-bottom\">\n      <ion-col size=6 class=\"ion-text-left subtitle\">E-mail</ion-col>\n      <ion-col size=6 class=\"ion-text-right\">seferibrahim2@gmail.com</ion-col>\n    </ion-row>\n    <ion-row class=\"ion-margin-bottom\">\n      <ion-col size=6 class=\"ion-text-left subtitle\">Phone</ion-col>\n      <ion-col size=6 class=\"ion-text-right\">*7890</ion-col>\n    </ion-row>\n    <ion-row class=\"ion-margin-bottom\">\n      <ion-col size=6 class=\"ion-text-left subtitle\">PAN</ion-col>\n      <ion-col size=6 class=\"ion-text-right\">*233H</ion-col>\n    </ion-row>\n    <ion-row class=\"ion-margin-bottom\">\n      <ion-col size=6 class=\"ion-text-left subtitle\">Demat (BO)</ion-col>\n      <ion-col size=6 class=\"ion-text-right\">1234567875434567</ion-col>\n    </ion-row>\n  </ion-grid>\n  <hr>\n</ion-content>\n";
      /***/
    },

    /***/
    "R05P":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/profile/profile.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function R05P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profile-header {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.profile-header div {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.profile-header h5 {\n  margin-bottom: 0px;\n}\n.profile-header p {\n  margin-top: 5px;\n}\n.profile-header img {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n}\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  margin-top: 0;\n}\n.subtitle {\n  color: #737373;\n}\n@media (prefers-color-scheme: dark) {\n  .subtitle {\n    color: #949494;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFDSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDQTtFQUNJLGNBQUE7QUFFSjtBQUFBO0VBQ0k7SUFDSSxjQUFBO0VBR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWhlYWRlcntcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICB9XG4gICAgaDV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW4tdG9wOjVweDtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcbiAgICAgICAgd2lkdGg6IDEwMHB4OyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbn1cbmhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjcsIDE2NywgMTY3LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6MDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBjb2xvcjojNzM3MzczO1xufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgLnN1YnRpdGxle1xuICAgICAgICBjb2xvcjojOTQ5NDk0O1xuICAgIH1cbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map