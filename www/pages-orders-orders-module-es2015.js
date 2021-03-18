(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"],{

/***/ "8veL":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "Ep+G");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "Ep+G":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.page.html */ "iVDW");
/* harmony import */ var _orders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.page.scss */ "F6Pd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order.service */ "kVqo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/modal-edit-order/modal-edit-order.component */ "LX2U");
/* harmony import */ var src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/stock.service */ "8hSh");








let OrdersPage = class OrdersPage {
    constructor(orderService, modalCtrl, actionSheetController, stockService) {
        this.orderService = orderService;
        this.modalCtrl = modalCtrl;
        this.actionSheetController = actionSheetController;
        this.stockService = stockService;
        this.position = [];
        this.completed = [];
        this.pending = [];
        this.tempPosition = [];
        this.tempCompleted = [];
        this.tempPending = [];
        this.subscribedPositionSockets = [];
        this.subscribedPendingSockets = [];
    }
    ngOnInit() {
        this.pageIndex = 0;
        this.dataLoaded = false;
    }
    ionViewDidEnter() {
        this.spinner = true;
        this.getOrders();
    }
    getOrders(spinner) {
        this.tempPending = [];
        this.tempPosition = [];
        this.tempCompleted = [];
        if (spinner == true)
            this.spinner = true;
        this.orderService.getAllUserOrders().subscribe((res) => {
            res.data.forEach((o) => {
                const order = {
                    id: o._id,
                    stockId: o.stockId,
                    orderCategory: o.orderCategory,
                    watchlistId: o.watchlistId,
                    name: o.companyName,
                    price: o.price,
                    quantity: o.volume,
                    isDeleted: o.isDeleted,
                    stoploss: o.stoploss,
                    target: o.target,
                    createdDate: o.created_date,
                };
                this.orderPlacement(o.transactionOne.status, order, o.transactionOne.price);
                this.orderPlacement(o.transactionTwo.stoplossStatus, order, o.stoploss, "stoploss", o.orderCategory);
                this.orderPlacement(o.transactionTwo.targetStatus, order, o.target, "target", o.orderCategory);
                if (o.status == "positioned" && o.transactionOne.status == "completed") {
                    var date = new Date(order.createdDate);
                    date.setDate(date.getDate() + 1);
                    var today = new Date();
                    if (date > today) {
                        order.stoploss = o.stoploss;
                        order.target = o.target;
                        this.tempPosition.unshift(Object.assign({}, order));
                    }
                }
                else if (o.status == "completed" && o.transactionTwo.stoplossStatus == "notFilled" && o.transactionTwo.targetStatus == "notFilled") {
                    var date = new Date(order.createdDate);
                    date.setDate(date.getDate() + 1);
                    var today = new Date();
                    if (date > today) {
                        const o = Object.assign({}, order);
                        o["status"] = "completed";
                        o.orderCategory = order.orderCategory == "buy" ? "sell" : "buy";
                        this.tempCompleted.unshift(o);
                    }
                }
            });
            this.updateLtp().finally(() => {
                this.pending = this.tempPending;
                this.position = this.tempPosition;
                this.completed = this.tempCompleted;
                console.log({ pos: this.position, pen: this.pending, com: this.completed });
                this.dataLoaded = true;
                this.spinner = false;
            });
            // this.totalPandL = this.orderService.totalPandL()
        });
    }
    orderPlacement(status, order, price, key, orderCategory) {
        price = "price";
        var date = new Date(order.createdDate);
        date.setDate(date.getDate() + 1);
        var today = new Date();
        const o = Object.assign({}, order);
        if (date > today) {
            switch (status) {
                case "completed":
                    if (orderCategory != null)
                        o.orderCategory = orderCategory == "buy" ? "sell" : "buy";
                    else
                        o.orderCategory = order.orderCategory;
                    o.price = order.price;
                    o["status"] = status;
                    this.tempCompleted.unshift(o);
                    break;
                case "pending":
                    if (orderCategory != null)
                        o.orderCategory = orderCategory == "buy" ? "sell" : "buy";
                    else
                        o.orderCategory = order.orderCategory;
                    key != null ? (o.key = key) : (o.key = "price");
                    key == "target" ? (o.target = order.target) : (o.stoploss = order.stoploss);
                    this.tempPending.unshift(o);
                    break;
                case "notFilled":
                    if (orderCategory != null)
                        o.orderCategory = orderCategory == "buy" ? "sell" : "buy";
                    else
                        o.orderCategory = order.orderCategory;
                    o.price = price;
                    o["status"] = "cancelled";
                    this.tempCompleted.unshift(o);
                    break;
                default:
                    break;
            }
        }
    }
    updateLtp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.unsubscribeFromSockets();
            this.tempPosition.forEach((s, i) => {
                let stockSub = this.stockService.listen(`${s.stockId}-${s.watchlistId}`).subscribe((res) => {
                    s.ltp = res[0].close;
                });
                this.subscribedPositionSockets.unshift(stockSub);
            });
            this.tempPending.forEach((s, i) => {
                let stockSub = this.stockService.listen(`${s.stockId}-${s.watchlistId}`).subscribe((res) => {
                    s.ltp = res[0].close;
                });
                this.subscribedPendingSockets.unshift(stockSub);
            });
        });
    }
    ordersActionSheet(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Order control panel",
                buttons: [
                    {
                        text: "Manage",
                        icon: "cog",
                        handler: () => {
                            if (this.pageIndex == 0)
                                this.openModalEditOrderPosition(order);
                            else if (this.pageIndex == 2)
                                this.openModalEditOrderPending(order);
                        },
                    },
                    {
                        text: "Cancel",
                        icon: "close",
                        role: "cancel",
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    openModalEditOrderPosition(position) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditOrderComponent"],
                componentProps: { position },
            });
            modal.onDidDismiss().then((d) => {
                if (d.data == true)
                    this.getOrders(true);
            });
            return yield modal.present();
        });
    }
    openModalEditOrderPending(pending) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditOrderComponent"],
                componentProps: { pending },
            });
            modal.onDidDismiss().then((d) => {
                if (d.data == true)
                    this.getOrders(true);
            });
            return yield modal.present();
        });
    }
    unsubscribeFromSockets() {
        this.subscribedPendingSockets.forEach((s) => {
            s.unsubscribe();
        });
        this.subscribedPendingSockets.splice(0, this.subscribedPendingSockets.length);
        this.subscribedPositionSockets.forEach((s) => {
            s.unsubscribe();
        });
        this.subscribedPositionSockets.splice(0, this.subscribedPositionSockets.length);
    }
    tabIndex(tab) {
        if (typeof tab == "number")
            this.pageIndex = tab;
        else
            this.pageIndex = tab.detail.index;
        this.updateLtp().finally(() => {
            this.pending = this.tempPending;
            this.position = this.tempPosition;
            this.completed = this.tempCompleted;
            this.dataLoaded = true;
            this.spinner = false;
        });
    }
    filterPosition(e) {
        this.filteredPosition = this.position.filter((p) => p.name.toLowerCase().includes(e.detail.value.toLowerCase()));
    }
    filterCompleted(e) {
        this.filteredCompleted = this.completed.filter((p) => p.name.toLowerCase().includes(e.detail.value.toLowerCase()));
    }
    filterPending(e) {
        this.filteredPending = this.pending.filter((p) => p.name.toLowerCase().includes(e.detail.value.toLowerCase()));
    }
    ionViewDidLeave() {
        this.unsubscribeFromSockets();
    }
    ngOnDestroy() {
        this.unsubscribeFromSockets();
    }
};
OrdersPage.ctorParameters = () => [
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_7__["StockService"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-orders",
        template: _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersPage);



/***/ }),

