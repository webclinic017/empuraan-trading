(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funds-funds-module"],{

/***/ "Y9lb":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/funds/funds.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button [defaultHref]=\"['home','watchlist']\" (click)=\"navigateToAccount()\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Funds</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card mode=\"ios\">\n\t\t<ion-card-header class=\"ion-text-center ion-padding-bottom\">\n\t\t\t<ion-card-subtitle>Available margin (Cash + Collateral)</ion-card-subtitle>\n\t\t\t<ion-card-title color=\"tertiary\"><h2 class=\"ion-no-margin\">${{user.balance.openBal}}</h2></ion-card-title>\n\t\t</ion-card-header>\n\t</ion-card>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\" class=\"ion-text-center\">\n\t\t\t\t<ion-button color=\"success\" (click)=\"openWithdrawAddFundsModal(true)\">\n\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t\t\t\tAdd funds\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-text><p class=\"subtitle-text\">Available cash</p></ion-text>\n\t\t\t\t<ion-text><p class=\"cash-text\">${{user.balance.openBal}}</p> </ion-text>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\" class=\"ion-text-center\">\n\t\t\t\t<ion-button (click)=\"openWithdrawAddFundsModal(false)\">\n\t\t\t\t\t<ion-icon name=\"refresh-outline\"></ion-icon>\n\t\t\t\t\tWithdraw\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-text><p class=\"subtitle-text\">Used margin</p></ion-text>\n\t\t\t\t<ion-text><p class=\"cash-text\">0</p> </ion-text>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<hr>\n</ion-content>\n");

/***/ }),

/***/ "fz24":
/*!*****************************************************!*\
  !*** ./src/app/pages/account/funds/funds.module.ts ***!
  \*****************************************************/
/*! exports provided: FundsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundsPageModule", function() { return FundsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _funds_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./funds-routing.module */ "rcmQ");
/* harmony import */ var _funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./funds.page */ "oI9U");







let FundsPageModule = class FundsPageModule {
};
FundsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _funds_routing_module__WEBPACK_IMPORTED_MODULE_5__["FundsPageRoutingModule"]
        ],
        declarations: [_funds_page__WEBPACK_IMPORTED_MODULE_6__["FundsPage"]]
    })
], FundsPageModule);



/***/ }),

/***/ "lq2L":
/*!*****************************************************!*\
  !*** ./src/app/pages/account/funds/funds.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\nion-button {\n  width: 100%;\n  height: 50px;\n}\n\n.subtitle-text {\n  padding: 0;\n  color: #737373;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.cash-text {\n  margin-top: 5px;\n  padding: 0;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  margin-top: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  .subtitle-text {\n    color: #949494;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9mdW5kcy9mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpREFBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSTtJQUNJLGNBQUE7RUFLTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9mdW5kcy9mdW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10b29sYmFye1xuICAgIGJveC1zaGFkb3c6IDBweCAtNHB4IDIwcHggMTFweCAjZmFmYWZhICFpbXBvcnRhbnQ7XG59XG5pb24tYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5zdWJ0aXRsZS10ZXh0e1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY2FzaC10ZXh0e1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuaHIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE2NywgMTY3LCAxNjcsIDAuNSkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDowO1xufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgLnN1YnRpdGxlLXRleHR7XG4gICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "oI9U":
/*!***************************************************!*\
  !*** ./src/app/pages/account/funds/funds.page.ts ***!
  \***************************************************/
/*! exports provided: FundsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundsPage", function() { return FundsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_funds_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./funds.page.html */ "Y9lb");
/* harmony import */ var _funds_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funds.page.scss */ "lq2L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modals_modal_withdraw_add_funds_modal_withdraw_add_funds_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component */ "whIa");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");








let FundsPage = class FundsPage {
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
    openWithdrawAddFundsModal(isAdd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_modal_withdraw_add_funds_modal_withdraw_add_funds_component__WEBPACK_IMPORTED_MODULE_6__["ModalWithdrawAddFundsComponent"],
                componentProps: { isAdd }
            });
            return yield modal.present();
        });
    }
};
FundsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
FundsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-funds',
        template: _raw_loader_funds_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_funds_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FundsPage);



/***/ }),

/***/ "rcmQ":
/*!*************************************************************!*\
  !*** ./src/app/pages/account/funds/funds-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FundsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundsPageRoutingModule", function() { return FundsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _funds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funds.page */ "oI9U");




const routes = [
    {
        path: '',
        component: _funds_page__WEBPACK_IMPORTED_MODULE_3__["FundsPage"]
    }
];
let FundsPageRoutingModule = class FundsPageRoutingModule {
};
FundsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FundsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=funds-funds-module-es2015.js.map