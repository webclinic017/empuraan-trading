(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-watchlist-buy-sell-buy-sell-module~pages-watchlist-watchlist-module"],{

/***/ "O+E9":
/*!*************************************************************!*\
  !*** ./src/app/pages/watchlist/buy-sell/buy-sell.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap\");\nbody {\n  font-family: Roboto;\n}\nion-card-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\nion-card-title {\n  font-size: 15px;\n}\nion-card-subtitle {\n  margin-top: 0;\n  font-size: 14px;\n  color: #ababab;\n}\n.card-input {\n  border: 1px solid rgba(184, 184, 184, 0.69);\n  color: black;\n  padding: 11px 0;\n  font-size: 18px;\n}\n.bs-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.radios {\n  list-style-type: none;\n  margin: 25px 0 0 0;\n  padding: 0;\n}\n.bs-radio-group h5 {\n  margin: 0 5px;\n}\nul {\n  margin: 0 !important;\n}\n.radios li {\n  float: right;\n  text-align: center;\n  width: 90px;\n  height: 30px;\n  position: relative;\n}\n.radios label, .radios input[type=radio] {\n  display: block;\n  position: absolute;\n  margin-left: 10px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.radios input[type=radio] {\n  opacity: 0.011;\n  z-index: 100;\n  margin-left: 10px;\n}\n.radios input[type=radio]:checked + label {\n  border: 1px solid rgba(255, 255, 255, 0);\n  border-radius: 5px;\n  margin-left: 10px;\n  color: white;\n}\n.radios input[type=radio].red:checked + label {\n  background-color: #EB455A;\n}\n.radios input[type=radio].blue:checked + label {\n  background-color: #5360fc;\n}\n.radios label {\n  padding: 5px !important;\n  border-radius: 5px;\n  border: 1px solid #CCC;\n  font-size: 14px;\n  z-index: 90;\n}\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.footer-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\nion-button.footer-button {\n  width: 100%;\n}\n.disabled-input {\n  background-color: #dedede;\n  color: #353535;\n}\n@media (prefers-color-scheme: dark) {\n  ion-input {\n    color: white;\n  }\n\n  .disabled-input {\n    background-color: #484848;\n    color: #bdbdbd;\n  }\n\n  ion-title {\n    color: white;\n  }\n}\n@media screen and (max-width: 360px) {\n  ion-title, ion-card-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-card-subtitle, ion-select-option, ion-select, p, h5 {\n    font-size: 13px !important;\n  }\n\n  .radios label {\n    padding: 5px !important;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2F0Y2hsaXN0L2J1eS1zZWxsL2J1eS1zZWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3RkFBQTtBQUNSO0VBQ0ksbUJBQUE7QUFDSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUE7RUFDSSxlQUFBO0FBR0o7QUFEQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUlKO0FBRkE7RUFDSSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUtKO0FBSEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTUo7QUFKQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBT0o7QUFMQTtFQUNJLGFBQUE7QUFRSjtBQU5BO0VBQ0ksb0JBQUE7QUFTSjtBQVBBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFXSjtBQVRBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVlKO0FBVkE7RUFDSSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBYUo7QUFYQTtFQUNJLHlCQUFBO0FBY0o7QUFaQTtFQUNJLHlCQUFBO0FBZUo7QUFiQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBZ0JKO0FBWEE7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQWNKO0FBWkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWVKO0FBYkE7RUFDSSxXQUFBO0FBZ0JKO0FBZEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFpQko7QUFmQTtFQUNJO0lBQ0ksWUFBQTtFQWtCTjs7RUFmRTtJQUNJLHlCQUFBO0lBQ0EsY0FBQTtFQWtCTjs7RUFoQkU7SUFDSSxZQUFBO0VBbUJOO0FBQ0Y7QUFqQkE7RUFDSTtJQUNFLDBCQUFBO0VBbUJKOztFQWpCRTtJQUNFLDBCQUFBO0VBb0JKOztFQWxCRTtJQUNJLHVCQUFBO0lBQ0EsZUFBQTtFQXFCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2F0Y2hsaXN0L2J1eS1zZWxsL2J1eS1zZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5pb24tY2FyZC1oZWFkZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGNvbG9yOiNhYmFiYWI7XG59XG4uY2FyZC1pbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg0LCAxODQsIDE4NCwgMC42OSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDExcHggMDtcbiAgICBmb250LXNpemU6MThweDtcbn1cbi5icy1yYWRpby1ncm91cHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yYWRpb3N7XG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgbWFyZ2luOjI1cHggMCAwIDA7XG4gICAgcGFkZGluZzowO1xufVxuLmJzLXJhZGlvLWdyb3VwIGg1e1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG51bHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5yYWRpb3MgbGkge1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDo5MHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLnJhZGlvcyBsYWJlbCwgLnJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgYm90dG9tOjA7XG59XG4ucmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcbiAgICBvcGFjaXR5OjAuMDExO1xuICAgIHotaW5kZXg6MTAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdLnJlZDpjaGVja2VkICsgbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQjQ1NUE7XG59XG4ucmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXS5ibHVlOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTM2MGZjO1xufVxuLnJhZGlvcyBsYWJlbCB7ICAgIFxuICAgIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI0NDQzsgXG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgei1pbmRleDo5MDtcbn1cbi8vIC5yYWRpb3MgbGFiZWw6aG92ZXIge1xuLy8gICAgIGJhY2tncm91bmQ6I0RERDtcbi8vIH1cbmhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjcsIDE2NywgMTY3LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLmZvb3Rlci1idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWJ1dHRvbi5mb290ZXItYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRpc2FibGVkLWlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2RlZGVkZTtcbiAgICBjb2xvcjogIzM1MzUzNTtcbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZGlzYWJsZWQtaW5wdXR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzQ4NDg0ODtcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgfVxuICAgIGlvbi10aXRsZXtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICBpb24tdGl0bGUsIGlvbi1jYXJkLXRpdGxle1xuICAgICAgZm9udC1zaXplOjE1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCBpb24tY2FyZC1zdWJ0aXRsZSwgaW9uLXNlbGVjdC1vcHRpb24sIGlvbi1zZWxlY3QsIHAsIGg1e1xuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yYWRpb3MgbGFiZWwgeyAgICBcbiAgICAgICAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "aY2Y":
/*!***********************************************************!*\
  !*** ./src/app/pages/watchlist/buy-sell/buy-sell.page.ts ***!
  \***********************************************************/
/*! exports provided: BuySellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySellPage", function() { return BuySellPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buy_sell_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buy-sell.page.html */ "fj9w");
/* harmony import */ var _buy_sell_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buy-sell.page.scss */ "O+E9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/order.service */ "kVqo");
/* harmony import */ var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/watchlist.service */ "Tl0h");







