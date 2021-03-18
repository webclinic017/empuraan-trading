(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ibrahimsefer/Desktop/demo trading app front end/demo-trading-platform-app-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1eeg":
/*!********************************************!*\
  !*** ./src/app/guards/auth-guard.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");




let AuthGuard = class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(next, state) {
        let b;
        this.userService.authenticated.subscribe(a => {
            if (!a) {
                this.router.navigate(['home', 'login']);
                b = false;
            }
            else
                b = true;
        });
        return b;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "1fgy":
/*!*************************************************************!*\
  !*** ./src/app/modals/modal-post/modal-post.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  width: 100%;\n  position: absolute;\n  padding: 15px;\n}\n\n.post-content {\n  white-space: break-spaces;\n  text-align: justify;\n}\n\nion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 15px !important;\n  }\n\n  ion-text {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLXBvc3QvbW9kYWwtcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlEQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUFBO0VBQ0Y7O0VBRUE7SUFDRSwwQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvbW9kYWwtcG9zdC9tb2RhbC1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucG9zdC1jb250ZW50IHtcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwcHggLTRweCAyMHB4IDExcHggI2ZhZmFmYSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICBpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "1r9f":
/*!***************************************************************************!*\
  !*** ./src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalWatchlistCeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWatchlistCeComponent", function() { return ModalWatchlistCeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_watchlist_ce_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-watchlist-ce.component.html */ "gn15");
/* harmony import */ var _modal_watchlist_ce_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-watchlist-ce.component.scss */ "JBwo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/watchlist.service */ "Tl0h");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");







let ModalWatchlistCeComponent = class ModalWatchlistCeComponent {
    constructor(modalCtrl, watchlistService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.watchlistService = watchlistService;
        this.toastCtrl = toastCtrl;
        this.stocks = [];
    }
    ngOnInit() {
        this.spinner = false;
        this.stocks = this.selectedWatchlist.stockIds;
        this.watchlistName = this.selectedWatchlist.name;
    }
    dismissModal() {
        this.modalCtrl.dismiss(this.changeInWatchlist);
    }
    onEditWatchlist() {
        if (this.watchlistName.trim() != '' && this.watchlistName != null && this.watchlistName != undefined) {
            this.spinner = true;
            this.watchlistName = this.watchlistName.trim();
            this.watchlistService.editWatchlist(this.selectedWatchlist._id, this.watchlistName).subscribe(r => {
                this.spinner = false;
                this.changeInWatchlist = true;
                this.presentSuccessToast(`Watchlist's name changed to "${this.watchlistName}"`);
                console.log(r);
            });
        }
        else
            this.presentErrorToast('Input field is empty.');
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.stocks, event.previousIndex, event.currentIndex);
        this.changePosition();
    }
    changePosition() {
        const stocks = [];
        for (let i = 0; i < this.stocks.length; i++) {
            const s = this.stocks[i];
            stocks.push({ stockId: s.id, position: i });
        }
        this.watchlistService.updateWatchlistStocksPositions(this.selectedWatchlist._id, stocks).subscribe(() => this.changeInWatchlist = true);
    }
    presentErrorToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2500,
                color: "danger",
            });
            yield toast.present();
        });
    }
    presentSuccessToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2500,
                color: "success",
            });
            yield toast.present();
        });
    }
};
ModalWatchlistCeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_5__["WatchlistService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ModalWatchlistCeComponent.propDecorators = {
    selectedWatchlist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalWatchlistCeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-watchlist-ce',
        template: _raw_loader_modal_watchlist_ce_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_watchlist_ce_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalWatchlistCeComponent);



/***/ }),

/***/ "3waL":
/*!*****************************************************************************************!*\
  !*** ./src/app/modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLXdpdGhkcmF3LWFkZC1mdW5kcy9tb2RhbC13aXRoZHJhdy1hZGQtZnVuZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpREFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL21vZGFsLXdpdGhkcmF3LWFkZC1mdW5kcy9tb2RhbC13aXRoZHJhdy1hZGQtZnVuZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10b29sYmFye1xuICAgIGJveC1zaGFkb3c6IDBweCAtNHB4IDIwcHggMTFweCAjZmFmYWZhICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "6cjs":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./super-tab-button_2.entry.js": [
		"UWEh",
		"common",
		0
	],
	"./super-tab-indicator.entry.js": [
		"afC3",
		1
	],
	"./super-tab_3.entry.js": [
		"XRr/",
		"common",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "6cjs";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "8E9K":
/*!***************************************************************************!*\
  !*** ./src/app/modals/modal-upload-post/modal-upload-post.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\nion-title {\n  color: black;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px;\n  }\n\n  ion-label, ion-text, p, h5, ion-button, span {\n    font-size: 13px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLXVwbG9hZC1wb3N0L21vZGFsLXVwbG9hZC1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaURBQUE7QUFBRjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJO0lBQ0UsZUFBQTtFQUVKOztFQUFFO0lBQ0UsMEJBQUE7RUFHSjtBQUNGOztBQURBO0VBQ0k7SUFDSSxZQUFBO0VBR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC11cGxvYWQtcG9zdC9tb2RhbC11cGxvYWQtcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRvb2xiYXJ7XG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDIwcHggMTFweCAjZmFmYWZhICFpbXBvcnRhbnQ7XG59XG5pb24tdGl0bGV7XG4gICAgY29sb3I6YmxhY2s7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGlvbi10aXRsZSwgaDN7XG4gICAgICBmb250LXNpemU6MTVweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCBpb24tdGV4dCwgcCwgaDUsIGlvbi1idXR0b24sIHNwYW57XG4gICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICBpb24tdGl0bGV7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "8hSh":
/*!*******************************************!*\
  !*** ./src/app/services/stock.service.ts ***!
  \*******************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "gFX4");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let StockService = class StockService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "stocks/order/";
        this.apiGetStock = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "stocks/";
        this.apiStockStart = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "stocks/start/emit/";
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].socketUrl);
    }
    listen(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((subscriber) => {
            this.socket.on(eventName, (data) => {
                // console.log(eventName,data)
                subscriber.next(data);
            });
        });
    }
    emit(eventName, data) {
        console.log(eventName, data);
        this.socket.emit(eventName, data);
    }
    getStock(id) {
        return this.http.get(this.apiGetStock + id);
    }
    getStocks() {
        return this.http.get(this.apiGetStock).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((r) => {
            r.data.forEach((c) => {
                c.isLoaded = true;
            });
            return r;
        }));
    }
    startStock(stockId, watchlistId) {
        return this.http.post(this.apiStockStart, { stockId, watchlistId });
    }
    initStocks() {
        return this.http.post(this.apiUrl + "init", {});
    }
    orderStockLimitBuy(input) {
        return this.http.post(this.apiUrl + "limit/buy", input);
    }
    orderStockLimitSell(input) {
        return this.http.post(this.apiUrl + "limit/sell", input);
    }
    orderStockMarketBuy(input) {
        return this.http.post(this.apiUrl + "market/buy", input);
    }
    orderStockMarketSell(input) {
        return this.http.post(this.apiUrl + "market/sell", input);
    }
    createNewStocks(input) {
        return this.http.post(this.apiUrl + "new", input);
    }
};
StockService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
StockService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], StockService);



/***/ }),

/***/ "8jmp":
/*!*************************************************************************!*\
  !*** ./src/app/modals/modal-edit-order/modal-edit-order.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-column {\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.wrap {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrap .form {\n  width: 100%;\n  height: 60%;\n  padding: 0 30px;\n}\n\n.wrap .form ion-input {\n  --placeholder-color: rgba(140, 141, 140);\n  --placeholder-opacity: 1;\n  font-size: 15px;\n}\n\n.wrap .form ion-item {\n  --border-color: rgba(209, 179, 127);\n  --border-bottom-width: 2px;\n  margin-top: 10px;\n}\n\n.wrap .form .btn {\n  border: 0;\n  font-weight: 700;\n  text-transform: uppercase;\n  height: 40px;\n  width: 100%;\n  color: white;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.wrap .form .save-btn {\n  background-color: #E0B64A;\n}\n\n.wrap .form .sell-btn {\n  background-color: #b92b21;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLWVkaXQtb3JkZXIvbW9kYWwtZWRpdC1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDUjs7QUFDUTtFQUNJLHdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBQ1o7O0FBRVE7RUFDSSxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFBWjs7QUFHUTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFEWjs7QUFJUTtFQUNJLHlCQUFBO0FBRlo7O0FBS1E7RUFDSSx5QkFBQTtBQUhaOztBQVFBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL21vZGFsLWVkaXQtb3JkZXIvbW9kYWwtZWRpdC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1jb2x1bW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi53cmFwIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5mb3JtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG5cbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMTQwLCAxNDEsIDE0MCk7XG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyMDksIDE3OSwgMTI3KTtcbiAgICAgICAgICAgIC0tYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNhdmUtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEI2NEE7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsbC1idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I5MmIyMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE2NywgMTY3LCAxNjcsIDAuNSkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLy8gLmNhcmQtaW5wdXR7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4NCwgMTg0LCAxODQsIDAuNjkpO1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgICBwYWRkaW5nOiAwIDExcHggIWltcG9ydGFudDtcbi8vICAgICBmb250LXNpemU6MThweDtcbi8vIH0iXX0= */");

/***/ }),

