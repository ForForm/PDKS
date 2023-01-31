"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header_page-layout-simple-large-8440ff"],{

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

/***/ 14380:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header-routing.module.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutSimpleLargeHeaderRoutingModule": () => (/* binding */ PageLayoutSimpleLargeHeaderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-simple-large-header.component */ 54421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderComponent,
        data: {
            toolbarShadowEnabled: true
        }
    }
];
class PageLayoutSimpleLargeHeaderRoutingModule {
}
PageLayoutSimpleLargeHeaderRoutingModule.ɵfac = function PageLayoutSimpleLargeHeaderRoutingModule_Factory(t) { return new (t || PageLayoutSimpleLargeHeaderRoutingModule)(); };
PageLayoutSimpleLargeHeaderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageLayoutSimpleLargeHeaderRoutingModule });
PageLayoutSimpleLargeHeaderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutSimpleLargeHeaderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 54421:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutSimpleLargeHeaderComponent": () => (/* binding */ PageLayoutSimpleLargeHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.component */ 52687);
/* harmony import */ var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout-header.directive */ 63068);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.directive */ 18259);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 68298);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout-content.directive */ 42774);
/* harmony import */ var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.component */ 25714);








const _c0 = function () { return ["Page Layouts", "Simple", "Large Header"]; };
class PageLayoutSimpleLargeHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageLayoutSimpleLargeHeaderComponent.ɵfac = function PageLayoutSimpleLargeHeaderComponent_Factory(t) { return new (t || PageLayoutSimpleLargeHeaderComponent)(); };
PageLayoutSimpleLargeHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PageLayoutSimpleLargeHeaderComponent, selectors: [["vex-page-layout-simple-large-header"]], decls: 8, vars: 2, consts: [["fxLayout", "column", "fxLayoutAlign", "center start"], ["vexContainer", ""], [1, "title", "m-0"], [3, "crumbs"]], template: function PageLayoutSimpleLargeHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "vex-page-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Simple - Large Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "vex-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "vex-page-layout-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "vex-page-layout-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutHeaderDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_2__.ContainerDirective, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutContentDirective, _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutDemoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1zaW1wbGUtbGFyZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 51146:
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.module.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutSimpleLargeHeaderModule": () => (/* binding */ PageLayoutSimpleLargeHeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-simple-large-header-routing.module */ 14380);
/* harmony import */ var _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-simple-large-header.component */ 54421);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.module */ 91417);
/* harmony import */ var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.module */ 83186);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 1465);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 72781);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);










class PageLayoutSimpleLargeHeaderModule {
}
PageLayoutSimpleLargeHeaderModule.ɵfac = function PageLayoutSimpleLargeHeaderModule_Factory(t) { return new (t || PageLayoutSimpleLargeHeaderModule)(); };
PageLayoutSimpleLargeHeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PageLayoutSimpleLargeHeaderModule });
PageLayoutSimpleLargeHeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderRoutingModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
            _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PageLayoutSimpleLargeHeaderModule, { declarations: [_page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutSimpleLargeHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleLargeHeaderRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_page-layouts_simple_page-layout-simple-large-header_page-layout-simple-large-8440ff.js.map