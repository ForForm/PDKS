"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["main"],{

/***/ 89791:
/*!***************************************************!*\
  !*** ./src/@vex/animations/dropdown.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropdownAnimation": () => (/* binding */ dropdownAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);

const dropdownAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('dropdown', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        height: 0,
        opacity: 0
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        height: '*',
        opacity: 1
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('false <=> true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms cubic-bezier(.35, 0, .25, 1)'))
]);


/***/ }),

/***/ 93427:
/*!**************************************************!*\
  !*** ./src/@vex/animations/popover.animation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popoverAnimation": () => (/* binding */ popoverAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);

const popoverAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('transformPopover', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.6)'
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                opacity: 1
            })),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(1)',
            })),
        ])
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0
        }))
    ])
]);


/***/ }),

/***/ 73467:
/*!*************************************************************!*\
  !*** ./src/@vex/components/config-panel/color-variables.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorVariables": () => (/* binding */ colorVariables)
/* harmony export */ });
const colorVariables = {
    blue: {
        light: 'rgba(92, 119, 255, .1)',
        default: 'rgb(92, 119, 255)',
        contrast: 'rgb(255, 255, 255)'
    },
    gray: {
        light: 'rgba(158, 158, 158, 0.1)',
        default: 'rgb(158, 158, 158)',
        contrast: 'rgb(255, 255, 255)'
    },
    red: {
        light: 'rgba(244, 67, 54, 0.1)',
        default: 'rgb(244, 67, 54)',
        contrast: 'rgb(255, 255, 255)',
    },
    orange: {
        light: 'rgba(255, 152, 0, 0.1)',
        default: 'rgb(255, 152, 0)',
        contrast: 'rgb(0, 0, 0)',
    },
    'deep-orange': {
        light: 'rgba(255, 87, 34, 0.1)',
        default: 'rgb(255, 87, 34)',
        contrast: 'rgb(255, 255, 255)'
    },
    amber: {
        light: 'rgba(255, 193, 7, 0.1)',
        default: 'rgb(255, 193, 7)',
        contrast: 'rgb(0, 0, 0)'
    },
    green: {
        light: 'rgba(76, 175, 80, 0.1)',
        default: 'rgb(76, 175, 80)',
        contrast: 'rgb(255, 255, 255)',
    },
    teal: {
        light: 'rgba(0, 150, 136, 0.1)',
        default: 'rgb(0, 150, 136)',
        contrast: 'rgb(255, 255, 255)'
    },
    cyan: {
        light: 'rgba(0, 188, 212, 0.1)',
        default: 'rgb(0, 188, 212)',
        contrast: 'rgb(255, 255, 255)'
    },
    purple: {
        light: 'rgba(156, 39, 176, 0.1)',
        default: 'rgb(156, 39, 176)',
        contrast: 'rgb(255, 255, 255)'
    },
    'deep-purple': {
        light: 'rgba(103, 58, 183, 0.1)',
        default: 'rgb(103, 58, 183)',
        contrast: 'rgb(255, 255, 255)'
    },
    pink: {
        light: 'rgba(233, 30, 99, 0.1)',
        default: 'rgb(233, 30, 99)',
        contrast: 'rgb(255, 255, 255)'
    },
};


/***/ }),

/***/ 31710:
/*!***********************************************************************************************!*\
  !*** ./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPanelToggleComponent": () => (/* binding */ ConfigPanelToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ 77499);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);






class ConfigPanelToggleComponent {
    constructor() {
        this.openConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    ngOnInit() {
    }
}
ConfigPanelToggleComponent.ɵfac = function ConfigPanelToggleComponent_Factory(t) { return new (t || ConfigPanelToggleComponent)(); };
ConfigPanelToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfigPanelToggleComponent, selectors: [["vex-config-panel-toggle"]], outputs: { openConfig: "openConfig" }, decls: 2, vars: 1, consts: [["color", "primary", "mat-fab", "", "type", "button", 1, "config-panel-toggle", 3, "click"], [3, "icIcon"]], template: function ConfigPanelToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigPanelToggleComponent_Template_button_click_0_listener() { return ctx.openConfig.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icSettings);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__.IconDirective], styles: [".config-panel-toggle[_ngcontent-%COMP%] {\n  bottom: var(--padding);\n  position: fixed;\n  right: var(--padding);\n  z-index: 100;\n}\n\n  [dir=rtl] .config-panel-toggle {\n  left: var(--padding);\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy1wYW5lbC10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImNvbmZpZy1wYW5lbC10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlnLXBhbmVsLXRvZ2dsZSB7XHJcbiAgYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIFtkaXI9XCJydGxcIl0gLmNvbmZpZy1wYW5lbC10b2dnbGUge1xyXG4gIGxlZnQ6IHZhcigtLXBhZGRpbmcpO1xyXG4gIHJpZ2h0OiB1bnNldDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 66393:
/*!********************************************************************!*\
  !*** ./src/@vex/components/config-panel/config-panel.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPanelComponent": () => (/* binding */ ConfigPanelComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 84452);
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ 77499);
/* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check */ 32528);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ 62270);
/* harmony import */ var _services_style_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/style.service */ 26872);
/* harmony import */ var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/config-name.model */ 14074);
/* harmony import */ var _color_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-variables */ 73467);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 28554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/config.service */ 63531);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/layout.service */ 39011);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 71232);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 97435);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 47752);





















function ConfigPanelComponent_div_0_div_8_ic_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ic-icon", 18);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r6.icCheck);
} }
function ConfigPanelComponent_div_0_div_8_ic_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ic-icon", 18);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r7.icClose);
} }
function ConfigPanelComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_8_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const selectedStyle_r5 = restoredCtx.ngIf; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return selectedStyle_r5 === ctx_r8.Style.dark ? ctx_r8.disableDarkMode() : ctx_r8.enableDarkMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_8_ic_icon_2_Template, 1, 1, "ic-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ConfigPanelComponent_div_0_div_8_ic_icon_3_Template, 1, 1, "ic-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "KOYU");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedStyle_r5 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", selectedStyle_r5 === ctx_r2.Style.dark);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", selectedStyle_r5 !== ctx_r2.Style.dark);
} }
function ConfigPanelComponent_div_0_div_13_ic_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ic-icon", 18);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r11.icCheck);
} }
function ConfigPanelComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_13_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const color_r10 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r12.selectColor(color_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_13_ic_icon_2_Template, 1, 1, "ic-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", color_r10.value.light)("color", color_r10.value.default);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r3.isSelectedColor(color_r10.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", color_r10.value.default);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isSelectedColor(color_r10.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 10, color_r10.key));
} }
function ConfigPanelComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const config_r14 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r16.setConfig(config_r14.id, ctx_r16.Style.light); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "A\u00C7IK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const config_r14 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r18.setConfig(config_r14.id, ctx_r18.Style.default); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\u00D6NDE\u011EER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_18_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const config_r14 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r19.setConfig(config_r14.id, ctx_r19.Style.dark); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "KOYU ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r14 = ctx.$implicit;
    const first_r15 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mt-6", !first_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", config_r14.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](config_r14.name);
} }
function ConfigPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ic-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "AYARLAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "TEMA SE\u00C7\u0130M");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ConfigPanelComponent_div_0_div_8_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "TEMA RENK");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ConfigPanelComponent_div_0_div_13_Template, 6, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "TEMA ST\u0130L");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ConfigPanelComponent_div_0_div_18_Template, 12, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "YERLE\u015E\u0130M");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "H\u0130ZALA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-slide-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r20.layoutRTLChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "RTL");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "ARA\u00C7 \u00C7UBU\u011EU");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "POZ\u0130SYON");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-radio-group", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r22.toolbarPositionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-radio-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Sabit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Statik");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "ALTB\u0130LG\u0130");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "mat-slide-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r23.footerVisibleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Visible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "POZ\u0130SYON");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-radio-group", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r24.footerPositionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-radio-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Sabit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Statik");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const setting_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r0.icSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 8, ctx_r0.selectedStyle$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 10, ctx_r0.colorVariables));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.configs);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 12, ctx_r0.isRTL$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", setting_r1.toolbar.fixed ? "fixed" : "static");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", setting_r1.footer.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", setting_r1.footer.fixed ? "fixed" : "static");
} }
class ConfigPanelComponent {
    constructor(configService, styleService, layoutService, document, route) {
        this.configService = configService;
        this.styleService = styleService;
        this.layoutService = layoutService;
        this.document = document;
        this.route = route;
        this.configs = this.configService.configs;
        this.colorVariables = _color_variables__WEBPACK_IMPORTED_MODULE_4__.colorVariables;
        this.config$ = this.configService.config$;
        this.activeConfig$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => Object.keys(this.configService.configs).find(key => this.configService.configs[key] === config)));
        this.isRTL$ = this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(paramMap => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(paramMap.get('rtl'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.first)());
        this.selectedStyle$ = this.styleService.style$;
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.ConfigName = _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_3__.ConfigName;
        this.Style = _services_style_service__WEBPACK_IMPORTED_MODULE_2__.Style;
        this.selectedColor = _color_variables__WEBPACK_IMPORTED_MODULE_4__.colorVariables.blue;
    }
    ngOnInit() {
        // sessionStorage.setItem('Color', JSON.stringify(this.selectedColor));  
    }
    setConfig(layout, style) {
        this.configService.setConfig(layout);
        this.styleService.setStyle(style);
    }
    selectColor(color) {
        this.selectedColor = color;
        if (this.document) {
            // sessionStorage.setItem('Color', JSON.stringify(color));  
            this.document.documentElement.style.setProperty('--color-primary', color.default.replace('rgb(', '').replace(')', ''));
            this.document.documentElement.style.setProperty('--background-color-blue', color.default.replace('rgb(', '').replace(')', ''));
            this.document.documentElement.style.setProperty('--color-primary-contrast', color.contrast.replace('rgb(', '').replace(')', ''));
        }
    }
    isSelectedColor(color) {
        return color === this.selectedColor;
    }
    enableDarkMode() {
        this.styleService.setStyle(_services_style_service__WEBPACK_IMPORTED_MODULE_2__.Style.dark);
    }
    disableDarkMode() {
        this.styleService.setStyle(_services_style_service__WEBPACK_IMPORTED_MODULE_2__.Style["default"]);
    }
    sidenavOpenChange(change) {
        change.checked ? this.layoutService.openSidenav() : this.layoutService.closeSidenav();
    }
    layoutRTLChange(change) {
        change.checked ? this.layoutService.enableRTL() : this.layoutService.disableRTL();
    }
    toolbarPositionChange(change) {
        this.configService.updateConfig({
            toolbar: {
                fixed: change.value === 'fixed'
            }
        });
    }
    footerVisibleChange(change) {
        localStorage.setItem('SubFooter', JSON.stringify(change.checked));
        this.configService.updateConfig({
            footer: {
                visible: change.checked
            }
        });
        // location.reload();
    }
    footerPositionChange(change) {
        this.configService.updateConfig({
            footer: {
                fixed: change.value === 'fixed'
            }
        });
    }
}
ConfigPanelComponent.ɵfac = function ConfigPanelComponent_Factory(t) { return new (t || ConfigPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_style_service__WEBPACK_IMPORTED_MODULE_2__.StyleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_7__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute)); };
ConfigPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ConfigPanelComponent, selectors: [["vex-config-panel"]], decls: 2, vars: 3, consts: [["class", "config-panel", 4, "ngIf"], [1, "config-panel"], [1, "headline", "mb-4"], ["inline", "true", 1, "mr-3", 3, "icon"], [1, "section"], [1, "subheading"], ["class", "rounded-full mt-2 flex items-center cursor-pointer relative bg-contrast-black text-contrast-white", "matRipple", "", 3, "click", 4, "ngIf"], ["class", "vex-color-picker rounded-full mt-2 flex items-center cursor-pointer relative", "matRipple", "", 3, "selected", "backgroundColor", "color", "click", 4, "ngFor", "ngForOf"], ["class", "rounded", 3, "mt-6", 4, "ngFor", "ngForOf"], [1, "section-content"], [3, "checked", "change"], ["fxLayout", "column", "fxLayoutGap", "12px", 3, "value", "change"], ["value", "fixed"], ["value", "static"], ["matRipple", "", 1, "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", "bg-contrast-black", "text-contrast-white", 3, "click"], [1, "m-2", "h-6", "w-6", "rounded-full"], ["size", "24px", 3, "icon", 4, "ngIf"], [1, "ml-1", "font-medium", "text-sm"], ["size", "24px", 3, "icon"], ["matRipple", "", 1, "vex-color-picker", "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", 3, "click"], [1, "rounded"], [1, "layout-image", "rounded", "overflow-hidden", "relative", "hover:bg-hover", "shadow-8"], [1, "w-full", "block", 3, "src"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "4px", 1, "layout-image-overlay"], ["fxFlex", "none", "mat-raised-button", "", "type", "button", 1, "bg-contrast-white", "text-contrast-black", 3, "click"], ["color", "primary", "fxFlex", "none", "mat-raised-button", "", "type", "button", 3, "click"], ["fxFlex", "none", "mat-raised-button", "", "type", "button", 1, "bg-contrast-black", "text-contrast-white", 3, "click"], [1, "text-center", "body-2", "mt-2"]], template: function ConfigPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ConfigPanelComponent_div_0_Template, 52, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.config$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__.IconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggle, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutGapDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.UpperCasePipe], styles: [".config-panel[_ngcontent-%COMP%] {\n  padding: var(--padding-16) var(--padding);\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-bottom: var(--padding);\n}\n\n.section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--foreground-divider);\n  margin-bottom: var(--padding-16);\n  padding-bottom: var(--padding-16);\n}\n\n.section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.section-content[_ngcontent-%COMP%] {\n  -webkit-margin-start: var(--padding-12);\n          margin-inline-start: var(--padding-12);\n}\n\n.section-content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-top: var(--padding);\n}\n\n.subheading[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: var(--text-secondary);\n}\n\n.layout[_ngcontent-%COMP%]    + .layout[_ngcontent-%COMP%] {\n  margin-top: var(--padding);\n}\n\n.layout-image[_ngcontent-%COMP%]:hover   .layout-image-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 1;\n  visibility: visible;\n}\n\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: var(--trans-ease-out);\n  visibility: hidden;\n  width: 100%;\n}\n\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n\n.vex-color-picker[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.vex-color-picker[_ngcontent-%COMP%]:hover, .vex-color-picker.selected[_ngcontent-%COMP%] {\n  background: currentColor !important;\n}\n\n.vex-color-picker[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .vex-color-picker[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%], .vex-color-picker.selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .vex-color-picker.selected[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.vex-color-picker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.color[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 50%;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex-direction: row;\n  height: 36px;\n  justify-content: center;\n  -webkit-margin-end: var(--padding-16);\n          margin-inline-end: var(--padding-16);\n  text-align: center;\n  vertical-align: middle;\n  width: 36px;\n}\n\n.color.light[_ngcontent-%COMP%] {\n  background: white;\n  color: #000;\n}\n\n.color.dark[_ngcontent-%COMP%] {\n  background: #303030;\n  color: white;\n}\n\n.color.flat[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #000;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--padding-12);\n}\n\n.style-name[_ngcontent-%COMP%] {\n  font: var(--font-body-2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy1wYW5lbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0RBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxtQkFBQTtBQUNKOztBQUdBO0VBQ0UsdUNBQUE7VUFBQSxzQ0FBQTtBQUFGOztBQUVFO0VBQ0UsMEJBQUE7QUFBSjs7QUFJQTtFQ3hCQSxnQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLGtCQUFtQjtFQUFuQixnQkFBbUI7RUFBbkIseUJBQW1CO0VBQW5CLDRCQUFtQjtBRHdCbkI7O0FBSUE7RUFDRSwwQkFBQTtBQURGOztBQU9JO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFKTjs7QUFRRTtFQUNFLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVFJO0VBQ0UsY0FBQTtBQU5OOztBQVdBO0VBQ0UsaUNBQUE7QUFSRjs7QUFVRTtFQUNFLG1DQUFBO0FBUko7O0FBVUk7RUFDRSxZQUFBO0FBUk47O0FBWUU7RUFDRSxpQ0FBQTtBQVZKOztBQWVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBWkY7O0FBY0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFaSjs7QUFlRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQWJKOztBQWdCRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQWRKOztBQWtCQTs7OztFQUlFLGNBQUE7RUFDQSw2QkFBQTtBQWZGOztBQWtCQTtFQUNFLHdCQUFBO0FBZkYiLCJmaWxlIjoiY29uZmlnLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wYW5lbCB7XHJcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xNikgdmFyKC0tcGFkZGluZyk7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xyXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi1jb250ZW50IHtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTEyKTtcclxuXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3ViaGVhZGluZyB7XHJcbiAgQGFwcGx5IG15LTQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1zZWNvbmRhcnkgZm9udC1tZWRpdW07XHJcbn1cclxuXHJcbi5sYXlvdXQgKyAubGF5b3V0IHtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcclxufVxyXG5cclxuLmxheW91dC1pbWFnZSB7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnZleC1jb2xvci1waWNrZXIge1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcclxuXHJcbiAgJjpob3ZlciwgJi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3IgIWltcG9ydGFudDtcclxuXHJcbiAgICBwLCBkaXYge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uY29sb3Ige1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16OCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy0xNik7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDM2cHg7XHJcblxyXG4gICYubGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gICYuZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJi5mbGF0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1zbGlkZS10b2dnbGUgKyBtYXQtc2xpZGUtdG9nZ2xlLFxyXG5tYXQtc2xpZGUtdG9nZ2xlICsgbWF0LWNoZWNrYm94LFxyXG5tYXQtY2hlY2tib3ggKyBtYXQtc2xpZGUtdG9nZ2xlLFxyXG5tYXQtY2hlY2tib3ggKyBtYXQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZGRpbmctMTIpO1xyXG59XHJcblxyXG4uc3R5bGUtbmFtZSB7XHJcbiAgZm9udDogdmFyKC0tZm9udC1ib2R5LTIpO1xyXG59XHJcbiIsIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzOyJdfQ== */"] });


/***/ }),

/***/ 5392:
/*!*****************************************************************!*\
  !*** ./src/@vex/components/config-panel/config-panel.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPanelModule": () => (/* binding */ ConfigPanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _config_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-panel.component */ 66393);
/* harmony import */ var _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-panel-toggle/config-panel-toggle.component */ 31710);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 97435);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 71232);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);











class ConfigPanelModule {
}
ConfigPanelModule.ɵfac = function ConfigPanelModule_Factory(t) { return new (t || ConfigPanelModule)(); };
ConfigPanelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ConfigPanelModule });
ConfigPanelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRippleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConfigPanelModule, { declarations: [_config_panel_component__WEBPACK_IMPORTED_MODULE_0__.ConfigPanelComponent, _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_1__.ConfigPanelToggleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRippleModule], exports: [_config_panel_component__WEBPACK_IMPORTED_MODULE_0__.ConfigPanelComponent, _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_1__.ConfigPanelToggleComponent] }); })();


/***/ }),

/***/ 53775:
/*!**************************************************************!*\
  !*** ./src/@vex/components/mega-menu/mega-menu.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaMenuComponent": () => (/* binding */ MegaMenuComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-layers */ 88920);
/* harmony import */ var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-assignment */ 93358);
/* harmony import */ var _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-contact-support */ 84229);
/* harmony import */ var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-contacts */ 54358);
/* harmony import */ var _iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-assessment */ 56328);
/* harmony import */ var _iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-book */ 50031);
/* harmony import */ var _iconify_icons_ic_twotone_people_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-people-outline */ 22425);
/* harmony import */ var _iconify_icons_ic_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/style */ 27976);
/* harmony import */ var _iconify_icons_ic_baseline_score__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/baseline-score */ 86038);
/* harmony import */ var _iconify_icons_ic_home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/home */ 56214);
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ 77499);
/* harmony import */ var _iconify_icons_ic_favorite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/favorite */ 63858);
/* harmony import */ var _iconify_icons_ic_favorite_border__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/favorite-border */ 13761);
/* harmony import */ var _iconify_icons_ic_description__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/description */ 38180);
/* harmony import */ var _iconify_icons_ic_outline_table_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/outline-table-chart */ 10823);
/* harmony import */ var _iconify_icons_ic_personal_video__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/personal-video */ 51739);
/* harmony import */ var _app_pages_interfaces_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../app/pages/interfaces/util */ 10071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _popover_popover_ref__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../popover/popover-ref */ 29127);
/* harmony import */ var _app_pages_services_login_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../app/pages/services/login.service */ 12256);
/* harmony import */ var _services_style_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../services/style.service */ 26872);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _app_pages_services_authorization_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../app/pages/services/authorization.service */ 9695);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/grid */ 92465);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);




























function MegaMenuComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function MegaMenuComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ic-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", feature_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("icon", feature_r2.icon)("size", ctx_r0.isMobileLayout ? "28px" : "32px");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](feature_r2.label);
} }
function MegaMenuComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function MegaMenuComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", page_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](page_r5.label);
} }
const _c0 = function () { return ["mr-6"]; };
const _c1 = function (a0) { return { "margin-left": a0 }; };
class MegaMenuComponent {
    constructor(popoverRef, loginService, styleService, route, authorizationService) {
        this.popoverRef = popoverRef;
        this.loginService = loginService;
        this.styleService = styleService;
        this.route = route;
        this.authorizationService = authorizationService;
        this.language = [];
        this.languageMap = {};
        this.features = [
            {
                icon: _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_0__["default"],
                label: 'Dashboard',
                route: '/'
            },
            {
                icon: _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_1__["default"],
                label: 'AIO-Table',
                route: '/apps/aio-table'
            },
            {
                icon: _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_2__["default"],
                label: 'Help Center',
                route: '/apps/help-center'
            },
            {
                icon: _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_3__["default"],
                label: 'Contacts',
                route: '/apps/contacts/grid'
            },
            {
                icon: _iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_4__["default"],
                label: 'Scrumboard',
                route: '/apps/scrumboard/1'
            },
            {
                icon: _iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_5__["default"],
                label: 'Documentation',
                route: '/documentation'
            }
        ];
        this.pages = [
            {
                label: 'All-In-One Table',
                route: '/apps/aio-table'
            },
            {
                label: 'Authentication',
                route: '/login'
            },
            {
                label: 'Components',
                route: '/ui/components/overview'
            },
            {
                label: 'Documentation',
                route: '/documentation'
            },
            {
                label: 'FAQ',
                route: '/pages/faq'
            },
            {
                label: 'Form Elements',
                route: '/ui/forms/form-elements'
            },
            {
                label: 'Form Wizard',
                route: '/ui/forms/form-wizard'
            },
            {
                label: 'Guides',
                route: '/pages/guides'
            },
            {
                label: 'Help Center',
                route: '/apps/help-center'
            },
            {
                label: 'Scrumboard',
                route: '/apps/scrumboard'
            }
        ];
        this.lng = 'tr-TR';
        this.icPersonOutline = _iconify_icons_ic_twotone_people_outline__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.iicStyle = _iconify_icons_ic_style__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.icScore = _iconify_icons_ic_baseline_score__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.icHoliday = _iconify_icons_ic_home__WEBPACK_IMPORTED_MODULE_9__["default"];
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_10__["default"];
        this.icFavorite = _iconify_icons_ic_favorite__WEBPACK_IMPORTED_MODULE_11__["default"];
        this.icFavoriteBorder = _iconify_icons_ic_favorite_border__WEBPACK_IMPORTED_MODULE_12__["default"];
        this.icContactSupport = _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icDescription = _iconify_icons_ic_description__WEBPACK_IMPORTED_MODULE_13__["default"];
        this.icReport = _iconify_icons_ic_outline_table_chart__WEBPACK_IMPORTED_MODULE_14__["default"];
        this.icSystem = _iconify_icons_ic_personal_video__WEBPACK_IMPORTED_MODULE_15__["default"];
        this.isMobileLayout = false;
    }
    ngOnInit() {
        window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; };
        this.isMobileLayout = window.innerWidth <= 991;
        this.route.paramMap.subscribe(params => {
            this.features = [];
            this.pages = [];
            this.languageMap = _app_pages_interfaces_util__WEBPACK_IMPORTED_MODULE_16__["default"].getLabels();
            this.loginGetMenu();
            console.log(this.styleService.style$);
        });
    }
    loginGetMenu() {
        this.loginService.LoginGetMenu(localStorage.getItem('Lng')).subscribe(menuItems => {
            // this.navigationService.items=<NavigationItem[]>(menuItems);
            console.log((menuItems));
            Object.keys(menuItems).forEach((key) => {
                // if (menuItems[key].favorite) {
                if (menuItems[key].children.length > 0 && menuItems[key].type == "dropdown") {
                    if (menuItems[key].favorite) {
                        if (menuItems[key].icon == "icContactSupport")
                            menuItems[key].icon = _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_2__["default"];
                        else if (menuItems[key].icon == "icPersonOutline")
                            menuItems[key].icon = _iconify_icons_ic_twotone_people_outline__WEBPACK_IMPORTED_MODULE_6__["default"];
                        else if (menuItems[key].icon == "icStyle")
                            menuItems[key].icon = _iconify_icons_ic_style__WEBPACK_IMPORTED_MODULE_7__["default"];
                        else if (menuItems[key].icon == "icScore")
                            menuItems[key].icon = _iconify_icons_ic_baseline_score__WEBPACK_IMPORTED_MODULE_8__["default"];
                        else if (menuItems[key].icon == "icHoliday")
                            menuItems[key].icon = _iconify_icons_ic_home__WEBPACK_IMPORTED_MODULE_9__["default"];
                        else if (menuItems[key].icon == "icSettings")
                            menuItems[key].icon = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_10__["default"];
                        else if (menuItems[key].icon == "icDescription")
                            menuItems[key].icon = _iconify_icons_ic_description__WEBPACK_IMPORTED_MODULE_13__["default"];
                        else if (menuItems[key].icon == "icReport")
                            menuItems[key].icon = _iconify_icons_ic_outline_table_chart__WEBPACK_IMPORTED_MODULE_14__["default"];
                        else if (menuItems[key].icon == "icSystem")
                            menuItems[key].icon = _iconify_icons_ic_personal_video__WEBPACK_IMPORTED_MODULE_15__["default"];
                        this.features.push({
                            icon: menuItems[key].icon,
                            label: menuItems[key].label,
                            route: menuItems[key].children[0].route
                        });
                    }
                    Object.keys(menuItems[key].children).forEach((key2) => {
                        if (menuItems[key].children[key2].children.length > 0 && menuItems[key].children[key2].type == "dropdown") {
                            if (menuItems[key].children[key2].favorite) {
                                if (menuItems[key].children[key2].icon == "icContactSupport")
                                    menuItems[key].children[key2].icon = _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_2__["default"];
                                else if (menuItems[key].children[key2].icon == "icPersonOutline")
                                    menuItems[key].children[key2].icon = _iconify_icons_ic_twotone_people_outline__WEBPACK_IMPORTED_MODULE_6__["default"];
                                else if (menuItems[key].children[key2].icon == "icStyle")
                                    menuItems[key].children[key2].icon = _iconify_icons_ic_style__WEBPACK_IMPORTED_MODULE_7__["default"];
                                else if (menuItems[key].children[key2].icon == "icScore")
                                    menuItems[key].children[key2].icon = _iconify_icons_ic_baseline_score__WEBPACK_IMPORTED_MODULE_8__["default"];
                                else if (menuItems[key].children[key2].icon == "icHoliday")
                                    menuItems[key].children[key2].icon = _iconify_icons_ic_home__WEBPACK_IMPORTED_MODULE_9__["default"];
                                else if (menuItems[key].children[key2].icon == "icSettings")
                                    menuItems[key].children[key2].icon = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_10__["default"];
                                else if (menuItems[key].children[key2].icon == "icDescription")
                                    menuItems[key].children[key2].icon = _iconify_icons_ic_description__WEBPACK_IMPORTED_MODULE_13__["default"];
                                else if (menuItems[key].children[key2].icon == "icReport")
                                    menuItems[key].children[key2].icon = _iconify_icons_ic_outline_table_chart__WEBPACK_IMPORTED_MODULE_14__["default"];
                                else if (menuItems[key].children[key2].icon == "icSystem")
                                    menuItems[key].children[key2].icon = _iconify_icons_ic_personal_video__WEBPACK_IMPORTED_MODULE_15__["default"];
                                this.features.push({
                                    icon: menuItems[key].children[key2].icon,
                                    label: menuItems[key].children[key2].label,
                                    route: menuItems[key].children[key2].children[0].route
                                });
                            }
                            Object.keys(menuItems[key].children[key2].children).forEach((key3) => {
                                if (menuItems[key].children[key2].children[key3].favorite) {
                                    this.pages.push({
                                        label: menuItems[key].children[key2].children[key3].label,
                                        route: menuItems[key].children[key2].children[key3].route
                                    });
                                }
                            });
                        }
                        else {
                            if (menuItems[key].children[key2].favorite)
                                this.pages.push({
                                    label: menuItems[key].children[key2].label,
                                    route: menuItems[key].children[key2].route
                                });
                        }
                    });
                }
                else {
                    if (menuItems[key].favorite)
                        this.pages.push({
                            label: menuItems[key].label,
                            route: menuItems[key].route
                        });
                }
                // }
            });
        });
    }
    close() {
        this.popoverRef.close();
    }
}
MegaMenuComponent.ɵfac = function MegaMenuComponent_Factory(t) { return new (t || MegaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_popover_popover_ref__WEBPACK_IMPORTED_MODULE_17__.PopoverRef), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_app_pages_services_login_service__WEBPACK_IMPORTED_MODULE_18__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_style_service__WEBPACK_IMPORTED_MODULE_19__.StyleService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_app_pages_services_authorization_service__WEBPACK_IMPORTED_MODULE_20__.AuthorizationService)); };
MegaMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: MegaMenuComponent, selectors: [["vex-mega-menu"]], decls: 11, vars: 9, consts: [["fxLayout", "row", "fxLayout.lt-md", "column", 1, "card", "overflow-auto", 3, "ngClass.gt-sm", "ngStyle"], ["fxFlex", "400px", "fxFlex.lt-md", "auto", 1, "p-gutter"], [1, "body-2", "m-0"], ["gdColumns", "1fr 1fr 1fr", "gdGap", "16px", 1, "mt-4"], ["class", "text-dark p-3 text-center hover:bg-hover hover:text-primary-500 trans-ease-out rounded block no-underline", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "350px", "fxFlex.lt-md", "auto", 1, "p-gutter"], ["gdColumns", "1fr 1fr", "gdGap", "16px 48px", 1, "mt-6"], ["class", "text-dark body-1 no-underline hover:text-primary-500 trans-ease-out", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "text-dark", "p-3", "text-center", "hover:bg-hover", "hover:text-primary-500", "trans-ease-out", "rounded", "block", "no-underline", 3, "routerLink", "click"], [1, "text-primary-500", 3, "icon", "size"], [1, "body-1", "mt-2"], [1, "text-dark", "body-1", "no-underline", "hover:text-primary-500", "trans-ease-out", 3, "routerLink", "click"]], template: function MegaMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, MegaMenuComponent_a_5_Template, 4, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, MegaMenuComponent_a_10_Template, 2, 2, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass.gt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](6, _c0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](7, _c1, ctx.isMobileLayout ? "-50px" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.languageMap["B\u00F6l\u00FCmler"].labelName.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.languageMap["Sayfalar"].labelName.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultStyleDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultFlexDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__.DefaultGridColumnsDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__.DefaultGridGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLinkWithHref, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_27__.IconDirective], encapsulation: 2 });


/***/ }),

/***/ 2424:
/*!***********************************************************!*\
  !*** ./src/@vex/components/mega-menu/mega-menu.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaMenuModule": () => (/* binding */ MegaMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _mega_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mega-menu.component */ 53775);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);







class MegaMenuModule {
}
MegaMenuModule.ɵfac = function MegaMenuModule_Factory(t) { return new (t || MegaMenuModule)(); };
MegaMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MegaMenuModule });
MegaMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MegaMenuModule, { declarations: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__.MegaMenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__.MegaMenuComponent] }); })();


/***/ }),

/***/ 64077:
/*!**************************************************************************!*\
  !*** ./src/@vex/components/navigation-item/navigation-item.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationItemComponent": () => (/* binding */ NavigationItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 74172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/track-by */ 45007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ 73166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);











const _c0 = function (a0, a1) { return { "bg-primary text-primary-contrast": a0, "navigation-color": a1 }; };
function NavigationItemComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, ctx_r0.isActive$)(ctx_r0.item));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, ctx_r0.isActive$)(ctx_r0.item), !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx_r0.isActive$)(ctx_r0.item)))("routerLink", ctx_r0.item.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.item.label, "\n");
} }
function NavigationItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.item.route(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r1.isActive$)(ctx_r1.item));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.item.label, "\n");
} }
const _c1 = function (a0) { return { "text-primary": a0 }; };
function NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", child_r9.route)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx_r10.isActive$)(child_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
} }
function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return child_r9.route(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
} }
const _c2 = function (a0) { return { item: a0 }; };
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](11);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, item_r36))("ngTemplateOutlet", _r7);
} }
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 2, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const child_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r34)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r33.isActive$)(child_r32)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r32.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r32.children);
} }
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](9);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, child_r32))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r31.isDropdown(child_r32));
} }
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r30)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r29.isActive$)(item_r28)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r28.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r28.children);
} }
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](7);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, item_r28))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r27.isDropdown(item_r28));
} }
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const child_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r26)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r25.isActive$)(child_r24)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r24.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r24.children);
} }
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, child_r24))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.isDropdown(child_r24));
} }
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r22)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r21.isActive$)(item_r20)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r20.children);
} }
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, item_r20))("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.isDropdown(item_r20));
} }
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 6, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r18)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r12.isActive$)(child_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r9.children);
} }
function NavigationItemComponent_ng_container_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template, 5, 8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template, 9, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child_r9 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && !ctx_r6.isFunction(child_r9.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && ctx_r6.isFunction(child_r9.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isDropdown(child_r9));
} }
function NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r42.route)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r43.isActive$)(item_r42)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r42.label);
} }
function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item; return item_r42.route(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r44.isActive$)(item_r42)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r42.label);
} }
function NavigationItemComponent_ng_container_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template, 3, 7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template, 3, 6, "div", 22);
} if (rf & 2) {
    const item_r42 = ctx.item;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r42) && !ctx_r8.isFunction(item_r42.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isLink(item_r42) && ctx_r8.isFunction(item_r42.route));
} }
function NavigationItemComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_Template, 4, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavigationItemComponent_ng_container_2_ng_template_9_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r2.isActive$)(ctx_r2.item));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx_r2.isActive$)(ctx_r2.item), !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, ctx_r2.isActive$)(ctx_r2.item)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.item.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
} }
class NavigationItemComponent {
    constructor(navigationService, router) {
        this.navigationService = navigationService;
        this.router = router;
        this.isActive$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (item) => this.hasActiveChilds(item)));
        this.isLink = this.navigationService.isLink;
        this.isDropdown = this.navigationService.isDropdown;
        this.isSubheading = this.navigationService.isSubheading;
        this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
    }
    ngOnInit() {
    }
    hasActiveChilds(parent) {
        if (this.isLink(parent)) {
            return this.router.isActive(parent.route, true);
        }
        if (this.isDropdown(parent) || this.isSubheading(parent)) {
            return parent.children.some(child => {
                if (this.isDropdown(child)) {
                    return this.hasActiveChilds(child);
                }
                if (this.isLink(child) && !this.isFunction(child.route)) {
                    return this.router.isActive(child.route, true);
                }
                return false;
            });
        }
        return false;
    }
    isFunction(prop) {
        return prop instanceof Function;
    }
}
NavigationItemComponent.ɵfac = function NavigationItemComponent_Factory(t) { return new (t || NavigationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
NavigationItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavigationItemComponent, selectors: [["vex-navigation-item"]], inputs: { item: "item" }, decls: 3, vars: 3, consts: [["class", "navigation-item", "matRipple", "", 3, "hover:bg-hover", "ngClass", "routerLink", 4, "ngIf"], ["class", "navigation-item navigation-color", "matRipple", "", 3, "hover:bg-hover", "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", 1, "navigation-item", 3, "ngClass", "routerLink"], ["matRipple", "", 1, "navigation-item", "navigation-color", 3, "click"], ["matRipple", "", 1, "navigation-item", 3, "matMenuTriggerFor", "ngClass"], ["yPosition", "below"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["linkTemplate", ""], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "routerLink", "ngClass", 4, "ngIf"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "routerLink", "ngClass"], [1, "text-current", 3, "icIcon"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "click"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "matMenuTriggerFor", "ngClass"], ["level1", "matMenu"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], ["level2", "matMenu"], ["level3", "matMenu"], ["level4", "matMenu"], ["level5", "matMenu"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "ngClass", "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "ngClass", "click"]], template: function NavigationItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationItemComponent_a_0_Template, 5, 14, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_div_1_Template, 3, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_Template, 11, 15, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item) && (ctx.item.children == null ? null : ctx.item.children.length) > 0 || ctx.isDropdown(ctx.item));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: [".navigation-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border-radius: 0.25rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  -webkit-margin-end: var(--padding-8);\n          margin-inline-end: var(--padding-8);\n  transition: var(--trans-ease-out);\n}\n\n.navigation-color[_ngcontent-%COMP%] {\n  color: var(--navigation-color);\n}\n\n.navigation-menu-item[_ngcontent-%COMP%] {\n  transition: var(--trans-ease-out);\n}\n\n.navigation-menu-item[_ngcontent-%COMP%]:hover {\n  color: rgb(var(--color-primary));\n}\n\n.navigation-menu-item[_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0VBLGtCQUFtQjtFQUFuQixjQUFtQjtFQUFuQixlQUFtQjtFQUFuQix5QkFBbUI7S0FBbkIsc0JBQW1CO1VBQW5CLGlCQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsa0JBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixnQkFBbUI7RUFBbkIscUJBQW1CO0VEQWpCLG9DQUFBO1VBQUEsbUNBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBQ0U7RUNYRixnQ0FBbUI7QURhbkI7O0FBQ0k7RUNkSixnQ0FBbUI7QURnQm5CIiwiZmlsZSI6Im5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWl0ZW0ge1xyXG4gIEBhcHBseSByb3VuZGVkIGN1cnNvci1wb2ludGVyIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNCBweS0yIHJlbGF0aXZlIHNlbGVjdC1ub25lIG5vLXVuZGVybGluZSBibG9jaztcclxuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy04KTtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWNvbG9yIHtcclxuICBjb2xvcjogdmFyKC0tbmF2aWdhdGlvbi1jb2xvcik7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbSB7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIEBhcHBseSB0ZXh0LXByaW1hcnk7XHJcblxyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgQGFwcGx5IHRleHQtcHJpbWFyeTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7Il19 */"] });


/***/ }),

/***/ 98240:
/*!***********************************************************************!*\
  !*** ./src/@vex/components/navigation-item/navigation-item.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationItemModule": () => (/* binding */ NavigationItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _navigation_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-item.component */ 64077);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);








class NavigationItemModule {
}
NavigationItemModule.ɵfac = function NavigationItemModule_Factory(t) { return new (t || NavigationItemModule)(); };
NavigationItemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NavigationItemModule });
NavigationItemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__.IconModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavigationItemModule, { declarations: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_0__.NavigationItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__.IconModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule], exports: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_0__.NavigationItemComponent] }); })();


/***/ }),

/***/ 29127:
/*!****************************************************!*\
  !*** ./src/@vex/components/popover/popover-ref.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverRef": () => (/* binding */ PopoverRef)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 64008);

class PopoverRef {
    constructor(overlay, content, data) {
        this.overlay = overlay;
        this.content = content;
        this.data = data;
        this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.afterClosed$ = this.afterClosed.asObservable();
        overlay.backdropClick().subscribe(() => {
            this._close('backdropClick', null);
        });
    }
    close(data) {
        this._close('close', data);
    }
    _close(type, data) {
        this.overlay.dispose();
        this.afterClosed.next({
            type,
            data
        });
        this.afterClosed.complete();
    }
}


/***/ }),

/***/ 348:
/*!**********************************************************!*\
  !*** ./src/@vex/components/popover/popover.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverComponent": () => (/* binding */ PopoverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/popover.animation */ 93427);
/* harmony import */ var _popover_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-ref */ 29127);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);





function PopoverComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function PopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function PopoverComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
} }
function PopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function PopoverComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngComponentOutlet", ctx_r2.content);
} }
class PopoverComponent {
    constructor(popoverRef) {
        this.popoverRef = popoverRef;
        this.renderMethod = 'component';
    }
    ngOnInit() {
        this.content = this.popoverRef.content;
        if (typeof this.content === 'string') {
            this.renderMethod = 'text';
        }
        if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef) {
            this.renderMethod = 'template';
            this.context = {
                close: this.popoverRef.close.bind(this.popoverRef)
            };
        }
    }
}
PopoverComponent.ɵfac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_popover_ref__WEBPACK_IMPORTED_MODULE_1__.PopoverRef)); };
PopoverComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PopoverComponent, selectors: [["ng-component"]], decls: 5, vars: 5, consts: [[1, "popover"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]], template: function PopoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PopoverComponent_div_2_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPopover", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.renderMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "template");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "component");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgComponentOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__.popoverAnimation] } });


/***/ }),

/***/ 59147:
/*!*******************************************************!*\
  !*** ./src/@vex/components/popover/popover.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverModule": () => (/* binding */ PopoverModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.component */ 348);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




class PopoverModule {
}
PopoverModule.ɵfac = function PopoverModule_Factory(t) { return new (t || PopoverModule)(); };
PopoverModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PopoverModule });
PopoverModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopoverModule, { declarations: [_popover_component__WEBPACK_IMPORTED_MODULE_0__.PopoverComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule] }); })();


/***/ }),

/***/ 90451:
/*!********************************************************!*\
  !*** ./src/@vex/components/popover/popover.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverService": () => (/* binding */ PopoverService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 38252);
/* harmony import */ var _popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-ref */ 29127);
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.component */ 348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);






class PopoverService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    open({ origin, content, data, width, height, position, offsetX, offsetY }) {
        const overlayRef = this.overlay.create(this.getOverlayConfig({ origin, width, height, position, offsetX, offsetY }));
        const popoverRef = new _popover_ref__WEBPACK_IMPORTED_MODULE_0__.PopoverRef(overlayRef, content, data);
        const injector = this.createInjector(popoverRef, this.injector);
        overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.ComponentPortal(_popover_component__WEBPACK_IMPORTED_MODULE_1__.PopoverComponent, null, injector));
        return popoverRef;
    }
    createInjector(popoverRef, injector) {
        const tokens = new WeakMap([[_popover_ref__WEBPACK_IMPORTED_MODULE_0__.PopoverRef, popoverRef]]);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalInjector(injector, tokens);
    }
    getOverlayConfig({ origin, width, height, position, offsetX, offsetY }) {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayConfig({
            hasBackdrop: true,
            width,
            height,
            backdropClass: 'popover-backdrop',
            positionStrategy: this.getOverlayPosition({ origin, position, offsetX, offsetY }),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    }
    getOverlayPosition({ origin, position, offsetX, offsetY }) {
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo(origin)
            .withPositions(position || this.getPositions())
            .withFlexibleDimensions(true)
            .withDefaultOffsetY(offsetY || 0)
            .withDefaultOffsetX(offsetX || 0)
            .withTransformOriginOn('.popover')
            .withPush(true);
        return positionStrategy;
    }
    getPositions() {
        return [
            {
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom'
            },
            {
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
            },
        ];
    }
}
PopoverService.ɵfac = function PopoverService_Factory(t) { return new (t || PopoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector)); };
PopoverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PopoverService, factory: PopoverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45913:
/*!********************************************************************!*\
  !*** ./src/@vex/components/progress-bar/progress-bar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-loading-bar/core */ 94608);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);




class ProgressBarComponent {
    constructor(loader) {
        this.loader = loader;
    }
    ngOnInit() {
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__.LoadingBarService)); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["vex-progress-bar"]], decls: 3, vars: 7, consts: [["mode", "determinate", 1, "progress-bar", 3, "value"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.loader.useRef("router").value$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.loader.useRef("router").value$));
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__.MatProgressBar], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".progress-bar[_ngcontent-%COMP%] {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n}\n\n.progress-bar.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtYmFyIHtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgei1pbmRleDogOTk5OTk7XHJcblxyXG4gICYudmlzaWJsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 95939:
/*!*****************************************************************!*\
  !*** ./src/@vex/components/progress-bar/progress-bar.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarModule": () => (/* binding */ ProgressBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar.component */ 45913);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ 94608);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/router */ 74192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);






class ProgressBarModule {
}
ProgressBarModule.ɵfac = function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); };
ProgressBarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProgressBarModule });
ProgressBarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBarModule,
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarModule,
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__.LoadingBarRouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgressBarModule, { declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBarModule,
        _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarModule,
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__.LoadingBarRouterModule], exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent] }); })();


/***/ }),

/***/ 6448:
/*!**************************************************************!*\
  !*** ./src/@vex/components/scrollbar/scrollbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollbarComponent": () => (/* binding */ ScrollbarComponent)
/* harmony export */ });
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar */ 27667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


const _c0 = ["*"];
class ScrollbarComponent {
    constructor(_element, zone) {
        this._element = _element;
        this.zone = zone;
    }
    ngAfterContentInit() {
        this.zone.runOutsideAngular(() => {
            this.scrollbarRef = new simplebar__WEBPACK_IMPORTED_MODULE_0__["default"](this._element.nativeElement, this.options);
        });
    }
    ngOnDestroy() {
        /**
         * Exists, but not typed in the type definition
         * https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/src/simplebar.js#L903
         */
        if (this.scrollbarRef && this.scrollbarRef.unMount) {
            this.scrollbarRef.unMount();
        }
    }
}
ScrollbarComponent.ɵfac = function ScrollbarComponent_Factory(t) { return new (t || ScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); };
ScrollbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScrollbarComponent, selectors: [["vex-scrollbar"]], hostAttrs: [1, "vex-scrollbar"], inputs: { options: "options" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ScrollbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoic2Nyb2xsYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 34842:
/*!***********************************************************!*\
  !*** ./src/@vex/components/scrollbar/scrollbar.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollbarModule": () => (/* binding */ ScrollbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _scrollbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollbar.component */ 6448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



class ScrollbarModule {
}
ScrollbarModule.ɵfac = function ScrollbarModule_Factory(t) { return new (t || ScrollbarModule)(); };
ScrollbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ScrollbarModule });
ScrollbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollbarModule, { declarations: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_0__.ScrollbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_scrollbar_component__WEBPACK_IMPORTED_MODULE_0__.ScrollbarComponent] }); })();


/***/ }),

/***/ 48780:
/*!********************************************************!*\
  !*** ./src/@vex/components/search/search.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 28554);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 28094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layout.service */ 39011);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ 53815);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);













