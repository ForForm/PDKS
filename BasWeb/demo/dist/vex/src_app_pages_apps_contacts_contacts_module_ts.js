"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_apps_contacts_contacts_module_ts"],{

/***/ 63988:
/*!****************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsRoutingModule": () => (/* binding */ ContactsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    {
        path: '',
        children: [
            {
                path: 'grid',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_animations_fade-in-up_animation-694685"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_apps_contacts_contacts-grid_contacts-grid_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contacts-grid/contacts-grid.module */ 35542)).then(m => m.ContactsGridModule)
            },
            {
                path: 'table',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_animations_fade-in-up_animation-694685"), __webpack_require__.e("src_app_pages_apps_contacts_contacts-table_contacts-table_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contacts-table/contacts-table.module */ 14189)).then(m => m.ContactsTableModule)
            }
        ]
    }
];
class ContactsRoutingModule {
}
ContactsRoutingModule.ɵfac = function ContactsRoutingModule_Factory(t) { return new (t || ContactsRoutingModule)(); };
ContactsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactsRoutingModule });
ContactsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule] }); })();


/***/ }),

/***/ 54230:
/*!********************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsModule": () => (/* binding */ ContactsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-routing.module */ 63988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



class ContactsModule {
}
ContactsModule.ɵfac = function ContactsModule_Factory(t) { return new (t || ContactsModule)(); };
ContactsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactsModule });
ContactsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_apps_contacts_contacts_module_ts.js.map