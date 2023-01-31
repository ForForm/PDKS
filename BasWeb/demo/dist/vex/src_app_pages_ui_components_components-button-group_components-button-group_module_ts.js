(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components-button-group_components-button-group_module_ts"],{

/***/ 28204:
/*!***********************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-format-align-center.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path d=\"M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 73960:
/*!************************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-format-align-justify.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path d=\"M3 3h18v2H3zm0 8h18v2H3zm0 8h18v2H3zm0-4h18v2H3zm0-8h18v2H3z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 26267:
/*!*********************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-format-align-left.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path d=\"M3 19h18v2H3zM3 7h12v2H3zm0-4h18v2H3zm0 12h12v2H3zm0-4h18v2H3z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 83270:
/*!**********************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-format-align-right.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path d=\"M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 250:
/*!********************************************************!*\
  !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInRightAnimation": () => (/* binding */ fadeInRightAnimation),
/* harmony export */   "fadeInRight400ms": () => (/* binding */ fadeInRight400ms)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);

function fadeInRightAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInRight', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(-20px)',
                opacity: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInRight400ms = fadeInRightAnimation(400);


/***/ }),

/***/ 84309:
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInUpAnimation": () => (/* binding */ fadeInUpAnimation),
/* harmony export */   "fadeInUp400ms": () => (/* binding */ fadeInUp400ms)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);

function fadeInUpAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ 5291:
/*!***************************************************!*\
  !*** ./src/@vex/animations/scale-in.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleInAnimation": () => (/* binding */ scaleInAnimation),
/* harmony export */   "scaleIn400ms": () => (/* binding */ scaleIn400ms)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);

function scaleInAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleIn', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(0)'
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(1)'
            }))
        ])
    ]);
}
const scaleIn400ms = scaleInAnimation(400);


/***/ }),

/***/ 41238:
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "staggerAnimation": () => (/* binding */ staggerAnimation),
/* harmony export */   "stagger80ms": () => (/* binding */ stagger80ms),
/* harmony export */   "stagger60ms": () => (/* binding */ stagger60ms),
/* harmony export */   "stagger40ms": () => (/* binding */ stagger40ms),
/* harmony export */   "stagger20ms": () => (/* binding */ stagger20ms)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);

function staggerAnimation(timing) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('stagger', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(timing, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ 42774:
/*!**************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutContentDirective": () => (/* binding */ PageLayoutContentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

class PageLayoutContentDirective {
    constructor() { }
}
PageLayoutContentDirective.ɵfac = function PageLayoutContentDirective_Factory(t) { return new (t || PageLayoutContentDirective)(); };
PageLayoutContentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PageLayoutContentDirective, selectors: [["", "vexPageLayoutContent", ""], ["vex-page-layout-content"]], hostAttrs: [1, "vex-page-layout-content"] });


/***/ }),

/***/ 63068:
/*!*************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-header.directive.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutHeaderDirective": () => (/* binding */ PageLayoutHeaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

class PageLayoutHeaderDirective {
    constructor() { }
}
PageLayoutHeaderDirective.ɵfac = function PageLayoutHeaderDirective_Factory(t) { return new (t || PageLayoutHeaderDirective)(); };
PageLayoutHeaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PageLayoutHeaderDirective, selectors: [["", "vexPageLayoutHeader", ""], ["vex-page-layout-header"]], hostAttrs: [1, "vex-page-layout-header"] });


/***/ }),

/***/ 52687:
/*!******************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutComponent": () => (/* binding */ PageLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