const _c0 = ["searchInput"];
function SearchComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
let SearchComponent = class SearchComponent {
    constructor(layoutService, searchService) {
        this.layoutService = layoutService;
        this.searchService = searchService;
        this.show$ = this.layoutService.searchOpen$;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    ngOnInit() {
        this.searchService.isOpenSubject.next(true);
        this.searchCtrl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(value => this.searchService.valueChangesSubject.next(value));
        this.show$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(show => show), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(() => this.input.nativeElement.focus());
    }
    close() {
        this.layoutService.closeSearch();
        this.searchCtrl.setValue(undefined);
        this.searchService.isOpenSubject.next(false);
    }
    search() {
        this.searchService.submitSubject.next(this.searchCtrl.value);
        this.close();
    }
    ngOnDestroy() {
        this.layoutService.closeSearch();
        this.searchCtrl.setValue(undefined);
        this.searchService.isOpenSubject.next(false);
    }
};
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["vex-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 10, vars: 9, consts: [[1, "search", 3, "keyup.escape"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ltr:right-12", "rtl:left-12", "top-12", "absolute", 3, "click"], [3, "icIcon"], ["placeholder", "Search...", 1, "search-input", 3, "formControl", "keyup.enter"], ["searchInput", ""], [1, "search-hint"], ["class", "search-overlay", 3, "click", 4, "ngIf"], [1, "search-overlay", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.escape", function SearchComponent_Template_div_keyup_escape_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_4_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Hit enter to search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx.show$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 7, ctx.show$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".search[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  opacity: 0;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n\n.search.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--foreground-divider);\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  margin: 0;\n  border-radius: 0;\n  border-top-width: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n  background-color: transparent;\n  font-weight: 700;\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.search-hint[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: right;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-hint);\n}\n\n.search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0VBLGVBQW1CO0VBQW5CLE1BQW1CO0VBQW5CLE9BQW1CO0VBQW5CLGFBQW1CO0VBQW5CLFdBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsdUJBQW1CO0VBQW5CLGtCQUFtQjtFQUFuQixVQUFtQjtFREFqQixZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtEQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNFO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtBQUNKOztBQUdBO0VBQ0Usa0RBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VDbEJGLFNBQW1CO0VBQW5CLGdCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIscUJBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQiw2QkFBbUI7RUFBbkIsZ0JBQW1CO0FEbUJuQjs7QUFFRTtFQUNFLGFBQUE7QUFBSjs7QUFJQTtFQUNFLFVBQUE7RUMzQkYsaUJBQW1CO0VBQW5CLGtCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixlQUFtQjtFQUFuQixnQkFBbUI7RUFBbkIsdUJBQW1CO0FEMkJuQjs7QUFJQTtFQy9CQSxlQUFtQjtFQUFuQixTQUFtQjtFQUFuQixPQUFtQjtFQUFuQixXQUFtQjtFQUFuQixVQUFtQjtFRGlDakIsWUFBQTtBQURGIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gIEBhcHBseSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIG9wYWNpdHktMDtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBjdWJpYy1iZXppZXIoLjIsIDEsIC4zLCAxKTtcclxuICB6LWluZGV4OiAxMDUwO1xyXG5cclxuICAmLnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKC4yLCAxLCAuMywgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcclxuICBmb250LXNpemU6IDd2dztcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxuICB3aWR0aDogNzUlO1xyXG4gIEBhcHBseSBtLTAgcm91bmRlZC1ub25lIGJvcmRlci1yLTAgYm9yZGVyLWwtMCBib3JkZXItdC0wIGZvbnQtYm9sZCBiZy10cmFuc3BhcmVudDtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1oaW50IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIEBhcHBseSB0ZXh0LWJhc2UgdGV4dC1yaWdodCBweS00IG14LWF1dG8gdGV4dC1oaW50IGZvbnQtYm9sZDtcclxufVxyXG5cclxuLnNlYXJjaC1vdmVybGF5IHtcclxuICBAYXBwbHkgZml4ZWQgdy1mdWxsIGJvdHRvbS0wIGxlZnQtMCBvcGFjaXR5LTA7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcbiIsIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzOyJdfQ== */"] });
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()
], SearchComponent);



/***/ }),

/***/ 77095:
/*!*****************************************************!*\
  !*** ./src/@vex/components/search/search.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 48780);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);







class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule], exports: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent] }); })();


/***/ }),

/***/ 97781:
/*!**********************************************************!*\
  !*** ./src/@vex/components/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


const _c0 = ["*"];
class SidebarComponent {
    constructor(document) {
        this.document = document;
        this.position = 'left';
    }
    get opened() {
        return this._opened;
    }
    set opened(opened) {
        this._opened = opened;
        opened ? this.enableScrollblock() : this.disableScrollblock();
    }
    get positionLeft() {
        return this.position === 'left';
    }
    get positionRight() {
        return this.position === 'right';
    }
    enableScrollblock() {
        if (!this.document.body.classList.contains('vex-scrollblock')) {
            this.document.body.classList.add('vex-scrollblock');
        }
    }
    disableScrollblock() {
        if (this.document.body.classList.contains('vex-scrollblock')) {
            this.document.body.classList.remove('vex-scrollblock');
        }
    }
    open() {
        this.opened = true;
    }
    close() {
        this.opened = false;
    }
    ngOnDestroy() { }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["vex-sidebar"]], hostAttrs: [1, "vex-sidebar"], inputs: { position: "position", invisibleBackdrop: "invisibleBackdrop", opened: "opened" }, ngContentSelectors: _c0, decls: 3, vars: 10, consts: [[1, "backdrop", 3, "click"], [1, "sidebar"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opaque", ctx.invisibleBackdrop)("show", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened)("position-left", ctx.positionLeft)("position-right", ctx.positionRight);
    } }, styles: [".sidebar[_ngcontent-%COMP%] {\n  background: var(--background-card);\n  bottom: 0;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  max-width: 80vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition-duration: var(--trans-ease-in-duration);\n  transition-property: transform, visibility;\n  transition-timing-function: var(--trans-ease-in-timing-function);\n  visibility: hidden;\n  width: var(--sidenav-width);\n  z-index: 1000;\n}\n\n@media (min-width: 600px) {\n  .sidebar[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n\n.sidebar.position-left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translateX(-100%);\n}\n\n.sidebar.position-right[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n}\n\n.sidebar.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n.backdrop[_ngcontent-%COMP%] {\n  background-color: transparent;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: background-color, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  z-index: 800 !important;\n}\n\n.backdrop.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  visibility: visible;\n}\n\n.backdrop.opaque[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLGdFQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDRTtFQW5CRjtJQW9CSSxnQkFBQTtFQUVGO0FBQ0Y7O0FBQUU7RUFDRSxPQUFBO0VBQ0EsNEJBQUE7QUFFSjs7QUFDRTtFQUNFLFFBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUNBLGlEQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBR0U7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSw2QkFBQTtBQUZKIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcclxuICBib3R0b206IDA7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1pbi1kdXJhdGlvbik7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCB2aXNpYmlsaXR5O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLXRpbWluZy1mdW5jdGlvbik7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICBAc2NyZWVuIHNtIHtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAmLnBvc2l0aW9uLWxlZnQge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG5cclxuICAmLnBvc2l0aW9uLXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgdmlzaWJpbGl0eTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDgwMCAhaW1wb3J0YW50O1xyXG5cclxuICAmLnNob3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgJi5vcGFxdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 39729:
/*!*******************************************************!*\
  !*** ./src/@vex/components/sidebar/sidebar.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarModule": () => (/* binding */ SidebarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component */ 97781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



class SidebarModule {
}
SidebarModule.ɵfac = function SidebarModule_Factory(t) { return new (t || SidebarModule)(); };
SidebarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SidebarModule });
SidebarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SidebarModule, { declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent] }); })();


/***/ }),

/***/ 18259:
/*!**************************************************************!*\
  !*** ./src/@vex/directives/container/container.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerDirective": () => (/* binding */ ContainerDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 28094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/config.service */ 63531);





let ContainerDirective = class ContainerDirective {
    constructor(configService, cd) {
        this.configService = configService;
        this.cd = cd;
        this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(config => config.boxed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe(boxed => {
            this.enabled = boxed;
            this.cd.markForCheck();
        });
    }
};
ContainerDirective.ɵfac = function ContainerDirective_Factory(t) { return new (t || ContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
ContainerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: ContainerDirective, selectors: [["", "vexContainer", ""]], hostVars: 2, hostBindings: function ContainerDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("container", ctx.enabled);
    } } });
ContainerDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], ContainerDirective);



/***/ }),

/***/ 90743:
/*!***********************************************************!*\
  !*** ./src/@vex/directives/container/container.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerModule": () => (/* binding */ ContainerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _container_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.directive */ 18259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



class ContainerModule {
}
ContainerModule.ɵfac = function ContainerModule_Factory(t) { return new (t || ContainerModule)(); };
ContainerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContainerModule });
ContainerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContainerModule, { declarations: [_container_directive__WEBPACK_IMPORTED_MODULE_0__.ContainerDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_container_directive__WEBPACK_IMPORTED_MODULE_0__.ContainerDirective] }); })();


/***/ }),

/***/ 14074:
/*!**************************************************!*\
  !*** ./src/@vex/interfaces/config-name.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigName": () => (/* binding */ ConfigName)
/* harmony export */ });
var ConfigName;
(function (ConfigName) {
    ConfigName["apollo"] = "vex-layout-apollo";
    ConfigName["zeus"] = "vex-layout-zeus";
    ConfigName["hermes"] = "vex-layout-hermes";
    ConfigName["poseidon"] = "vex-layout-poseidon";
    ConfigName["ares"] = "vex-layout-ares";
    ConfigName["ikaros"] = "vex-layout-ikaros";
})(ConfigName || (ConfigName = {}));


/***/ }),

/***/ 26673:
/*!****************************************************!*\
  !*** ./src/@vex/layout/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-shopping-basket */ 99312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/container/container.directive */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);






function FooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " 2021 \u00A9 Barkodes | B\u00FCt\u00FCn Haklar\u0131 Sakl\u0131d\u0131r ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FooterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " 2021 \u00A9 Barkodes | B\u00FCt\u00FCn Haklar\u0131 Sakl\u0131d\u0131r ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor() {
        this.icShoppingBasket = _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.isMobileLayout = false;
    }
    ngOnInit() {
        window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; };
        this.isMobileLayout = window.innerWidth <= 991;
    }
    ngOnDestroy() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["vex-footer"]], inputs: { customTemplate: "customTemplate" }, decls: 4, vars: 2, consts: [["fxLayout", "row", 1, "footer"], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", ""], ["class", "ltr:ml-10 rtl:mr-10", "fxShow.gt-sm", "", 4, "ngIf"], ["class", "ltr:ml-4 rtl:mr-4", "fxHide", "", "fxShow.gt-sm", "", 4, "ngIf"], ["fxShow.gt-sm", "", 1, "ltr:ml-10", "rtl:mr-10"], ["fxHide", "", "fxShow.gt-sm", "", 1, "ltr:ml-4", "rtl:mr-4"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FooterComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FooterComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobileLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobileLayout);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__.ContainerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultShowHideDirective], styles: ["[_nghost-%COMP%] {\n  bottom: 0;\n  display: block;\n  width: 100%;\n  z-index: var(--footer-z-index);\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: var(--footer-background);\n  color: var(--footer-color);\n  height: var(--footer-height);\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  position: relative;\n  z-index: var(--footer-z-index);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogdmFyKC0tZm9vdGVyLXotaW5kZXgpO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XHJcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcclxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 82941:
/*!*************************************************!*\
  !*** ./src/@vex/layout/footer/footer.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 26673);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);







class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_1__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _directives_container_container_module__WEBPACK_IMPORTED_MODULE_1__.ContainerModule], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 74563:
/*!*********************************************!*\
  !*** ./src/@vex/layout/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 28094);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 51986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 74172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 87509);
/* harmony import */ var _utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/check-router-childs-data */ 69361);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 59339);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ 39011);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 63531);
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/progress-bar/progress-bar.component */ 45913);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/search/search.component */ 48780);
















const _c0 = ["quickpanel"];
const _c1 = ["sidenav"];
function LayoutComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function LayoutComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function LayoutComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function LayoutComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
let LayoutComponent = class LayoutComponent {
    constructor(cd, breakpointObserver, layoutService, configService, router, document) {
        this.cd = cd;
        this.breakpointObserver = breakpointObserver;
        this.layoutService = layoutService;
        this.configService = configService;
        this.router = router;
        this.document = document;
        this.isLayoutVertical$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.layout === 'vertical'));
        this.isBoxed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.boxed));
        this.isToolbarFixed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.toolbar.fixed));
        this.isFooterFixed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.footer.fixed));
        this.isFooterVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.footer.visible));
        this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
        this.isDesktop$ = this.layoutService.isDesktop$;
        this.scrollDisabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.scrollDisabled)));
        this.containerEnabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.containerEnabled)));
        this.searchOpen$ = this.layoutService.searchOpen$;
    }
    ngOnInit() {
        /**
         * Expand Sidenav when we switch from mobile to desktop view
         */
        this.isDesktop$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(matches => !matches), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(() => this.layoutService.expandSidenav());
        /**
         * Open/Close Quickpanel through LayoutService
         */
        this.layoutService.quickpanelOpen$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(open => open ? this.quickpanel.open() : this.quickpanel.close());
        /**
         * Open/Close Sidenav through LayoutService
         */
        this.layoutService.sidenavOpen$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(open => open ? this.sidenav.open() : this.sidenav.close());
        /**
         * Mobile only:
         * Close Sidenav after Navigating somewhere (e.g. when a user clicks a link in the Sidenav)
         */
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.withLatestFrom)(this.isDesktop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([event, matches]) => !matches), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(() => this.sidenav.close());
    }
    ngAfterViewInit() {
        /**
         * Enable Scrolling to specific parts of the page using the Router
         */
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.Scroll), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(e => {
            if (e.position) {
                // backward navigation
                this.sidenavContainer.scrollable.scrollTo({
                    start: e.position[0],
                    top: e.position[1]
                });
            }
            else if (e.anchor) {
                // anchor navigation
                const scroll = (anchor) => this.sidenavContainer.scrollable.scrollTo({
                    behavior: 'smooth',
                    top: anchor.offsetTop,
                    left: anchor.offsetLeft
                });
                let anchorElem = this.document.getElementById(e.anchor);
                if (anchorElem) {
                    scroll(anchorElem);
                }
                else {
                    setTimeout(() => {
                        anchorElem = this.document.getElementById(e.anchor);
                        scroll(anchorElem);
                    }, 100);
                }
            }
            else {
                // forward navigation
                this.sidenavContainer.scrollable.scrollTo({
                    top: 0,
                    start: 0
                });
            }
        });
    }
};
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["vex-layout"]], viewQuery: function LayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.quickpanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
    } }, inputs: { sidenavRef: "sidenavRef", toolbarRef: "toolbarRef", footerRef: "footerRef", quickpanelRef: "quickpanelRef" }, decls: 34, vars: 69, consts: [[1, "page-container"], [1, "sidenav-container"], [1, "sidenav", 3, "disableClose", "fixedInViewport", "mode", "opened"], ["sidenav", ""], [4, "ngTemplateOutlet"], ["mode", "over", "position", "end", 1, "quickpanel", 3, "fixedInViewport"], ["quickpanel", ""], [1, "sidenav-content"], [1, "content"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "vex-progress-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "vex-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, LayoutComponent_ng_container_24_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-sidenav", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, LayoutComponent_ng_container_28_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-sidenav-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LayoutComponent_ng_container_30_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "main", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, LayoutComponent_ng_container_33_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("boxed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 31, ctx.isBoxed$))("horizontal-layout", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 33, ctx.isLayoutVertical$))("is-mobile", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 35, ctx.isDesktop$))("vertical-layout", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 37, ctx.isLayoutVertical$))("has-fixed-footer", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 39, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 41, ctx.isFooterFixed$) && ctx.isFooterVisible$))("has-footer", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 43, ctx.isFooterVisible$))("scroll-disabled", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 45, ctx.scrollDisabled$))("toolbar-fixed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 47, ctx.isToolbarFixed$))("sidenav-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 49, ctx.sidenavCollapsed$))("content-container", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 51, ctx.containerEnabled$))("with-search", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 53, ctx.searchOpen$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disableClose", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 55, ctx.isDesktop$))("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 57, ctx.isDesktop$))("mode", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 59, ctx.isDesktop$) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 61, ctx.isLayoutVertical$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 63, ctx.isDesktop$) && !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 65, ctx.isLayoutVertical$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.sidenavRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedInViewport", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 67, ctx.isDesktop$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.quickpanelRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.toolbarRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.footerRef);
    } }, directives: [_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenav, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: [".page-container[_ngcontent-%COMP%] {\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background: var(--sidenav-background);\n}\n\n.sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n.content[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  position: relative;\n  width: 100%;\n}\n\n.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.scroll-disabled[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  min-height: unset;\n  overflow: hidden;\n}\n\n.scroll-disabled.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .scroll-disabled.has-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n  min-height: unset;\n}\n\n.is-mobile[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: 100%;\n}\n\n.is-mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: var(--toolbar-height);\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  background: var(--background-base);\n  height: 100%;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.sidenav-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.with-search[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n}\n\n.with-search[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  transform: perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);\n  transform-origin: 50vw 50vh;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n  overflow: visible;\n  border-radius: 0.25rem;\n  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.toolbar-fixed[_ngcontent-%COMP%]     .vex-toolbar {\n  position: fixed;\n  width: var(--toolbar-width);\n  z-index: 50;\n}\n\n.toolbar-fixed[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: calc(var(--toolbar-height) + var(--navigation-height));\n}\n\n.has-fixed-footer[_ngcontent-%COMP%]     .vex-footer {\n  box-shadow: var(--footer-elevation);\n  position: fixed;\n}\n\n.has-fixed-footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-bottom: var(--footer-height);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.has-fixed-footer.scroll-disabled[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7QUFDRjs7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQ0FBQTtFQUNBLHlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxnR0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLHFFQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBRUUsNEZBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU9FO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPRTtFQUNFLGlDQUFBO0FBTEo7O0FBU0E7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBTkY7O0FBUUU7RUFDRSxvQkFBQTtFQUNBLCtFQUFBO0VBQ0EsMkJBQUE7RUFDQSx1REFBQTtFQ3pFSixpQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLGtEQUFtQjtFQUFuQixrREFBbUI7RUFBbkIsdUdBQW1CO0FEb0VuQjs7QUFXRTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFSSjs7QUFXRTtFQUNFLGtFQUFBO0FBVEo7O0FBY0U7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUFYSjs7QUFjRTtFQUNFLG1DQUFBO0VBQ0EsZ0dBQUE7QUFaSjs7QUFlRTtFQUNFLDRGQUFBO0FBYkoiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtYmFja2dyb3VuZCk7XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGFzLWZvb3RlciAuY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xyXG59XHJcblxyXG4uc2Nyb2xsLWRpc2FibGVkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XHJcbiAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAmLmhhcy1maXhlZC1mb290ZXIgLmNvbnRlbnQsXHJcbiAgJi5oYXMtZm9vdGVyIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaXMtbW9iaWxlIHtcclxuICA6Om5nLWRlZXAgLnZleC10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMiwgMSwgLjMsIDEpO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250ZW50IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLndpdGgtc2VhcmNoIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuXHJcbiAgLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDUwdmgsIDApIHJvdGF0ZTNkKDEsIDAsIDAsIDMwZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwdncgNTB2aDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4yLCAxLCAuMywgMSk7XHJcbiAgICBAYXBwbHkgcm91bmRlZCBzaGFkb3ctMnhsIG92ZXJmbG93LXZpc2libGU7XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbGJhci1maXhlZCB7XHJcbiAgOjpuZy1kZWVwIC52ZXgtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tdG9vbGJhci1oZWlnaHQpICsgdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcclxuICB9XHJcbn1cclxuXHJcbi5oYXMtZml4ZWQtZm9vdGVyIHtcclxuICA6Om5nLWRlZXAgLnZleC1mb290ZXIge1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZm9vdGVyLWVsZXZhdGlvbik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcclxuICB9XHJcblxyXG4gICYuc2Nyb2xsLWRpc2FibGVkIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzOyJdfQ== */"] });
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()
], LayoutComponent);



/***/ }),

/***/ 98812:
/*!******************************************!*\
  !*** ./src/@vex/layout/layout.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component */ 74563);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 51986);
/* harmony import */ var _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/progress-bar/progress-bar.module */ 95939);
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/search/search.module */ 77095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);







class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
            _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_1__.ProgressBarModule,
            _components_search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
        _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_1__.ProgressBarModule,
        _components_search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule], exports: [_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent] }); })();


/***/ }),

/***/ 73145:
/*!************************************************************!*\
  !*** ./src/@vex/layout/navigation/navigation.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/navigation.service */ 73166);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/container/container.directive */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.component */ 64077);






function NavigationComponent_vex_navigation_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "vex-navigation-item", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r1);
} }
class NavigationComponent {
    constructor(navigationService) {
        this.navigationService = navigationService;
        this.items = this.navigationService.items;
    }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService)); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["vex-navigation"]], decls: 2, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", "", 1, "navigation"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavigationComponent_vex_navigation_item_1_Template, 1, 1, "vex-navigation-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_1__.ContainerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_2__.NavigationItemComponent], styles: ["[_nghost-%COMP%] {\n  background: var(--navigation-background);\n  display: block;\n  height: var(--navigation-height);\n  position: relative;\n  z-index: 200;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  height: var(--navigation-height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW5hdmlnYXRpb24tYmFja2dyb3VuZCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDIwMDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24ge1xyXG4gIGhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 90209:
/*!*********************************************************!*\
  !*** ./src/@vex/layout/navigation/navigation.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationModule": () => (/* binding */ NavigationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component */ 73145);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.module */ 98240);
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);











class NavigationModule {
}
NavigationModule.ɵfac = function NavigationModule_Factory(t) { return new (t || NavigationModule)(); };
NavigationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NavigationModule });
NavigationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_1__.NavigationItemModule,
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NavigationModule, { declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_1__.NavigationItemModule,
        _directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__.ContainerModule], exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent] }); })();


/***/ }),

/***/ 6020:
/*!************************************************************!*\
  !*** ./src/@vex/layout/quickpanel/quickpanel.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickpanelComponent": () => (/* binding */ QuickpanelComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 71601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);







const _c0 = function () { return []; };
class QuickpanelComponent {
    constructor() {
        this.date = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('DD');
        this.dayName = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('EEEE');
    }
    ngOnInit() {
    }
}
QuickpanelComponent.ɵfac = function QuickpanelComponent_Factory(t) { return new (t || QuickpanelComponent)(); };
QuickpanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuickpanelComponent, selectors: [["vex-quickpanel"]], decls: 67, vars: 16, consts: [[1, "body-2", "p-6", "bg-primary", "text-primary-contrast"], [1, "display-1"], ["matSubheader", ""], ["mat-list-item", "", 3, "routerLink"], ["matLine", ""], ["matRipple", "", 1, "vex-list-item"], [1, "progress-bar"], ["color", "primary", "mode", "determinate", "value", "71"], ["color", "accent", "mode", "determinate", "value", "34"], ["color", "warn", "mode", "determinate", "value", "54"]], template: function QuickpanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "TODAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "UPCOMING EVENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Business Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "In 16 Minutes, Meeting Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ask for Vacation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "12:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Dinner with Sophie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "18:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Deadline for Project X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "21:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "TODO-LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Invite Jack to play golf");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Added: 6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Get to know Angular more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Added: 2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Configure that new router");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Added: 5 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "SERVER STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "CPU Load (71% / 100%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-progress-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "RAM Usage (6,175 MB / 16,384 MB)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "mat-progress-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "CPU Temp (43\u00B0 / 80\u00B0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatLine, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 80vw;\n}\n\nh3[_ngcontent-%COMP%] {\n  padding: 16px 16px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.vex-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font: var(--font-subheading-2);\n  justify-content: center;\n  min-height: 72px;\n  padding: 0 var(--padding-16);\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.vex-list-item[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aWNrcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBQUY7O0FBRUU7RUFDRSxtQ0FBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtBQURGIiwiZmlsZSI6InF1aWNrcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgbWF4LXdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgcGFkZGluZzogMTZweCAxNnB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnZleC1saXN0LWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udDogdmFyKC0tZm9udC1zdWJoZWFkaW5nLTIpO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDcycHg7XHJcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLTE2KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 88301:
/*!*********************************************************!*\
  !*** ./src/@vex/layout/quickpanel/quickpanel.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickpanelModule": () => (/* binding */ QuickpanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _quickpanel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickpanel.component */ 6020);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);







class QuickpanelModule {
}
QuickpanelModule.ɵfac = function QuickpanelModule_Factory(t) { return new (t || QuickpanelModule)(); };
QuickpanelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: QuickpanelModule });
QuickpanelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuickpanelModule, { declarations: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_0__.QuickpanelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule], exports: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_0__.QuickpanelComponent] }); })();


/***/ }),

