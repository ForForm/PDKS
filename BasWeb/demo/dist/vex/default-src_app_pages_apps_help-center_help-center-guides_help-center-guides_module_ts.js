(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_apps_help-center_help-center-guides_help-center-guides_module_ts"],{

/***/ 24270:
/*!**********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-launch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path d=\"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 40516:
/*!****************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-movie-filter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path opacity=\".3\" d=\"M16.63 11.37L18 12l-1.37.63L16 14l-.63-1.37L14 12l1.37-.63L16 10H5.77L4.01 6.47V18h16v-8H16l.63 1.37zm-5.69 3.57L10 17l-.94-2.06L7 14l2.06-.94L10 11l.94 2.06L13 14l-2.06.94z\" fill=\"currentColor\"/><path d=\"M10 11l-.94 2.06L7 14l2.06.94L10 17l.94-2.06L13 14l-2.06-.94zm8.01-7l2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 1.99-.9 1.99-2V4h-3.99zm2 14h-16V6.47L5.77 10H16l-.63 1.37L14 12l1.37.63L16 14l.63-1.37L18 12l-1.37-.63L16 10h4.01v8z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 47853:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/apps/help-center/help-center-guides/help-center-guides-guide/help-center-guides-guide.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpCenterGuidesGuideComponent": () => (/* binding */ HelpCenterGuidesGuideComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_launch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-launch */ 24270);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 28554);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 75152);










class HelpCenterGuidesGuideComponent {
    constructor(guide) {
        this.guide = guide;
        this.icLaunch = _iconify_icons_ic_twotone_launch__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
    }
}
HelpCenterGuidesGuideComponent.ɵfac = function HelpCenterGuidesGuideComponent_Factory(t) { return new (t || HelpCenterGuidesGuideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
HelpCenterGuidesGuideComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HelpCenterGuidesGuideComponent, selectors: [["vex-help-center-guides-guide"]], decls: 26, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "mat-dialog-title", ""], ["fxFlex", "auto", 1, "title", "m-0"], ["mat-icon-button", "", "type", "button", 1, "text-secondary"], [3, "icIcon"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], [1, "-mx-6", "text-border"], ["fxLayout", "column", 1, "my-6"], ["align", "end"], ["cdkFocusInitial", "", "color", "primary", "mat-button", "", "mat-dialog-close", "", "type", "button"]], template: function HelpCenterGuidesGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "She packed her seven versalia, put her initial into the belt and made herself on the way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "CLOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.guide.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icLaunch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icIcon", ctx.icClose);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLWNlbnRlci1ndWlkZXMtZ3VpZGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2382:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/apps/help-center/help-center-guides/help-center-guides-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpCenterGuidesRoutingModule": () => (/* binding */ HelpCenterGuidesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _help_center_guides_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-center-guides.component */ 66720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _help_center_guides_component__WEBPACK_IMPORTED_MODULE_0__.HelpCenterGuidesComponent
    }
];
class HelpCenterGuidesRoutingModule {
}
HelpCenterGuidesRoutingModule.ɵfac = function HelpCenterGuidesRoutingModule_Factory(t) { return new (t || HelpCenterGuidesRoutingModule)(); };
HelpCenterGuidesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HelpCenterGuidesRoutingModule });
HelpCenterGuidesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HelpCenterGuidesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 66720:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/apps/help-center/help-center-guides/help-center-guides.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuideCategory": () => (/* binding */ GuideCategory),
/* harmony export */   "HelpCenterGuidesComponent": () => (/* binding */ HelpCenterGuidesComponent)
/* harmony export */ });
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@vex/utils/track-by */ 45007);
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ 42461);
/* harmony import */ var _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-movie-filter */ 40516);
/* harmony import */ var _help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-center-guides-guide/help-center-guides-guide.component */ 47853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/grid */ 92465);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 34357);












function HelpCenterGuidesComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HelpCenterGuidesComponent_a_10_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const guide_r4 = restoredCtx.$implicit; return guide_r4.onClick(guide_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", guide_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](guide_r4.label);
} }
function HelpCenterGuidesComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HelpCenterGuidesComponent_a_15_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const guide_r7 = restoredCtx.$implicit; return guide_r7.onClick(guide_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", guide_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](guide_r7.label);
} }
function HelpCenterGuidesComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HelpCenterGuidesComponent_a_20_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const guide_r10 = restoredCtx.$implicit; return guide_r10.onClick(guide_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", guide_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](guide_r10.label);
} }
function HelpCenterGuidesComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HelpCenterGuidesComponent_a_25_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const guide_r13 = restoredCtx.$implicit; return guide_r13.onClick(guide_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const guide_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", guide_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](guide_r13.label);
} }
var GuideCategory;
(function (GuideCategory) {
    GuideCategory[GuideCategory["firstSteps"] = 0] = "firstSteps";
    GuideCategory[GuideCategory["accountSettings"] = 1] = "accountSettings";
    GuideCategory[GuideCategory["apiHelp"] = 2] = "apiHelp";
    GuideCategory[GuideCategory["billing"] = 3] = "billing";
})(GuideCategory || (GuideCategory = {}));
class HelpCenterGuidesComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.guides = [
            {
                id: 1,
                label: 'How secure is my password?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 2,
                label: 'Can I change my username?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 3,
                label: 'How do I change my email?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__["default"],
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 4,
                label: 'Where can I change my timezone?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 5,
                label: 'How do I change my password?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__["default"],
                category: GuideCategory.accountSettings,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 6,
                label: 'Which technologies are used?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 7,
                label: 'How do I make a request?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__["default"],
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 8,
                label: 'What are the API Limits?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 9,
                label: 'How can I apply for the API?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__["default"],
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 10,
                label: 'When can I start developing?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.apiHelp,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 11,
                label: 'Can I get a refund?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 12,
                label: 'How do I pay?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__["default"],
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 13,
                label: 'Which payment methods are supported?',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__["default"],
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 14,
                label: 'Do I need to pay VAT?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 15,
                label: 'Where do I find my purchase code?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.billing,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 16,
                label: 'How do I download the template?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 17,
                label: 'Installation Guide',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__["default"],
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 18,
                label: 'Creating your first page',
                icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_2__["default"],
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 19,
                label: 'Customizing your template',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            },
            {
                id: 20,
                label: 'How do I contact support?',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__["default"],
                category: GuideCategory.firstSteps,
                onClick: guide => this.openDialog(guide)
            }
        ];
        this.accountSettings = this.guides.filter(guide => guide.category === GuideCategory.accountSettings);
        this.apiHelp = this.guides.filter(guide => guide.category === GuideCategory.apiHelp);
        this.billing = this.guides.filter(guide => guide.category === GuideCategory.billing);
        this.firstSteps = this.guides.filter(guide => guide.category === GuideCategory.firstSteps);
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackById;
    }
    ngOnInit() {
    }
    openDialog(guide) {
        this.dialog.open(_help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_3__.HelpCenterGuidesGuideComponent, {
            data: guide,
            width: '600px'
        });
    }
}
HelpCenterGuidesComponent.ɵfac = function HelpCenterGuidesComponent_Factory(t) { return new (t || HelpCenterGuidesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
HelpCenterGuidesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HelpCenterGuidesComponent, selectors: [["vex-help-center-guides"]], decls: 26, vars: 8, consts: [[1, "bg-card", "py-16", "px-gutter"], [1, "display-1", "mt-12", "mb-4", "text-center"], [1, "subheading-2", "text-hint", "text-center", "max-w-lg", "mx-auto", "m-0"], ["gdAlignColumns", "start start", "gdColumns", "1fr 1fr", "gdColumns.lt-md", "1fr", "gdGap", "24px", 1, "my-12", "container"], [1, "card", "max-w-full", "overflow-hidden", "p-3"], ["mat-subheader", ""], ["class", "rounded overflow-hidden", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-list-item", "", 1, "rounded", "overflow-hidden", 3, "click"], ["mat-list-icon", "", 3, "icIcon"], ["matLine", ""]], template: function HelpCenterGuidesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Guides");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "First Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, HelpCenterGuidesComponent_a_10_Template, 4, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "API Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HelpCenterGuidesComponent_a_15_Template, 4, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, HelpCenterGuidesComponent_a_20_Template, 4, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "First Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, HelpCenterGuidesComponent_a_25_Template, 4, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.accountSettings)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.apiHelp)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.billing)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.firstSteps)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__.DefaultGridAlignColumnsDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__.DefaultGridColumnsDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__.DefaultGridGapDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListSubheaderCssMatStyler, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListIconCssMatStyler, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatLine], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLWNlbnRlci1ndWlkZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 64103:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/apps/help-center/help-center-guides/help-center-guides.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpCenterGuidesModule": () => (/* binding */ HelpCenterGuidesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _help_center_guides_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-center-guides-routing.module */ 2382);
/* harmony import */ var _help_center_guides_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-center-guides.component */ 66720);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-center-guides-guide/help-center-guides-guide.component */ 47853);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);











class HelpCenterGuidesModule {
}
HelpCenterGuidesModule.ɵfac = function HelpCenterGuidesModule_Factory(t) { return new (t || HelpCenterGuidesModule)(); };
HelpCenterGuidesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HelpCenterGuidesModule });
HelpCenterGuidesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _help_center_guides_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpCenterGuidesRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HelpCenterGuidesModule, { declarations: [_help_center_guides_component__WEBPACK_IMPORTED_MODULE_1__.HelpCenterGuidesComponent, _help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_2__.HelpCenterGuidesGuideComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _help_center_guides_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpCenterGuidesRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_apps_help-center_help-center-guides_help-center-guides_module_ts.js.map