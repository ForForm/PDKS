(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_page-layouts_card_page-layout-card-large-header-tabbed_page-layout-card-larg-0c3e5b"],{

/***/ 4469:
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-home.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path d=\"M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5l5 4.5V18z\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 71312:
/*!****************************************************************************!*\
  !*** ./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

const _c0 = ["*"];
class BreadcrumbComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["vex-breadcrumb"]], hostAttrs: [1, "vex-breadcrumb", "body-2", "text-hint", "leading-none", "hover:text-primary", "no-underline", "trans-ease-out", "ltr:mr-2", "rtl:ml-2"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 68298:
/*!******************************************************************!*\
  !*** ./src/@vex/components/breadcrumbs/breadcrumbs.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsComponent": () => (/* binding */ BreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-home */ 4469);
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/track-by */ 45007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 71312);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);







const _c0 = function () { return []; };
function BreadcrumbsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "vex-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const crumb_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](crumb_r1);
} }
const _c1 = function () { return ["/"]; };
class BreadcrumbsComponent {
    constructor() {
        this.crumbs = [];
        this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_1__.trackByValue;
        this.icHome = _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    ngOnInit() {
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["vex-breadcrumbs"]], inputs: { crumbs: "crumbs" }, decls: 5, vars: 5, consts: [[1, "flex", "items-center"], [3, "routerLink"], ["inline", "true", "size", "20px", 3, "icon"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "w-1", "h-1", "bg-gray", "rounded-full", "ltr:mr-2", "rtl:ml-2"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "vex-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ic-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BreadcrumbsComponent_ng_container_4_Template, 5, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.icHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.crumbs)("ngForTrackBy", ctx.trackByValue);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 72781:
/*!***************************************************************!*\
  !*** ./src/@vex/components/breadcrumbs/breadcrumbs.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsModule": () => (/* binding */ BreadcrumbsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs.component */ 68298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 71312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);








class BreadcrumbsModule {
}
BreadcrumbsModule.ɵfac = function BreadcrumbsModule_Factory(t) { return new (t || BreadcrumbsModule)(); };
BreadcrumbsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BreadcrumbsModule });
BreadcrumbsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BreadcrumbsModule, { declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule], exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent] }); })();


/***/ }),

/***/ 68856:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed-routing.module.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutCardLargeHeaderTabbedRoutingModule": () => (/* binding */ PageLayoutCardLargeHeaderTabbedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-card-large-header-tabbed.component */ 18560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardLargeHeaderTabbedComponent
    }
];
class PageLayoutCardLargeHeaderTabbedRoutingModule {
}
PageLayoutCardLargeHeaderTabbedRoutingModule.ɵfac = function PageLayoutCardLargeHeaderTabbedRoutingModule_Factory(t) { return new (t || PageLayoutCardLargeHeaderTabbedRoutingModule)(); };
PageLayoutCardLargeHeaderTabbedRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageLayoutCardLargeHeaderTabbedRoutingModule });
PageLayoutCardLargeHeaderTabbedRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutCardLargeHeaderTabbedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 18560:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutCardLargeHeaderTabbedComponent": () => (/* binding */ PageLayoutCardLargeHeaderTabbedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.component */ 52687);
/* harmony import */ var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout-header.directive */ 63068);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.directive */ 18259);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 68298);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout-content.directive */ 42774);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.component */ 25714);









const _c0 = function () { return ["Page Layouts", "Card", "Large Header & Tabbed"]; };
class PageLayoutCardLargeHeaderTabbedComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageLayoutCardLargeHeaderTabbedComponent.ɵfac = function PageLayoutCardLargeHeaderTabbedComponent_Factory(t) { return new (t || PageLayoutCardLargeHeaderTabbedComponent)(); };
PageLayoutCardLargeHeaderTabbedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PageLayoutCardLargeHeaderTabbedComponent, selectors: [["vex-page-layout-card-large-header-tabbed"]], decls: 18, vars: 2, consts: [["mode", "card"], ["fxLayout", "column", "fxLayoutAlign", "center start"], ["vexContainer", ""], [1, "title", "m-0"], [3, "crumbs"], [1, "card"], ["label", "Main Tab"], [1, "p-6"], ["label", "Side Tab"], ["label", "Extra Tab"]], template: function PageLayoutCardLargeHeaderTabbedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "vex-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "vex-page-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Card - Large Header & Tabbed");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "vex-breadcrumbs", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "vex-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "vex-page-layout-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "vex-page-layout-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "vex-page-layout-demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutHeaderDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_2__.ContainerDirective, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutContentDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutDemoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1jYXJkLWxhcmdlLWhlYWRlci10YWJiZWQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 80973:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutCardLargeHeaderTabbedModule": () => (/* binding */ PageLayoutCardLargeHeaderTabbedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _page_layout_card_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-card-large-header-tabbed-routing.module */ 68856);
/* harmony import */ var _page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-card-large-header-tabbed.component */ 18560);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.module */ 91417);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 72781);
/* harmony import */ var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.module */ 83186);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);










class PageLayoutCardLargeHeaderTabbedModule {
}
PageLayoutCardLargeHeaderTabbedModule.ɵfac = function PageLayoutCardLargeHeaderTabbedModule_Factory(t) { return new (t || PageLayoutCardLargeHeaderTabbedModule)(); };
PageLayoutCardLargeHeaderTabbedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PageLayoutCardLargeHeaderTabbedModule });
PageLayoutCardLargeHeaderTabbedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _page_layout_card_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardLargeHeaderTabbedRoutingModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
            _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PageLayoutCardLargeHeaderTabbedModule, { declarations: [_page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutCardLargeHeaderTabbedComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _page_layout_card_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardLargeHeaderTabbedRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_page-layouts_card_page-layout-card-large-header-tabbed_page-layout-card-larg-0c3e5b.js.map