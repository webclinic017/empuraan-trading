(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "3Bst":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "S9xc");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    },
    {
        path: 'funds',
        loadChildren: () => __webpack_require__.e(/*! import() | funds-funds-module */ "funds-funds-module").then(__webpack_require__.bind(null, /*! ./funds/funds.module */ "fz24")).then(m => m.FundsPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "8V8a")).then(m => m.ProfilePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "OaGo")).then(m => m.SettingsPageModule)
    },
    {
        path: 'invite-friends',
        loadChildren: () => __webpack_require__.e(/*! import() | invite-friends-invite-friends-module */ "invite-friends-invite-friends-module").then(__webpack_require__.bind(null, /*! ./invite-friends/invite-friends.module */ "Ftk8")).then(m => m.InviteFriendsPageModule)
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "4+IK":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "3Bst");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "S9xc");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "E4AK":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title slot=\"start\">Account</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-card class=\"ion-padding-horizontal\">\n\t\t<ion-grid>\n\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t<ion-card-title type=\"md\">{{user.username}}</ion-card-title>\n\t\t\t\t\t<ion-card-subtitle type=\"md\">{{user.email | uppercase}}</ion-card-subtitle>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t<div class=\"ion-float-right account-img\">\n\t\t\t\t\t\t<span>{{user.username[0]+user.username[1]}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-card>\n\t<hr />\n\t<div class=\"ion-no-border ion-padding account-card-link\" [routerLink]=\"['funds']\">\n\t\t<ion-text>Funds</ion-text>\n\t\t<ion-icon name=\"cash-outline\" class=\"ion-margin-end icon\"></ion-icon>\n\t</div>\n\t<hr />\n\t<div class=\"ion-no-border ion-padding account-card-link\" [routerLink]=\"['profile']\">\n\t\t<ion-text>Profile</ion-text>\n\t\t<ion-icon name=\"person-outline\" class=\"ion-margin-end icon\"></ion-icon>\n\t</div>\n\t<hr />\n\t<div class=\"ion-no-border ion-padding account-card-link\" [routerLink]=\"['settings']\">\n\t\t<ion-text>Settings</ion-text>\n\t\t<ion-icon name=\"settings-outline\" class=\"ion-margin-end icon\"></ion-icon>\n\t</div>\n\t<hr />\n\t<div class=\"ion-no-border ion-padding account-card-link\" [routerLink]=\"['invite-friends']\">\n\t\t<ion-text>Invite friends</ion-text>\n\t\t<ion-icon name=\"person-add-outline\" class=\"ion-margin-end icon\"></ion-icon>\n\t</div>\n\t<hr />\n\t<div class=\"ion-no-border ion-padding account-card-link\" (click)=\"logout()\">\n\t\t<ion-text>Logout</ion-text>\n\t\t<ion-icon name=\"log-out-outline\" class=\"ion-margin-end icon\"></ion-icon>\n\t</div>\n\t<hr />\n</ion-content>\n");

/***/ }),

/***/ "S9xc":
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "E4AK");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "c5PT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");






let AccountPage = class AccountPage {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.authenticated.subscribe(u => this.user = u.user);
        this.userService.accountDetails().subscribe();
    }
    logout() {
        this.userService.logout();
        this.router.navigate(['home', 'login']);
        this.userService.checkIfIsOnLoginOrSignUpPage('/home/login');
    }
    hasNoImgUrl() {
        if (this.user.imgUrl.length == 2)
            return true;
        else
            return false;
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountPage);



/***/ }),

/***/ "c5PT":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\n*:focus {\n  outline: none;\n}\n\n.account-img {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #ffff7f;\n}\n\n.account-img span {\n  text-align: center;\n  font-size: 35px;\n  color: black;\n  text-transform: capitalize;\n}\n\n.account-card-link {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.account-card-link .icon {\n  font-size: 25px;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\nion-title {\n  color: black;\n}\n\nion-card-title {\n  font-size: 18px;\n}\n\nion-card-subtitle {\n  font-size: 11px !important;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3, ion-card-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-text, p, h5, ion-card-subtitle {\n    font-size: 10px !important;\n  }\n\n  ion-icon {\n    font-size: 17px;\n  }\n\n  .account-img {\n    height: 75px;\n    width: 75px;\n    border-radius: 50%;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUlSOztBQURBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUlKOztBQUhJO0VBQ0ksZUFBQTtBQUtSOztBQUZBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7QUFNSjs7QUFKRTtFQUNJLGVBQUE7QUFPTjs7QUFMRTtFQUNJLDBCQUFBO0FBUU47O0FBTkE7RUFDSTtJQUNFLDBCQUFBO0VBU0o7O0VBUEU7SUFDRSwwQkFBQTtFQVVKOztFQVJFO0lBQ0ksZUFBQTtFQVdOOztFQVRFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQVlOO0FBQ0Y7O0FBVkE7RUFDSTtJQUNJLFlBQUE7RUFZTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuKjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5hY2NvdW50LWltZ3tcbiAgICBoZWlnaHQ6IDcwcHg7IFxuICAgIHdpZHRoOiA3MHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZmY3ZjtcbiAgICBzcGFue1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn1cbi5hY2NvdW50LWNhcmQtbGlua3tcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG59XG5ociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTY3LCAxNjcsIDE2NywgMC41KSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbmlvbi10aXRsZXtcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuICBpb24tY2FyZC10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBpb24tY2FyZC1zdWJ0aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGlvbi10aXRsZSwgaDMsIGlvbi1jYXJkLXRpdGxle1xuICAgICAgZm9udC1zaXplOjE1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCBpb24tdGV4dCwgcCwgaDUsIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuICAgIC5hY2NvdW50LWltZ3tcbiAgICAgICAgaGVpZ2h0OiA3NXB4OyBcbiAgICAgICAgd2lkdGg6IDc1cHg7IFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgaW9uLXRpdGxle1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=pages-account-account-module-es2015.js.map