/***/ 91481:
/*!************************************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav-item/sidenav-item.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavItemComponent": () => (/* binding */ SidenavItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../animations/dropdown.animation */ 89791);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 28094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-keyboard-arrow-right */ 81163);
/* harmony import */ var _iconify_icons_ic_favorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/favorite */ 63858);
/* harmony import */ var _iconify_icons_ic_favorite_border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/favorite-border */ 13761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/navigation.service */ 73166);
/* harmony import */ var _app_pages_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/pages/services/login.service */ 12256);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);


















function SidenavItemComponent_a_0_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 7);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx_r4.item.icon);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function SidenavItemComponent_a_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c0, ctx_r5.item.badge.bgClass, ctx_r5.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.item.badge.value);
} }
const _c1 = function () { return { exact: false }; };
function SidenavItemComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SidenavItemComponent_a_0_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SidenavItemComponent_a_0_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fragment", ctx_r0.item.fragment)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c1))("routerLink", ctx_r0.item.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
} }
function SidenavItemComponent_div_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 7);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx_r6.item.icon);
} }
function SidenavItemComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c0, ctx_r7.item.badge.bgClass, ctx_r7.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.item.badge.value);
} }
function SidenavItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidenavItemComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.item.route(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SidenavItemComponent_div_1_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SidenavItemComponent_div_1_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx_r1.item.icon);
} }
function SidenavItemComponent_ng_container_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 7);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx_r10.item.icon);
} }
function SidenavItemComponent_ng_container_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c0, ctx_r11.item.badge.bgClass, ctx_r11.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.item.badge.value);
} }
function SidenavItemComponent_ng_container_2_vex_sidenav_item_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "vex-sidenav-item", 18);
} if (rf & 2) {
    const subItem_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", subItem_r13)("level", ctx_r12.level + 1);
} }
function SidenavItemComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidenavItemComponent_ng_container_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.toggleOpen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_mat_icon_2_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidenavItemComponent_ng_container_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r16.addFavorites(ctx_r16.item); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, SidenavItemComponent_ng_container_2_span_8_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SidenavItemComponent_ng_container_2_vex_sidenav_item_11_Template, 1, 2, "vex-sidenav-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.isOpen || ctx_r2.isActive)("open", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.level === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx_r2.item.favorite ? ctx_r2.icFavorite : ctx_r2.icFavoriteBorder);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx_r2.icKeyboardArrowRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@dropdown", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
} }
function SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "vex-sidenav-item", 18);
} if (rf & 2) {
    const subItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", subItem_r18)("level", 0);
} }
function SidenavItemComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template, 1, 2, "vex-sidenav-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.item.children);
} }
let SidenavItemComponent = class SidenavItemComponent {
    constructor(router, cd, navigationService, loginService) {
        this.router = router;
        this.cd = cd;
        this.navigationService = navigationService;
        this.loginService = loginService;
        this.icKeyboardArrowRight = _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icFavorite = _iconify_icons_ic_favorite__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icFavoriteBorder = _iconify_icons_ic_favorite_border__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.isLink = this.navigationService.isLink;
        this.isDropdown = this.navigationService.isDropdown;
        this.isSubheading = this.navigationService.isSubheading;
    }
    get levelClass() {
        return `item-level-${this.level}`;
    }
    addFavorites(item) {
        item.favorite = !item.favorite;
        this.updateUserFavorite(item);
    }
    updateUserFavorite(item) {
        this.loginService.UpdateUserFavorite(item).subscribe(menuItems => {
            // this.navigationService.items=<NavigationItem[]>(menuItems);
            // this.loginGetLabels();
        });
    }
    ngOnInit() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this.isDropdown(this.item)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this)).subscribe(() => this.onRouteChange());
        this.navigationService.openChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this.isDropdown(this.item)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this)).subscribe(item => this.onOpenChange(item));
    }
    ngOnChanges(changes) {
        if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
            this.onRouteChange();
        }
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
        this.navigationService.triggerOpenChange(this.item);
        this.cd.markForCheck();
    }
    onOpenChange(item) {
        if (this.isChildrenOf(this.item, item)) {
            return;
        }
        if (this.hasActiveChilds(this.item)) {
            return;
        }
        if (this.item !== item) {
            this.isOpen = false;
            this.cd.markForCheck();
        }
    }
    onRouteChange() {
        if (this.hasActiveChilds(this.item)) {
            this.isActive = true;
            this.isOpen = true;
            this.navigationService.triggerOpenChange(this.item);
            this.cd.markForCheck();
        }
        else {
            this.isActive = false;
            this.isOpen = false;
            this.navigationService.triggerOpenChange(this.item);
            this.cd.markForCheck();
        }
    }
    isChildrenOf(parent, item) {
        if (parent.children.indexOf(item) !== -1) {
            return true;
        }
        return parent.children
            .filter(child => this.isDropdown(child))
            .some(child => this.isChildrenOf(child, item));
    }
    hasActiveChilds(parent) {
        return parent.children.some(child => {
            if (this.isDropdown(child)) {
                return this.hasActiveChilds(child);
            }
            if (this.isLink(child) && !this.isFunction(child.route)) {
                return this.router.isActive(child.route, false);
            }
        });
    }
    isFunction(prop) {
        return prop instanceof Function;
    }
};
SidenavItemComponent.ɵfac = function SidenavItemComponent_Factory(t) { return new (t || SidenavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_pages_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService)); };
SidenavItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SidenavItemComponent, selectors: [["vex-sidenav-item"]], hostVars: 2, hostBindings: function SidenavItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.levelClass);
    } }, inputs: { item: "item", level: "level" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 4, consts: [["class", "item", "fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 3, "fragment", "routerLinkActiveOptions", "routerLink", 4, "ngIf"], ["class", "item", "fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 3, "click", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 1, "item", 3, "fragment", "routerLinkActiveOptions", "routerLink"], ["class", "item-icon", "fxFlex", "none", 3, "icIcon", 4, "ngIf"], ["fxFlex", "auto", 1, "item-label"], ["class", "item-badge", "fxFlex", "none", 3, "ngClass", 4, "ngIf"], ["fxFlex", "none", 1, "item-icon", 3, "icIcon"], ["fxFlex", "none", 1, "item-badge", 3, "ngClass"], ["fxLayout", "row", "matRipple", "", "routerLinkActive", "active", 1, "item", 3, "click"], ["color", "primary", "fxFlex", "none", 1, "item-icon", 3, "icIcon"], ["fxLayout", "row", "matRipple", "", 1, "item", 3, "click"], ["fxFlex", ""], ["mat-button", "", 1, "my-fab", 3, "click"], ["color", "primary", 1, "mat-icon2", 3, "icIcon"], ["fxFlex", "none", 1, "item-dropdown-icon", 3, "icIcon"], [1, "item-dropdown"], [3, "item", "level", 4, "ngFor", "ngForOf"], [3, "item", "level"], [1, "subheading"]], template: function SidenavItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SidenavItemComponent_a_0_Template, 5, 7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SidenavItemComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_Template, 12, 11, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isDropdown(ctx.item));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__.IconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, SidenavItemComponent], styles: [".item[_ngcontent-%COMP%] {\n  align-items: center;\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  min-height: 48px;\n  padding: var(--padding-8) var(--sidenav-item-padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  width: 100%;\n  border-left: var(--sidenav-item-border);\n}\n\n.item[_ngcontent-%COMP%]:hover, .item.active[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-background-active);\n  border-left-color: var(--sidenav-item-border-color-active);\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-icon[_ngcontent-%COMP%], .item.active[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color-active);\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-label[_ngcontent-%COMP%], .item.active[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-active);\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-dropdown-icon[_ngcontent-%COMP%], .item.active[_ngcontent-%COMP%]   .item-dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-color-active);\n}\n\n.item.open[_ngcontent-%COMP%]   .item-dropdown-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg) !important;\n}\n\n.item-level-1[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n}\n\n.item-level-1[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-2[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n}\n\n.item-level-2[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-3[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n}\n\n.item-level-3[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-4[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n}\n\n.item-level-4[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-5[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n}\n\n.item-level-5[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-level-6[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n}\n\n.item-level-6[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-icon[_ngcontent-%COMP%], .item-label[_ngcontent-%COMP%], .item-dropdown-icon[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.item-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color);\n  font-size: var(--sidenav-item-icon-size);\n  height: var(--sidenav-item-icon-size);\n  -webkit-margin-end: var(--sidenav-item-icon-gap);\n          margin-inline-end: var(--sidenav-item-icon-gap);\n  width: var(--sidenav-item-icon-size);\n}\n\n.mat-icon2[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.mat-icon3[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.item-label[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item-badge[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  font-size: 11px;\n  line-height: 20px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  padding: 0 7px;\n  text-align: center;\n}\n\n.item-dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--sidenav-item-icon-color);\n  font-size: 18px;\n  height: 18px;\n  line-height: 18px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  transform: rotate(0deg) !important;\n  width: 18px;\n}\n\n.item-dropdown[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  font: var(--font-caption);\n  margin-top: var(--padding);\n  padding: var(--padding-12) var(--padding);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpREFBQTtFQUNBLDBEQUFBO0FBQ0o7O0FBQ0k7RUFDRSw0Q0FBQTtBQUNOOztBQUVJO0VBQ0UsdUNBQUE7QUFBTjs7QUFHSTtFQUNFLHVDQUFBO0FBRE47O0FBTUk7RUFDRSxtQ0FBQTtBQUpOOztBQVVFO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBUEo7O0FBU0k7RUFDRSx5REFBQTtBQVBOOztBQUVFO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBQ0o7O0FBQ0k7RUFDRSx5REFBQTtBQUNOOztBQU5FO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBU0o7O0FBUEk7RUFDRSx5REFBQTtBQVNOOztBQWRFO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBaUJKOztBQWZJO0VBQ0UseURBQUE7QUFpQk47O0FBdEJFO0VBQ0UsbURBQUE7RUFDQSxnS0FBQTtVQUFBLCtKQUFBO0FBeUJKOztBQXZCSTtFQUNFLHlEQUFBO0FBeUJOOztBQTlCRTtFQUNFLG1EQUFBO0VBQ0EsZ0tBQUE7VUFBQSwrSkFBQTtBQWlDSjs7QUEvQkk7RUFDRSx5REFBQTtBQWlDTjs7QUE1QkE7RUFDRSxtQkFBQTtBQStCRjs7QUE1QkE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxnREFBQTtVQUFBLCtDQUFBO0VBQ0Esb0NBQUE7QUErQkY7O0FBNUJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQWlCLFdBQUE7QUFnQ25COztBQTVCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUFpQixXQUFBO0FBZ0NuQjs7QUEzQkE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBOEJGOztBQTNCQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7VUFBQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQThCRjs7QUEzQkE7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtVQUFBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FBOEJGOztBQTNCQTtFQUNFLGdCQUFBO0FBOEJGOztBQTFCQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBNkJGIiwiZmlsZSI6InNpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1sZWZ0OiB2YXIoLS1zaWRlbmF2LWl0ZW0tYm9yZGVyKTtcclxuXHJcbiAgJjpob3ZlciwgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWJhY2tncm91bmQtYWN0aXZlKTtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tYm9yZGVyLWNvbG9yLWFjdGl2ZSk7XHJcblxyXG4gICAgLml0ZW0taWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1hY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWRyb3Bkb3duLWljb24ge1xyXG4gICAgICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWNvbG9yLWFjdGl2ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLm9wZW4ge1xyXG4gICAgLml0ZW0tZHJvcGRvd24taWNvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA2IHtcclxuICA6aG9zdCguaXRlbS1sZXZlbC0jeyRpfSkgLml0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogI3skaSAtIDF9KSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLWljb24sIC5pdGVtLWxhYmVsLCAuaXRlbS1kcm9wZG93bi1pY29uIHtcclxuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaXRlbS1pY29uIHtcclxuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcclxuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKTtcclxuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XHJcbn1cclxuXHJcbi5tYXQtaWNvbjIge1xyXG4gIGhlaWdodDogMTJweDtcclxuICB3aWR0aDogMTJweDtcclxuICBmb250LXNpemU6IDEycHg7IG1hcmdpbjogMHB4O1xyXG4gICBcclxufVxyXG5cclxuLm1hdC1pY29uMyB7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDsgbWFyZ2luOiAwcHg7XHJcbiAgXHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pdGVtLWxhYmVsIHtcclxuICBmbGV4OiAxO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLml0ZW0tYmFkZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tcGFkZGluZy04KTtcclxuICBwYWRkaW5nOiAwIDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtLWRyb3Bkb3duLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcbi5pdGVtLWRyb3Bkb3duIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLnN1YmhlYWRpbmcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvcik7XHJcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcclxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTEyKSB2YXIoLS1wYWRkaW5nKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuIl19 */"], data: { animation: [_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__.dropdownAnimation] }, changeDetection: 0 });
SidenavItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)()
], SidenavItemComponent);



/***/ }),

/***/ 55581:
/*!*********************************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav-item/sidenav-item.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavItemModule": () => (/* binding */ SidenavItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _sidenav_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-item.component */ 91481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);








class SidenavItemModule {
}
SidenavItemModule.ɵfac = function SidenavItemModule_Factory(t) { return new (t || SidenavItemModule)(); };
SidenavItemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SidenavItemModule });
SidenavItemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SidenavItemModule, { declarations: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_0__.SidenavItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule], exports: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_0__.SidenavItemComponent] }); })();


/***/ }),

/***/ 74916:
/*!******************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavComponent": () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/track-by */ 45007);
/* harmony import */ var _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-radio-button-checked */ 90224);
/* harmony import */ var _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-radio-button-unchecked */ 59985);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation.service */ 73166);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ 39011);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/config.service */ 63531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/scrollbar/scrollbar.component */ 6448);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidenav-item/sidenav-item.component */ 91481);














function SidenavComponent_button_8_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-icon", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icIcon", ctx_r2.icRadioButtonChecked);
} }
function SidenavComponent_button_8_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-icon", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icIcon", ctx_r3.icRadioButtonUnchecked);
} }
function SidenavComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SidenavComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r4.toggleCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SidenavComponent_button_8_mat_icon_1_Template, 1, 1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SidenavComponent_button_8_mat_icon_2_Template, 1, 1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.collapsed);
} }
function SidenavComponent_vex_sidenav_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "vex-sidenav-item", 11);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r6)("level", 0);
} }
class SidenavComponent {
    constructor(navigationService, layoutService, configService) {
        this.navigationService = navigationService;
        this.layoutService = layoutService;
        this.configService = configService;
        this.collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
        this.title$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.title));
        this.imageUrl$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.imageUrl));
        this.showCollapsePin$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(config => config.sidenav.showCollapsePin));
        this.items = this.navigationService.items;
        this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
        this.icRadioButtonChecked = _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icRadioButtonUnchecked = _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
    }
    onMouseEnter() {
        this.layoutService.collapseOpenSidenav();
    }
    onMouseLeave() {
        this.layoutService.collapseCloseSidenav();
    }
    toggleCollapse() {
        this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService)); };
SidenavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["vex-sidenav"]], inputs: { collapsed: "collapsed" }, decls: 13, vars: 17, consts: [[1, "sidenav", "flex", "flex-col", 3, "mouseenter", "mouseleave"], [1, "sidenav-toolbar", "flex-none", "flex", "items-center"], [1, "w-6", "select-none", "flex-none", 3, "src"], [1, "title", "ltr:pl-4", "rtl:pr-4", "select-none", "flex-auto"], ["class", "w-8 h-8 -mr-2 leading-none flex-none hidden lg:block", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], [1, "flex-auto"], [1, "sidenav-items"], [3, "item", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-icon-button", "", "type", "button", 1, "w-8", "h-8", "-mr-2", "leading-none", "flex-none", "hidden", "lg:block", 3, "click"], ["size", "14px", 3, "icIcon", 4, "ngIf"], ["size", "14px", 3, "icIcon"], [3, "item", "level"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseenter", function SidenavComponent_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function SidenavComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SidenavComponent_button_8_Template, 3, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "vex-scrollbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SidenavComponent_vex_sidenav_item_12_Template, 1, 2, "vex-sidenav-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("collapsed", ctx.collapsed)("open", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 9, ctx.collapsed && ctx.collapsedOpen$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 11, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 13, ctx.title$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 15, ctx.showCollapsePin$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByRoute);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_6__.ScrollbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__.IconDirective, _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_7__.SidenavItemComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".sidenav[_ngcontent-%COMP%] {\n  color: var(--sidenav-color);\n  height: 100%;\n  transition: var(--trans-ease-out);\n  width: var(--sidenav-width);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%] {\n  width: var(--sidenav-collapsed-width);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .sidenav-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-padding-start: var(--sidenav-item-padding);\n          padding-inline-start: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .item-icon {\n  -webkit-margin-end: var(--sidenav-item-padding);\n          margin-inline-end: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .subheading, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .item-badge, .sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .sidenav-items .item-label {\n  opacity: 0;\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .simplebar-track.simplebar-vertical {\n  visibility: hidden !important;\n}\n\n.sidenav.collapsed[_ngcontent-%COMP%]     .subheading, .sidenav.collapsed[_ngcontent-%COMP%]     .item-badge, .sidenav.collapsed[_ngcontent-%COMP%]     .item-label {\n  transition: all 200ms var(--trans-ease-out-timing-function);\n}\n\n.sidenav.collapsed.open[_ngcontent-%COMP%] {\n  width: var(--sidenav-width);\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--sidenav-toolbar-background);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: var(--toolbar-height);\n  padding: 0 var(--padding);\n  white-space: nowrap;\n  width: 100%;\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  transition: padding var(--trans-ease-out-duration) var(--trans-ease-out-timing-function), opacity var(--trans-ease-out-duration) var(--trans-ease-out-timing-function);\n}\n\n.sidenav-items[_ngcontent-%COMP%] {\n  padding-top: var(--padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxxQ0FBQTtBQUNKOztBQUdRO0VBQ0UsVUFBQTtFQUNBLGtEQUFBO1VBQUEsaURBQUE7QUFEVjs7QUFPVTtFQUNFLCtDQUFBO1VBQUEsOENBQUE7QUFMWjs7QUFRVTtFQUNFLFVBQUE7QUFOWjs7QUFVUTtFQUNFLDZCQUFBO0FBUlY7O0FBY007RUFDRSwyREFBQTtBQVpSOztBQWdCSTtFQUNFLDJCQUFBO0FBZE47O0FBbUJBO0VBQ0UsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWhCRjs7QUFrQkU7RUFDRSxzS0FBQTtBQWhCSjs7QUFvQkE7RUFDRSwyQkFBQTtBQWpCRiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xyXG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWNvbG9yKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xyXG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcclxuXHJcbiAgJi5jb2xsYXBzZWQge1xyXG4gICAgd2lkdGg6IHZhcigtLXNpZGVuYXYtY29sbGFwc2VkLXdpZHRoKTtcclxuXHJcbiAgICAmOm5vdCgub3Blbikge1xyXG4gICAgICAuc2lkZW5hdi10b29sYmFyIHtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgIC5zaWRlbmF2LWl0ZW1zIHtcclxuICAgICAgICAgIC5pdGVtLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnN1YmhlYWRpbmcsIC5pdGVtLWJhZGdlLCAuaXRlbS1sYWJlbCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAuc3ViaGVhZGluZywgLml0ZW0tYmFkZ2UsIC5pdGVtLWxhYmVsIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgdmFyKC0tdHJhbnMtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYub3BlbiB7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2LXRvb2xiYXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi10b29sYmFyLWJhY2tncm91bmQpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xyXG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZyk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiksIG9wYWNpdHkgdmFyKC0tdHJhbnMtZWFzZS1vdXQtZHVyYXRpb24pIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZW5hdi1pdGVtcyB7XHJcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmcpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 40763:
/*!***************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavModule": () => (/* binding */ SidenavModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav.component */ 74916);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 47727);
/* harmony import */ var _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav-item/sidenav-item.module */ 55581);
/* harmony import */ var _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/scrollbar/scrollbar.module */ 34842);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);










class SidenavModule {
}
SidenavModule.ɵfac = function SidenavModule_Factory(t) { return new (t || SidenavModule)(); };
SidenavModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SidenavModule });
SidenavModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
            _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_1__.SidenavItemModule,
            _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_2__.ScrollbarModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SidenavModule, { declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_1__.SidenavItemModule,
        _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_2__.ScrollbarModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule], exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent] }); })();


/***/ }),

/***/ 4440:
/*!**********************************************************************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarNotificationsDropdownComponent": () => (/* binding */ ToolbarNotificationsDropdownComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! luxon */ 71601);
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/track-by */ 45007);
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ 77499);
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-right */ 54175);
/* harmony import */ var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-notifications-off */ 87749);
/* harmony import */ var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear-all */ 5618);
/* harmony import */ var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-shopping-basket */ 99312);
/* harmony import */ var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-account-circle */ 72840);
/* harmony import */ var _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-insert-chart */ 70655);
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-circle */ 27949);
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ 42461);
/* harmony import */ var _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-feedback */ 95453);
/* harmony import */ var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-verified-user */ 24084);
/* harmony import */ var _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-file-copy */ 22026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../pipes/relative-date-time/relative-date-time.pipe */ 60396);

























const _c0 = function () { return []; };
function ToolbarNotificationsDropdownComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ic-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "relativeDateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("read", notification_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", notification_r2.icon)("ngClass", notification_r2.colorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](notification_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 8, notification_r2.datetime));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx_r0.icChevronRight);
} }
class ToolbarNotificationsDropdownComponent {
    constructor() {
        this.notifications = [
            {
                id: '1',
                label: 'New Order Received',
                icon: _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_5__["default"],
                colorClass: 'text-primary',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_15__.DateTime.local().minus({ hour: 1 })
            },
            {
                id: '2',
                label: 'New customer has registered',
                icon: _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_6__["default"],
                colorClass: 'text-orange',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_15__.DateTime.local().minus({ hour: 2 })
            },
            {
                id: '3',
                label: 'Campaign statistics are available',
                icon: _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_7__["default"],
                colorClass: 'text-purple',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_15__.DateTime.local().minus({ hour: 5 })
            },
            {
                id: '4',
                label: 'Project has been approved',
                icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8__["default"],
                colorClass: 'text-green',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_15__.DateTime.local().minus({ hour: 9 })
            },
            {
                id: '5',
                label: 'Client reports are available',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_9__["default"],
                colorClass: 'text-primary',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_15__.DateTime.local().minus({ hour: 30 })
            },
            {
                id: '6',
                label: 'New review received',
                icon: _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_10__["default"],
                colorClass: 'text-orange',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_15__.DateTime.local().minus({ hour: 40 }),
                read: true
            },
            {
                id: '7',
                label: '22 verified registrations',
                icon: _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_11__["default"],
                colorClass: 'text-green',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_15__.DateTime.local().minus({ hour: 60 })
            },
            {
                id: '8',
                label: 'New files available',
                icon: _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_12__["default"],
                colorClass: 'text-amber',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_15__.DateTime.local().minus({ hour: 90 })
            }
        ];
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icClearAll = _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackById;
    }
    ngOnInit() {
    }
}
ToolbarNotificationsDropdownComponent.ɵfac = function ToolbarNotificationsDropdownComponent_Factory(t) { return new (t || ToolbarNotificationsDropdownComponent)(); };
ToolbarNotificationsDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: ToolbarNotificationsDropdownComponent, selectors: [["vex-toolbar-notifications-dropdown"]], decls: 24, vars: 7, consts: [[1, "dropdown"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dropdown-header"], [1, "dropdown-heading"], [1, "dropdown-subheading"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], [1, "notifications-header-icon", 3, "icIcon"], [1, "dropdown-content"], ["class", "notification", "fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 3, "read", "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "dropdown-footer"], ["color", "primary", "mat-button", "", "type", "button"], ["xPosition", "before", "yPosition", "below"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], [3, "icIcon"], ["fxLayout", "row", "fxLayoutAlign", "start center", "matRipple", "", 1, "notification", 3, "routerLink"], ["fxFlex", "none", "size", "24px", 1, "notification-icon", 3, "icon", "ngClass"], ["fxFlex", "auto"], [1, "notification-label"], [1, "notification-description"], ["fxFlex", "none", 1, "notification-chevron", 3, "icIcon"]], template: function ToolbarNotificationsDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, ToolbarNotificationsDropdownComponent_a_10_Template, 9, 11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "MARK ALL AS READ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "mat-menu", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Mark all as read");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Disable Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("You have ", ctx.notifications.length, " new notifications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icClearAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icIcon", ctx.icNotificationsOff);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_20__.IconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLinkWithHref, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRipple, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultClassDirective], pipes: [_pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_13__.RelativeDateTimePipe], styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-primary));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  color: rgb(var(--color-primary-contrast));\n  --tw-shadow: var(--elevation-z6);\n  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font: var(--font-title);\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 291px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding);\n}\n\n.notification[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  -webkit-margin-end: var(--padding);\n          margin-inline-end: var(--padding);\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXItbm90aWZpY2F0aW9ucy1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsK0NBQUE7RUFDQSxnREFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUNMRixzQkFBbUI7QURPbkI7O0FBRUE7RUNUQSwyQ0FBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLHFCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLHlDQUFtQjtFQUFuQixnQ0FBbUI7RUFBbkIsa0RBQW1CO0VBQW5CLHVHQUFtQjtBRFduQjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UsbUNBQUE7QUFDSjs7QUFDSTtFQ3hDSixnQ0FBbUI7QUQwQ25COztBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUtBO0VBQ0Usa0NBQUE7VUFBQSxpQ0FBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSwrQ0FBQTtBQUZGIiwiZmlsZSI6InRvb2xiYXItbm90aWZpY2F0aW9ucy1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo0KTtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIEBhcHBseSByb3VuZGVkO1xyXG59XHJcblxyXG4uZHJvcGRvd24taGVhZGVyIHtcclxuICBAYXBwbHkgYmctcHJpbWFyeSBzaGFkb3cgdGV4dC1wcmltYXJ5LWNvbnRyYXN0IHB5LTQgcHgtNjtcclxufVxyXG5cclxuLmRyb3Bkb3duLWhlYWRpbmcge1xyXG4gIGZvbnQ6IHZhcigtLWZvbnQtdGl0bGUpO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogMjkxcHg7IC8vIDczcHggaGVpZ2h0IG9mIDEgbm90aWZpY2F0aW9uICogNFxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZHJvcGRvd24tZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZyk7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTE2KSB2YXIoLS1wYWRkaW5nKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcclxuXHJcbiAgICAubm90aWZpY2F0aW9uLWxhYmVsIHtcclxuICAgICAgQGFwcGx5IHRleHQtcHJpbWFyeTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYucmVhZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWljb24ge1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1wYWRkaW5nKTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1sYWJlbCB7XHJcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWNoZXZyb24ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcclxufVxyXG4iLCJAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllczsiXX0= */"] });