/***/ "F6Pd":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\nion-title {\n  color: black;\n}\n\n.skeleton-row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\nsuper-tab-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.success {\n  color: #7fd300;\n  font-weight: 500;\n}\n\n.failure {\n  color: #d20000;\n  font-weight: 500;\n}\n\ntable p {\n  padding-bottom: 0;\n  margin-bottom: 0%;\n  padding-left: 10px;\n}\n\n.column-centralise-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n}\n\nion-card ion-card-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-list ion-grid {\n  padding-right: 0;\n  padding: 5px 10px;\n}\n\nion-list ion-col {\n  padding-right: 0;\n}\n\nion-item .success {\n  color: #7fd300;\n  font-weight: 500;\n}\n\nion-item .failure {\n  color: #d20000;\n  font-weight: 500;\n}\n\nion-item p {\n  font-size: 13px;\n}\n\nion-item span {\n  color: #747474;\n}\n\nion-item .sell {\n  background-color: #ffa8a880;\n  color: #ff0000;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .buy {\n  background-color: #7474ff80;\n  color: #0008ff;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .cancelled {\n  background-color: #e3e3e380;\n  color: #4b4b4b;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .complete {\n  background-color: #4dff4d80;\n  color: #078f00;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .padding-hor {\n  padding: 0 7px;\n}\n\nion-item .padding-strt {\n  padding-left: 7px;\n}\n\n.order-item {\n  --border-color: #dd5650;\n  --inner-border-width: 0px 0px 10px 0px;\n}\n\n.order-item:first-child {\n  --inner-border-width: 10px 0px 10px 0px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n@media (prefers-color-scheme: dark) {\n  .logo {\n    height: 40px;\n    width: 40px;\n    padding-right: 10px;\n  }\n\n  ion-item span {\n    color: #949494;\n  }\n  ion-item .sell {\n    background-color: #ff747459;\n    color: #ffaaaa;\n  }\n  ion-item .buy {\n    background-color: #7474ff59;\n    color: #aaadff;\n  }\n  ion-item .cancelled {\n    background-color: #6a6a6a80;\n    color: #ffffff;\n  }\n  ion-item .complete {\n    background-color: #1fe41f80;\n    color: #4dff43;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 15px !important;\n  }\n\n  ion-label,\nh3,\np {\n    font-size: 13px !important;\n  }\n\n  ion-card-subtitle {\n    font-size: 13px !important;\n  }\n\n  ion-card-title {\n    font-size: 14px !important;\n  }\n\n  ion-searchbar {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBSko7O0FBUUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTFI7O0FBU0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQU5SOztBQVNJO0VBQ0ksZ0JBQUE7QUFQUjs7QUFZSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQVRSOztBQVlJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBVlI7O0FBYUk7RUFDSSxlQUFBO0FBWFI7O0FBY0k7RUFDSSxjQUFBO0FBWlI7O0FBZUk7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBYlI7O0FBZ0JJO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWRSOztBQWlCSTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFmUjs7QUFrQkk7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBaEJSOztBQW1CSTtFQUNJLGNBQUE7QUFqQlI7O0FBb0JJO0VBQ0ksaUJBQUE7QUFsQlI7O0FBc0JBO0VBQ0ksdUJBQUE7RUFDQSxzQ0FBQTtBQW5CSjs7QUFzQkE7RUFDSSx1Q0FBQTtBQW5CSjs7QUFzQkE7RUFDSSxrQkFBQTtBQW5CSjs7QUFxQkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFsQk47O0VBc0JNO0lBQ0ksY0FBQTtFQW5CVjtFQXNCTTtJQUNJLDJCQUFBO0lBQ0EsY0FBQTtFQXBCVjtFQXVCTTtJQUNJLDJCQUFBO0lBQ0EsY0FBQTtFQXJCVjtFQXdCTTtJQUNJLDJCQUFBO0lBQ0EsY0FBQTtFQXRCVjtFQXlCTTtJQUNJLDJCQUFBO0lBQ0EsY0FBQTtFQXZCVjtBQUNGOztBQTJCQTtFQUNJO0lBQ0ksMEJBQUE7RUF6Qk47O0VBNEJFOzs7SUFHSSwwQkFBQTtFQXpCTjs7RUE0QkU7SUFDSSwwQkFBQTtFQXpCTjs7RUE0QkU7SUFDSSwwQkFBQTtFQXpCTjs7RUE0QkU7SUFDSSwwQkFBQTtFQXpCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdXBlci10YWJzLXRvb2xiYXIge1xuLy8gICAgICY6YWZ0ZXIge1xuLy8gICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbi8vICAgICB9XG4vLyAgIH1cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5za2VsZXRvbi1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc3VwZXItdGFiLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWNjZXNzIHtcbiAgICBjb2xvcjogIzdmZDMwMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmFpbHVyZSB7XG4gICAgY29sb3I6ICNkMjAwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxudGFibGUgcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29sdW1uLWNlbnRyYWxpc2UtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuaW9uLWNhcmQge1xuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIH1cblxuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAgIC5zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6ICM3ZmQzMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmZhaWx1cmUge1xuICAgICAgICBjb2xvcjogI2QyMDAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzc0NzQ3NDtcbiAgICB9XG5cbiAgICAuc2VsbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE4YTg4MDtcbiAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmJ1eSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDc0ZmY4MDtcbiAgICAgICAgY29sb3I6ICMwMDA4ZmY7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmNhbmNlbGxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM4MDtcbiAgICAgICAgY29sb3I6ICM0YjRiNGI7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmNvbXBsZXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRkZmY0ZDgwO1xuICAgICAgICBjb2xvcjogIzA3OGYwMDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAucGFkZGluZy1ob3Ige1xuICAgICAgICBwYWRkaW5nOiAwIDdweDtcbiAgICB9XG5cbiAgICAucGFkZGluZy1zdHJ0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgfVxufVxuXG4ub3JkZXItaXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkZDU2NTA7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMTBweCAwcHg7XG59XG5cbi5vcmRlci1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMTBweCAwcHggMTBweCAwcHg7XG59XG5cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAubG9nbyB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzQ3NDU5O1xuICAgICAgICAgICAgY29sb3I6ICNmZmFhYWE7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDc0ZmY1OTtcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhZGZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhbmNlbGxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE2YTZhODA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wbGV0ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZlNDFmODA7XG4gICAgICAgICAgICBjb2xvcjogIzRkZmY0MztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwsXG4gICAgaDMsXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "Xlj8":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "8veL");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "Ep+G");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");








let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "iVDW":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<div style=\"display: flex; align-items: center; justify-content: center;\">\n\t\t\t\t<span>Orders</span>\n\t\t\t\t<ion-spinner name=\"lines-small\" class=\"ion-padding-start\" *ngIf=\"spinner && dataLoaded\"></ion-spinner>\n\t\t\t</div>\n\t\t</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\">\n\t<super-tabs *ngIf=\"!dataLoaded\">\n\t\t<super-tabs-toolbar slot=\"top\" color=\"translucent\">\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label>Position</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label>Completed</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label>Pending</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container>\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\"></ion-searchbar>\n\t\t\t\t<ion-card mode=\"ios\">\n\t\t\t\t\t<ion-list>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding order-item\" *ngFor=\"let item of [].constructor(5)\">\n\t\t\t\t\t\t\t<ion-grid class=\"ion-no-padding ion-padding-vertical\">\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-start\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"display: flex; flex-direction: row; justify-content: flex-start;\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span style=\"display: flex; flex-direction: row; justify-content: flex-start;\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 25%;margin-right: 10px;\">\n\t\t\t\t\t\t\t\t\t\t\t</ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span style=\"display: flex; flex-direction: row; justify-content: flex-start;\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 28%;margin-right: 10px;\">\n\t\t\t\t\t\t\t\t\t\t\t</ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 10%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-end\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"display: flex; flex-direction: row; justify-content: flex-end;\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%;margin-right: 10px;\">\n\t\t\t\t\t\t\t\t\t\t\t</ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span style=\"display: flex; flex-direction: row; justify-content: flex-end;\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%;margin-right: 10px;\">\n\t\t\t\t\t\t\t\t\t\t\t</ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 15%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</ion-card>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n\t<super-tabs (tabChange)=\"tabIndex($event)\" *ngIf=\"dataLoaded\">\n\t\t<super-tabs-toolbar slot=\"top\" color=\"translucent\">\n\t\t\t<super-tab-button (click)=\"tabIndex(0)\">\n\t\t\t\t<ion-label>Position</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button (click)=\"tabIndex(1)\">\n\t\t\t\t<ion-label>Completed</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button (click)=\"tabIndex(2)\">\n\t\t\t\t<ion-label>Pending</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container (activeTabIndexChange)=\"tabIndex($event)\">\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\" (ionChange)=\"filterPosition($event)\"></ion-searchbar>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<ion-text class=\"ion-padding-top\"\n\t\t\t\t\t\t*ngIf=\"filteredPosition?.length == 0 || position?.length == 0 && dataLoaded\">\n\t\t\t\t\t\tThere are no position orders currently.\n\t\t\t\t\t</ion-text>\n\t\t\t\t</div>\n\t\t\t\t<ion-card mode=\"ios\">\n\t\t\t\t\t<ion-list *ngIf=\"filteredPosition?.length > 0 || position?.length > 0 && dataLoaded\">\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding order-item\" *ngFor=\"let p of filteredPosition || position\"\n\t\t\t\t\t\t\t(click)=\"ordersActionSheet(p)\">\n\t\t\t\t\t\t\t<ion-grid class=\"ion-no-padding ion-padding-vertical\">\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-start\">\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'buy': p.orderCategory == 'buy', 'sell': p.orderCategory == 'sell'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{p.name}} </span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p>Price: {{p.price}}</p>\n\t\t\t\t\t\t\t\t\t\t<p>Quantity: {{p?.orderCategory == 'sell' ? '-' : '+'}}{{p.quantity}}</p>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-text-right ion-no-padding\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"ion-float-right\">\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>P&L</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-text\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[color]=\"+p.ltp - p.price >= 0 ? 'success' : 'danger'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"p.orderCategory == 'buy'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{+p.ltp - p.price > 0 ? ' +' : ''}}{{+(p.ltp - p.price)*p.quantity | number:'1.2'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-text\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[color]=\"+p.ltp - p.price >= 0 ? 'success' : 'danger'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"p.orderCategory == 'sell'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{+p.ltp - p.price > 0 ? ' +' : ''}}{{+(p.price - p.ltp)*p.quantity | number:'1.2'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>LTP</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{p.ltp}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</ion-card>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\" (ionChange)=\"filterCompleted($event)\"></ion-searchbar>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<ion-text class=\"ion-padding-top\"\n\t\t\t\t\t\t*ngIf=\"filteredCompleted?.length == 0 || completed?.length == 0 && dataLoaded\">\n\t\t\t\t\t\tThere are no completed orders currently.\n\t\t\t\t\t</ion-text>\n\t\t\t\t</div>\n\t\t\t\t<ion-card mode=\"ios\">\n\t\t\t\t\t<ion-list *ngIf=\"filteredCompleted?.length > 0 || completed?.length > 0 && dataLoaded\">\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding order-item\" *ngFor=\"let c of filteredCompleted || completed\">\n\t\t\t\t\t\t\t<ion-grid class=\"ion-no-padding ion-padding-vertical\">\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-start\">\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'buy': c.orderCategory == 'buy', 'sell': c.orderCategory == 'sell'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{c.name}} </span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p>Quantity: {{c?.orderCategory == 'sell' ? '-' : '+'}}{{c.quantity}}</p>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-text-right\">\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'cancelled': c.status == 'cancelled', 'complete': c.status == 'completed'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{c.status | uppercase}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Price</strong>\n\t\t\t\t\t\t\t\t\t\t\t{{c.price}}\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</ion-card>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\" (ionChange)=\"filterPending($event)\"></ion-searchbar>\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<ion-text class=\"ion-padding-top\"\n\t\t\t\t\t\t*ngIf=\"filteredPending?.length == 0 || pending?.length == 0 && dataLoaded\">\n\t\t\t\t\t\tThere are no pending orders currently.\n\t\t\t\t\t</ion-text>\n\t\t\t\t</div>\n\t\t\t\t<ion-card mode=\"ios\">\n\t\t\t\t\t<ion-list *ngIf=\"filteredPending?.length > 0 || pending?.length > 0 && dataLoaded\">\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding order-item\" *ngFor=\"let p of filteredPending || pending\"\n\t\t\t\t\t\t\t(click)=\"ordersActionSheet(p)\">\n\t\t\t\t\t\t\t<ion-grid class=\"ion-no-padding ion-padding-vertical\">\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-padding-start\">\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'buy': p.orderCategory == 'buy', 'sell': p.orderCategory == 'sell'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{p.name}} </span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p>Quantity: {{p?.orderCategory == 'sell' ? '-' : '+'}}{{p.quantity}}</p>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-text-right column-centralise-text\">\n\t\t\t\t\t\t\t\t\t\t<p style=\"margin-bottom:0px\"><strong>LTP</strong> {{p.ltp}}</p>\n\t\t\t\t\t\t\t\t\t\t<p><strong>{{p.key | titlecase}}</strong>\n\t\t\t\t\t\t\t\t\t\t\t{{p.key == 'stoploss' ? p.stoploss : p.target}}</p>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</ion-card>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-orders-orders-module-es2015.js.map