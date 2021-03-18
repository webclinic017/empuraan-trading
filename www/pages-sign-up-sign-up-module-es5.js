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


      __webpack_exports__["default"] = "<ion-content>\n\t<div class=\"wrap\">\n\t\t<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUp(signUpForm)\" class=\"ion-padding-horizontal\">\n\t\t\t<ion-img src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row class=\"title\">\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<ion-label>Sign Up</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Username\" required ngModel name=\"username\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Email address\" type=\"email\" required ngModel name=\"email\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Password\" type=\"password\" required ngModel name=\"password\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Confirm Password\" type=\"password\" required ngModel name=\"confirmPassword\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<button type=\"submit\" class=\"button sign-up-button\">\n\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t<ion-spinner name=\"lines-small\" *ngIf=\"signupSpinner\"></ion-spinner>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<button color=\"tertiary\" size=\"small\" expand=\"block\" fill=\"clear\" class=\"ion-float-left link-button\" routerLink=\"/home/login\">Already have an account? <b>Sign In</b></button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</form>\n\t\t<div class=\"second-dark-orange-ball\" *ngIf=\"!hideCircle\">\n\t\t\t<div class=\"second-light-orange-ball\"></div>\n\t\t</div>\n\t</div>\n</ion-content>\n";
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


      __webpack_exports__["default"] = "* {\n  outline: none;\n}\n\n.second-dark-orange-ball {\n  background-color: #E0B64A;\n  height: 230px;\n  width: 230px;\n  border-radius: 50%;\n  position: relative;\n  left: -43%;\n  bottom: -51%;\n}\n\n.second-dark-orange-ball .second-light-orange-ball {\n  background-color: #C99A4C;\n  height: 220px;\n  width: 220px;\n  bottom: -15%;\n  left: -15%;\n  border-radius: 50%;\n  position: relative;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n\n.wrap form {\n  width: 100%;\n  height: 90%;\n  position: absolute;\n}\n\n.title {\n  padding-bottom: 25px;\n}\n\n.title ion-label {\n  font-size: 35px;\n  font-weight: 700;\n}\n\n.logo {\n  height: 125px;\n  width: 125px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n}\n\n.button {\n  width: 100%;\n  border-radius: 15px;\n  height: 50px;\n  font-size: 14px;\n}\n\n.sign-up-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  color: #cbab73;\n  box-shadow: 0 0 15px 5px #f0f0f0;\n}\n\n.link-button {\n  float: left;\n  text-align: left;\n  background-color: transparent;\n  margin-top: 20px;\n}\n\n.links-block {\n  display: flex;\n  flex-direction: column;\n}\n\n.input-field {\n  padding-bottom: 20px;\n}\n\nh1, h2 {\n  padding: 0;\n  margin: 0;\n}\n\nion-input {\n  --placeholder-color: rgba(140,141,140);\n  --placeholder-opacity: 1;\n  font-size: 14px;\n}\n\nion-item {\n  --border-color: rgba(209,179,127);\n  --border-bottom-width: 2px;\n}\n\n@media screen and (max-width: 360px) {\n  .title ion-label {\n    font-size: 17px;\n  }\n\n  h1, h2 {\n    font-size: 17px;\n  }\n\n  ion-text, p, h5, ion-button, span {\n    font-size: 13px !important;\n  }\n\n  ion-icon {\n    font-size: 17px;\n  }\n\n  .sign-up-button {\n    width: 100%;\n    height: 40px;\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFUjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKOztBQURJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdSOztBQUFBO0VBQ0ksb0JBQUE7QUFHSjs7QUFGSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUlSOztBQURBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQU9KOztBQUxBO0VBQ0ksb0JBQUE7QUFRSjs7QUFOQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBU0o7O0FBUEE7RUFDSSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0ksaUNBQUE7RUFDQSwwQkFBQTtBQVdKOztBQVRBO0VBRVE7SUFDSSxlQUFBO0VBV1Y7O0VBUkU7SUFDRSxlQUFBO0VBV0o7O0VBVEU7SUFDRSwwQkFBQTtFQVlKOztFQVZFO0lBQ0ksZUFBQTtFQWFOOztFQVhFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFQWNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2Vjb25kLWRhcmstb3JhbmdlLWJhbGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwQjY0QTtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC00MyU7XG4gICAgYm90dG9tOiAtNTElO1xuICAgIC5zZWNvbmQtbGlnaHQtb3JhbmdlLWJhbGx7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOTlBNEM7XG4gICAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgYm90dG9tOiAtMTUlO1xuICAgICAgICBsZWZ0OiAtMTUlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG59XG4ud3JhcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb3Jte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG59XG4udGl0bGV7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcbiAgICB9XG59XG4ubG9nb3tcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5idXR0b257XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNpZ24tdXAtYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6cmdiYSgyMDMsMTcxLDExNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggNXB4ICNmMGYwZjA7XG59XG4ubGluay1idXR0b257XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmxpbmtzLWJsb2Nre1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pbnB1dC1maWVsZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmgxLGgye1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbn1cbmlvbi1pbnB1dHtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDE0MCwxNDEsMTQwKTtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDIwOSwxNzksMTI3KTtcbiAgICAtLWJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLnRpdGxle1xuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaDEsaDJ7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuICAgIGlvbi10ZXh0LCBwLCBoNSwgaW9uLWJ1dHRvbiwgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICAuc2lnbi11cC1idXR0b257XG4gICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICB9XG59Il19 */";
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var SignUpPage = /*#__PURE__*/function () {
        function SignUpPage(router, userService, toastCtrl, platform) {
          _classCallCheck(this, SignUpPage);

          this.router = router;
          this.userService = userService;
          this.toastCtrl = toastCtrl;
          this.platform = platform;
        }

        _createClass(SignUpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signupSpinner = false;
            this.hideCircle = false;
            this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
            this.onKeyboardShowOrHideCircle();
          }
        }, {
          key: "signUp",
          value: function signUp(form) {
            var _this = this;

            this.signupSpinner = true;

            if (form.valid) {
              if (this.checkIfPasswordsMatch(form.value.password, form.value.confirmPassword)) {
                delete form.value.confirmPassword;
                this.userService.signUp(form.value).subscribe(function (res) {}, function (err) {
                  _this.signupSpinner = false;
                  err.error.debug == 'ERR_USER_ALREADY_EXISTS' && _this.presentErrorToast('Email is already in use.');
                }, function () {
                  _this.signupSpinner = false;
                  form.resetForm();

                  _this.router.navigate(["home", "login"]);

                  _this.userService.checkIfIsOnLoginOrSignUpPage("/home/login");
                });
              } else {
                this.signupSpinner = false;
                this.presentErrorToast("Passwords dont match.");
              }
            } else {
              this.signupSpinner = false;
              this.presentErrorToast("Something is missing.");
            }
          }
        }, {
          key: "checkIfPasswordsMatch",
          value: function checkIfPasswordsMatch(password, confirmPassword) {
            if (password === confirmPassword) return true;else return false;
          }
        }, {
          key: "presentErrorToast",
          value: function presentErrorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: "danger"
                      });

                    case 2:
                      toast = _context.sent;
                      _context.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onKeyboardShowOrHideCircle",
          value: function onKeyboardShowOrHideCircle() {
            var _this2 = this;

            this.platform.keyboardDidShow.subscribe(function (ev) {
              _this2.hideCircle = true;
            });
            this.platform.keyboardDidHide.subscribe(function () {
              _this2.hideCircle = false;
            });
          }
        }]);

        return SignUpPage;
      }();

      SignUpPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-sign-up",
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignUpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-sign-up-sign-up-module-es5.js.map