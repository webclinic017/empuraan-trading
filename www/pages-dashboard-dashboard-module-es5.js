(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
    /***/
    "/2RN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardPageModule */

    /***/
    function RN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
        return DashboardPageModule;
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "ea/W");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard.page */
      "6ckw");
      /* harmony import */


      var _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./leaderboard/leaderboard.page */
      "Rmqo");

      var DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_7__["LeaderboardPage"]]
      })], DashboardPageModule);
      /***/
    },

    /***/
    "6ckw":
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
      \***************************************************/

    /*! exports provided: DashboardPage */

    /***/
    function ckw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "spzo");
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      "ws6Y");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/leaderboard.service */
      "NONO");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! highcharts */
      "6n/F");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(sanitizer, router, leaderboardService, navCtrl, userService) {
          _classCallCheck(this, DashboardPage);

          this.sanitizer = sanitizer;
          this.router = router;
          this.leaderboardService = leaderboardService;
          this.navCtrl = navCtrl;
          this.userService = userService;
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.leaderboard = this.leaderboardService.leaderboard;
            this.user = this.userService.user;
            this.checkIfItIsDashboard();
          }
        }, {
          key: "sanitizeUrl",
          value: function sanitizeUrl(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.plotSimpleBarChart();
          }
        }, {
          key: "plotSimpleBarChart",
          value: function plotSimpleBarChart() {
            var myChart = highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('highcharts', {
              chart: {
                type: 'line'
              },
              title: {
                text: 'Funds Overview'
              },
              xAxis: {
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
              },
              series: [{
                // name: 'Capital',
                type: undefined,
                data: [0, 500, 550, 620, 790, 950, 1200, 810, 910]
              }]
            });
          }
        }, {
          key: "navigateToLeaderboard",
          value: function navigateToLeaderboard() {
            this.router.navigate(['home', 'dashboard', 'leaderboard']);
          }
        }, {
          key: "navigateToLearning",
          value: function navigateToLearning() {
            this.router.navigate(['home', 'learning']);
          }
        }, {
          key: "checkIfItIsDashboard",
          value: function checkIfItIsDashboard() {
            this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
          }
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_7__["LeaderboardService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }];
      };

      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardPage);
      /***/
    },

    /***/
    "9lGJ":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/dashboard/leaderboard/leaderboard.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function lGJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".leaderboard-table {\n  width: 100%;\n}\n.leaderboard-table tr {\n  border-bottom: 1px solid #cecece;\n}\n.leaderboard-table td, .leaderboard-table th {\n  width: 33%;\n  text-align: center;\n  padding: 15px 0;\n}\n.leaderboard-table td:first-child, .leaderboard-table th:first-child {\n  text-align: left;\n  padding-left: 15px;\n  border-right: 1px solid #cecece;\n}\n.leaderboard-table td:last-child, .leaderboard-table th:last-child {\n  text-align: right;\n  padding-right: 15px;\n  border-left: 1px solid #cecece;\n}\nion-title {\n  color: black;\n}\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-select, ion-select-option, p, h5 {\n    font-size: 13px !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7QUFBSjtBQUNJO0VBQ0ksZ0NBQUE7QUFDUjtBQUNJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFDUjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ1I7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQUNBO0VBQ0k7SUFDRSwwQkFBQTtFQUVKOztFQUFFO0lBQ0UsMEJBQUE7RUFHSjtBQUNGO0FBREE7RUFDSTtJQUNJLFlBQUE7RUFHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxlYWRlcmJvYXJkLXRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRye1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcbiAgICB9XG4gICAgdGQsIHRoe1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB9XG4gICAgdGQ6Zmlyc3QtY2hpbGQsIHRoOmZpcnN0LWNoaWxke1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgfVxuICAgIHRkOmxhc3QtY2hpbGQsIHRoOmxhc3QtY2hpbGR7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgfVxufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOmJsYWNrO1xuICB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGlvbi10aXRsZSwgaDN7XG4gICAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGlvbi1zZWxlY3QsIGlvbi1zZWxlY3Qtb3B0aW9uLCBwLCBoNXtcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIGlvbi10aXRsZXtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "NONO":
    /*!*************************************************!*\
      !*** ./src/app/services/leaderboard.service.ts ***!
      \*************************************************/

    /*! exports provided: LeaderboardService */

    /***/
    function NONO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderboardService", function () {
        return LeaderboardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LeaderboardService = function LeaderboardService() {
        _classCallCheck(this, LeaderboardService);

        this.leaderboard = [{
          name: 'Chetan',
          score: 0.310
        }, {
          name: 'Ibrahim',
          score: 0.301
        }, {
          name: 'Muatesim',
          score: 0.293
        }, {
          name: 'John',
          score: 0.291
        }, {
          name: 'Priyansh',
          score: 0.285
        }, {
          name: 'Amit',
          score: 0.279
        }, {
          name: 'Michael',
          score: 0.268
        }];
      };

      LeaderboardService.ctorParameters = function () {
        return [];
      };

      LeaderboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LeaderboardService);
      /***/
    },

    /***/
    "Rmqo":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/dashboard/leaderboard/leaderboard.page.ts ***!
      \*****************************************************************/

    /*! exports provided: LeaderboardPage */

    /***/
    function Rmqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderboardPage", function () {
        return LeaderboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leaderboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leaderboard.page.html */
      "rcsW");
      /* harmony import */


      var _leaderboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leaderboard.page.scss */
      "9lGJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/leaderboard.service */
      "NONO");

      var LeaderboardPage = /*#__PURE__*/function () {
        function LeaderboardPage(leaderboardService) {
          _classCallCheck(this, LeaderboardPage);

          this.leaderboardService = leaderboardService;
        }

        _createClass(LeaderboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.leaderboard = this.leaderboardService.leaderboard;
          }
        }]);

        return LeaderboardPage;
      }();

      LeaderboardPage.ctorParameters = function () {
        return [{
          type: src_app_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_4__["LeaderboardService"]
        }];
      };

      LeaderboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaderboard',
        template: _raw_loader_leaderboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaderboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaderboardPage);
      /***/
    },

    /***/
    "ea/W":
    /*!*************************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardPageRoutingModule */

    /***/
    function eaW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
        return DashboardPageRoutingModule;
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


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.page */
      "6ckw");
      /* harmony import */


      var _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./leaderboard/leaderboard.page */
      "Rmqo");

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
      }, {
        path: 'leaderboard',
        component: _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_4__["LeaderboardPage"]
      }];

      var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      };

      DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardPageRoutingModule);
      /***/
    },

    /***/
    "rcsW":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/leaderboard/leaderboard.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rcsW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"home/dashboard\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Leaderboard</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<table class=\"leaderboard-table\">\n\t\t<thead class=\"header-labels\">\n\t\t\t<tr>\n\t\t\t\t<th><ion-label>Rank</ion-label></th>\n\t\t\t\t<th><ion-label>Name</ion-label></th>\n\t\t\t\t<th><ion-label>% Gain</ion-label></th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let user of leaderboard ; let i=index\">\n\t\t\t\t<td><ion-label>{{i + 1}}</ion-label></td>\n\t\t\t\t<td><ion-label>{{user.name}}</ion-label></td>\n\t\t\t\t<td><ion-label>{{user.score | percent:'1.1'}}</ion-label></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</ion-content>\n";
      /***/
    },

    /***/
    "spzo":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function spzo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>Dashboard</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding-top\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-text> <h5>Hi {{user.firstname}}</h5> </ion-text>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<hr />\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-title class=\"ion-no-padding ion-padding-bottom\">Funds</ion-title>\n\t\t\t\t<table class=\"balance-overview-table\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><ion-label>Opening bal:</ion-label></td>\n\t\t\t\t\t\t<td class=\"ion-padding-start\"><ion-label>{{user.balance.openBal}}</ion-label></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><ion-label>Available bal:</ion-label></td>\n\t\t\t\t\t\t<td class=\"ion-padding-start\"><ion-label>{{user.balance.availableBal}}</ion-label></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><ion-label>P/L:</ion-label></td>\n\t\t\t\t\t\t<td class=\"ion-padding-start\"><ion-label>{{user.balance.pAndL}}</ion-label></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><ion-label>% gain:</ion-label></td>\n\t\t\t\t\t\t<td class=\"ion-padding-start\"><ion-label>{{user.balance.gain * 100}}%</ion-label></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<hr />\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-title class=\"ion-no-padding\">Leaderboard</ion-title>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<table class=\"leaderboard-table\">\n\t\t\t\t\t\t<thead class=\"header-labels\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th><ion-label>Rank</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>Name</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>% Gain</ion-label></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let user of leaderboard | slice:0:5 ; let i=index\">\n\t\t\t\t\t\t\t\t<td><ion-label>{{i + 1}}</ion-label></td>\n\t\t\t\t\t\t\t\t<td><ion-label>{{user.name}}</ion-label></td>\n\t\t\t\t\t\t\t\t<td><ion-label>{{user.score | percent:'1.1'}}</ion-label></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t(click)=\"navigateToLeaderboard()\"\n\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\tsize=\"small\"\n\t\t\t\t\t\t\tfill=\"clear\"\n\t\t\t\t\t\t\tclass=\"see-more-button\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tSee more\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div id=\"highcharts\" style=\"width:100%; height:400px;\"></div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "ws6Y":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function ws6Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\nh4 {\n  font-size: 30px;\n  margin: 0;\n}\n\nh5 {\n  font-weight: 400;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 !important;\n  -webkit-margin-before: 0em !important;\n          margin-block-start: 0em !important;\n  -webkit-margin-after: 0em !important;\n          margin-block-end: 0em !important;\n}\n\nh6 {\n  font-weight: 400;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 !important;\n  -webkit-margin-before: 0em !important;\n          margin-block-start: 0em !important;\n  -webkit-margin-after: 0em !important;\n          margin-block-end: 0em !important;\n}\n\nspan {\n  font-size: 14px;\n}\n\n.holdings-percentage {\n  margin-left: 10px;\n}\n\n.holdings-title,\n.equity-title {\n  font-size: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.holdings-text {\n  font-size: 13px;\n  color: #949494;\n}\n\n.holdings-values {\n  font-size: 13px;\n}\n\n.holdings-table {\n  margin-top: 2px;\n  margin-left: auto;\n}\n\n.header-labels ion-label {\n  font-weight: 500;\n}\n\n.balance-overview-table tr td ion-label {\n  font-weight: 400;\n}\n\n.leaderboard-table {\n  width: 100%;\n}\n\n.leaderboard-table tr {\n  border-bottom: 1px solid #cecece;\n}\n\n.leaderboard-table td, .leaderboard-table th {\n  width: 33%;\n  text-align: center;\n  padding: 15px 0;\n}\n\n.leaderboard-table td:first-child, .leaderboard-table th:first-child {\n  text-align: left;\n  padding-left: 15px;\n  border-right: 1px solid #cecece;\n}\n\n.leaderboard-table td:last-child, .leaderboard-table th:last-child {\n  text-align: right;\n  padding-right: 15px;\n  border-left: 1px solid #cecece;\n}\n\n.see-more-button {\n  margin: 0 auto;\n  padding-left: 15px;\n}\n\nion-title {\n  color: black;\n}\n\n@media screen and (max-width: 360px) {\n  h4 {\n    font-size: 20px;\n  }\n\n  ion-title, h3 {\n    font-size: 15px;\n  }\n\n  ion-label, ion-select, ion-select-option, p, h5 {\n    font-size: 13px;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtVQUFBLGtDQUFBO0VBQ0Esb0NBQUE7VUFBQSxnQ0FBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO1VBQUEsa0NBQUE7RUFDQSxvQ0FBQTtVQUFBLGdDQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtBQU9KOztBQUxBOztFQUVJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBUkk7RUFDSSxnQkFBQTtBQVdSOztBQVBJO0VBQ0ksZ0JBQUE7QUFVUjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFUSTtFQUNJLGdDQUFBO0FBV1I7O0FBVEk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBV1I7O0FBVEk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFXUjs7QUFUSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVdSOztBQVJBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxZQUFBO0FBWUo7O0FBVkE7RUFDSTtJQUNJLGVBQUE7RUFhTjs7RUFYRTtJQUNFLGVBQUE7RUFjSjs7RUFaRTtJQUNFLGVBQUE7RUFlSjtBQUNGOztBQWJBO0VBQ0k7SUFDSSxZQUFBO0VBZU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5ociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTY3LCAxNjcsIDE2NywgMC41KSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgfVxuaDR7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjowO1xufVxuaDV7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOjAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbSAhaW1wb3J0YW50O1xufVxuaDZ7ICAgIFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjowICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW0gIWltcG9ydGFudDtcbn1cbnNwYW57XG4gICAgZm9udC1zaXplOjE0cHg7XG59XG4uaG9sZGluZ3MtcGVyY2VudGFnZXtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xufVxuLmhvbGRpbmdzLXRpdGxlLFxuLmVxdWl0eS10aXRsZXtcbiAgICBmb250LXNpemU6MTVweDtcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxufVxuLmhvbGRpbmdzLXRleHR7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XG59XG4uaG9sZGluZ3MtdmFsdWVzeyAgICBcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4uaG9sZGluZ3MtdGFibGV7XG4gICAgbWFyZ2luLXRvcDoycHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uaGVhZGVyLWxhYmVsc3tcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxufVxuLmJhbGFuY2Utb3ZlcnZpZXctdGFibGV7XG4gICAgdHIgdGQgaW9uLWxhYmVse1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbn1cbi5sZWFkZXJib2FyZC10YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgfVxuICAgIHRkLCB0aHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgfVxuICAgIHRkOmZpcnN0LWNoaWxkLCB0aDpmaXJzdC1jaGlsZHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgIH1cbiAgICB0ZDpsYXN0LWNoaWxkLCB0aDpsYXN0LWNoaWxke1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgIH1cbn1cbi5zZWUtbW9yZS1idXR0b257XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOmJsYWNrO1xuICB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGg0e1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGlvbi10aXRsZSwgaDN7XG4gICAgICBmb250LXNpemU6MTVweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCBpb24tc2VsZWN0LCBpb24tc2VsZWN0LW9wdGlvbiwgcCwgaDV7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgaW9uLXRpdGxle1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map