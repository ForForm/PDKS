(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_pricing_pricing_module_ts"],{

/***/ 82793:
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-mail.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path opacity=\".3\" d=\"M20 6H4l8 4.99zM4 8v10h16V8l-8 5z\" fill=\"currentColor\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


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

/***/ 26994:
/*!***************************************************************!*\
  !*** ./src/app/pages/pages/pricing/pricing-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingRoutingModule": () => (/* binding */ PricingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _pricing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing.component */ 6157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _pricing_component__WEBPACK_IMPORTED_MODULE_0__.PricingComponent
    }
];
class PricingRoutingModule {
}
PricingRoutingModule.ɵfac = function PricingRoutingModule_Factory(t) { return new (t || PricingRoutingModule)(); };
PricingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PricingRoutingModule });
PricingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PricingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 6157:
/*!**********************************************************!*\
  !*** ./src/app/pages/pages/pricing/pricing.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-beenhere */ 76143);
/* harmony import */ var _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-stars */ 80391);
/* harmony import */ var _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-business-center */ 53707);
/* harmony import */ var _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone-in-talk */ 33802);
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ 82793);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/animations/stagger.animation */ 41238);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);












class PricingComponent {
    constructor() {
        this.icBeenhere = _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.icStars = _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icBusinessCenter = _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icPhoneInTalk = _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_4__["default"];
    }
    ngOnInit() {
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["vex-pricing"]], decls: 106, vars: 12, consts: [[1, "bg-card", "py-16", "px-gutter"], [1, "display-2", "mt-0", "mb-4", "text-center"], [1, "subheading-2", "text-hint", "text-center", "max-w-lg", "mx-auto", "m-0"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "start start", "fxLayoutAlign.xs", "start stretch", "fxLayoutGap", "24px", 1, "my-12", "container"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "start center", 1, "card", "p-6"], [1, "inline-block", "p-6", "rounded-full", "text-primary", "mx-auto", "flex", "items-center", "justify-center", "bg-primary-light"], ["size", "48px", 3, "icon"], [1, "headline", "my-6"], [1, "body-1"], [1, "body-2"], [1, "display-2", "font-bold", "my-6"], [1, "text-secondary", "headline", "align-top"], ["color", "primary", "mat-raised-button", "", "type", "button", 1, "rounded-full", "max-w-full", "w-200"], [1, "bg-card", "py-16", "px-gutter", "footer"], [1, "display-1", "mt-0", "mb-4", "text-center"], [1, "mt-16", "max-w-3xl", "mx-auto", "flex", "flex-col", "md:flex-row"], ["routerLinkActive", "", 1, "text-center", "p-6", "border", "rounded", "md:w-1/2", "md:mx-2"], ["size", "42px", 1, "text-hint", 3, "icon"], [1, "title", "mb-0", "mt-4"], [1, "subheading-2", "m-0", "text-hint"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Pricing & Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Simple, transparent pricing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ic-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Basic Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "10GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "PURCHASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "ic-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Premium Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "1TB");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, " Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "59");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "PURCHASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "ic-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Enterprise Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "Unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, " Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, " Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Dedicated");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, " Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "699");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "PURCHASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "Still have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](95, "ic-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "+1 (840) 423-3404");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "Call us anytime for a quick solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](101, "ic-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "support@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Send us a mail to resolve your issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@stagger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.icBeenhere);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.icStars);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.icBusinessCenter);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.icPhoneInTalk);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.icMail);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive], styles: [".header[_ngcontent-%COMP%] {\n  background-color: var(--background-base);\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e6e6e6' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23e6e6e6'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/illustrations/it_support.svg\");\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  background-size: 250px;\n  padding-bottom: 250px;\n}\n\n@media (min-width: 960px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNpbmcuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvbGliL2xpYi9zdWJzdGl0dXRlQ2xhc3NBcHBseUF0UnVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLDY1Q0FBQTtBQUNGOztBQUVBO0VBQ0UsaUVBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNFO0VBUEY7SUNIQSxvQkFBbUI7RURhakI7QUFDRiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1iYXNlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwMCcgaGVpZ2h0PSc0MDAnIHZpZXdCb3g9JzAgMCA4MDAgODAwJyUzRSUzQ2cgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNlNmU2ZTYnIHN0cm9rZS13aWR0aD0nMSclM0UlM0NwYXRoIGQ9J003NjkgMjI5TDEwMzcgMjYwLjlNOTI3IDg4MEw3MzEgNzM3IDUyMCA2NjAgMzA5IDUzOCA0MCA1OTkgMjk1IDc2NCAxMjYuNSA4NzkuNSA0MCA1OTktMTk3IDQ5MyAxMDIgMzgyLTMxIDIyOSAxMjYuNSA3OS41LTY5LTYzJy8lM0UlM0NwYXRoIGQ9J00tMzEgMjI5TDIzNyAyNjEgMzkwIDM4MiA2MDMgNDkzIDMwOC41IDUzNy41IDEwMS41IDM4MS41TTM3MCA5MDVMMjk1IDc2NCcvJTNFJTNDcGF0aCBkPSdNNTIwIDY2MEw1NzggODQyIDczMSA3MzcgODQwIDU5OSA2MDMgNDkzIDUyMCA2NjAgMjk1IDc2NCAzMDkgNTM4IDM5MCAzODIgNTM5IDI2OSA3NjkgMjI5IDU3Ny41IDQxLjUgMzcwIDEwNSAyOTUgLTM2IDEyNi41IDc5LjUgMjM3IDI2MSAxMDIgMzgyIDQwIDU5OSAtNjkgNzM3IDEyNyA4ODAnLyUzRSUzQ3BhdGggZD0nTTUyMC0xNDBMNTc4LjUgNDIuNSA3MzEtNjNNNjAzIDQ5M0w1MzkgMjY5IDIzNyAyNjEgMzcwIDEwNU05MDIgMzgyTDUzOSAyNjlNMzkwIDM4MkwxMDIgMzgyJy8lM0UlM0NwYXRoIGQ9J00tMjIyIDQyTDEyNi41IDc5LjUgMzcwIDEwNSA1MzkgMjY5IDU3Ny41IDQxLjUgOTI3IDgwIDc2OSAyMjkgOTAyIDM4MiA2MDMgNDkzIDczMSA3MzdNMjk1LTM2TDU3Ny41IDQxLjVNNTc4IDg0MkwyOTUgNzY0TTQwLTIwMUwxMjcgODBNMTAyIDM4MkwtMjYxIDI2OScvJTNFJTNDL2clM0UlM0NnIGZpbGw9JyUyM2U2ZTZlNiclM0UlM0NjaXJjbGUgY3g9Jzc2OScgY3k9JzIyOScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1MzknIGN5PScyNjknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNjAzJyBjeT0nNDkzJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzczMScgY3k9JzczNycgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1MjAnIGN5PSc2NjAnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzA5JyBjeT0nNTM4JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzI5NScgY3k9Jzc2NCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc0MCcgY3k9JzU5OScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScxMDInIGN5PSczODInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMTI3JyBjeT0nODAnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzcwJyBjeT0nMTA1JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzU3OCcgY3k9JzQyJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzIzNycgY3k9JzI2MScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczOTAnIGN5PSczODInIHI9JzUnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9pbGx1c3RyYXRpb25zL2l0X3N1cHBvcnQuc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XHJcblxyXG4gIEBzY3JlZW4gbWQge1xyXG4gICAgQGFwcGx5IHBiLTQ7XHJcbiAgfVxyXG59XHJcbiIsIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzOyJdfQ== */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__.stagger60ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__.fadeInUp400ms
        ] } });


/***/ }),

/***/ 55731:
/*!*******************************************************!*\
  !*** ./src/app/pages/pages/pricing/pricing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingModule": () => (/* binding */ PricingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _pricing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-routing.module */ 26994);
/* harmony import */ var _pricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing.component */ 6157);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);







class PricingModule {
}
PricingModule.ɵfac = function PricingModule_Factory(t) { return new (t || PricingModule)(); };
PricingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PricingModule });
PricingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _pricing_routing_module__WEBPACK_IMPORTED_MODULE_0__.PricingRoutingModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__.IconModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PricingModule, { declarations: [_pricing_component__WEBPACK_IMPORTED_MODULE_1__.PricingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _pricing_routing_module__WEBPACK_IMPORTED_MODULE_0__.PricingRoutingModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__.IconModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_pricing_pricing_module_ts.js.map