(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invite-friends-invite-friends-module"],{

/***/ "+ngP":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/invite-friends/invite-friends.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button [defaultHref]=\"['home','watchlist']\" (click)=\"navigateToAccount()\"></ion-back-button>\n\t\t</ion-buttons>\n    <ion-title>Invite friends</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"height: 100%;width: 100%;display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;\">\n    <ion-label>\n      <span style=\"font-weight: 500;\">Invite your friends<br>for some amazing rewards!</span>\n    </ion-label>\n    <ion-button style=\"width: 80%; height: 50px;\" class=\"ion-margin\" (click)=\"shareLink()\">Invite</ion-button>\n    <ion-label class=\"ion-margin-vertical\">\n      <span style=\"font-weight: 500; font-size: 14px;\">or just copy this link</span>\n    </ion-label>\n    <ion-item style=\"width:80%\">\n      <ion-input readonly [value]=\"link\"></ion-input>\n      <ion-icon name=\"attach-outline\" (click)=\"showToast()\"></ion-icon>\n    </ion-item>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Ftk8":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account/invite-friends/invite-friends.module.ts ***!
  \***********************************************************************/
/*! exports provided: InviteFriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendsPageModule", function() { return InviteFriendsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _invite_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invite-friends-routing.module */ "KoxI");
/* harmony import */ var _invite_friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invite-friends.page */ "djfu");







let InviteFriendsPageModule = class InviteFriendsPageModule {
};
InviteFriendsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _invite_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__["InviteFriendsPageRoutingModule"]
        ],
        declarations: [_invite_friends_page__WEBPACK_IMPORTED_MODULE_6__["InviteFriendsPage"]]
    })
], InviteFriendsPageModule);



/***/ }),

/***/ "KoxI":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/account/invite-friends/invite-friends-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InviteFriendsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendsPageRoutingModule", function() { return InviteFriendsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _invite_friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invite-friends.page */ "djfu");




const routes = [
    {
        path: '',
        component: _invite_friends_page__WEBPACK_IMPORTED_MODULE_3__["InviteFriendsPage"]
    }
];
let InviteFriendsPageRoutingModule = class InviteFriendsPageRoutingModule {
};
InviteFriendsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InviteFriendsPageRoutingModule);



/***/ }),

/***/ "djfu":
/*!*********************************************************************!*\
  !*** ./src/app/pages/account/invite-friends/invite-friends.page.ts ***!
  \*********************************************************************/
/*! exports provided: InviteFriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendsPage", function() { return InviteFriendsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invite_friends_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invite-friends.page.html */ "+ngP");
/* harmony import */ var _invite_friends_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite-friends.page.scss */ "kETr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "zzaN");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");








let InviteFriendsPage = class InviteFriendsPage {
    constructor(router, toastController, clipboard, socialSharing) {
        this.router = router;
        this.toastController = toastController;
        this.clipboard = clipboard;
        this.socialSharing = socialSharing;
        this.link = "https://somelinktosomething.com";
        this.googlePlayLink = "https://play.google.com/store/apps/details?id=" + 'io.ionic.starter';
    }
    ngOnInit() {
    }
    shareLink() {
        this.socialSharing.share('', 'Invite friends', '', this.link).then(() => { });
    }
    navigateToAccount() {
        this.router.navigate(['home', 'account']);
    }
    showToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.clipboard.copy(this.link);
            const toast = yield this.toastController.create({
                message: 'Link is copied to your clipboard',
                duration: 2500
            });
            toast.present();
        });
    }
};
InviteFriendsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Clipboard"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] }
];
InviteFriendsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invite-friends',
        template: _raw_loader_invite_friends_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invite_friends_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InviteFriendsPage);



/***/ }),

/***/ "kETr":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account/invite-friends/invite-friends.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvaW52aXRlLWZyaWVuZHMvaW52aXRlLWZyaWVuZHMucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=invite-friends-invite-friends-module-es2015.js.map