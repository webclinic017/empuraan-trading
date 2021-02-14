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


      __webpack_exports__["default"] = "<ion-content>\n\t<div class=\"wrap\">\n\t\t<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUp(signUpForm)\" class=\"ion-padding-horizontal\">\n\t\t\t<ion-img src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row class=\"title\">\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<ion-label>Sign Up</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Username\" required ngModel name=\"username\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Email address\" type=\"email\" required ngModel name=\"email\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Password\" type=\"password\" required ngModel name=\"password\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Confirm Password\" type=\"password\" required ngModel name=\"confirmPassword\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<button type=\"submit\" class=\"button sign-up-button\">\n\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t<ion-spinner color=\"light\" name=\"lines-small\" *ngIf=\"signupSpinner\"></ion-spinner>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<button color=\"tertiary\" size=\"small\" expand=\"block\" fill=\"clear\" class=\"ion-float-left link-button\" routerLink=\"/home/login\">Already have an account? <b>Sign In</b></button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</form>\n\t</div>\n\t<div class=\"second-dark-orange-ball\">\n\t\t<div class=\"second-light-orange-ball\"></div>\n\t</div>\n</ion-content>\n";
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


      __webpack_exports__["default"] = "* {\n  outline: none;\n}\n\n.second-dark-orange-ball {\n  background-color: #E0B64A;\n  height: 230px;\n  width: 230px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translateX(-40%) translateY(-40%);\n}\n\n.second-dark-orange-ball .second-light-orange-ball {\n  background-color: #C99A4C;\n  height: 220px;\n  width: 220px;\n  bottom: -15%;\n  left: -15%;\n  border-radius: 50%;\n  position: relative;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.wrap form {\n  width: 100%;\n  height: 90%;\n}\n\n.title {\n  padding-bottom: 25px;\n}\n\n.title ion-label {\n  font-size: 35px;\n  font-weight: 700;\n}\n\n.logo {\n  height: 125px;\n  width: 125px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n}\n\n.button {\n  width: 100%;\n  border-radius: 15px;\n  height: 50px;\n  font-size: 14px;\n}\n\n.sign-up-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  color: #cbab73;\n  box-shadow: 0 0 15px 5px #f0f0f0;\n}\n\n.link-button {\n  float: left;\n  text-align: left;\n  background-color: transparent;\n  margin-top: 20px;\n}\n\n.links-block {\n  display: flex;\n  flex-direction: column;\n}\n\n.input-field {\n  padding-bottom: 20px;\n}\n\nh1, h2 {\n  padding: 0;\n  margin: 0;\n}\n\nion-input {\n  --placeholder-color: rgba(140,141,140);\n  --placeholder-opacity: 1;\n  font-size: 14px;\n}\n\nion-item {\n  --border-color: rgba(209,179,127);\n  --border-bottom-width: 2px;\n}\n\n@media screen and (max-width: 360px) {\n  h1, h2 {\n    font-size: 17px;\n  }\n\n  ion-label, ion-text, p, h5, ion-button, span {\n    font-size: 13px !important;\n  }\n\n  ion-icon {\n    font-size: 17px;\n  }\n\n  .sign-up-button {\n    width: 100%;\n    height: 40px;\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFDSjs7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFUjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBR1I7O0FBQUE7RUFDSSxvQkFBQTtBQUdKOztBQUZJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSVI7O0FBREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBT0o7O0FBTEE7RUFDSSxvQkFBQTtBQVFKOztBQU5BO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFTSjs7QUFQQTtFQUNJLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxpQ0FBQTtFQUNBLDBCQUFBO0FBV0o7O0FBVEE7RUFDSTtJQUNFLGVBQUE7RUFZSjs7RUFWRTtJQUNFLDBCQUFBO0VBYUo7O0VBWEU7SUFDSSxlQUFBO0VBY047O0VBWkU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0VBZU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWNvbmQtZGFyay1vcmFuZ2UtYmFsbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBCNjRBO1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MCUpIHRyYW5zbGF0ZVkoLTQwJSk7XG4gICAgLnNlY29uZC1saWdodC1vcmFuZ2UtYmFsbHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M5OUE0QztcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBib3R0b206IC0xNSU7XG4gICAgICAgIGxlZnQ6IC0xNSU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbn1cbi53cmFwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBmb3Jte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgfVxufVxuLnRpdGxle1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBmb250LXdlaWdodDo3MDA7XG4gICAgfVxufVxuLmxvZ297XG4gICAgaGVpZ2h0OiAxMjVweDtcbiAgICB3aWR0aDogMTI1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zaWduLXVwLWJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOnJnYmEoMjAzLDE3MSwxMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IDVweCAjZjBmMGYwO1xufVxuLmxpbmstYnV0dG9ue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5saW5rcy1ibG9ja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaW5wdXQtZmllbGR7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5oMSxoMntcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG59XG5pb24taW5wdXR7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgxNDAsMTQxLDE0MCk7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyMDksMTc5LDEyNyk7XG4gICAgLS1ib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGgxLGgye1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGlvbi10ZXh0LCBwLCBoNSwgaW9uLWJ1dHRvbiwgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICAuc2lnbi11cC1idXR0b257XG4gICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICB9XG59Il19 */";
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
        function SignUpPage(router, userService, toastCtrl) {
          _classCallCheck(this, SignUpPage);

          this.router = router;
          this.userService = userService;
          this.toastCtrl = toastCtrl;
        }

        _createClass(SignUpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signupSpinner = false;
            this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
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
          } // generateUser(res) {
          // 	let user: User = {
          // 		email: res.user.email,
          // 		username: res.user.username,
          // 		balance: {
          // 			availableBal: 0,
          // 			openBal: 0,
          // 		},
          // 	};
          // 	this.userService.accountDetails().subscribe(
          // 		(res: any) => {
          // 			user.balance.availableBal = res.account.initialValue;
          // 			user.balance.openBal = parseFloat(res.account.currentBalance);
          // 			user.balance.currency = res.account.currency;
          // 		},
          // 		() => {},
          // 		() => this.userService.user.next(user)
          // 	);
          // }

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