let BuySellPage = class BuySellPage {
    constructor(route, watchlistService, orderService, router) {
        this.route = route;
        this.watchlistService = watchlistService;
        this.orderService = orderService;
        this.router = router;
    }
    ngOnInit() {
        this.availableBalance = 100000;
        this.approxMargin = 2167;
        this.capitalAtRisk = this.approxMargin / this.availableBalance;
        this.route.queryParams.subscribe(data => {
            data.isBuy == 'true' ? this.isBuy = true : this.isBuy = false;
        });
        this.route.params.subscribe(data => this.company = this.watchlistService.getCompany(data["id"]));
    }
    navigateToWatchlist() {
        this.router.navigate(['home', 'watchlist']);
    }
    changeType(event) {
        event.detail.value == 'true' ? this.isBuy = true : this.isBuy = false;
    }
    onSubmit() {
        const quantity = this.buySellForm.value.quantity;
        const price = this.buySellForm.value.price;
        const order = this.buySellForm.value.order;
        const stopLoss = this.buySellForm.value.stopLoss;
        const target = this.buySellForm.value.target;
        if (quantity != '' && order != '' && price != '' && quantity > 0) {
            if (order != 'market' && price > 0) {
                console.log({ formVal: this.buySellForm.value });
                this.orderService.buy(this.company.id, quantity, stopLoss, target, order, price);
                this.router.navigate(['home', 'orders'], { queryParams: { selectTab: 2 } });
            }
            else {
                console.log({ formVal: this.buySellForm.value });
                this.orderService.buy(this.company.id, quantity, stopLoss, target, order);
                this.router.navigate(['home', 'orders'], { queryParams: { selectTab: 2 } });
            }
        }
        else
            alert('err');
    }
};
BuySellPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__["WatchlistService"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BuySellPage.propDecorators = {
    buySellForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['buySellForm',] }]
};
BuySellPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buy-sell',
        template: _raw_loader_buy_sell_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buy_sell_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BuySellPage);



