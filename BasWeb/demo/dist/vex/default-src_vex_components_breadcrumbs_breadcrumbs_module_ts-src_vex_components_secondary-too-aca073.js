(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"],{

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

/***/ 44480:
/*!******************************************************************************!*\
  !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryToolbarComponent": () => (/* binding */ SecondaryToolbarComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/config.service */ 63531);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/container/container.directive */ 18259);







function SecondaryToolbarComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.current);
} }
const _c0 = function (a0, a1) { return { "fixed": a0, "w-full": a1 }; };
const _c1 = ["*"];
class SecondaryToolbarComponent {
    constructor(configService) {
        this.configService = configService;
        this.fixed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(config => config.toolbar.fixed));
    }
    ngOnInit() {
    }
}
SecondaryToolbarComponent.ɵfac = function SecondaryToolbarComponent_Factory(t) { return new (t || SecondaryToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
SecondaryToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SecondaryToolbarComponent, selectors: [["vex-secondary-toolbar"]], inputs: { current: "current", crumbs: "crumbs" }, ngContentSelectors: _c1, decls: 8, vars: 9, consts: [[1, "secondary-toolbar-placeholder"], ["fxLayout", "row", 1, "secondary-toolbar", "shadow-b", "py-1", "z-40", "border-t", 3, "ngClass"], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", "", 1, "px-gutter"], ["class", "subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3", "fxFlex.xs", "auto", 4, "ngIf"], ["fxFlex.xs", "auto", 1, "subheading-2", "font-medium", "m-0", "ltr:pr-3", "rtl:pl-3", "ltr:border-r", "rtl:border-l", "ltr:mr-3", "rtl:ml-3"]], template: function SecondaryToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SecondaryToolbarComponent_h1_6_Template, 2, 1, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx.fixed$), !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx.fixed$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.current);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__.ContainerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: [".secondary-toolbar[_ngcontent-%COMP%] {\n  background: var(--secondary-toolbar-background);\n  height: var(--secondary-toolbar-height);\n  margin-top: calc(var(--secondary-toolbar-height) * -1);\n}\n\n.secondary-toolbar.fixed[_ngcontent-%COMP%] {\n  width: var(--toolbar-width);\n}\n\n.secondary-toolbar-placeholder[_ngcontent-%COMP%] {\n  height: var(--secondary-toolbar-height);\n}\n\n  .is-mobile .fixed {\n  width: 100%;\n}\n\n  body .fixed {\n  width: calc(100% - var(--sidenav-width));\n}\n\n  vex-breadcrumbs {\n  display: none;\n}\n\n@media (min-width: 600px) {\n    vex-breadcrumbs {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL2xpYi9saWIvc3Vic3RpdHV0ZUNsYXNzQXBwbHlBdFJ1bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHNEQUFBO0FBQ0Y7O0FBQ0U7RUFDRSwyQkFBQTtBQUNKOztBQUdBO0VBQ0UsdUNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLHdDQUFBO0FBQUY7O0FBSUU7RUNyQkYsYUFBbUI7QURxQm5COztBQUlFO0VBQ0U7SUMxQkosY0FBbUI7RUR5QmpCO0FBQ0YiLCJmaWxlIjoic2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vjb25kYXJ5LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWJhY2tncm91bmQpO1xyXG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcclxuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCkgKiAtMSk7XHJcblxyXG4gICYuZml4ZWQge1xyXG4gICAgd2lkdGg6IHZhcigtLXRvb2xiYXItd2lkdGgpO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY29uZGFyeS10b29sYmFyLXBsYWNlaG9sZGVyIHtcclxuICBoZWlnaHQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuaXMtbW9iaWxlIC5maXhlZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBib2R5IC5maXhlZCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpZGVuYXYtd2lkdGgpKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICB2ZXgtYnJlYWRjcnVtYnMge1xyXG4gICAgQGFwcGx5IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIEBzY3JlZW4gc20ge1xyXG4gICAgdmV4LWJyZWFkY3J1bWJzIHtcclxuICAgICAgQGFwcGx5IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzOyJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073.js.map