(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invite-friends-invite-friends-module"], {
    /***/
    "+ngP":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/invite-friends/invite-friends.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ngP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button [defaultHref]=\"['home','watchlist']\" (click)=\"navigateToAccount()\"></ion-back-button>\n\t\t</ion-buttons>\n    <ion-title>Invite friends</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "Ftk8":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/account/invite-friends/invite-friends.module.ts ***!
      \***********************************************************************/

    /*! exports provided: InviteFriendsPageModule */

    /***/
    function Ftk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InviteFriendsPageModule", function () {
        return InviteFriendsPageModule;
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


      var _invite_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invite-friends-routing.module */
      "KoxI");
      /* harmony import */


      var _invite_friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./invite-friends.page */
      "djfu");

      var InviteFriendsPageModule = function InviteFriendsPageModule() {
        _classCallCheck(this, InviteFriendsPageModule);
      };

      InviteFriendsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _invite_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__["InviteFriendsPageRoutingModule"]],
        declarations: [_invite_friends_page__WEBPACK_IMPORTED_MODULE_6__["InviteFriendsPage"]]
      })], InviteFriendsPageModule);
      /***/
    },

    /***/
    "KoxI":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/account/invite-friends/invite-friends-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: InviteFriendsPageRoutingModule */

    /***/
    function KoxI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InviteFriendsPageRoutingModule", function () {
        return InviteFriendsPageRoutingModule;
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


      var _invite_friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invite-friends.page */
      "djfu");

      var routes = [{
        path: '',
        component: _invite_friends_page__WEBPACK_IMPORTED_MODULE_3__["InviteFriendsPage"]
      }];

      var InviteFriendsPageRoutingModule = function InviteFriendsPageRoutingModule() {
        _classCallCheck(this, InviteFriendsPageRoutingModule);
      };

      InviteFriendsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InviteFriendsPageRoutingModule);
      /***/
    },

    /***/
    "djfu":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/account/invite-friends/invite-friends.page.ts ***!
      \*********************************************************************/

    /*! exports provided: InviteFriendsPage */

    /***/
    function djfu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InviteFriendsPage", function () {
        return InviteFriendsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invite_friends_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invite-friends.page.html */
      "+ngP");
      /* harmony import */


      var _invite_friends_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invite-friends.page.scss */
      "kETr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var InviteFriendsPage = /*#__PURE__*/function () {
        function InviteFriendsPage(router) {
          _classCallCheck(this, InviteFriendsPage);

          this.router = router;
        }

        _createClass(InviteFriendsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToAccount",
          value: function navigateToAccount() {
            this.router.navigate(['home', 'account']);
          }
        }]);

        return InviteFriendsPage;
      }();

      InviteFriendsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      InviteFriendsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invite-friends',
        template: _raw_loader_invite_friends_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invite_friends_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InviteFriendsPage);
      /***/
    },

    /***/
    "kETr":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/account/invite-friends/invite-friends.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function kETr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvaW52aXRlLWZyaWVuZHMvaW52aXRlLWZyaWVuZHMucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=invite-friends-invite-friends-module-es5.js.map