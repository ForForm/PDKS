(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_ui_components_components-overview_components_components-overview-cards_-2ef232"],{

/***/ 24836:
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-share.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<circle cx=\"18\" cy=\"5\" opacity=\".3\" r=\"1\" fill=\"currentColor\"/><circle cx=\"6\" cy=\"12\" opacity=\".3\" r=\"1\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"19.02\" opacity=\".3\" r=\"1\" fill=\"currentColor\"/><path d=\"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 45355:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewCardsComponent": () => (/* binding */ ComponentsOverviewCardsComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-share */ 24836);
/* harmony import */ var _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-favorite */ 10177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 73839);












class ComponentsOverviewCardsComponent {
    constructor() {
        this.cardHTML = `<mat-card>
  <mat-card-header>
    <img mat-card-avatar src="assets/img/avatars/3.jpg">
    <mat-card-subtitle>
      Yesterday
    </mat-card-subtitle>
    <mat-card-title>Gerald Morris</mat-card-title>
  </mat-card-header>
  <img mat-card-image src="assets/img/backgrounds/1.jpg">
  <mat-card-content>
    <p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. </p>
  </mat-card-content>
  <mat-divider></mat-divider>
  <mat-card-actions>
    <div fxLayout="row">
      <button mat-icon-button>
        <mat-icon>share</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon>favorite</mat-icon>
      </button>
      <span fxFlex></span>
      <button mat-button>
        More Info
      </button>
      <button mat-button>
        Save as
      </button>
    </div>
  </mat-card-actions>
</mat-card>`;
        this.icShare = _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.icFavorite = _iconify_icons_ic_twotone_favorite__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
    }
}
ComponentsOverviewCardsComponent.ɵfac = function ComponentsOverviewCardsComponent_Factory(t) { return new (t || ComponentsOverviewCardsComponent)(); };
ComponentsOverviewCardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComponentsOverviewCardsComponent, selectors: [["vex-components-overview-cards"]], decls: 40, vars: 3, consts: [["fxLayout", "column", "fxLayout.gt-sm", "row", 1, "card", "overflow-hidden"], [1, "p-6", "bg-app-bar"], [1, "title", "mt-0", "mb-4"], [1, "max-w-full"], ["mat-card-avatar", "", "src", "assets/img/avatars/3.jpg"], ["mat-card-image", "", "src", "assets/img/demo/mountain-cinematic.jpg"], ["fxLayout", "row"], ["color", "primary", "mat-icon-button", ""], [3, "icIcon"], ["color", "accent", "mat-icon-button", ""], ["fxFlex", ""], ["fxHide.xs", "", "mat-button", ""], ["color", "primary", "mat-button", ""], ["fxFlex", "", 1, "border-l"], [1, "p-6"], [1, "body-2", "text-secondary", "m-0"], [1, "vex-tabs"], ["label", "DESCRIPTION"], [1, "p-6", "m-0"], ["label", "SOURCE CODE"], [3, "vexHighlight"]], template: function ComponentsOverviewCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Yesterday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Gerald Morris");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "MORE INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "SAVE AS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "<mat-card>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-tab-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx.icShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx.icFavorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vexHighlight", ctx.cardHTML);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultShowHideDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_2__.HighlightDirective], styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%]:not(:first-child), .mat-card-title[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: -14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMtb3ZlcnZpZXctY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJjb21wb25lbnRzLW92ZXJ2aWV3LWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtc3VidGl0bGU6bm90KDpmaXJzdC1jaGlsZCksIC5tYXQtY2FyZC10aXRsZTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 44622:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.module.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewCardsModule": () => (/* binding */ ComponentsOverviewCardsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_overview_cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-cards.component */ 45355);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 78662);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 81886);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);











class ComponentsOverviewCardsModule {
}
ComponentsOverviewCardsModule.ɵfac = function ComponentsOverviewCardsModule_Factory(t) { return new (t || ComponentsOverviewCardsModule)(); };
ComponentsOverviewCardsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsOverviewCardsModule });
ComponentsOverviewCardsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule,
            _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewCardsModule, { declarations: [_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewCardsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule,
        _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconModule], exports: [_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewCardsComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_ui_components_components-overview_components_components-overview-cards_-2ef232.js.map