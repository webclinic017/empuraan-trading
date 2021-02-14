(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "/rC/":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/settings/settings.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/home/account\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item class=\"ion-padding-horizontal\">\n\t\t\t<ion-label>Data type</ion-label>\n\t\t\t<ion-select value=\"simulated\" (ionChange)=\"dataChange()\" [(ngModel)]=\"datatype\">\n\t\t\t\t<ion-select-option value=\"realtime\" disabled>Real-time</ion-select-option>\n\t\t\t\t<ion-select-option value=\"simulated\">Simulated</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t\t<ion-item class=\"ion-padding-horizontal\">\n\t\t  <ion-label>Risk %</ion-label>\n\t\t  <ion-input class=\"ion-text-right\" type=\"number\" [(ngModel)]=\"risk\" (ionChange)=\"dataChange()\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item class=\"ion-padding-horizontal\">\n\t\t  <ion-label>Leverage</ion-label>\n\t\t  <ion-select value=\"0\" [(ngModel)]=\"leverage\" (ionChange)=\"dataChange()\">\n\t\t\t  <ion-select-option value=\"1\">1</ion-select-option>\n\t\t\t  <ion-select-option value=\"2\">2</ion-select-option>\n\t\t\t  <ion-select-option value=\"3\">3</ion-select-option>\n\t\t\t  <ion-select-option value=\"4\">4</ion-select-option>\n\t\t\t  <ion-select-option value=\"5\">5</ion-select-option>\n\t\t\t  <ion-select-option value=\"6\">6</ion-select-option>\n\t\t  </ion-select>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "3f5z":
/*!*******************************************************************!*\
  !*** ./src/app/pages/account/settings/settings-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "iv9z");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "OaGo":
/*!***********************************************************!*\
  !*** ./src/app/pages/account/settings/settings.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "3f5z");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "iv9z");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "iv9z":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/settings/settings.page.ts ***!
  \*********************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "/rC/");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "qwMN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/watchlist.service */ "Tl0h");







let SettingsPage = class SettingsPage {
    constructor(router, userService, watchlistService) {
        this.router = router;
        this.userService = userService;
        this.watchlistService = watchlistService;
    }
    ngOnInit() {
        this.userService.getSettings().subscribe((r) => {
            this.datatype = r.data.datatype;
            this.risk = r.data.risk;
            this.leverage = r.data.leverage.toString();
            this._id = r.data._id;
        });
    }
    navigateToAccount() {
        this.router.navigate(['home', 'account']);
    }
    dataChange() {
        this.userService.updateSettings(this._id, this.datatype, this.risk, this.leverage).subscribe();
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__["WatchlistService"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "qwMN":
/*!***********************************************************!*\
  !*** ./src/app/pages/account/settings/settings.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*:focus {\n  outline: none;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.wrap form {\n  width: 100%;\n  height: 60%;\n}\n\n.title {\n  padding-bottom: 25px;\n}\n\n.title ion-label {\n  font-size: 35px;\n  font-weight: 700;\n}\n\nion-list {\n  margin-top: 50px;\n}\n\nion-input, ion-select {\n  font-size: 15px;\n}\n\nion-item {\n  --border-color: #c2c2c2;\n  --border-bottom-width: 2px;\n  margin-top: 10px;\n}\n\nion-item ion-label {\n  color: #C99A4C;\n}\n\nion-back-button {\n  --color:#E0B64A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUdSOztBQUFBO0VBQ0ksb0JBQUE7QUFHSjs7QUFGSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUlSOztBQURBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUxJO0VBQ0ksY0FBQTtBQU9SOztBQUpBO0VBQ0ksZUFBQTtBQU9KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ud3JhcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZm9ybXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjAlO1xuICAgIH1cbn1cbi50aXRsZXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgIH1cbn1cbmlvbi1saXN0e1xuICAgIG1hcmdpbi10b3A6NTBweDtcbn1cbmlvbi1pbnB1dCwgaW9uLXNlbGVjdHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6ICNjMmMyYzI7XG4gICAgLS1ib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgY29sb3I6I0M5OUE0QztcbiAgICB9XG59XG5pb24tYmFjay1idXR0b257XG4gICAgLS1jb2xvcjojRTBCNjRBO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map