const _c0 = ["*"];
class PageLayoutComponent {
    constructor() {
        this.mode = 'simple';
    }
    get isCard() {
        return this.mode === 'card';
    }
    get isSimple() {
        return this.mode === 'simple';
    }
}
PageLayoutComponent.ɵfac = function PageLayoutComponent_Factory(t) { return new (t || PageLayoutComponent)(); };
PageLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLayoutComponent, selectors: [["vex-page-layout"]], hostAttrs: [1, "vex-page-layout"], hostVars: 4, hostBindings: function PageLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vex-page-layout-card", ctx.isCard)("vex-page-layout-simple", ctx.isSimple);
    } }, inputs: { mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function PageLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.vex-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.vex-page-layout-header .vex-breadcrumb {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 0.5;\n}\n\n.vex-page-layout-header .vex-breadcrumb:hover {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 1;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL2xpYi9saWIvc3Vic3RpdHV0ZUNsYXNzQXBwbHlBdFJ1bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUlFO0VBQ0UscUNBQUE7RUFDQSxrQ0FBQTtBQURKOztBQUtBO0VBQ0UsOEJBQUE7QUFGRjs7QUFJRTtFQUNFLDJEQUFBO0VBQ0EsaURBQUE7QUFGSjs7QUFNSTs7RUFFRSx5Q0FBQTtBQUpOOztBQU1NOztFQUNFLFVBQUE7QUFIUjs7QUFTQTtFQUNFLG1CQUFBO0VDL0JGLDJDQUFtQjtFQUFuQix5Q0FBbUI7RURpQ2pCLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0ZBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFORjs7QUFRRTtFQ3pDRix5Q0FBbUI7RUFBbkIsWUFBbUI7QURvQ25COztBQVFJO0VDNUNKLHlDQUFtQjtFQUFuQixVQUFtQjtBRHVDbkI7O0FBV0E7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FBUkYiLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmV4LXBhZ2UtbGF5b3V0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnZleC1wYWdlLWxheW91dC1zaW1wbGUge1xyXG5cclxuICAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XHJcbiAgfVxyXG59XHJcblxyXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQge1xyXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcclxuXHJcbiAgLnZleC1wYWdlLWxheW91dC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkgKiAtMSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLnZleC1wYWdlLWxheW91dC1jb250ZW50IHtcclxuICAgID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxyXG4gICAgPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xyXG5cclxuICAgICAgJi5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQGFwcGx5IGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWNvbnRyYXN0O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS1wYWdlLWxheW91dC1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KSk7XHJcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nKTtcclxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcclxuXHJcbiAgLnZleC1icmVhZGNydW1iIHtcclxuICAgIEBhcHBseSB0ZXh0LXByaW1hcnktY29udHJhc3Qgb3BhY2l0eS01MDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgQGFwcGx5IHRleHQtcHJpbWFyeS1jb250cmFzdCBvcGFjaXR5LTEwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcclxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XHJcbn1cclxuIiwiQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7Il19 */"], encapsulation: 2 });


/***/ }),

/***/ 91417:
/*!***************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutModule": () => (/* binding */ PageLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout.component */ 52687);
/* harmony import */ var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-header.directive */ 63068);
/* harmony import */ var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout-content.directive */ 42774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);





class PageLayoutModule {
}
PageLayoutModule.ɵfac = function PageLayoutModule_Factory(t) { return new (t || PageLayoutModule)(); };
PageLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PageLayoutModule });
PageLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PageLayoutModule, { declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutHeaderDirective, _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutContentDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutHeaderDirective, _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutContentDirective] }); })();


/***/ }),

/***/ 93863:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-button-group/components-button-group-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsButtonGroupRoutingModule": () => (/* binding */ ComponentsButtonGroupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _components_button_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-button-group.component */ 91562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _components_button_group_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonGroupComponent
    }
];
class ComponentsButtonGroupRoutingModule {
}
ComponentsButtonGroupRoutingModule.ɵfac = function ComponentsButtonGroupRoutingModule_Factory(t) { return new (t || ComponentsButtonGroupRoutingModule)(); };
ComponentsButtonGroupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComponentsButtonGroupRoutingModule });
ComponentsButtonGroupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsButtonGroupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 91562:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-button-group/components-button-group.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsButtonGroupComponent": () => (/* binding */ ComponentsButtonGroupComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ 77499);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 41238);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ 5291);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ 250);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.component */ 52687);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 44480);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 68298);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout-content.directive */ 42774);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.directive */ 18259);
/* harmony import */ var _components_overview_components_components_overview_button_group_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components-overview/components/components-overview-button-group/components-overview-button-group.component */ 50339);












const _c0 = function () { return ["Components", "Button Group"]; };
class ComponentsButtonGroupComponent {
    constructor() {
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    ngOnInit() {
    }
}
ComponentsButtonGroupComponent.ɵfac = function ComponentsButtonGroupComponent_Factory(t) { return new (t || ComponentsButtonGroupComponent)(); };
ComponentsButtonGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ComponentsButtonGroupComponent, selectors: [["vex-components-button-group"]], decls: 5, vars: 4, consts: [["current", "Button Group"], [3, "crumbs"], ["vexContainer", ""], [1, "block"]], template: function ComponentsButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "vex-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "vex-components-overview-button-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@stagger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInUp", undefined);
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutComponent, _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsComponent, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutContentDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__.ContainerDirective, _components_overview_components_components_overview_button_group_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_10__.ComponentsOverviewButtonGroupComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger80ms,
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__.scaleIn400ms,
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInRight400ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp400ms
        ] } });


/***/ }),

/***/ 32387:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-button-group/components-button-group.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsButtonGroupModule": () => (/* binding */ ComponentsButtonGroupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_button_group_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-button-group-routing.module */ 93863);
/* harmony import */ var _components_button_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components-button-group.component */ 91562);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ 91417);
/* harmony import */ var _components_overview_components_components_overview_button_group_components_overview_button_group_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components-overview/components/components-overview-button-group/components-overview-button-group.module */ 30687);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 1465);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 72781);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);











