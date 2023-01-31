(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_vex_animations_fade-in-right_animation_ts-src_vex_animations_fade-in-up_animation-b3d153"],{

/***/ 10177:
/*!************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-favorite.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path opacity=\".3\" d=\"M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1l.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z\" fill=\"currentColor\"/><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z\" fill=\"currentColor\"/>",
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

/***/ 44079:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewButtonsComponent": () => (/* binding */ ComponentsOverviewButtonsComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-favorite */ 10177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 73839);








class ComponentsOverviewButtonsComponent {
    constructor() {
        this.flatButtonsHTML = `<button mat-button>Button</button>
<button mat-button color="primary">Primary</button>
<button mat-button color="accent">Accent</button>
<button mat-button color="warn">Warn</button>
<button mat-button disabled="true">Disabled</button>`;
        this.raisedButtonsHTML = `<button mat-raised-button>Button</button>
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-raised-button color="warn">Warn</button>
<button mat-raised-button disabled="true">Disabled</button>`;
        this.fabHTML = `<button mat-fab color="primary"><mat-icon>grade</mat-icon></button>
<button mat-fab color="accent"><mat-icon>favorite</mat-icon></button>
<button mat-fab color="warn"><mat-icon>build</mat-icon></button>
<button mat-fab disabled="true"><mat-icon>lock</mat-icon></button>
<button mat-mini-fab color="primary"><mat-icon>favorite</mat-icon></button>
<button mat-mini-fab color="accent"><mat-icon>thumb_up</mat-icon></button>
<button mat-mini-fab color="warn"><mat-icon>build</mat-icon></button>
<button mat-mini-fab disabled="true"><mat-icon>lock</mat-icon></button>`;
        this.iconButtonHTML = `<button mat-icon-button><mat-icon>menu</mat-icon></button>
<button mat-icon-button color="primary"><mat-icon>grade</mat-icon></button>
<button mat-icon-button color="accent"><mat-icon>favorite</mat-icon></button>
<button mat-icon-button color="warn"><mat-icon>build</mat-icon></button>
<button mat-icon-button disabled="true"><mat-icon>lock</mat-icon></button>`;
        this.icFavorite = _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    ngOnInit() {
    }
}
ComponentsOverviewButtonsComponent.ɵfac = function ComponentsOverviewButtonsComponent_Factory(t) { return new (t || ComponentsOverviewButtonsComponent)(); };
ComponentsOverviewButtonsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ComponentsOverviewButtonsComponent, selectors: [["vex-components-overview-buttons"]], decls: 106, vars: 16, consts: [["fxLayout", "column", "fxLayout.gt-sm", "row", 1, "card"], [1, "p-6"], [1, "title", "mt-0", "mb-4"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "24px"], ["fxLayout", "column", "fxLayoutGap", "8px"], ["mat-button", ""], ["color", "primary", "mat-button", ""], ["color", "accent", "mat-button", ""], ["color", "warn", "mat-button", ""], ["disabled", "", "mat-button", ""], ["mat-stroked-button", ""], ["color", "primary", "mat-stroked-button", ""], ["color", "accent", "mat-stroked-button", ""], ["color", "warn", "mat-stroked-button", ""], ["disabled", "", "mat-stroked-button", ""], ["mat-raised-button", ""], ["color", "primary", "mat-raised-button", ""], ["color", "accent", "mat-raised-button", ""], ["color", "warn", "mat-raised-button", ""], ["disabled", "", "mat-raised-button", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px", 1, "mt-6"], ["color", "primary", "mat-icon-button", ""], [3, "icIcon"], ["color", "accent", "mat-icon-button", ""], ["color", "warn", "mat-icon-button", ""], ["disabled", "", "mat-icon-button", ""], ["color", "primary", "mat-mini-fab", ""], ["color", "accent", "mat-mini-fab", ""], ["color", "warn", "mat-mini-fab", ""], ["disabled", "", "mat-mini-fab", ""], ["color", "primary", "mat-fab", ""], ["color", "accent", "mat-fab", ""], ["color", "warn", "mat-fab", ""], ["disabled", "", "mat-fab", ""], ["fxFlex", "", 1, "border-l"], [1, "body-2", "text-secondary", "m-0"], [1, "vex-tabs"], ["label", "DESCRIPTION"], [1, "semi-bold"], ["label", "SOURCE CODE"], [3, "vexHighlight"]], template: function ComponentsOverviewButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "BUTTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "PRIMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "ACCENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "WARN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "DISABLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "BUTTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "PRIMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "ACCENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "WARN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "DISABLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "BUTTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "PRIMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "ACCENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "WARN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "DISABLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "[mat-button]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "mat-tab-group", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "mat-tab", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " Material buttons trigger an ink reaction on press. They may display text, imagery, or both. Flat buttons and raised buttons are the most commonly used types. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Flat buttons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Flat buttons are text-only buttons.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "They may be used in dialogs, toolbars, or inline.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "They do not lift, but fill with color on press.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Raised buttons:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Raised buttons are rectangular-shaped buttons.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "They may be used inline.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "They lift and display ink reactions on press.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "mat-tab", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "code", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "code", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "code", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "code", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vexHighlight", ctx.flatButtonsHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vexHighlight", ctx.raisedButtonsHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vexHighlight", ctx.iconButtonHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vexHighlight", ctx.fabHTML);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_1__.HighlightDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLW92ZXJ2aWV3LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 88549:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.module.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewButtonsModule": () => (/* binding */ ComponentsOverviewButtonsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-buttons.component */ 44079);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 81886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);










class ComponentsOverviewButtonsModule {
}
ComponentsOverviewButtonsModule.ɵfac = function ComponentsOverviewButtonsModule_Factory(t) { return new (t || ComponentsOverviewButtonsModule)(); };
ComponentsOverviewButtonsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsOverviewButtonsModule });
ComponentsOverviewButtonsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
            _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewButtonsModule, { declarations: [_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewButtonsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
        _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule], exports: [_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewButtonsComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_vex_animations_fade-in-right_animation_ts-src_vex_animations_fade-in-up_animation-b3d153.js.map