/***/ "8tei":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-title>Create watchlist</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-item class=\"ion-margin-horizontal ion-no-padding\">\n\t\t<ion-label position=\"floating\">Name of watchlist</ion-label>\n\t\t<ion-input [(ngModel)]=\"watchlistName\"></ion-input>\n\t</ion-item>\n\t<ion-button class=\"ion-margin\" expand=\"block\" (click)=\"onCreateWatchlist()\">\n\t\tCreate watchlist\n\t\t<ion-spinner name=\"lines-small\" *ngIf=\"spinner\"></ion-spinner>\n\t</ion-button>\n\t<div cdkDropList class=\"drag-list\" (cdkDropListDropped)=\"drop($event)\" *ngIf=\"watchlists.length > 0\">\n\t\t<div class=\"drag-box\" *ngFor=\"let watchlist of watchlists\" cdkDrag>\n\t\t\t<ion-icon name=\"reorder-three-outline\" class=\"ion-margin-end\"></ion-icon>\n\t\t\t<span>{{ watchlist.name }}</span>\n\t\t</div>\n\t</div>\n\t<div style=\"width: 100%; display: flex; justify-content: center; align-items: center;\">\n\t\t<ion-spinner name=\"lines-small\" *ngIf=\"!dataLoaded\" class=\"ion-margin\"></ion-spinner>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "976h":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-title slot=\"start\">{{ isAdd ? \"Add funds\" : \"Withdraw funds\" }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<form #fundsForm=\"ngForm\" (ngSubmit)=\"submitFundsRequest(fundsForm.value)\">\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label>Amount</ion-label>\n\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\tmax=\"{{ isAdd ? 999999 : user.balance.availableBal }}\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\tname=\"amount\"\n\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-button *ngIf=\"isAdd\" class=\"ion-margin-vertical\" style=\"height: 50px\" expand=\"block\" color=\"success\" type=\"submit\">\n\t\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t\t\t\t\tAdd funds\n          </ion-button>\n          <ion-button *ngIf=\"!isAdd\" class=\"ion-margin-vertical\" style=\"height: 50px\" expand=\"block\" type=\"submit\">\n\t\t\t\t\t\t<ion-icon name=\"refresh-outline\"></ion-icon>\n\t\t\t\t\t\tWithdraw\n\t\t\t\t\t</ion-button>\n\t\t\t\t</form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<!-- <ion-row *ngIf=\"isAdd\">\n\t\t\t<ion-col>\n\t\t\t\t<form #addForm=\"ngForm\" (ngSubmit)=\"add(addForm.value)\">\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label>Amount</ion-label>\n\t\t\t\t\t\t<ion-input type=\"number\" min=\"0\" max=\"9999999\" required ngModel name=\"amount\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-button class=\"ion-margin-vertical\" style=\"height: 50px\" expand=\"block\" color=\"success\" type=\"submit\">\n\t\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t\t\t\t\tAdd funds\n\t\t\t\t\t</ion-button>\n\t\t\t\t</form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"!isAdd\">\n\t\t\t<ion-col>\n\t\t\t\t<form #withdrawForm=\"ngForm\" (ngSubmit)=\"withdraw(withdrawForm)\">\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label>Amount</ion-label>\n\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\tmax=\"{{ user.balance.availableBal }}\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\tname=\"amount\"\n\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-button class=\"ion-margin-vertical\" style=\"height: 50px\" expand=\"block\" type=\"submit\">\n\t\t\t\t\t\t<ion-icon name=\"refresh-outline\"></ion-icon>\n\t\t\t\t\t\tWithdraw\n\t\t\t\t\t</ion-button>\n\t\t\t\t</form>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\t</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://empuraan.com/api/v1/',
    socketUrl: 'http://socket.empuraan.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BCkd":
/*!**********************************************!*\
  !*** ./src/app/services/marubozu.service.ts ***!
  \**********************************************/
/*! exports provided: MarubozuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarubozuService", function() { return MarubozuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let MarubozuService = class MarubozuService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "marbozzu/";
        this.activeTab = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getAll() {
        return this.http.get(this.apiUrl);
    }
    get(key) {
        return this.http.get(this.apiUrl + key)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((payload) => {
            const data = payload.data;
            data.forEach(p => {
                p.color = "#fff";
            });
            payload.data = data;
            return payload;
        }));
    }
    delete(id) {
        return this.http.delete(this.apiUrl + `del/${id}`);
    }
    createBlogWithBlob(title, content, blobData, ext, image) {
        const formData = new FormData();
        formData.append("image", new Blob([blobData.url]), `img.${ext}`);
        formData.append("title", title);
        formData.append("content", content);
        return this.http.post(`${this.apiUrl}blog`, formData);
        // return this.http.post(this.apiUrl + 'blog', {title, content, image})
    }
    createBlogWithFile(title, content, file) {
        const formData = new FormData();
        const ext = file.name.split(".").pop();
        formData.append("image", file, `${file.name}.${ext}`);
        formData.append("title", title);
        formData.append("content", content);
        return this.http.post(`${this.apiUrl}blog`, formData);
        // return this.http.post(this.apiUrl + 'blog', {title, content, image})
    }
    createTutorial(title, embededurl) {
        return this.http.post(this.apiUrl + "tutorial", { title, embededurl });
    }
    createWithBlob(title, content, stockname, key, blobData, name, ext) {
        const formData = new FormData();
        if (blobData != null || blobData != undefined)
            formData.append("image", blobData, `${name}.${ext}`);
        formData.append("title", title);
        formData.append("content", content);
        if (key != "blog")
            formData.append("stockname", stockname);
        console.log(`${this.apiUrl}${key}`);
        return this.http.post(`${this.apiUrl}${key}`, formData);
        // return this.http.post(this.apiUrl + 'blog', {title, content, image})
    }
    createWithFile(title, content, stockname, key, file) {
        const formData = new FormData();
        const ext = file.name.split(".").pop();
        formData.append("image", file, `${file.name}.${ext}`);
        formData.append("title", title);
        formData.append("content", content);
        if (key != "blog")
            formData.append("stockname", stockname);
        console.log(`${this.apiUrl}${key}`);
        return this.http.post(`${this.apiUrl}${key}`, formData);
        // return this.http.post(this.apiUrl + key, {title, content, stockname, image})
    }
};
MarubozuService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MarubozuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], MarubozuService);



/***/ }),

/***/ "Cd/a":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-watchlist/modal-watchlist.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-title>Search Companies</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content vertical=\"top\" style=\"display: flex; flex-direction: column; align-items: center;\">\n\t<ion-searchbar showCancelButton=\"focus\" (ionChange)=\"filter($event.detail.value)\"></ion-searchbar>\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let s of filteredData || stocks\">\n\t\t\t<ion-label>\n\t\t\t\t<div style=\"display: flex; align-items: center;\">\n\t\t\t\t\t<span style=\"padding:5px 0\">{{ s.companyName }}</span>\n\t\t\t\t\t<ion-spinner *ngIf=\"s.isLoaded == false\" name=\"lines-small\" class=\"ion-padding-start\"></ion-spinner>\n\t\t\t\t</div>\n\t\t\t</ion-label>\n\t\t\t<ion-checkbox\n\t\t\t\tslot=\"end\"\n\t\t\t\t[checked]=\"seeIfChecked(s)\"\n\t\t\t\t(click)=\"onSelect($event, s)\"\n\t\t\t></ion-checkbox>\n\t\t</ion-item>\n\t</ion-list>\n\t<div style=\"width: 100%; display: flex; align-items: center; justify-content: center;\">\n\t\t<ion-spinner *ngIf=\"spinner\" name=\"lines-small\" class=\"ion-margin\"></ion-spinner>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "EqF1":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-post/modal-post.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-title>{{ post.title }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"wrap\">\n\t\t<!-- <h4 class=\"ion-padding-horizontal\"></h4> -->\n\t\t<ion-img *ngIf=\"post.image != null || post.image != undefined\" [src]=\"post.image\" class=\"ion-margin\"></ion-img>\n\t\t<span class=\"post-content\">{{ post.content }}</span>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "Ey9a":
/*!***********************************************************************************!*\
  !*** ./src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\n.drag-list {\n  width: 90%;\n  border-top: solid 1px #ccc;\n  border-bottom: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.drag-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.drag-box:last-child {\n  border: none;\n}\n\n.drag-list.cdk-drop-list-dragging .drag-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nion-title {\n  color: black;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-button, span, h5 {\n    font-size: 13px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLWVkaXQtd2F0Y2hsaXN0cy9tb2RhbC1lZGl0LXdhdGNobGlzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBQTtBQUNGOztBQUNBO0VBQ0csVUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVIOztBQUNDO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVIOztBQUNDO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBRUg7O0FBR0M7RUFDRSxVQUFBO0FBQUg7O0FBR0M7RUFDRSxzREFBQTtBQUFIOztBQUdDO0VBQ0UsWUFBQTtBQUFIOztBQUdDO0VBQ0Usc0RBQUE7QUFBSDs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsMEJBQUE7RUFHRjs7RUFEQTtJQUNFLDBCQUFBO0VBSUY7QUFDRjs7QUFGQTtFQUNFO0lBQ0ksWUFBQTtFQUlKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvbW9kYWwtZWRpdC13YXRjaGxpc3RzL21vZGFsLWVkaXQtd2F0Y2hsaXN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICBib3gtc2hhZG93OiAwcHggLTRweCAyMHB4IDExcHggI2ZhZmFmYSAhaW1wb3J0YW50O1xufVxuLmRyYWctbGlzdCB7XG4gICB3aWR0aDogOTAlO1xuICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNjY2M7XG4gICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIG1hcmdpbjogMCBhdXRvO1xuIH1cbiBcbiAuZHJhZy1ib3gge1xuICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgY3Vyc29yOiBtb3ZlO1xuICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICBmb250LXNpemU6IDE0cHg7XG4gfVxuIFxuIC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiB9XG4gXG4gLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgIG9wYWNpdHk6IDA7XG4gfVxuIFxuIC5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuIH1cbiBcbiAuZHJhZy1ib3g6bGFzdC1jaGlsZCB7XG4gICBib3JkZXI6IG5vbmU7XG4gfVxuIFxuIC5kcmFnLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZHJhZy1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuIH1cbmlvbi10aXRsZXtcbiAgY29sb3I6YmxhY2s7XG59XG5pb24taWNvbntcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgaW9uLXRpdGxlLCBoM3tcbiAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1sYWJlbCwgaW9uLWJ1dHRvbiwgc3BhbiwgaDV7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBpb24tdGl0bGV7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "JBwo":
/*!*****************************************************************************!*\
  !*** ./src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\n.drag-list {\n  width: 90%;\n  border-top: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.drag-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc !important;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.drag-box:last-child {\n  border: none;\n}\n\n.drag-list.cdk-drop-list-dragging .drag-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nion-title {\n  color: black;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-button, span, h5 {\n    font-size: 13px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLXdhdGNobGlzdC1jZS9tb2RhbC13YXRjaGxpc3QtY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpREFBQTtBQUFGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUNGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0Usc0RBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLHNEQUFBO0FBREY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLDBCQUFBO0VBRUY7O0VBQUE7SUFDRSwwQkFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRTtJQUNJLFlBQUE7RUFHSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL21vZGFsLXdhdGNobGlzdC1jZS9tb2RhbC13YXRjaGxpc3QtY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10b29sYmFye1xuICBib3gtc2hhZG93OiAwcHggLTRweCAyMHB4IDExcHggI2ZhZmFmYSAhaW1wb3J0YW50O1xufVxuLmRyYWctbGlzdCB7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZHJhZy1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5kcmFnLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZHJhZy1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmRyYWctYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuaW9uLXRpdGxle1xuICBjb2xvcjpibGFjaztcbn1cbmlvbi1pY29ue1xuICBmb250LXNpemU6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICBpb24tdGl0bGUsIGgze1xuICAgIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWxhYmVsLCBpb24tYnV0dG9uLCBzcGFuLCBoNXtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi10aXRsZXtcbiAgICAgIGNvbG9yOndoaXRlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "K/jU":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-fp-email/modal-fp-email.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<ion-icon name=\"arrow-back-outline\" (click)=\"dismissModal()\"></ion-icon>\n\t<div class=\"wrap\">\n\t\t<div class=\"form ion-padding-horizontal ion-text-center\">\n\t\t\t<ion-img src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t\t\t<ion-label class=\"title\">Password<br />Recovery</ion-label>\n\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t<ion-input placeholder=\"Email address\" [(ngModel)]=\"email\" type=\"email\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<button (click)=\"emailCheck(email)\" class=\"send button\">\n\t\t\t\tSend me the code\n\t\t\t\t<ion-spinner name=\"lines-small\" *ngIf=\"spinner\" color=\"light\"></ion-spinner>\n\t\t\t</button>\n\t\t\t<button (click)=\"dismissModal()\" class=\"cancel button\">Cancel</button>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "K2jm":
/*!*********************************************************************************!*\
  !*** ./src/app/modals/modal-change-password/modal-change-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModalChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalChangePasswordComponent", function() { return ModalChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-change-password.component.html */ "y2a+");
