(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intra-day-intra-day-module"],{

/***/ "BRZs":
/*!**********************************************************************!*\
  !*** ./src/app/pages/learning/intra-day/intra-day-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: IntraDayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntraDayPageRoutingModule", function() { return IntraDayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _intra_day_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intra-day.page */ "toyh");




const routes = [
    {
        path: '',
        component: _intra_day_page__WEBPACK_IMPORTED_MODULE_3__["IntraDayPage"]
    }
];
let IntraDayPageRoutingModule = class IntraDayPageRoutingModule {
};
IntraDayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntraDayPageRoutingModule);



/***/ }),

/***/ "YczX":
/*!**************************************************************!*\
  !*** ./src/app/pages/learning/intra-day/intra-day.module.ts ***!
  \**************************************************************/
/*! exports provided: IntraDayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntraDayPageModule", function() { return IntraDayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _intra_day_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intra-day-routing.module */ "BRZs");
/* harmony import */ var _intra_day_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intra-day.page */ "toyh");







let IntraDayPageModule = class IntraDayPageModule {
};
IntraDayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intra_day_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntraDayPageRoutingModule"]
        ],
        declarations: [_intra_day_page__WEBPACK_IMPORTED_MODULE_6__["IntraDayPage"]]
    })
], IntraDayPageModule);



/***/ })

}]);
//# sourceMappingURL=intra-day-intra-day-module-es2015.js.map