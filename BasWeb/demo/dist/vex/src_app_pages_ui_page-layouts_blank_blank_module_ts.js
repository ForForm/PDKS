"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_blank_blank_module_ts"],{

/***/ 1465:
/*!***************************************************************************!*\
  !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryToolbarModule": () => (/* binding */ SecondaryToolbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary-toolbar.component */ 44480);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.module */ 72781);
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);










class SecondaryToolbarModule {
}
SecondaryToolbarModule.ɵfac = function SecondaryToolbarModule_Factory(t) { return new (t || SecondaryToolbarModule)(); };
SecondaryToolbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SecondaryToolbarModule });
SecondaryToolbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule,
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SecondaryToolbarModule, { declarations: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule,
        _directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__.ContainerModule], exports: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent] }); })();


/***/ }),

/***/ 86303:
/*!*********************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/blank/blank-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankRoutingModule": () => (/* binding */ BlankRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank.component */ 46288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _blank_component__WEBPACK_IMPORTED_MODULE_0__.BlankComponent
    }
];
class BlankRoutingModule {
}
BlankRoutingModule.ɵfac = function BlankRoutingModule_Factory(t) { return new (t || BlankRoutingModule)(); };
BlankRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlankRoutingModule });
BlankRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlankRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 46288:
/*!****************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/blank/blank.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankComponent": () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 44480);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.directive */ 18259);



const _c0 = function () { return ["Blank Page"]; };
class BlankComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["vex-blank"]], decls: 4, vars: 2, consts: [["current", "Blank Page", 3, "crumbs"], ["vexContainer", "", 1, "p-gutter"], [1, "title", "m-0"]], template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Content comes here...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__.ContainerDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 85710:
/*!*************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/blank/blank.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankModule": () => (/* binding */ BlankModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-routing.module */ 86303);
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank.component */ 46288);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 1465);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);






class BlankModule {
}
BlankModule.ɵfac = function BlankModule_Factory(t) { return new (t || BlankModule)(); };
BlankModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BlankModule });
BlankModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlankRoutingModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_3__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BlankModule, { declarations: [_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlankRoutingModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_3__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_page-layouts_blank_blank_module_ts.js.map