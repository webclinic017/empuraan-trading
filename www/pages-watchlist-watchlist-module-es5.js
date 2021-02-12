(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-watchlist-watchlist-module"], {
    /***/
    "122F":
    /*!*****************************************************!*\
      !*** ./src/app/pages/watchlist/watchlist.module.ts ***!
      \*****************************************************/

    /*! exports provided: WatchlistPageModule */

    /***/
    function F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchlistPageModule", function () {
        return WatchlistPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./watchlist-routing.module */
      "SAOK");
      /* harmony import */


      var _watchlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./watchlist.page */
      "5svm");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./buy-sell/buy-sell.page */
      "aY2Y");
      /* harmony import */


      var _double_tap_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./double-tap.directive */
      "9gIM");

      var WatchlistPageModule = function WatchlistPageModule() {
        _classCallCheck(this, WatchlistPageModule);
      };

      WatchlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WatchlistPageRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
        declarations: [_watchlist_page__WEBPACK_IMPORTED_MODULE_6__["WatchlistPage"], _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_9__["BuySellPage"], _double_tap_directive__WEBPACK_IMPORTED_MODULE_10__["DoubleTapDirective"]]
      })], WatchlistPageModule);
      /***/
    },

    /***/
    "5svm":
    /*!***************************************************!*\
      !*** ./src/app/pages/watchlist/watchlist.page.ts ***!
      \***************************************************/

    /*! exports provided: WatchlistPage */

    /***/
    function svm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchlistPage", function () {
        return WatchlistPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_watchlist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./watchlist.page.html */
      "Zd3G");
      /* harmony import */


      var _watchlist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./watchlist.page.scss */
      "IVAw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component */
      "lNYK");
      /* harmony import */


      var src_app_modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component */
      "rdK+");
      /* harmony import */


      var src_app_modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component */
      "1r9f");
      /* harmony import */


      var src_app_modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modals/modal-watchlist/modal-watchlist.component */
      "Nbj3");
      /* harmony import */


      var src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/stock.service */
      "8hSh");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/watchlist.service */
      "Tl0h");

      var WatchlistPage = /*#__PURE__*/function () {
        function WatchlistPage(modalController, watchlistService, actionSheetController, stockService, userService, toastCtrl) {
          _classCallCheck(this, WatchlistPage);

          this.modalController = modalController;
          this.watchlistService = watchlistService;
          this.actionSheetController = actionSheetController;
          this.stockService = stockService;
          this.userService = userService;
          this.toastCtrl = toastCtrl;
          this.subscribedSockets = [];
        }

        _createClass(WatchlistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataLoaded = false;
            this.selectedWatchlist = 0;
            this.isSimualted = true;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.spinner = true;
            this.getWatchlists();
          }
        }, {
          key: "getWatchlists",
          value: function getWatchlists(spinner) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (spinner == true) this.spinner = true;
                      this.userService.getSettings().subscribe(function (r) {
                        var datatype = r.data.datatype;
                        if (datatype == "simulated") _this.watchlistService.getSimulatedWatchlists().subscribe(function (r) {
                          _this.isSimualted = true;
                          _this.watchlists = [];
                          _this.watchlists = r.data;
                          console.log('simulated', r);

                          _this.moveInArray();

                          _this.updateLtp()["finally"](function () {
                            _this.dataLoaded = true;
                            _this.spinner = false;
                          });
                        });
                        if (datatype == "realtime") _this.watchlistService.getRealtimeWatchlists().subscribe(function (r) {
                          _this.isSimualted = false;
                          _this.watchlists = [];
                          _this.watchlists = r.data;
                          console.log('realTime', r);

                          _this.moveInArray();

                          _this.updateLtp()["finally"](function () {
                            _this.dataLoaded = true;
                            _this.spinner = false;
                          });
                        });
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "subscribeToStockSocket",
          value: function subscribeToStockSocket(wId, sId) {
            var _this2 = this;

            var wIndex = this.watchlists.indexOf(this.watchlists.find(function (w) {
              return w._id = wId;
            }));
            var watchlist = this.watchlists[wIndex];
            var sIndex = watchlist.stockIds.indexOf(watchlist.stockIds.find(function (s) {
              return s.id == sId;
            }));
            this.watchlists[wIndex].stockIds[sIndex].isLoaded = false;
            this.stockService.startStock(sId, wId).subscribe(function (r) {
              return _this2.getWatchlists();
            });
          }
        }, {
          key: "updateLtp",
          value: function updateLtp() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.unsubscribeFromSockets();
                      this.selectedWatchlistId = (_a = this.watchlists[this.selectedWatchlist]) === null || _a === void 0 ? void 0 : _a._id;
                      this.watchlists.forEach(function (w) {
                        w.stockIds.forEach(function (s, i) {
                          if (s.started) {
                            var socketSub = _this3.stockService.listen("".concat(s.id, "-").concat(w._id)).subscribe(function (res) {
                              s.ltp = res[0].price;
                            });

                            _this3.subscribedSockets.push(socketSub);
                          }
                        });
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "unsubscribeFromSockets",
          value: function unsubscribeFromSockets() {
            this.subscribedSockets.forEach(function (s) {
              s.unsubscribe();
            });
            this.subscribedSockets.splice(0, this.subscribedSockets.length);
          }
        }, {
          key: "openCompaniesModal",
          value: function openCompaniesModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_8__["ModalWatchlistComponent"],
                        componentProps: {
                          selectedWatchlist: id
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (d) {
                        console.log(d);
                        if (!_this4.isSimualted) d.data == true && _this4.getWatchlists(true);
                      });
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openWatchlistModal",
          value: function openWatchlistModal(isEdit) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_7__["ModalWatchlistCeComponent"],
                        componentProps: {
                          isEdit: isEdit,
                          selectedWatchlist: this.watchlists[this.selectedWatchlist]
                        }
                      });

                    case 2:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (d) {
                        if (!_this5.isSimualted) d.data == true && _this5.getWatchlists(true);
                      });
                      _context4.next = 6;
                      return modal.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "openBuySellModal",
          value: function openBuySellModal(stock) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_5__["BuySellModalPopupComponent"],
                        componentProps: {
                          selectedStock: stock,
                          selectedWatchlistId: this.selectedWatchlistId
                        }
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present();

                    case 5:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "openManageWatchlists",
          value: function openManageWatchlists() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditWatchlistsComponent"]
                      });

                    case 2:
                      modal = _context6.sent;
                      modal.onDidDismiss().then(function (d) {
                        if (!_this6.isSimualted) d.data == true && _this6.getWatchlists(true);
                      });
                      _context6.next = 6;
                      return modal.present();

                    case 6:
                      return _context6.abrupt("return", _context6.sent);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "onWatchlistTabClick",
          value: function onWatchlistTabClick() {
            this.watchlistEditActionSheet();
          }
        }, {
          key: "onWatchlistTitleClick",
          value: function onWatchlistTitleClick() {
            this.watchlistTitleActionSheet();
          }
        }, {
          key: "watchlistTitleActionSheet",
          value: function watchlistTitleActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.actionSheetController.create({
                        header: "Watchlist control panel",
                        buttons: [{
                          text: "Manage",
                          icon: "cog",
                          handler: function handler() {
                            _this7.openManageWatchlists();
                          }
                        }, {
                          text: "Cancel",
                          icon: "close",
                          role: "cancel"
                        }]
                      });

                    case 2:
                      actionSheet = _context7.sent;
                      _context7.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "watchlistEditActionSheet",
          value: function watchlistEditActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this8 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.actionSheetController.create({
                        header: "Watchlist manage panel",
                        buttons: [{
                          text: "Edit",
                          icon: "create-outline",
                          handler: function handler() {
                            _this8.openWatchlistModal(true);
                          }
                        }, {
                          text: "Delete",
                          role: "destructive",
                          icon: "trash-outline",
                          handler: function handler() {
                            _this8.watchlistService.deleteWatchlist(_this8.watchlists[_this8.selectedWatchlist]._id).subscribe(function (r) {
                              console.log("delete", r);

                              _this8.getWatchlists(true).then(function () {
                                _this8.presentSuccessToast('Watchlist successfuly deleted');
                              });
                            });
                          }
                        }, {
                          text: "Cancel",
                          icon: "close",
                          role: "cancel"
                        }]
                      });

                    case 2:
                      actionSheet = _context8.sent;
                      _context8.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "presentSuccessToast",
          value: function presentSuccessToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: "success"
                      });

                    case 2:
                      toast = _context9.sent;
                      _context9.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "removeWatchlist",
          value: function removeWatchlist(id) {
            this.watchlistService.deleteWatchlist(id);
          }
        }, {
          key: "tabIndex",
          value: function tabIndex(tab) {
            var _this9 = this;

            if (typeof tab == "number") this.selectedWatchlist = tab;else this.selectedWatchlist = tab.detail;
            this.selectedWatchlistId = this.watchlists[this.selectedWatchlist]._id;
            this.updateLtp()["finally"](function () {
              _this9.dataLoaded = true;
              _this9.spinner = false;
            });
            ;
          }
        }, {
          key: "moveInArray",
          value: function moveInArray() {
            this.watchlists.sort(this.sortByPosition);

            for (var i = 0; i < this.watchlists.length; i++) {
              this.watchlists[i].stockIds.sort(this.sortByPosition);
            }
          }
        }, {
          key: "sortByPosition",
          value: function sortByPosition(a, b) {
            if (a.position < b.position) return -1;
            if (a.position > b.position) return 1;
            return 0;
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.unsubscribeFromSockets();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeFromSockets();
          }
        }]);

        return WatchlistPage;
      }();

      WatchlistPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_11__["WatchlistService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_9__["StockService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      WatchlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-watchlist",
        template: _raw_loader_watchlist_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_watchlist_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WatchlistPage);
      /***/
    },

    /***/
    "9gIM":
    /*!*********************************************************!*\
      !*** ./src/app/pages/watchlist/double-tap.directive.ts ***!
      \*********************************************************/

    /*! exports provided: DoubleTapDirective */

    /***/
    function gIM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoubleTapDirective", function () {
        return DoubleTapDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var DoubleTapDirective = /*#__PURE__*/function () {
        function DoubleTapDirective(gestureCtrl, el) {
          _classCallCheck(this, DoubleTapDirective);

          this.gestureCtrl = gestureCtrl;
          this.el = el;
          this.eventHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.lastOnStart = 0;
          this.DOUBLE_CLICK_THRESHOLD = 500;
        }

        _createClass(DoubleTapDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            var gesture = this.gestureCtrl.create({
              gestureName: 'double-tap',
              el: this.el.nativeElement,
              threshold: 0,
              onStart: function onStart() {
                _this10.onStart();
              }
            });
            gesture.enable();
          }
        }, {
          key: "onStart",
          value: function onStart() {
            var now = Date.now();

            if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
              this.eventHandler.emit({
                eventType: 'render'
              });
              this.lastOnStart = 0;
            } else {
              this.lastOnStart = now;
            }
          }
        }]);

        return DoubleTapDirective;
      }();

      DoubleTapDirective.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      DoubleTapDirective.propDecorators = {
        eventHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      DoubleTapDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDoubleTap]'
      })], DoubleTapDirective);
      /***/
    },

    /***/
    "IVAw":
    /*!*****************************************************!*\
      !*** ./src/app/pages/watchlist/watchlist.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function IVAw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\nion-title {\n  color: black;\n}\n\nion-content div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 14px !important;\n  }\n\n  ion-label, h3, p {\n    font-size: 12px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2F0Y2hsaXN0L3dhdGNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNFO0lBQ0UsMEJBQUE7RUFFRjs7RUFBQTtJQUNFLDBCQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsWUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93YXRjaGxpc3Qvd2F0Y2hsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuaW9uLXRpdGxle1xuICBjb2xvcjpibGFjaztcbn1cbmlvbi1jb250ZW50IHtcbiAgZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgaW9uLXRpdGxle1xuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWxhYmVsLCBoMywgcHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi10aXRsZXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "O+E9":
    /*!*************************************************************!*\
      !*** ./src/app/pages/watchlist/buy-sell/buy-sell.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function OE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap\");\nbody {\n  font-family: Roboto;\n}\nion-card-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\nion-card-title {\n  font-size: 15px;\n}\nion-card-subtitle {\n  margin-top: 0;\n  font-size: 14px;\n  color: #ababab;\n  margin-bottom: 0;\n}\n.card-input {\n  border: 1px solid rgba(184, 184, 184, 0.69);\n  color: black;\n  padding: 0 11px !important;\n  font-size: 18px;\n}\n.bs-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.radios {\n  list-style-type: none;\n  margin: 25px 0 0 0;\n  padding: 0;\n}\n.bs-radio-group h5 {\n  margin: 0 5px;\n}\nul {\n  margin: 0 !important;\n}\n.radios li {\n  float: right;\n  text-align: center;\n  width: 90px;\n  height: 30px;\n  position: relative;\n}\n.radios label, .radios input[type=radio] {\n  display: block;\n  position: absolute;\n  margin-left: 10px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.radios input[type=radio] {\n  opacity: 0.011;\n  z-index: 100;\n  margin-left: 10px;\n}\n.radios input[type=radio]:checked + label {\n  border: 1px solid rgba(255, 255, 255, 0);\n  border-radius: 5px;\n  margin-left: 10px;\n  color: white;\n}\n.radios input[type=radio].red:checked + label {\n  background-color: #EB455A;\n}\n.radios input[type=radio].blue:checked + label {\n  background-color: #5360fc;\n}\n.radios label {\n  padding: 5px !important;\n  border-radius: 5px;\n  border: 1px solid #CCC;\n  font-size: 14px;\n  z-index: 90;\n}\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.footer-button {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\nion-button.footer-button {\n  width: 100%;\n}\n.disabled-input {\n  background-color: #dedede;\n  color: #353535;\n}\n@media (prefers-color-scheme: dark) {\n  ion-input {\n    color: white;\n  }\n\n  .disabled-input {\n    background-color: #484848;\n    color: #bdbdbd;\n  }\n\n  ion-title {\n    color: white;\n  }\n}\n@media screen and (max-width: 360px) {\n  ion-title, ion-card-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-card-subtitle, ion-select-option, ion-select, p, h5 {\n    font-size: 13px !important;\n  }\n\n  .radios label {\n    padding: 5px !important;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2F0Y2hsaXN0L2J1eS1zZWxsL2J1eS1zZWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3RkFBQTtBQUNSO0VBQ0ksbUJBQUE7QUFDSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUE7RUFDSSxlQUFBO0FBR0o7QUFEQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSUo7QUFGQTtFQUNJLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUtKO0FBSEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTUo7QUFKQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBT0o7QUFMQTtFQUNJLGFBQUE7QUFRSjtBQU5BO0VBQ0ksb0JBQUE7QUFTSjtBQVBBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFXSjtBQVRBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVlKO0FBVkE7RUFDSSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBYUo7QUFYQTtFQUNJLHlCQUFBO0FBY0o7QUFaQTtFQUNJLHlCQUFBO0FBZUo7QUFiQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBZ0JKO0FBWEE7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQWNKO0FBWkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWVKO0FBYkE7RUFDSSxXQUFBO0FBZ0JKO0FBZEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFpQko7QUFmQTtFQUNJO0lBQ0ksWUFBQTtFQWtCTjs7RUFmRTtJQUNJLHlCQUFBO0lBQ0EsY0FBQTtFQWtCTjs7RUFoQkU7SUFDSSxZQUFBO0VBbUJOO0FBQ0Y7QUFqQkE7RUFDSTtJQUNFLDBCQUFBO0VBbUJKOztFQWpCRTtJQUNFLDBCQUFBO0VBb0JKOztFQWxCRTtJQUNJLHVCQUFBO0lBQ0EsZUFBQTtFQXFCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2F0Y2hsaXN0L2J1eS1zZWxsL2J1eS1zZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5pb24tY2FyZC1oZWFkZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGNvbG9yOiNhYmFiYWI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jYXJkLWlucHV0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0LCAwLjY5KTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMCAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOjE4cHg7XG59XG4uYnMtcmFkaW8tZ3JvdXB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucmFkaW9ze1xuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICAgIG1hcmdpbjoyNXB4IDAgMCAwO1xuICAgIHBhZGRpbmc6MDtcbn1cbi5icy1yYWRpby1ncm91cCBoNXtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxudWx7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4ucmFkaW9zIGxpIHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6OTBweDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5yYWRpb3MgbGFiZWwsIC5yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICByaWdodDowO1xuICAgIGJvdHRvbTowO1xufVxuLnJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl17XG4gICAgb3BhY2l0eTowLjAxMTtcbiAgICB6LWluZGV4OjEwMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUsIDApOyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6d2hpdGU7XG59XG4ucmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXS5yZWQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUI0NTVBO1xufVxuLnJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0uYmx1ZTpjaGVja2VkICsgbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzUzNjBmYztcbn1cbi5yYWRpb3MgbGFiZWwgeyAgICBcbiAgICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNDQ0M7IFxuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIHotaW5kZXg6OTA7XG59XG4vLyAucmFkaW9zIGxhYmVsOmhvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kOiNEREQ7XG4vLyB9XG5ociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTY3LCAxNjcsIDE2NywgMC41KSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5mb290ZXItYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1idXR0b24uZm9vdGVyLWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5kaXNhYmxlZC1pbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZWRlZGU7XG4gICAgY29sb3I6ICMzNTM1MzU7XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgaW9uLWlucHV0e1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmRpc2FibGVkLWlucHV0e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0ODQ4NDg7XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIH1cbiAgICBpb24tdGl0bGV7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgaW9uLXRpdGxlLCBpb24tY2FyZC10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1sYWJlbCwgaW9uLWNhcmQtc3VidGl0bGUsIGlvbi1zZWxlY3Qtb3B0aW9uLCBpb24tc2VsZWN0LCBwLCBoNXtcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucmFkaW9zIGxhYmVsIHsgICAgXG4gICAgICAgIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        exports: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], SharedModule);
      /***/
    },

    /***/
    "SAOK":
    /*!*************************************************************!*\
      !*** ./src/app/pages/watchlist/watchlist-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: WatchlistPageRoutingModule */

    /***/
    function SAOK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchlistPageRoutingModule", function () {
        return WatchlistPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buy-sell/buy-sell.page */
      "aY2Y");
      /* harmony import */


      var _watchlist_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./watchlist.page */
      "5svm");

      var routes = [{
        path: '',
        component: _watchlist_page__WEBPACK_IMPORTED_MODULE_4__["WatchlistPage"],
        children: []
      }, {
        path: 'buy-sell/:id/:wId',
        component: _buy_sell_buy_sell_page__WEBPACK_IMPORTED_MODULE_3__["BuySellPage"]
      }];

      var WatchlistPageRoutingModule = function WatchlistPageRoutingModule() {
        _classCallCheck(this, WatchlistPageRoutingModule);
      };

      WatchlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WatchlistPageRoutingModule);
      /***/
    },

    /***/
    "Zd3G":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/watchlist/watchlist.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zd3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar style=\"display: flex; align-items: center; justify-content: center;\">\n\t\t<ion-title *ngIf=\"!isSimualted\" (click)=\"onWatchlistTitleClick()\">\n\t\t\t<div style=\"display: flex; align-items: center; justify-content: center;\">\n\t\t\t\t<span>Watchlist</span>\n\t\t\t\t<ion-spinner name=\"lines-small\" *ngIf=\"spinner\"></ion-spinner>\n\t\t\t</div>\n\t\t</ion-title>\n\t\t<ion-title *ngIf=\"isSimualted\">\n\t\t\t<div style=\"display: flex; align-items: center; justify-content: center;\">\n\t\t\t\t<span>Watchlist</span>\n\t\t\t\t<ion-spinner name=\"lines-small\" *ngIf=\"spinner\"></ion-spinner>\n\t\t\t</div>\n\t\t</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<super-tabs *ngIf=\"!dataLoaded\">\n\t\t<super-tabs-toolbar slot=\"top\" color=\"translucent\">\n\t\t\t<super-tab-button>\n\t\t\t\t<ion-label style=\"width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center\">\n\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container>\n\t\t\t<super-tab>\n\t\t\t\t<ion-list style=\"display: flex; flex-direction: column;padding-top:5px\">\n\t\t\t\t\t<ion-item *ngFor=\"let item of [].constructor(9)\" class=\"ion-no-padding\" style=\"width: 100%; height: 66px;\">\n\t\t\t\t\t\t<ion-label class=\"ion-padding-start\" style=\"display: flex; flex-direction: column; align-items: flex-start; justify-content: center; height: 12px;\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 40%; padding:11px\"></ion-skeleton-text>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-label style=\"display: flex; flex-direction: column; align-items: flex-end\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t<ion-label style=\"display: flex; flex-direction: row; justify-content: flex-end; width: 100%\">\n\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 20%; margin-right: 10px\"></ion-skeleton-text>\n\t\t\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n\t<super-tabs *ngIf=\"watchlists?.length > 0 && dataLoaded\">\n\t\t<super-tabs-toolbar *ngIf=\"!isSimualted\" slot=\"top\" color=\"translucent\" [scrollable]=\"watchlists?.length > 4\" [scrollablePadding]=\"watchlists?.length < 3\">\n\t\t\t<super-tab-button *ngFor=\"let w of watchlists; let i = index\" (click)=\"tabIndex(i)\" appDoubleTap (eventHandler)=\"onWatchlistTabClick()\">\n\t\t\t\t<ion-label>{{w.name?.length > 8 ? w.name.substring(0,8) + '...' : w.name}}</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-toolbar *ngIf=\"isSimualted\" slot=\"top\" color=\"translucent\" scrollablePadding>\n\t\t\t<super-tab-button *ngFor=\"let w of watchlists; let i = index\">\n\t\t\t\t<ion-label>{{w.name?.length > 8 ? w.name.substring(0,8) + '...' : w.name}}</ion-label>\n\t\t\t</super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container (activeTabIndexChange)=\"tabIndex($event)\">\n\t\t\t<super-tab *ngFor=\"let w of watchlists\">\n\t\t\t\t<ion-list style=\"padding-bottom: 75px\">\n\t\t\t\t\t<div *ngFor=\"let c of w.stockIds\">\n\t\t\t\t\t\t<ion-item style=\"width: 100%; height: 66px;\" class=\"ion-no-padding\" *ngIf=\"c.started && c.isLoaded\">\n\t\t\t\t\t\t\t<ion-label class=\"ion-padding-start\" (click)=\"openBuySellModal(c)\">\n\t\t\t\t\t\t\t\t<h3 style=\"padding:12px 0\">{{c.name}}</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-label class=\"ion-margin-start ion-text-right\" *ngIf=\"+c.ltp - +c.ldp >= 0 && c.started\" (click)=\"openBuySellModal(c)\">\n\t\t\t\t\t\t\t\t<ion-text color=\"success\"><h3>{{c.ltp | number:'1.1-2'}}</h3></ion-text>\n\t\t\t\t\t\t\t\t<p>+{{+c.ltp - +c.ldp | number:'1.1-2'}} (+{{(+c.ltp - +c.ldp) / +c.ldp | percent:'1.1-2'}})</p>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-label class=\"ion-margin-start ion-text-right\" *ngIf=\"+c.ltp - +c.ldp < 0 && c.started\" (click)=\"openBuySellModal(c)\">\n\t\t\t\t\t\t\t\t<ion-text color=\"danger\"><h3>{{c.ltp | number:'1.1-2'}}</h3></ion-text>\n\t\t\t\t\t\t\t\t<p>-{{+c.ltp - +c.ldp | number:'1.1-2'}} (-{{(+c.ltp - +c.ldp) / +c.ldp | percent:'1.1-2'}})</p>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item style=\"width: 100%; height: 66px;\" class=\"ion-no-padding\" *ngIf=\"!c.started && c.isLoaded\">\n\t\t\t\t\t\t\t<ion-label class=\"ion-padding-start\" (click)=\"openBuySellModal(c)\">\n\t\t\t\t\t\t\t\t<h3 style=\"padding:12px 0\">{{c.name}}</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-label (click)=\"subscribeToStockSocket(w._id, c.id)\" class=\"ion-margin-start ion-text-right\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"play-outline\"></ion-icon>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"ion-no-padding\" style=\"width: 100%; height: 66px;\" *ngIf=\"!c.started && !c.isLoaded\">\n\t\t\t\t\t\t\t<ion-label class=\"ion-padding-start\" (click)=\"openBuySellModal(c)\">\n\t\t\t\t\t\t\t\t<h3 style=\"padding:12px 0\">{{c.name}}</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-label class=\"ion-margin-start ion-text-right\">\n\t\t\t\t\t\t\t\t<ion-spinner name=\"lines-small\"></ion-spinner>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-list>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n\t<ion-content padding *ngIf=\"watchlists?.length == 0 && dataLoaded\">\n\t\t<div>\n\t\t\t<h6 class=\"gray\">\n\t\t\t\tGo on and create your personal watchlist <br />\n\t\t\t\tby pressing 'Watchlist' in the toolbar\n\t\t\t</h6>\n\t\t</div>\n\t</ion-content>\n</ion-content>\n<ion-fab *ngIf=\"!isSimualted && watchlists.length > 0\" horizontal=\"end\" vertical=\"bottom\" style=\"position: absolute; bottom: 10px; right: 10px\">\n\t<ion-fab-button (click)=\"openCompaniesModal(selectedWatchlistId)\">\n\t\t<ion-icon name=\"add\"></ion-icon>\n\t</ion-fab-button>\n</ion-fab>\n";
      /***/
    },

    /***/
    "aY2Y":
    /*!***********************************************************!*\
      !*** ./src/app/pages/watchlist/buy-sell/buy-sell.page.ts ***!
      \***********************************************************/

    /*! exports provided: BuySellPage */

    /***/
    function aY2Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuySellPage", function () {
        return BuySellPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buy_sell_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buy-sell.page.html */
      "fj9w");
      /* harmony import */


      var _buy_sell_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./buy-sell.page.scss */
      "O+E9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/stock.service */
      "8hSh");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var BuySellPage = /*#__PURE__*/function () {
        function BuySellPage(route, stockService, toastCtrl, router, userService) {
          _classCallCheck(this, BuySellPage);

          this.route = route;
          this.stockService = stockService;
          this.toastCtrl = toastCtrl;
          this.router = router;
          this.userService = userService;
          this.price = 0;
          this.quantity = 0;
          this.capitalAtRisk = 0;
          this.limitVal = 0;
          this.approxMargin = 0;
          this.leverage = 0;
          this.risk = 0;
        }

        _createClass(BuySellPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.transactionSpinner = false;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this11 = this;

            this.userService.getSettings().subscribe(function (r) {
              _this11.leverage = r.data.leverage;
              _this11.risk = r.data.risk;
            });
            this.userService.accountDetails().subscribe(function (res) {
              _this11.availableBalance = res.account.currentBalance;
            });
            this.route.queryParams.subscribe(function (data) {
              data.isBuy == 'true' ? _this11.isBuy = true : _this11.isBuy = false;
            });
            this.route.params.subscribe(function (data) {
              _this11.stockService.getStock(data.id).subscribe(function (c) {
                _this11.company = c.data;
                _this11.wId = data.wId;

                _this11.updateLtp();
              });
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this12 = this;

            this.buySellForm.valueChanges.subscribe(function (data) {
              _this12.approxMargin = parseFloat(data.price) * data.quantity / _this12.leverage;
              _this12.capitalAtRisk = data.quantity * Math.abs(data.stopLoss - data.price) / 100;

              if (data.quantity == 0 && data.price == 0 || data.quantity == null || data.price == null) {
                _this12.capitalAtRisk = 0;
                _this12.approxMargin = 0;
              }
            });
          }
        }, {
          key: "updateLtp",
          value: function updateLtp() {
            var _this13 = this;

            var _a;

            this.stockService.listen("".concat((_a = this.company) === null || _a === void 0 ? void 0 : _a._id, "-").concat(this.wId)).subscribe(function (res) {
              _this13.company.ltp = res[0].price;
            });
          }
        }, {
          key: "navigateToWatchlist",
          value: function navigateToWatchlist() {
            this.router.navigate(['home', 'watchlist']);
          }
        }, {
          key: "changeType",
          value: function changeType(event) {
            event.detail.value == 'true' ? this.isBuy = true : this.isBuy = false;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.transactionSpinner = true;
            var quantity = this.buySellForm.value.quantity;
            var price = this.buySellForm.value.price;
            var order = this.buySellForm.value.order;
            var stopLoss = this.buySellForm.value.stopLoss;
            var target = this.buySellForm.value.target;
            var risk = this.risk / 100 * this.availableBalance;

            if (quantity != '' && order != '' && price != '' && quantity > 0) {
              if (order == 'limit' && price > 0) {
                if (risk >= price * quantity) {
                  this.isBuy ? this.buy(this.company._id, this.wId, quantity, stopLoss, target, order, this.availableBalance, +price) : this.sell(this.company._id, this.wId, quantity, stopLoss, target, order, this.availableBalance, +price);
                } else {
                  this.transactionSpinner = false;
                  this.presentErrorToast('Your price is higher than your risk.');
                }
              } else {
                if (risk >= price * quantity) {
                  this.isBuy ? this.buy(this.company._id, this.wId, quantity, stopLoss, target, order, this.availableBalance, +this.company.ltp) : this.sell(this.company._id, this.wId, quantity, stopLoss, target, order, this.availableBalance, +this.company.ltp);
                } else {
                  this.transactionSpinner = false;
                  this.presentErrorToast('Your price is higher than your risk.');
                }
              }
            } else {
              this.transactionSpinner = false;
              this.presentErrorToast('Something is missing.');
            }
          }
        }, {
          key: "buy",
          value: function buy(cId, watchlistId, quantity, stopLoss, target, order, availableBal, price) {
            var _this14 = this;

            if (availableBal >= price) {
              var company;
              this.stockService.getStock(cId).subscribe(function (c) {
                company = c.data;
                var pending;
                pending = {
                  stockId: cId,
                  watchlistId: watchlistId,
                  volume: quantity,
                  stoploss: stopLoss,
                  target: target,
                  price: price
                };
                order == 'limit' ? _this14.stockService.orderStockLimitBuy(pending).subscribe(function () {}, function (err) {
                  _this14.transactionSpinner = false;

                  _this14.presentErrorToast(err);
                }, function () {
                  _this14.transactionSpinner = false;

                  _this14.router.navigate(['home', 'orders']);
                }) : _this14.stockService.orderStockMarketBuy(pending).subscribe(function () {}, function (err) {
                  _this14.transactionSpinner = false;

                  _this14.presentErrorToast(err);
                }, function () {
                  _this14.transactionSpinner = false;

                  _this14.router.navigate(['home', 'orders']);
                });
              });
            } else {
              this.transactionSpinner = false;
              this.presentErrorToast('You have insufficient balance.');
            }
          }
        }, {
          key: "sell",
          value: function sell(cId, watchlistId, quantity, stopLoss, target, order, availableBal, price) {
            var _this15 = this;

            var company;
            this.stockService.getStock(cId).subscribe(function (c) {
              company = c.data;
              var pending;
              pending = {
                stockId: cId,
                watchlistId: watchlistId,
                volume: quantity,
                stoploss: stopLoss,
                target: target,
                price: price
              };
              order == 'limit' ? _this15.stockService.orderStockLimitSell(pending).subscribe(function () {}, function (err) {
                _this15.transactionSpinner = false;

                _this15.presentErrorToast(err);
              }, function () {
                _this15.transactionSpinner = false;

                _this15.router.navigate(['home', 'orders']);
              }) : _this15.stockService.orderStockMarketSell(pending).subscribe(function () {}, function (err) {
                _this15.transactionSpinner = false;

                _this15.presentErrorToast(err);
              }, function () {
                _this15.transactionSpinner = false;

                _this15.router.navigate(['home', 'orders']);
              });
            });
          }
        }, {
          key: "presentErrorToast",
          value: function presentErrorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var toast;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        color: 'danger',
                        duration: 2500
                      });

                    case 2:
                      toast = _context10.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return BuySellPage;
      }();

      BuySellPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }];
      };

      BuySellPage.propDecorators = {
        buySellForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['buySellForm']
        }],
        marketRadio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['marketRadio']
        }]
      };
      BuySellPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buy-sell',
        template: _raw_loader_buy_sell_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buy_sell_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BuySellPage);
      /***/
    },

    /***/
    "fj9w":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/watchlist/buy-sell/buy-sell.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fj9w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"['home','watchlist']\" (click)=\"navigateToWatchlist()\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{company?.companyName}}</ion-title>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-select\n\t\t\t\t\tok-text=\"Okay\"\n\t\t\t\t\tcancel-text=\"Cancel\"\n\t\t\t\t\tvalue=\"{{isBuy ? 'true' : 'false'}}\"\n\t\t\t\t\t(ionChange)=\"changeType($event)\"\n\t\t\t\t>\n\t\t\t\t\t<ion-select-option value=\"true\">Buy</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"false\">Sell</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<form #buySellForm=\"ngForm\" id=\"buySellForm\" form-directive>\n\t\t<ion-card>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t<ion-card-title>Quantity</ion-card-title>\n\t\t\t\t\t\t\t<ion-card-subtitle>Lot: 1</ion-card-subtitle>\n\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tclass=\"card-input\"\n\t\t\t\t\t\t\t\tname=\"quantity\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"quantity\"\n\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t<ion-card-title>Price</ion-card-title>\n\t\t\t\t\t\t\t<ion-card-subtitle>Tick: 0.05</ion-card-subtitle>\n\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tclass=\"card-input\"\n\t\t\t\t\t\t\t\tname=\"price\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"marketRadio.checked ? company?.ltp : limitVal\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'disabled-input':marketRadio.checked}\"\n\t\t\t\t\t\t\t\t[required]=\"!marketRadio.checked\"\n\t\t\t\t\t\t\t\t[readonly]=\"marketRadio.checked\"\n\t\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-card>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Stop-loss</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-input type=\"number\" class=\"card-input\" name=\"stopLoss\" ngModel required min=\"0\"></ion-input>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Target</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-input type=\"number\" class=\"card-input\" name=\"target\" ngModel required min=\"0\"></ion-input>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<hr />\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"bs-radio-group\">\n\t\t\t\t\t<ion-text><h5>Order</h5></ion-text>\n\t\t\t\t\t<ul class=\"radios\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t#marketRadio\n\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\tvalue=\"market\"\n\t\t\t\t\t\t\t\tid=\"radio-market\"\n\t\t\t\t\t\t\t\tname=\"order\"\n\t\t\t\t\t\t\t\tchecked\n\t\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\t\t[ngClass]=\"{'red':!isBuy,'blue':isBuy}\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<label for=\"radio-market\">MARKET</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\tvalue=\"limit\"\n\t\t\t\t\t\t\t\tid=\"radio-limit\"\n\t\t\t\t\t\t\t\tname=\"order\"\n\t\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\t\t[ngClass]=\"{'red':!isBuy,'blue':isBuy}\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<label for=\"radio-limit\">LIMIT</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<hr />\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-text-left\">\n\t\t\t\t\t<ion-text><p>Approx. Margin:</p></ion-text>\n\t\t\t\t\t<ion-text><p>Available Balance:</p></ion-text>\n\t\t\t\t\t<ion-text><p>Capital at Risk:</p></ion-text>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" class=\"ion-text-right\">\n\t\t\t\t\t<ion-text><p>{{approxMargin | number:'1.2'}}</p></ion-text>\n\t\t\t\t\t<ion-text><p>{{availableBalance | number:'1.2'}}</p></ion-text>\n\t\t\t\t\t<ion-text><p>{{capitalAtRisk | percent:'1.2'}}</p></ion-text>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</form>\n</ion-content>\n<ion-footer>\n\t<ion-toolbar>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"footer\" *ngIf=\"isBuy\">\n\t\t\t\t\t<ion-button class=\"footer-button\" size=\"medium\" color=\"tertiary\" form=\"buySellForm\" (click)=\"onSubmit()\">\n\t\t\t\t\t\tConfirm buy <ion-spinner name=\"lines-small\" *ngIf=\"transactionSpinner\"></ion-spinner>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"footer\" *ngIf=\"!isBuy\">\n\t\t\t\t\t<ion-button class=\"footer-button\" size=\"medium\" color=\"danger\" form=\"buySellForm\" (click)=\"onSubmit()\">\n\t\t\t\t\t\tConfirm Sell <ion-spinner name=\"lines-small\" *ngIf=\"transactionSpinner\"></ion-spinner>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-toolbar>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-watchlist-watchlist-module-es5.js.map