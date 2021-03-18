(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "1ntl":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account/profile/profile-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "2IrM");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "2IrM":
/*!*******************************************************!*\
  !*** ./src/app/pages/account/profile/profile.page.ts ***!
  \*******************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "HXu1");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "R05P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modals_modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/modal-change-password/modal-change-password.component */ "K2jm");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");








let ProfilePage = class ProfilePage {
    constructor(router, modalController, userService) {
        this.router = router;
        this.modalController = modalController;
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.authenticated.subscribe(u => this.user = u.user);
    }
    navigateToAccount() {
        this.router.navigate(['home', 'account']);
    }
    openCompaniesModal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ModalChangePasswordComponent"],
            });
            return yield modal.present();
        });
    }
    hasNoImgUrl() {
        if (this.user.imgUrl.length == 2)
            return true;
        else
            return false;
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "8V8a":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/profile/profile.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "1ntl");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "2IrM");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "HXu1":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/profile/profile.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar class=\"header-toolbar\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button [defaultHref]=\"['home','watchlist']\" (click)=\"navigateToAccount()\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Profile</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card mode=\"ios\" class=\"profile-header\">\n\t\t<ion-card-content>\n\t\t\t<div class=\"information\">\n\t\t\t\t<ion-label class=\"title\">{{user.username}}</ion-label>\n\t\t\t\t<ion-label class=\"subtitle\">{{user.email}}</ion-label>\n\t\t\t</div>\n\t\t\t<div class=\"img\">\n\t\t\t\t<span>{{user.username[0]+user.username[1]}}</span>\n\t\t\t</div>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<!--<div class=\"ion-padding \">\n\t</div>-->\n</ion-content>\n<ion-footer>\n\t<ion-toolbar class=\"footer-toolbar\">\n\t\t<div class=\"ion-no-border ion-padding account-card-link\" (click)=\"openCompaniesModal()\">\n\t\t\t<ion-text>Change password</ion-text>\n\t\t\t<ion-icon name=\"sync-outline\" class=\"ion-margin-end icon\"></ion-icon>\n\t\t</div>\n\t</ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "R05P":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/profile/profile.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\n.profile-header ion-card-content {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.profile-header ion-card-content .information {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.profile-header ion-card-content .information .title {\n  color: black;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.profile-header ion-card-content .information .subtitle {\n  font-size: 15px;\n  color: #1e488a;\n  font-weight: 700;\n}\n\n.profile-header ion-card-content .img {\n  height: 85px;\n  width: 85px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #ffff7f;\n}\n\n.profile-header ion-card-content .img span {\n  text-align: center;\n  font-size: 45px;\n  color: black;\n  text-transform: capitalize;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  margin-top: 0;\n}\n\n.account-card-link {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.account-card-link .icon {\n  font-size: 25px;\n}\n\n.footer-toolbar {\n  --border-width: 0 !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  .subtitle {\n    color: #949494;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaURBQUE7QUFBSjs7QUFHSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBUjs7QUFFUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQVo7O0FBRVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQWhCOztBQUdZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURoQjs7QUFLUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFIWjs7QUFLWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUhoQjs7QUFTQTtFQUNJLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU5KOztBQVFJO0VBQ0ksZUFBQTtBQU5SOztBQVVBO0VBQ0ksNEJBQUE7QUFQSjs7QUFTQTtFQUNJO0lBQ0ksY0FBQTtFQU5OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXItdG9vbGJhcntcbiAgICBib3gtc2hhZG93OiAwcHggLTRweCAyMHB4IDExcHggI2ZhZmFmYSAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGUtaGVhZGVyIHtcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIC5pbmZvcm1hdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMzAsNzIsMTM4KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmY3ZjtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjcsIDE2NywgMTY3LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hY2NvdW50LWNhcmQtbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxufVxuXG4uZm9vdGVyLXRvb2xiYXJ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xuICAgIH1cbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map