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


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./leaderboard/leaderboard.page */
      "Rmqo");

      var DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_8__["LeaderboardPage"]]
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


      var _dashboard_page_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.page.sass */
      "WcMX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(router, userService, platform, screenOrientation) {
          _classCallCheck(this, DashboardPage);

          this.router = router;
          this.userService = userService;
          this.platform = platform;
          this.screenOrientation = screenOrientation;
          this.data = [// {
            //   "name": "Open balance",
            //   "series": [
            //     {
            //       "name": "1",
            //       "value": 0
            //     },
            //     {
            //       "name": "5",
            //       "value": 150
            //     },
            //     {
            //       "name": "10",
            //       "value": 250
            //     },
            //     {
            //       "name": "15",
            //       "value": 510
            //     },
            //     {
            //       "name": "20",
            //       "value": 720
            //     },
            //     {
            //       "name": "25",
            //       "value": 680
            //     },
            //   ]
            // },
            // {
            //   "name": "Init balance",
            //   "series": [
            //     {
            //       "name": "1",
            //       "value": 500
            //     },
            //     {
            //       "name": "5",
            //       "value": 500
            //     },
            //     {
            //       "name": "10",
            //       "value": 500
            //     },
            //     {
            //       "name": "15",
            //       "value": 500
            //     },
            //     {
            //       "name": "20",
            //       "value": 500
            //     },
            //     {
            //       "name": "25",
            //       "value": 500
            //     },
            //   ]
            // },
          ];
          this.view = [];
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.balanceLoaded = false;
            this.leaderboardLoaded = false;
            this.chartLoaded = false;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.checkIfItIsDashboard();
            this.platform.isLandscape() ? this.view = [this.platform.width(), 240] : this.view = [this.platform.width(), 240];
            this.screenOrientation.onChange().subscribe(function (r) {
              _this.platform.isPortrait() ? _this.view = [r.path[0].innerHeight, 240] : _this.view = [r.path[0].innerHeight, 240];
            });
            this.userService.getFundsChart().subscribe(function (chart) {
              _this.userService.authenticated.subscribe(function (u) {
                _this.user = u.user;

                _this.userService.accountDetails().subscribe(function (r) {
                  _this.user.balance.availableBal = parseFloat(parseFloat(r.account.currentBalance).toFixed(2));
                  _this.user.balance.openBal = parseFloat(r.account.initialAmount);
                  _this.user.balance.pAndL = _this.user.balance.availableBal - _this.user.balance.openBal;
                  _this.user.balance.gain = _this.user.balance.pAndL / _this.user.balance.openBal;
                  _this.user.balance.currency = r.account.currency;
                  _this.balanceLoaded = true;

                  _this.generateChartData(chart.data, r.account.initialAmount);
                });
              });
            });
            this.userService.getLeaderboard().subscribe(function (r) {
              _this.leaderboard = r.data;
              _this.leaderboardLoaded = true;
            });
          }
        }, {
          key: "navigateToLeaderboard",
          value: function navigateToLeaderboard() {
            this.router.navigate(["home", "dashboard", "leaderboard"]);
          }
        }, {
          key: "navigateToLearning",
          value: function navigateToLearning() {
            this.router.navigate(["home", "learning"]);
          }
        }, {
          key: "checkIfItIsDashboard",
          value: function checkIfItIsDashboard() {
            this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
          }
        }, {
          key: "generateChartData",
          value: function generateChartData(rawData, initBal) {
            console.log({
              rawData: rawData,
              initBal: initBal
            });
            this.data = [];
            var openBalTitle = "Open balance";
            var initBalTitle = "Initial balance";
            var openBalSeries = [];
            var initBalSeries = []; // openBalSeries.name = openBalTitle;

            rawData.forEach(function (el) {
              openBalSeries.push({
                name: new Date(el.createdAt),
                value: el.amount
              });
            }); // initBalSeries.name = initBalTitle;

            rawData.forEach(function (el) {
              initBalSeries.push({
                name: new Date(el.createdAt),
                value: initBal
              });
            });
            var lastInitBalSeries = initBalSeries[initBalSeries.length - 1];
            var lastDateInInitBalSeries = new Date(lastInitBalSeries.name);
            var lastDayInMonth = new Date(2008, lastDateInInitBalSeries.getMonth() + 1, 0).getDate();
            var remainingDaysToFillIn = lastDayInMonth - lastDateInInitBalSeries.getDate();

            for (var i = 1; i <= remainingDaysToFillIn; i++) {
              var date = new Date(lastInitBalSeries.name);
              var refinedDate = new Date(date.setDate(date.getDate() + i));
              initBalSeries.push({
                name: refinedDate,
                value: initBal
              });
            }

            this.data.push({
              series: openBalSeries,
              name: openBalTitle
            });
            this.data.push({
              series: initBalSeries,
              name: initBalTitle
            });
            this.chartLoaded = true;
          }
        }, {
          key: "isAndroid",
          value: function isAndroid() {
            var platform = this.userService.getPlatformOfUser();
            return platform.android || false;
          }
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]
        }];
      };

      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
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


      __webpack_exports__["default"] = "ion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\n.leaderboard-table {\n  width: 100%;\n}\n\n.leaderboard-table tr {\n  border-bottom: 1px solid #cecece;\n}\n\n.leaderboard-table td, .leaderboard-table th {\n  width: 33%;\n  text-align: center;\n  padding: 15px 0;\n}\n\n.leaderboard-table td:first-child, .leaderboard-table th:first-child {\n  text-align: left;\n  padding-left: 15px;\n  border-right: 1px solid #cecece;\n}\n\n.leaderboard-table td:last-child, .leaderboard-table th:last-child {\n  text-align: right;\n  padding-right: 15px;\n  border-left: 1px solid #cecece;\n}\n\nion-title {\n  color: black;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-select, ion-select-option, p, h5 {\n    font-size: 13px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlEQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQUk7RUFDSSxnQ0FBQTtBQUVSOztBQUFJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBRVI7O0FBQUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFUjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJO0lBQ0UsMEJBQUE7RUFHSjs7RUFERTtJQUNFLDBCQUFBO0VBSUo7QUFDRjs7QUFGQTtFQUNJO0lBQ0ksWUFBQTtFQUlOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tdG9vbGJhcntcbiAgICBib3gtc2hhZG93OiAwcHggLTRweCAyMHB4IDExcHggI2ZhZmFmYSAhaW1wb3J0YW50O1xufVxuLmxlYWRlcmJvYXJkLXRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRye1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcbiAgICB9XG4gICAgdGQsIHRoe1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB9XG4gICAgdGQ6Zmlyc3QtY2hpbGQsIHRoOmZpcnN0LWNoaWxke1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgfVxuICAgIHRkOmxhc3QtY2hpbGQsIHRoOmxhc3QtY2hpbGR7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgfVxufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOmJsYWNrO1xuICB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGlvbi10aXRsZSwgaDN7XG4gICAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGlvbi1zZWxlY3QsIGlvbi1zZWxlY3Qtb3B0aW9uLCBwLCBoNXtcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIGlvbi10aXRsZXtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufSJdfQ== */";
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


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var LeaderboardPage = /*#__PURE__*/function () {
        function LeaderboardPage(userService) {
          _classCallCheck(this, LeaderboardPage);

          this.userService = userService;
        }

        _createClass(LeaderboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.dataLoaded = false;
            this.userService.getLeaderboard().subscribe(function (r) {
              _this2.leaderboard = r.data;
              _this2.dataLoaded = true;
            });
          }
        }]);

        return LeaderboardPage;
      }();

      LeaderboardPage.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
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
    "WcMX":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.sass ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function WcMX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  z-index: 5;\n}\n\n.wrap {\n  background-color: #C99A4C;\n  text-align: center;\n  z-index: 0;\n}\n\n.wrap .white-circle-bg {\n  background-color: white;\n  border-radius: 50%;\n  width: 200%;\n  height: 800px;\n  transform: translateX(-26%) translateY(40%);\n  position: absolute;\n  z-index: 1;\n}\n\n.wrap .white-box-bg {\n  background-color: white;\n  width: 500px;\n  height: 200px;\n  position: absolute;\n  bottom: -80%;\n  z-index: 1;\n}\n\n.hello-box {\n  margin-bottom: 50px;\n  margin-top: 10px;\n}\n\n.hello-box ion-text {\n  padding: 10px 15px;\n  box-shadow: 1px 0px 5px 1px #828282;\n  background-color: white;\n  border-radius: 10px;\n  font-weight: 500;\n}\n\n.funds-title {\n  color: white;\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.funds-card {\n  border-radius: 15px;\n}\n\n.funds-card ion-label {\n  font-size: 14px;\n}\n\n.funds-card .title {\n  padding: 15px 0;\n  text-align: left;\n  padding-left: 15px;\n  font-weight: 600;\n}\n\n.funds-card .value {\n  text-align: right;\n}\n\n.funds-chart-title {\n  color: black;\n  font-size: 40px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n\n.funds-chart-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\n.leaderboard {\n  margin-top: 15px;\n}\n\n.leaderboard .leaderboard-title {\n  color: black;\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.leaderboard .leaderboard-table {\n  width: 100%;\n  margin-top: 25px;\n}\n\n.leaderboard .leaderboard-table tr {\n  border-bottom: 1px solid #cecece;\n}\n\n.leaderboard .leaderboard-table td, .leaderboard .leaderboard-table th {\n  width: 33%;\n  text-align: center;\n  padding: 15px 0;\n}\n\n.leaderboard .leaderboard-table td:first-child, .leaderboard .leaderboard-table th:first-child {\n  text-align: left;\n  padding-left: 15px;\n  border-right: 1px solid #cecece;\n}\n\n.leaderboard .leaderboard-table td:last-child, .leaderboard .leaderboard-table th:last-child {\n  text-align: right;\n  padding-right: 15px;\n  border-left: 1px solid #cecece;\n}\n\n.see-more-button {\n  margin: 0 auto;\n  padding-left: 15px;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px;\n  }\n\n  ion-label, ion-select, ion-select-option, p {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUZJO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFJUjs7QUFISTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBS1I7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBTEk7RUFDSSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBT1I7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBUEE7RUFDSSxtQkFBQTtBQVVKOztBQVRJO0VBQ0ksZUFBQTtBQVdSOztBQVZJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVlSOztBQVhJO0VBQ0ksaUJBQUE7QUFhUjs7QUFYQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVpBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWVKOztBQWJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGdCQUFBO0FBaUJKOztBQWhCSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFrQlI7O0FBaEJJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBa0JSOztBQWpCUTtFQUNJLGdDQUFBO0FBbUJaOztBQWpCUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFtQlo7O0FBakJRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBbUJaOztBQWpCUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQW1CWjs7QUFoQkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFtQko7O0FBakJBO0VBQ0k7SUFDRSxlQUFBO0VBb0JKOztFQWxCRTtJQUNFLGVBQUE7RUFxQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiKlxuICAgIHotaW5kZXg6IDVcbi53cmFwXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M5OUE0Q1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIHotaW5kZXg6IDBcbiAgICAud2hpdGUtY2lyY2xlLWJnXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJVxuICAgICAgICB3aWR0aDogMjAwJVxuICAgICAgICBoZWlnaHQ6IDgwMHB4XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjYlKSB0cmFuc2xhdGVZKDQwJSlcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgIHotaW5kZXg6IDFcbiAgICAud2hpdGUtYm94LWJnXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4gICAgICAgIHdpZHRoOiA1MDBweFxuICAgICAgICBoZWlnaHQ6IDIwMHB4XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICBib3R0b206IC04MCVcbiAgICAgICAgei1pbmRleDogMVxuXG4uaGVsbG8tYm94XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweFxuICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICBpb24tdGV4dFxuICAgICAgICBwYWRkaW5nOjEwcHggMTVweFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDVweCAxcHggIzgyODI4MlxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBcblxuLmZ1bmRzLXRpdGxlXG4gICAgY29sb3I6IHdoaXRlXG4gICAgZm9udC1zaXplOiA0MHB4XG4gICAgZm9udC13ZWlnaHQ6IDYwMFxuLmZ1bmRzLWNhcmRcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4XG4gICAgaW9uLWxhYmVsXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4XG4gICAgLnRpdGxlXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgICAgIHBhZGRpbmctbGVmdDoxNXB4XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcbiAgICAudmFsdWVcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcblxuLmZ1bmRzLWNoYXJ0LXRpdGxlXG4gICAgY29sb3I6IGJsYWNrXG4gICAgZm9udC1zaXplOiA0MHB4XG4gICAgZm9udC13ZWlnaHQ6IDYwMFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHhcblxuLmZ1bmRzLWNoYXJ0LWNhcmRcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuXG4ubG9nb1xuICAgIGhlaWdodDogNzBweFxuICAgIHdpZHRoOiA3MHB4XG4gICAgcGFkZGluZy1yaWdodDogMTBweFxuXG4ubGVhZGVyYm9hcmRcbiAgICBtYXJnaW4tdG9wOiAxNXB4XG4gICAgLmxlYWRlcmJvYXJkLXRpdGxlXG4gICAgICAgIGNvbG9yOiBibGFja1xuICAgICAgICBmb250LXNpemU6IDQwcHhcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMFxuXG4gICAgLmxlYWRlcmJvYXJkLXRhYmxlXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIG1hcmdpbi10b3A6MjVweFxuICAgICAgICB0clxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNlY2VcbiAgICAgICAgXG4gICAgICAgIHRkLCB0aFxuICAgICAgICAgICAgd2lkdGg6IDMzJVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDBcbiAgICAgICAgXG4gICAgICAgIHRkOmZpcnN0LWNoaWxkLCB0aDpmaXJzdC1jaGlsZFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlXG4gICAgICAgIFxuICAgICAgICB0ZDpsYXN0LWNoaWxkLCB0aDpsYXN0LWNoaWxkXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweFxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2VjZWNlXG4gICAgICAgIFxuXG4uc2VlLW1vcmUtYnV0dG9uXG4gICAgbWFyZ2luOiAwIGF1dG9cbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHhcblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIFxuICAgIGlvbi10aXRsZSwgaDNcbiAgICAgIGZvbnQtc2l6ZToxNXB4XG4gICAgXG4gICAgaW9uLWxhYmVsLCBpb24tc2VsZWN0LCBpb24tc2VsZWN0LW9wdGlvbiwgcFxuICAgICAgZm9udC1zaXplOiAxM3B4XG5cbiAgICBcblxuIl19 */";
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


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"home/dashboard\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Leaderboard</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col style=\"display: flex; flex-direction: column; justify-content: center; align-items: center\">\n\t\t\t\t<!-- <ion-title class=\"ion-margin-vertical ion-no-padding ion-text-left\">Leaderboard</ion-title> -->\n\t\t\t\t<ion-list style=\"width: 100%\">\n\t\t\t\t\t<table class=\"leaderboard-table\">\n\t\t\t\t\t\t<thead class=\"header-labels\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th><ion-label>Rank</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>Name</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>% Gain</ion-label></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngIf=\"!dataLoaded; else lb\">\n\t\t\t\t\t\t\t\t<td><ion-spinner name=\"lines-small\"></ion-spinner></td>\n\t\t\t\t\t\t\t\t<td><ion-spinner name=\"lines-small\"></ion-spinner></td>\n\t\t\t\t\t\t\t\t<td><ion-spinner name=\"lines-small\"></ion-spinner></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr #lb *ngFor=\"let user of leaderboard\">\n\t\t\t\t\t\t\t\t<td><ion-label>{{user?.rank}}</ion-label></td>\n\t\t\t\t\t\t\t\t<td><ion-label>{{user?.userName}}</ion-label></td>\n\t\t\t\t\t\t\t\t<td><ion-label>{{user?.gain | number:'1.1'}}%</ion-label></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</ion-list>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";
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


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n\t<ion-toolbar>\n\t\t<ion-title>Dashboard</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\">\n\t<div class=\"wrap\">\n\t\t<div class=\"white-circle-bg\"\n\t\t\t[ngStyle]=\"{'height': chartLoaded && data[0]?.series?.length <= 1 ? '770px' : '800px'}\"></div>\n\t\t<ion-grid>\n\t\t\t<ion-row class=\"hello-box\">\n\t\t\t\t<ion-col class=\"ion-padding-top\">\n\t\t\t\t\t<ion-text>Welcome {{user?.username}}!</ion-text>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-label class=\"funds-title\">Funds</ion-label>\n\t\t\t\t\t<ion-card mode=\"ios\" class=\"funds-card\" mode=\"ios\">\n\t\t\t\t\t\t<ion-list *ngIf=\"!balanceLoaded\">\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label class=\"title\">Opening bal:</ion-label>\n\t\t\t\t\t\t\t\t<ion-label class=\"value\">\n\t\t\t\t\t\t\t\t\t<ion-spinner class=\"ion-no-padding\" name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label class=\"title\">Available bal:</ion-label>\n\t\t\t\t\t\t\t\t<ion-label class=\"value\">\n\t\t\t\t\t\t\t\t\t<ion-spinner class=\"ion-no-padding\" name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label class=\"title\">P/L:</ion-label>\n\t\t\t\t\t\t\t\t<ion-label class=\"value\">\n\t\t\t\t\t\t\t\t\t<ion-spinner class=\"ion-no-padding\" name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label class=\"title\">% gain:</ion-label>\n\t\t\t\t\t\t\t\t<ion-label class=\"value\">\n\t\t\t\t\t\t\t\t\t<ion-spinner class=\"ion-no-padding\" name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t<ion-list *ngIf=\"balanceLoaded\">\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label class=\"title\">Opening bal:</ion-label>\n\t\t\t\t\t\t\t\t<ion-label class=\"value\">{{user?.balance.currency}}\n\t\t\t\t\t\t\t\t\t{{(user?.balance.openBal != null ? user?.balance.openBal : 0) | number:'1.2'}}\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label class=\"title\">Available bal:</ion-label>\n\t\t\t\t\t\t\t\t<ion-label class=\"value\">{{user?.balance.currency}}\n\t\t\t\t\t\t\t\t\t{{(user?.balance.availableBal != null ? user?.balance.availableBal : 0) | number:'1.2'}}\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label class=\"title\">P/L:</ion-label>\n\t\t\t\t\t\t\t\t<ion-label class=\"value\">{{user?.balance.currency}}\n\t\t\t\t\t\t\t\t\t{{(user?.balance.pAndL != null ? user?.balance.pAndL : 0) | number:'1.2'}}\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label class=\"title\">% gain:</ion-label>\n\t\t\t\t\t\t\t\t<ion-label class=\"value\">\n\t\t\t\t\t\t\t\t\t{{(user?.balance.gain != null ? user?.balance.gain : 0) | percent:'1.2'}}\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"funds-chart-card\">\n\t\t\t\t\t<ion-label class=\"funds-chart-title\"> Funds Chart </ion-label>\n\t\t\t\t\t<ngx-charts-line-chart *ngIf=\"chartLoaded && data[0]?.series.length > 1\" [legend]=\"false\"\n\t\t\t\t\t\t[showXAxisLabel]=\"false\" [showYAxisLabel]=\"false\" [xAxis]=\"true\" [yAxis]=\"true\"\n\t\t\t\t\t\t[timeline]=\"false\" [autoScale]=\"true\" [results]=\"data\" [view]=\"view\">\n\t\t\t\t\t</ngx-charts-line-chart>\n\t\t\t\t\t<ion-spinner name=\"lines\" style=\"height: 50px\" *ngIf=\"!chartLoaded\" color=\"dark\"></ion-spinner>\n\t\t\t\t\t<ion-label *ngIf=\"chartLoaded && data[0]?.series.length == 1\"> There is no data here for now, go on\n\t\t\t\t\t\tand trade to see the chart. </ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row class=\"leaderboard\">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-label class=\"leaderboard-title\">Leaderboard</ion-label>\n\t\t\t\t\t<table class=\"leaderboard-table\">\n\t\t\t\t\t\t<thead class=\"header-labels\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<ion-label>Rank</ion-label>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<ion-label>Name</ion-label>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<ion-label>% Gain</ion-label>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody *ngIf=\"leaderboardLoaded\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let user of leaderboard | slice:0:5\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<ion-label>{{user?.rank}}</ion-label>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<ion-label>{{user?.userName}}</ion-label>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<ion-label>{{user?.gain | number:'1.1'}}%</ion-label>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<tbody *ngIf=\"!leaderboardLoaded\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<ion-spinner name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<ion-spinner name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<ion-spinner name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" *ngIf=\"leaderboardLoaded\">\n\t\t\t\t\t\t<ion-button (click)=\"navigateToLeaderboard()\" color=\"tertiary\" size=\"small\" fill=\"clear\"\n\t\t\t\t\t\t\tclass=\"see-more-button\"> See more </ion-button>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" *ngIf=\"!leaderboardLoaded\">\n\t\t\t\t\t\t<ion-button color=\"tertiary\" size=\"small\" fill=\"clear\" class=\"see-more-button\"> See more\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t\t<div [ngClass]=\"{'white-box-bg': chartLoaded && data[0]?.series.length > 1}\"\n\t\t\t[ngStyle]=\"{'bottom': isAndroid() ? '-112%' : '-80%',\n\t\t\t'height': isAndroid() ? '240px' : '200px'}\"></div>\n\t</div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map