/***/ }),

/***/ 89454:
/*!******************************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarNotificationsComponent": () => (/* binding */ ToolbarNotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */ 4440);
/* harmony import */ var _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-notifications-active */ 91990);
/* harmony import */ var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/popover/popover.service */ 90451);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);








const _c0 = ["originRef"];
class ToolbarNotificationsComponent {
    constructor(popover, cd) {
        this.popover = popover;
        this.cd = cd;
        this.icNotificationsActive = _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() { }
    showPopover() {
        this.dropdownOpen = true;
        this.cd.markForCheck();
        const popoverRef = this.popover.open({
            content: _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarNotificationsDropdownComponent,
            origin: this.originRef,
            offsetY: 12,
            position: [
                {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                },
            ]
        });
        popoverRef.afterClosed$.subscribe(() => {
            this.dropdownOpen = false;
            this.cd.markForCheck();
        });
    }
}
ToolbarNotificationsComponent.ɵfac = function ToolbarNotificationsComponent_Factory(t) { return new (t || ToolbarNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_2__.PopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
ToolbarNotificationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ToolbarNotificationsComponent, selectors: [["vex-toolbar-notifications"]], viewQuery: function ToolbarNotificationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.originRef = _t.first);
    } }, decls: 3, vars: 3, consts: [["mat-icon-button", "", "type", "button", 1, "button", 3, "click"], ["originRef", ""], [3, "icIcon"]], template: function ToolbarNotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarNotificationsComponent_Template_button_click_0_listener() { return ctx.showPopover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.dropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx.icNotificationsActive);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconDirective], styles: [".button.active[_ngcontent-%COMP%] {\n  background: var(--background-hover);\n}\n\n.button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--toolbar-icon-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXItbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLG1DQUFBO0FBREo7O0FBSUU7RUFDRSxnQ0FBQTtBQUZKIiwiZmlsZSI6InRvb2xiYXItbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tdG9vbGJhci1pY29uLWNvbG9yKTtcclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 52887:
/*!***************************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarNotificationsModule": () => (/* binding */ ToolbarNotificationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-notifications.component */ 89454);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/popover/popover.module */ 59147);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/relative-date-time/relative-date-time.module */ 51436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */ 4440);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);














class ToolbarNotificationsModule {
}
ToolbarNotificationsModule.ɵfac = function ToolbarNotificationsModule_Factory(t) { return new (t || ToolbarNotificationsModule)(); };
ToolbarNotificationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ToolbarNotificationsModule });
ToolbarNotificationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_1__.PopoverModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__.RelativeDateTimeModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__.IconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ToolbarNotificationsModule, { declarations: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarNotificationsComponent, _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.ToolbarNotificationsDropdownComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_1__.PopoverModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__.RelativeDateTimeModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__.IconModule], exports: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarNotificationsComponent] }); })();


/***/ }),

/***/ 3127:
/*!****************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-search/toolbar-search.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarSearchComponent": () => (/* binding */ ToolbarSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ 82110);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 58359);









const _c0 = ["input"];
class ToolbarSearchComponent {
    constructor(cd) {
        this.cd = cd;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    ngOnInit() {
    }
    open() {
        this.isOpen = true;
        this.cd.markForCheck();
        setTimeout(() => {
            this.input.nativeElement.focus();
        }, 100);
    }
    close() {
        this.isOpen = false;
        this.cd.markForCheck();
    }
}
ToolbarSearchComponent.ɵfac = function ToolbarSearchComponent_Factory(t) { return new (t || ToolbarSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ToolbarSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToolbarSearchComponent, selectors: [["vex-toolbar-search"]], viewQuery: function ToolbarSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 8, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-icon-button", "", 3, "click"], [3, "icIcon"], ["appearance", "outline", "fxFlex", "auto", 1, "search"], ["matInput", "", 3, "blur"], ["input", ""]], template: function ToolbarSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarSearchComponent_Template_button_click_1_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Search\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function ToolbarSearchComponent_Template_input_blur_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("search-open", ctx.isOpen);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput], styles: [".mat-icon[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  opacity: 0;\n  overflow: hidden;\n  transition: var(--trans-ease-in-out);\n  visibility: hidden;\n  width: 0;\n}\n\n.search.search-open[_ngcontent-%COMP%] {\n  margin-left: var(--padding-8);\n  margin-right: var(--padding-8);\n  opacity: 1;\n  visibility: visible;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL2xpYi9saWIvc3Vic3RpdHV0ZUNsYXNzQXBwbHlBdFJ1bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDRUEsZ0NBQW1CO0FEQW5COztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUNFO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJ0b29sYmFyLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbiB7XHJcbiAgQGFwcGx5IHRleHQtcHJpbWFyeTtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgbWFyZ2luLXRvcDogMjJweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1pbi1vdXQpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMDtcclxuXHJcbiAgJi5zZWFyY2gtb3BlbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tcGFkZGluZy04KTtcclxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZy04KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxufVxyXG4iLCJAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllczsiXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 6493:
/*!*************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-search/toolbar-search.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarSearchModule": () => (/* binding */ ToolbarSearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _toolbar_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-search.component */ 3127);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);








class ToolbarSearchModule {
}
ToolbarSearchModule.ɵfac = function ToolbarSearchModule_Factory(t) { return new (t || ToolbarSearchModule)(); };
ToolbarSearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ToolbarSearchModule });
ToolbarSearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToolbarSearchModule, { declarations: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarSearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule], exports: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarSearchComponent] }); })();


/***/ }),

/***/ 51107:
/*!*******************************************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarUserDropdownComponent": () => (/* binding */ ToolbarUserDropdownComponent)
/* harmony export */ });
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/track-by */ 45007);
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person */ 89271);
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ 77499);
/* harmony import */ var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-account-circle */ 72840);
/* harmony import */ var _iconify_icons_ic_twotone_move_to_inbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-move-to-inbox */ 65921);
/* harmony import */ var _iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-list-alt */ 13576);
/* harmony import */ var _iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-table-chart */ 31215);
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-circle */ 27949);
/* harmony import */ var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-access-time */ 77408);
/* harmony import */ var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-do-not-disturb */ 73190);
/* harmony import */ var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-offline-bolt */ 8311);
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-right */ 54175);
/* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-arrow-drop-down */ 19070);
/* harmony import */ var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-business */ 6501);
/* harmony import */ var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-verified-user */ 24084);
/* harmony import */ var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-lock */ 24933);
/* harmony import */ var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-notifications-off */ 87749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _components_popover_popover_ref__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/popover/popover-ref */ 29127);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);



























function ToolbarUserDropdownComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_button_13_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5); const status_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r4.setStatus(status_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ic-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icon", status_r3.icon)("ngClass", status_r3.colorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](status_r3.label);
} }
const _c0 = function () { return ["/login"]; };
class ToolbarUserDropdownComponent {
    constructor(cd, popoverRef) {
        this.cd = cd;
        this.popoverRef = popoverRef;
        this.items = [
            {
                id: '1',
                icon: _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_3__["default"],
                label: 'My Profile',
                description: 'Personal Information',
                colorClass: 'text-teal',
                route: '/apps/social'
            },
            {
                id: '2',
                icon: _iconify_icons_ic_twotone_move_to_inbox__WEBPACK_IMPORTED_MODULE_4__["default"],
                label: 'My Inbox',
                description: 'Messages & Latest News',
                colorClass: 'text-primary',
                route: '/apps/chat'
            },
            {
                id: '3',
                icon: _iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_5__["default"],
                label: 'My Projects',
                description: 'Tasks & Active Projects',
                colorClass: 'text-amber',
                route: '/apps/scrumboard'
            },
            {
                id: '4',
                icon: _iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_6__["default"],
                label: 'Billing Information',
                description: 'Pricing & Current Plan',
                colorClass: 'text-purple',
                route: '/pages/pricing'
            }
        ];
        this.statuses = [
            {
                id: 'online',
                label: 'Online',
                icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_7__["default"],
                colorClass: 'text-green'
            },
            {
                id: 'away',
                label: 'Away',
                icon: _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_8__["default"],
                colorClass: 'text-orange'
            },
            {
                id: 'dnd',
                label: 'Do not disturb',
                icon: _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_9__["default"],
                colorClass: 'text-red'
            },
            {
                id: 'offline',
                label: 'Offline',
                icon: _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_10__["default"],
                colorClass: 'text-gray'
            }
        ];
        this.activeStatus = this.statuses[0];
        this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackById;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_11__["default"];
        this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_12__["default"];
        this.icBusiness = _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_13__["default"];
        this.icVerifiedUser = _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14__["default"];
        this.icLock = _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_15__["default"];
        this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_16__["default"];
    }
    ngOnInit() {
        this.name = JSON.parse(sessionStorage.getItem('Name'));
    }
    setStatus(status) {
        this.activeStatus = status;
        this.cd.markForCheck();
    }
    close() {
        this.popoverRef.close();
    }
}
ToolbarUserDropdownComponent.ɵfac = function ToolbarUserDropdownComponent_Factory(t) { return new (t || ToolbarUserDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_components_popover_popover_ref__WEBPACK_IMPORTED_MODULE_17__.PopoverRef)); };
ToolbarUserDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: ToolbarUserDropdownComponent, selectors: [["vex-toolbar-user-dropdown"]], decls: 32, vars: 10, consts: [[1, "dropdown"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dropdown-header"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "dropdown-heading-icon"], [3, "icIcon"], [1, "dropdown-heading"], [1, "dropdown-content"], ["fxLayout", "row", "fxLayoutAlign", "end start", 1, "dropdown-footer"], ["color", "primary", "mat-button", "", 3, "routerLink", "click"], ["xPosition", "before", "yPosition", "below"], ["statusMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["inline", "true", "size", "24px", 3, "icon", "ngClass"]], template: function ToolbarUserDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_Template_a_click_9_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "\u00C7IKI\u015E");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "mat-menu", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, ToolbarUserDropdownComponent_button_13_Template, 4, 3, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "mat-menu", 9, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19, "Change Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23, "Change Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](25, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](31, "Disable Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icIcon", ctx.icPerson);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.statuses)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icIcon", ctx.icBusiness);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icIcon", ctx.icVerifiedUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icIcon", ctx.icLock);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("icIcon", ctx.icNotificationsOff);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_21__.IconDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLinkWithHref, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__.DefaultClassDirective], styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-primary));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n  padding-left: 0.75rem;\n  color: rgb(var(--color-primary-contrast));\n  --tw-shadow: var(--elevation-z6);\n  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.dropdown-heading-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 999999px;\n  margin-right: var(--padding-12);\n  padding: var(--padding-8);\n}\n\n.dropdown-heading-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font: var(--font-title);\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding-12);\n}\n\n.dropdown-footer-select[_ngcontent-%COMP%] {\n  padding-left: var(--padding-12);\n}\n\n.dropdown-footer-select[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:not(.dropdown-footer-select-caret) {\n  margin-right: var(--padding-8);\n  vertical-align: -7px !important;\n}\n\n.dropdown-footer-select-caret[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  vertical-align: -4px !important;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  background: var(--background-hover);\n}\n\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  margin-right: var(--padding);\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXItdXNlci1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsK0NBQUE7RUFDQSxnREFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUNMRixzQkFBbUI7QURPbkI7O0FBRUE7RUNUQSwyQ0FBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIscUJBQW1CO0VBQW5CLHlDQUFtQjtFQUFuQixnQ0FBbUI7RUFBbkIsa0RBQW1CO0VBQW5CLHVHQUFtQjtBRFduQjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQTtFQUNFLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQ0FBQTtBQUFGOztBQUdBO0VBQ0UsK0JBQUE7QUFBRjs7QUFFRTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFBSjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFERjs7QUFHRTtFQUNFLG1DQUFBO0FBREo7O0FBR0k7RUN0RUosZ0NBQW1CO0FEc0VuQjs7QUFLRTtFQUNFLFlBQUE7QUFISjs7QUFPQTtFQUNFLDRCQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsNEJBQUE7RUFDQSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLCtDQUFBO0FBSkYiLCJmaWxlIjoidG9vbGJhci11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgQGFwcGx5IHJvdW5kZWQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1oZWFkZXIge1xyXG4gIEBhcHBseSBiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1jb250cmFzdCBweS00IHByLTQgcGwtMyBzaGFkb3c7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1oZWFkaW5nLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA5OTk5OTlweDtcclxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctMTIpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCk7XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wZG93bi1oZWFkaW5nIHtcclxuICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZHJvcGRvd24tZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZy0xMik7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctMTIpO1xyXG5cclxuICAubWF0LWljb246bm90KC5kcm9wZG93bi1mb290ZXItc2VsZWN0LWNhcmV0KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctOCk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLTdweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QtY2FyZXQge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IC00cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMThweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xyXG5cclxuICAgIC5ub3RpZmljYXRpb24tbGFiZWwge1xyXG4gICAgICBAYXBwbHkgdGV4dC1wcmltYXJ5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5yZWFkIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1sYWJlbCB7XHJcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWNoZXZyb24ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcclxufVxyXG4iLCJAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllczsiXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 37552:
/*!************************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarUserComponent": () => (/* binding */ ToolbarUserComponent)
/* harmony export */ });
/* harmony import */ var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */ 51107);
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person */ 89271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/popover/popover.service */ 90451);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);








class ToolbarUserComponent {
    constructor(popover, cd) {
        this.popover = popover;
        this.cd = cd;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
        this.name = JSON.parse(sessionStorage.getItem('Name'));
    }
    showPopover(originRef) {
        this.dropdownOpen = true;
        this.cd.markForCheck();
        const popoverRef = this.popover.open({
            content: _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarUserDropdownComponent,
            origin: originRef,
            offsetY: 12,
            position: [
                {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                },
            ]
        });
        popoverRef.afterClosed$.subscribe(() => {
            this.dropdownOpen = false;
            this.cd.markForCheck();
        });
    }
}
ToolbarUserComponent.ɵfac = function ToolbarUserComponent_Factory(t) { return new (t || ToolbarUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_2__.PopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
ToolbarUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ToolbarUserComponent, selectors: [["vex-toolbar-user"]], decls: 6, vars: 4, consts: [["matRipple", "", 1, "flex", "items-center", "rounded", "cursor-pointer", "relative", "trans-ease-out", "select-none", "py-1", "pr-1", "pl-3", "hover:bg-hover", 3, "click"], ["originRef", ""], ["fxHide.xs", "", 1, "body-1", "font-medium", "leading-snug", "ltr:mr-3", "rtl:ml-3"], [1, "rounded-full", "h-9", "w-9", "flex", "items-center", "justify-center", "text-primary", "bg-primary-light"], [3, "icIcon"]], template: function ToolbarUserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarUserComponent_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return ctx.showPopover(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-hover", ctx.dropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx.icPerson);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultShowHideDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconDirective], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 13242:
/*!*********************************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar-user/toolbar-user.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarUserModule": () => (/* binding */ ToolbarUserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _toolbar_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-user.component */ 37552);
/* harmony import */ var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */ 51107);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/relative-date-time/relative-date-time.module */ 51436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);













class ToolbarUserModule {
}
ToolbarUserModule.ɵfac = function ToolbarUserModule_Factory(t) { return new (t || ToolbarUserModule)(); };
ToolbarUserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ToolbarUserModule });
ToolbarUserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__.RelativeDateTimeModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__.IconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ToolbarUserModule, { declarations: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarUserComponent, _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarUserDropdownComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_2__.RelativeDateTimeModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__.IconModule], exports: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarUserComponent] }); })();


/***/ }),

/***/ 98072:
/*!******************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent),
/* harmony export */   "DemoDialogComponent": () => (/* binding */ DemoDialogComponent)
/* harmony export */ });
/* harmony import */ var _app_pages_interfaces_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app/pages/interfaces/util */ 10071);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-bookmarks */ 53466);
/* harmony import */ var _iconify_icons_emojione_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-emojione/factory */ 60435);
/* harmony import */ var _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-emojione/flag-for-flag-united-states */ 11415);
/* harmony import */ var _iconify_icons_emojione_flag_for_flag_turkey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-emojione/flag-for-flag-turkey */ 71659);
/* harmony import */ var _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-emojione/flag-for-flag-germany */ 97334);
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-menu */ 14126);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 28554);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-add */ 42792);
/* harmony import */ var _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-assignment-turned-in */ 13549);
/* harmony import */ var _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-ballot */ 23585);
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ 42461);
/* harmony import */ var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-assignment */ 93358);
/* harmony import */ var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-receipt */ 58881);
/* harmony import */ var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done-all */ 98145);
/* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-arrow-drop-down */ 19070);
/* harmony import */ var _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/mega-menu/mega-menu.component */ 53775);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ 82110);
/* harmony import */ var _iconify_icons_ic_favorite__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/favorite */ 63858);
/* harmony import */ var _iconify_icons_ic_favorite_border__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/favorite-border */ 13761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/layout.service */ 39011);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/config.service */ 63531);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/navigation.service */ 73166);
/* harmony import */ var _src_app_pages_services_authorization_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../../../../src/app/pages/services/authorization.service */ 9695);
/* harmony import */ var _src_app_pages_services_login_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./../../../../src/app/pages/services/login.service */ 12256);
/* harmony import */ var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/popover/popover.service */ 90451);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../directives/container/container.directive */ 18259);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./toolbar-user/toolbar-user.component */ 37552);
/* harmony import */ var _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.component */ 64077);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../navigation/navigation.component */ 73145);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/core */ 34357);













































function ToolbarComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function ToolbarComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵreference"](18); return ctx_r7.openMegaMenu(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](2, "ic-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtextInterpolate1"]("", ctx_r2.languageMap["Favoriler"].labelName.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icon", ctx_r2.icArrowDropDown);
} }
function ToolbarComponent_div_23_vex_navigation_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](0, "vex-navigation-item", 21);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("item", item_r10);
} }
function ToolbarComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtemplate"](1, ToolbarComponent_div_23_vex_navigation_item_1_Template, 1, 1, "vex-navigation-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("fxHide", ctx_r3.mobileQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("ngForOf", ctx_r3.navigationItems);
} }
function ToolbarComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icIcon", ctx_r4.emojioneTR);
} }
function ToolbarComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icIcon", ctx_r5.emojioneUS);
} }
function ToolbarComponent_vex_navigation_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](0, "vex-navigation", 23);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("fxHide", ctx_r6.mobileQuery);
} }
function DemoDialogComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
} if (rf & 2) {
    const services_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("value", services_r1.kodu);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtextInterpolate1"](" ", services_r1.adi, " ");
} }
class ToolbarComponent {
    constructor(layoutService, configService, navigationService, authorizationService, dialog, loginService, popoverService) {
        this.layoutService = layoutService;
        this.configService = configService;
        this.navigationService = navigationService;
        this.authorizationService = authorizationService;
        this.dialog = dialog;
        this.loginService = loginService;
        this.popoverService = popoverService;
        this.language = [];
        this.languageMap = {};
        this.navigationItems = this.navigationService.items;
        this.isHorizontalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(config => config.layout === 'horizontal'));
        this.isVerticalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(config => config.layout === 'vertical'));
        this.isNavbarInToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(config => config.navbar.position === 'in-toolbar'));
        this.isNavbarBelowToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(config => config.navbar.position === 'below-toolbar'));
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__["default"];
        this.fabric = _iconify_icons_emojione_factory__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icBookmarks = _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.emojioneUS = _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.icFavorite = _iconify_icons_ic_favorite__WEBPACK_IMPORTED_MODULE_18__["default"];
        this.icFavoriteBorder = _iconify_icons_ic_favorite_border__WEBPACK_IMPORTED_MODULE_19__["default"];
        this.emojioneTR = _iconify_icons_emojione_flag_for_flag_turkey__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.emojioneDE = _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.icAssignmentTurnedIn = _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_9__["default"];
        this.icBallot = _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_10__["default"];
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_11__["default"];
        this.icAssignment = _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_12__["default"];
        this.icReceipt = _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_13__["default"];
        this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_14__["default"];
        this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_15__["default"];
        this.companies = [];
    }
    ngOnInit() {
        this.language = sessionStorage.getItem('Lng');
        this.getCompanies();
        this.languageMap = _app_pages_interfaces_util__WEBPACK_IMPORTED_MODULE_0__["default"].getLabels();
    }
    getCompanies() {
        let data;
        this.authorizationService.GetCompanies()
            .subscribe((res) => {
            Object.keys(res).forEach((key) => {
                let data = { kodu: res[key].ID, adi: res[key].Name };
                this.companies.push(data);
            });
        }, err => {
            console.log(err);
        });
    }
    openDialog() {
        console.log(this.companies);
        this.dialog.open(DemoDialogComponent, {
            data: {
                temp1: this.companies, temp2: JSON.parse(sessionStorage.getItem('CompanyId')), temp3: this.languageMap['Şirket Seçimi Yapınız'].labelName, temp4: this.languageMap['Şirket'].labelName,
                Evet: this.languageMap['Evet'].labelName,
                Hayir: this.languageMap['Hayır'].labelName
            },
            disableClose: false,
            width: '400px'
        }).afterClosed().subscribe(result => {
            this.result = result;
            if (this.result.answer === "Yes") {
                let firmName = '';
                Object.keys(this.companies).forEach((key) => {
                    if (this.companies[key].kodu == result.value)
                        firmName = this.companies[key].adi;
                });
                console.log(firmName);
                sessionStorage.setItem('CompanyId', JSON.stringify(result.value));
                sessionStorage.setItem('Firmname', JSON.stringify(firmName));
                if (localStorage.getItem('Remember')) {
                    localStorage.setItem('CompanyId', JSON.stringify(result.value));
                    localStorage.setItem('Firmname', JSON.stringify(firmName));
                }
                this.loginGetMenu();
                // window.location.reload();   
            }
        });
    }
    loginGetMenu() {
        this.loginService.LoginGetMenu(localStorage.getItem('Lng')).subscribe(menuItems => {
            this.navigationService.items = (menuItems);
            sessionStorage.setItem('Menus', JSON.stringify(this.navigationService.items));
            // this.router.navigate(['/dashboards/analytics']);  
            // this.router.navigate(['/apps/personnel/table']);  
            // this.router.navigate(['/apps/personnel/table']);  
            window.location.reload();
        });
    }
    openQuickpanel() {
        this.layoutService.openQuickpanel();
    }
    openSidenav() {
        this.layoutService.openSidenav();
    }
    openMegaMenu(origin) {
        this.popoverService.open({
            content: _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_16__.MegaMenuComponent,
            origin,
            width: '800px',
            position: [
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                },
            ]
        });
    }
    openSearch() {
        this.layoutService.openSearch();
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_20__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_21__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_22__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_src_app_pages_services_authorization_service__WEBPACK_IMPORTED_MODULE_23__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_src_app_pages_services_login_service__WEBPACK_IMPORTED_MODULE_24__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_25__.PopoverService)); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["vex-toolbar"]], hostVars: 2, hostBindings: function ToolbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵclassProp"]("shadow-b", ctx.hasShadow);
    } }, inputs: { mobileQuery: "mobileQuery", hasShadow: "hasShadow" }, decls: 41, vars: 23, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", "", 1, "toolbar", "w-full", "px-gutter"], ["mat-icon-button", "", "type", "button", 3, "fxHide", "click"], [3, "icIcon"], ["documentMenu", "matMenu"], ["mat-menu-item", ""], [1, "ltr:ml-2", "rtl:mr-2"], ["megaMenuOriginRef", ""], ["color", "primary", "mat-button", ""], ["inline", "true", 1, "ltr:-mr-1", "rtl:-ml-1", 3, "icon"], ["color", "primary", "mat-button", "", "type", "button", 3, "click", 4, "ngIf"], ["class", "px-gutter", "fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "fxHide", 4, "ngIf"], ["fxFlex", ""], [1, "-mx-1", "flex", "items-center"], [1, "px-1"], ["mat-icon-button", "", "type", "button", 3, "click"], ["mat-icon-button", "", "type", "button", 2, "margin-top", "-5px", 3, "click"], ["class", "px-1", 4, "ngIf"], [3, "fxHide", 4, "ngIf"], ["color", "primary", "mat-button", "", "type", "button", 3, "click"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "px-gutter", 3, "fxHide"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], ["mat-icon-button", "", "type", "button"], [3, "fxHide"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_1_listener() { return ctx.openSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](3, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](6, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](8, "Add Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](10, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](12, "Add Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](14, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](16, "Add Receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](17, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](20, "ic-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtemplate"](21, ToolbarComponent_button_21_Template, 3, 2, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtemplate"](23, ToolbarComponent_div_23_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_29_listener() { return ctx.openSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](30, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_32_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](33, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](35, "vex-toolbar-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtemplate"](36, ToolbarComponent_div_36_Template, 3, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtemplate"](37, ToolbarComponent_div_37_Template, 3, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtemplate"](38, ToolbarComponent_vex_navigation_38_Template, 1, 1, "vex-navigation", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipe"](40, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("fxHide", !ctx.mobileQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icIcon", ctx.icMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icIcon", ctx.icDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icIcon", ctx.icAssignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icIcon", ctx.icReceipt);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipeBind1"](22, 13, ctx.isHorizontalLayout$));
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipeBind1"](24, 15, _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipeBind1"](25, 17, ctx.isVerticalLayout$) && ctx.isNavbarInToolbar$));
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icIcon", ctx.icSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icIcon", ctx.fabric);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("ngIf", ctx.language === "tr-TR");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("ngIf", ctx.language === "en-US");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipeBind1"](39, 19, _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵpipeBind1"](40, 21, ctx.isVerticalLayout$) && ctx.isNavbarBelowToolbar$));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_33__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_33__.DefaultLayoutAlignDirective, _directives_container_container_directive__WEBPACK_IMPORTED_MODULE_26__.ContainerDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButton, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_35__.DefaultShowHideDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_37__.IconDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_33__.DefaultFlexDirective, _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_27__.ToolbarUserComponent, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgForOf, _components_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_28__.NavigationItemComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_29__.NavigationComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_39__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  background: var(--toolbar-background);\n  box-sizing: border-box;\n  color: var(--toolbar-color);\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  z-index: var(--toolbar-z-index);\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: var(--toolbar-height);\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: var(--toolbar-icon-color);\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--toolbar-color);\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdG9vbGJhci1iYWNrZ3JvdW5kKTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiB2YXIoLS10b29sYmFyLWNvbG9yKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IHZhcigtLXRvb2xiYXItei1pbmRleCk7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBoZWlnaHQ6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICBjb2xvcjogdmFyKC0tdG9vbGJhci1pY29uLWNvbG9yKTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"] });
class DemoDialogComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.form = this.fb.group({
            CompanyID: this.data.temp2
        });
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
}
DemoDialogComponent.ɵfac = function DemoDialogComponent_Factory(t) { return new (t || DemoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormBuilder)); };
DemoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineComponent"]({ type: DemoDialogComponent, selectors: [["definitions"]], decls: 18, vars: 8, consts: [[3, "formGroup"], ["mat-dialog", "", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["type", "button", "mat-icon-button", "", "tabindex", "-1", 3, "click"], [3, "icIcon"], ["appearance", "outline", 2, "width", "100%"], ["formControlName", "CompanyID", 2, "width", "100%", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], [3, "value"]], template: function DemoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_5_listener() { return ctx.close("No answer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelement"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](7, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](11, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtemplate"](12, DemoDialogComponent_mat_option_12_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](13, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_14_listener() { return ctx.close({ answer: "Yes", value: ctx.form.value.CompanyID }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_16_listener() { return ctx.close({ answer: "No", value: null }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtextInterpolate"](ctx.data.temp3);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtextInterpolate"](ctx.data.temp4);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("value", ctx.data.temp2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵproperty"]("ngForOf", ctx.data.temp1);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtextInterpolate"](ctx.data.Evet);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵtextInterpolate"](ctx.data.Hayir);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_40__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_40__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_33__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_33__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_37__.IconDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_42__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_43__.MatOption], encapsulation: 2 });


/***/ }),

/***/ 84557:
/*!***************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarModule": () => (/* binding */ ToolbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar.component */ 98072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar-notifications/toolbar-notifications.module */ 52887);
/* harmony import */ var _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar-user/toolbar-user.module */ 13242);
/* harmony import */ var _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-search/toolbar-search.module */ 6493);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/navigation.module */ 90209);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.module */ 98240);
/* harmony import */ var _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/mega-menu/mega-menu.module */ 2424);
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/container/container.module */ 90743);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);





















class ToolbarModule {
}
ToolbarModule.ɵfac = function ToolbarModule_Factory(t) { return new (t || ToolbarModule)(); };
ToolbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ToolbarModule });
ToolbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule,
            _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_1__.ToolbarNotificationsModule,
            _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_2__.ToolbarUserModule,
            _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_3__.ToolbarSearchModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__.IconModule,
            _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__.NavigationModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
            _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_5__.NavigationItemModule,
            _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_6__.MegaMenuModule,
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ToolbarModule, { declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, _toolbar_component__WEBPACK_IMPORTED_MODULE_0__.DemoDialogComponent], imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule,
        _toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_1__.ToolbarNotificationsModule,
        _toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_2__.ToolbarUserModule,
        _toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_3__.ToolbarSearchModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__.IconModule,
        _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__.NavigationModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
        _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_5__.NavigationItemModule,
        _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_6__.MegaMenuModule,
        _directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__.ContainerModule], exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, _toolbar_component__WEBPACK_IMPORTED_MODULE_0__.DemoDialogComponent] }); })();


/***/ }),

/***/ 51436:
/*!************************************************************************!*\
  !*** ./src/@vex/pipes/relative-date-time/relative-date-time.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeDateTimeModule": () => (/* binding */ RelativeDateTimeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relative-date-time.pipe */ 60396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



class RelativeDateTimeModule {
}
RelativeDateTimeModule.ɵfac = function RelativeDateTimeModule_Factory(t) { return new (t || RelativeDateTimeModule)(); };
RelativeDateTimeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RelativeDateTimeModule });
RelativeDateTimeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RelativeDateTimeModule, { declarations: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeDateTimePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_0__.RelativeDateTimePipe] }); })();


/***/ }),

/***/ 60396:
/*!**********************************************************************!*\
  !*** ./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeDateTimePipe": () => (/* binding */ RelativeDateTimePipe)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 71601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


class RelativeDateTimePipe {
    transform(value, ...args) {
        if (!value) {
            return;
        }
        if (!(value instanceof luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime)) {
            value = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(value);
        }
        return value.toRelative();
    }
}
RelativeDateTimePipe.ɵfac = function RelativeDateTimePipe_Factory(t) { return new (t || RelativeDateTimePipe)(); };
RelativeDateTimePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "relativeDateTime", type: RelativeDateTimePipe, pure: true });


/***/ }),

/***/ 63531:
/*!*********************************************!*\
  !*** ./src/@vex/services/config.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 91600);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ 21403);
/* harmony import */ var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/config-name.model */ 14074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.service */ 39011);







class ConfigService {
    constructor(document, layoutService) {
        this.document = document;
        this.layoutService = layoutService;
        this.defaultConfig = _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__.ConfigName.apollo;
        this.configs = _configs__WEBPACK_IMPORTED_MODULE_1__.configs;
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(this.configs.find(c => c.id === this.defaultConfig));
        this.config$ = this._configSubject.asObservable();
        this.config$.subscribe(config => this._updateConfig(config));
    }
    setConfig(config) {
        const settings = this.configs.find(c => c.id === config);
        if (settings) {
            this._configSubject.next(settings);
        }
    }
    updateConfig(config) {
        this._configSubject.next((0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, this._configSubject.getValue()), config));
    }
    _updateConfig(config) {
        const body = this.document.body;
        this.configs.forEach(c => {
            if (body.classList.contains(c.id)) {
                body.classList.remove(c.id);
            }
        });
        body.classList.add(config.id);
        config.sidenav.state === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
        this.document.body.dir = config.rtl ? 'rtl' : 'ltr';
        // Workaround so charts and other externals know they have to resize on Layout switch
        if (window) {
            window.dispatchEvent(new Event('resize'));
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 200);
        }
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService)); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21403:
/*!**************************************!*\
  !*** ./src/@vex/services/configs.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configs": () => (/* binding */ configs)
/* harmony export */ });
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 91600);
/* harmony import */ var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/config-name.model */ 14074);


const defaultConfig = {
    id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.apollo,
    name: 'Apollo',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
    layout: 'horizontal',
    boxed: false,
    sidenav: {
        title: JSON.parse(sessionStorage.getItem('Firmname')),
        imageUrl: '',
        showCollapsePin: true,
        state: 'expanded'
    },
    toolbar: {
        fixed: true
    },
    navbar: {
        position: 'below-toolbar'
    },
    footer: {
        visible: true,
        fixed: true
    }
};
const configs = [
    defaultConfig,
    (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.hermes,
        name: 'Hermes',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
        layout: 'vertical',
        boxed: true,
        toolbar: {
            fixed: false
        },
        footer: {
            fixed: false
        }
    }),
    (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.ares,
        name: 'Ares',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
        toolbar: {
            fixed: false
        },
        navbar: {
            position: 'in-toolbar'
        },
        footer: {
            fixed: false
        }
    }),
    (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.zeus,
        name: 'Zeus',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
        sidenav: {
            state: 'collapsed'
        },
    }),
    (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(Object.assign({}, defaultConfig), {
        id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_1__.ConfigName.ikaros,
        name: 'Ikaros',
        imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
        layout: 'vertical',
        boxed: true,
        toolbar: {
            fixed: false
        },
        navbar: {
            position: 'in-toolbar'
        },
        footer: {
            fixed: false
        }
    })
];


/***/ }),

/***/ 39011:
/*!*********************************************!*\
  !*** ./src/@vex/services/layout.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 59339);





class LayoutService {
    constructor(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
        this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
        this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
        this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
        this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
        this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.searchOpen$ = this._searchOpen.asObservable();
        this.isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(state => state.matches));
        this.isLtLg = () => this.breakpointObserver.isMatched(`(max-width: 1279px)`);
        this.isMobile = () => this.breakpointObserver.isMatched(`(max-width: 599px)`);
    }
    openQuickpanel() {
        this._quickpanelOpenSubject.next(true);
    }
    closeQuickpanel() {
        this._quickpanelOpenSubject.next(false);
    }
    openSidenav() {
        this._sidenavOpenSubject.next(true);
    }
    closeSidenav() {
        this._sidenavOpenSubject.next(false);
    }
    collapseSidenav() {
        this._sidenavCollapsedSubject.next(true);
    }
    expandSidenav() {
        this._sidenavCollapsedSubject.next(false);
    }
    collapseOpenSidenav() {
        this._sidenavCollapsedOpenSubject.next(true);
    }
    collapseCloseSidenav() {
        this._sidenavCollapsedOpenSubject.next(false);
    }
    openConfigpanel() {
        this._configpanelOpenSubject.next(true);
    }
    closeConfigpanel() {
        this._configpanelOpenSubject.next(false);
    }
    openSearch() {
        this._searchOpen.next(true);
    }
    closeSearch() {
        this._searchOpen.next(false);
    }
    enableRTL() {
        this.router.navigate([], {
            queryParams: {
                rtl: 'true'
            }
        });
    }
    disableRTL() {
        this.router.navigate([], {
            queryParams: {
                rtl: 'false'
            }
        });
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver)); };
LayoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73166:
/*!*************************************************!*\
  !*** ./src/@vex/services/navigation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


class NavigationService {
    constructor() {
        this.items = [];
        this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.openChange$ = this._openChangeSubject.asObservable();
    }
    triggerOpenChange(item) {
        this._openChangeSubject.next(item);
    }
    isLink(item) {
        return item.type === 'link';
    }
    isDropdown(item) {
        return item.type === 'dropdown';
    }
    isSubheading(item) {
        return item.type === 'subheading';
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53815:
/*!*********************************************!*\
  !*** ./src/@vex/services/search.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);


class SearchService {
    constructor() {
        this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
        this.valueChanges$ = this.valueChangesSubject.asObservable();
        this.submitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.submit$ = this.submitSubject.asObservable();
        this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.isOpen$ = this.isOpenSubject.asObservable();
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 75850:
/*!****************************************************!*\
  !*** ./src/@vex/services/splash-screen.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenService": () => (/* binding */ SplashScreenService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 26928);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 46755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);







class SplashScreenService {
    constructor(router, document, animationBuilder) {
        this.router = router;
        this.document = document;
        this.animationBuilder = animationBuilder;
        this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen');
        if (this.splashScreenElem) {
            this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => this.hide());
        }
    }
    hide() {
        const player = this.animationBuilder.build([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                opacity: 1
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                opacity: 0
            }))
        ]).create(this.splashScreenElem);
        player.onDone(() => this.splashScreenElem.remove());
        player.play();
    }
}
SplashScreenService.ɵfac = function SplashScreenService_Factory(t) { return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder)); };
SplashScreenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SplashScreenService, factory: SplashScreenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 26872:
/*!********************************************!*\
  !*** ./src/@vex/services/style.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Style": () => (/* binding */ Style),
/* harmony export */   "StyleService": () => (/* binding */ StyleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ 28094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);





var Style;
(function (Style) {
    Style["light"] = "vex-style-light";
    Style["default"] = "vex-style-default";
    Style["dark"] = "vex-style-dark";
})(Style || (Style = {}));
let StyleService = class StyleService {
    constructor(document) {
        this.document = document;
        this.defaultStyle = Style.default;
        this._styleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.defaultStyle);
        this.style$ = this._styleSubject.asObservable();
        this.style$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe(style => this._updateStyle(style));
    }
    setStyle(style) {
        this._styleSubject.next(style);
    }
    _updateStyle(style) {
        const body = this.document.body;
        Object.values(Style).filter(s => s !== style).forEach(value => {
            if (body.classList.contains(value)) {
                body.classList.remove(value);
            }
        });
        body.classList.add(style);
    }
};
StyleService.ɵfac = function StyleService_Factory(t) { return new (t || StyleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
StyleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StyleService, factory: StyleService.ɵfac, providedIn: 'root' });
StyleService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()
], StyleService);



/***/ }),

/***/ 69361:
/*!****************************************************!*\
  !*** ./src/@vex/utils/check-router-childs-data.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkRouterChildsData": () => (/* binding */ checkRouterChildsData),
/* harmony export */   "getAllParams": () => (/* binding */ getAllParams)
/* harmony export */ });
function checkRouterChildsData(route, compareWith) {
    if (compareWith(route.data)) {
        return true;
    }
    if (!route.firstChild) {
        return false;
    }
    return checkRouterChildsData(route.firstChild, compareWith);
}
/**
 * Used to get params from children in their parent
 */
function getAllParams(route, result = new Map()) {
    if (route.params) {
        for (const key of Object.keys(route.params)) {
            result.set(key, route.params[key]);
        }
    }
    if (!route.firstChild) {
        return result;
    }
    return getAllParams(route.firstChild, result);
}


/***/ }),

/***/ 91600:
/*!**************************************!*\
  !*** ./src/@vex/utils/merge-deep.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeDeep": () => (/* binding */ mergeDeep)
/* harmony export */ });
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep(target, source) {
    const isObject = (obj) => obj && typeof obj === 'object';
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    return target;
}


/***/ }),

/***/ 45007:
/*!************************************!*\
  !*** ./src/@vex/utils/track-by.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trackByRoute": () => (/* binding */ trackByRoute),
/* harmony export */   "trackById": () => (/* binding */ trackById),
/* harmony export */   "trackByKey": () => (/* binding */ trackByKey),
/* harmony export */   "trackByValue": () => (/* binding */ trackByValue),
/* harmony export */   "trackByLabel": () => (/* binding */ trackByLabel)
/* harmony export */ });
function trackByRoute(index, item) {
    return item.route;
}
function trackById(index, item) {
    return item.id;
}
function trackByKey(index, item) {
    return item.key;
}
function trackByValue(index, value) {
    return value;
}
function trackByLabel(index, value) {
    return value.label;
}


/***/ }),

/***/ 76154:
/*!********************************!*\
  !*** ./src/@vex/vex.module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VexModule": () => (/* binding */ VexModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.module */ 98812);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




class VexModule {
}
VexModule.ɵfac = function VexModule_Factory(t) { return new (t || VexModule)(); };
VexModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VexModule });
VexModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule
        ], _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VexModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule], exports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule] }); })();