/* harmony import */ var _modal_change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-change-password.component.scss */ "W723");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");






let ModalChangePasswordComponent = class ModalChangePasswordComponent {
    constructor(modalCtrl, userService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.spinner = false;
        this.userService.authenticated.subscribe((u) => (this.user = u.user));
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    changePassword(input) {
        this.spinner = true;
        if (input.newPassword != "" || input.confirmPassword != "") {
            if (input.newPassword == input.confirmPassword) {
                const email = this.email != null ? this.email : this.user.email;
                this.userService.changePassword(email, input.newPassword).subscribe(() => { }, (err) => {
                    this.spinner = false;
                    this.presentErrorToast(err);
                }, () => {
                    this.spinner = false;
                    this.presentSuccessToast('Password changed successfuly.');
                    this.dismissModal();
                });
            }
            else {
                this.spinner = false;
                this.presentErrorToast('New passwords don\'t match.');
            }
        }
        else {
            this.spinner = false;
            this.presentErrorToast('Something is missing.');
        }
    }
    presentErrorToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2500,
                color: "danger",
            });
            yield toast.present();
        });
    }
    presentSuccessToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2500,
                color: "success",
            });
            yield toast.present();
        });
    }
};
ModalChangePasswordComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ModalChangePasswordComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['email',] }]
};
ModalChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-change-password",
        template: _raw_loader_modal_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalChangePasswordComponent);



/***/ }),

/***/ "Kmqd":
/*!*********************************************************************!*\
  !*** ./src/app/modals/modal-fp-email/modal-fp-email.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*:focus {\n  outline: none;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.wrap .form {\n  width: 100%;\n  height: 80%;\n}\n\n.logo {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n}\n\n.title {\n  font-size: 25px;\n  height: 100px;\n}\n\nion-input {\n  --placeholder-color: rgba(140,141,140);\n  --placeholder-opacity: 1;\n  font-size: 15px;\n}\n\nion-item {\n  --border-color: rgba(209,179,127);\n  --border-bottom-width: 2px;\n  margin: 40px 0;\n}\n\nion-icon {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 35px;\n  height: 35px;\n  color: #E0B64A;\n}\n\n.button {\n  width: 100%;\n  border-radius: 15px;\n  height: 50px;\n  font-size: 14px;\n  margin-top: 10px;\n}\n\n.send {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #E0B64A;\n  color: white;\n  border: 1px solid #E0B64A;\n}\n\n.cancel {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  color: #E0B64A;\n  border: 1px solid #E0B64A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLWZwLWVtYWlsL21vZGFsLWZwLWVtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVKOztBQURJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFHUjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksc0NBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFTSjs7QUFQQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVVKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL21vZGFsLWZwLWVtYWlsL21vZGFsLWZwLWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLndyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIC5mb3Jte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgfVxufVxuLmxvZ297XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbmlvbi1pbnB1dHtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDE0MCwxNDEsMTQwKTtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDIwOSwxNzksMTI3KTtcbiAgICAtLWJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICBtYXJnaW46NDBweCAwO1xufVxuaW9uLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDoyMHB4O1xuICAgIGxlZnQ6MjBweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgY29sb3I6I0UwQjY0QTtcbn1cbi5idXR0b257XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNlbmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwQjY0QTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBCNjRBO1xufVxuLmNhbmNlbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjojRTBCNjRBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEI2NEE7XG59Il19 */");

/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		46
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		47
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		48
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		49
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		50
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "LX2U":
/*!***********************************************************************!*\
  !*** ./src/app/modals/modal-edit-order/modal-edit-order.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModalEditOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditOrderComponent", function() { return ModalEditOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_edit_order_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-edit-order.component.html */ "TSKy");
/* harmony import */ var _modal_edit_order_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-edit-order.component.scss */ "8jmp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/order.service */ "kVqo");






let ModalEditOrderComponent = class ModalEditOrderComponent {
    constructor(modalCtrl, orderService) {
        this.modalCtrl = modalCtrl;
        this.orderService = orderService;
    }
    ngOnInit() { }
    dismissModal(change) {
        this.modalCtrl.dismiss(change);
    }
    savePosition() {
        (this.position != null)
            && this.orderService
                .updateOrder(this.position.id, this.position.target, this.position.stoploss)
                .subscribe(() => { }, () => { }, () => this.dismissModal(true));
    }
    sellPosition() {
        (this.position != null)
            && this.orderService
                .exitPosition(this.position.id)
                .subscribe(() => { }, () => { }, () => this.dismissModal(true));
    }
    savePending() {
        (this.pending != null)
            && this.orderService
                .updateOrder(this.pending.id, this.pending.target, this.pending.stoploss)
                .subscribe(() => { }, () => { }, () => this.dismissModal(true));
    }
};
ModalEditOrderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
];
ModalEditOrderComponent.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    pending: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalEditOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-edit-order',
        template: _raw_loader_modal_edit_order_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_edit_order_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalEditOrderComponent);



/***/ }),

/***/ "N+8n":
/*!***********************************************************!*\
  !*** ./src/app/modals/modal-post/modal-post.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPostComponent", function() { return ModalPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-post.component.html */ "EqF1");
/* harmony import */ var _modal_post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-post.component.scss */ "1fgy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ModalPostComponent = class ModalPostComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        console.log(this.post.image);
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
ModalPostComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalPostComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-post',
        template: _raw_loader_modal_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPostComponent);



/***/ }),

/***/ "Nbj3":
/*!*********************************************************************!*\
  !*** ./src/app/modals/modal-watchlist/modal-watchlist.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalWatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWatchlistComponent", function() { return ModalWatchlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_watchlist_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-watchlist.component.html */ "Cd/a");
/* harmony import */ var _modal_watchlist_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-watchlist.component.scss */ "dUkv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/stock.service */ "8hSh");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/watchlist.service */ "Tl0h");







let ModalWatchlistComponent = class ModalWatchlistComponent {
    constructor(modalCtrl, watchlistService, stockService) {
        this.modalCtrl = modalCtrl;
        this.watchlistService = watchlistService;
        this.stockService = stockService;
    }
    ngOnInit() {
        this.i = 0;
        this.spinner = true;
        this.stockService.getStocks().subscribe((s) => {
            this.stocks = s.data;
            this.spinner = false;
        });
        this.watchlistService.getWatchlist(this.selectedWatchlist).subscribe((w) => {
            this.sWatchlist = w.data;
        });
    }
    dismissModal() {
        const v = this.changeOfWatchlist;
        this.changeOfWatchlist = false;
        this.modalCtrl.dismiss(v);
    }
    onSelect(event, stock) {
        const e = event.detail.checked;
        if (e != null || e != undefined) {
            const sIndex = this.stocks.indexOf(this.stocks.find((s) => s._id == stock._id));
            this.stocks[sIndex].isLoaded = false;
            if (e == true) {
                this.watchlistService.addToWatchlist(this.selectedWatchlist, stock._id).subscribe(() => {
                    this.stocks[sIndex].isLoaded = true;
                });
            }
            else if (e == false) {
                this.watchlistService.removeFromWatchlist(this.selectedWatchlist, stock._id).subscribe(() => {
                    this.stocks[sIndex].isLoaded = true;
                });
            }
            this.changeOfWatchlist = true;
        }
    }
    filter(filterValue) {
        this.filteredData = this.stocks.filter((stock) => stock.companyName.toLowerCase().includes(filterValue.toLowerCase()));
    }
    seeIfChecked(stock) {
        var _a, _b;
        if (((_a = this.sWatchlist) === null || _a === void 0 ? void 0 : _a.stockIds.length) > 0) {
            const v = (_b = this.sWatchlist) === null || _b === void 0 ? void 0 : _b.stockIds.find((s) => s.id == stock._id);
            if (v != null || v != undefined) {
                return true;
            }
        }
        else
            return false;
    }
};
ModalWatchlistComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__["WatchlistService"] },
    { type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"] }
];
ModalWatchlistComponent.propDecorators = {
    selectedWatchlist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalWatchlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-watchlist",
        template: _raw_loader_modal_watchlist_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_watchlist_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalWatchlistComponent);



