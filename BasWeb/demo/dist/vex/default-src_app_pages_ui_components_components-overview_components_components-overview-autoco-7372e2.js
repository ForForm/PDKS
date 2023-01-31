"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_ui_components_components-overview_components_components-overview-autoco-7372e2"],{

/***/ 34137:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-autocomplete/components-overview-autocomplete.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewAutocompleteComponent": () => (/* binding */ ComponentsOverviewAutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 74172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-arrow-drop-down */ 19070);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 28554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 80686);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.directive */ 73839);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);

















function ComponentsOverviewAutocompleteComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", state_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", state_r4.flag, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](state_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Population: ", state_r4.population, "");
} }
function ComponentsOverviewAutocompleteComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComponentsOverviewAutocompleteComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.stateCtrl.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx_r2.icClose)("inline", true);
} }
function ComponentsOverviewAutocompleteComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx_r3.icArrowDropDown)("inline", true);
} }
class ComponentsOverviewAutocompleteComponent {
    constructor() {
        this.autocompleteHTML = `<mat-input-container>
  <mat-label>State</mat-label>
  <input type="text" matInput [matAutocomplete]="auto" [formControl]="stateCtrl">
  <mat-autocomplete #auto="matAutocomplete">
    <mat-option *ngFor="let option of options" [value]="option">
      {{ option }}
    </mat-option>
  </mat-autocomplete>
</mat-input-container>
`;
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    ngOnInit() {
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.filteredStates$ = this.stateCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(state => state ? this.filterStates(state) : this.states.slice()));
    }
    filterStates(name) {
        return this.states.filter(state => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
}
ComponentsOverviewAutocompleteComponent.ɵfac = function ComponentsOverviewAutocompleteComponent_Factory(t) { return new (t || ComponentsOverviewAutocompleteComponent)(); };
ComponentsOverviewAutocompleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComponentsOverviewAutocompleteComponent, selectors: [["vex-components-overview-autocomplete"]], decls: 41, vars: 8, consts: [["fxLayout", "column", "fxLayout.gt-sm", "row", 1, "card"], ["fxFlex", "none", 1, "p-6"], [1, "title", "mt-0", "mb-4"], [1, "w-300", "max-w-full"], ["matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 4, "ngIf"], ["fxFlex", "auto", 1, "border-l"], [1, "p-6"], [1, "body-2", "text-secondary", "m-0"], [1, "vex-tabs"], ["label", "DESCRIPTION"], [1, "m-0"], [1, "font-medium"], ["label", "SOURCE CODE"], [3, "vexHighlight"], [3, "value"], [1, "align-middle", "mr-4", "shadow-6", "h-6", "inline-block", 3, "src"], [1, "body-1"], [1, "text-hint"], [1, "caption", "text-secondary"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["size", "24px", 3, "icIcon", "inline"], ["mat-icon-button", "", "matSuffix", "", "type", "button"]], template: function ComponentsOverviewAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Select a State");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ComponentsOverviewAutocompleteComponent_mat_option_10_Template, 8, 4, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ComponentsOverviewAutocompleteComponent_button_12_Template, 2, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ComponentsOverviewAutocompleteComponent_button_13_Template, 2, 2, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Add this hint for a better UX!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Autocomplete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "<mat-autocomplete>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-tab-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Input text can be used with autocomplete to help users who have limited literacy or who write in a foreign language. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "For example, autocomplete can:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Suggest input as it\u2019s typed (refreshing suggestions with each keystroke)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Fill a field with default input text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Pressing the return button accepts the current autocomplete suggestion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.stateCtrl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 6, ctx.filteredStates$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stateCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.stateCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vexHighlight", ctx.autocompleteHTML);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTab, _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_2__.HighlightDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__.IconDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLW92ZXJ2aWV3LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 50627:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-autocomplete/components-overview-autocomplete.module.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsOverviewAutocompleteModule": () => (/* binding */ ComponentsOverviewAutocompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-overview-autocomplete.component */ 34137);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 80686);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ 81886);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);












class ComponentsOverviewAutocompleteModule {
}
ComponentsOverviewAutocompleteModule.ɵfac = function ComponentsOverviewAutocompleteModule_Factory(t) { return new (t || ComponentsOverviewAutocompleteModule)(); };
ComponentsOverviewAutocompleteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsOverviewAutocompleteModule });
ComponentsOverviewAutocompleteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsOverviewAutocompleteModule, { declarations: [_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewAutocompleteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.HighlightModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconModule], exports: [_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.ComponentsOverviewAutocompleteComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_ui_components_components-overview_components_components-overview-autoco-7372e2.js.map