(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-learning-learning-module"], {
    /***/
    "+dZK":
    /*!********************************************************************!*\
      !*** ./src/app/pages/learning/demo-trading/demo-trading.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function dZK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".post-button {\n  width: 100%;\n  height: 50px;\n}\n\nion-spinner {\n  width: 100%;\n  margin: 25px auto;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, .post-button, p, h5, h3 {\n    font-size: 13px !important;\n  }\n\n  .post-button {\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvZGVtby10cmFkaW5nL2RlbW8tdHJhZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBS0E7RUFDSTtJQUNFLDBCQUFBO0VBRko7O0VBSUU7SUFDRSwwQkFBQTtFQURKOztFQUdFO0lBQ0ksWUFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9kZW1vLXRyYWRpbmcvZGVtby10cmFkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5pb24tc3Bpbm5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xufVxuLy8gLm5vdC1mb3VuZHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBtYXJnaW4tdG9wOiAyNXB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgaW9uLXRpdGxle1xuICAgICAgZm9udC1zaXplOjE1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCAucG9zdC1idXR0b24sIHAsIGg1LCBoM3tcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucG9zdC1idXR0b257XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "/XCW":
    /*!**************************************************************!*\
      !*** ./src/app/pages/learning/intra-day/intra-day.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function XCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".post-button {\n  width: 100%;\n  height: 50px;\n}\n\nion-spinner {\n  width: 100%;\n  margin: 25px auto;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, .post-button, p, h5, h3 {\n    font-size: 13px !important;\n  }\n\n  .post-button {\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvaW50cmEtZGF5L2ludHJhLWRheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDSTtJQUNFLDBCQUFBO0VBR0o7O0VBREU7SUFDRSwwQkFBQTtFQUlKOztFQUZFO0lBQ0ksWUFBQTtFQUtOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9pbnRyYS1kYXkvaW50cmEtZGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5pb24tc3Bpbm5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICBpb24tdGl0bGV7XG4gICAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tbGFiZWwsIC5wb3N0LWJ1dHRvbiwgcCwgaDUsIGgze1xuICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wb3N0LWJ1dHRvbntcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbn0iXX0= */";
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
    "3Gte":
    /*!****************************************************!*\
      !*** ./src/app/pages/learning/blogs/blogs.page.ts ***!
      \****************************************************/

    /*! exports provided: BlogsPage */

    /***/
    function Gte(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogsPage", function () {
        return BlogsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blogs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blogs.page.html */
      "kJx7");
      /* harmony import */


      var _blogs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blogs.page.scss */
      "m9Sb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modals/modal-post/modal-post.component */
      "N+8n");
      /* harmony import */


      var src_app_services_learning_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/learning.service */
      "uetY");
      /* harmony import */


      var src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/marubozu.service */
      "BCkd");

      var BlogsPage = /*#__PURE__*/function () {
        function BlogsPage(learningService, modalController, marubozuService) {
          _classCallCheck(this, BlogsPage);

          this.learningService = learningService;
          this.modalController = modalController;
          this.marubozuService = marubozuService;
        }

        _createClass(BlogsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataLoaded = false;
            this.marubozuService.get('blog').subscribe(function (r) {
              console.log('blog', r);
              _this.blgs = r.data;

              _this.blgs.reverse();

              _this.dataLoaded = true;
            });
          }
        }, {
          key: "openPostModal",
          value: function openPostModal(blog) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_5__["ModalPostComponent"],
                        componentProps: {
                          blog: blog
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return BlogsPage;
      }();

      BlogsPage.ctorParameters = function () {
        return [{
          type: src_app_services_learning_service__WEBPACK_IMPORTED_MODULE_6__["LearningService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_7__["MarubozuService"]
        }];
      };

      BlogsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blogs',
        template: _raw_loader_blogs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blogs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BlogsPage);
      /***/
    },

    /***/
    "7VrI":
    /*!******************************************************************!*\
      !*** ./src/app/pages/learning/demo-trading/demo-trading.page.ts ***!
      \******************************************************************/

    /*! exports provided: DemoTradingPage */

    /***/
    function VrI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoTradingPage", function () {
        return DemoTradingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_demo_trading_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./demo-trading.page.html */
      "BNB8");
      /* harmony import */


      var _demo_trading_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./demo-trading.page.scss */
      "+dZK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modals/modal-upload-post/modal-upload-post.component */
      "x7KT");
      /* harmony import */


      var src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/marubozu.service */
      "BCkd");
      /* harmony import */


      var src_app_modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modals/modal-post/modal-post.component */
      "N+8n");

      var DemoTradingPage = /*#__PURE__*/function () {
        function DemoTradingPage(modalController, marubozuService) {
          _classCallCheck(this, DemoTradingPage);

          this.modalController = modalController;
          this.marubozuService = marubozuService;
        }

        _createClass(DemoTradingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.dataLoaded = false;
            this.marubozuService.get('demotrading').subscribe(function (r) {
              console.log('demotrading', r);
              _this2.demotrading = r.data;

              _this2.demotrading.reverse();

              _this2.dataLoaded = true;
            });
          }
        }, {
          key: "openUploadPostModal",
          value: function openUploadPostModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_5__["ModalUploadPostComponent"],
                        componentProps: {
                          demotrading: true
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (d) {
                        if (d.data == true) {
                          _this3.marubozuService.get("demotrading").subscribe(function (r) {
                            _this3.demotrading = r.data;

                            _this3.demotrading.reverse();
                          });
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openPostModal",
          value: function openPostModal(demotrading) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_7__["ModalPostComponent"],
                        componentProps: {
                          blog: demotrading
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "filter",
          value: function filter(e) {
            this.filteredDemotrading = this.demotrading.filter(function (p) {
              return p.title.toLowerCase().includes(e.detail.value.toLowerCase());
            });
            this.filteredDemotrading.reverse();
          }
        }]);

        return DemoTradingPage;
      }();

      DemoTradingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_6__["MarubozuService"]
        }];
      };

      DemoTradingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-demo-trading',
        template: _raw_loader_demo_trading_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_demo_trading_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DemoTradingPage);
      /***/
    },

    /***/
    "8g4s":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learning/positional/positional.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function g4s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-searchbar class=\"ion-no-padding\" showCancelButton=\"focus\" (ionChange)=\"filter($event)\"></ion-searchbar>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<ion-spinner name=\"lines\" *ngIf=\"!dataLoaded;else cards\"></ion-spinner>\n\t<ion-card #cards *ngFor=\"let positional of filteredPositional || positionalPsts\" (click)=\"openPostModal(positional)\">\n\t\t<ion-card-header><h5>{{positional.title}}</h5></ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<ion-img *ngIf=\"positional.image != undefined || positional.image != null\" [src]=\"positional.image\" class=\"ion-margin-bottom\"></ion-img>\n\t\t\t<ion-text><p>{{positional.content | slice:0:120}}{{positional.content.length > 0 ? '...' : ''}}</p></ion-text>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<ion-label class=\"ion-padding\" *ngIf=\"filteredPositional?.length == 0 || positionalPsts?.length == 0\">\n\t\tThere are currently no posts inside this tab...\n\t</ion-label>\n</ion-content>\n<ion-fab horizontal=\"end\" vertical=\"bottom\" style=\"position: absolute; bottom: 10px; right: 10px\">\n\t<ion-fab-button (click)=\"openUploadPostModal()\">\n\t\t<ion-icon name=\"add\"></ion-icon>\n\t</ion-fab-button>\n</ion-fab>\n";
      /***/
    },

    /***/
    "BNB8":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learning/demo-trading/demo-trading.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BNB8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-searchbar class=\"ion-no-padding\" showCancelButton=\"focus\" (ionChange)=\"filter($event)\"></ion-searchbar>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<ion-spinner name=\"lines\" *ngIf=\"!dataLoaded;else cards\"></ion-spinner>\n\t<ion-card #cards *ngFor=\"let demo of filteredDemotrading || demotrading\" (click)=\"openPostModal(demo)\">\n\t\t<ion-card-header><h5>{{demo.title}}</h5></ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<ion-img *ngIf=\"demo.image != undefined || demo.image != null\" [src]=\"demo.image\" class=\"ion-margin-bottom\"></ion-img>\n\t\t\t<ion-text><p>{{demo.content | slice:0:120}}{{demo.content.length > 0 ? '...' : ''}}</p></ion-text>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<ion-label class=\"ion-padding\" *ngIf=\"filteredDemotrading?.length == 0 || demotrading?.length == 0\">\n\t\tThere are currently no posts inside this tab...\n\t</ion-label>\n</ion-content>\n<ion-fab horizontal=\"end\" vertical=\"bottom\" style=\"position: absolute; bottom: 10px; right: 10px\">\n\t<ion-fab-button (click)=\"openUploadPostModal()\">\n\t\t<ion-icon name=\"add\"></ion-icon>\n\t</ion-fab-button>\n</ion-fab>\n";
      /***/
    },

    /***/
    "E3xW":
    /*!**********************************************************!*\
      !*** ./src/app/pages/learning/video-swiper.directive.ts ***!
      \**********************************************************/

    /*! exports provided: VideoSwiperDirective */

    /***/
    function E3xW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoSwiperDirective", function () {
        return VideoSwiperDirective;
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

      var VideoSwiperDirective = /*#__PURE__*/function () {
        function VideoSwiperDirective(el, renderer, gestureCtrl) {
          _classCallCheck(this, VideoSwiperDirective);

          this.el = el;
          this.renderer = renderer;
          this.gestureCtrl = gestureCtrl;
        }

        _createClass(VideoSwiperDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var gesture = this.gestureCtrl.create({
              gestureName: 'video-swiper',
              el: this.el.nativeElement,
              canStart: function canStart() {
                _this4.onStart();
              },
              onStart: function onStart() {
                _this4.onStart();
              },
              onMove: function onMove() {
                _this4.onMove();
              },
              onEnd: function onEnd() {
                _this4.onUp();
              }
            });
            gesture.enable();
          }
        }, {
          key: "onStart",
          value: function onStart() {
            this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
          }
        }, {
          key: "onMove",
          value: function onMove() {
            this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
          }
        }, {
          key: "onUp",
          value: function onUp() {
            this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'all');
          }
        }]);

        return VideoSwiperDirective;
      }();

      VideoSwiperDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"]
        }];
      };

      VideoSwiperDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appVideoSwiper]'
      })], VideoSwiperDirective);
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


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>{{blog.title}}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dismissModal()\">Close</ion-button>\n\t\t</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"display: flex; flex-direction: column\">\n\t<!-- <h4 class=\"ion-padding-horizontal\"></h4> -->\n\t<ion-img *ngIf=\"blog.image != null || blog.image != undefined\" [src]=\"blog.image\" class=\"ion-margin\"></ion-img>\n\t<span class=\"ion-padding-horizontal\">{{blog.content}}</span>\n</ion-content>\n";
      /***/
    },

    /***/
    "Kdie":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learning/learning.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Kdie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-title>Marubozu</ion-title>\n\t\t<ion-img slot=\"end\" src=\"/assets/logo_no_back.png\" class=\"logo\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<super-tabs [config]=\"config\" (tabChange)=\"tabIndex($event)\" >\n\t\t<super-tabs-toolbar slot=\"top\" color=\"translucent\" scrollable=\"true\" scrollable-padding=\"false\">\n\t\t\t<super-tab-button><ion-label>Tutorials</ion-label></super-tab-button>\n\t\t\t<super-tab-button><ion-label>Blogs</ion-label></super-tab-button>\n\t\t\t<super-tab-button><ion-label>Intra-day</ion-label></super-tab-button>\n\t\t\t<super-tab-button><ion-label>Positional</ion-label></super-tab-button>\n\t\t\t<super-tab-button><ion-label>Demo-trading</ion-label></super-tab-button>\n\t\t</super-tabs-toolbar>\n\t\t<super-tabs-container>\n\t\t\t<super-tab>\n\t\t\t\t<app-tutorials></app-tutorials>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<app-blogs></app-blogs>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<app-intra-day></app-intra-day>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<app-positional></app-positional>\n\t\t\t</super-tab>\n\t\t\t<super-tab>\n\t\t\t\t<app-demo-trading></app-demo-trading>\n\t\t\t</super-tab>\n\t\t</super-tabs-container>\n\t</super-tabs>\n</ion-content>\n";
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
          value: function ngOnInit() {}
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
        blog: [{
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
    "QeVB":
    /*!*************************************************!*\
      !*** ./src/app/pages/learning/learning.page.ts ***!
      \*************************************************/

    /*! exports provided: LearningPage */

    /***/
    function QeVB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearningPage", function () {
        return LearningPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_learning_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./learning.page.html */
      "Kdie");
      /* harmony import */


      var _learning_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./learning.page.scss */
      "WJ48");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_learning_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/learning.service */
      "uetY");
      /* harmony import */


      var src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/marubozu.service */
      "BCkd");

      var LearningPage = /*#__PURE__*/function () {
        function LearningPage(sanitizer, learningService, marubozuService) {
          _classCallCheck(this, LearningPage);

          this.sanitizer = sanitizer;
          this.learningService = learningService;
          this.marubozuService = marubozuService;
          this.config = {
            allowElementScroll: true
          };
        }

        _createClass(LearningPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedTab = 0;
            this.marubozuService.activeTab.next(this.selectedTab);
            this.videos = this.learningService.videos;
          }
        }, {
          key: "sanitizeUrl",
          value: function sanitizeUrl(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }, {
          key: "tabIndex",
          value: function tabIndex(e) {
            this.selectedTab = e.detail.index;
            this.marubozuService.activeTab.next(this.selectedTab);
          }
        }]);

        return LearningPage;
      }();

      LearningPage.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: src_app_services_learning_service__WEBPACK_IMPORTED_MODULE_5__["LearningService"]
        }, {
          type: src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_6__["MarubozuService"]
        }];
      };

      LearningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_learning_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_learning_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LearningPage);
      /***/
    },

    /***/
    "W+AG":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learning/tutorials/tutorials.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WAG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\t<ion-list>\n\t\t<div *ngFor=\"let video of sanitizedVideos; let i = index\" class=\"video-card\" >\n\t\t\t<ion-label class=\"ion-padding-horizontal\"><h4 class=\"video-title\">{{video.name}}</h4></ion-label>\n\t\t\t<iframe\n\t\t\t\tclass=\"ion-padding\"\n\t\t\t\twidth=\"fit-content\"\n\t\t\t\theight=\"250\"\n\t\t\t\t[src]=\"video\"\n\t\t\t\tid=\"{{'video'+i}}\"\n\t\t\t\tframeborder=\"0\"\n\t\t\t\tallowfullscreen\n\t\t\t\tallowtransparency=\"true\"\n\t\t\t\tappVideoSwiper\n\t\t\t></iframe>\n\t\t</div>\n\t</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "WJ48":
    /*!***************************************************!*\
      !*** ./src/app/pages/learning/learning.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function WJ48(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  height: 70px;\n  width: 70px;\n  padding-right: 10px;\n}\n\nion-title {\n  color: black;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, ion-select, ion-select-option, p, h5, h3 {\n    font-size: 13px !important;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-title {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvbGVhcm5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0k7SUFDRSwwQkFBQTtFQUdKOztFQURFO0lBQ0UsMEJBQUE7RUFJSjtBQUNGOztBQUZBO0VBQ0k7SUFDSSxZQUFBO0VBSU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2xlYXJuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOmJsYWNrO1xuICB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIGlvbi10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1sYWJlbCwgaW9uLXNlbGVjdCwgaW9uLXNlbGVjdC1vcHRpb24sIHAsIGg1LCBoM3tcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIGlvbi10aXRsZXtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "YoFf":
    /*!**************************************************************!*\
      !*** ./src/app/pages/learning/positional/positional.page.ts ***!
      \**************************************************************/

    /*! exports provided: PositionalPage */

    /***/
    function YoFf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PositionalPage", function () {
        return PositionalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_positional_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./positional.page.html */
      "8g4s");
      /* harmony import */


      var _positional_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./positional.page.scss */
      "t5kT");
      /* harmony import */


      var src_app_modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modals/modal-upload-post/modal-upload-post.component */
      "x7KT");
      /* harmony import */


      var src_app_services_learning_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/learning.service */
      "uetY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modals/modal-post/modal-post.component */
      "N+8n");
      /* harmony import */


      var src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/marubozu.service */
      "BCkd");

      var PositionalPage = /*#__PURE__*/function () {
        function PositionalPage(modalController, learningService, marubozuService) {
          _classCallCheck(this, PositionalPage);

          this.modalController = modalController;
          this.learningService = learningService;
          this.marubozuService = marubozuService;
        }

        _createClass(PositionalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.dataLoaded = false;
            this.positionalPosts = this.learningService.positional;
            this.marubozuService.get('positional').subscribe(function (r) {
              console.log('positional', r);
              _this5.positionalPsts = r.data;

              _this5.positionalPsts.reverse();

              _this5.dataLoaded = true;
            });
          }
        }, {
          key: "openUploadPostModal",
          value: function openUploadPostModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_3__["ModalUploadPostComponent"],
                        componentProps: {
                          positional: true
                        }
                      });

                    case 2:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (d) {
                        if (d.data == true) {
                          _this6.marubozuService.get("positional").subscribe(function (r) {
                            _this6.positionalPsts = r.data;

                            _this6.positionalPsts.reverse();
                          });
                        }
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
          key: "openPostModal",
          value: function openPostModal(positional) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_7__["ModalPostComponent"],
                        componentProps: {
                          blog: positional
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
          key: "filter",
          value: function filter(e) {
            this.filteredPositional = this.positionalPsts.filter(function (p) {
              return p.title.toLowerCase().includes(e.detail.value.toLowerCase());
            });
            this.filteredPositional.reverse();
          }
        }]);

        return PositionalPage;
      }();

      PositionalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: src_app_services_learning_service__WEBPACK_IMPORTED_MODULE_4__["LearningService"]
        }, {
          type: src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_8__["MarubozuService"]
        }];
      };

      PositionalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-positional',
        template: _raw_loader_positional_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_positional_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PositionalPage);
      /***/
    },

    /***/
    "e3HS":
    /*!************************************************************!*\
      !*** ./src/app/pages/learning/tutorials/tutorials.page.ts ***!
      \************************************************************/

    /*! exports provided: TutorialsPage */

    /***/
    function e3HS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TutorialsPage", function () {
        return TutorialsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tutorials_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tutorials.page.html */
      "W+AG");
      /* harmony import */


      var _tutorials_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tutorials.page.scss */
      "fLLV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_learning_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/learning.service */
      "uetY");
      /* harmony import */


      var src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/marubozu.service */
      "BCkd");

      var TutorialsPage = /*#__PURE__*/function () {
        function TutorialsPage(sanitizer, learningService, marubozuService) {
          _classCallCheck(this, TutorialsPage);

          this.sanitizer = sanitizer;
          this.learningService = learningService;
          this.marubozuService = marubozuService;
        }

        _createClass(TutorialsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.sanitizedVideos = [];
            this.videos = this.learningService.videos;
            this.marubozuService.get('tutorial').subscribe(function (r) {
              _this7.vids = r.data;
            });
            this.videos.forEach(function (v) {
              var video = _this7.sanitizeUrl(v.url);

              video.name = v.name;

              _this7.sanitizedVideos.push(video);
            });
          }
        }, {
          key: "sanitizeUrl",
          value: function sanitizeUrl(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }]);

        return TutorialsPage;
      }();

      TutorialsPage.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: src_app_services_learning_service__WEBPACK_IMPORTED_MODULE_5__["LearningService"]
        }, {
          type: src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_6__["MarubozuService"]
        }];
      };

      TutorialsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tutorials',
        template: _raw_loader_tutorials_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tutorials_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TutorialsPage);
      /***/
    },

    /***/
    "fLLV":
    /*!**************************************************************!*\
      !*** ./src/app/pages/learning/tutorials/tutorials.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function fLLV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".video-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.video-card .video-title {\n  font-size: 17px;\n}\n.video-card iframe {\n  -webkit-overflow-scrolling: touch !important;\n  overflow: scroll !important;\n}\n@media screen and (max-width: 360px) {\n  .video-title {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdHV0b3JpYWxzL3R1dG9yaWFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFBSTtFQUNJLDRDQUFBO0VBQ0EsMkJBQUE7QUFFUjtBQUNBO0VBQ0k7SUFDSSxlQUFBO0VBRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL3R1dG9yaWFscy90dXRvcmlhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWNhcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC52aWRlby10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICBpZnJhbWV7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCAhaW1wb3J0YW50O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAudmlkZW8tdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "hxX9":
    /*!***************************************************!*\
      !*** ./src/app/pages/learning/learning.module.ts ***!
      \***************************************************/

    /*! exports provided: LearningPageModule */

    /***/
    function hxX9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearningPageModule", function () {
        return LearningPageModule;
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


      var _learning_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./learning-routing.module */
      "lOu7");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");
      /* harmony import */


      var _blogs_blogs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./blogs/blogs.page */
      "3Gte");
      /* harmony import */


      var _demo_trading_demo_trading_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./demo-trading/demo-trading.page */
      "7VrI");
      /* harmony import */


      var _intra_day_intra_day_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./intra-day/intra-day.page */
      "toyh");
      /* harmony import */


      var _positional_positional_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./positional/positional.page */
      "YoFf");
      /* harmony import */


      var _tutorials_tutorials_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./tutorials/tutorials.page */
      "e3HS");
      /* harmony import */


      var _learning_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./learning.page */
      "QeVB");
      /* harmony import */


      var _video_swiper_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./video-swiper.directive */
      "E3xW");

      var LearningPageModule = function LearningPageModule() {
        _classCallCheck(this, LearningPageModule);
      };

      LearningPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _learning_routing_module__WEBPACK_IMPORTED_MODULE_5__["LearningPageRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabsModule"]],
        declarations: [_video_swiper_directive__WEBPACK_IMPORTED_MODULE_13__["VideoSwiperDirective"], _learning_page__WEBPACK_IMPORTED_MODULE_12__["LearningPage"], _blogs_blogs_page__WEBPACK_IMPORTED_MODULE_7__["BlogsPage"], _demo_trading_demo_trading_page__WEBPACK_IMPORTED_MODULE_8__["DemoTradingPage"], _intra_day_intra_day_page__WEBPACK_IMPORTED_MODULE_9__["IntraDayPage"], _positional_positional_page__WEBPACK_IMPORTED_MODULE_10__["PositionalPage"], _tutorials_tutorials_page__WEBPACK_IMPORTED_MODULE_11__["TutorialsPage"]]
      })], LearningPageModule);
      /***/
    },

    /***/
    "kJx7":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learning/blogs/blogs.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function kJx7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding-top\">\n  <ion-spinner name=\"lines\" *ngIf=\"!dataLoaded;else list\"></ion-spinner>\n  <ion-list>\n    <ion-item #list class=\"ion-no-padding\" *ngFor=\"let blog of blgs\">\n      <h5 class=\"blog-link\" (click)=\"openPostModal(blog)\">- {{blog.title}}</h5>\n    </ion-item>\n  </ion-list>\n\t<ion-label class=\"ion-padding\" *ngIf=\"blgs?.length == 0\">\n\t\tThere are currently no posts inside this tab...\n\t</ion-label>\n</ion-content>\n";
      /***/
    },

    /***/
    "lOu7":
    /*!***********************************************************!*\
      !*** ./src/app/pages/learning/learning-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: LearningPageRoutingModule */

    /***/
    function lOu7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearningPageRoutingModule", function () {
        return LearningPageRoutingModule;
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


      var _learning_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./learning.page */
      "QeVB");

      var routes = [{
        path: '',
        component: _learning_page__WEBPACK_IMPORTED_MODULE_3__["LearningPage"]
      }, {
        path: 'tutorials',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tutorials-tutorials-module */
          "tutorials-tutorials-module").then(__webpack_require__.bind(null,
          /*! ./tutorials/tutorials.module */
          "+Oo0")).then(function (m) {
            return m.TutorialsPageModule;
          });
        }
      }, {
        path: 'blogs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | blogs-blogs-module */
          "blogs-blogs-module").then(__webpack_require__.bind(null,
          /*! ./blogs/blogs.module */
          "grfK")).then(function (m) {
            return m.BlogsPageModule;
          });
        }
      }, {
        path: 'intra-day',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | intra-day-intra-day-module */
          "intra-day-intra-day-module").then(__webpack_require__.bind(null,
          /*! ./intra-day/intra-day.module */
          "YczX")).then(function (m) {
            return m.IntraDayPageModule;
          });
        }
      }, {
        path: 'positional',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | positional-positional-module */
          "positional-positional-module").then(__webpack_require__.bind(null,
          /*! ./positional/positional.module */
          "Qaw3")).then(function (m) {
            return m.PositionalPageModule;
          });
        }
      }, {
        path: 'demo-trading',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | demo-trading-demo-trading-module */
          "demo-trading-demo-trading-module").then(__webpack_require__.bind(null,
          /*! ./demo-trading/demo-trading.module */
          "CYHy")).then(function (m) {
            return m.DemoTradingPageModule;
          });
        }
      }];

      var LearningPageRoutingModule = function LearningPageRoutingModule() {
        _classCallCheck(this, LearningPageRoutingModule);
      };

      LearningPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LearningPageRoutingModule);
      /***/
    },

    /***/
    "m9Sb":
    /*!******************************************************!*\
      !*** ./src/app/pages/learning/blogs/blogs.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function m9Sb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".blog-link {\n  text-decoration: none;\n  font-size: 15px;\n  padding: 10px;\n  text-justify: newspaper;\n  color: #131313;\n}\n\nion-spinner {\n  width: 100%;\n  margin: 25px auto;\n}\n\n.blog-link:active {\n  color: #070707;\n}\n\n@media screen and (max-width: 360px) {\n  .blog-link {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYmxvZ3MvYmxvZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBREE7RUFDSTtJQUNFLDBCQUFBO0VBSUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2Jsb2dzL2Jsb2dzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWxpbmt7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtanVzdGlmeTogbmV3c3BhcGVyO1xuICAgIGNvbG9yOiMxMzEzMTM7XG59XG5pb24tc3Bpbm5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbn1cbi5ibG9nLWxpbms6YWN0aXZle1xuICAgIGNvbG9yOiMwNzA3MDc7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC5ibG9nLWxpbmt7XG4gICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "sJFR":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learning/intra-day/intra-day.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sJFR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-searchbar class=\"ion-no-padding\" showCancelButton=\"focus\" (ionChange)=\"filter($event)\"></ion-searchbar>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<ion-spinner name=\"lines\" *ngIf=\"!dataLoaded; else cards\"></ion-spinner>\n\t<ion-card #cards *ngFor=\"let intraDay of filteredPosts || intraday\" (click)=\"openPostModal(intraDay)\">\n\t\t<ion-card-header><h5>{{intraDay.title}}</h5></ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<ion-img *ngIf=\"intraDay.image != null || intraDay.image != undefined\" [src]=\"intraDay.image\" class=\"ion-margin-bottom\"></ion-img>\n\t\t\t<ion-text><p>{{intraDay.content | slice:0:120}}{{intraDay.content.length > 0 ? '...' : ''}}</p></ion-text>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<ion-label class=\"ion-padding\" *ngIf=\"filteredPosts?.length == 0 || intraday?.length == 0\">\n\t\tThere are currently no posts inside this tab...\n\t</ion-label>\n</ion-content>\n<ion-fab horizontal=\"end\" vertical=\"bottom\" style=\"position: absolute; bottom: 10px; right: 10px\">\n\t<ion-fab-button (click)=\"openUploadPostModal()\">\n\t\t<ion-icon name=\"add\"></ion-icon>\n\t</ion-fab-button>\n</ion-fab>\n";
      /***/
    },

    /***/
    "t5kT":
    /*!****************************************************************!*\
      !*** ./src/app/pages/learning/positional/positional.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function t5kT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".post-button {\n  width: 100%;\n  height: 50px;\n}\n\nion-spinner {\n  margin: 25px auto;\n  width: 100%;\n}\n\n@media screen and (max-width: 360px) {\n  ion-title {\n    font-size: 15px !important;\n  }\n\n  ion-label, .post-button, p, h5, h3 {\n    font-size: 13px !important;\n  }\n\n  .post-button {\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvcG9zaXRpb25hbC9wb3NpdGlvbmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNJO0lBQ0UsMEJBQUE7RUFHSjs7RUFERTtJQUNFLDBCQUFBO0VBSUo7O0VBRkU7SUFDSSxZQUFBO0VBS047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL3Bvc2l0aW9uYWwvcG9zaXRpb25hbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuaW9uLXNwaW5uZXJ7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgaW9uLXRpdGxle1xuICAgICAgZm9udC1zaXplOjE1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWxhYmVsLCAucG9zdC1idXR0b24sIHAsIGg1LCBoM3tcbiAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucG9zdC1idXR0b257XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "toyh":
    /*!************************************************************!*\
      !*** ./src/app/pages/learning/intra-day/intra-day.page.ts ***!
      \************************************************************/

    /*! exports provided: IntraDayPage */

    /***/
    function toyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntraDayPage", function () {
        return IntraDayPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_intra_day_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./intra-day.page.html */
      "sJFR");
      /* harmony import */


      var _intra_day_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./intra-day.page.scss */
      "/XCW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modals/modal-upload-post/modal-upload-post.component */
      "x7KT");
      /* harmony import */


      var src_app_modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modals/modal-post/modal-post.component */
      "N+8n");
      /* harmony import */


      var src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/marubozu.service */
      "BCkd");

      var STORAGE_KEY = "assets";

      var IntraDayPage = /*#__PURE__*/function () {
        // images = [];
        function IntraDayPage(modalController, marubozuService) {
          _classCallCheck(this, IntraDayPage);

          this.modalController = modalController;
          this.marubozuService = marubozuService;
        }

        _createClass(IntraDayPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getIntraday();
            this.dataLoaded = false;
          }
        }, {
          key: "getIntraday",
          value: function getIntraday() {
            var _this8 = this;

            this.marubozuService.activeTab.subscribe(function (n) {
              if (n == 2) {
                _this8.marubozuService.get("intraday").subscribe(function (r) {
                  _this8.intraday = r.data;

                  _this8.intraday.reverse();

                  _this8.dataLoaded = true;
                });
              }
            });
          }
        }, {
          key: "openUploadPostModal",
          value: function openUploadPostModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this9 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_upload_post_modal_upload_post_component__WEBPACK_IMPORTED_MODULE_5__["ModalUploadPostComponent"],
                        componentProps: {
                          intraDay: true
                        }
                      });

                    case 2:
                      modal = _context6.sent;
                      modal.onDidDismiss().then(function (d) {
                        if (d.data == true) {
                          _this9.marubozuService.get("intraday").subscribe(function (r) {
                            _this9.intraday = r.data;

                            _this9.intraday.reverse();
                          });
                        }
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
          key: "openPostModal",
          value: function openPostModal(intraDay) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_modal_post_modal_post_component__WEBPACK_IMPORTED_MODULE_6__["ModalPostComponent"],
                        componentProps: {
                          blog: intraDay
                        }
                      });

                    case 2:
                      modal = _context7.sent;
                      _context7.next = 5;
                      return modal.present();

                    case 5:
                      return _context7.abrupt("return", _context7.sent);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "filter",
          value: function filter(ev) {
            this.filteredPosts = this.intraday.filter(function (p) {
              return p.title.toLowerCase().includes(ev.detail.value.toLowerCase());
            });
            this.filteredPosts.reverse();
          }
        }]);

        return IntraDayPage;
      }();

      IntraDayPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_marubozu_service__WEBPACK_IMPORTED_MODULE_7__["MarubozuService"]
        }];
      };

      IntraDayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-intra-day",
        template: _raw_loader_intra_day_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_intra_day_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IntraDayPage);
      /***/
    },

    /***/
    "uetY":
    /*!**********************************************!*\
      !*** ./src/app/services/learning.service.ts ***!
      \**********************************************/

    /*! exports provided: LearningService */

    /***/
    function uetY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearningService", function () {
        return LearningService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LearningService = /*#__PURE__*/function () {
        function LearningService() {
          _classCallCheck(this, LearningService);

          this.videos = [{
            name: "COURSE INTRODUCTION | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/fj7BZ-rNNp0"
          }, {
            name: "1 - CAN TRADERS TRULY MAKE MONEY? -- TRADER'S 'SECRET' | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/4Xnb2muagQI"
          }, {
            name: "2 - CHART READING PRINCIPLES & TIPS | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/ZpsiVG1uI4k"
          }, {
            name: "3 - HOW TO READ PRICE CANDLESTICKS & PATTERNS | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/zzjWWME993I"
          }, {
            name: "4 - HOW TO FIND SUPPORTS & RESISTANCES ON THE CHARTS | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/q2rzEfJmHXY"
          }, {
            name: "5 - HOW TO USE MOVING AVERAGES IN TRADING | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/U2QVO_QMKYg"
          }, {
            name: "6 - HOW TO USE TECHNICAL INDICATORS IN TRADING | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/gVb6vj_MsDE"
          }, {
            name: "7 - HOW TO ANALYSE THE MARKET CYCLE | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/HFY-BrxzUsY"
          }, {
            name: "8 - HOW TO TRADE TRENDS & TREND FOLLOWING STRATEGIES | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/Vr8CpV45uio"
          }, {
            name: "9 - HOW TO TRADE BREAKOUTS & MARKETS IN RANGES | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/PhjdsX72RDo"
          }, {
            name: "10 - HOW TO USE CHART PATTERNS IN TECHNICAL ANALYSIS | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/XMEMct6gRWE"
          }, {
            name: "11 - HOW TO CALCULATE POSITION SIZE IN TRADING? | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/Pem8OQyiii0"
          }, {
            name: "12 - RISK MANAGEMENT & TRADE MANAGEMENT IN TRADING | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/K2_fFOd7obs"
          }, {
            name: "13 - HOW TO DESIGN YOUR OWN TRADING SYSTEM LIKE A PRO | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/T1Zfwygo5ww"
          }, {
            name: "14 - CASE STUDY: COMPLETE GUIDE ON TURTLE TRADING SYSTEM | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/kBstdk-_kb8"
          }, {
            name: "15 - TRADING PSYCHOLOGY & TOP WINNING TRADER'S MINDSET | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/c42agqmq5u0"
          }, {
            name: "16 - TOP 12 WINNING HABITS OF MOST SUCCESSFUL TRADERS | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/uD9Iffyuds0"
          }, {
            name: "17 - THE PROCESS OF BECOMING A TRADER | Complete Trading Tutorials For Beginners",
            url: "http://www.youtube-nocookie.com/embed/KldlanjmmdU"
          }];
          this.blogs = [{
            id: 1,
            name: '10 best JavaScript practices recommended by Top Developers',
            url: 'https://blog.hrithwik.me/10-best-javascript-practices-recommended-by-top-developers'
          }, {
            id: 2,
            name: '10 Inspiring Ideas for Your Next Front-End Project',
            url: 'https://dev.to/simonholdorf/10-inspiring-ideas-for-your-next-front-end-project-11bh'
          }, {
            id: 3,
            name: 'em, rem, and px',
            url: 'https://levelup.gitconnected.com/em-rem-and-px-e147619c26ee'
          }];
          this.intraDay = [{
            name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vero.',
            shareName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vero.',
            imgURL: 'https://g.foolcdn.com/editorial/images/488994/getty-stock-market-data.jpg',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde sit suscipit veritatis, fugiat amet? Sed odio\n      veniam tenetur, excepturi accusamus itaque dolor necessitatibus, ipsam atque, iste in esse est magni quia quibusdam.\n      Aut, dolorem excepturi laboriosam tenetur, quas hic at praesentium pariatur eos temporibus, in cum modi amet blanditiis\n      repudiandae vel quasi. Laborum aliquam molestias necessitatibus voluptatem voluptate iusto sapiente ducimus magni\n      laudantium dolores doloribus deleniti nam eos autem praesentium omnis voluptatibus harum, rem sit eum, eligendi ea\n      tempora. Eveniet odio, fugiat libero sequi officiis a distinctio vel sit totam facilis, laboriosam quam sapiente ducimus\n      possimus natus perferendis soluta."
          }];
          this.positional = [{
            name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vero.',
            shareName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vero.',
            imgURL: 'https://g.foolcdn.com/editorial/images/488994/getty-stock-market-data.jpg',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde sit suscipit veritatis, fugiat amet? Sed odio\n      veniam tenetur, excepturi accusamus itaque dolor necessitatibus, ipsam atque, iste in esse est magni quia quibusdam.\n      Aut, dolorem excepturi laboriosam tenetur, quas hic at praesentium pariatur eos temporibus, in cum modi amet blanditiis\n      repudiandae vel quasi. Laborum aliquam molestias necessitatibus voluptatem voluptate iusto sapiente ducimus magni\n      laudantium dolores doloribus deleniti nam eos autem praesentium omnis voluptatibus harum, rem sit eum, eligendi ea\n      tempora. Eveniet odio, fugiat libero sequi officiis a distinctio vel sit totam facilis, laboriosam quam sapiente ducimus\n      possimus natus perferendis soluta."
          }];
        }

        _createClass(LearningService, [{
          key: "getBlog",
          value: function getBlog(id) {
            return this.blogs.find(function (b) {
              return b.id == id;
            });
          }
        }]);

        return LearningService;
      }();

      LearningService.ctorParameters = function () {
        return [];
      };

      LearningService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LearningService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-learning-learning-module-es5.js.map