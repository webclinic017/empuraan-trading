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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/modal-edit-order/modal-edit-order.component */ "LX2U");








let OrdersPage = class OrdersPage {
    constructor(orderService, route, modalCtrl, actionSheetController) {
        this.orderService = orderService;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.actionSheetController = actionSheetController;
        this.pageIndex = 0;
    }
    ngOnInit() {
        this.position = this.orderService.position;
        this.completed = this.orderService.completed;
        this.pending = this.orderService.pending;
        this.totalPandL = this.orderService.totalPandL();
        // this.route.queryParams.subscribe(q => {
        //   // selectTab(q.selectTab)
        // })
    }
    tabIndex(ev) {
        this.pageIndex = ev.detail.index;
    }
    ordersActionSheet(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Order control panel',
                buttons: [
                    {
                        text: 'Manage',
                        icon: 'cog',
                        handler: () => {
                            if (this.pageIndex == 0)
                                this.openModalEditOrderPosition(order);
                            else if (this.pageIndex == 2)
                                this.openModalEditOrderPending(order);
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
    openModalEditOrderPosition(position) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_7__["ModalEditOrderComponent"],
                componentProps: { position }
            });
            return yield modal.present();
        });
    }
    openModalEditOrderPending(pending) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_7__["ModalEditOrderComponent"],
                componentProps: { pending }
            });
            return yield modal.present();
        });
    }
};
OrdersPage.ctorParameters = () => [
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders',
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
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\nsuper-tab-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.success {\n  color: #7fd300;\n  font-weight: 500;\n}\n\n.failure {\n  color: #d20000;\n  font-weight: 500;\n}\n\ntable p {\n  padding-bottom: 0;\n  margin-bottom: 0%;\n  padding-left: 10px;\n}\n\n.column-centralise-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n}\n\nion-card ion-card-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-list ion-grid {\n  padding-right: 0;\n}\n\nion-list ion-grid ion-col {\n  padding-right: 0;\n}\n\nion-item .success {\n  color: #7fd300;\n  font-weight: 500;\n}\n\nion-item .failure {\n  color: #d20000;\n  font-weight: 500;\n}\n\nion-item p {\n  font-size: 13px;\n}\n\nion-item span {\n  color: #747474;\n}\n\nion-item .sell {\n  background-color: #ffa8a880;\n  color: #ff0000;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .buy {\n  background-color: #7474ff80;\n  color: #0008ff;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .cancelled {\n  background-color: #e3e3e380;\n  color: #4b4b4b;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .complete {\n  background-color: #4dff4d80;\n  color: #078f00;\n  padding: 3px 12px;\n  border-radius: 5px;\n}\n\nion-item .padding-hor {\n  padding: 0 7px;\n}\n\nion-item .padding-strt {\n  padding-left: 7px;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item span {\n    color: #949494;\n  }\n  ion-item .sell {\n    background-color: #ff747459;\n    color: #ffaaaa;\n  }\n  ion-item .buy {\n    background-color: #7474ff59;\n    color: #aaadff;\n  }\n  ion-item .cancelled {\n    background-color: #6a6a6a80;\n    color: #ffffff;\n  }\n  ion-item .complete {\n    background-color: #1fe41f80;\n    color: #4dff43;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 14px !important;\n  }\n\n  ion-label, h3, p {\n    font-size: 12px !important;\n  }\n\n  ion-card-subtitle {\n    font-size: 12px !important;\n  }\n\n  ion-card-title {\n    font-size: 13px !important;\n  }\n\n  ion-searchbar {\n    font-size: 12px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQU1KOztBQUhJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1SOztBQUhBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFMSTtFQUNJLGdCQUFBO0FBT1I7O0FBTlE7RUFDSSxnQkFBQTtBQVFaOztBQUhJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBTVI7O0FBSkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFNUjs7QUFKSTtFQUNJLGVBQUE7QUFNUjs7QUFKSTtFQUNJLGNBQUE7QUFNUjs7QUFKSTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNUjs7QUFKSTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNUjs7QUFKSTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNUjs7QUFKSTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNUjs7QUFKSTtFQUNJLGNBQUE7QUFNUjs7QUFKSTtFQUNJLGlCQUFBO0FBTVI7O0FBSEE7RUFFUTtJQUNJLGNBQUE7RUFLVjtFQUhNO0lBQ0ksMkJBQUE7SUFDQSxjQUFBO0VBS1Y7RUFITTtJQUNJLDJCQUFBO0lBQ0EsY0FBQTtFQUtWO0VBSE07SUFDSSwyQkFBQTtJQUNBLGNBQUE7RUFLVjtFQUhNO0lBQ0ksMkJBQUE7SUFDQSxjQUFBO0VBS1Y7QUFDRjs7QUFGQTtFQUNJO0lBQ0UsMEJBQUE7RUFJSjs7RUFGRTtJQUNFLDBCQUFBO0VBS0o7O0VBSEU7SUFDSSwwQkFBQTtFQU1OOztFQUpFO0lBQ0ksMEJBQUE7RUFPTjs7RUFMRTtJQUNJLDBCQUFBO0VBUU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5zdXBlci10YWItYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdWNjZXNze1xuICAgIGNvbG9yOiM3ZmQzMDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mYWlsdXJle1xuICAgIGNvbG9yOiNkMjAwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbnRhYmxlIHB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNvbHVtbi1jZW50cmFsaXNlLXRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbmlvbi1jYXJke1xuICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cbmlvbi1saXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpb24tZ3JpZHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24taXRlbXtcbiAgICAuc3VjY2Vzc3tcbiAgICAgICAgY29sb3I6IzdmZDMwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmZhaWx1cmV7XG4gICAgICAgIGNvbG9yOiNkMjAwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgY29sb3I6Izc0NzQ3NDtcbiAgICB9XG4gICAgLnNlbGx7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE4YTg4MDtcbiAgICAgICAgY29sb3I6I2ZmMDAwMDtcbiAgICAgICAgcGFkZGluZzozcHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuYnV5e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ3NGZmODA7XG4gICAgICAgIGNvbG9yOiMwMDA4ZmY7XG4gICAgICAgIHBhZGRpbmc6M3B4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLmNhbmNlbGxlZHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMzgwO1xuICAgICAgICBjb2xvcjojNGI0YjRiO1xuICAgICAgICBwYWRkaW5nOjNweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jb21wbGV0ZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRkZmY0ZDgwO1xuICAgICAgICBjb2xvcjojMDc4ZjAwO1xuICAgICAgICBwYWRkaW5nOjNweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5wYWRkaW5nLWhvcntcbiAgICAgICAgcGFkZGluZzowIDdweDtcbiAgICB9XG4gICAgLnBhZGRpbmctc3RydHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgfVxufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBjb2xvcjojOTQ5NDk0O1xuICAgICAgICB9XG4gICAgICAgIC5zZWxse1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzQ3NDU5O1xuICAgICAgICAgICAgY29sb3I6I2ZmYWFhYTtcbiAgICAgICAgfVxuICAgICAgICAuYnV5e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzRmZjU5O1xuICAgICAgICAgICAgY29sb3I6I2FhYWRmZjtcbiAgICAgICAgfVxuICAgICAgICAuY2FuY2VsbGVke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZhNmE2YTgwO1xuICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICAuY29tcGxldGV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZlNDFmODA7XG4gICAgICAgICAgICBjb2xvcjojNGRmZjQzO1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICBpb24tdGl0bGV7XG4gICAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGgzLCBwe1xuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNhcmQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tc2VhcmNoYmFye1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header #header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>Orders</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<super-tabs (tabChange)=\"tabIndex($event)\">\n\t\t<super-tabs-toolbar slot=\"top\" color=\"translucent\">\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label>Position</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label>Completed</ion-label>\n\t\t\t</super-tab-button>\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label>Pending</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container>\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\"></ion-searchbar>\n\t\t\t\t<ion-card>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-card-subtitle>Total P&L</ion-card-subtitle>\n\t\t\t\t\t\t<ion-card-title [ngClass]=\"{'success': totalPandL > 0, 'failure': totalPandL < 0}\">\n\t\t\t\t\t\t\t{{totalPandL > 0 ? '+' : ''}}{{totalPandL}}\n\t\t\t\t\t\t</ion-card-title>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" *ngFor=\"let p of position\" (click)=\"ordersActionSheet(p)\">\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'buy': p.quantity > 0, 'sell': p.quantity < 0}\">\n\t\t\t\t\t\t\t\t\t\t\t{{p.code}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>Price: {{p.price}}</p>\n\t\t\t\t\t\t\t\t\t<p>Quantity: {{p.quantity}}</p>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-text-right ion-no-padding\">\n\t\t\t\t\t\t\t\t\t<table class=\"ion-float-right\">\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>P&L</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'success': p.pAndL > 0, 'failure':p.pAndL < 0}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{p.pAndL > 0 ? ' +' : ' '}}{{p.pAndL}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>LTP</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{p.LTP}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong>SL</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{p.SL}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\"></ion-searchbar>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" *ngFor=\"let c of completed\">\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'buy': c.quantity > 0, 'sell': c.quantity < 0}\">\n\t\t\t\t\t\t\t\t\t\t\t{{c.code}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>Price: {{c.price}}</p>\n\t\t\t\t\t\t\t\t\t<p>Quantity: {{c.quantity}}</p>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-text-right\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'cancelled': c.status == 'CANCELLED', 'complete': c.status == 'COMPLETE'}\">\n\t\t\t\t\t\t\t\t\t\t\t{{c.status}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<strong>P&L</strong>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'success': c.pAndL > 0, 'failure':c.pAndL < 0}\">\n\t\t\t\t\t\t\t\t\t\t\t{{c.pAndL > 0 ? ' +' : ' '}}{{c.pAndL}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p><strong>Exit Price</strong> {{c.exitPrice}}</p>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<ion-searchbar showCancelButton=\"focus\"></ion-searchbar>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" *ngFor=\"let p of pending\" (click)=\"ordersActionSheet(p)\">\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"{'buy': p.quantity > 0, 'sell': p.quantity < 0}\">\n\t\t\t\t\t\t\t\t\t\t\t{{p.code}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>Price: {{p.price}}</p>\n\t\t\t\t\t\t\t\t\t<p>Quantity: {{p.quantity}}</p>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col col=\"6\" class=\"ion-text-right column-centralise-text\">\n\t\t\t\t\t\t\t\t\t<p><strong>LTP</strong> {{p.LTP}}</p>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-orders-orders-module-es2015.js.map