/***/ }),

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-layout/custom-layout.component */ 24961);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const childrenRoutes = [
    {
        path: '',
        redirectTo: 'personnel',
        pathMatch: 'full',
    },
    {
        path: 'dashboards/analytics',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboards_dashboard-analytics_dashboard-analytics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboards/dashboard-analytics/dashboard-analytics.module */ 67399)).then(m => m.DashboardAnalyticsModule),
    },
    {
        path: 'apps',
        children: [
            {
                path: 'chat',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_apps_chat_chat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/chat/chat.module */ 80941)).then(m => m.ChatModule),
                data: {
                    toolbarShadowEnabled: true
                }
            },
            {
                path: 'contacts',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_apps_contacts_contacts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/contacts/contacts.module */ 54230)).then(m => m.ContactsModule)
            },
            {
                path: 'personnel',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_personnel_personnels_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/personnel/personnels.module */ 84222)).then(m => m.PersonnelsModule),
            },
            {
                path: 'authorization',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_authorization_authorization_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/authorization/authorization.module */ 92714)).then(m => m.AuthorizationModule),
            },
            {
                path: 'parameters',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_params_params_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/params/params.module */ 22865)).then(m => m.ParamsModule),
            },
            {
                path: 'reporting',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_columns_js-node_modules_iconify_icons-fa-solid_fi-80ad6f"), __webpack_require__.e("default-src_app_pages_attendance_attendance_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_reporting_reporting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reporting/reporting.module */ 51075)).then(m => m.ReportingModule),
            },
            {
                path: 'system',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_system_system_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/system/system.module */ 44941)).then(m => m.SystemModule),
            },
            {
                path: 'user',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("src_app_pages_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/user/user.module */ 96495)).then(m => m.UserModule),
            },
            {
                path: 'definitions/:type',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-src_app_pages_definitions_definitions_component_ts"), __webpack_require__.e("node_modules_iconify_icons-ic_cancel_js-node_modules_iconify_icons-ic_close_js-node_modules_i-2b27b2")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/definitions/definitions.module */ 64519)).then(m => m.DefinitionsModule),
            },
            {
                path: 'flexgroup',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_app_pages_shiftgroup_shiftgroup_component_ts"), __webpack_require__.e("default-src_app_pages_definitions_definitions_component_ts"), __webpack_require__.e("node_modules_iconify_icons-ic_twotone-edit_js-src_vex_animations_scale-fade-in_animation_ts-s-183872")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/flexgroup/flexgroup.module */ 87738)).then(m => m.FlexGroupModule),
            },
            {
                path: 'constants/:type',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_constants_constants_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/constants/constants.module */ 94047)).then(m => m.ConstantsModule),
            },
            {
                path: 'roundings',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_roundings_roundings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/roundings/roundings.module */ 56290)).then(m => m.RoundingsModule),
            },
            {
                path: 'syndicate',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("src_app_pages_syndicate_syndicate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/syndicate/syndicate.module */ 68724)).then(m => m.SyndicateModule),
            },
            {
                path: 'workingtypes',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_workingtypes_workingtypes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/workingtypes/workingtypes.module */ 49244)).then(m => m.WorkingtypesModule),
            },
            {
                path: 'company',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("src_app_pages_company_company_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/company/company.module */ 54024)).then(m => m.CompanyModule),
            },
            {
                path: 'shift',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_shift_shift_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shift/shift.module */ 11439)).then(m => m.ShiftModule),
            },
            {
                path: 'shiftgroup',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_app_pages_shiftgroup_shiftgroup_component_ts"), __webpack_require__.e("node_modules_iconify_icons-ic_close_js-node_modules_iconify_icons-ic_save_js-node_modules_ico-11ac1a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shiftgroup/shiftgroup.module */ 75821)).then(m => m.ShiftGroupModule),
            },
            {
                path: 'transactions/:type',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_columns_js-node_modules_iconify_icons-fa-solid_fi-80ad6f"), __webpack_require__.e("default-src_app_pages_attendance_attendance_module_ts"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_calculator_js-node_modules_iconify_icons-fa-solid-14cd3a"), __webpack_require__.e("default-src_app_pages_leaves_leave_module_ts"), __webpack_require__.e("default-node_modules_mat-table-filter___ivy_ngcc___fesm2015_mat-table-filter_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_transfer_transfer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transfer/transfer.module */ 3024)).then(m => m.TransferModule),
            },
            {
                path: 'attendance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_columns_js-node_modules_iconify_icons-fa-solid_fi-80ad6f"), __webpack_require__.e("default-src_app_pages_attendance_attendance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/attendance/attendance.module */ 20830)).then(m => m.AttendanceModule),
            },
            {
                path: 'leaves',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_columns_js-node_modules_iconify_icons-fa-solid_fi-80ad6f"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_calculator_js-node_modules_iconify_icons-fa-solid-14cd3a"), __webpack_require__.e("default-src_app_pages_leaves_leave_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/leaves/leave.module */ 3554)).then(m => m.LeaveModule),
            },
            {
                path: 'yearlyleave',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_columns_js-node_modules_iconify_icons-fa-solid_fi-80ad6f"), __webpack_require__.e("default-src_app_pages_attendance_attendance_module_ts"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_calculator_js-node_modules_iconify_icons-fa-solid-14cd3a"), __webpack_require__.e("default-src_app_pages_leaves_leave_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_yearlyleave_yearlyleave_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/yearlyleave/yearlyleave.module */ 65578)).then(m => m.YearlyLeaveModule),
            },
            {
                path: 'leaveparams',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_columns_js-node_modules_iconify_icons-fa-solid_fi-80ad6f"), __webpack_require__.e("default-src_app_pages_attendance_attendance_module_ts"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_calculator_js-node_modules_iconify_icons-fa-solid-14cd3a"), __webpack_require__.e("default-src_app_pages_leaves_leave_module_ts"), __webpack_require__.e("default-node_modules_mat-table-filter___ivy_ngcc___fesm2015_mat-table-filter_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_leaveparams_leaveparams_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/leaveparams/leaveparams.module */ 7103)).then(m => m.LeaveParamsModule),
            },
            {
                path: 'scoring',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_columns_js-node_modules_iconify_icons-fa-solid_fi-80ad6f"), __webpack_require__.e("default-src_app_pages_attendance_attendance_module_ts"), __webpack_require__.e("default-src_app_pages_shiftgroup_shiftgroup_component_ts"), __webpack_require__.e("default-src_app_pages_definitions_definitions_component_ts"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_calculator_js-node_modules_iconify_icons-fa-solid-14cd3a"), __webpack_require__.e("default-src_app_pages_personnel_components_personnels-edit_personnels-edit_module_ts"), __webpack_require__.e("default-node_modules_mat-table-filter___ivy_ngcc___fesm2015_mat-table-filter_js"), __webpack_require__.e("default-node_modules_iconify_icons-ic_refresh_js-src_app_pages_scoring_scoring-definitions_co-114a24"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_scoring_scoring_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scoring/scoring.module */ 98293)).then(m => m.ScoringModule),
            },
            {
                path: 'monthlyscoring',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_columns_js-node_modules_iconify_icons-fa-solid_fi-80ad6f"), __webpack_require__.e("default-src_app_pages_attendance_attendance_module_ts"), __webpack_require__.e("default-src_app_pages_shiftgroup_shiftgroup_component_ts"), __webpack_require__.e("default-src_app_pages_definitions_definitions_component_ts"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_calculator_js-node_modules_iconify_icons-fa-solid-14cd3a"), __webpack_require__.e("default-src_app_pages_personnel_components_personnels-edit_personnels-edit_module_ts"), __webpack_require__.e("default-node_modules_mat-table-filter___ivy_ngcc___fesm2015_mat-table-filter_js"), __webpack_require__.e("default-node_modules_iconify_icons-ic_refresh_js-src_app_pages_scoring_scoring-definitions_co-114a24"), __webpack_require__.e("src_app_pages_mscoring_mscoring_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mscoring/mscoring.module */ 4981)).then(m => m.MScoringModule),
            },
            // {
            //   path: 'weeklyscoring',
            //   loadChildren: () => import('./pages/wscoring/wscoring.module').then(m => m.WScoringModule),
            // },
            {
                path: 'shiftcalendar',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("src_app_pages_shiftcalendar_shiftcalendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shiftcalendar/shiftcalendar.module */ 82977)).then(m => m.ShiftCalendarModule),
            },
            {
                path: 'transfer',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_columns_js-node_modules_iconify_icons-fa-solid_fi-80ad6f"), __webpack_require__.e("default-src_app_pages_attendance_attendance_module_ts"), __webpack_require__.e("default-node_modules_iconify_icons-fa-solid_calculator_js-node_modules_iconify_icons-fa-solid-14cd3a"), __webpack_require__.e("default-src_app_pages_leaves_leave_module_ts"), __webpack_require__.e("default-node_modules_mat-table-filter___ivy_ngcc___fesm2015_mat-table-filter_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_transfer_transfer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transfer/transfer.module */ 3024)).then(m => m.TransferModule),
            },
            {
                path: 'aio-table',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("src_app_pages_apps_aio-table_aio-table_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/aio-table/aio-table.module */ 8521)).then(m => m.AioTableModule),
            },
            {
                path: 'help-center',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_apps_help-center_help-center_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/help-center/help-center.module */ 23217)).then(m => m.HelpCenterModule),
            },
            {
                path: 'scrumboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_apps_scrumboard_scrumboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/scrumboard/scrumboard.module */ 1987)).then(m => m.ScrumboardModule),
            },
            {
                path: 'editor',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("src_app_pages_apps_editor_editor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/editor/editor.module */ 62406)).then(m => m.EditorModule),
            },
        ]
    },
    {
        path: 'pages',
        children: [
            {
                path: 'pricing',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pages_pricing_pricing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/pricing/pricing.module */ 55731)).then(m => m.PricingModule)
            },
            {
                path: 'faq',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pages_faq_faq_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/faq/faq.module */ 31481)).then(m => m.FaqModule)
            },
            {
                path: 'guides',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_apps_help-center_help-center-guides_help-center-guides_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pages_guides_guides_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/guides/guides.module */ 50273)).then(m => m.GuidesModule)
            },
            // {
            //   path: 'profile',
            //   loadChildren: () => import('./pages/pages/profile/profile.module').then(m => m.ProfileModule)
            // },
            {
                path: 'invoice',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_invoice_invoice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/invoice/invoice.module */ 10416)).then(m => m.InvoiceModule)
            },
            {
                path: 'error-404',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_errors_error-404_error-404_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/errors/error-404/error-404.module */ 97179)).then(m => m.Error404Module)
            },
            {
                path: 'error-500',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_errors_error-500_error-500_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/errors/error-500/error-500.module */ 91939)).then(m => m.Error500Module)
            }
        ]
    },
    {
        path: 'ui',
        children: [
            {
                path: 'components',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ui_components_components_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ui/components/components.module */ 54152)).then(m => m.ComponentsModule),
            },
            {
                path: 'forms/form-elements',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_forms_form-elements_form-elements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ui/forms/form-elements/form-elements.module */ 63919)).then(m => m.FormElementsModule),
                data: {
                    containerEnabled: true
                }
            },
            {
                path: 'forms/form-wizard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("src_app_pages_ui_forms_form-wizard_form-wizard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ui/forms/form-wizard/form-wizard.module */ 89692)).then(m => m.FormWizardModule),
                data: {
                    containerEnabled: true
                }
            },
            {
                path: 'icons',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ui_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ui/icons/icons.module */ 40275)).then(m => m.IconsModule)
            },
            {
                path: 'page-layouts',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ui_page-layouts_page-layouts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ui/page-layouts/page-layouts.module */ 5173)).then(m => m.PageLayoutsModule),
            },
        ]
    },
    {
        path: 'documentation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("src_app_pages_documentation_documentation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/documentation/documentation.module */ 1654)).then(m => m.DocumentationModule),
    },
    {
        path: '**',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_errors_error-404_error-404_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/errors/error-404/error-404.module */ 97179)).then(m => m.Error404Module)
    }
];
const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 82371)).then(m => m.LoginModule),
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_auth_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/auth/register/register.module */ 50750)).then(m => m.RegisterModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_auth_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/auth/forgot-password/forgot-password.module */ 91165)).then(m => m.ForgotPasswordModule),
    },
    {
        path: 'coming-soon',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pages_coming-soon_coming-soon_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/coming-soon/coming-soon.module */ 28217)).then(m => m.ComingSoonModule),
    },
    {
        path: '',
        component: _custom_layout_custom_layout_component__WEBPACK_IMPORTED_MODULE_0__.CustomLayoutComponent,
        children: childrenRoutes
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
                preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkStrategy,
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'corrected',
                anchorScrolling: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! luxon */ 71601);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-contact-support */ 84229);
/* harmony import */ var _iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-outline */ 56064);
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ 77499);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/coercion */ 62270);
/* harmony import */ var _iconify_icons_ic_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/style */ 27976);
/* harmony import */ var _iconify_icons_ic_baseline_score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/baseline-score */ 86038);
/* harmony import */ var _iconify_icons_ic_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/home */ 56214);
/* harmony import */ var _iconify_icons_ic_description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/description */ 38180);
/* harmony import */ var _iconify_icons_ic_outline_table_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/outline-table-chart */ 10823);
/* harmony import */ var _iconify_icons_ic_personal_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/personal-video */ 51739);
/* harmony import */ var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@vex/services/config.service */ 63531);
/* harmony import */ var _vex_services_style_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@vex/services/style.service */ 26872);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/platform */ 573);
/* harmony import */ var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@vex/services/layout.service */ 39011);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@vex/services/navigation.service */ 73166);
/* harmony import */ var _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@vex/services/splash-screen.service */ 75850);
/* harmony import */ var _pages_services_authorization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/services/authorization.service */ 9695);
/* harmony import */ var _pages_services_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/services/login.service */ 12256);
























class AppComponent {
    constructor(configService, styleService, renderer, platform, document, localeId, layoutService, route, navigationService, splashScreenService, authorizationService, loginService) {
        this.configService = configService;
        this.styleService = styleService;
        this.renderer = renderer;
        this.platform = platform;
        this.document = document;
        this.localeId = localeId;
        this.layoutService = layoutService;
        this.route = route;
        this.navigationService = navigationService;
        this.splashScreenService = splashScreenService;
        this.authorizationService = authorizationService;
        this.loginService = loginService;
        this.title = 'vex';
        luxon__WEBPACK_IMPORTED_MODULE_16__.Settings.defaultLocale = this.localeId;
        if (this.platform.BLINK) {
            this.renderer.addClass(this.document.body, 'is-blink');
        }
        /**
         * Customize the template to your needs with the ConfigService
         * Example:
         *  this.configService.updateConfig({
         *    sidenav: {
         *      title: 'Custom App',
         *      imageUrl: '//placehold.it/100x100',
         *      showCollapsePin: false
         *    },
         *    footer: {
         *      visible: false
         *    }
         *  });
         */
        /**
         * Config Related Subscriptions
         * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
         * Example: example.com/?layout=apollo&style=default
         */
        this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(queryParamMap => queryParamMap.has('rtl')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(queryParamMap => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__.coerceBooleanProperty)(queryParamMap.get('rtl')))).subscribe(isRtl => {
            this.configService.updateConfig({
                rtl: isRtl
            });
        });
        this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(queryParamMap => queryParamMap.has('layout'))).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout')));
        this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(queryParamMap => queryParamMap.has('style'))).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style')));
        /**
         * Add your own routes here
         */
        // this.navigationService.items = [
        //   {
        //     type: 'link',
        //     label: 'Dashboard',
        //     route: '/',
        //     icon: icLayers,
        //     routerLinkActiveOptions: { exact: true }
        //   },
        //   {
        //     type: 'subheading',
        //     label: 'Apps',
        //     children: [
        //       {
        //         type: 'link',
        //         label: 'All-In-One Table',
        //         route: '/apps/aio-table',
        //         icon: icAssigment
        //       },
        //       {
        //         type: 'dropdown',
        //         label: 'Help Center',
        //         icon: icContactSupport,
        //         children: [
        //           {
        //             type: 'link',
        //             label: 'Getting Started',
        //             route: '/apps/help-center/getting-started'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Pricing & Plans',
        //             route: '/apps/help-center/pricing'
        //           },
        //           {
        //             type: 'link',
        //             label: 'FAQ',
        //             route: '/apps/help-center/faq'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Guides',
        //             route: '/apps/help-center/guides'
        //           }
        //         ]
        //       },
        //       {
        //         type: 'link',
        //         label: 'Calendar',
        //         route: '/apps/calendar',
        //         icon: icDateRange,
        //         badge: {
        //           value: '12',
        //           bgClass: 'bg-deep-purple',
        //           textClass: 'text-deep-purple-contrast',
        //         },
        //       },
        //       {
        //         type: 'link',
        //         label: 'Chat',
        //         route: '/apps/chat',
        //         icon: icChat,
        //         badge: {
        //           value: '16',
        //           bgClass: 'bg-cyan',
        //           textClass: 'text-cyan-contrast',
        //         },
        //       },
        //       {
        //         type: 'link',
        //         label: 'Mailbox',
        //         route: '/apps/mail',
        //         icon: icMail,
        //       },
        //       {
        //         type: 'dropdown',
        //         label: 'Social',
        //         icon: icPersonOutline,
        //         children: [
        //           {
        //             type: 'link',
        //             label: 'Profile',
        //             route: '/apps/social',
        //             routerLinkActiveOptions: { exact: true }
        //           },
        //           {
        //             type: 'link',
        //             label: 'Timeline',
        //             route: '/apps/social/timeline'
        //           },
        //         ]
        //       },
        //       {
        //         type: 'link',
        //         label: 'WYSIWYG Editor',
        //         route: '/apps/editor',
        //         icon: icChromeReaderMode
        //       },
        //       {
        //         type: 'dropdown',
        //         label: 'Contacts',
        //         icon: icContacts,
        //         children: [
        //           {
        //             type: 'link',
        //             label: 'List - Grid',
        //             route: '/apps/contacts/grid',
        //           },
        //           {
        //             type: 'link',
        //             label: 'List - Table',
        //             route: '/apps/contacts/table',
        //           }
        //         ]
        //       },
        //       {
        //         type: 'link',
        //         label: 'Scrumboard',
        //         route: '/apps/scrumboard',
        //         icon: icAssessment,
        //         badge: {
        //           value: 'NEW',
        //           bgClass: 'bg-primary',
        //           textClass: 'text-primary-contrast',
        //         }
        //       },
        //     ]
        //   },
        //   {
        //     type: 'subheading',
        //     label: 'Pages',
        //     children: [
        //       {
        //         type: 'dropdown',
        //         label: 'Authentication',
        //         icon: icLock,
        //         children: [
        //           {
        //             type: 'link',
        //             label: 'Login',
        //             route: '/login'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Register',
        //             route: '/register'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Forgot Password',
        //             route: '/forgot-password'
        //           }
        //         ]
        //       },
        //       {
        //         type: 'link',
        //         label: 'Coming Soon',
        //         icon: icWatchLater,
        //         route: '/coming-soon'
        //       },
        //       {
        //         type: 'dropdown',
        //         label: 'Errors',
        //         icon: icError,
        //         badge: {
        //           value: '4',
        //           bgClass: 'bg-green',
        //           textClass: 'text-green-contrast',
        //         },
        //         children: [
        //           {
        //             type: 'link',
        //             label: '404',
        //             route: '/pages/error-404'
        //           },
        //           {
        //             type: 'link',
        //             label: '500',
        //             route: '/pages/error-500'
        //           }
        //         ]
        //       },
        //       {
        //         type: 'link',
        //         label: 'Pricing',
        //         icon: icAttachMoney,
        //         route: '/pages/pricing'
        //       },
        //       {
        //         type: 'link',
        //         label: 'Invoice',
        //         icon: icReceipt,
        //         route: '/pages/invoice'
        //       },
        //       {
        //         type: 'link',
        //         label: 'FAQ',
        //         icon: icHelp,
        //         route: '/pages/faq'
        //       },
        //       {
        //         type: 'link',
        //         label: 'Guides',
        //         icon: icBook,
        //         route: '/pages/guides',
        //         badge: {
        //           value: '18',
        //           bgClass: 'bg-teal',
        //           textClass: 'text-teal-contrast',
        //         },
        //       },
        //     ]
        //   },
        //   {
        //     type: 'subheading',
        //     label: 'UI Elements',
        //     children: [
        //       {
        //         type: 'dropdown',
        //         label: 'Components',
        //         icon: icBubbleChart,
        //         children: [
        //           {
        //             type: 'link',
        //             label: 'Overview',
        //             route: '/ui/components/overview'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Autocomplete',
        //             route: '/ui/components/autocomplete'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Buttons',
        //             route: '/ui/components/buttons'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Button Group',
        //             route: '/ui/components/button-group'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Cards',
        //             route: '/ui/components/cards'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Checkbox',
        //             route: '/ui/components/checkbox'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Dialogs',
        //             route: '/ui/components/dialogs'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Grid List',
        //             route: '/ui/components/grid-list'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Input',
        //             route: '/ui/components/input'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Lists',
        //             route: '/ui/components/lists'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Menu',
        //             route: '/ui/components/menu'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Progress',
        //             route: '/ui/components/progress'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Progress Spinner',
        //             route: '/ui/components/progress-spinner'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Radio',
        //             route: '/ui/components/radio'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Slide Toggle',
        //             route: '/ui/components/slide-toggle'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Slider',
        //             route: '/ui/components/slider'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Snack Bar',
        //             route: '/ui/components/snack-bar'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Tooltip',
        //             route: '/ui/components/tooltip'
        //           },
        //         ]
        //       },
        //       {
        //         type: 'dropdown',
        //         label: 'Forms',
        //         icon: icFormatColorText,
        //         children: [
        //           {
        //             type: 'link',
        //             label: 'Form Elements',
        //             route: '/ui/forms/form-elements'
        //           },
        //           {
        //             type: 'link',
        //             label: 'Form Wizard',
        //             route: '/ui/forms/form-wizard'
        //           }
        //         ]
        //       },
        //       {
        //         type: 'dropdown',
        //         label: 'Icons',
        //         icon: icStar,
        //         children: [
        //           {
        //             type: 'link',
        //             label: 'Material Icons',
        //             route: '/ui/icons/ic'
        //           },
        //           {
        //             type: 'link',
        //             label: 'FontAwesome Icons',
        //             route: '/ui/icons/fa'
        //           }
        //         ]
        //       },
        //       {
        //         type: 'dropdown',
        //         label: 'Page Layouts',
        //         icon: icViewCompact,
        //         children: [
        //           {
        //             type: 'dropdown',
        //             label: 'Card',
        //             children: [
        //               {
        //                 type: 'link',
        //                 label: 'Default',
        //                 route: '/ui/page-layouts/card',
        //                 routerLinkActiveOptions: { exact: true }
        //               },
        //               {
        //                 type: 'link',
        //                 label: 'Tabbed',
        //                 route: '/ui/page-layouts/card/tabbed',
        //               },
        //               {
        //                 type: 'link',
        //                 label: 'Large Header',
        //                 route: '/ui/page-layouts/card/large-header',
        //                 routerLinkActiveOptions: { exact: true }
        //               },
        //               {
        //                 type: 'link',
        //                 label: 'Tabbed & Large Header',
        //                 route: '/ui/page-layouts/card/large-header/tabbed'
        //               }
        //             ]
        //           },
        //           {
        //             type: 'dropdown',
        //             label: 'Simple',
        //             children: [
        //               {
        //                 type: 'link',
        //                 label: 'Default',
        //                 route: '/ui/page-layouts/simple',
        //                 routerLinkActiveOptions: { exact: true }
        //               },
        //               {
        //                 type: 'link',
        //                 label: 'Tabbed',
        //                 route: '/ui/page-layouts/simple/tabbed',
        //               },
        //               {
        //                 type: 'link',
        //                 label: 'Large Header',
        //                 route: '/ui/page-layouts/simple/large-header',
        //                 routerLinkActiveOptions: { exact: true }
        //               },
        //               {
        //                 type: 'link',
        //                 label: 'Tabbed & Large Header',
        //                 route: '/ui/page-layouts/simple/large-header/tabbed'
        //               }
        //             ]
        //           },
        //           {
        //             type: 'link',
        //             label: 'Blank',
        //             icon: icPictureInPicture,
        //             route: '/ui/page-layouts/blank'
        //           },
        //         ]
        //       },
        //     ]
        //   },
        //   {
        //     type: 'subheading',
        //     label: 'Documentation',
        //     children: [
        //       {
        //         type: 'link',
        //         label: 'Changelog',
        //         route: '/documentation/changelog',
        //         icon: icUpdate
        //       },
        //       {
        //         type: 'dropdown',
        //         label: 'Getting Started',
        //         icon: icBook,
        //         children: [
        //           {
        //             type: 'link',
        //             label: 'Introduction',
        //             route: '/documentation/introduction',
        //             fragment: 'introduction',
        //             routerLinkActiveOptions: { exact: true }
        //           },
        //           {
        //             type: 'link',
        //             label: 'Folder Structure',
        //             route: '/documentation/folder-structure',
        //             fragment: 'folder-structure',
        //             routerLinkActiveOptions: { exact: true }
        //           },
        //           {
        //             type: 'link',
        //             label: 'Installation',
        //             route: '/documentation/installation',
        //             fragment: 'installation',
        //             routerLinkActiveOptions: { exact: true }
        //           },
        //           {
        //             type: 'link',
        //             label: 'Development Server',
        //             route: '/documentation/start-development-server',
        //             fragment: 'start-development-server',
        //             routerLinkActiveOptions: { exact: true }
        //           },
        //           {
        //             type: 'link',
        //             label: 'Build for Production',
        //             route: '/documentation/build-for-production',
        //             fragment: 'build-for-production',
        //             routerLinkActiveOptions: { exact: true }
        //           }
        //         ]
        //       },
        //       {
        //         type: 'dropdown',
        //         label: 'Customization',
        //         icon: icBook,
        //         children: [
        //           {
        //             type: 'link',
        //             label: 'Configuration',
        //             route: '/documentation/configuration',
        //             fragment: 'configuration',
        //             routerLinkActiveOptions: { exact: true }
        //           },
        //           {
        //             type: 'link',
        //             label: 'Changing Styling',
        //             route: '/documentation/changing-styling-and-css-variables',
        //             fragment: 'changing-styling-and-css-variables',
        //             routerLinkActiveOptions: { exact: true }
        //           },
        //           {
        //             type: 'link',
        //             label: 'Using Custom Colors',
        //             route: '/documentation/using-custom-colors-for-the-primarysecondarywarn-palettes',
        //             fragment: 'using-custom-colors-for-the-primarysecondarywarn-palettes',
        //             routerLinkActiveOptions: { exact: true }
        //           },
        //           {
        //             type: 'link',
        //             label: 'Adding Menu Items',
        //             route: '/documentation/adding-menu-items',
        //             fragment: 'adding-menu-items',
        //             routerLinkActiveOptions: { exact: true }
        //           },
        //         ]
        //       },
        //       {
        //         type: 'link',
        //         label: 'Further Help',
        //         icon: icBook,
        //         route: '/documentation/further-help',
        //         fragment: 'further-help',
        //         routerLinkActiveOptions: { exact: true }
        //       },
        //     ]
        //   },
        //   {
        //     type: 'subheading',
        //     label: 'Customize',
        //     children: []
        //   },
        //   {
        //     type: 'link',
        //     label: 'Configuration',
        //     route: () => this.layoutService.openConfigpanel(),
        //     icon: icSettings
        //   }
        // ];
        let menuArray = (JSON.parse(sessionStorage.getItem('Menus')));
        if (menuArray !== null) {
            Object.keys(menuArray).forEach((key) => {
                if (menuArray[key].icon == "icContactSupport")
                    menuArray[key].icon = _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_0__["default"];
                else if (menuArray[key].icon == "icPersonOutline")
                    menuArray[key].icon = _iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_1__["default"];
                else if (menuArray[key].icon == "icStyle")
                    menuArray[key].icon = _iconify_icons_ic_style__WEBPACK_IMPORTED_MODULE_3__["default"];
                else if (menuArray[key].icon == "icScore")
                    menuArray[key].icon = _iconify_icons_ic_baseline_score__WEBPACK_IMPORTED_MODULE_4__["default"];
                else if (menuArray[key].icon == "icHoliday")
                    menuArray[key].icon = _iconify_icons_ic_home__WEBPACK_IMPORTED_MODULE_5__["default"];
                else if (menuArray[key].icon == "icSettings")
                    menuArray[key].icon = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__["default"];
                else if (menuArray[key].icon == "icDescription")
                    menuArray[key].icon = _iconify_icons_ic_description__WEBPACK_IMPORTED_MODULE_6__["default"];
                else if (menuArray[key].icon == "icReport")
                    menuArray[key].icon = _iconify_icons_ic_outline_table_chart__WEBPACK_IMPORTED_MODULE_7__["default"];
                else if (menuArray[key].icon == "icSystem")
                    menuArray[key].icon = _iconify_icons_ic_personal_video__WEBPACK_IMPORTED_MODULE_8__["default"];
                if (menuArray[key].children !== null) {
                    Object.keys(menuArray[key].children).forEach((key2) => {
                        if (menuArray[key].children[key2].icon == "icContactSupport")
                            menuArray[key].children[key2].icon = _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_0__["default"];
                        else if (menuArray[key].children[key2].icon == "icPersonOutline")
                            menuArray[key].children[key2].icon = _iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_1__["default"];
                        else if (menuArray[key].children[key2].icon == "icStyle")
                            menuArray[key].children[key2].icon = _iconify_icons_ic_style__WEBPACK_IMPORTED_MODULE_3__["default"];
                        else if (menuArray[key].children[key2].icon == "icScore")
                            menuArray[key].children[key2].icon = _iconify_icons_ic_baseline_score__WEBPACK_IMPORTED_MODULE_4__["default"];
                        else if (menuArray[key].children[key2].icon == "icHoliday")
                            menuArray[key].children[key2].icon = _iconify_icons_ic_home__WEBPACK_IMPORTED_MODULE_5__["default"];
                        else if (menuArray[key].children[key2].icon == "icSettings")
                            menuArray[key].children[key2].icon = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__["default"];
                        else if (menuArray[key].children[key2].icon == "icDescription")
                            menuArray[key].children[key2].icon = _iconify_icons_ic_description__WEBPACK_IMPORTED_MODULE_6__["default"];
                        else if (menuArray[key].children[key2].icon == "icReport")
                            menuArray[key].children[key2].icon = _iconify_icons_ic_outline_table_chart__WEBPACK_IMPORTED_MODULE_7__["default"];
                        else if (menuArray[key].children[key2].icon == "icSystem")
                            menuArray[key].children[key2].icon = _iconify_icons_ic_personal_video__WEBPACK_IMPORTED_MODULE_8__["default"];
                    });
                }
                // menuArray[key].favorite=icFavoriteBorder;
            });
        }
        this.menuList = menuArray;
        this.navigationService.items = this.menuList;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_vex_services_config_service__WEBPACK_IMPORTED_MODULE_9__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_vex_services_style_service__WEBPACK_IMPORTED_MODULE_10__.StyleService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_11__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_12__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_13__.SplashScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_pages_services_authorization_service__WEBPACK_IMPORTED_MODULE_14__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_pages_services_login_service__WEBPACK_IMPORTED_MODULE_15__.LoginService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["vex-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterOutlet], styles: [".mat-tooltip {\n  font-size: 13px;\n}\n\n  .mat-tab-body-wrapper {\n  min-height: 550px;\n}\n\n  .mat-snack-bar-container {\n  max-width: 100% !important;\n}\n\n  .mat-simple-snackbar {\n  height: 70px !important;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 20px !important;\n  align-content: center;\n}\n\n  .as-split-gutter-icon {\n  background-color: #f1f1f5 !important;\n}\n\n  .mat-form-field-label-wrapper {\n  padding-top: 0px;\n  color: red;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: red !important;\n  font-weight: bolder;\n}\n\n .mat-form-field-underline {\n  \n  background-color: red !important;\n}\n\n .mat-form-field-ripple {\n  \n  background-color: red !important;\n}\n\n  .mat-form-field-label-wrapper {\n  top: -1em;\n}\n\n  .mat-form-field input:not(.mat-empty):not(.mat-form-field-empty) {\n  font-size: 12px;\n}\n\n  .mat-form-field input:is(.mat-empty):is(.mat-form-field-empty) {\n  font-size: 12px;\n}\n\n  .mat-form-field mat-select:not(.mat-empty):not(.mat-form-field-empty) {\n  font-size: 12px;\n}\n\n  .mat-form-field mat-select:is(.mat-empty):is(.mat-form-field-empty) {\n  font-size: 12px;\n}\n\n  .mat-form-field label:not(.mat-empty):not(.mat-form-field-empty) {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n  .mat-form-field label:is(.mat-empty):is(.mat-form-field-empty) {\n  font-size: 12px;\n  font-weight: lighter;\n}\n\n  .mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: #f4f6f9;\n}\n\n  .mat-form-field {\n  width: 120px;\n}\n\n.listClass[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%] {\n  max-width: 100vw !important;\n  padding: 5px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n  .mat-progress-bar {\n  border-radius: 2px;\n}\n\n  .my-menu {\n  width: 230px;\n}\n\n[_nghost-%COMP%]    .mat-tab-link,  .mat-tab-label,  .mat-tab-label-active {\n  min-width: 80px !important;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n  .mat-icon-button {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUF5Q0E7RUFDRSxpQkFBQTtBQXRDRjs7QUFrRUE7RUFDRSwwQkFBQTtBQS9ERjs7QUFrRUE7RUFFRSx1QkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQWpFRjs7QUE4RUE7RUFDRSxvQ0FBQTtBQTNFRjs7QUEwSEE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUF2SEY7O0FBMEhBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBdkhGOztBQTBIQTtFQUNFLDRCQUFBO0VBQ0EsZ0NBQUE7QUF2SEY7O0FBMEhBO0VBQ0UseUNBQUE7RUFDQSxnQ0FBQTtBQXZIRjs7QUEwSEE7RUFDRSxTQUFBO0FBdkhGOztBQTBIQTtFQUNFLGVBQUE7QUF2SEY7O0FBMkhBO0VBQ0UsZUFBQTtBQXhIRjs7QUE0SEE7RUFDRSxlQUFBO0FBekhGOztBQTZIQTtFQUNFLGVBQUE7QUExSEY7O0FBOEhBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBM0hGOztBQThIQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQTNIRjs7QUE4SEE7RUFDRSx5QkFBQTtBQTNIRjs7QUE4SEE7RUFDRSxZQUFBO0FBM0hGOztBQThIQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEzSEY7O0FBa0pBO0VBQ0Usa0JBQUE7QUEvSUY7O0FBdUpBO0VBQ0UsWUFBQTtBQXBKRjs7QUF1SkE7OztFQUdFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBcEpGOztBQXdKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFySkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIHtcclxuLy8gICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuLy8gICBkaXYge1xyXG4vLyAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWU7XHJcbi8vICAgICAvLyAmLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuLy8gICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcclxuLy8gICAgIC8vICAgLy8gZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgICAgLy8gICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4vLyAgICAgLy8gICAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuLy8gICAgIC8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcclxuLy8gICAgIC8vICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuLy8gICAgIC8vICAgfVxyXG4vLyAgICAgLy8gfVxyXG4vLyAgICAgLy8gLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbi8vICAgICAvLyAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIC8vICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAge1xyXG4vLyAgICYubWF0LXByaW1hcnkge1xyXG4vLyAgICAgLm1hdC1pbmstYmFyIHtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmVlO1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciB7XHJcbi8vICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcbi8vICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1lc3NhZ2UtcG9zaXRpb24ge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgbGVmdDogMzklO1xyXG4vLyAgIHRvcDogNDAlO1xyXG4vLyAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1lc3NhZ2UtcG9zaXRpb24ge1xyXG4vLyAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC13cmFwOiB3cmFwO1xyXG4vLyAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBmb250LXNpemU6IDZweDtcclxuLy8gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM3N2ZmO1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcclxuICAvLyB3aWR0aDogODAwcHggICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA3MHB4ICAhaW1wb3J0YW50O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xyXG4vLyAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbi8vICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbi8vICAgbWluLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLmFzLXNwbGl0LWd1dHRlci1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWY1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcC5zaWRlbmF2LWNvbnRhaW5lciAubWF0LXNpZGVuYXYtY29udGVudCAge1xyXG4vLyAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuLy8gICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuLy8gICBmbGV4OiAxO1xyXG4vLyAgIG1heC1oZWlnaHQ6IDEwMDBweDtcclxuLy8gfVxyXG5cclxuLy8gLm1hdC10YWItaGVhZGVyIHtcclxuLy8gICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzNlM2JmZjtcclxuLy8gICBoZWlnaHQ6IDQ2cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi8vIC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLy8gLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuLy8gICBib3JkZXItdG9wOiAycHggc29saWQgIzNlM2JmZjtcclxuLy8gICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzZTNiZmY7XHJcbi8vICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzNlM2JmZjtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhcixcclxuLy8gLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4vLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4vLyA6aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuLy8gICBib3JkZXItd2lkdGg6IDlweDtcclxuLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4vLyAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xyXG4vLyB9XHJcbi8vIDo6bmctZGVlcC5tYXQtdGFiLWxpbmssXHJcbi8vIDo6bmctZGVlcC5tYXQtdGFiLWxhYmVsLFxyXG4vLyA6Om5nLWRlZXAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4vLyAgIG1pbi13aWR0aDogMTA1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyA6Om5nLWRlZXAubWF0LXRhYi1sYWJlbCxcclxuLy8gOjpuZy1kZWVwLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuLy8gICBtaW4td2lkdGg6IDgwICFpbXBvcnRhbnQ7XHJcbi8vICAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XHJcbi8vICAgbWFyZ2luOiAzcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xyXG4gIHRvcDogLTFlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCBpbnB1dDpub3QoLm1hdC1lbXB0eSk6bm90KC5tYXQtZm9ybS1maWVsZC1lbXB0eSkge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICAvLyBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCBpbnB1dDppcygubWF0LWVtcHR5KTppcygubWF0LWZvcm0tZmllbGQtZW1wdHkpIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgLy8gZm9udC13ZWlnaHQ6bGlnaHRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCBtYXQtc2VsZWN0Om5vdCgubWF0LWVtcHR5KTpub3QoLm1hdC1mb3JtLWZpZWxkLWVtcHR5KSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIG1hdC1zZWxlY3Q6aXMoLm1hdC1lbXB0eSk6aXMoLm1hdC1mb3JtLWZpZWxkLWVtcHR5KSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIC8vIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQgbGFiZWw6bm90KC5tYXQtZW1wdHkpOm5vdCgubWF0LWZvcm0tZmllbGQtZW1wdHkpIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQgbGFiZWw6aXMoLm1hdC1lbXB0eSk6aXMoLm1hdC1mb3JtLWZpZWxkLWVtcHR5KSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmOTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4ubGlzdENsYXNzIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4vLyAgIDo6bmctZGVlcCAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNlM2JmZjtcclxuLy8gICB9XHJcblxyXG4vLyAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzYmZmO1xyXG4vLyAgIH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuLy8gICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuLy8gICBwYWRkaW5nOiAwcHg7XHJcbi8vIH1cclxuLy8gOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBN0RBLy8jRDFEQUU5OyAvLyM3ZWM5OWQ7XHJcbi8vIH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlOyAvLyNFNEU4RUI7XHJcbi8vIH1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4vLyAubWF0LXN1Y2Nlc3Mge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLm15LW1lbnUge1xyXG4gIHdpZHRoOiAyMzBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwLm1hdC10YWItbGluayxcclxuOjpuZy1kZWVwLm1hdC10YWItbGFiZWwsXHJcbjo6bmctZGVlcC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWljb24tYnV0dG9ue1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbi8vICAgcGFkZGluZzogMGVtIDAuNzVlbSAwIDAuNzVlbSAhaW1wb3J0YW50O1xyXG4vLyB9Il19 */"] });


/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _vex_vex_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@vex/vex.module */ 76154);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-layout/custom-layout.module */ 90304);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../material.module */ 67208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        // {provide: 'apiUrl', useValue: 'http://localhost/BasApp/' },
        { provide: 'apiUrl', useValue: 'http://10.34.1.15:24996/BasApp/' },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.HashLocationStrategy }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _vex_vex_module__WEBPACK_IMPORTED_MODULE_2__.VexModule,
            _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_3__.CustomLayoutModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _vex_vex_module__WEBPACK_IMPORTED_MODULE_2__.VexModule,
        _custom_layout_custom_layout_module__WEBPACK_IMPORTED_MODULE_3__.CustomLayoutModule] }); })();


