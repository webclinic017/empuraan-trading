(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"], {
    /***/
    "3Bst":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/account-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function Bst(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "S9xc");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }, {
        path: 'funds',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | funds-funds-module */
          "funds-funds-module").then(__webpack_require__.bind(null,
          /*! ./funds/funds.module */
          "fz24")).then(function (m) {
            return m.FundsPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "8V8a")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "OaGo")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'invite-friends',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | invite-friends-invite-friends-module */
          "invite-friends-invite-friends-module").then(__webpack_require__.bind(null,
          /*! ./invite-friends/invite-friends.module */
          "Ftk8")).then(function (m) {
            return m.InviteFriendsPageModule;
          });
        }
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    },

    /***/
    "4+IK":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.module.ts ***!
      \*************************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function IK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "3Bst");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.page */
      "S9xc");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "E4AK":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function E4AK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title slot=\"start\">Account</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"wrap\">\n\t\t<div class=\"white-circle-bg\"></div>\n\t\t<div class=\"user-info\">\n\t\t\t<ion-card mode=\"ios\" class=\"ion-padding-horizontal ion-no-margin account-card\" [routerLink]=\"['profile']\">\n\t\t\t\t<ion-grid>\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t\t<ion-card-title type=\"md\">{{user.username}}</ion-card-title>\n\t\t\t\t\t\t\t<ion-card-subtitle type=\"md\">{{user.email | uppercase}}</ion-card-subtitle>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<div class=\"ion-float-right account-img\">\n\t\t\t\t\t\t\t\t<span>{{user.username[0]+user.username[1]}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-grid>\n\t\t\t</ion-card>\n\t\t\t<ion-card mode=\"ios\" class=\"ion-no-margin\">\n\t\t\t\t<ion-list>\n\t\t\t\t\t<!-- <ion-item class=\"ion-no-padding account-card-link funds-link\" [routerLink]=\"['funds']\">\n\t\t\t\t\t\t<ion-text>Funds</ion-text>\n\t\t\t\t\t\t<ion-icon name=\"cash-outline\" class=\"ion-margin-end icon\"></ion-icon>\n\t\t\t\t\t</ion-item> -->\n\t\t\t\t\t<ion-item class=\"ion-no-padding account-card-link\" [routerLink]=\"['profile']\">\n\t\t\t\t\t\t<ion-text>Profile</ion-text>\n\t\t\t\t\t\t<ion-icon src=\"/assets/svg/user.svg\" class=\"ion-margin-end icon\"></ion-icon>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"ion-no-padding account-card-link\" [routerLink]=\"['settings']\">\n\t\t\t\t\t\t<ion-text>Settings</ion-text>\n\t\t\t\t\t\t<ion-icon src=\"/assets/svg/Settings.svg\" class=\"ion-margin-end icon\"></ion-icon>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"ion-no-padding account-card-link\" [routerLink]=\"['invite-friends']\">\n\t\t\t\t\t\t<ion-text>Invite friends</ion-text>\n\t\t\t\t\t\t<ion-icon src=\"/assets/svg/user-add.svg\" class=\"ion-margin-end icon\"></ion-icon>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"ion-no-padding account-card-link\" (click)=\"logout()\">\n\t\t\t\t\t\t<ion-text>Logout</ion-text>\n\t\t\t\t\t\t<ion-icon src=\"/assets/svg/Logout.svg\" class=\"ion-margin-end icon\"></ion-icon>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</ion-card>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "S9xc":
    /*!***********************************************!*\
      !*** ./src/app/pages/account/account.page.ts ***!
      \***********************************************/

    /*! exports provided: AccountPage */

    /***/
    function S9xc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account.page.html */
      "E4AK");
      /* harmony import */


      var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account.page.scss */
      "c5PT");
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

      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(router, userService) {
          _classCallCheck(this, AccountPage);

          this.router = router;
          this.userService = userService;
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.authenticated.subscribe(function (u) {
              return _this.user = u.user;
            });
            this.userService.accountDetails().subscribe();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.userService.logout();
            this.router.navigate(['home', 'login']);
            this.userService.checkIfIsOnLoginOrSignUpPage('/home/login');
          }
        }, {
          key: "hasNoImgUrl",
          value: function hasNoImgUrl() {
            if (this.user.imgUrl.length == 2) return true;else return false;
          }
        }]);

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      };

      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccountPage);
      /***/
    },

    /***/
    "c5PT":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function c5PT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wrap {\n  background-color: #C99A4C;\n  height: 100%;\n  padding: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrap .white-circle-bg {\n  width: 150%;\n  height: 90%;\n  background-color: white;\n  position: absolute;\n  border-radius: 50%;\n}\n.wrap .user-info {\n  width: 100%;\n}\n.wrap .user-info .account-card {\n  margin-bottom: 50px;\n}\n.wrap ion-text, .wrap hr {\n  z-index: 10;\n  margin: 20px;\n  font-weight: 700;\n  font-size: 14px;\n}\n.logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n*:focus {\n  outline: none;\n}\n.account-img {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #ffff7f;\n  box-shadow: 0px 2px 3px 1px #ebebeb;\n}\n.account-img span {\n  text-align: center;\n  font-size: 35px;\n  color: black;\n  text-transform: capitalize;\n}\n.account-card-link {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.account-card-link .icon {\n  font-size: 25px;\n  margin-left: auto;\n  color: #dbb962 !important;\n}\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\nion-title {\n  color: black;\n}\nion-card-title {\n  font-size: 18px;\n}\nion-card-subtitle {\n  font-size: 11px !important;\n}\n@media screen and (max-width: 360px) {\n  ion-title, h3, ion-card-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-text, p, h5, ion-card-subtitle {\n    font-size: 10px !important;\n  }\n\n  ion-icon {\n    font-size: 17px;\n  }\n\n  .account-img {\n    height: 75px;\n    width: 75px;\n    border-radius: 50%;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0FBRVI7QUFEUTtFQUNJLG1CQUFBO0FBR1o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRVI7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFBO0VBQ0ksYUFBQTtBQUdKO0FBREE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUFJSjtBQUhJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBS1I7QUFGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFLSjtBQUpJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFNUjtBQUhBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFNSjtBQUpBO0VBQ0ksWUFBQTtBQU9KO0FBTEU7RUFDSSxlQUFBO0FBUU47QUFORTtFQUNJLDBCQUFBO0FBU047QUFQQTtFQUNJO0lBQ0UsMEJBQUE7RUFVSjs7RUFSRTtJQUNFLDBCQUFBO0VBV0o7O0VBVEU7SUFDSSxlQUFBO0VBWU47O0VBVkU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBYU47QUFDRjtBQVhBO0VBQ0k7SUFDSSxZQUFBO0VBYU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzk5QTRDO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAud2hpdGUtY2lyY2xlLWJne1xuICAgICAgICB3aWR0aDogMTUwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLnVzZXItaW5mb3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5hY2NvdW50LWNhcmR7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi10ZXh0LCBocntcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICB9XG59XG4ubG9nb3tcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbio6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uYWNjb3VudC1pbWd7XG4gICAgaGVpZ2h0OiA3MHB4OyBcbiAgICB3aWR0aDogNzBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmN2Y7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggMXB4ICNlYmViZWI7XG4gICAgc3BhbntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG4uYWNjb3VudC1jYXJkLWxpbmt7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5pY29ue1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBjb2xvcjogI2RiYjk2MiAhaW1wb3J0YW50O1xuICAgIH1cbn1cbmhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjcsIDE2NywgMTY3LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOmJsYWNrO1xuICB9XG4gIGlvbi1jYXJkLXRpdGxle1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIH1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgaW9uLXRpdGxlLCBoMywgaW9uLWNhcmQtdGl0bGV7XG4gICAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGlvbi10ZXh0LCBwLCBoNSwgaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG4gICAgLmFjY291bnQtaW1ne1xuICAgICAgICBoZWlnaHQ6IDc1cHg7IFxuICAgICAgICB3aWR0aDogNzVweDsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG59XG5AbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICBpb24tdGl0bGV7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-account-account-module-es5.js.map