class ComponentsButtonGroupModule {
}
ComponentsButtonGroupModule.ɵfac = function ComponentsButtonGroupModule_Factory(t) { return new (t || ComponentsButtonGroupModule)(); };
ComponentsButtonGroupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ComponentsButtonGroupModule });
ComponentsButtonGroupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _components_button_group_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonGroupRoutingModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
            _components_overview_components_components_overview_button_group_components_overview_button_group_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsOverviewButtonGroupModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ComponentsButtonGroupModule, { declarations: [_components_button_group_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsButtonGroupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _components_button_group_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsButtonGroupRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _components_overview_components_components_overview_button_group_components_overview_button_group_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsOverviewButtonGroupModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__.ContainerModule] }); })();


/***/ }),

/***/ 50339:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewButtonGroupComponent": () => (/* binding */ ComponentsOverviewButtonGroupComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_format_align_left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-align-left */ 26267);
/* harmony import */ var _iconify_icons_ic_twotone_format_align_center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-align-center */ 28204);
/* harmony import */ var _iconify_icons_ic_twotone_format_align_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-align-right */ 83270);
/* harmony import */ var _iconify_icons_ic_twotone_format_align_justify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-align-justify */ 73960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 73839);











class ComponentsOverviewButtonGroupComponent {
    constructor() {
        this.buttonToggleHTML = `<mat-button-toggle-group>
  <mat-button-toggle value="left">
    <mat-icon [icIcon]="icFormatAlignLeft"></mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="center">
    <mat-icon [icIcon]="icFormatAlignCenter"></mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="right">
    <mat-icon [icIcon]="icFormatAlignRight"></mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="justify">
    <mat-icon [icIcon]="icFormatAlignJustify"></mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>

<mat-button-toggle-group class="mt-6">
  <mat-button-toggle value="left">Left</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Right</mat-button-toggle>
</mat-button-toggle-group>

<mat-button-toggle-group class="mt-6" appearance="legacy">
  <mat-button-toggle value="left">Left</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Right</mat-button-toggle>
</mat-button-toggle-group>

<mat-button-toggle-group class="mt-6" vertical>
  <mat-button-toggle value="left">Top</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Bottom</mat-button-toggle>
</mat-button-toggle-group>`;
        this.icFormatAlignLeft = _iconify_icons_ic_twotone_format_align_left__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.icFormatAlignCenter = _iconify_icons_ic_twotone_format_align_center__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icFormatAlignRight = _iconify_icons_ic_twotone_format_align_right__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icFormatAlignJustify = _iconify_icons_ic_twotone_format_align_justify__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    ngOnInit() {
    }
}
ComponentsOverviewButtonGroupComponent.ɵfac = function ComponentsOverviewButtonGroupComponent_Factory(t) { return new (t || ComponentsOverviewButtonGroupComponent)(); };
ComponentsOverviewButtonGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ComponentsOverviewButtonGroupComponent, selectors: [["vex-components-overview-button-group"]], decls: 53, vars: 5, consts: [["fxLayout", "column", "fxLayout.gt-sm", "row", 1, "card"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], ["fxLayout", "column", "fxLayoutAlign", "start center"], ["value", "left"], [3, "icIcon"], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "mt-6"], ["appearance", "legacy", 1, "mt-6"], ["vertical", "", 1, "mt-6"], ["fxFlex", "", 1, "border-l"], [1, "body-2", "text-secondary", "m-0"], [1, "vex-tabs"], ["label", "DESCRIPTION"], [1, "subheading-1", "font-medium", "mb-0"], ["label", "SOURCE CODE"], [3, "vexHighlight"]], template: function ComponentsOverviewButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-button-toggle-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-button-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-button-toggle-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-button-toggle-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-button-toggle-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Button Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "<mat-button-toggle-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-tab-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Active and available toggle buttons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " A toggle button\u2019s state makes it clear which button is active. Hover and focus states express the available selection options for buttons in a toggle group. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icFormatAlignLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icFormatAlignCenter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icFormatAlignRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icFormatAlignJustify);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("vexHighlight", ctx.buttonToggleHTML);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_4__.HighlightDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLW92ZXJ2aWV3LWJ1dHRvbi1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 30687:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.module.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewButtonGroupModule": () => (/* binding */ ComponentsOverviewButtonGroupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-button-group.component */ 50339);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 81886);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);










class ComponentsOverviewButtonGroupModule {
}
ComponentsOverviewButtonGroupModule.ɵfac = function ComponentsOverviewButtonGroupModule_Factory(t) { return new (t || ComponentsOverviewButtonGroupModule)(); };
ComponentsOverviewButtonGroupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsOverviewButtonGroupModule });
ComponentsOverviewButtonGroupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewButtonGroupModule, { declarations: [_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewButtonGroupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule], exports: [_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewButtonGroupComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_components_components-button-group_components-button-group_module_ts.js.map