/***/ }),

/***/ "OtLC":
/*!*********************************************************************************!*\
  !*** ./src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  outline: none;\n}\n\nion-toolbar {\n  background-color: #e3e3e3;\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\n.subtitle, .subtitle ion-label {\n  padding-left: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n}\n\n.subtitle h5 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 400;\n  font-size: 15px;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n.table-title {\n  font-size: 17px;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\nth {\n  font-size: 16px;\n  color: #a2a2a2;\n  font-weight: 400;\n}\n\ntd {\n  font-size: 15px;\n}\n\nion-title {\n  color: black;\n}\n\n.buy-sell-btn {\n  height: 50px;\n}\n\n.wrap {\n  width: 100%;\n  height: 100%;\n  padding-top: 25px;\n}\n\n.position-title {\n  padding: 15px;\n  font-size: 25px;\n}\n\n.position-card .information {\n  color: black;\n}\n\n.position-card .information .stockname {\n  font-weight: 500;\n  padding-right: 15px;\n}\n\n.position-card .information .price {\n  color: #dab65d;\n  font-weight: 800;\n  padding-right: 15px;\n}\n\n.position-card .information .percentage {\n  font-weight: 600;\n}\n\n.position-card .buttons {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.position-card .buttons .buy-btn,\n.position-card .buttons .sell-btn {\n  border: 0;\n  font-weight: 700;\n  text-transform: uppercase;\n  height: 40px;\n  width: 46%;\n  color: white;\n  border-radius: 10px;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.position-card .buttons .sell-btn {\n  background: #c3281b;\n}\n\n.position-card .buttons .buy-btn {\n  background: #215fcc;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-select, ion-select-option, p, h5 {\n    font-size: 13px !important;\n  }\n\n  .buy-sell-btn {\n    height: 40px;\n    font-size: 15px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2J1eS1zZWxsLW1vZGFsLXBvcHVwL2J1eS1zZWxsLW1vZGFsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxpREFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVRJO0VBQ0ksWUFBQTtBQVlSOztBQVhRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWFaOztBQVhRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFhWjs7QUFYUTtFQUNJLGdCQUFBO0FBYVo7O0FBVkk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVlSOztBQVhROztFQUVJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFhWjs7QUFYUTtFQUNJLG1CQUFBO0FBYVo7O0FBWFE7RUFDSSxtQkFBQTtBQWFaOztBQVRBO0VBQ0k7SUFDSSwwQkFBQTtFQVlOOztFQVZFO0lBQ0ksMEJBQUE7RUFhTjs7RUFYRTtJQUNJLFlBQUE7SUFDQSwwQkFBQTtFQWNOO0FBQ0Y7O0FBWkE7RUFDSTtJQUNJLFlBQUE7RUFjTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2J1eS1zZWxsLW1vZGFsLXBvcHVwL2J1eS1zZWxsLW1vZGFsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBvdXRsaW5lOiBub25lO1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcbiAgICBib3gtc2hhZG93OiAwcHggLTRweCAyMHB4IDExcHggI2ZhZmFmYSAhaW1wb3J0YW50O1xufVxuLnN1YnRpdGxlLCAuc3VidGl0bGUgaW9uLWxhYmVse1xuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3VidGl0bGUgaDV7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuaHIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE2NywgMTY3LCAxNjcsIDAuNSkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4udGFibGUtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cbnRoe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2EyYTJhMjtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxudGR7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmJ1eS1zZWxsLWJ0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ud3JhcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6MjVweDtcbn1cbi5wb3NpdGlvbi10aXRsZXtcbiAgICBwYWRkaW5nOjE1cHg7XG4gICAgZm9udC1zaXplOjI1cHg7XG59XG4ucG9zaXRpb24tY2FyZHtcbiAgICAuaW5mb3JtYXRpb257XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAuc3RvY2tuYW1le1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNle1xuICAgICAgICAgICAgY29sb3I6ICNkYWI2NWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAucGVyY2VudGFnZXtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ1dHRvbnN7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLmJ1eS1idG4sXG4gICAgICAgIC5zZWxsLWJ0bntcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc2VsbC1idG57XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NSw0MCwyNyk7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1eS1idG57XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMzLDk1LDIwNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGlvbi10aXRsZSwgaDN7XG4gICAgICAgIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1sYWJlbCwgaW9uLXNlbGVjdCwgaW9uLXNlbGVjdC1vcHRpb24sIHAsIGg1e1xuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ1eS1zZWxsLWJ0bntcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIGlvbi10aXRsZXtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "qfBg");











const { Network, LocalNotifications, App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, alertController, location, router, userService, navCtrl, navParams) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertController = alertController;
        this.location = location;
        this.router = router;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splash = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.initializeApp();
            this.connectionLostEvent();
            this.backButtonEvent();
            // this.tabBarElement = document.querySelector('.tabbar');
            // this.tabBarElement.style.display = 'none';
            setTimeout(() => {
                this.splash = false;
                // this.tabBarElement.style.display = 'flex';
            }, 4000);
        });
    }
    connectionLostEvent() {
        this.networkListener = Network.addListener('networkStatusChange', (status) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.networkStatus = status;
            if (!this.networkStatus.connected)
                yield this.connectionLostNotification();
        }));
    }
    backButtonEvent() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            if (this.router.url == "/home/dashboard")
                this.backButtonAlert();
            else
                this.location.back();
        });
    }
    backButtonAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'You\'ve just pressed the back button',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    }, {
                        text: 'Close app',
                        handler: () => {
                            App.exitApp();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    connectionLostNotification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield LocalNotifications.schedule({
                notifications: [{
                        id: 1,
                        title: 'You\'ve lost internet connection',
                        body: 'Any progress accomplished during this time will be lost.'
                    }]
            });
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.userService.authenticated.subscribe(a => {
                a ? this.router.navigate(['home', 'dashboard']) : this.router.navigate(['home', 'login']);
            });
            // this.stockService.initStocks().subscribe()
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] }
];
AppComponent.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"], { static: false },] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TSKy":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-edit-order/modal-edit-order.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-title>{{ position != null ? \"Edit Position\" : \"Edit Pending\" }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"wrap\">\n\t\t<div class=\"form\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"title-column\">\n\t\t\t\t\t\t<ion-label class=\"ion-padding\" *ngIf=\"position != null\">{{ position.name }}</ion-label>\n\t\t\t\t\t\t<ion-label class=\"ion-padding\" *ngIf=\"pending != null\">{{ pending.name }}</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row *ngIf=\"position != null\">\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Stop-loss</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"text\" required min=\"0\" [(ngModel)]=\"position.stoploss\" name=\"stopLoss\">\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<!-- <span>Stop-loss</span>\n\t\t\t\t<ion-input type=\"number\" class=\"card-input\" name=\"stopLoss\" required\n\t\t\t\t\tmin=\"0\"></ion-input> -->\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Target</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"text\" required min=\"0\" [(ngModel)]=\"position.target\" name=\"target\">\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<!-- <span>Target</span>\n\t\t\t\t<ion-input type=\"number\" class=\"card-input\" name=\"target\" [(ngModel)]=\"position.target\" required\n\t\t\t\t\tmin=\"0\"></ion-input> -->\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row *ngIf=\"pending != null\">\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<div *ngIf=\"!pending.isStopLoss\">\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Price</ion-label>\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" required min=\"0\" [(ngModel)]=\"pending.price\" name=\"target\">\n\t\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<!-- <span>Price</span>\n\t\t\t\t\t<ion-input type=\"number\" class=\"card-input\" name=\"target\" [(ngModel)]=\"pending.price\" required\n\t\t\t\t\t\tmin=\"0\"></ion-input> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"pending.isStopLoss\">\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Stop-loss</ion-label>\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" required min=\"0\" [(ngModel)]=\"position.stoploss\" name=\"stopLoss\">\n\t\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<!-- <span>Stop-loss</span>\n\t\t\t\t\t<ion-input type=\"number\" class=\"card-input\" name=\"stopLoss\" [(ngModel)]=\"pending.stoploss\" required\n\t\t\t\t\t\tmin=\"0\"></ion-input> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t\t<div *ngIf=\"position != null\">\n\t\t\t\t<button (click)=\"savePosition()\" class=\"btn save-btn\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t\t<button (click)=\"sellPosition()\" class=\"btn sell-btn\">\n\t\t\t\t\tSell\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"pending != null\">\n\t\t\t\t<button (click)=\"savePending()\" class=\"btn save-btn\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "Tl0h":
/*!***********************************************!*\
  !*** ./src/app/services/watchlist.service.ts ***!
  \***********************************************/
