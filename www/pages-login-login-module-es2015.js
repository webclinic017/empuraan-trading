(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "Como":
/*!*******************************!*\
  !*** ./capacitor.config.json ***!
  \*******************************/
/*! exports provided: appId, appName, webDir, npmClient, plugins, cordova, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"appId\":\"com.empuraanTradingApp.app\",\"appName\":\"Empuraan Trading App\",\"webDir\":\"www\",\"npmClient\":\"npm\",\"plugins\":{\"SplashScreen\":{\"launchShowDuration\":0},\"GoogleAuth\":{\"scopes\":[\"profile\",\"email\"],\"serverClientId\":\"142774913706-lknjtcuukrv4er4ffoai68jnm4r5rstk.apps.googleusercontent.com\",\"forceCodeForRefreshToken\":true}},\"cordova\":{\"preferences\":{\"ScrollEnabled\":\"true\",\"BackupWebStorage\":\"none\",\"SplashMaintainAspectRatio\":\"true\",\"FadeSplashScreenDuration\":\"300\",\"SplashShowOnlyFirstTime\":\"false\",\"SplashScreen\":\"screen\",\"SplashScreenDelay\":\"3000\"}}}");

/***/ }),

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*:focus {\n  outline: none;\n}\n\n.first-dark-orange-ball {\n  background-color: #C99A4C;\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n  position: absolute;\n  left: -46%;\n  top: -17%;\n}\n\n.first-dark-orange-ball .first-light-orange-ball {\n  background-color: #E0B64A;\n  height: 300px;\n  width: 300px;\n  top: -10%;\n  left: -13%;\n  border-radius: 50%;\n  position: relative;\n}\n\n.second-dark-orange-ball {\n  background-color: #E0B64A;\n  height: 230px;\n  width: 230px;\n  border-radius: 50%;\n  position: relative;\n  right: -45%;\n  bottom: -52%;\n}\n\n.second-dark-orange-ball .second-light-orange-ball {\n  background-color: #C99A4C;\n  height: 220px;\n  width: 220px;\n  bottom: -12%;\n  right: -11%;\n  border-radius: 50%;\n  position: relative;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n\n.wrap form {\n  width: 100%;\n  height: 90%;\n  position: absolute;\n}\n\n.logo {\n  height: 125px;\n  width: 125px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n}\n\n.title {\n  padding-bottom: 25px;\n}\n\n.title ion-label {\n  font-size: 35px;\n  font-weight: 700;\n}\n\n.input-field {\n  padding-bottom: 20px;\n}\n\n.button-col {\n  width: 100%;\n}\n\nion-input {\n  --placeholder-color: rgba(140,141,140);\n  --placeholder-opacity: 1;\n  font-size: 14px;\n}\n\nion-item {\n  --border-color: rgba(209,179,127);\n  --border-bottom-width: 2px;\n}\n\n.button {\n  width: 100%;\n  border-radius: 15px;\n  height: 50px;\n  font-size: 14px;\n}\n\n.login-button {\n  background-color: #215fcc;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.google-button {\n  background-color: #b92b21;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.google-button span {\n  padding-left: 10px;\n}\n\n.new-user-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  color: #cbab73;\n  box-shadow: 0 2px 5px 0px #c7c7c7;\n}\n\n.link-button {\n  float: left;\n  text-align: left;\n  background-color: transparent;\n  margin-top: 20px;\n}\n\n.links-block {\n  display: flex;\n  flex-direction: column;\n}\n\nh1, h2 {\n  padding: 0;\n  margin: 0;\n}\n\n@media screen and (max-width: 360px) {\n  h1, h2 {\n    font-size: 17px;\n  }\n\n  .title ion-label {\n    font-size: 17px;\n  }\n\n  ion-text, p, h5, ion-button, span {\n    font-size: 13px !important;\n  }\n\n  ion-icon {\n    font-size: 17px;\n  }\n\n  .login-button, .google-button, .new-user-button {\n    width: 100%;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFBMEIsYUFBQTtFQUMxQixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBR0o7O0FBRkk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSVI7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBRkk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSVI7O0FBREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFISTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFLUjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBS0o7O0FBSEE7RUFDSSxvQkFBQTtBQU1KOztBQUxJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBT1I7O0FBSkE7RUFDSSxvQkFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtBQVFKOztBQU5BO0VBQ0ksc0NBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGlDQUFBO0VBQ0EsMEJBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBV0o7O0FBVEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWUo7O0FBVkE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBYUo7O0FBWkk7RUFDSSxrQkFBQTtBQWNSOztBQVhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBYkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFnQko7O0FBZEE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQWlCSjs7QUFmQTtFQUNJO0lBQ0UsZUFBQTtFQWtCSjs7RUFmTTtJQUNJLGVBQUE7RUFrQlY7O0VBZkU7SUFDRSwwQkFBQTtFQWtCSjs7RUFoQkU7SUFDSSxlQUFBO0VBbUJOOztFQWpCRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBb0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmZpcnN0LWRhcmstb3JhbmdlLWJhbGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M5OUE0QztoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC00NiU7XG4gICAgdG9wOiAtMTclO1xuICAgIC5maXJzdC1saWdodC1vcmFuZ2UtYmFsbHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UwQjY0QTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB0b3A6IC0xMCU7XG4gICAgICAgIGxlZnQ6IC0xMyU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbn1cblxuLnNlY29uZC1kYXJrLW9yYW5nZS1iYWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEI2NEE7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogLTQ1JTtcbiAgICBib3R0b206IC01MiU7XG4gICAgLnNlY29uZC1saWdodC1vcmFuZ2UtYmFsbHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M5OUE0QztcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBib3R0b206IC0xMiU7XG4gICAgICAgIHJpZ2h0OiAtMTElO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG59XG4ud3JhcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb3Jte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG59XG4ubG9nb3tcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi50aXRsZXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgIH1cbn1cbi5pbnB1dC1maWVsZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5idXR0b24tY29se1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaW9uLWlucHV0e1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMTQwLDE0MSwxNDApO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjA5LDE3OSwxMjcpO1xuICAgIC0tYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuLmJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxvZ2luLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE1ZmNjO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdvb2dsZS1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5MmIyMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBzcGFue1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuLm5ldy11c2VyLWJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOnJnYmEoMjAzLDE3MSwxMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwcHggI2M3YzdjNztcbn1cbi5saW5rLWJ1dHRvbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGlua3MtYmxvY2t7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaDEsaDJ7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICBoMSxoMntcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLXRleHQsIHAsIGg1LCBpb24tYnV0dG9uLCBzcGFue1xuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuICAgIC5sb2dpbi1idXR0b24sIC5nb29nbGUtYnV0dG9uLCAubmV3LXVzZXItYnV0dG9ue1xuICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "OTqH":
/*!*******************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
  \*******************************************************************************/
/*! exports provided: GoogleAuthWeb, GoogleAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ "npad");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuth", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuth"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<div class=\"wrap\">\n\t\t<div class=\"first-dark-orange-ball\">\n\t\t\t<div class=\"first-light-orange-ball\"></div>\n\t\t</div>\n\t\t<div class=\"second-dark-orange-ball\" *ngIf=\"!hideCircle\">\n\t\t\t<div class=\"second-light-orange-ball\"></div>\n\t\t</div>\n\t\t<form #loginForm=\"ngForm\" class=\"ion-padding-horizontal\">\n\t\t\t<ion-img src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row class=\"title\">\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<ion-label>Log in</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Email address\" type=\"email\" required ngModel name=\"email\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Password\" type=\"password\" required ngModel name=\"password\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"button-col\">\n\t\t\t\t\t\t<button class=\"button login-button\" type=\"submit\" (click)=\"login(loginForm)\">\n\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t\t<ion-spinner color=\"light\" name=\"lines-small\" *ngIf=\"loginSpinner\"></ion-spinner>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<button class=\"button google-button\" (click)=\"google()\">\n\t\t\t\t\t\t\t<ion-icon name=\"logo-google\"></ion-icon>\n\t\t\t\t\t\t\t<span>Login with Google</span>\n\t\t\t\t\t\t\t<ion-spinner name=\"lines-small\" class=\"ion-padding-start\" *ngIf=\"googleSpinner\" color=\"light\"></ion-spinner>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<span>OR</span>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"links-block\" size=\"12\">\n\t\t\t\t\t\t<button color=\"tertiary\" size=\"small\" fill=\"clear\" class=\"button new-user-button\" routerLink=\"/home/sign-up\">Sign Up</button>\n\t\t\t\t\t\t<button color=\"tertiary\" size=\"small\" fill=\"clear\" class=\"link-button ion-float-right\" (click)=\"forgotPassword()\">Forgot password?</button>\n\t\t\t\t\t\t<!-- {{ userInfo | json}} -->\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</form>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ "OTqH");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modals_modal_fp_email_modal_fp_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/modal-fp-email/modal-fp-email.component */ "nJHT");










