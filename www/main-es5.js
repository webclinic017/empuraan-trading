(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/ibrahimsefer/Desktop/demo trading app front end/demo-trading-platform-app-frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "1eeg":
    /*!********************************************!*\
      !*** ./src/app/guards/auth-guard.guard.ts ***!
      \********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function eeg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(userService, router) {
          _classCallCheck(this, AuthGuard);

          this.userService = userService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this = this;

            var b;
            this.userService.authenticated.subscribe(function (a) {
              if (!a) {
                _this.router.navigate(['home', 'login']);

                b = false;
              } else b = true;
            });
            return b;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "1fgy":
    /*!*************************************************************!*\
      !*** ./src/app/modals/modal-post/modal-post.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function fgy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 15px !important;\n  }\n\n  ion-text {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLXBvc3QvbW9kYWwtcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0UsMEJBQUE7RUFDSjs7RUFDRTtJQUNFLDBCQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC1wb3N0L21vZGFsLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGlvbi10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi10ZXh0e1xuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "1r9f":
    /*!***************************************************************************!*\
      !*** ./src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ModalWatchlistCeComponent */

    /***/
    function r9f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalWatchlistCeComponent", function () {
        return ModalWatchlistCeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_watchlist_ce_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-watchlist-ce.component.html */
      "gn15");
      /* harmony import */


      var _modal_watchlist_ce_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-watchlist-ce.component.scss */
      "JBwo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/watchlist.service */
      "Tl0h");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");

      var ModalWatchlistCeComponent = /*#__PURE__*/function () {
        function ModalWatchlistCeComponent(modalCtrl, watchlistService, toastCtrl) {
          _classCallCheck(this, ModalWatchlistCeComponent);

          this.modalCtrl = modalCtrl;
          this.watchlistService = watchlistService;
          this.toastCtrl = toastCtrl;
          this.stocks = [];
        }

        _createClass(ModalWatchlistCeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.spinner = false;
            this.stocks = this.selectedWatchlist.stockIds;
            this.watchlistName = this.selectedWatchlist.name;
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalCtrl.dismiss(this.changeInWatchlist);
          }
        }, {
          key: "onEditWatchlist",
          value: function onEditWatchlist() {
            var _this2 = this;

            if (this.watchlistName.trim() != '' && this.watchlistName != null && this.watchlistName != undefined) {
              this.spinner = true;
              this.watchlistName = this.watchlistName.trim();
              this.watchlistService.editWatchlist(this.selectedWatchlist._id, this.watchlistName).subscribe(function (r) {
                _this2.spinner = false;
                _this2.changeInWatchlist = true;

                _this2.presentSuccessToast("Watchlist's name changed to \"".concat(_this2.watchlistName, "\""));

                console.log(r);
              });
            } else this.presentErrorToast('Input field is empty.');
          }
        }, {
          key: "drop",
          value: function drop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.stocks, event.previousIndex, event.currentIndex);
            this.changePosition();
          }
        }, {
          key: "changePosition",
          value: function changePosition() {
            var _this3 = this;

            var stocks = [];

            for (var i = 0; i < this.stocks.length; i++) {
              var s = this.stocks[i];
              stocks.push({
                stockId: s.id,
                position: i
              });
            }

            this.watchlistService.updateWatchlistStocksPositions(this.selectedWatchlist._id, stocks).subscribe(function () {
              return _this3.changeInWatchlist = true;
            });
          }
        }, {
          key: "presentErrorToast",
          value: function presentErrorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: "danger"
                      });

                    case 2:
                      toast = _context.sent;
                      _context.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentSuccessToast",
          value: function presentSuccessToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: "success"
                      });

                    case 2:
                      toast = _context2.sent;
                      _context2.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ModalWatchlistCeComponent;
      }();

      ModalWatchlistCeComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_5__["WatchlistService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      ModalWatchlistCeComponent.propDecorators = {
        selectedWatchlist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ModalWatchlistCeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-watchlist-ce',
        template: _raw_loader_modal_watchlist_ce_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_watchlist_ce_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalWatchlistCeComponent);
      /***/
    },

    /***/
    "3waL":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function waL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC13aXRoZHJhdy1hZGQtZnVuZHMvbW9kYWwtd2l0aGRyYXctYWRkLWZ1bmRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "6cjs":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic-super-tabs/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \****************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function cjs(module, exports, __webpack_require__) {
      var map = {
        "./super-tab-button_2.entry.js": ["UWEh", "common", 0],
        "./super-tab-indicator.entry.js": ["afC3", 1],
        "./super-tab_3.entry.js": ["XRr/", "common", 2]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "6cjs";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "8E9K":
    /*!***************************************************************************!*\
      !*** ./src/app/modals/modal-upload-post/modal-upload-post.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function E9K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  color: black;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px;\n  }\n\n  ion-label, ion-text, p, h5, ion-button, span {\n    font-size: 13px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLXVwbG9hZC1wb3N0L21vZGFsLXVwbG9hZC1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0k7SUFDRSxlQUFBO0VBRUo7O0VBQUU7SUFDRSwwQkFBQTtFQUdKO0FBQ0Y7O0FBREE7RUFDSTtJQUNJLFlBQUE7RUFHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL21vZGFsLXVwbG9hZC1wb3N0L21vZGFsLXVwbG9hZC1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIGNvbG9yOmJsYWNrO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICBpb24tdGl0bGUsIGgze1xuICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCwgaW9uLXRleHQsIHAsIGg1LCBpb24tYnV0dG9uLCBzcGFue1xuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgaW9uLXRpdGxle1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "8hSh":
    /*!*******************************************!*\
      !*** ./src/app/services/stock.service.ts ***!
      \*******************************************/

    /*! exports provided: StockService */

    /***/
    function hSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockService", function () {
        return StockService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var StockService = /*#__PURE__*/function () {
        function StockService(http) {
          _classCallCheck(this, StockService);

          this.http = http;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "stocks/order/";
          this.apiGetStock = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "stocks/";
          this.apiStockStart = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "stocks/start/emit/";
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].socketUrl);
        }

        _createClass(StockService, [{
          key: "listen",
          value: function listen(eventName) {
            var _this4 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
              _this4.socket.on(eventName, function (data) {
                subscriber.next(data);
              });
            });
          }
        }, {
          key: "emit",
          value: function emit(eventName, data) {
            this.socket.emit(eventName, data);
          }
        }, {
          key: "getStock",
          value: function getStock(id) {
            return this.http.get(this.apiGetStock + id);
          }
        }, {
          key: "getStocks",
          value: function getStocks() {
            return this.http.get(this.apiGetStock).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (r) {
              r.data.forEach(function (c) {
                c.isLoaded = true;
              });
              return r;
            }));
          }
        }, {
          key: "startStock",
          value: function startStock(stockId, watchlistId) {
            return this.http.post(this.apiStockStart, {
              stockId: stockId,
              watchlistId: watchlistId
            });
          }
        }, {
          key: "initStocks",
          value: function initStocks() {
            return this.http.post(this.apiUrl + "init", {});
          }
        }, {
          key: "orderStockLimitBuy",
          value: function orderStockLimitBuy(input) {
            return this.http.post(this.apiUrl + "limit/buy", input);
          }
        }, {
          key: "orderStockLimitSell",
          value: function orderStockLimitSell(input) {
            return this.http.post(this.apiUrl + "limit/sell", input);
          }
        }, {
          key: "orderStockMarketBuy",
          value: function orderStockMarketBuy(input) {
            return this.http.post(this.apiUrl + "market/buy", input);
          }
        }, {
          key: "orderStockMarketSell",
          value: function orderStockMarketSell(input) {
            return this.http.post(this.apiUrl + "market/sell", input);
          }
        }, {
          key: "createNewStocks",
          value: function createNewStocks(input) {
            return this.http.post(this.apiUrl + "new", input);
          }
        }]);

        return StockService;
      }();

      StockService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      StockService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      })], StockService);
      /***/
    },

    /***/
    "8jmp":
    /*!*************************************************************************!*\
      !*** ./src/app/modals/modal-edit-order/modal-edit-order.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function jmp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title-column {\n  font-weight: 700;\n  text-align: center;\n}\n\nion-card-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-card-title {\n  font-size: 15px;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n  margin-bottom: 0;\n}\n\nion-card-subtitle {\n  margin-top: 0;\n  font-size: 14px;\n  color: #ababab;\n}\n\n.card-input {\n  border: 1px solid rgba(184, 184, 184, 0.69);\n  color: black;\n  padding: 0 11px !important;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLWVkaXQtb3JkZXIvbW9kYWwtZWRpdC1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksMkNBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvbW9kYWwtZWRpdC1vcmRlci9tb2RhbC1lZGl0LW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWNvbHVtbntcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJkLWhlYWRlcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbmhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjcsIDE2NywgMTY3LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGNvbG9yOiNhYmFiYWI7XG59XG4uY2FyZC1pbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg0LCAxODQsIDE4NCwgMC42OSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDAgMTFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZToxOHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "8tei":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>Create watchlist</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-item class=\"ion-margin-horizontal ion-no-padding\">\n\t\t<ion-label position=\"floating\">Name of watchlist</ion-label>\n\t\t<ion-input [(ngModel)]=\"watchlistName\"></ion-input>\n\t</ion-item>\n\t<ion-button class=\"ion-margin\" expand=\"block\" (click)=\"onCreateWatchlist()\">\n\t\tCreate watchlist\n\t\t<ion-spinner name=\"lines-small\" *ngIf=\"spinner\"></ion-spinner>\n\t</ion-button>\n\t<div cdkDropList class=\"drag-list\" (cdkDropListDropped)=\"drop($event)\" *ngIf=\"watchlists.length > 0\">\n\t\t<div class=\"drag-box\" *ngFor=\"let watchlist of watchlists\" cdkDrag>\n\t\t\t<ion-icon name=\"reorder-three-outline\" class=\"ion-margin-end\"></ion-icon>\n\t\t\t<span>{{ watchlist.name }}</span>\n\t\t</div>\n\t</div>\n\t<div style=\"width: 100%; display: flex; justify-content: center; align-items: center;\">\n\t\t<ion-spinner name=\"lines-small\" *ngIf=\"!dataLoaded\" class=\"ion-margin\"></ion-spinner>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "976h":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title slot=\"start\">{{ isAdd ? \"Add funds\" : \"Withdraw funds\" }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<form #fundsForm=\"ngForm\" (ngSubmit)=\"submitFundsRequest(fundsForm.value)\">\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label>Amount</ion-label>\n\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\tmax=\"{{ isAdd ? 999999 : user.balance.availableBal }}\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\tname=\"amount\"\n\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-button *ngIf=\"isAdd\" class=\"ion-margin-vertical\" style=\"height: 50px\" expand=\"block\" color=\"success\" type=\"submit\">\n\t\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t\t\t\t\tAdd funds\n          </ion-button>\n          <ion-button *ngIf=\"!isAdd\" class=\"ion-margin-vertical\" style=\"height: 50px\" expand=\"block\" type=\"submit\">\n\t\t\t\t\t\t<ion-icon name=\"refresh-outline\"></ion-icon>\n\t\t\t\t\t\tWithdraw\n\t\t\t\t\t</ion-button>\n\t\t\t\t</form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<!-- <ion-row *ngIf=\"isAdd\">\n\t\t\t<ion-col>\n\t\t\t\t<form #addForm=\"ngForm\" (ngSubmit)=\"add(addForm.value)\">\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label>Amount</ion-label>\n\t\t\t\t\t\t<ion-input type=\"number\" min=\"0\" max=\"9999999\" required ngModel name=\"amount\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-button class=\"ion-margin-vertical\" style=\"height: 50px\" expand=\"block\" color=\"success\" type=\"submit\">\n\t\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t\t\t\t\tAdd funds\n\t\t\t\t\t</ion-button>\n\t\t\t\t</form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"!isAdd\">\n\t\t\t<ion-col>\n\t\t\t\t<form #withdrawForm=\"ngForm\" (ngSubmit)=\"withdraw(withdrawForm)\">\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label>Amount</ion-label>\n\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\tmax=\"{{ user.balance.availableBal }}\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\tname=\"amount\"\n\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-button class=\"ion-margin-vertical\" style=\"height: 50px\" expand=\"block\" type=\"submit\">\n\t\t\t\t\t\t<ion-icon name=\"refresh-outline\"></ion-icon>\n\t\t\t\t\t\tWithdraw\n\t\t\t\t\t</ion-button>\n\t\t\t\t</form>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "BCkd":
    /*!**********************************************!*\
      !*** ./src/app/services/marubozu.service.ts ***!
      \**********************************************/

    /*! exports provided: MarubozuService */

    /***/
    function BCkd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarubozuService", function () {
        return MarubozuService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var MarubozuService = /*#__PURE__*/function () {
        function MarubozuService(http) {
          _classCallCheck(this, MarubozuService);

          this.http = http;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "marbozzu/";
          this.activeTab = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(MarubozuService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get(this.apiUrl);
          }
        }, {
          key: "get",
          value: function get(key) {
            return this.http.get(this.apiUrl + key);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.apiUrl + "del/".concat(id));
          }
        }, {
          key: "createBlogWithBlob",
          value: function createBlogWithBlob(title, content, blobData, ext, image) {
            var formData = new FormData();
            formData.append("image", new Blob([blobData.url]), "img.".concat(ext));
            formData.append("title", title);
            formData.append("content", content);
            return this.http.post("".concat(this.apiUrl, "blog"), formData); // return this.http.post(this.apiUrl + 'blog', {title, content, image})
          }
        }, {
          key: "createBlogWithFile",
          value: function createBlogWithFile(title, content, file) {
            var formData = new FormData();
            var ext = file.name.split(".").pop();
            formData.append("image", file, "".concat(file.name, ".").concat(ext));
            formData.append("title", title);
            formData.append("content", content);
            return this.http.post("".concat(this.apiUrl, "blog"), formData); // return this.http.post(this.apiUrl + 'blog', {title, content, image})
          }
        }, {
          key: "createTutorial",
          value: function createTutorial(title, embededurl) {
            return this.http.post(this.apiUrl + "tutorial", {
              title: title,
              embededurl: embededurl
            });
          }
        }, {
          key: "createWithBlob",
          value: function createWithBlob(title, content, stockname, key, blobData, name, ext) {
            var formData = new FormData();
            if (blobData != null || blobData != undefined) formData.append("image", blobData, "".concat(name, ".").concat(ext));
            formData.append("title", title);
            formData.append("content", content);
            if (key != 'blog') formData.append("stockname", stockname);
            return this.http.post("".concat(this.apiUrl).concat(key), formData); // return this.http.post(this.apiUrl + 'blog', {title, content, image})
          }
        }, {
          key: "createWithFile",
          value: function createWithFile(title, content, stockname, key, file) {
            var formData = new FormData();
            var ext = file.name.split(".").pop();
            formData.append("image", file, "".concat(file.name, ".").concat(ext));
            formData.append("title", title);
            formData.append("content", content);
            if (key != 'blog') formData.append("stockname", stockname);
            return this.http.post("".concat(this.apiUrl).concat(key), formData); // return this.http.post(this.apiUrl + key, {title, content, stockname, image})
          }
        }]);

        return MarubozuService;
      }();

      MarubozuService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      MarubozuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      })], MarubozuService);
      /***/
    },

    /***/
    "Cd/a":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-watchlist/modal-watchlist.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CdA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>Search Companies</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content vertical=\"top\" style=\"display: flex; flex-direction: column; align-items: center;\">\n\t<ion-searchbar showCancelButton=\"focus\" (ionChange)=\"filter($event.detail.value)\"></ion-searchbar>\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let s of filteredData || stocks\">\n\t\t\t<ion-label>\n\t\t\t\t<div style=\"display: flex; align-items: center;\">\n\t\t\t\t\t<span style=\"padding:5px 0\">{{ s.companyName }}</span>\n\t\t\t\t\t<ion-spinner *ngIf=\"s.isLoaded == false\" name=\"lines-small\" class=\"ion-padding-start\"></ion-spinner>\n\t\t\t\t</div>\n\t\t\t</ion-label>\n\t\t\t<ion-checkbox\n\t\t\t\tslot=\"end\"\n\t\t\t\t[checked]=\"seeIfChecked(s)\"\n\t\t\t\t(click)=\"onSelect($event, s)\"\n\t\t\t></ion-checkbox>\n\t\t</ion-item>\n\t</ion-list>\n\t<div style=\"width: 100%; display: flex; align-items: center; justify-content: center;\">\n\t\t<ion-spinner *ngIf=\"spinner\" name=\"lines-small\" class=\"ion-margin\"></ion-spinner>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "EqF1":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-post/modal-post.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EqF1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>{{ post.title }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content style=\"display: flex; flex-direction: column\">\n\t<!-- <h4 class=\"ion-padding-horizontal\"></h4> -->\n\t<ion-img *ngIf=\"post.image != null || post.image != undefined\" [src]=\"post.image\" class=\"ion-margin\"></ion-img>\n\t<span class=\"ion-padding\">{{ post.content }}</span>\n</ion-content>\n";
      /***/
    },

    /***/
    "Ey9a":
    /*!***********************************************************************************!*\
      !*** ./src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function Ey9a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".drag-list {\n  width: 90%;\n  border-top: solid 1px #ccc;\n  border-bottom: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.drag-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.drag-box:last-child {\n  border: none;\n}\n\n.drag-list.cdk-drop-list-dragging .drag-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nion-title {\n  color: black;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-button, span, h5 {\n    font-size: 13px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLWVkaXQtd2F0Y2hsaXN0cy9tb2RhbC1lZGl0LXdhdGNobGlzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxVQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0g7O0FBRUM7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0g7O0FBRUM7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFDSDs7QUFJQztFQUNFLFVBQUE7QUFESDs7QUFJQztFQUNFLHNEQUFBO0FBREg7O0FBSUM7RUFDRSxZQUFBO0FBREg7O0FBSUM7RUFDRSxzREFBQTtBQURIOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSwwQkFBQTtFQUVGOztFQUFBO0lBQ0UsMEJBQUE7RUFHRjtBQUNGOztBQURBO0VBQ0U7SUFDSSxZQUFBO0VBR0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC1lZGl0LXdhdGNobGlzdHMvbW9kYWwtZWRpdC13YXRjaGxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYWctbGlzdCB7XG4gICB3aWR0aDogOTAlO1xuICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNjY2M7XG4gICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIG1hcmdpbjogMCBhdXRvO1xuIH1cbiBcbiAuZHJhZy1ib3gge1xuICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgY3Vyc29yOiBtb3ZlO1xuICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICBmb250LXNpemU6IDE0cHg7XG4gfVxuIFxuIC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiB9XG4gXG4gLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgIG9wYWNpdHk6IDA7XG4gfVxuIFxuIC5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuIH1cbiBcbiAuZHJhZy1ib3g6bGFzdC1jaGlsZCB7XG4gICBib3JkZXI6IG5vbmU7XG4gfVxuIFxuIC5kcmFnLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZHJhZy1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuIH1cbmlvbi10aXRsZXtcbiAgY29sb3I6YmxhY2s7XG59XG5pb24taWNvbntcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgaW9uLXRpdGxlLCBoM3tcbiAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1sYWJlbCwgaW9uLWJ1dHRvbiwgc3BhbiwgaDV7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBpb24tdGl0bGV7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "JBwo":
    /*!*****************************************************************************!*\
      !*** ./src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function JBwo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".drag-list {\n  width: 90%;\n  border-top: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.drag-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc !important;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.drag-box:last-child {\n  border: none;\n}\n\n.drag-list.cdk-drop-list-dragging .drag-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nion-title {\n  color: black;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-button, span, h5 {\n    font-size: 13px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLXdhdGNobGlzdC1jZS9tb2RhbC13YXRjaGxpc3QtY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBQ0Y7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxzREFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0Usc0RBQUE7QUFERjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsMEJBQUE7RUFFRjs7RUFBQTtJQUNFLDBCQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFO0lBQ0ksWUFBQTtFQUdKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvbW9kYWwtd2F0Y2hsaXN0LWNlL21vZGFsLXdhdGNobGlzdC1jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmFnLWxpc3Qge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmRyYWctYm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYyAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZHJhZy1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRyYWctbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kcmFnLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbmlvbi10aXRsZXtcbiAgY29sb3I6YmxhY2s7XG59XG5pb24taWNvbntcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgaW9uLXRpdGxlLCBoM3tcbiAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1sYWJlbCwgaW9uLWJ1dHRvbiwgc3BhbiwgaDV7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBpb24tdGl0bGV7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "K/jU":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-fp-email/modal-fp-email.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>Forgot password</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\t<ion-item class=\"ion-margin-bottom ion-no-padding\">\n\t\t<ion-label>Email</ion-label>\n\t\t<ion-input [(ngModel)]=\"email\" type=\"email\"></ion-input>\n\t</ion-item>\n\t<ion-button size=\"block\" (click)=\"emailCheck(email)\">\n\t\tSend me the code\n\t\t<ion-spinner name=\"lines-small\" *ngIf=\"spinner\"></ion-spinner>\n\t</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "K2jm":
    /*!*********************************************************************************!*\
      !*** ./src/app/modals/modal-change-password/modal-change-password.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ModalChangePasswordComponent */

    /***/
    function K2jm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalChangePasswordComponent", function () {
        return ModalChangePasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-change-password.component.html */
      "y2a+");
      /* harmony import */


      var _modal_change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-change-password.component.scss */
      "W723");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var ModalChangePasswordComponent = /*#__PURE__*/function () {
        function ModalChangePasswordComponent(modalCtrl, userService, toastCtrl) {
          _classCallCheck(this, ModalChangePasswordComponent);

          this.modalCtrl = modalCtrl;
          this.userService = userService;
          this.toastCtrl = toastCtrl;
        }

        _createClass(ModalChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.spinner = false;
            this.userService.authenticated.subscribe(function (u) {
              return _this5.user = u.user;
            });
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "changePassword",
          value: function changePassword(input) {
            var _this6 = this;

            this.spinner = true;

            if (input.newPassword != "" || input.confirmPassword != "") {
              if (input.newPassword == input.confirmPassword) {
                var email = this.email != null ? this.email : this.user.email;
                this.userService.changePassword(email, input.newPassword).subscribe(function () {}, function (err) {
                  _this6.spinner = false;

                  _this6.presentErrorToast(err);
                }, function () {
                  _this6.spinner = false;

                  _this6.presentSuccessToast('Password changed successfuly.');

                  _this6.dismissModal();
                });
              } else {
                this.spinner = false;
                this.presentErrorToast('New passwords don\'t match.');
              }
            } else {
              this.spinner = false;
              this.presentErrorToast('Something is missing.');
            }
          }
        }, {
          key: "presentErrorToast",
          value: function presentErrorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: "danger"
                      });

                    case 2:
                      toast = _context3.sent;
                      _context3.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentSuccessToast",
          value: function presentSuccessToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: "success"
                      });

                    case 2:
                      toast = _context4.sent;
                      _context4.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return ModalChangePasswordComponent;
      }();

      ModalChangePasswordComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      ModalChangePasswordComponent.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['email']
        }]
      };
      ModalChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-change-password",
        template: _raw_loader_modal_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalChangePasswordComponent);
      /***/
    },

    /***/
    "Kmqd":
    /*!*********************************************************************!*\
      !*** ./src/app/modals/modal-fp-email/modal-fp-email.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function Kmqd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC1mcC1lbWFpbC9tb2RhbC1mcC1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "KwcL":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function KwcL(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["jDxf", 46],
        "./pwa-camera-modal-instance.entry.js": ["37vE", 47],
        "./pwa-camera-modal.entry.js": ["cJxf", 48],
        "./pwa-camera.entry.js": ["eGHz", 49],
        "./pwa-toast.entry.js": ["fHjd", 50]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "KwcL";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "LX2U":
    /*!***********************************************************************!*\
      !*** ./src/app/modals/modal-edit-order/modal-edit-order.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ModalEditOrderComponent */

    /***/
    function LX2U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalEditOrderComponent", function () {
        return ModalEditOrderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_edit_order_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-edit-order.component.html */
      "TSKy");
      /* harmony import */


      var _modal_edit_order_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-edit-order.component.scss */
      "8jmp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/order.service */
      "kVqo");

      var ModalEditOrderComponent = /*#__PURE__*/function () {
        function ModalEditOrderComponent(modalCtrl, orderService) {
          _classCallCheck(this, ModalEditOrderComponent);

          this.modalCtrl = modalCtrl;
          this.orderService = orderService;
        }

        _createClass(ModalEditOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissModal",
          value: function dismissModal(change) {
            this.modalCtrl.dismiss(change);
          }
        }, {
          key: "savePosition",
          value: function savePosition() {
            var _this7 = this;

            this.position != null && this.orderService.updateOrder(this.position.id, this.position.target, this.position.stoploss).subscribe(function () {}, function () {}, function () {
              return _this7.dismissModal(true);
            });
          }
        }, {
          key: "sellPosition",
          value: function sellPosition() {
            var _this8 = this;

            this.position != null && this.orderService.exitPosition(this.position.id).subscribe(function () {}, function () {}, function () {
              return _this8.dismissModal(true);
            });
          }
        }, {
          key: "savePending",
          value: function savePending() {
            var _this9 = this;

            this.pending != null && this.orderService.updateOrder(this.pending.id, this.pending.target, this.pending.stoploss).subscribe(function () {}, function () {}, function () {
              return _this9.dismissModal(true);
            });
          }
        }]);

        return ModalEditOrderComponent;
      }();

      ModalEditOrderComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
        }];
      };

      ModalEditOrderComponent.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        pending: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ModalEditOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-edit-order',
        template: _raw_loader_modal_edit_order_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_edit_order_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalEditOrderComponent);
      /***/
    },

    /***/
    "N+8n":
    /*!***********************************************************!*\
      !*** ./src/app/modals/modal-post/modal-post.component.ts ***!
      \***********************************************************/

    /*! exports provided: ModalPostComponent */

    /***/
    function N8n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalPostComponent", function () {
        return ModalPostComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-post.component.html */
      "EqF1");
      /* harmony import */


      var _modal_post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-post.component.scss */
      "1fgy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ModalPostComponent = /*#__PURE__*/function () {
        function ModalPostComponent(modalCtrl) {
          _classCallCheck(this, ModalPostComponent);

          this.modalCtrl = modalCtrl;
        }

        _createClass(ModalPostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.post.image);
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalCtrl.dismiss();
          }
        }]);

        return ModalPostComponent;
      }();

      ModalPostComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      ModalPostComponent.propDecorators = {
        post: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ModalPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-post',
        template: _raw_loader_modal_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalPostComponent);
      /***/
    },

    /***/
    "Nbj3":
    /*!*********************************************************************!*\
      !*** ./src/app/modals/modal-watchlist/modal-watchlist.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ModalWatchlistComponent */

    /***/
    function Nbj3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalWatchlistComponent", function () {
        return ModalWatchlistComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_watchlist_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-watchlist.component.html */
      "Cd/a");
      /* harmony import */


      var _modal_watchlist_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-watchlist.component.scss */
      "dUkv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/stock.service */
      "8hSh");
      /* harmony import */


      var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/watchlist.service */
      "Tl0h");

      var ModalWatchlistComponent = /*#__PURE__*/function () {
        function ModalWatchlistComponent(modalCtrl, watchlistService, stockService) {
          _classCallCheck(this, ModalWatchlistComponent);

          this.modalCtrl = modalCtrl;
          this.watchlistService = watchlistService;
          this.stockService = stockService;
        }

        _createClass(ModalWatchlistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.i = 0;
            this.spinner = true;
            this.stockService.getStocks().subscribe(function (s) {
              _this10.stocks = s.data;
              _this10.spinner = false;
            });
            this.watchlistService.getWatchlist(this.selectedWatchlist).subscribe(function (w) {
              _this10.sWatchlist = w.data;
            });
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            var v = this.changeOfWatchlist;
            this.changeOfWatchlist = false;
            this.modalCtrl.dismiss(v);
          }
        }, {
          key: "onSelect",
          value: function onSelect(event, stock) {
            var _this11 = this;

            var e = event.detail.checked;

            if (e != null || e != undefined) {
              var sIndex = this.stocks.indexOf(this.stocks.find(function (s) {
                return s._id == stock._id;
              }));
              this.stocks[sIndex].isLoaded = false;

              if (e == true) {
                this.watchlistService.addToWatchlist(this.selectedWatchlist, stock._id).subscribe(function () {
                  _this11.stocks[sIndex].isLoaded = true;
                });
              } else if (e == false) {
                this.watchlistService.removeFromWatchlist(this.selectedWatchlist, stock._id).subscribe(function () {
                  _this11.stocks[sIndex].isLoaded = true;
                });
              }

              this.changeOfWatchlist = true;
            }
          }
        }, {
          key: "filter",
          value: function filter(filterValue) {
            this.filteredData = this.stocks.filter(function (stock) {
              return stock.companyName.toLowerCase().includes(filterValue.toLowerCase());
            });
          }
        }, {
          key: "seeIfChecked",
          value: function seeIfChecked(stock) {
            var _a, _b;

            if (((_a = this.sWatchlist) === null || _a === void 0 ? void 0 : _a.stockIds.length) > 0) {
              var v = (_b = this.sWatchlist) === null || _b === void 0 ? void 0 : _b.stockIds.find(function (s) {
                return s.id == stock._id;
              });

              if (v != null || v != undefined) {
                return true;
              }
            } else return false;
          }
        }]);

        return ModalWatchlistComponent;
      }();

      ModalWatchlistComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_6__["WatchlistService"]
        }, {
          type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"]
        }];
      };

      ModalWatchlistComponent.propDecorators = {
        selectedWatchlist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ModalWatchlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-watchlist",
        template: _raw_loader_modal_watchlist_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_watchlist_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalWatchlistComponent);
      /***/
    },

    /***/
    "OtLC":
    /*!*********************************************************************************!*\
      !*** ./src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function OtLC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  background-color: #e3e3e3;\n}\n\n.subtitle, .subtitle ion-label {\n  padding-left: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n}\n\n.subtitle h5 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 400;\n  font-size: 15px;\n}\n\nhr {\n  border-top: 1px solid rgba(167, 167, 167, 0.5) !important;\n  height: 1px !important;\n  width: 100% !important;\n  display: block !important;\n  font-size: 2em !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n.table-title {\n  font-size: 17px;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\nth {\n  font-size: 16px;\n  color: #a2a2a2;\n  font-weight: 400;\n}\n\ntd {\n  font-size: 15px;\n}\n\nion-title {\n  color: black;\n}\n\n.buy-sell-btn {\n  height: 50px;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title, h3 {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-select, ion-select-option, p, h5 {\n    font-size: 13px !important;\n  }\n\n  .buy-sell-btn {\n    height: 40px;\n    font-size: 15px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2J1eS1zZWxsLW1vZGFsLXBvcHVwL2J1eS1zZWxsLW1vZGFsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtBQVNKOztBQVBBO0VBQ0k7SUFDSSwwQkFBQTtFQVVOOztFQVJFO0lBQ0ksMEJBQUE7RUFXTjs7RUFURTtJQUNJLFlBQUE7SUFDQSwwQkFBQTtFQVlOO0FBQ0Y7O0FBVkE7RUFDSTtJQUNJLFlBQUE7RUFZTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2J1eS1zZWxsLW1vZGFsLXBvcHVwL2J1eS1zZWxsLW1vZGFsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcbn1cbi5zdWJ0aXRsZSwgLnN1YnRpdGxlIGlvbi1sYWJlbHtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN1YnRpdGxlIGg1e1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbmhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjcsIDE2NywgMTY3LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLnRhYmxlLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG50aHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNhMmEyYTI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbnRke1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi10aXRsZXtcbiAgICBjb2xvcjpibGFjaztcbn1cbi5idXktc2VsbC1idG57XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICBpb24tdGl0bGUsIGgze1xuICAgICAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIGlvbi1zZWxlY3QsIGlvbi1zZWxlY3Qtb3B0aW9uLCBwLCBoNXtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5idXktc2VsbC1idG57XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOjE1cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICBpb24tdGl0bGV7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/user.service */
      "qfBg");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"],
          Network = _capacitor_core__WEBP.Network,
          LocalNotifications = _capacitor_core__WEBP.LocalNotifications,
          App = _capacitor_core__WEBP.App;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, alertController, location, router, userService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.alertController = alertController;
          this.location = location;
          this.router = router;
          this.userService = userService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.initializeApp();
                      this.connectionLostEvent();
                      this.backButtonEvent();

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "connectionLostEvent",
          value: function connectionLostEvent() {
            var _this12 = this;

            this.networkListener = Network.addListener('networkStatusChange', function (status) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        this.networkStatus = status;

                        if (this.networkStatus.connected) {
                          _context6.next = 4;
                          break;
                        }

                        _context6.next = 4;
                        return this.connectionLostNotification();

                      case 4:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            });
          }
        }, {
          key: "backButtonEvent",
          value: function backButtonEvent() {
            var _this13 = this;

            this.platform.backButton.subscribeWithPriority(10, function () {
              if (_this13.router.url == "/home/dashboard") _this13.backButtonAlert();else _this13.location.back();
            });
          }
        }, {
          key: "backButtonAlert",
          value: function backButtonAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        message: 'You\'ve just pressed the back button',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Close app',
                          handler: function handler() {
                            App.exitApp();
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "connectionLostNotification",
          value: function connectionLostNotification() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return LocalNotifications.schedule({
                        notifications: [{
                          id: 1,
                          title: 'You\'ve lost internet connection',
                          body: 'Any progress accomplished during this time will be lost.'
                        }]
                      });

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this14 = this;

            this.platform.ready().then(function () {
              _this14.statusBar.styleDefault();

              _this14.splashScreen.hide();

              _this14.userService.authenticated.subscribe(function (a) {
                a ? _this14.router.navigate(['home', 'dashboard']) : _this14.router.navigate(['home', 'login']);
              });
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }];
      };

      AppComponent.propDecorators = {
        routerOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"], {
            "static": false
          }]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TSKy":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-edit-order/modal-edit-order.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TSKy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>{{ position != null ? \"Edit Position\" : \"Edit Pending\" }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col class=\"title-column\">\n\t\t\t\t<ion-label class=\"ion-padding\" *ngIf=\"position != null\">{{ position.name }}</ion-label>\n\t\t\t\t<ion-label class=\"ion-padding\" *ngIf=\"pending != null\">{{ pending.name }}</ion-label>\n\t\t\t\t<hr>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"position != null\">\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-card-title>Stop-loss</ion-card-title>\n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-card-content>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\tclass=\"card-input\"\n\t\t\t\t\t\tname=\"stopLoss\"\n\t\t\t\t\t\t[(ngModel)]=\"position.stoploss\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-card-title>Target</ion-card-title>\n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-card-content>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\tclass=\"card-input\"\n\t\t\t\t\t\tname=\"target\"\n\t\t\t\t\t\t[(ngModel)]=\"position.target\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"pending != null\">\n\t\t\t<ion-col>\n\t\t\t\t<div *ngIf=\"!pending.isStopLoss\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Price</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\tclass=\"card-input\"\n\t\t\t\t\t\t\tname=\"target\"\n\t\t\t\t\t\t\t[(ngModel)]=\"pending.price\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"pending.isStopLoss\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>Stop-loss</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-input\n\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\tclass=\"card-input\"\n\t\t\t\t\t\t\tname=\"stopLoss\"\n\t\t\t\t\t\t\t[(ngModel)]=\"pending.stoploss\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t></ion-input>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n<ion-footer class=\"ion-padding\">\n\t<div *ngIf=\"position != null\">\n\t\t<ion-button expand=\"block\" color=\"success\" (click)=\"savePosition()\">\n\t\t\t<ion-icon name=\"save-outline\" style=\"padding-right: 5px\"></ion-icon>\n\t\t\tSave\n\t\t</ion-button>\n\t\t<ion-button expand=\"block\" color=\"danger\" (click)=\"sellPosition()\">\n\t\t\t<ion-icon name=\"trash-outline\" style=\"padding-right: 5px\"></ion-icon>\n\t\t\tSell\n\t\t</ion-button>\n\t</div>\n\t<div *ngIf=\"pending != null\">\n\t\t<ion-button expand=\"block\" color=\"success\" (click)=\"savePending()\">\n\t\t\t<ion-icon name=\"save-outline\" style=\"padding-right: 5px\"></ion-icon>\n\t\t\tSave\n\t\t</ion-button>\n\t</div>\n</ion-footer>\n";
      /***/
    },

    /***/
    "Tl0h":
    /*!***********************************************!*\
      !*** ./src/app/services/watchlist.service.ts ***!
      \***********************************************/

    /*! exports provided: WatchlistService */

    /***/
    function Tl0h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchlistService", function () {
        return WatchlistService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var WatchlistService = /*#__PURE__*/function () {
        function WatchlistService(http) {
          _classCallCheck(this, WatchlistService);

          this.http = http;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'watchlist/';
        }

        _createClass(WatchlistService, [{
          key: "getWatchlist",
          value: function getWatchlist(id) {
            return this.http.get(this.apiUrl + id);
          }
        }, {
          key: "getSimulatedWatchlists",
          value: function getSimulatedWatchlists() {
            return this.http.get(this.apiUrl + 'filter/simulated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) {
              r.data.forEach(function (w) {
                w.stockIds.forEach(function (s) {
                  s.isLoaded = true;
                });
              });
              return r;
            }));
          }
        }, {
          key: "getRealtimeWatchlists",
          value: function getRealtimeWatchlists() {
            return this.http.get(this.apiUrl + 'filter/realTime').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) {
              r.data.forEach(function (w) {
                w.stockIds.forEach(function (s) {
                  s.isLoaded = true;
                });
              });
              return r;
            }));
          }
        }, {
          key: "addToWatchlist",
          value: function addToWatchlist(watchlistId, stockId) {
            return this.http.put(this.apiUrl + 'add/stock', {
              watchlistId: watchlistId,
              stockId: stockId
            });
          }
        }, {
          key: "removeFromWatchlist",
          value: function removeFromWatchlist(watchlistId, stockId) {
            return this.http.put(this.apiUrl + 'stock/remove', {
              watchlistId: watchlistId,
              stockId: stockId
            });
          }
        }, {
          key: "createWatchlist",
          value: function createWatchlist(name) {
            return this.http.post(this.apiUrl + 'new', {
              name: name
            });
          }
        }, {
          key: "updateWatchlistPositions",
          value: function updateWatchlistPositions(list) {
            return this.http.put(this.apiUrl + 'update/watchlist/positions', {
              list: list
            });
          }
        }, {
          key: "updateWatchlistStocksPositions",
          value: function updateWatchlistStocksPositions(watchlistId, stocks) {
            return this.http.put(this.apiUrl + 'update/watchlist/stocks/positions', {
              watchlistId: watchlistId,
              stocks: stocks
            });
          }
        }, {
          key: "editWatchlist",
          value: function editWatchlist(watchlistId, name) {
            return this.http.put(this.apiUrl + 'update/watchlist/name', {
              watchlistId: watchlistId,
              name: name
            });
          }
        }, {
          key: "deleteWatchlist",
          value: function deleteWatchlist(id) {
            return this.http["delete"](this.apiUrl + id);
          }
        }, {
          key: "moveInArray",
          value: function moveInArray(arr, prevIndex, currIndex) {
            if (currIndex >= arr.length) {
              var k = currIndex - arr.length + 1;

              while (k--) {
                arr.push(undefined);
              }
            }

            arr.splice(currIndex, 0, arr.splice(prevIndex, 1)[0]);
            return arr;
          }
        }]);

        return WatchlistService;
      }();

      WatchlistService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      WatchlistService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], WatchlistService);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "W723":
    /*!***********************************************************************************!*\
      !*** ./src/app/modals/modal-change-password/modal-change-password.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function W723(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC1jaGFuZ2UtcGFzc3dvcmQvbW9kYWwtY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: tokenGetter, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
        return tokenGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      "zzaN");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "/XPu");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modals/modal-watchlist/modal-watchlist.component */
      "Nbj3");
      /* harmony import */


      var _modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./modals/modal-watchlist-ce/modal-watchlist-ce.component */
      "1r9f");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./modals/buy-sell-modal-popup/buy-sell-modal-popup.component */
      "lNYK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "KqBo");
      /* harmony import */


      var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/File/ngx */
      "B7Vy");
      /* harmony import */


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      "eHpL");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "G769");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./modals/modal-edit-watchlists/modal-edit-watchlists.component */
      "rdK+");
      /* harmony import */


      var _modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./modals/modal-edit-order/modal-edit-order.component */
      "LX2U");
      /* harmony import */


      var _modals_modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./modals/modal-change-password/modal-change-password.component */
      "K2jm");
      /* harmony import */


      var _modals_modal_withdraw_add_funds_modal_withdraw_add_funds_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component */
      "whIa");
      /* harmony import */


      var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./interceptors/jwt.interceptor */
      "hzlp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "up+p");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./modals/modal-upload-post/modal-upload-post.component */
      "x7KT");
      /* harmony import */


      var _modals_modal_fp_code_check_modal_fp_code_check_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./modals/modal-fp-code-check/modal-fp-code-check.component */
      "bzO4");
      /* harmony import */


      var _modals_modal_fp_email_modal_fp_email_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./modals/modal-fp-email/modal-fp-email.component */
      "nJHT");
      /* harmony import */


      var _modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./modals/modal-post/modal-post.component */
      "N+8n");

      function tokenGetter() {
        return localStorage.getItem("token");
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _modals_modal_watchlist_modal_watchlist_component__WEBPACK_IMPORTED_MODULE_14__["ModalWatchlistComponent"], _modals_modal_watchlist_ce_modal_watchlist_ce_component__WEBPACK_IMPORTED_MODULE_15__["ModalWatchlistCeComponent"], _modals_buy_sell_modal_popup_buy_sell_modal_popup_component__WEBPACK_IMPORTED_MODULE_17__["BuySellModalPopupComponent"], _modals_modal_edit_watchlists_modal_edit_watchlists_component__WEBPACK_IMPORTED_MODULE_27__["ModalEditWatchlistsComponent"], _modals_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_28__["ModalEditOrderComponent"], _modals_modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_29__["ModalChangePasswordComponent"], _modals_modal_withdraw_add_funds_modal_withdraw_add_funds_component__WEBPACK_IMPORTED_MODULE_30__["ModalWithdrawAddFundsComponent"], _modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_35__["ModalUploadPostComponent"], _modals_modal_fp_code_check_modal_fp_code_check_component__WEBPACK_IMPORTED_MODULE_36__["ModalFpCodeCheckComponent"], _modals_modal_fp_email_modal_fp_email_component__WEBPACK_IMPORTED_MODULE_37__["ModalFpEmailComponent"], _modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_38__["ModalPostComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_12__["SuperTabsModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__["DragDropModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_19__["NgxChartsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_24__["IonicStorageModule"].forRoot(), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: [src_environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].apiUrl],
            disallowedRoutes: [src_environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].apiUrl + "auth"]
          }
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"]],
        exports: [],
        providers: [_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_20__["Camera"], _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_21__["File"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_22__["WebView"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_23__["FilePath"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Clipboard"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_33__["GooglePlus"], Storage, _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_34__["ScreenOrientation"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_31__["JwtInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "bzO4":
    /*!*****************************************************************************!*\
      !*** ./src/app/modals/modal-fp-code-check/modal-fp-code-check.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ModalFpCodeCheckComponent */

    /***/
    function bzO4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalFpCodeCheckComponent", function () {
        return ModalFpCodeCheckComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_fp_code_check_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-fp-code-check.component.html */
      "jYAL");
      /* harmony import */


      var _modal_fp_code_check_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-fp-code-check.component.scss */
      "f0yJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal-change-password/modal-change-password.component */
      "K2jm");

      var ModalFpCodeCheckComponent = /*#__PURE__*/function () {
        function ModalFpCodeCheckComponent(modalCtrl, userService, toastCtrl) {
          _classCallCheck(this, ModalFpCodeCheckComponent);

          this.modalCtrl = modalCtrl;
          this.userService = userService;
          this.toastCtrl = toastCtrl;
        }

        _createClass(ModalFpCodeCheckComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.spinner = false;
            this.code = "";
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "codeCheck",
          value: function codeCheck(email, code) {
            var _this15 = this;

            this.spinner = true;

            if (typeof code != "undefined" && code) {
              this.userService.checkCodeValid(email, code).subscribe(function (r) {
                _this15.openChangePasswordModal(email);

                _this15.dismissModal();

                _this15.spinner = false;
              }, function () {
                _this15.presentErrorToast("Code is incorrect.");

                _this15.spinner = false;
              });
            } else {
              this.presentErrorToast("Enter the code you've received.");
              this.spinner = false;
            }
          }
        }, {
          key: "openChangePasswordModal",
          value: function openChangePasswordModal(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var modal;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.modalCtrl.create({
                        component: _modal_change_password_modal_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ModalChangePasswordComponent"],
                        componentProps: {
                          email: email
                        }
                      });

                    case 2:
                      modal = _context9.sent;
                      _context9.next = 5;
                      return modal.present();

                    case 5:
                      return _context9.abrupt("return", _context9.sent);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "presentErrorToast",
          value: function presentErrorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var modal;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        color: "danger",
                        duration: 2500
                      });

                    case 2:
                      modal = _context10.sent;
                      _context10.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return ModalFpCodeCheckComponent;
      }();

      ModalFpCodeCheckComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      ModalFpCodeCheckComponent.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ["email"]
        }]
      };
      ModalFpCodeCheckComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-fp-code-check",
        template: _raw_loader_modal_fp_code_check_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_fp_code_check_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalFpCodeCheckComponent);
      /***/
    },

    /***/
    "ck4M":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-upload-post/modal-upload-post.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ck4M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>Upload post</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<form #postForm=\"ngForm\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Post title</ion-label>\n\t\t\t\t\t\t<ion-input name=\"title\" ngModel required maxlength=100></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row *ngIf=\"blog == false\">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Stock Name</ion-label>\n\t\t\t\t\t\t<ion-input name=\"stockname\" ngModel required maxlength=100></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-label position=\"floating\">Content</ion-label>\n\t\t\t\t\t\t<ion-textarea name=\"content\" ngModel required maxlength=255></ion-textarea>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-button color=\"success\" class=\"post-button\" expand=\"block\" (click)=\"selectImageSource()\">\n\t\t\t\t\t\t<ion-icon name=\"attach-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-button expand=\"block\" class=\"post-button\" (click)=\"uploadFile(postForm)\">\n\t\t\t\t\t\tPost\n\t\t\t\t\t\t<ion-spinner name=\"lines-small\" class=\"ion-padding-start\" *ngIf=\"spinner\"></ion-spinner>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" *ngFor=\"let img of images; let i = index\" class=\"ion-text-center\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<!-- <p>{{ img.createdAt | date: \"short\" }}</p> -->\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-img [src]=\"img.url\" [alt]=\"img\"></ion-img>\n\t\t\t\t\t<ion-fab vertical=\"bottom\" horizontal=\"end\">\n\t\t\t\t\t\t<ion-fab-button color=\"danger\" size=\"small\" (click)=\"deleteImage(i)\">\n\t\t\t\t\t\t\t<ion-icon name=\"trash-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-fab-button>\n\t\t\t\t\t</ion-fab>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</form>\n</ion-content>\n";
      /***/
    },

    /***/
    "dUkv":
    /*!***********************************************************************!*\
      !*** ./src/app/modals/modal-watchlist/modal-watchlist.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function dUkv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC13YXRjaGxpc3QvbW9kYWwtd2F0Y2hsaXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "f0yJ":
    /*!*******************************************************************************!*\
      !*** ./src/app/modals/modal-fp-code-check/modal-fp-code-check.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function f0yJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9tb2RhbC1mcC1jb2RlLWNoZWNrL21vZGFsLWZwLWNvZGUtY2hlY2suY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "gn15":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gn15(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>Edit watchlist</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-item class=\"ion-margin-horizontal ion-no-padding\">\n\t\t<ion-label position=\"floating\">Name of watchlist</ion-label>\n\t\t<ion-input [(ngModel)]=\"watchlistName\"></ion-input>\n\t</ion-item>\n\t<ion-button (click)=\"onEditWatchlist()\" class=\"ion-margin\" expand=\"block\">\n\t\tSave watchlist\n\t\t<ion-spinner name=\"lines-small\" *ngIf=\"spinner\"></ion-spinner>\n\t</ion-button>\n\t<div cdkDropList class=\"drag-list\" (cdkDropListDropped)=\"drop($event)\" *ngIf=\"stocks.length > 0\">\n\t\t<div *ngFor=\"let stock of stocks\" style=\"width: 100%;\" cdkDrag class=\"drag-box\">\n\t\t\t<div *ngIf=\"stock != undefined\">\n\t\t\t\t<ion-icon name=\"reorder-three-outline\" class=\"ion-margin-end\"></ion-icon>\n\t\t\t\t<span>{{ stock.name }}</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "hzlp":
    /*!*************************************************!*\
      !*** ./src/app/interceptors/jwt.interceptor.ts ***!
      \*************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function hzlp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
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


      var _services_stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/stock.service */
      "8hSh");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(stockService, userService) {
          _classCallCheck(this, JwtInterceptor);

          this.stockService = stockService;
          this.userService = userService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token;
            this.userService.authenticated.subscribe(function (r) {
              token = r.token;
            });
            req = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
            return next.handle(req);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ctorParameters = function () {
        return [{
          type: _services_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      };

      JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
      /***/
    },

    /***/
    "jYAL":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-fp-code-check/modal-fp-code-check.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jYAL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Code Validation</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-label class=\"ion-margin-vertical ion-no-padding\">Enter the code that you've recieved on {{email}}</ion-label>\n  <ion-item class=\"ion-no-padding ion-margin-vertical\">\n    <ion-label>Code</ion-label>\n    <ion-input [(ngModel)]=\"code\"></ion-input>\n  </ion-item>\n  <ion-button size=\"block\" (click)=\"codeCheck(email, code)\">\n    Validate my code\n    <ion-spinner name=\"lines-small\" color=\"light\" *ngIf=\"spinner\"></ion-spinner>\n  </ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 3],
        "./ion-alert.entry.js": ["Q8AI", "common", 4],
        "./ion-app_8.entry.js": ["hgI1", "common", 5],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 6],
        "./ion-back-button.entry.js": ["Nt02", "common", 7],
        "./ion-backdrop.entry.js": ["Q2Bp", 8],
        "./ion-button_2.entry.js": ["0Pbj", "common", 9],
        "./ion-card_5.entry.js": ["ydQj", "common", 10],
        "./ion-checkbox.entry.js": ["4fMi", "common", 11],
        "./ion-chip.entry.js": ["czK9", "common", 12],
        "./ion-col_3.entry.js": ["/CAe", 13],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 14],
        "./ion-fab_3.entry.js": ["uQcF", "common", 15],
        "./ion-img.entry.js": ["wHD8", 16],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 17],
        "./ion-input.entry.js": ["ercB", "common", 18],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 19],
        "./ion-item_8.entry.js": ["9bur", "common", 20],
        "./ion-loading.entry.js": ["cABk", "common", 21],
        "./ion-menu_3.entry.js": ["kyFE", "common", 22],
        "./ion-modal.entry.js": ["TvZU", "common", 23],
        "./ion-nav_2.entry.js": ["vnES", "common", 24],
        "./ion-popover.entry.js": ["qCuA", "common", 25],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 26],
        "./ion-radio_2.entry.js": ["h11V", "common", 27],
        "./ion-range.entry.js": ["XGij", "common", 28],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 29],
        "./ion-reorder_2.entry.js": ["smMY", "common", 30],
        "./ion-ripple-effect.entry.js": ["STjf", 31],
        "./ion-route_4.entry.js": ["k5eQ", "common", 32],
        "./ion-searchbar.entry.js": ["OR5t", "common", 33],
        "./ion-segment_2.entry.js": ["fSgp", "common", 34],
        "./ion-select_3.entry.js": ["lfGF", "common", 35],
        "./ion-slide_2.entry.js": ["5xYT", 36],
        "./ion-spinner.entry.js": ["nI0H", "common", 37],
        "./ion-split-pane.entry.js": ["NAQR", 38],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 39],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 40],
        "./ion-text.entry.js": ["ISmu", "common", 41],
        "./ion-textarea.entry.js": ["U7LX", "common", 42],
        "./ion-toast.entry.js": ["L3sA", "common", 43],
        "./ion-toggle.entry.js": ["IUOf", "common", 44],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 45]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kVqo":
    /*!*******************************************!*\
      !*** ./src/app/services/order.service.ts ***!
      \*******************************************/

    /*! exports provided: OrderService */

    /***/
    function kVqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
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


      var _stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stock.service */
      "8hSh");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(stockService, http, router) {
          _classCallCheck(this, OrderService);

          this.stockService = stockService;
          this.http = http;
          this.router = router;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'stocks/';
        }

        _createClass(OrderService, [{
          key: "getAllUserOrders",
          value: function getAllUserOrders() {
            return this.http.get(this.apiUrl + 'orders/all');
          }
        }, {
          key: "getOrder",
          value: function getOrder(id) {
            return this.http.get(this.apiUrl + "orders/".concat(id));
          }
        }, {
          key: "stopOrder",
          value: function stopOrder(id) {
            return this.http.post(this.apiUrl + 'order/stop', {
              id: id
            });
          }
        }, {
          key: "updateOrder",
          value: function updateOrder(id, stoploss, target) {
            return this.http.put(this.apiUrl + 'order/update', {
              id: id,
              stoploss: stoploss,
              target: target
            });
          }
        }, {
          key: "savePosition",
          value: function savePosition(id, target, stoploss) {
            return this.http.put(this.apiUrl + 'order/update', {
              id: id,
              target: target,
              stoploss: stoploss
            });
          }
        }, {
          key: "exitPosition",
          value: function exitPosition(id) {
            return this.http.post(this.apiUrl + 'order/stop', {
              id: id
            });
          } // buy(cId: string, watchlistId: string,quantity: number, stopLoss: number, target: number, order: string, availableBal: number, price?: number){
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

        }, {
          key: "totalPandL",
          value: function totalPandL() {}
        }, {
          key: "savePending",
          value: function savePending(pending) {}
        }]);

        return OrderService;
      }();

      OrderService.ctorParameters = function () {
        return [{
          type: _stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OrderService);
      /***/
    },

    /***/
    "lNYK":
    /*!*******************************************************************************!*\
      !*** ./src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: BuySellModalPopupComponent */

    /***/
    function lNYK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuySellModalPopupComponent", function () {
        return BuySellModalPopupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buy_sell_modal_popup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buy-sell-modal-popup.component.html */
      "x8NZ");
      /* harmony import */


      var _buy_sell_modal_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./buy-sell-modal-popup.component.scss */
      "OtLC");
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

      var BuySellModalPopupComponent = /*#__PURE__*/function () {
        function BuySellModalPopupComponent(modalCtrl, stockService, router) {
          _classCallCheck(this, BuySellModalPopupComponent);

          this.modalCtrl = modalCtrl;
          this.stockService = stockService;
          this.router = router;
        }

        _createClass(BuySellModalPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.stockService.listen("".concat(this.selectedStock.id, "-").concat(this.selectedWatchlistId)).subscribe(function (res) {
              _this16.selectedStock.ltp = res[0].price;
            });
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "onClick",
          value: function onClick(isBuy) {
            this.modalCtrl.dismiss();
            this.router.navigate(["home", "watchlist", "buy-sell", this.selectedStock.id, this.selectedWatchlistId], {
              queryParams: {
                isBuy: isBuy
              }
            });
          }
        }, {
          key: "navigateToChart",
          value: function navigateToChart() {
            this.modalCtrl.dismiss();
            this.router.navigate(["chart"]);
          }
        }]);

        return BuySellModalPopupComponent;
      }();

      BuySellModalPopupComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      BuySellModalPopupComponent.propDecorators = {
        selectedStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ["selectedStock"]
        }],
        selectedWatchlistId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ["selectedWatchlistId"]
        }]
      };
      BuySellModalPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-buy-sell-modal-popup",
        template: _raw_loader_buy_sell_modal_popup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buy_sell_modal_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BuySellModalPopupComponent);
      /***/
    },

    /***/
    "nJHT":
    /*!*******************************************************************!*\
      !*** ./src/app/modals/modal-fp-email/modal-fp-email.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ModalFpEmailComponent */

    /***/
    function nJHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalFpEmailComponent", function () {
        return ModalFpEmailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_fp_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-fp-email.component.html */
      "K/jU");
      /* harmony import */


      var _modal_fp_email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-fp-email.component.scss */
      "Kmqd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _modal_fp_code_check_modal_fp_code_check_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal-fp-code-check/modal-fp-code-check.component */
      "bzO4");

      var ModalFpEmailComponent = /*#__PURE__*/function () {
        function ModalFpEmailComponent(modalCtrl, userService, toastCtrl) {
          _classCallCheck(this, ModalFpEmailComponent);

          this.modalCtrl = modalCtrl;
          this.userService = userService;
          this.toastCtrl = toastCtrl;
        }

        _createClass(ModalFpEmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.spinner = false;
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "emailCheck",
          value: function emailCheck(email) {
            var _this17 = this;

            this.spinner = true;

            if (email != '') {
              if (this.checkIfEmailInString(email)) {
                this.userService.emailExists(this.email).subscribe(function (r) {
                  _this17.spinner = false;

                  _this17.dismissModal();

                  _this17.openCodeCheckModal(email);
                }, function () {
                  _this17.spinner = false;

                  _this17.presentErrorToast('Email does not exist.');
                });
              } else {
                this.spinner = false;
                this.presentErrorToast('Enter your email in the correct format.');
              }
            } else {
              this.spinner = false;
              this.presentErrorToast('Enter your email.');
            }
          }
        }, {
          key: "openCodeCheckModal",
          value: function openCodeCheckModal(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var modal;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.modalCtrl.create({
                        component: _modal_fp_code_check_modal_fp_code_check_component__WEBPACK_IMPORTED_MODULE_6__["ModalFpCodeCheckComponent"],
                        componentProps: {
                          email: email
                        }
                      });

                    case 2:
                      modal = _context11.sent;
                      _context11.next = 5;
                      return modal.present();

                    case 5:
                      return _context11.abrupt("return", _context11.sent);

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "checkIfEmailInString",
          value: function checkIfEmailInString(text) {
            var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
            return re.test(text);
          }
        }, {
          key: "presentErrorToast",
          value: function presentErrorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var toast;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: "danger"
                      });

                    case 2:
                      toast = _context12.sent;
                      _context12.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }]);

        return ModalFpEmailComponent;
      }();

      ModalFpEmailComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      ModalFpEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-fp-email",
        template: _raw_loader_modal_fp_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_fp_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalFpEmailComponent);
      /***/
    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, storage, platform) {
          var _this18 = this;

          _classCallCheck(this, UserService);

          this.http = http;
          this.storage = storage;
          this.platform = platform;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "auth/";
          this.apiSettingsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "settings/";
          this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.authenticated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
          this.isOnLoginOrSignUpPage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.platform.ready().then(function () {
            _this18.checkToken();
          });
        }

        _createClass(UserService, [{
          key: "decodeToken",
          value: function decodeToken(token) {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
            this.decodedToken = helper.decodeToken(token);
          }
        }, {
          key: "logIn",
          value: function logIn(input) {
            var _this19 = this;

            return this.http.post(this.apiUrl + "login", input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
              var user = {
                email: res.user.email,
                username: res.user.username,
                balance: {
                  availableBal: 0,
                  openBal: 0
                }
              };

              _this19.authenticate(user, res.jwt);

              _this19.decodedToken = _this19.decodeToken(res.jwt);

              _this19.checkToken();
            }));
          }
        }, {
          key: "signUp",
          value: function signUp(input) {
            return this.http.post(this.apiUrl + "signup", input);
          }
        }, {
          key: "googleAuth",
          value: function googleAuth(idToken) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var user;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      user = {
                        email: idToken.email,
                        username: idToken.name,
                        balance: {
                          availableBal: 0,
                          openBal: 0
                        }
                      };
                      this.authenticate(user, idToken.authentication.idToken);
                      console.log({
                        user: user,
                        idToken: idToken.authentication.idToken
                      });
                      this.decodedToken = this.decodeToken(idToken.authentication.idToken);
                      this.checkToken();

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "getFundsChart",
          value: function getFundsChart() {
            return this.http.get(this.apiSettingsUrl + "funds/records");
          }
        }, {
          key: "getLeaderboard",
          value: function getLeaderboard() {
            return this.http.get(this.apiUrl + "leaderboard");
          }
        }, {
          key: "accountDetails",
          value: function accountDetails() {
            return this.http.get(this.apiUrl + "account");
          }
        }, {
          key: "changePassword",
          value: function changePassword(email, password) {
            return this.http.post(this.apiUrl + "password/change", {
              email: email,
              password: password
            });
          }
        }, {
          key: "emailExists",
          value: function emailExists(email) {
            return this.http.post(this.apiUrl + "password/reset/emailcheck", {
              email: email
            });
          }
        }, {
          key: "checkCodeValid",
          value: function checkCodeValid(email, code) {
            return this.http.post(this.apiUrl + "password/code/check", {
              email: email,
              code: code
            });
          }
        }, {
          key: "getSettings",
          value: function getSettings() {
            return this.http.get(this.apiSettingsUrl);
          }
        }, {
          key: "updateSettings",
          value: function updateSettings(id, datatype, risk, leverage) {
            return this.http.put(this.apiSettingsUrl, {
              id: id,
              datatype: datatype,
              risk: risk,
              leverage: +leverage
            });
          }
        }, {
          key: "authenticate",
          value: function authenticate(user, token) {
            var _this20 = this;

            return this.storage.set("token", {
              user: user,
              token: token
            }).then(function (r) {
              localStorage.setItem("token", token);

              _this20.authenticated.next({
                user: user,
                token: token
              });
            });
          }
        }, {
          key: "getUserFromToken",
          value: function getUserFromToken() {
            var user;
            this.storage.get("token").then(function (r) {
              if (r) user = r.user;
            });
            return user;
          }
        }, {
          key: "checkToken",
          value: function checkToken() {
            var _this21 = this;

            return this.storage.get("token").then(function (r) {
              if (r) {
                _this21.authenticated.next(r);

                _this21.user.next(r.user);
              }
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this22 = this;

            this.user.next(null);
            localStorage.removeItem("token");
            return this.storage.remove("token").then(function (r) {
              return _this22.authenticated.next(false);
            });
          }
        }, {
          key: "add",
          value: function add(amount) {
            this.user.subscribe(function (u) {
              u.balance.openBal += amount;
              u.balance.availableBal += amount;
            });
          }
        }, {
          key: "withdraw",
          value: function withdraw(amount) {
            this.user.subscribe(function (u) {
              if (u.balance.openBal - amount >= 0) u.balance.openBal -= amount;
              if (u.balance.availableBal - amount >= 0) u.balance.availableBal -= amount;
            });
          }
        }, {
          key: "checkIfIsOnLoginOrSignUpPage",
          value: function checkIfIsOnLoginOrSignUpPage(link) {
            link.includes("login") || link.includes("sign-up") ? this.isOnLoginOrSignUpPage.next(true) : this.isOnLoginOrSignUpPage.next(false);
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      })], UserService);
      /***/
    },

    /***/
    "rdK+":
    /*!*********************************************************************************!*\
      !*** ./src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ModalEditWatchlistsComponent */

    /***/
    function rdK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalEditWatchlistsComponent", function () {
        return ModalEditWatchlistsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_edit_watchlists_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-edit-watchlists.component.html */
      "8tei");
      /* harmony import */


      var _modal_edit_watchlists_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-edit-watchlists.component.scss */
      "Ey9a");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/watchlist.service */
      "Tl0h");

      var ModalEditWatchlistsComponent = /*#__PURE__*/function () {
        function ModalEditWatchlistsComponent(modalCtrl, watchlistService, userService, toastCtrl) {
          _classCallCheck(this, ModalEditWatchlistsComponent);

          this.modalCtrl = modalCtrl;
          this.watchlistService = watchlistService;
          this.userService = userService;
          this.toastCtrl = toastCtrl;
          this.watchlists = [];
        }

        _createClass(ModalEditWatchlistsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.spinner = false;
            this.dataLoaded = false;
            this.getWatchlists();
          }
        }, {
          key: "getWatchlists",
          value: function getWatchlists() {
            var _this23 = this;

            this.userService.getSettings().subscribe(function (r) {
              var datatype = r.data.datatype;
              if (datatype == "simulated") _this23.watchlistService.getSimulatedWatchlists().subscribe(function (r) {
                console.log("simulated", r);
                _this23.dataLoaded = true;
              });
              if (datatype == "realtime") _this23.watchlistService.getRealtimeWatchlists().subscribe(function (r) {
                console.log("realtime", r);
                _this23.watchlists = r.data;
                _this23.dataLoaded = true;
              });
            });
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalCtrl.dismiss(this.changeInWatchlist);
          }
        }, {
          key: "onCreateWatchlist",
          value: function onCreateWatchlist() {
            var _this24 = this;

            var _a;

            if (((_a = this.watchlistName) === null || _a === void 0 ? void 0 : _a.trim()) != "" && this.watchlistName != null && this.watchlistName != undefined) {
              this.spinner = true;
              this.watchlistName = this.watchlistName.trim();
              this.watchlistService.createWatchlist(this.watchlistName).subscribe(function () {
                _this24.changeInWatchlist = true;
                _this24.spinner = false;

                _this24.presentSuccessToast("\"".concat(_this24.watchlistName, "\" was successfuly created."));

                _this24.watchlistName = "";

                _this24.getWatchlists();
              });
            } else this.presentErrorToast("Input field is empty.");
          }
        }, {
          key: "drop",
          value: function drop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.watchlists, event.previousIndex, event.currentIndex);
            this.changePosition();
          }
        }, {
          key: "changePosition",
          value: function changePosition() {
            var _this25 = this;

            var positions = [];

            for (var i = 0; i < this.watchlists.length; i++) {
              var w = this.watchlists[i];
              positions.push({
                watchlistId: w._id,
                position: i
              });
            }

            this.watchlistService.updateWatchlistPositions(positions).subscribe(function () {
              return _this25.changeInWatchlist = true;
            });
          }
        }, {
          key: "presentErrorToast",
          value: function presentErrorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var toast;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: "danger"
                      });

                    case 2:
                      toast = _context14.sent;
                      _context14.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "presentSuccessToast",
          value: function presentSuccessToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var toast;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2500,
                        color: "success"
                      });

                    case 2:
                      toast = _context15.sent;
                      _context15.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return ModalEditWatchlistsComponent;
      }();

      ModalEditWatchlistsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_watchlist_service__WEBPACK_IMPORTED_MODULE_7__["WatchlistService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      ModalEditWatchlistsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-modal-edit-watchlists",
        template: _raw_loader_modal_edit_watchlists_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_edit_watchlists_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalEditWatchlistsComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/auth-guard.guard */
      "1eeg");

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'chart',
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-chart-chart-module */
          "pages-chart-chart-module").then(__webpack_require__.bind(null,
          /*! ./pages/chart/chart.module */
          "ThXp")).then(function (m) {
            return m.ChartPageModule;
          });
        }
      }, {
        path: '',
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        redirectTo: 'home/dashboard',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "whIa":
    /*!***************************************************************************************!*\
      !*** ./src/app/modals/modal-withdraw-add-funds/modal-withdraw-add-funds.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ModalWithdrawAddFundsComponent */

    /***/
    function whIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalWithdrawAddFundsComponent", function () {
        return ModalWithdrawAddFundsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_withdraw_add_funds_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-withdraw-add-funds.component.html */
      "976h");
      /* harmony import */


      var _modal_withdraw_add_funds_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-withdraw-add-funds.component.scss */
      "3waL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var ModalWithdrawAddFundsComponent = /*#__PURE__*/function () {
        function ModalWithdrawAddFundsComponent(modalCtrl, userService) {
          _classCallCheck(this, ModalWithdrawAddFundsComponent);

          this.modalCtrl = modalCtrl;
          this.userService = userService;
        }

        _createClass(ModalWithdrawAddFundsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.userService.authenticated.subscribe(function (u) {
              return _this26.user = u.user;
            });
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "submitFundsRequest",
          value: function submitFundsRequest(input) {
            this.isAdd ? this.userService.add(input.amount) : this.userService.withdraw(input.amount);
            this.dismissModal();
          }
        }]);

        return ModalWithdrawAddFundsComponent;
      }();

      ModalWithdrawAddFundsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      };

      ModalWithdrawAddFundsComponent.propDecorators = {
        isAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['isAdd']
        }]
      };
      ModalWithdrawAddFundsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-withdraw-add-funds',
        template: _raw_loader_modal_withdraw_add_funds_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_withdraw_add_funds_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalWithdrawAddFundsComponent);
      /***/
    },

    /***/
    "x7KT":
    /*!*************************************************************************!*\
      !*** ./src/app/modals/modal-upload-post/modal-upload-post.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ModalUploadPostComponent */

    /***/
    function x7KT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalUploadPostComponent", function () {
        return ModalUploadPostComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_upload_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-upload-post.component.html */
      "ck4M");
      /* harmony import */


      var _modal_upload_post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-upload-post.component.scss */
      "8E9K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/marubozu.service */
      "BCkd");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Camera;
      var STORAGE_KEY = "assets";

      var ModalUploadPostComponent = /*#__PURE__*/function () {
        function ModalUploadPostComponent(api, plt, actionSheetCtrl, modalCtrl, toastCtrl) {
          _classCallCheck(this, ModalUploadPostComponent);

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

        _createClass(ModalUploadPostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.spinner = false;
          }
        }, {
          key: "dismissModal",
          value: function dismissModal(val) {
            this.modalCtrl.dismiss(val);
          }
        }, {
          key: "selectImageSource",
          value: function selectImageSource() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this27 = this;

              var buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      buttons = [{
                        text: "Select a Photo",
                        icon: "image",
                        handler: function handler() {
                          _this27.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Photos);
                        }
                      }];

                      if (!this.plt.is("hybrid")) {
                        buttons.push({
                          text: "Choose a File",
                          icon: "attach",
                          handler: function handler() {
                            _this27.fileInput.nativeElement.click();
                          }
                        });
                      }

                      buttons.push({
                        text: "Close",
                        icon: "close",
                        handler: function handler() {}
                      });
                      _context16.next = 5;
                      return this.actionSheetCtrl.create({
                        header: "Select Image Source",
                        buttons: buttons
                      });

                    case 5:
                      actionSheet = _context16.sent;
                      _context16.next = 8;
                      return actionSheet.present();

                    case 8:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "addImage",
          value: function addImage(source) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var image, blobData, img;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!(this.images.length == 0)) {
                        _context17.next = 8;
                        break;
                      }

                      _context17.next = 3;
                      return Camera.getPhoto({
                        quality: 60,
                        allowEditing: true,
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Base64,
                        source: source
                      });

                    case 3:
                      image = _context17.sent;
                      blobData = this.b64toBlob(image.base64String, "image/".concat(image.format));
                      img = URL.createObjectURL(blobData);
                      this.images.push({
                        blobData: blobData,
                        name: "img",
                        format: image.format,
                        url: img
                      });
                      console.log(this.images);

                    case 8:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(postForm) {
            var _this28 = this;

            var image = this.images[0];

            if (postForm.valid) {
              this.spinner = true;
              var title = postForm.value.title;
              var content = postForm.value.content;
              var stockName = postForm.value.stockname;
              var key = "";
              if (this.intraDay == true) key = "intraday";else if (this.positional == true) key = "positional";else if (this.demoTrading == true) key = "demotrading";else if (this.blog == true) key = "blog";

              if (image == undefined || image == null) {
                this.api.createWithBlob(title, content, stockName, key).subscribe(function () {
                  _this28.dismissModal(true);

                  _this28.spinner = false;
                });
              } else {
                this.api.createWithBlob(title, content, stockName, key, image.blobData, image.name, image.format).subscribe(function () {
                  _this28.dismissModal(true);

                  _this28.spinner = false;
                });
              }
            } else this.presentErrorToast('Something is missing.');
          }
        }, {
          key: "deleteImage",
          value: function deleteImage(index) {
            this.images.splice(index, 1);
          }
        }, {
          key: "b64toBlob",
          value: function b64toBlob(b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          }
        }, {
          key: "presentErrorToast",
          value: function presentErrorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var toast;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.toastCtrl.create({
                        header: message,
                        color: 'danger',
                        duration: 2500
                      });

                    case 2:
                      toast = _context18.sent;
                      _context18.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }]);

        return ModalUploadPostComponent;
      }();

      ModalUploadPostComponent.ctorParameters = function () {
        return [{
          type: src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_5__["MarubozuService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      ModalUploadPostComponent.propDecorators = {
        intraDay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        positional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        blog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        demoTrading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["fileInput", {
            "static": false
          }]
        }]
      };
      ModalUploadPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-modal-upload-post",
        template: _raw_loader_modal_upload_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_upload_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalUploadPostComponent);
      /***/
    },

    /***/
    "x8NZ":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x8NZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title slot=\"start\"> {{ selectedStock.name }} </ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\t<ion-toolbar>\n\t\t<ion-text slot=\"start\" class=\"subtitle\" *ngIf=\"+selectedStock.ltp - +selectedStock.ldp >= 0\">\n\t\t\t<h5 class=\"ion-margin-end\">{{ selectedStock.name }}</h5>\n\t\t\t<ion-text class=\"ion-margin-end\" color=\"success\">\n\t\t\t\t<h5>{{ selectedStock.ltp }}</h5>\n\t\t\t</ion-text>\n\t\t\t<h5 class=\"ion-margin-end\">+{{+selectedStock.ltp - +selectedStock.ldp | number:'1.1-2'}} (+{{(+selectedStock.ltp - +selectedStock.ldp) / +selectedStock.ldp | percent:'1.1-2'}})</h5>\n\t\t</ion-text>\n\t\t<ion-text slot=\"start\" class=\"subtitle\" *ngIf=\"+selectedStock.ltp - +selectedStock.ldp < 0\">\n\t\t\t<h5 class=\"ion-margin-end\">{{ selectedStock.name }}</h5>\n\t\t\t<ion-text class=\"ion-margin-end\" color=\"danger\">\n\t\t\t\t<h5>{{ selectedStock.ltp }}</h5>\n\t\t\t</ion-text>\n\t\t\t<h5 class=\"ion-margin-end\">-{{+selectedStock.ltp - +selectedStock.ldp | number:'1.1-2'}} (-{{(+selectedStock.ltp - +selectedStock.ldp) / +selectedStock.ldp | percent:'1.1-2'}})</h5>\n\t\t</ion-text>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row class=\"ion-margin-vertical\">\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-button color=\"tertiary\" size=\"medium\" expand=\"full\" class=\"ion-margin-start buy-sell-btn\"\n\t\t\t\t(click)=\"onClick(true)\">Buy</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-button color=\"danger\" size=\"medium\" expand=\"full\" class=\"ion-margin-end buy-sell-btn\"\n\t\t\t\t(click)=\"onClick(false)\">Sell</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button (click)=\"navigateToChart()\" color=\"tertiary\" size=\"small\" expand=\"block\" fill=\"clear\" class=\"ion-margin-end ion-float-left\">\n\t\t\t\t\tView chart\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<!-- <ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-text>\n\t\t\t\t\t<h4 class=\"table-title ion-text-left\">Market depth</h4>\n\t\t\t\t</ion-text>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<table>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class=\"ion-text-left\">Bid</th>\n\t\t\t\t\t\t\t<th class=\"ion-text-center ion-margin-horizontal\">Orders</th>\n\t\t\t\t\t\t\t<th class=\"ion-text-end\">Qty</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"ion-text-left\">\n\t\t\t\t\t\t\t\t<ion-text color=\"secondary\"> 771.20 </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"ion-text-center\">\n\t\t\t\t\t\t\t\t<ion-text color=\"secondary\"> 1 </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"ion-text-end\">\n\t\t\t\t\t\t\t\t<ion-text color=\"secondary\"> 33 </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"2\">\n\t\t\t\t\t\t\t\t<ion-text color=\"secondary\"> Total </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"1\">\n\t\t\t\t\t\t\t\t<ion-text color=\"secondary\"> 9,03,720 </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<table>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class=\"ion-text-left\">Offer</th>\n\t\t\t\t\t\t\t<th class=\"ion-text-center ion-margin-horizontal\">Orders</th>\n\t\t\t\t\t\t\t<th class=\"ion-text-end\">Qty</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"ion-text-left\">\n\t\t\t\t\t\t\t\t<ion-text color=\"danger\"> 773.05 </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"ion-text-center\">\n\t\t\t\t\t\t\t\t<ion-text color=\"danger\"> 1 </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"ion-text-end\">\n\t\t\t\t\t\t\t\t<ion-text color=\"danger\"> 29 </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"2\">\n\t\t\t\t\t\t\t\t<ion-text color=\"danger\"> Total </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"1\">\n\t\t\t\t\t\t\t\t<ion-text color=\"danger\"> 11,84,482 </ion-text>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row> -->\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "y2a+":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modal-change-password/modal-change-password.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function y2a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>Change password</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form #changePasswordForm=\"ngForm\" (ngSubmit)=\"changePassword(changePasswordForm.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"ion-no-padding\">\n            <ion-label>New password</ion-label>\n            <ion-input type=\"password\" required ngModel name=\"newPassword\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"ion-no-padding ion-margin-bottom\">\n            <ion-label>Confirm password</ion-label>\n            <ion-input type=\"password\" required ngModel name=\"confirmPassword\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-button expand=\"block\" type=\"submit\">\n        Submit\n        <ion-spinner name=\"lines-small\" *ngIf=\"spinner\"></ion-spinner>\n      </ion-button>\n    </ion-grid>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  font-size: 16px;\n}\n\n@media screen and (max-width: 360px) {\n  h1, h2 {\n    font-size: 17px;\n    padding: 0;\n    margin: 0;\n  }\n\n  ion-title {\n    font-size: 14px !important;\n  }\n\n  ion-text, h4 {\n    font-size: 16px !important;\n  }\n\n  ion-label, ion-text, p, h5, h3, ion-button, span, ion-select, ion-select-option {\n    font-size: 12px !important;\n  }\n\n  ion-button {\n    width: 100%;\n    height: 40px;\n    font-size: 13px !important;\n  }\n\n  .link-button {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    font-size: 12px !important;\n  }\n\n  .route-label {\n    font-size: 10px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0k7SUFDRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFFSjs7RUFBRTtJQUNFLDBCQUFBO0VBR0o7O0VBREU7SUFDRSwwQkFBQTtFQUlKOztFQUZFO0lBQ0UsMEJBQUE7RUFLSjs7RUFIRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7RUFNTjs7RUFKRTtJQUNFLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLDBCQUFBO0VBT0o7O0VBTEU7SUFDRSwwQkFBQTtFQVFKO0FBQ0Y7O0FBTkU7RUFDRTtJQUNFLFlBQUE7RUFRSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgaDEsaDJ7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBwYWRkaW5nOjA7XG4gICAgICBtYXJnaW46MDtcbiAgICB9XG4gICAgaW9uLXRpdGxle1xuICAgICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLXRleHQsIGg0e1xuICAgICAgZm9udC1zaXplOjE2cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCBpb24tdGV4dCwgcCwgaDUsIGgzLCBpb24tYnV0dG9uLCBzcGFuLCBpb24tc2VsZWN0LCBpb24tc2VsZWN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGluay1idXR0b257XG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7IFxuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yb3V0ZS1sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBAbWVkaWEocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICBpb24tdGl0bGV7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "2Zi2");

      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_5__["defineCustomElements"])(window);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map