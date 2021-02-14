(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "Como":
    /*!*******************************!*\
      !*** ./capacitor.config.json ***!
      \*******************************/

    /*! exports provided: appId, appName, webDir, npmClient, plugins, cordova, default */

    /***/
    function Como(module) {
      module.exports = JSON.parse("{\"appId\":\"com.empuraanTradingApp.app\",\"appName\":\"Empuraan Trading App\",\"webDir\":\"www\",\"npmClient\":\"npm\",\"plugins\":{\"SplashScreen\":{\"launchShowDuration\":0},\"GoogleAuth\":{\"scopes\":[\"profile\",\"email\"],\"serverClientId\":\"142774913706-4qu129d7tuu8pm504lq51md0f6n0aluc.apps.googleusercontent.com\",\"forceCodeForRefreshToken\":true}},\"cordova\":{\"preferences\":{\"ScrollEnabled\":\"true\",\"BackupWebStorage\":\"none\",\"SplashMaintainAspectRatio\":\"true\",\"FadeSplashScreenDuration\":\"300\",\"SplashShowOnlyFirstTime\":\"false\",\"SplashScreen\":\"screen\",\"SplashScreenDelay\":\"3000\"}}}");
      /***/
    },

    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "H+1c":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function H1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "*:focus {\n  outline: none;\n}\n\n.first-dark-orange-ball {\n  background-color: #C99A4C;\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translateX(-62%) translateY(-45%);\n}\n\n.first-dark-orange-ball .first-light-orange-ball {\n  background-color: #E0B64A;\n  height: 300px;\n  width: 300px;\n  top: -10%;\n  left: -13%;\n  border-radius: 50%;\n  position: relative;\n}\n\n.second-dark-orange-ball {\n  background-color: #E0B64A;\n  height: 230px;\n  width: 230px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translateX(100%) translateY(-40%);\n}\n\n.second-dark-orange-ball .second-light-orange-ball {\n  background-color: #C99A4C;\n  height: 220px;\n  width: 220px;\n  bottom: -12%;\n  right: -11%;\n  border-radius: 50%;\n  position: relative;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.wrap form {\n  width: 100%;\n  height: 90%;\n}\n\n.logo {\n  height: 125px;\n  width: 125px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n}\n\n.title {\n  padding-bottom: 25px;\n}\n\n.title ion-label {\n  font-size: 35px;\n  font-weight: 700;\n}\n\n.input-field {\n  padding-bottom: 20px;\n}\n\n.button-col {\n  width: 100%;\n}\n\nion-input {\n  --placeholder-color: rgba(140,141,140);\n  --placeholder-opacity: 1;\n  font-size: 15px;\n}\n\nion-item {\n  --border-color: rgba(209,179,127);\n  --border-bottom-width: 2px;\n}\n\n.button {\n  width: 100%;\n  border-radius: 15px;\n  height: 50px;\n  font-size: 14px;\n}\n\n.login-button {\n  background-color: #215fcc;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.google-button {\n  background-color: #b92b21;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.google-button span {\n  padding-left: 10px;\n}\n\n.new-user-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  color: #cbab73;\n  box-shadow: 0 0 15px 5px #f0f0f0;\n}\n\n.link-button {\n  float: left;\n  text-align: left;\n  background-color: transparent;\n  margin-top: 20px;\n}\n\n.links-block {\n  display: flex;\n  flex-direction: column;\n}\n\nh1, h2 {\n  padding: 0;\n  margin: 0;\n}\n\n@media screen and (max-width: 360px) {\n  h1, h2 {\n    font-size: 17px;\n  }\n\n  ion-label, ion-text, p, h5, ion-button, span {\n    font-size: 13px !important;\n  }\n\n  ion-icon {\n    font-size: 17px;\n  }\n\n  .login-button {\n    width: 100%;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFBMEIsYUFBQTtFQUMxQixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FBR0o7O0FBRkk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSVI7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FBR0o7O0FBRkk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSVI7O0FBREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSUo7O0FBSEk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUtSOztBQUZBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFLSjs7QUFIQTtFQUNJLG9CQUFBO0FBTUo7O0FBTEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFPUjs7QUFKQTtFQUNJLG9CQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksaUNBQUE7RUFDQSwwQkFBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFXSjs7QUFUQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFZSjs7QUFWQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFhSjs7QUFaSTtFQUNJLGtCQUFBO0FBY1I7O0FBWEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFjSjs7QUFaQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQWdCSjs7QUFkQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBaUJKOztBQWZBO0VBQ0k7SUFDRSxlQUFBO0VBa0JKOztFQWhCRTtJQUNFLDBCQUFBO0VBbUJKOztFQWpCRTtJQUNJLGVBQUE7RUFvQk47O0VBbEJFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFxQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIio6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uZmlyc3QtZGFyay1vcmFuZ2UtYmFsbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzk5QTRDO2hlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MiUpIHRyYW5zbGF0ZVkoLTQ1JSk7XG4gICAgLmZpcnN0LWxpZ2h0LW9yYW5nZS1iYWxse1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBCNjRBO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgbGVmdDogLTEzJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxufVxuXG4uc2Vjb25kLWRhcmstb3JhbmdlLWJhbGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwQjY0QTtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSB0cmFuc2xhdGVZKC00MCUpO1xuICAgIC5zZWNvbmQtbGlnaHQtb3JhbmdlLWJhbGx7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOTlBNEM7XG4gICAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgYm90dG9tOiAtMTIlO1xuICAgICAgICByaWdodDogLTExJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxufVxuLndyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGZvcm17XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICB9XG59XG4ubG9nb3tcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi50aXRsZXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgIH1cbn1cbi5pbnB1dC1maWVsZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5idXR0b24tY29se1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaW9uLWlucHV0e1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMTQwLDE0MSwxNDApO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjA5LDE3OSwxMjcpO1xuICAgIC0tYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuLmJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxvZ2luLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE1ZmNjO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdvb2dsZS1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5MmIyMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBzcGFue1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuLm5ldy11c2VyLWJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOnJnYmEoMjAzLDE3MSwxMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IDVweCAjZjBmMGYwO1xufVxuLmxpbmstYnV0dG9ue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5saW5rcy1ibG9ja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5oMSxoMntcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGgxLGgye1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGlvbi10ZXh0LCBwLCBoNSwgaW9uLWJ1dHRvbiwgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICAubG9naW4tYnV0dG9ue1xuICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "OTqH":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
      \*******************************************************************************/

    /*! exports provided: GoogleAuthWeb, GoogleAuth */

    /***/
    function OTqH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./web */
      "npad");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function () {
        return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GoogleAuth", function () {
        return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuth"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "TuYN":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function TuYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\t<div class=\"first-dark-orange-ball\">\n\t\t<div class=\"first-light-orange-ball\"></div>\n\t</div>\n\t<div class=\"wrap\">\n\t\t<form #loginForm=\"ngForm\" class=\"ion-padding-horizontal\">\n\t\t\t<ion-img src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row class=\"title\">\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<ion-label>Log in</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Email address\" type=\"email\" required ngModel name=\"email\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"input-field\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Password\" type=\"password\" required ngModel name=\"password\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"button-col\">\n\t\t\t\t\t\t<button class=\"button login-button\" type=\"submit\" (click)=\"login(loginForm)\">\n\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t\t<ion-spinner color=\"light\" name=\"lines-small\" *ngIf=\"loginSpinner\"></ion-spinner>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<button class=\"button google-button\" (click)=\"google()\">\n\t\t\t\t\t\t\t<ion-icon name=\"logo-google\"></ion-icon>\n\t\t\t\t\t\t\t<span>Login with Google</span>\n\t\t\t\t\t\t\t<ion-spinner name=\"lines-small\" class=\"ion-padding-start\" *ngIf=\"googleSpinner\" color=\"light\"></ion-spinner>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<span>OR</span>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"links-block\" size=\"12\">\n\t\t\t\t\t\t<button color=\"tertiary\" size=\"small\" fill=\"clear\" class=\"button new-user-button\" routerLink=\"/home/sign-up\">Sign Up</button>\n\t\t\t\t\t\t<button color=\"tertiary\" size=\"small\" fill=\"clear\" class=\"link-button ion-float-right\" (click)=\"forgotPassword(loginForm)\">Forgot password?</button>\n\t\t\t\t\t\t<!-- {{ userInfo | json}} -->\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</form>\n\t</div>\n\t<div class=\"second-dark-orange-ball\">\n\t\t<div class=\"second-light-orange-ball\"></div>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "bP1B":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function bP1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "TuYN");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "H+1c");
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
      /* harmony import */


      var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @codetrix-studio/capacitor-google-auth */
      "OTqH");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_modal_fp_email_modal_fp_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modals/modal-fp-email/modal-fp-email.component */
      "nJHT");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, userService, modalCtrl, toastCtrl) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.userService = userService;
          this.modalCtrl = modalCtrl;
          this.toastCtrl = toastCtrl;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginSpinner = false;
            this.googleSpinner = false;
            this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
          }
        }, {
          key: "login",
          value: function login(form) {
            var _this = this;

            this.loginSpinner = true;

            if (form.valid) {
              this.userService.logIn(form.value).subscribe(function () {}, function (err) {
                _this.loginSpinner = false;
                err.error.debug == 'ERR_AUTH_FAILED' && _this.presentErrorToast('Email or password is incorrect.');
              }, function () {
                form.resetForm();
                _this.loginSpinner = false;

                _this.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard');

                _this.router.navigate(['home', 'dashboard']);
              });
            } else {
              this.loginSpinner = false;
              this.presentErrorToast('Something is missing.');
            }
          }
        }, {
          key: "google",
          value: function google() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var googleUser;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.googleSpinner = true;
                      _context.next = 3;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].GoogleAuth.signIn();

                    case 3:
                      googleUser = _context.sent;
                      console.log(googleUser);
                      this.userService.googleAuth(googleUser)["finally"](function () {
                        _this2.googleSpinner = false;

                        _this2.userService.checkIfIsOnLoginOrSignUpPage('/home/dashboard');

                        _this2.router.navigate(['home', 'dashboard']);
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openForgotPasswordModal",
          value: function openForgotPasswordModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: src_app_modals_modal_fp_email_modal_fp_email_component__WEBPACK_IMPORTED_MODULE_9__["ModalFpEmailComponent"]
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword() {
            this.openForgotPasswordModal();
          }
        }, {
          key: "presentErrorToast",
          value: function presentErrorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: 'danger'
                      });

                    case 2:
                      toast = _context3.sent;
                      _context3.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "npad":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/web.js ***!
      \*****************************************************************************/

    /*! exports provided: GoogleAuthWeb, GoogleAuth */

    /***/
    function npad(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function () {
        return GoogleAuthWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleAuth", function () {
        return GoogleAuth;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../capacitor.config.json */
      "Como");

      var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../capacitor.config.json */
      "Como", 1);

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }; // @ts-ignore


      var GoogleAuthWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(GoogleAuthWeb, _capacitor_core__WEBP);

        var _super = _createSuper(GoogleAuthWeb);

        _createClass(GoogleAuthWeb, [{
          key: "webConfigured",
          get: function get() {
            return document.getElementsByName('google-signin-client_id').length > 0;
          }
        }]);

        function GoogleAuthWeb() {
          var _this3;

          _classCallCheck(this, GoogleAuthWeb);

          _this3 = _super.call(this, {
            name: 'GoogleAuth',
            platforms: ['web']
          });
          if (!_this3.webConfigured) return _possibleConstructorReturn(_this3);
          _this3.gapiLoaded = new Promise(function (resolve) {
            // HACK: Relying on window object, can't get property in gapi.load callback
            window.gapiResolve = resolve;

            _this3.initialize();
          });

          _this3.addUserChangeListener();

          return _this3;
        }

        _createClass(GoogleAuthWeb, [{
          key: "initialize",
          value: function initialize() {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.defer = true;
            script.async = true;
            script.onload = this.platformJsLoaded;
            script.src = 'https://apis.google.com/js/platform.js';
            head.appendChild(script);
          }
        }, {
          key: "platformJsLoaded",
          value: function platformJsLoaded() {
            gapi.load('auth2', function () {
              var clientConfig = {
                client_id: document.getElementsByName('google-signin-client_id')[0].content
              };

              if (_capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth != null && _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes != null) {
                clientConfig.scope = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes.join(' ');
              }

              gapi.auth2.init(clientConfig);
              window.gapiResolve();
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", new Promise(function (resolve, reject) {
                        return __awaiter(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var serverAuthCode, needsOfflineAccess, offlineAccessResponse, googleUser, user;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.prev = 0;
                                  needsOfflineAccess = false;

                                  try {
                                    needsOfflineAccess = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.serverClientId != null;
                                  } catch (_a) {}

                                  if (!needsOfflineAccess) {
                                    _context4.next = 10;
                                    break;
                                  }

                                  _context4.next = 6;
                                  return gapi.auth2.getAuthInstance().grantOfflineAccess();

                                case 6:
                                  offlineAccessResponse = _context4.sent;
                                  serverAuthCode = offlineAccessResponse.code;
                                  _context4.next = 12;
                                  break;

                                case 10:
                                  _context4.next = 12;
                                  return gapi.auth2.getAuthInstance().signIn();

                                case 12:
                                  googleUser = gapi.auth2.getAuthInstance().currentUser.get();

                                  if (!needsOfflineAccess) {
                                    _context4.next = 16;
                                    break;
                                  }

                                  _context4.next = 16;
                                  return googleUser.reloadAuthResponse();

                                case 16:
                                  user = this.getUserFrom(googleUser);
                                  user.serverAuthCode = serverAuthCode;
                                  resolve(user);
                                  _context4.next = 24;
                                  break;

                                case 21:
                                  _context4.prev = 21;
                                  _context4.t0 = _context4["catch"](0);
                                  reject(_context4.t0);

                                case 24:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this, [[0, 21]]);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "refresh",
          value: function refresh() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var authResponse;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();

                    case 2:
                      authResponse = _context6.sent;
                      return _context6.abrupt("return", {
                        accessToken: authResponse.access_token,
                        idToken: authResponse.id_token
                      });

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", gapi.auth2.getAuthInstance().signOut());

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "addUserChangeListener",
          value: function addUserChangeListener() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.gapiLoaded;

                    case 2:
                      gapi.auth2.getAuthInstance().currentUser.listen(function (googleUser) {
                        _this5.notifyListeners("userChange", googleUser.isSignedIn() ? _this5.getUserFrom(googleUser) : null);
                      });

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getUserFrom",
          value: function getUserFrom(googleUser) {
            var user = {};
            var profile = googleUser.getBasicProfile();
            user.email = profile.getEmail();
            user.familyName = profile.getFamilyName();
            user.givenName = profile.getGivenName();
            user.id = profile.getId();
            user.imageUrl = profile.getImageUrl();
            user.name = profile.getName();
            var authResponse = googleUser.getAuthResponse(true);
            user.authentication = {
              accessToken: authResponse.access_token,
              idToken: authResponse.id_token
            };
            return user;
          }
        }]);

        return GoogleAuthWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var GoogleAuth = new GoogleAuthWeb();
      Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(GoogleAuth); //# sourceMappingURL=web.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map