let LoginPage = class LoginPage {
    constructor(router, userService, modalCtrl, toastCtrl, platform) {
        this.router = router;
        this.userService = userService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
    }
    ngOnInit() {
        this.loginSpinner = false;
        this.googleSpinner = false;
        this.hideCircle = false;
        this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
        this.onKeyboardShowOrHideCircle();
    }
    login(form) {
        this.loginSpinner = true;
        if (form.valid) {
            this.userService.logIn(form.value).subscribe(() => { }, (err) => {
                this.loginSpinner = false;
                err.error.debug == 'ERR_AUTH_FAILED' && this.presentErrorToast('Email or password is incorrect.');
            }, () => {
                form.resetForm();
                this.loginSpinner = false;
                this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard');
                this.router.navigate(['home', 'dashboard']);
            });
        }
        else {
            this.loginSpinner = false;
            this.presentErrorToast('Something is missing.');
        }
    }
    google() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.googleSpinner = true;
            const googleUser = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].GoogleAuth.signIn();
            // console.log(googleUser.auth().currentUser.getToken())
            console.log(googleUser);
            this.userService.googleAuth(googleUser).finally(() => {
                this.googleSpinner = false;
                this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard');
                this.router.navigate(['home', 'dashboard']);
            });
        });
    }
    openForgotPasswordModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modals_modal_fp_email_modal_fp_email_component__WEBPACK_IMPORTED_MODULE_9__["ModalFpEmailComponent"]
            });
            return yield modal.present();
        });
    }
    forgotPassword() {
        this.openForgotPasswordModal();
    }
    presentErrorToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2500,
                color: 'danger'
            });
            yield toast.present();
        });
    }
    onKeyboardShowOrHideCircle() {
        this.platform.keyboardDidShow.subscribe(ev => {
            this.hideCircle = true;
        });
        this.platform.keyboardDidHide.subscribe(() => {
            this.hideCircle = false;
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "npad":
/*!*****************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/web.js ***!
  \*****************************************************************************/
/*! exports provided: GoogleAuthWeb, GoogleAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function() { return GoogleAuthWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuth", function() { return GoogleAuth; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../capacitor.config.json */ "Como");
var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../capacitor.config.json */ "Como", 1);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// @ts-ignore

class GoogleAuthWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    get webConfigured() {
        return document.getElementsByName('google-signin-client_id').length > 0;
    }
    constructor() {
        super({
            name: 'GoogleAuth',
            platforms: ['web']
        });
        if (!this.webConfigured)
            return;
        this.gapiLoaded = new Promise(resolve => {
            // HACK: Relying on window object, can't get property in gapi.load callback
            window.gapiResolve = resolve;
            this.initialize();
        });
        this.addUserChangeListener();
    }
    initialize() {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.defer = true;
        script.async = true;
        script.onload = this.platformJsLoaded;
        script.src = 'https://apis.google.com/js/platform.js';
        head.appendChild(script);
    }
    platformJsLoaded() {
        gapi.load('auth2', () => {
            const clientConfig = {
                client_id: document.getElementsByName('google-signin-client_id')[0].content
            };
            if (_capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth != null && _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes != null) {
                clientConfig.scope = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes.join(' ');
            }
            gapi.auth2.init(clientConfig);
            window.gapiResolve();
        });
    }
    signIn() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    var serverAuthCode;
                    var needsOfflineAccess = false;
                    try {
                        needsOfflineAccess = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.serverClientId != null;
                    }
                    catch (_a) {
                    }
                    if (needsOfflineAccess) {
                        const offlineAccessResponse = yield gapi.auth2.getAuthInstance().grantOfflineAccess();
                        serverAuthCode = offlineAccessResponse.code;
                    }
                    else {
                        yield gapi.auth2.getAuthInstance().signIn();
                    }
                    const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
                    if (needsOfflineAccess) {
                        // HACK: AuthResponse is null if we don't do this when using grantOfflineAccess
                        yield googleUser.reloadAuthResponse();
                    }
                    const user = this.getUserFrom(googleUser);
                    user.serverAuthCode = serverAuthCode;
                    resolve(user);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            const authResponse = yield gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
            return {
                accessToken: authResponse.access_token,
                idToken: authResponse.id_token
            };
        });
    }
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            return gapi.auth2.getAuthInstance().signOut();
        });
    }
    addUserChangeListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gapiLoaded;
            gapi.auth2.getAuthInstance().currentUser.listen(googleUser => {
                this.notifyListeners("userChange", googleUser.isSignedIn() ? this.getUserFrom(googleUser) : null);
            });
        });
    }
    getUserFrom(googleUser) {
        const user = {};
        const profile = googleUser.getBasicProfile();
        user.email = profile.getEmail();
        user.familyName = profile.getFamilyName();
        user.givenName = profile.getGivenName();
        user.id = profile.getId();
        user.imageUrl = profile.getImageUrl();
        user.name = profile.getName();
        const authResponse = googleUser.getAuthResponse(true);
        user.authentication = {
            accessToken: authResponse.access_token,
            idToken: authResponse.id_token
        };
        return user;
    }
}
const GoogleAuth = new GoogleAuthWeb();


Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(GoogleAuth);
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map