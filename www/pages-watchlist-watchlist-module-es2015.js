(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-watchlist-watchlist-module"],{

/***/ "122F":
/*!*****************************************************!*\
  !*** ./src/app/pages/watchlist/watchlist.module.ts ***!
  \*****************************************************/
/*! exports provided: WatchlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistPageModule", function() { return WatchlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watchlist-routing.module */ "SAOK");
/* harmony import */ var _watchlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watchlist.page */ "5svm");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buy-sell/buy-sell.page */ "aY2Y");
/* harmony import */ var _double_tap_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./double-tap.directive */ "9gIM");











let WatchlistPageModule = class WatchlistPageModule {
};
WatchlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WatchlistPageRoutingModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        declarations: [_watchlist_page__WEBPACK_IMPORTED_MODULE_6__["WatchlistPage"], _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_9__["BuySellPage"], _double_tap_directive__WEBPACK_IMPORTED_MODULE_10__["DoubleTapDirective"]]
    })
], WatchlistPageModule);



/***/ }),

/***/ "5svm":
/*!***************************************************!*\
  !*** ./src/app/pages/watchlist/watchlist.page.ts ***!
  \***************************************************/
/*! exports provided: WatchlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistPage", function() { return WatchlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_watchlist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./watchlist.page.html */ "Zd3G");
/* harmony import */ var _watchlist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watchlist.page.scss */ "IVAw");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component */ "lNYK");
/* harmony import */ var src_app_modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component */ "rdK+");
/* harmony import */ var src_app_modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component */ "1r9f");
/* harmony import */ var src_app_modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/modal-watchlist/modal-watchlist.component */ "Nbj3");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/watchlist.service */ "Tl0h");











let WatchlistPage = class WatchlistPage {
    constructor(modalController, watchlistService, actionSheetController) {
        this.modalController = modalController;
        this.watchlistService = watchlistService;
        this.actionSheetController = actionSheetController;
        this.companies = [];
        this.watchlists = [];
        this.selectedWatchlist = 1;
    }
    ngOnInit() {
        this.companies = this.watchlistService.companies;
        this.watchlists = this.watchlistService.watchlists;
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.watchlists, event.previousIndex, event.currentIndex);
    }
    openCompaniesModal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_9__["ModalWatchlistComponent"],
                componentProps: { selectedWatchlist: id }
            });
            return yield modal.present();
        });
    }
    openWatchlistModal(isEdit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_8__["ModalWatchlistCeComponent"],
                componentProps: { isEdit, selectedWatchlist: this.selectedWatchlist }
            });
            return yield modal.present();
        });
    }
    openBuySellModal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_6__["BuySellModalPopupComponent"],
                componentProps: { selectedCompany: id }
            });
            return yield modal.present();
        });
    }
    openManageWatchlists() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_7__["ModalEditWatchlistsComponent"],
            });
            return yield modal.present();
        });
    }
    onWatchlistTabClick() {
        this.watchlistEditActionSheet();
    }
    onWatchlistTitleClick() {
        this.watchlistTitleActionSheet();
    }
    watchlistTitleActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Watchlist control panel',
                buttons: [
                    {
                        text: 'Manage',
                        icon: 'cog',
                        handler: () => {
                            this.openManageWatchlists();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    watchlistEditActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Watchlist manage panel',
                buttons: [
                    {
                        text: 'Edit',
                        icon: 'create-outline',
                        handler: () => {
                            this.openWatchlistModal(true);
                        }
                    }, {
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash-outline',
                        handler: () => {
                            this.deleteWatchlist();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    deleteWatchlist() {
        this.watchlistService.deleteWatchlist(this.selectedWatchlist);
    }
    tabIndex(event) {
        this.selectedWatchlist = event;
    }
};
WatchlistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_10__["WatchlistService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] }
];
WatchlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-watchlist',
        template: _raw_loader_watchlist_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_watchlist_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WatchlistPage);



/***/ }),

/***/ "9gIM":
/*!*********************************************************!*\
  !*** ./src/app/pages/watchlist/double-tap.directive.ts ***!
  \*********************************************************/
/*! exports provided: DoubleTapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleTapDirective", function() { return DoubleTapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let DoubleTapDirective = class DoubleTapDirective {
    constructor(gestureCtrl, el) {
        this.gestureCtrl = gestureCtrl;
        this.el = el;
        this.eventHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lastOnStart = 0;
        this.DOUBLE_CLICK_THRESHOLD = 500;
    }
    ngOnInit() {
        const gesture = this.gestureCtrl.create({
            gestureName: 'double-tap',
            el: this.el.nativeElement,
            threshold: 0,
            onStart: () => { this.onStart(); }
        });
        gesture.enable();
    }
    onStart() {
        const now = Date.now();
        if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
            this.eventHandler.emit({ eventType: 'render' });
            this.lastOnStart = 0;
        }
        else {
            this.lastOnStart = now;
        }
    }
};
DoubleTapDirective.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
DoubleTapDirective.propDecorators = {
    eventHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
DoubleTapDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDoubleTap]'
    })
], DoubleTapDirective);



/***/ }),