/*! exports provided: WatchlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistService", function() { return WatchlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let WatchlistService = class WatchlistService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'watchlist/';
    }
    getWatchlist(id) {
        return this.http.get(this.apiUrl + id);
    }
    getSimulatedWatchlists() {
        return this.http.get(this.apiUrl + 'filter/simulated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            r.data.forEach(w => {
                w.stockIds.forEach(s => {
                    s.isLoaded = true;
                });
            });
            return r;
        }));
    }
    getRealtimeWatchlists() {
        return this.http.get(this.apiUrl + 'filter/realTime').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            r.data.forEach(w => {
                w.stockIds.forEach(s => {
                    s.isLoaded = true;
                });
            });
            return r;
        }));
    }
    addToWatchlist(watchlistId, stockId) {
        return this.http.put(this.apiUrl + 'add/stock', { watchlistId, stockId });
    }
    removeFromWatchlist(watchlistId, stockId) {
        return this.http.put(this.apiUrl + 'stock/remove', { watchlistId, stockId });
    }
    createWatchlist(name) {
        return this.http.post(this.apiUrl + 'new', { name });
    }
    updateWatchlistPositions(list) {
        return this.http.put(this.apiUrl + 'update/watchlist/positions', { list });
    }
    updateWatchlistStocksPositions(watchlistId, stocks) {
        return this.http.put(this.apiUrl + 'update/watchlist/stocks/positions', { watchlistId, stocks });
    }
    editWatchlist(watchlistId, name) {
        return this.http.put(this.apiUrl + 'update/watchlist/name', { watchlistId, name });
    }
    deleteWatchlist(id) {
        return this.http.delete(this.apiUrl + id);
    }
    moveInArray(arr, prevIndex, currIndex) {
        if (currIndex >= arr.length) {
            var k = currIndex - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(currIndex, 0, arr.splice(prevIndex, 1)[0]);
        return arr;
    }
};
WatchlistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
WatchlistService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], WatchlistService);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <div class=\"splash-wrap\" [style.display]=\"splash ? 'flex': 'none'\">\n    <img class=\"splash-screen\" src=\"assets/splash/splash.gif\" >\n  </div>\n  <!-- <div class=\"custom-overlay\" [style.display]=\"splash ? 'flex': 'none'\">\n    <div class=\"flb\">\n      <div class=\"aligner-item aligner-item--top\"></div>\n      <img src=\"assets/svg/user.svg\">\n      <div class=\"aligner-item aligner-item--bottom\"></div>\n    </div>\n  </div> -->\n  <ion-router-outlet [hidden]=\"splash\"></ion-router-outlet>\n</ion-app>");

/***/ }),

/***/ "W723":
/*!***********************************************************************************!*\
  !*** ./src/app/modals/modal-change-password/modal-change-password.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*:focus {\n  outline: none;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.wrap form {\n  width: 100%;\n  height: 60%;\n}\n\n.title {\n  padding-bottom: 25px;\n}\n\n.title ion-label {\n  font-size: 35px;\n  font-weight: 700;\n}\n\nion-input {\n  --placeholder-color: rgba(140,141,140);\n  --placeholder-opacity: 1;\n  font-size: 15px;\n}\n\nion-item {\n  --border-color: rgba(209,179,127);\n  --border-bottom-width: 2px;\n  margin-top: 10px;\n}\n\nion-icon {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 35px;\n  height: 35px;\n  color: #E0B64A;\n}\n\n.button {\n  width: 100%;\n  border-radius: 15px;\n  height: 50px;\n  font-size: 14px;\n  margin-top: 10px;\n}\n\n.change-password {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #E0B64A;\n  color: white;\n  border: 1px solid #E0B64A;\n}\n\n.cancel {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  color: #E0B64A;\n  border: 1px solid #E0B64A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLWNoYW5nZS1wYXNzd29yZC9tb2RhbC1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUdSOztBQUFBO0VBQ0ksb0JBQUE7QUFHSjs7QUFGSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUlSOztBQURBO0VBQ0ksc0NBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFTSiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC1jaGFuZ2UtcGFzc3dvcmQvbW9kYWwtY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLndyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGZvcm17XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICB9XG59XG4udGl0bGV7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcbiAgICB9XG59XG5pb24taW5wdXR7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgxNDAsMTQxLDE0MCk7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyMDksMTc5LDEyNyk7XG4gICAgLS1ib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuaW9uLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDoyMHB4O1xuICAgIGxlZnQ6MjBweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgY29sb3I6I0UwQjY0QTtcbn1cbi5idXR0b257XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNoYW5nZS1wYXNzd29yZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBCNjRBO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEI2NEE7XG59XG4uY2FuY2Vse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiNFMEI2NEE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UwQjY0QTtcbn0iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "zzaN");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/modal-watchlist/modal-watchlist.component */ "Nbj3");
/* harmony import */ var _modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/modal-watchlist-ce/modal-watchlist-ce.component */ "1r9f");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modals/buy-sell-modal-popup/buy-sell-modal-popup.component */ "lNYK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "KqBo");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/File/ngx */ "B7Vy");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modals/modal-edit-watchlists/modal-edit-watchlists.component */ "rdK+");
/* harmony import */ var _modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modals/modal-edit-order/modal-edit-order.component */ "LX2U");
/* harmony import */ var _modals_modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modals/modal-change-password/modal-change-password.component */ "K2jm");
/* harmony import */ var _modals_modal_withdraw_add_funds_modal_withdraw_add_funds_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component */ "whIa");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "hzlp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./modals/modal-upload-post/modal-upload-post.component */ "x7KT");
/* harmony import */ var _modals_modal_fp_code_check_modal_fp_code_check_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modals/modal-fp-code-check/modal-fp-code-check.component */ "bzO4");
/* harmony import */ var _modals_modal_fp_email_modal_fp_email_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modals/modal-fp-email/modal-fp-email.component */ "nJHT");
/* harmony import */ var _modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modals/modal-post/modal-post.component */ "N+8n");







































function tokenGetter() {
    return localStorage.getItem("token");
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_14__["ModalWatchlistComponent"],
            _modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_15__["ModalWatchlistCeComponent"],
            _modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_17__["BuySellModalPopupComponent"],
            _modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_27__["ModalEditWatchlistsComponent"],
            _modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_28__["ModalEditOrderComponent"],
            _modals_modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_29__["ModalChangePasswordComponent"],
            _modals_modal_withdraw_add_funds_modal_withdraw_add_funds_component__WEBPACK_IMPORTED_MODULE_30__["ModalWithdrawAddFundsComponent"],
            _modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_35__["ModalUploadPostComponent"],
            _modals_modal_fp_code_check_modal_fp_code_check_component__WEBPACK_IMPORTED_MODULE_36__["ModalFpCodeCheckComponent"],
            _modals_modal_fp_email_modal_fp_email_component__WEBPACK_IMPORTED_MODULE_37__["ModalFpEmailComponent"],
            _modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_38__["ModalPostComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_12__["SuperTabsModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__["DragDropModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_19__["NgxChartsModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_24__["IonicStorageModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: [src_environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].apiUrl],
                    disallowedRoutes: [src_environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].apiUrl + "auth"],
                },
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
        ],
        exports: [],
        providers: [
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_20__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_21__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_22__["WebView"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_23__["FilePath"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Clipboard"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_33__["GooglePlus"],
            Storage,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_34__["ScreenOrientation"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_31__["JwtInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "bzO4":
/*!*****************************************************************************!*\
  !*** ./src/app/modals/modal-fp-code-check/modal-fp-code-check.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModalFpCodeCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFpCodeCheckComponent", function() { return ModalFpCodeCheckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_fp_code_check_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-fp-code-check.component.html */ "jYAL");
/* harmony import */ var _modal_fp_code_check_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-fp-code-check.component.scss */ "f0yJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-change-password/modal-change-password.component */ "K2jm");







let ModalFpCodeCheckComponent = class ModalFpCodeCheckComponent {
    constructor(modalCtrl, userService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.spinner = false;
        this.code = "";
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    codeCheck(email, code) {
        this.spinner = true;
        if (typeof code != "undefined" && code) {
            this.userService.checkCodeValid(email, code).subscribe((r) => {
                this.openChangePasswordModal(email);
                this.dismissModal();
                this.spinner = false;
            }, () => {
                this.presentErrorToast("Code is incorrect.");
                this.spinner = false;
            });
        }
        else {
            this.presentErrorToast("Enter the code you've received.");
            this.spinner = false;
        }
    }
    openChangePasswordModal(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ModalChangePasswordComponent"],
                componentProps: { email }
            });
            return yield modal.present();
        });
    }
    presentErrorToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.toastCtrl.create({
                message,
                color: "danger",
                duration: 2500,
            });
            yield modal.present();
        });
    }
};
ModalFpCodeCheckComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ModalFpCodeCheckComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["email",] }]
};
ModalFpCodeCheckComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-fp-code-check",
        template: _raw_loader_modal_fp_code_check_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_fp_code_check_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalFpCodeCheckComponent);



/***/ }),

/***/ "ck4M":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-upload-post/modal-upload-post.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-title>Upload post</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<form #postForm=\"ngForm\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Post title</ion-label>\n\t\t\t\t\t\t<ion-input name=\"title\" ngModel required maxlength=100></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row *ngIf=\"blog == false\">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Stock Name</ion-label>\n\t\t\t\t\t\t<ion-input name=\"stockname\" ngModel required maxlength=100></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Content</ion-label>\n\t\t\t\t\t\t<ion-textarea name=\"content\" ngModel required autoGrow></ion-textarea>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-button color=\"success\" class=\"post-button\" expand=\"block\" (click)=\"selectImageSource()\">\n\t\t\t\t\t\t<ion-icon name=\"attach-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-button expand=\"block\" class=\"post-button\" (click)=\"uploadFile(postForm)\">\n\t\t\t\t\t\tPost\n\t\t\t\t\t\t<ion-spinner name=\"lines-small\" class=\"ion-padding-start\" *ngIf=\"spinner\"></ion-spinner>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" *ngFor=\"let img of images; let i = index\" class=\"ion-text-center\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<!-- <p>{{ img.createdAt | date: \"short\" }}</p> -->\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-img [src]=\"img.url\" [alt]=\"img\"></ion-img>\n\t\t\t\t\t<ion-fab vertical=\"bottom\" horizontal=\"end\">\n\t\t\t\t\t\t<ion-fab-button color=\"danger\" size=\"small\" (click)=\"deleteImage(i)\">\n\t\t\t\t\t\t\t<ion-icon name=\"trash-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-fab-button>\n\t\t\t\t\t</ion-fab>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</form>\n</ion-content>\n");

