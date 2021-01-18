(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "/2RN":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "ea/W");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "6ckw");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leaderboard/leaderboard.page */ "Rmqo");









let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"],
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_8__["LeaderboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "6ckw":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "spzo");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "ws6Y");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");








let DashboardPage = class DashboardPage {
    constructor(router, userService, platform, screenOrientation) {
        this.router = router;
        this.userService = userService;
        this.platform = platform;
        this.screenOrientation = screenOrientation;
        this.data = [
            {
                "name": "Open balance",
                "series": [
                    {
                        "name": "1",
                        "value": 0
                    },
                    {
                        "name": "5",
                        "value": 150
                    },
                    {
                        "name": "10",
                        "value": 250
                    },
                    {
                        "name": "15",
                        "value": 510
                    },
                    {
                        "name": "20",
                        "value": 720
                    },
                    {
                        "name": "25",
                        "value": 680
                    },
                ]
            },
            {
                "name": "Init balance",
                "series": [
                    {
                        "name": "1",
                        "value": 500
                    },
                    {
                        "name": "5",
                        "value": 500
                    },
                    {
                        "name": "10",
                        "value": 500
                    },
                    {
                        "name": "15",
                        "value": 500
                    },
                    {
                        "name": "20",
                        "value": 500
                    },
                    {
                        "name": "25",
                        "value": 500
                    },
                ]
            },
        ];
        this.view = [];
    }
    ngOnInit() {
        this.balanceLoaded = false;
        this.leaderboardLoaded = false;
    }
    ionViewDidEnter() {
        this.checkIfItIsDashboard();
        this.platform.isLandscape()
            ? this.view = [this.platform.width(), this.platform.height() * 0.69]
            : this.view = [this.platform.width(), this.platform.height() * 0.5];
        this.screenOrientation.onChange().subscribe((r) => {
            this.platform.isPortrait()
                ? this.view = [r.path[0].innerHeight, r.path[0].innerWidth * 0.69]
                : this.view = [r.path[0].innerHeight, r.path[0].innerWidth * 0.5];
        });
        this.userService.authenticated.subscribe(u => {
            this.user = u.user;
            this.userService.accountDetails().subscribe((r) => {
                this.user.balance.availableBal = parseFloat(parseFloat(r.account.currentBalance).toFixed(2));
                this.user.balance.openBal = parseFloat(r.account.initialAmount);
                this.user.balance.pAndL = this.user.balance.availableBal - this.user.balance.openBal;
                this.user.balance.gain = this.user.balance.pAndL / this.user.balance.openBal;
                this.user.balance.currency = r.account.currency;
                this.balanceLoaded = true;
            });
        });
        this.userService.getFundsChart().subscribe(r => console.log(r));
        this.userService.getLeaderboard().subscribe((r) => {
            this.leaderboard = r.data;
            this.leaderboardLoaded = true;
        });
    }
    navigateToLeaderboard() {
        this.router.navigate(['home', 'dashboard', 'leaderboard']);
    }
    navigateToLearning() {
        this.router.navigate(['home', 'learning']);
    }
    checkIfItIsDashboard() {
        this.userService.checkIfIsOnLoginOrSignUpPage(this.router.url);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "9lGJ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dashboard/leaderboard/leaderboard.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".leaderboard-table {\n  width: 100%;\n}\n.leaderboard-table tr {\n  border-bottom: 1px solid #cecece;\n}\n.leaderboard-table td, .leaderboard-table th {\n  width: 33%;\n  text-align: center;\n  padding: 15px 0;\n}\n.leaderboard-table td:first-child, .leaderboard-table th:first-child {\n  text-align: left;\n  padding-left: 15px;\n  border-right: 1px solid #cecece;\n}\n.leaderboard-table td:last-child, .leaderboard-table th:last-child {\n  text-align: right;\n  padding-right: 15px;\n  border-left: 1px solid #cecece;\n}\nion-title {\n  color: black;\n}\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-select, ion-select-option, p, h5 {\n    font-size: 13px !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7QUFBSjtBQUNJO0VBQ0ksZ0NBQUE7QUFDUjtBQUNJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFDUjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ1I7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQUNBO0VBQ0k7SUFDRSwwQkFBQTtFQUVKOztFQUFFO0lBQ0UsMEJBQUE7RUFHSjtBQUNGO0FBREE7RUFDSTtJQUNJLFlBQUE7RUFHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxlYWRlcmJvYXJkLXRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRye1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcbiAgICB9XG4gICAgdGQsIHRoe1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB9XG4gICAgdGQ6Zmlyc3QtY2hpbGQsIHRoOmZpcnN0LWNoaWxke1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgfVxuICAgIHRkOmxhc3QtY2hpbGQsIHRoOmxhc3QtY2hpbGR7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgfVxufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOmJsYWNrO1xuICB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGlvbi10aXRsZSwgaDN7XG4gICAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGlvbi1zZWxlY3QsIGlvbi1zZWxlY3Qtb3B0aW9uLCBwLCBoNXtcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIGlvbi10aXRsZXtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "Rmqo":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dashboard/leaderboard/leaderboard.page.ts ***!
  \*****************************************************************/
/*! exports provided: LeaderboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardPage", function() { return LeaderboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leaderboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leaderboard.page.html */ "rcsW");
/* harmony import */ var _leaderboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaderboard.page.scss */ "9lGJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");





let LeaderboardPage = class LeaderboardPage {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.dataLoaded = false;
        this.userService.getLeaderboard().subscribe((r) => {
            this.leaderboard = r.data;
            this.dataLoaded = true;
        });
    }
};
LeaderboardPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
LeaderboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaderboard',
        template: _raw_loader_leaderboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaderboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaderboardPage);