/***/ "IVAw":
/*!*****************************************************!*\
  !*** ./src/app/pages/watchlist/watchlist.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\nion-title {\n  color: black;\n}\n\nion-content div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 14px !important;\n  }\n\n  ion-label, h3, p {\n    font-size: 12px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2F0Y2hsaXN0L3dhdGNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNFO0lBQ0UsMEJBQUE7RUFFRjs7RUFBQTtJQUNFLDBCQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsWUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93YXRjaGxpc3Qvd2F0Y2hsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuaW9uLXRpdGxle1xuICBjb2xvcjpibGFjaztcbn1cbmlvbi1jb250ZW50IHtcbiAgZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgaW9uLXRpdGxle1xuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWxhYmVsLCBoMywgcHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi10aXRsZXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        exports: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "SAOK":
/*!*************************************************************!*\
  !*** ./src/app/pages/watchlist/watchlist-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WatchlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistPageRoutingModule", function() { return WatchlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy-sell/buy-sell.page */ "aY2Y");
/* harmony import */ var _watchlist_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watchlist.page */ "5svm");





const routes = [
    {
        path: '',
        component: _watchlist_page__WEBPACK_IMPORTED_MODULE_4__["WatchlistPage"],
    },
    {
        path: 'buy-sell/:id',
        component: _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_3__["BuySellPage"]
    }
];
let WatchlistPageRoutingModule = class WatchlistPageRoutingModule {
};
WatchlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WatchlistPageRoutingModule);



/***/ }),

/***/ "Zd3G":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/watchlist/watchlist.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title (click)=\"onWatchlistTitleClick()\">Watchlist</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<super-tabs #superTabs *ngIf=\"watchlists.length > 0\">\n\t\t<super-tabs-toolbar slot=\"top\" color=\"translucent\" [scrollable]=\"watchlists.length > 3\" [scrollablePadding]=\"watchlists.length < 3\">\n\t\t\t<super-tab-button *ngFor=\"let w of watchlists\" (click)=\"tabIndex(w.id)\" appDoubleTap (eventHandler)=\"onWatchlistTabClick()\">\n\t\t\t\t<ion-label>{{w.name.length > 8 ? w.name.substring(0,8) + '...' : w.name}}</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container>\n\t\t\t<super-tab *ngFor=\"let w of watchlists\">\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item *ngFor=\"let company of w.companies\" (click)=\"openBuySellModal(company.id)\">\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<h3>{{company.code | uppercase}}</h3>\n\t\t\t\t\t\t\t<p>{{company.name}}</p>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-label class=\"ion-margin-start ion-text-right\" *ngIf=\"company.isRising\">\n\t\t\t\t\t\t\t<ion-text color=\"success\"><h3>{{company.greenNum}}</h3></ion-text>\n\t\t\t\t\t\t\t<p>+{{company.rateRaw}} (+{{company.ratePercentage}}%)</p>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-label class=\"ion-margin-start ion-text-right\" *ngIf=\"!company.isRising\">\n\t\t\t\t\t\t\t<ion-text color=\"danger\"><h3>{{company.greenNum}}</h3></ion-text>\n\t\t\t\t\t\t\t<p>-{{company.rateRaw}} (-{{company.ratePercentage}}%)</p>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t<ion-fab horizontal=\"end\" vertical=\"bottom\">\n\t\t\t\t\t<ion-fab-button (click)=\"openCompaniesModal(w.id)\">\n\t\t\t\t\t\t<ion-icon name=\"add\"></ion-icon>\n\t\t\t\t\t</ion-fab-button>\n\t\t\t\t</ion-fab>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n\t<ion-content padding *ngIf=\"watchlists.length == 0\">\n\t\t<div>\n\t\t\t<h6 class=\"gray\">Go on and create your personal watchlist <br>\n\t\t\tby pressing 'Watchlist' in the toolbar</h6>\n\t\t</div>\n\t</ion-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-watchlist-watchlist-module-es2015.js.map