/***/ }),

/***/ "dUkv":
/*!***********************************************************************!*\
  !*** ./src/app/modals/modal-watchlist/modal-watchlist.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLXdhdGNobGlzdC9tb2RhbC13YXRjaGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpREFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL21vZGFsLXdhdGNobGlzdC9tb2RhbC13YXRjaGxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10b29sYmFye1xuICAgIGJveC1zaGFkb3c6IDBweCAtNHB4IDIwcHggMTFweCAjZmFmYWZhICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "f0yJ":
/*!*******************************************************************************!*\
  !*** ./src/app/modals/modal-fp-code-check/modal-fp-code-check.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*:focus {\n  outline: none;\n}\n\n.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.wrap .form {\n  width: 100%;\n  height: 60%;\n}\n\n.title {\n  font-size: 25px;\n  height: 100px;\n}\n\nion-input {\n  --placeholder-color: rgba(140,141,140);\n  --placeholder-opacity: 1;\n  font-size: 15px;\n}\n\nion-item {\n  --border-color: rgba(209,179,127);\n  --border-bottom-width: 2px;\n  margin: 40px 0;\n}\n\nion-icon {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 35px;\n  height: 35px;\n  color: #E0B64A;\n}\n\n.button {\n  width: 100%;\n  border-radius: 15px;\n  height: 50px;\n  font-size: 14px;\n  margin-top: 10px;\n}\n\n.validate {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #E0B64A;\n  color: white;\n  border: 1px solid #E0B64A;\n}\n\n.cancel {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  color: #E0B64A;\n  border: 1px solid #E0B64A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLWZwLWNvZGUtY2hlY2svbW9kYWwtZnAtY29kZS1jaGVjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBR1I7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURBO0VBQ0ksc0NBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVNKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL21vZGFsLWZwLWNvZGUtY2hlY2svbW9kYWwtZnAtY29kZS1jaGVjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIio6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi53cmFwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICAuZm9ybXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjAlO1xuICAgIH1cbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbmlvbi1pbnB1dHtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDE0MCwxNDEsMTQwKTtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDIwOSwxNzksMTI3KTtcbiAgICAtLWJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICBtYXJnaW46NDBweCAwO1xufVxuaW9uLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDoyMHB4O1xuICAgIGxlZnQ6MjBweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgY29sb3I6I0UwQjY0QTtcbn1cbi5idXR0b257XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnZhbGlkYXRle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEI2NEE7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UwQjY0QTtcbn1cbi5jYW5jZWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6I0UwQjY0QTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBCNjRBO1xufSJdfQ== */");

/***/ }),

/***/ "gn15":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-title>Edit watchlist</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-item class=\"ion-margin-horizontal ion-no-padding\">\n\t\t<ion-label position=\"floating\">Name of watchlist</ion-label>\n\t\t<ion-input [(ngModel)]=\"watchlistName\"></ion-input>\n\t</ion-item>\n\t<ion-button (click)=\"onEditWatchlist()\" class=\"ion-margin\" expand=\"block\">\n\t\tSave watchlist\n\t\t<ion-spinner name=\"lines-small\" *ngIf=\"spinner\"></ion-spinner>\n\t</ion-button>\n\t<div cdkDropList class=\"drag-list\" (cdkDropListDropped)=\"drop($event)\" *ngIf=\"stocks.length > 0\">\n\t\t<div *ngFor=\"let stock of stocks\" style=\"width: 100%;\" cdkDrag class=\"drag-box\">\n\t\t\t<div *ngIf=\"stock != undefined\">\n\t\t\t\t<ion-icon name=\"reorder-three-outline\" class=\"ion-margin-end\"></ion-icon>\n\t\t\t\t<span>{{ stock.name }}</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "hzlp":
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stock.service */ "8hSh");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");




let JwtInterceptor = class JwtInterceptor {
    constructor(stockService, userService) {
        this.stockService = stockService;
        this.userService = userService;
    }
    intercept(req, next) {
        let token;
        this.userService.authenticated.subscribe((r) => {
            token = r.token;
        });
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(req);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "jYAL":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-fp-code-check/modal-fp-code-check.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<ion-icon name=\"arrow-back-outline\" (click)=\"dismissModal()\"></ion-icon>\n  <div class=\"wrap\">\n    <div class=\"form ion-padding-horizontal ion-text-center\">\n      <ion-label class=\"title\">\n        Enter the code that you've recieved on {{email}}\n      </ion-label>\n      <ion-item class=\"ion-no-padding\">\n        <ion-input placeholder=\"Code\" [(ngModel)]=\"code\"></ion-input>\n      </ion-item>\n      <button class=\"validate button\" (click)=\"codeCheck(email, code)\">\n        Validate my code\n        <ion-spinner name=\"lines-small\" color=\"light\" *ngIf=\"spinner\"></ion-spinner>\n      </button>\n\t\t\t<button (click)=\"dismissModal()\" class=\"cancel button\">Cancel</button>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		3
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		4
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		5
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		6
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		7
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		8
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		9
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		10
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		11
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		12
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		13
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		14
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		15
	],
	"./ion-img.entry.js": [
		"wHD8",
		16
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		17
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		18
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		19
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		20
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		21
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		22
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		23
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		24
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		25
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		26
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		27
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		28
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		29
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		30
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		31
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		32
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		33
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		34
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		35
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		36
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		37
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		38
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		39
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		40
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		41
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		42
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		43
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		44
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		45
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kVqo":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock.service */ "8hSh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let OrderService = class OrderService {
    constructor(stockService, http, router) {
        this.stockService = stockService;
        this.http = http;
        this.router = router;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'stocks/';
    }
    getAllUserOrders() {
        return this.http.get(this.apiUrl + 'orders/all');
    }
    getOrder(id) {
        return this.http.get(this.apiUrl + `orders/${id}`);
    }
    stopOrder(id) {
        return this.http.post(this.apiUrl + 'order/stop', { id });
    }
    updateOrder(id, stoploss, target) {
        return this.http.put(this.apiUrl + 'order/update', { id, stoploss, target });
    }
    savePosition(id, target, stoploss) {
        return this.http.put(this.apiUrl + 'order/update', { id, target, stoploss });
    }
    exitPosition(id) {
        return this.http.post(this.apiUrl + 'order/stop', { id });
    }
    // buy(cId: string, watchlistId: string,quantity: number, stopLoss: number, target: number, order: string, availableBal: number, price?: number){
    //   if(availableBal >= price){
    //     let company
    //     this.stockService.getStock(cId).subscribe((c:any) => {
    //       company = c.data
    //       var pending
    //       pending = {stockId: cId, watchlistId, volume: quantity, stoploss: stopLoss, target, price}
    //       order == 'limit'
    //       ? this.stockService.orderStockLimitBuy(pending).subscribe(()=>{},()=>{},()=>this.router.navigate(['home','orders']))
    //       : this.stockService.orderStockMarketBuy(pending).subscribe(()=>{},()=>{},()=>this.router.navigate(['home','orders']))
    //     })
    //   }
    // }
    // sell(cId: string, watchlistId: string,quantity: number, stopLoss: number, target: number, order: string, availableBal: number, price?: number){
    //   let company
    //   this.stockService.getStock(cId).subscribe((c:any) => {
    //     company = c.data
    //     var pending
    //     pending = {stockId: cId, watchlistId, volume: quantity, stoploss: stopLoss, target, price}
    //     order == 'limit'
    //     ? this.stockService.orderStockLimitSell(pending).subscribe(()=>{},()=>{},()=>this.router.navigate(['home','orders']))
    //     : this.stockService.orderStockMarketSell(pending).subscribe(()=>{},()=>{},()=>this.router.navigate(['home','orders']))
    //   })
    // }
    totalPandL() { }
    savePending(pending) { }
};
OrderService.ctorParameters = () => [
    { type: _stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "lNYK":
/*!*******************************************************************************!*\
  !*** ./src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BuySellModalPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySellModalPopupComponent", function() { return BuySellModalPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buy_sell_modal_popup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buy-sell-modal-popup.component.html */ "x8NZ");
/* harmony import */ var _buy_sell_modal_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buy-sell-modal-popup.component.scss */ "OtLC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/stock.service */ "8hSh");







let BuySellModalPopupComponent = class BuySellModalPopupComponent {
    constructor(modalCtrl, stockService, router) {
        this.modalCtrl = modalCtrl;
        this.stockService = stockService;
        this.router = router;
    }
    ngOnInit() {
        this.stockService.listen(`${this.selectedStock.id}-${this.selectedWatchlistId}`).subscribe((res) => {
            this.selectedStock.ltp = res[0].close;
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    onClick(isBuy) {
        this.modalCtrl.dismiss();
        this.router.navigate(["home", "watchlist", "buy-sell", this.selectedStock.id, this.selectedWatchlistId], { queryParams: { isBuy } });
    }
    navigateToChart() {
        this.modalCtrl.dismiss();
        this.router.navigate(["chart", this.selectedStock.id, this.selectedWatchlistId]);
    }
};
BuySellModalPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BuySellModalPopupComponent.propDecorators = {
    selectedStock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["selectedStock",] }],
    selectedWatchlistId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["selectedWatchlistId",] }]
};
BuySellModalPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-buy-sell-modal-popup",
        template: _raw_loader_buy_sell_modal_popup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buy_sell_modal_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BuySellModalPopupComponent);



/***/ }),

/***/ "nJHT":
/*!*******************************************************************!*\
  !*** ./src/app/modals/modal-fp-email/modal-fp-email.component.ts ***!
  \*******************************************************************/