/***/ }),

/***/ 24961:
/*!**********************************************************!*\
  !*** ./src/app/custom-layout/custom-layout.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLayoutComponent": () => (/* binding */ CustomLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 74172);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@vex/utils/check-router-childs-data */ 69361);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/until-destroy */ 28094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@vex/services/layout.service */ 39011);
/* harmony import */ var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@vex/services/config.service */ 63531);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ 59339);
/* harmony import */ var _vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@vex/layout/layout.component */ 74563);
/* harmony import */ var _vex_components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component */ 31710);
/* harmony import */ var _vex_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@vex/components/sidebar/sidebar.component */ 97781);
/* harmony import */ var _vex_components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@vex/components/config-panel/config-panel.component */ 66393);
/* harmony import */ var _vex_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@vex/layout/sidenav/sidenav.component */ 74916);
/* harmony import */ var _vex_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@vex/layout/toolbar/toolbar.component */ 98072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _vex_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@vex/layout/footer/footer.component */ 26673);
/* harmony import */ var _vex_layout_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@vex/layout/quickpanel/quickpanel.component */ 6020);



















const _c0 = ["configpanel"];
function CustomLayoutComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "vex-sidenav", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx_r1.sidenavCollapsed$));
} }
function CustomLayoutComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "vex-toolbar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hasShadow", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, ctx_r3.toolbarShadowEnabled$))("mobileQuery", !_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, ctx_r3.isDesktop$));
} }
function CustomLayoutComponent_ng_template_4_vex_footer_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "vex-footer", 11);
} }
function CustomLayoutComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CustomLayoutComponent_ng_template_4_vex_footer_0_Template, 1, 0, "vex-footer", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx_r5.isFooterVisible$));
} }
function CustomLayoutComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "vex-quickpanel");
} }
let CustomLayoutComponent = class CustomLayoutComponent {
    constructor(layoutService, configService, breakpointObserver, router) {
        this.layoutService = layoutService;
        this.configService = configService;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
        this.isFooterVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(config => config.footer.visible));
        this.isDesktop$ = this.layoutService.isDesktop$;
        this.toolbarShadowEnabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled)));
    }
    ngOnInit() {
        this.layoutService.configpanelOpen$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.untilDestroyed)(this)).subscribe(open => open ? this.configpanel.open() : this.configpanel.close());
    }
};
CustomLayoutComponent.ɵfac = function CustomLayoutComponent_Factory(t) { return new (t || CustomLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_vex_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router)); };
CustomLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: CustomLayoutComponent, selectors: [["vex-custom-layout"]], viewQuery: function CustomLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.configpanel = _t.first);
    } }, decls: 13, vars: 5, consts: [["sidenavRef", ""], ["toolbarRef", ""], ["footerRef", ""], ["quickpanelRef", ""], [3, "footerRef", "quickpanelRef", "sidenavRef", "toolbarRef"], [3, "openConfig"], ["position", "right", 3, "invisibleBackdrop"], ["configpanel", ""], [3, "collapsed"], [1, "vex-toolbar", 3, "hasShadow", "mobileQuery"], ["class", "vex-footer", 4, "ngIf"], [1, "vex-footer"]], template: function CustomLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CustomLayoutComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CustomLayoutComponent_ng_template_2_Template, 3, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CustomLayoutComponent_ng_template_4_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, CustomLayoutComponent_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "vex-layout", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "vex-config-panel-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("openConfig", function CustomLayoutComponent_Template_vex_config_panel_toggle_openConfig_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11); return _r8.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "vex-sidebar", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "vex-config-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("footerRef", _r4)("quickpanelRef", _r6)("sidenavRef", _r0)("toolbarRef", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("invisibleBackdrop", true);
    } }, directives: [_vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _vex_components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_4__.ConfigPanelToggleComponent, _vex_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _vex_components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_6__.ConfigPanelComponent, _vex_layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__.SidenavComponent, _vex_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__.ToolbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _vex_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent, _vex_layout_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_10__.QuickpanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
CustomLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.UntilDestroy)()
], CustomLayoutComponent);



/***/ }),

/***/ 90304:
/*!*******************************************************!*\
  !*** ./src/app/custom-layout/custom-layout.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLayoutModule": () => (/* binding */ CustomLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@vex/layout/layout.module */ 98812);
/* harmony import */ var _custom_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-layout.component */ 24961);
/* harmony import */ var _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@vex/layout/sidenav/sidenav.module */ 40763);
/* harmony import */ var _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@vex/layout/toolbar/toolbar.module */ 84557);
/* harmony import */ var _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@vex/layout/footer/footer.module */ 82941);
/* harmony import */ var _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@vex/components/config-panel/config-panel.module */ 5392);
/* harmony import */ var _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@vex/components/sidebar/sidebar.module */ 39729);
/* harmony import */ var _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@vex/layout/quickpanel/quickpanel.module */ 88301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);










class CustomLayoutModule {
}
CustomLayoutModule.ɵfac = function CustomLayoutModule_Factory(t) { return new (t || CustomLayoutModule)(); };
CustomLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CustomLayoutModule });
CustomLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
            _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__.SidenavModule,
            _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.ToolbarModule,
            _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_5__.ConfigPanelModule,
            _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__.SidebarModule,
            _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_7__.QuickpanelModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CustomLayoutModule, { declarations: [_custom_layout_component__WEBPACK_IMPORTED_MODULE_1__.CustomLayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
        _vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_2__.SidenavModule,
        _vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.ToolbarModule,
        _vex_layout_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
        _vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_5__.ConfigPanelModule,
        _vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__.SidebarModule,
        _vex_layout_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_7__.QuickpanelModule] }); })();


/***/ }),

/***/ 10071:
/*!******************************************!*\
  !*** ./src/app/pages/interfaces/util.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUtil),
/* harmony export */   "DemoDialogComponent2": () => (/* binding */ DemoDialogComponent2)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);



class AppUtil {
    constructor(dialog1) {
        this.dialog1 = dialog1;
    }
    static getLabels() {
        let language = [];
        let languageMap = {};
        // debugger;
        if (JSON.parse(sessionStorage.getItem('Labels')) == null)
            return;
        const res = JSON.parse(sessionStorage.getItem('Labels'));
        Object.keys(res).forEach((key) => {
            let data = { label: res[key].Label, labelName: res[key].LabelLng };
            language.push(data);
        });
        language.forEach((s) => {
            languageMap[s.label] = s;
        });
        return languageMap;
    }
    static getlocalStorageLabels() {
        let language = [];
        let languageMap = {};
        const res = JSON.parse(localStorage.getItem('Labels'));
        Object.keys(res).forEach((key) => {
            let data = { label: res[key].Label, labelName: res[key].LabelLng };
            language.push(data);
        });
        language.forEach((s) => {
            languageMap[s.label] = s;
        });
        return languageMap;
    }
}
// <mat-progress-spinner diameter="60" strokeWidth="10" style="margin-top:10px"   mode="indeterminate"></mat-progress-spinner>
// @NgModule({
//   imports: [MatProgressSpinnerModule] 
// })
class DemoDialogComponent2 {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
}
DemoDialogComponent2.ɵfac = function DemoDialogComponent2_Factory(t) { return new (t || DemoDialogComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
DemoDialogComponent2.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoDialogComponent2, selectors: [["matspinner"]], decls: 1, vars: 0, template: function DemoDialogComponent2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });


/***/ }),

/***/ 9695:
/*!*********************************************************!*\
  !*** ./src/app/pages/services/authorization.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationService": () => (/* binding */ AuthorizationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



class AuthorizationService {
    constructor(apiUrl, http, router, ngZone) {
        this.apiUrl = apiUrl;
        this.http = http;
        this.router = router;
        this.ngZone = ngZone;
        this.showLoader = false;
    }
    ngOnInit() { }
    GetTreeView(Lng) {
        console.log(this.apiUrl + 'authorization/treeview/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Lng);
        return this.http.get(this.apiUrl + 'authorization/treeview/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Lng);
    }
    GetUser(userCode, route) {
        console.log(this.apiUrl + 'authorization/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + userCode + '/' + route);
        return this.http.get(this.apiUrl + 'authorization/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + userCode + '/' + route);
    }
    GetCompanies() {
        console.log(this.apiUrl + 'authorization/companies/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
        return this.http.get(this.apiUrl + 'authorization/companies/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    }
    GetCompaniesAuth(groupCode) {
        console.log(this.apiUrl + 'authorization/companies/auth/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + groupCode);
        return this.http.get(this.apiUrl + 'authorization/companies/auth/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + groupCode);
    }
    PostCompany(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'authorization/companies/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
        return this.http.post(this.apiUrl + 'authorization/companies', obj);
    }
    DeleteCompany(ID) {
        console.log(this.apiUrl + 'authorization/companies/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
        return this.http.delete(this.apiUrl + 'authorization/companies/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
    }
    GetUserTabs(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'authorization');
        return this.http.post(this.apiUrl + 'authorization', obj);
    }
    GetGroups() {
        console.log(this.apiUrl + 'authorization/groups/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
        return this.http.get(this.apiUrl + 'authorization/groups/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    }
    GetUsers() {
        console.log(this.apiUrl + 'authorization/users/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
        return this.http.get(this.apiUrl + 'authorization/users/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    }
    PostUser(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'authorization/users/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
        return this.http.post(this.apiUrl + 'authorization/users', obj);
    }
    DeleteUser(Id) {
        console.log(this.apiUrl + 'authorization/users/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
        return this.http.get(this.apiUrl + 'authorization/users/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    }
    GetMenuGroup(groupCode) {
        console.log(this.apiUrl + 'authorization/menu/group/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + groupCode);
        return this.http.get(this.apiUrl + 'authorization/menu/group/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + groupCode);
    }
    GetMenuUser() {
        console.log(this.apiUrl + 'authorization/menu/user/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
        return this.http.get(this.apiUrl + 'authorization/menu/user/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    }
    GetMenuGroups() {
        console.log(this.apiUrl + 'authorization/menu/groups/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
        return this.http.get(this.apiUrl + 'authorization/menu/groups/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    }
    // ------------------------------------------------------------
    GetUserMenu(userData) {
        console.log(this.apiUrl + 'authorization/menu/' + userData);
        return this.http.get(this.apiUrl + 'authorization/menu/' + userData);
        // NavigationItem[]
        // const any=[{type: 'link',label: 'Dashboard222',route: '//dashboards//analytics'}];
        // return any;
    }
    DeleteMenuGroup(Code) {
        console.log(this.apiUrl + 'authorization/menu/group/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Code);
        return this.http.delete(this.apiUrl + 'authorization/menu/group/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Code);
    }
    DeleteMenuUser(Code) {
        console.log(this.apiUrl + 'authorization/menu/user/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Code);
        return this.http.delete(this.apiUrl + 'authorization/menu/user/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Code);
    }
    PostMenuUser(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'authorization/menu/user');
        return this.http.post(this.apiUrl + 'authorization/menu/user', obj);
    }
    PostMenuTree(obj) {
        console.log(obj);
        // obj.Username=JSON.parse(sessionStorage.getItem('Username'));
        // obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'authorization/treeview');
        return this.http.post(this.apiUrl + 'authorization/treeview', obj);
    }
    PostMenuGroup(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'authorization/menu/group');
        return this.http.post(this.apiUrl + 'authorization/menu/group', obj);
    }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('apiUrl'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
AuthorizationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12256:
/*!*************************************************!*\
  !*** ./src/app/pages/services/login.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



class LoginService {
    constructor(apiUrl, http, router, ngZone) {
        this.apiUrl = apiUrl;
        this.http = http;
        this.router = router;
        this.ngZone = ngZone;
        this.showLoader = false;
    }
    ngOnInit() {
    }
    Login(obj) {
        console.log(this.apiUrl + 'login');
        return this.http.post(this.apiUrl + 'login', obj);
    }
    LoginGetMenu(Lng) {
        console.log(this.apiUrl + 'login/menu/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Lng);
        return this.http.get(this.apiUrl + 'login/menu/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Lng);
    }
    LoginGetLabels(Lng) {
        console.log(this.apiUrl + 'login/label/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Lng);
        return this.http.get(this.apiUrl + 'login/label/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Lng);
    }
    UpdateUserFavorite(obj) {
        console.log(this.apiUrl + 'login/favorite');
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        return this.http.post(this.apiUrl + 'login/favorite', obj);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('apiUrl'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 67208:
/*!********************************!*\
  !*** ./src/material.module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 42706);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 51965);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 76458);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 64744);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/portal */ 38252);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/scrolling */ 69691);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ 57197);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ 43037);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ 74634);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 80686);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ 9379);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 42132);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 71933);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ 21792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 85082);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ 95409);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 19372);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 97435);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ 51986);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ 35291);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 71232);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ 47727);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ 87909);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);













































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule] }); })();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map