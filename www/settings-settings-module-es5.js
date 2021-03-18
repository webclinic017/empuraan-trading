(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
    /***/
    "/rC/":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/settings/settings.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/home/account\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Settings</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item class=\"ion-padding-horizontal\">\n\t\t\t<ion-label>Data type</ion-label>\n\t\t\t<ion-select value=\"simulated\" (ionChange)=\"dataChange()\" [(ngModel)]=\"datatype\">\n\t\t\t\t<ion-select-option value=\"realtime\" disabled>Real-time</ion-select-option>\n\t\t\t\t<ion-select-option value=\"simulated\">Simulated</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-item class=\"ion-padding-horizontal\">\n\t\t  <ion-label>Risk %</ion-label>\n\t\t  <ion-input class=\"ion-text-right\" type=\"number\" [(ngModel)]=\"risk\" (ionChange)=\"dataChange()\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item class=\"ion-padding-horizontal\">\n\t\t  <ion-label>Leverage</ion-label>\n\t\t  <ion-select value=\"0\" [(ngModel)]=\"leverage\" (ionChange)=\"dataChange()\">\n\t\t\t  <ion-select-option value=\"1\">1</ion-select-option>\n\t\t\t  <ion-select-option value=\"2\">2</ion-select-option>\n\t\t\t  <ion-select-option value=\"3\">3</ion-select-option>\n\t\t\t  <ion-select-option value=\"4\">4</ion-select-option>\n\t\t\t  <ion-select-option value=\"5\">5</ion-select-option>\n\t\t\t  <ion-select-option value=\"6\">6</ion-select-option>\n\t\t  </ion-select>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "3f5z":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/account/settings/settings-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SettingsPageRoutingModule */

    /***/
    function f5z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
        return SettingsPageRoutingModule;
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.page */
      "iv9z");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
      }];

      var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsPageRoutingModule);
      /***/
    },

    /***/
    "OaGo":
    /*!***********************************************************!*\
      !*** ./src/app/pages/account/settings/settings.module.ts ***!
      \***********************************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function OaGo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings-routing.module */
      "3f5z");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "iv9z");

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    },

    /***/
    "iv9z":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/settings/settings.page.ts ***!
      \*********************************************************/

    /*! exports provided: SettingsPage */

    /***/
    function iv9z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.page.html */
      "/rC/");
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.page.scss */
      "qwMN");
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


      var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/watchlist.service */
      "Tl0h");

      var SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(router, userService, watchlistService) {
          _classCallCheck(this, SettingsPage);

          this.router = router;
          this.userService = userService;
          this.watchlistService = watchlistService;
        }

        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.getSettings().subscribe(function (r) {
              _this.datatype = r.data.datatype;
              _this.risk = r.data.risk;
              _this.leverage = r.data.leverage.toString();
              _this._id = r.data._id;
            });
          }
        }, {
          key: "navigateToAccount",
          value: function navigateToAccount() {
            this.router.navigate(['home', 'account']);
          }
        }, {
          key: "dataChange",
          value: function dataChange() {
            this.userService.updateSettings(this._id, this.datatype, this.risk, this.leverage).subscribe();
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__["WatchlistService"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingsPage);
      /***/
    },

    /***/
    "qwMN":
    /*!***********************************************************!*\
      !*** ./src/app/pages/account/settings/settings.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function qwMN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\n*:focus {\n  outline: none;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.wrap form {\n  width: 100%;\n  height: 60%;\n}\n\n.title {\n  padding-bottom: 25px;\n}\n\n.title ion-label {\n  font-size: 35px;\n  font-weight: 700;\n}\n\nion-list {\n  margin-top: 50px;\n}\n\nion-input, ion-select {\n  font-size: 15px;\n}\n\nion-item {\n  --border-color: #c2c2c2;\n  --border-bottom-width: 2px;\n  margin-top: 10px;\n}\n\nion-item ion-label {\n  color: #C99A4C;\n}\n\nion-back-button {\n  --color:#E0B64A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpREFBQTtBQUFKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVKOztBQURJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFHUjs7QUFBQTtFQUNJLG9CQUFBO0FBR0o7O0FBRkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFJUjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFMSTtFQUNJLGNBQUE7QUFPUjs7QUFKQTtFQUNJLGVBQUE7QUFPSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tdG9vbGJhcntcbiAgICBib3gtc2hhZG93OiAwcHggLTRweCAyMHB4IDExcHggI2ZhZmFmYSAhaW1wb3J0YW50O1xufVxuKjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLndyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGZvcm17XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICB9XG59XG4udGl0bGV7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcbiAgICB9XG59XG5pb24tbGlzdHtcbiAgICBtYXJnaW4tdG9wOjUwcHg7XG59XG5pb24taW5wdXQsIGlvbi1zZWxlY3R7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjYzJjMmMyO1xuICAgIC0tYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGNvbG9yOiNDOTlBNEM7XG4gICAgfVxufVxuaW9uLWJhY2stYnV0dG9ue1xuICAgIC0tY29sb3I6I0UwQjY0QTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=settings-settings-module-es5.js.map