/***/ }),

/***/ "fj9w":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/watchlist/buy-sell/buy-sell.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button [defaultHref]=\"['home','watchlist']\" (click)=\"navigateToWatchlist()\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{company.name}}</ion-title>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-select ok-text=\"Okay\" cancel-text=\"Cancel\" value=\"{{isBuy ? 'true' : 'false'}}\" (ionChange)=\"changeType($event)\">\n\t\t\t\t\t<ion-select-option value=\"true\">Buy</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"false\">Sale</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<form #buySellForm=\"ngForm\" id=\"buySellForm\">\n\t\t<ion-card>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t<ion-card-title>Quantity</ion-card-title>\n\t\t\t\t\t\t\t<ion-card-subtitle>Lot: 1</ion-card-subtitle>\n\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<ion-input type=\"number\" class=\"card-input\" name=\"quantity\" ngModel required min=0></ion-input>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t<ion-card-title>Price</ion-card-title>\n\t\t\t\t\t\t\t<ion-card-subtitle>Tick: 0.05</ion-card-subtitle>\n\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tclass=\"card-input\"\n\t\t\t\t\t\t\t\tname=\"price\"\n\t\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled-input':marketRadio.checked}\"\n\t\t\t\t\t\t\t\t[required]=\"!marketRadio.checked\"\n\t\t\t\t\t\t\t\t[disabled]=\"marketRadio.checked\"\n\t\t\t\t\t\t\t\tmin=0\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-card>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=6>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t  <ion-label position=\"floating\">Stop-loss</ion-label>\n\t\t\t\t\t  <ion-input type=\"number\" name=\"stopLoss\" ngModel required></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=6>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t  <ion-label position=\"floating\">Target</ion-label>\n\t\t\t\t\t  <ion-input type=\"number\" name=\"target\" ngModel required></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<hr>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"bs-radio-group\">\n\t\t\t\t\t<ion-text><h5>Order</h5></ion-text>\n\t\t\t\t\t<ul class=\"radios\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t#marketRadio\n\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\tvalue=\"market\"\n\t\t\t\t\t\t\t\tid=\"radio-market\"\n\t\t\t\t\t\t\t\tname=\"order\"\n\t\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\t\t[ngClass]=\"{'red':!isBuy,'blue':isBuy}\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<label for=\"radio-market\">MARKET</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\tvalue=\"limit\"\n\t\t\t\t\t\t\t\tid=\"radio-limit\"\n\t\t\t\t\t\t\t\tname=\"order\"\n\t\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\t\t[ngClass]=\"{'red':!isBuy,'blue':isBuy}\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<label for=\"radio-limit\">LIMIT</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<hr />\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=6 class=\"ion-text-left\">\n\t\t\t\t\t<ion-text><p>Approx. Margin:</p></ion-text>\n\t\t\t\t\t<ion-text><p>Available Balance:</p></ion-text>\n\t\t\t\t\t<ion-text><p>Capital at Risk:</p></ion-text>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=6 class=\"ion-text-right\">\n\t\t\t\t\t<ion-text><p>{{approxMargin}}</p></ion-text>\n\t\t\t\t\t<ion-text><p>{{availableBalance}}</p></ion-text>\n\t\t\t\t\t<ion-text><p>{{capitalAtRisk | percent:'1.1'}}</p></ion-text>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</form>\n</ion-content>\n<ion-footer>\n\t<ion-toolbar>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"footer\" *ngIf=\"isBuy\">\n\t\t\t\t\t<ion-button class=\"footer-button\" size=\"medium\" color=\"tertiary\" form=\"buySellForm\" (click)=\"onSubmit()\">\n\t\t\t\t\t\tConfirm buy\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"footer\" *ngIf=\"!isBuy\">\n\t\t\t\t\t<ion-button class=\"footer-button\" size=\"medium\" color=\"danger\" form=\"buySellForm\" (click)=\"onSubmit()\">\n\t\t\t\t\t\tConfirm sale\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default~pages-watchlist-buy-sell-buy-sell-module~pages-watchlist-watchlist-module-es2015.js.map