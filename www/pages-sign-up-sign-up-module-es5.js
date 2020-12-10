(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"], {
    /***/
    "Dk72":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dk72(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<!-- <ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"home/dashboard\"></ion-back-button>\n\t\t</ion-buttons> -->\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<form>\n\t\t<ion-title class=\"ion-text-center ion-margin-vertical\" color=\"warning\"><h1>Welcome to Empuraan</h1></ion-title>\n\t\t<ion-title class=\"ion-text-center ion-margin-vertical\"><h2>Sign Up</h2></ion-title>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col col=\"6\">\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Name</ion-label>\n\t\t\t\t\t\t<ion-input></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col col=\"6\">\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Surname</ion-label>\n\t\t\t\t\t\t<ion-input></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Email or Phone Number</ion-label>\n\t\t\t\t\t\t<ion-input></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Confirm Password</ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-button class=\"sign-up-button\" (click)=\"signUp()\">Sign Up</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-button\n\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\tsize=\"small\"\n\t\t\t\t\t\texpand=\"block\"\n\t\t\t\t\t\tfill=\"clear\"\n\t\t\t\t\t\tclass=\"ion-float-left\"\n\t\t\t\t\t\t(click)=\"navigateToLogin()\"\n\t\t\t\t\t>\n\t\t\t\t\t\tAlready have an account?\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</form>\n</ion-content>\n";
      /***/
    },

    /***/
    "J606":
    /*!*************************************************!*\
      !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
      \*************************************************/

    /*! exports provided: SignUpPageModule */

    /***/
    function J606(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
        return SignUpPageModule;
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


      var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sign-up-routing.module */
      "Z4dq");
      /* harmony import */


      var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sign-up.page */
      "yntF");

      var SignUpPageModule = function SignUpPageModule() {
        _classCallCheck(this, SignUpPageModule);
      };

      SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
      })], SignUpPageModule);
      /***/
    },

    /***/
    "Z4dq":
    /*!*********************************************************!*\
      !*** ./src/app/pages/sign-up/sign-up-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SignUpPageRoutingModule */

    /***/
    function Z4dq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () {
        return SignUpPageRoutingModule;
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


      var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sign-up.page */
      "yntF");

      var routes = [{
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
      }];

      var SignUpPageRoutingModule = function SignUpPageRoutingModule() {
        _classCallCheck(this, SignUpPageRoutingModule);
      };

      SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignUpPageRoutingModule);
      /***/
    },

    /***/
    "sWnx":
    /*!*************************************************!*\
      !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function sWnx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\n.sign-up-button {\n  width: 100%;\n  height: 50px;\n}\n\nh1, h2 {\n  padding: 0;\n  margin: 0;\n}\n\n@media screen and (max-width: 360px) {\n  h1, h2 {\n    font-size: 17px;\n  }\n\n  ion-label, ion-text, p, h5, ion-button, span {\n    font-size: 13px !important;\n  }\n\n  ion-icon {\n    font-size: 17px;\n  }\n\n  .sign-up-button {\n    width: 100%;\n    height: 40px;\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUdKOztBQURBO0VBQ0k7SUFDRSxlQUFBO0VBSUo7O0VBRkU7SUFDRSwwQkFBQTtFQUtKOztFQUhFO0lBQ0ksZUFBQTtFQU1OOztFQUpFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFQU9OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uc2lnbi11cC1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuaDEsaDJ7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICBoMSxoMntcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCBpb24tdGV4dCwgcCwgaDUsIGlvbi1idXR0b24sIHNwYW57XG4gICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG4gICAgLnNpZ24tdXAtYnV0dG9ue1xuICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "yntF":
    /*!***********************************************!*\
      !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
      \***********************************************/

    /*! exports provided: SignUpPage */

    /***/
    function yntF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
        return SignUpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "Dk72");
      /* harmony import */


      var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-up.page.scss */
      "sWnx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var SignUpPage = /*#__PURE__*/function () {
        function SignUpPage(router, userService) {
          _classCallCheck(this, SignUpPage);

          this.router = router;
          this.userService = userService;
        }

        _createClass(SignUpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkIfIsSignUp();
          }
        }, {
          key: "navigateToLogin",
          value: function navigateToLogin() {
            this.router.navigate(['home', 'login']);
          }
        }, {
          key: "signUp",
          value: function signUp() {
            this.userService.logIn();
            this.router.navigate(['home', 'dashboard']);
            this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard');
          }
        }, {
          key: "checkIfIsSignUp",
          value: function checkIfIsSignUp() {
            this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
          }
        }]);

        return SignUpPage;
      }();

      SignUpPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      };

      SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignUpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-sign-up-sign-up-module-es5.js.map