/*! exports provided: ModalFpEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFpEmailComponent", function() { return ModalFpEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_fp_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-fp-email.component.html */ "K/jU");
/* harmony import */ var _modal_fp_email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-fp-email.component.scss */ "Kmqd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _modal_fp_code_check_modal_fp_code_check_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-fp-code-check/modal-fp-code-check.component */ "bzO4");







let ModalFpEmailComponent = class ModalFpEmailComponent {
    constructor(modalCtrl, userService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.spinner = false;
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    emailCheck(email) {
        this.spinner = true;
        if (email != '') {
            if (this.checkIfEmailInString(email)) {
                this.userService.emailExists(this.email).subscribe((r) => {
                    this.spinner = false;
                    this.dismissModal();
                    this.openCodeCheckModal(email);
                }, () => {
                    this.spinner = false;
                    this.presentErrorToast('Email does not exist.');
                });
            }
            else {
                this.spinner = false;
                this.presentErrorToast('Enter your email in the correct format.');
            }
        }
        else {
            this.spinner = false;
            this.presentErrorToast('Enter your email.');
        }
    }
    openCodeCheckModal(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_fp_code_check_modal_fp_code_check_component__WEBPACK_IMPORTED_MODULE_6__["ModalFpCodeCheckComponent"],
                componentProps: { email },
            });
            return yield modal.present();
        });
    }
    checkIfEmailInString(text) {
        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        return re.test(text);
    }
    presentErrorToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2500,
                color: "danger",
            });
            yield toast.present();
        });
    }
};
ModalFpEmailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ModalFpEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-fp-email",
        template: _raw_loader_modal_fp_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_fp_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalFpEmailComponent);



/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let UserService = class UserService {
    constructor(http, storage, platform) {
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "auth/";
        this.apiSettingsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "settings/";
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.authenticated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.isOnLoginOrSignUpPage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.platform.ready().then(() => {
            this.checkToken();
        });
    }
    decodeToken(token) {
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.decodedToken = helper.decodeToken(token);
    }
    logIn(input) {
        return this.http.post(this.apiUrl + "login", input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((res) => {
            const user = {
                email: res.user.email,
                username: res.user.username,
                balance: {
                    availableBal: 0,
                    openBal: 0,
                },
            };
            this.authenticate(user, res.jwt);
            this.decodedToken = this.decodeToken(res.jwt);
            this.checkToken();
        }));
    }
    signUp(input) {
        return this.http.post(this.apiUrl + "signup", input);
    }
    googleAuth(idToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = {
                email: idToken.email,
                username: idToken.name,
                balance: {
                    availableBal: 0,
                    openBal: 0,
                },
            };
            this.authenticate(user, idToken.authentication.idToken);
            console.log({ user, idToken: idToken.authentication.idToken });
            this.decodedToken = this.decodeToken(idToken.authentication.idToken);
            this.checkToken();
        });
    }
    getFundsChart() {
        return this.http.get(this.apiSettingsUrl + "funds/records");
    }
    getLeaderboard() {
        return this.http.get(this.apiUrl + "leaderboard");
    }
    accountDetails() {
        return this.http.get(this.apiUrl + "account");
    }
    changePassword(email, password) {
        return this.http.post(this.apiUrl + "password/change", { email, password });
    }
    emailExists(email) {
        return this.http.post(this.apiUrl + "password/reset/emailcheck", { email });
    }
    checkCodeValid(email, code) {
        return this.http.post(this.apiUrl + "password/code/check", { email, code });
    }
    getSettings() {
        return this.http.get(this.apiSettingsUrl);
    }
    updateSettings(id, datatype, risk, leverage) {
        return this.http.put(this.apiSettingsUrl, { id, datatype, risk, leverage: +leverage });
    }
    authenticate(user, token) {
        return this.storage.set("token", { user, token }).then((r) => {
            localStorage.setItem("token", token);
            this.authenticated.next({ user, token });
        });
    }
    getUserFromToken() {
        let user;
        this.storage.get("token").then((r) => {
            if (r)
                user = r.user;
        });
        return user;
    }
    checkToken() {
        return this.storage.get("token").then((r) => {
            if (r) {
                this.authenticated.next(r);
                this.user.next(r.user);
            }
        });
    }
    logout() {
        this.user.next(null);
        localStorage.removeItem("token");
        return this.storage.remove("token").then((r) => this.authenticated.next(false));
    }
    add(amount) {
        this.user.subscribe((u) => {
            u.balance.openBal += amount;
            u.balance.availableBal += amount;
        });
    }
    withdraw(amount) {
        this.user.subscribe((u) => {
            if (u.balance.openBal - amount >= 0)
                u.balance.openBal -= amount;
            if (u.balance.availableBal - amount >= 0)
                u.balance.availableBal -= amount;
        });
    }
    checkIfIsOnLoginOrSignUpPage(link) {
        link.includes("login") || link.includes("sign-up") ? this.isOnLoginOrSignUpPage.next(true) : this.isOnLoginOrSignUpPage.next(false);
    }
    getPlatformOfUser() {
        if (this.platform.is("ios"))
            return { ios: true };
        if (this.platform.is("android"))
            return { android: true };
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], UserService);



/***/ }),

/***/ "rdK+":
/*!*********************************************************************************!*\
  !*** ./src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModalEditWatchlistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditWatchlistsComponent", function() { return ModalEditWatchlistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_edit_watchlists_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-edit-watchlists.component.html */ "8tei");
/* harmony import */ var _modal_edit_watchlists_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-edit-watchlists.component.scss */ "Ey9a");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/watchlist.service */ "Tl0h");








let ModalEditWatchlistsComponent = class ModalEditWatchlistsComponent {
    constructor(modalCtrl, watchlistService, userService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.watchlistService = watchlistService;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.watchlists = [];
    }
    ngOnInit() {
        this.spinner = false;
        this.dataLoaded = false;
        this.getWatchlists();
    }
    getWatchlists() {
        this.userService.getSettings().subscribe((r) => {
            const datatype = r.data.datatype;
            if (datatype == "simulated")
                this.watchlistService.getSimulatedWatchlists().subscribe((r) => {
                    console.log("simulated", r);
                    this.dataLoaded = true;
                });
            if (datatype == "realtime")
                this.watchlistService.getRealtimeWatchlists().subscribe((r) => {
                    console.log("realtime", r);
                    this.watchlists = r.data;
                    this.dataLoaded = true;
                });
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss(this.changeInWatchlist);
    }
    onCreateWatchlist() {
        var _a;
        if (((_a = this.watchlistName) === null || _a === void 0 ? void 0 : _a.trim()) != "" && this.watchlistName != null && this.watchlistName != undefined) {
            this.spinner = true;
            this.watchlistName = this.watchlistName.trim();
            this.watchlistService.createWatchlist(this.watchlistName).subscribe(() => {
                this.changeInWatchlist = true;
                this.spinner = false;
                this.presentSuccessToast(`"${this.watchlistName}" was successfuly created.`);
                this.watchlistName = "";
                this.getWatchlists();
            });
        }
        else
            this.presentErrorToast("Input field is empty.");
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.watchlists, event.previousIndex, event.currentIndex);
        this.changePosition();
    }
    changePosition() {
        const positions = [];
        for (let i = 0; i < this.watchlists.length; i++) {
            const w = this.watchlists[i];
            positions.push({ watchlistId: w._id, position: i });
        }
        this.watchlistService.updateWatchlistPositions(positions).subscribe(() => (this.changeInWatchlist = true));
    }
    presentErrorToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2500,
                color: "danger",
            });
            yield toast.present();
        });
    }
    presentSuccessToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2500,
                color: "success",
            });
            yield toast.present();
        });
    }
};
ModalEditWatchlistsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__["WatchlistService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
ModalEditWatchlistsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-modal-edit-watchlists",
        template: _raw_loader_modal_edit_watchlists_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_edit_watchlists_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalEditWatchlistsComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth-guard.guard */ "1eeg");




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'chart/:sId/:wId',
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-chart-chart-module */ "pages-chart-chart-module").then(__webpack_require__.bind(null, /*! ./pages/chart/chart.module */ "ThXp")).then(m => m.ChartPageModule)
    },
    {
        path: '',
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        redirectTo: 'home/dashboard',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "whIa":
/*!***************************************************************************************!*\
  !*** ./src/app/modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ModalWithdrawAddFundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWithdrawAddFundsComponent", function() { return ModalWithdrawAddFundsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_withdraw_add_funds_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-withdraw-add-funds.component.html */ "976h");
/* harmony import */ var _modal_withdraw_add_funds_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-withdraw-add-funds.component.scss */ "3waL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");






let ModalWithdrawAddFundsComponent = class ModalWithdrawAddFundsComponent {
    constructor(modalCtrl, userService) {
        this.modalCtrl = modalCtrl;
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.authenticated.subscribe(u => this.user = u.user);
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    submitFundsRequest(input) {
        this.isAdd
            ? this.userService.add(input.amount)
            : this.userService.withdraw(input.amount);
        this.dismissModal();
    }
};
ModalWithdrawAddFundsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
ModalWithdrawAddFundsComponent.propDecorators = {
    isAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['isAdd',] }]
};
ModalWithdrawAddFundsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-withdraw-add-funds',
        template: _raw_loader_modal_withdraw_add_funds_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_withdraw_add_funds_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalWithdrawAddFundsComponent);



/***/ }),

/***/ "x7KT":
/*!*************************************************************************!*\
  !*** ./src/app/modals/modal-upload-post/modal-upload-post.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModalUploadPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUploadPostComponent", function() { return ModalUploadPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_upload_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-upload-post.component.html */ "ck4M");
/* harmony import */ var _modal_upload_post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-upload-post.component.scss */ "8E9K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/marubozu.service */ "BCkd");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");