/***/ }),

/***/ "ea/W":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "6ckw");
/* harmony import */ var _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaderboard/leaderboard.page */ "Rmqo");





const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    },
    {
        path: 'leaderboard',
        component: _leaderboard_leaderboard_page__WEBPACK_IMPORTED_MODULE_4__["LeaderboardPage"]
    },
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "rcsW":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/leaderboard/leaderboard.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"home/dashboard\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Leaderboard</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col style=\"display: flex; flex-direction: column; justify-content: center; align-items: center\">\n\t\t\t\t<!-- <ion-title class=\"ion-margin-vertical ion-no-padding ion-text-left\">Leaderboard</ion-title> -->\n\t\t\t\t<ion-list style=\"width: 100%\">\n\t\t\t\t\t<table class=\"leaderboard-table\">\n\t\t\t\t\t\t<thead class=\"header-labels\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th><ion-label>Rank</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>Name</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>% Gain</ion-label></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngIf=\"!dataLoaded; else lb\">\n\t\t\t\t\t\t\t\t<td><ion-spinner name=\"lines-small\"></ion-spinner></td>\n\t\t\t\t\t\t\t\t<td><ion-spinner name=\"lines-small\"></ion-spinner></td>\n\t\t\t\t\t\t\t\t<td><ion-spinner name=\"lines-small\"></ion-spinner></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr #lb *ngFor=\"let user of leaderboard\">\n\t\t\t\t\t\t\t\t<td><ion-label>{{user?.rank}}</ion-label></td>\n\t\t\t\t\t\t\t\t<td><ion-label>{{user?.userName}}</ion-label></td>\n\t\t\t\t\t\t\t\t<td><ion-label>{{user?.gain | number:'1.1'}}%</ion-label></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</ion-list>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "spzo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>Dashboard</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding-top\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-text> <h5 style=\"padding-left: 10px\">Hi {{user?.username}}</h5> </ion-text>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<hr />\n\t\t<ion-row *ngIf=\"!balanceLoaded\">\n\t\t\t<ion-col>\n\t\t\t\t<table class=\"balance-overview-table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"2\" class=\"table-title\"><ion-label>Funds</ion-label></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><ion-label>Opening bal:</ion-label></td>\n\t\t\t\t\t\t\t<td class=\"ion-padding-start ion-text-right\">\n\t\t\t\t\t\t\t\t<ion-spinner class=\"ion-no-padding\" name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><ion-label>Available bal:</ion-label></td>\n\t\t\t\t\t\t\t<td class=\"ion-padding-start ion-text-right\">\n\t\t\t\t\t\t\t\t<ion-spinner class=\"ion-no-padding\" name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><ion-label>P/L:</ion-label></td>\n\t\t\t\t\t\t\t<td class=\"ion-padding-start ion-text-right\">\n\t\t\t\t\t\t\t\t<ion-spinner class=\"ion-no-padding\" name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><ion-label>% gain:</ion-label></td>\n\t\t\t\t\t\t\t<td class=\"ion-padding-start ion-text-right\">\n\t\t\t\t\t\t\t\t<ion-spinner class=\"ion-no-padding\" name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"balanceLoaded\">\n\t\t\t<ion-col>\n\t\t\t\t<table class=\"balance-overview-table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"2\" class=\"table-title\"><ion-label>Funds</ion-label></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><ion-label>Opening bal:</ion-label></td>\n\t\t\t\t\t\t\t<td class=\"ion-padding-start ion-text-right text-cell\">\n\t\t\t\t\t\t\t\t<ion-label\n\t\t\t\t\t\t\t\t\t>{{user?.balance.currency}} {{(user?.balance.openBal != null ? user?.balance.openBal : 0) |\n\t\t\t\t\t\t\t\t\tnumber:'1.2'}}</ion-label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><ion-label>Available bal:</ion-label></td>\n\t\t\t\t\t\t\t<td class=\"ion-padding-start ion-text-right text-cell\">\n\t\t\t\t\t\t\t\t<ion-label\n\t\t\t\t\t\t\t\t\t>{{user?.balance.currency}} {{(user?.balance.availableBal != null ? user?.balance.availableBal : 0) |\n\t\t\t\t\t\t\t\t\tnumber:'1.2'}}</ion-label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><ion-label>P/L:</ion-label></td>\n\t\t\t\t\t\t\t<td class=\"ion-padding-start ion-text-right text-cell\">\n\t\t\t\t\t\t\t\t<ion-label\n\t\t\t\t\t\t\t\t\t>{{user?.balance.currency}} {{(user?.balance.pAndL != null ? user?.balance.pAndL : 0) |\n\t\t\t\t\t\t\t\t\tnumber:'1.2'}}</ion-label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><ion-label>% gain:</ion-label></td>\n\t\t\t\t\t\t\t<td class=\"ion-padding-start ion-text-right text-cell\">\n\t\t\t\t\t\t\t\t<ion-label>{{(user?.balance.gain != null ? user?.balance.gain : 0) | percent:'1.2'}}</ion-label>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col style=\"display: flex; flex-direction: column; justify-content: center; align-items: center\">\n\t\t\t\t<ion-label class=\"title ion-margin-vertical ion-no-padding ion-text-left\">Funds Chart</ion-label>\n\t\t\t\t<ngx-charts-line-chart\n\t\t\t\t\t[legend]=\"false\"\n\t\t\t\t\t[showXAxisLabel]=\"false\"\n\t\t\t\t\t[showYAxisLabel]=\"false\"\n\t\t\t\t\t[xAxis]=\"true\"\n\t\t\t\t\t[yAxis]=\"true\"\n\t\t\t\t\t[timeline]=\"true\"\n\t\t\t\t\t[results]=\"data\"\n\t\t\t\t\t[view]=\"view\"\n\t\t\t\t>\n\t\t\t\t</ngx-charts-line-chart>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"leaderboardLoaded\" class=\"ion-margin-bottom\">\n\t\t\t<ion-col style=\"display: flex; flex-direction: column; justify-content: center; align-items: center\">\n\t\t\t\t<ion-label class=\"title ion-margin-vertical ion-no-padding ion-text-left\">Leaderboard</ion-label>\n\t\t\t\t<ion-list style=\"width: 100%\">\n\t\t\t\t\t<table class=\"leaderboard-table\">\n\t\t\t\t\t\t<thead class=\"header-labels\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th><ion-label>Rank</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>Name</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>% Gain</ion-label></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let user of leaderboard | slice:0:5\">\n\t\t\t\t\t\t\t\t<td><ion-label>{{user?.rank}}</ion-label></td>\n\t\t\t\t\t\t\t\t<td><ion-label>{{user?.userName}}</ion-label></td>\n\t\t\t\t\t\t\t\t<td><ion-label>{{user?.gain | number:'1.1'}}%</ion-label></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t(click)=\"navigateToLeaderboard()\"\n\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\tsize=\"small\"\n\t\t\t\t\t\t\tfill=\"clear\"\n\t\t\t\t\t\t\tclass=\"see-more-button\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tSee more\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"!leaderboardLoaded\" class=\"ion-margin-bottom\">\n\t\t\t<ion-col style=\"display: flex; flex-direction: column; justify-content: center; align-items: center\">\n\t\t\t\t<ion-label class=\"title ion-margin-vertical ion-no-padding ion-text-left\">Leaderboard</ion-label>\n\t\t\t\t<ion-list style=\"width: 100%\">\n\t\t\t\t\t<table class=\"leaderboard-table\">\n\t\t\t\t\t\t<thead class=\"header-labels\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th><ion-label>Rank</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>Name</ion-label></th>\n\t\t\t\t\t\t\t\t<th><ion-label>% Gain</ion-label></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td><ion-spinner name=\"lines-small\"></ion-spinner></td>\n\t\t\t\t\t\t\t\t<td><ion-spinner name=\"lines-small\"></ion-spinner></td>\n\t\t\t\t\t\t\t\t<td><ion-spinner name=\"lines-small\"></ion-spinner></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\tsize=\"small\"\n\t\t\t\t\t\t\tfill=\"clear\"\n\t\t\t\t\t\t\tclass=\"see-more-button\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tSee more\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "ws6Y":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\n.title {\n  text-align: center;\n  font-weight: 500 !important;\n  font-size: 18px;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\nh4 {\n  font-size: 30px;\n  margin: 0;\n}\n\nh5 {\n  font-weight: 400;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 !important;\n  -webkit-margin-before: 0em !important;\n          margin-block-start: 0em !important;\n  -webkit-margin-after: 0em !important;\n          margin-block-end: 0em !important;\n}\n\nh6 {\n  font-weight: 400;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 !important;\n  -webkit-margin-before: 0em !important;\n          margin-block-start: 0em !important;\n  -webkit-margin-after: 0em !important;\n          margin-block-end: 0em !important;\n}\n\nspan {\n  font-size: 14px;\n}\n\n.holdings-percentage {\n  margin-left: 10px;\n}\n\n.holdings-title,\n.equity-title {\n  font-size: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.holdings-text {\n  font-size: 13px;\n  color: #949494;\n}\n\n.holdings-values {\n  font-size: 13px;\n}\n\n.holdings-table {\n  margin-top: 2px;\n  margin-left: auto;\n}\n\n.header-labels ion-label {\n  font-weight: 500;\n}\n\n.leaderboard-table {\n  width: 100%;\n}\n\n.leaderboard-table tr {\n  border-bottom: 1px solid #cecece;\n}\n\n.leaderboard-table td, .leaderboard-table th {\n  width: 33%;\n  text-align: center;\n  padding: 15px 0;\n}\n\n.leaderboard-table td:first-child, .leaderboard-table th:first-child {\n  text-align: left;\n  padding-left: 15px;\n  border-right: 1px solid #cecece;\n}\n\n.leaderboard-table td:last-child, .leaderboard-table th:last-child {\n  text-align: right;\n  padding-right: 15px;\n  border-left: 1px solid #cecece;\n}\n\n.see-more-button {\n  margin: 0 auto;\n  padding-left: 15px;\n}\n\nion-title {\n  color: black;\n}\n\n.balance-overview-table {\n  width: 100%;\n}\n\n.balance-overview-table .table-title {\n  text-align: center;\n}\n\n.balance-overview-table .table-title ion-label {\n  font-weight: 500 !important;\n  font-size: 18px;\n}\n\n.balance-overview-table tr {\n  border-bottom: 1px solid #cecece;\n}\n\n.balance-overview-table td {\n  width: 50%;\n  padding: 15px;\n}\n\n.balance-overview-table td ion-label {\n  font-weight: 400;\n}\n\n.balance-overview-table .text-cell {\n  padding: 21px 15px;\n}\n\n@media screen and (max-width: 360px) {\n  h4 {\n    font-size: 20px;\n  }\n\n  ion-title, h3 {\n    font-size: 15px;\n  }\n\n  ion-label, ion-select, ion-select-option, p, h5 {\n    font-size: 13px;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7VUFBQSxrQ0FBQTtFQUNBLG9DQUFBO1VBQUEsZ0NBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtVQUFBLGtDQUFBO0VBQ0Esb0NBQUE7VUFBQSxnQ0FBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7QUFRSjs7QUFOQTs7RUFFSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVRJO0VBQ0ksZ0JBQUE7QUFZUjs7QUFUQTtFQUNJLFdBQUE7QUFZSjs7QUFYSTtFQUNJLGdDQUFBO0FBYVI7O0FBWEk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBYVI7O0FBWEk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFhUjs7QUFYSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQWFSOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBYUo7O0FBWEE7RUFDSSxZQUFBO0FBY0o7O0FBWkE7RUFRSSxXQUFBO0FBUUo7O0FBZkk7RUFDSSxrQkFBQTtBQWlCUjs7QUFoQlE7RUFDSSwyQkFBQTtFQUNBLGVBQUE7QUFrQlo7O0FBZEk7RUFDSSxnQ0FBQTtBQWdCUjs7QUFkSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FBZ0JSOztBQWZRO0VBQ0ksZ0JBQUE7QUFpQlo7O0FBZEk7RUFDSSxrQkFBQTtBQWdCUjs7QUFWQTtFQUNJO0lBQ0ksZUFBQTtFQWFOOztFQVhFO0lBQ0UsZUFBQTtFQWNKOztFQVpFO0lBQ0UsZUFBQTtFQWVKO0FBQ0Y7O0FBYkE7RUFDSTtJQUNJLFlBQUE7RUFlTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi50aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbmhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjcsIDE2NywgMTY3LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICB9XG5oNHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOjA7XG59XG5oNXtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtICFpbXBvcnRhbnQ7XG59XG5oNnsgICAgXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOjAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbSAhaW1wb3J0YW50O1xufVxuc3BhbntcbiAgICBmb250LXNpemU6MTRweDtcbn1cbi5ob2xkaW5ncy1wZXJjZW50YWdle1xuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG59XG4uaG9sZGluZ3MtdGl0bGUsXG4uZXF1aXR5LXRpdGxle1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG59XG4uaG9sZGluZ3MtdGV4dHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcbn1cbi5ob2xkaW5ncy12YWx1ZXN7ICAgIFxuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5ob2xkaW5ncy10YWJsZXtcbiAgICBtYXJnaW4tdG9wOjJweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5oZWFkZXItbGFiZWxze1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG59XG4ubGVhZGVyYm9hcmQtdGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgIH1cbiAgICB0ZCwgdGh7XG4gICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgIH1cbiAgICB0ZDpmaXJzdC1jaGlsZCwgdGg6Zmlyc3QtY2hpbGR7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NlY2VjZTtcbiAgICB9XG4gICAgdGQ6bGFzdC1jaGlsZCwgdGg6bGFzdC1jaGlsZHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlY2VjZTtcbiAgICB9XG59XG4uc2VlLW1vcmUtYnV0dG9ue1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbmlvbi10aXRsZXtcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuLmJhbGFuY2Utb3ZlcnZpZXctdGFibGV7XG4gICAgLnRhYmxlLXRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgfVxuICAgIHRkIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGV4dC1jZWxse1xuICAgICAgICBwYWRkaW5nOiAyMXB4IDE1cHg7XG4gICAgfVxufVxuLy8gLm5neC1jaGFydHN7XG4vLyAgICAgaGVpZ2h0OiAje2luaGVyaXQgKiAwLjg2fTtcbi8vIH1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaW9uLXRpdGxlLCBoM3tcbiAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGlvbi1zZWxlY3QsIGlvbi1zZWxlY3Qtb3B0aW9uLCBwLCBoNXtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG59XG5AbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICBpb24tdGl0bGV7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map