const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
const STORAGE_KEY = "assets";
let ModalUploadPostComponent = class ModalUploadPostComponent {
    constructor(api, plt, actionSheetCtrl, modalCtrl, toastCtrl) {
        this.api = api;
        this.plt = plt;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.intraDay = false;
        this.positional = false;
        this.blog = false;
        this.demoTrading = false;
        this.images = [];
    }
    ngOnInit() {
        this.spinner = false;
    }
    dismissModal(val) {
        this.modalCtrl.dismiss(val);
    }
    selectImageSource() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: "Select a Photo",
                    icon: "image",
                    handler: () => {
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Photos);
                    },
                },
            ];
            if (!this.plt.is("hybrid")) {
                buttons.push({
                    text: "Choose a File",
                    icon: "attach",
                    handler: () => {
                        this.fileInput.nativeElement.click();
                    },
                });
            }
            buttons.push({
                text: "Close",
                icon: "close",
                handler: () => { },
            });
            const actionSheet = yield this.actionSheetCtrl.create({
                header: "Select Image Source",
                buttons,
            });
            yield actionSheet.present();
        });
    }
    addImage(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.images.length == 0) {
                const image = yield Camera.getPhoto({
                    quality: 60,
                    allowEditing: true,
                    resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Base64,
                    source,
                });
                const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
                const img = URL.createObjectURL(blobData);
                this.images.push({ blobData, name: "img", format: image.format, url: img });
                console.log(this.images);
            }
        });
    }
    uploadFile(postForm) {
        let image = this.images[0];
        if (postForm.valid) {
            this.spinner = true;
            const title = postForm.value.title;
            const content = postForm.value.content;
            const stockName = postForm.value.stockname;
            let key = "";
            if (this.intraDay == true)
                key = "intraday";
            else if (this.positional == true)
                key = "positional";
            else if (this.demoTrading == true)
                key = "demotrading";
            else if (this.blog == true)
                key = "blog";
            if (image == undefined || image == null) {
                this.api.createWithBlob(title, content, stockName, key).subscribe(() => {
                    this.dismissModal(true);
                    this.spinner = false;
                }, () => {
                    this.presentErrorToast('Something went wrong.');
                    this.spinner = false;
                });
            }
            else {
                this.api.createWithBlob(title, content, stockName, key, image.blobData, image.name, image.format).subscribe(() => {
                    this.dismissModal(true);
                    this.spinner = false;
                }, () => {
                    this.presentErrorToast('Something went wrong.');
                    this.spinner = false;
                });
            }
        }
        else
            this.presentErrorToast('Something is missing.');
    }
    deleteImage(index) {
        this.images.splice(index, 1);
    }
    b64toBlob(b64Data, contentType = "", sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    presentErrorToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: message,
                color: 'danger',
                duration: 2500
            });
            yield toast.present();
        });
    }
};
ModalUploadPostComponent.ctorParameters = () => [
    { type: src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_5__["MarubozuService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ModalUploadPostComponent.propDecorators = {
    intraDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    positional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    blog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    demoTrading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["fileInput", { static: false },] }]
};
ModalUploadPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-upload-post",
        template: _raw_loader_modal_upload_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_upload_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalUploadPostComponent);



/***/ }),

/***/ "x8NZ":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-title slot=\"start\"> {{ selectedStock.name }} - position </ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\">\n\t<div class=\"wrap\">\n\t\t<ion-text class=\"position-title\">Position 1</ion-text>\n\t\t<ion-list>\n\t\t\t<ion-card class=\"position-card\" mode=\"ios\">\n\t\t\t\t<ion-card-content>\n\t\t\t\t\t<div class=\"information\">\n\t\t\t\t\t\t<ion-text class=\"stockname\">{{ selectedStock.name }}</ion-text>\n\t\t\t\t\t\t<ion-text class=\"price\">{{ selectedStock.ltp }}</ion-text>\n\t\t\t\t\t\t<ion-text class=\"percentage\" *ngIf=\"+selectedStock.ltp - +selectedStock.ldp >= 0\">\n\t\t\t\t\t\t\t+{{ +selectedStock.ltp - +selectedStock.ldp | number: \"1.1-2\" }} (+{{ (+selectedStock.ltp - +selectedStock.ldp) / +selectedStock.ldp | percent: \"1.1-2\" }})\n\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t<ion-text class=\"percentage\" *ngIf=\"+selectedStock.ltp - +selectedStock.ldp < 0\">\n\t\t\t\t\t\t\t-{{ +selectedStock.ltp - +selectedStock.ldp | number: \"1.1-2\" }} (-{{ (+selectedStock.ltp - +selectedStock.ldp) / +selectedStock.ldp | percent: \"1.1-2\" }})\n\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t<button class=\"buy-btn\" (click)=\"onClick(true)\">Buy</button>\n\t\t\t\t\t\t<button class=\"sell-btn\" (click)=\"onClick(false)\">Sell</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-list>\n\t\t<ion-button (click)=\"navigateToChart()\" color=\"tertiary\" size=\"small\" expand=\"block\" fill=\"clear\" class=\"ion-margin-end ion-float-left\"> View chart </ion-button>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "y2a+":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-change-password/modal-change-password.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<ion-icon name=\"arrow-back-outline\" (click)=\"dismissModal()\"></ion-icon>\n\t<div class=\"wrap\">\n\t\t<form #changePasswordForm=\"ngForm\" (ngSubmit)=\"changePassword(changePasswordForm.value)\" class=\"ion-padding-horizontal ion-text-center\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row class=\"title\">\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<ion-label>Change password</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"New password\" type=\"password\" required ngModel name=\"newPassword\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<ion-input placeholder=\"Confirm password\" type=\"password\" required ngModel name=\"confirmPassword\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<button class=\"change-password button\" expand=\"block\" type=\"submit\">\n\t\t\t\t\tSubmit\n\t\t\t\t\t<ion-spinner name=\"lines-small\" color=\"light\" *ngIf=\"spinner\"></ion-spinner>\n\t\t\t\t</button>\n\t\t\t\t<button class=\"cancel button\" expand=\"block\" type=\"submit\" (click)=\"dismissModal()\">\n\t\t\t\t\tCancel\n\t\t\t\t</button>\n\t\t\t</ion-grid>\n\t\t</form>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".splash-wrap {\n  background-color: #fafdfc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.splash-wrap .splash-screen {\n  background-color: #fafdfc;\n  width: 90%;\n  height: 70 .splash-wrap .splash-screen;\n  -webkit-animation: pulse 1s linear forwards;\n          animation: pulse 1s linear forwards;\n}\n.custom-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100000;\n  width: 100%;\n  background-color: white;\n}\n.flb {\n  background-color: #3ebffb;\n  height: 100%;\n  width: 100%;\n  -webkit-animation: pulse 1s linear forwards;\n          animation: pulse 1s linear forwards;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.aligner-item {\n  max-width: 50%;\n}\n.aligner-item--top {\n  align-self: flex-start;\n}\n.aligner-item--bottom {\n  align-self: flex-end;\n}\n.custom-overlay img {\n  display: block;\n  margin: 0 auto;\n  width: 50%;\n  height: auto;\n  -webkit-animation: animation 3100ms linear infinite both;\n          animation: animation 3100ms linear infinite both;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n@-webkit-keyframes pulse {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes pulse {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nion-icon {\n  font-size: 16px;\n}\n@media screen and (max-width: 360px) {\n  h1,\nh2 {\n    font-size: 17px;\n    padding: 0;\n    margin: 0;\n  }\n\n  ion-title {\n    font-size: 14px !important;\n  }\n\n  ion-text,\nh4 {\n    font-size: 16px !important;\n  }\n\n  ion-label,\nion-text,\np,\nh5,\nh3,\nion-button,\nspan,\nion-select,\nion-select-option {\n    font-size: 12px !important;\n  }\n\n  ion-button {\n    width: 100%;\n    height: 40px;\n    font-size: 13px !important;\n  }\n\n  .link-button {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    font-size: 12px !important;\n  }\n\n  .route-label {\n    font-size: 10px !important;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREY7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQURKO0FBS0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0FBRkY7QUFLQTtFQUNFLHNCQUFBO0FBRkY7QUFLQTtFQUNFLG9CQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtVQUFBLGdEQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQUZGO0FBS0E7RUFDRTtJQUNFLFVBQUE7RUFGRjtFQUtBO0lBQ0UsVUFBQTtFQUhGO0FBQ0Y7QUFKQTtFQUNFO0lBQ0UsVUFBQTtFQUZGO0VBS0E7SUFDRSxVQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0UsZUFBQTtBQUpGO0FBT0E7RUFFRTs7SUFFRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFMRjs7RUFRQTtJQUNFLDBCQUFBO0VBTEY7O0VBUUE7O0lBRUUsMEJBQUE7RUFMRjs7RUFRQTs7Ozs7Ozs7O0lBU0UsMEJBQUE7RUFMRjs7RUFRQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7RUFMRjs7RUFRQTtJQUNFLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLDBCQUFBO0VBTEY7O0VBUUE7SUFDRSwwQkFBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFO0lBQ0UsWUFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnNwbGFzaC13cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MywgMjUyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnNwbGFzaC1zY3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTMsIDI1Mik7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDcwJjtcbiAgICBhbmltYXRpb246IHB1bHNlIDFzIGxpbmVhciBmb3J3YXJkcztcbiAgfVxufVxuXG4uY3VzdG9tLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mbGIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ViZmZiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IHB1bHNlIDFzIGxpbmVhciBmb3J3YXJkcztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hbGlnbmVyLWl0ZW0ge1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmFsaWduZXItaXRlbS0tdG9wIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmFsaWduZXItaXRlbS0tYm90dG9tIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5jdXN0b20tb3ZlcmxheSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYW5pbWF0aW9uOiBhbmltYXRpb24gMzEwMG1zIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuXG4gIGgxLFxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi10ZXh0LFxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tbGFiZWwsXG4gIGlvbi10ZXh0LFxuICBwLFxuICBoNSxcbiAgaDMsXG4gIGlvbi1idXR0b24sXG4gIHNwYW4sXG4gIGlvbi1zZWxlY3QsXG4gIGlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5saW5rLWJ1dHRvbiB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJvdXRlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");






Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__["defineCustomElements"])(window);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map