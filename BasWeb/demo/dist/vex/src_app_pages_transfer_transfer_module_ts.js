(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_transfer_transfer_module_ts"],{

/***/ 17452:
/*!**************************************************************!*\
  !*** ./node_modules/@iconify/icons-fa-solid/address-card.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path d=\"M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z\" fill=\"currentColor\"/>",
	"width": 576,
	"height": 512
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 92104:
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-fa-solid/mobile.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path d=\"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z\" fill=\"currentColor\"/>",
	"width": 320,
	"height": 512
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 85018:
/*!******************************************************************!*\
  !*** ./src/app/pages/transfer/transfer-definitions.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferDefinitionsComponent": () => (/* binding */ TransferDefinitionsComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../interfaces/util */ 10071);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ 70672);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 28554);
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ 74944);
/* harmony import */ var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-cloud-download */ 41916);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ 90588);
/* harmony import */ var _iconify_icons_ic_save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/save */ 32590);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ 78182);
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person */ 89271);
/* harmony import */ var _iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-my-location */ 31056);
/* harmony import */ var _iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-location-city */ 76409);
/* harmony import */ var _iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit-location */ 31250);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@vex/animations/stagger.animation */ 41238);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../@vex/animations/scale-fade-in.animation */ 69703);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_definitions_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/definitions.service */ 27104);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 9696);































function TransferDefinitionsComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function TransferDefinitionsComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](row_r10.ID);
} }
function TransferDefinitionsComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r2.languageMap["Kod"].labelName, " ");
} }
function TransferDefinitionsComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](row_r11.Code);
} }
function TransferDefinitionsComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r4.languageMap["Ad\u0131"].labelName, " ");
} }
function TransferDefinitionsComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](row_r12.Name);
} }
function TransferDefinitionsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", ctx_r6.defaults.Type !== "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r6.languageMap["KartNo"].labelName, " ");
} }
function TransferDefinitionsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hidden", ctx_r7.defaults.Type !== "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](row_r13.CardNo);
} }
function TransferDefinitionsComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 25);
} }
function TransferDefinitionsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function TransferDefinitionsComponent_tr_19_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r16); const row_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r15.select(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeInUp", undefined);
} }
class TransferDefinitionsComponent {
    // sub=false;
    constructor(defaults, dialogRef, fb, cd, definitionsService, adapter, snackbar) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.cd = cd;
        this.definitionsService = definitionsService;
        this.adapter = adapter;
        this.snackbar = snackbar;
        this.language = [];
        this.languageMap = {};
        this.columns = ['ID', 'Code', 'Name', 'CardNo'];
        this.mode = 'create';
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.icDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.icSave = _iconify_icons_ic_save__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.icMyLocation = _iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_9__["default"];
        this.icLocationCity = _iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_10__["default"];
        this.icEditLocation = _iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_11__["default"];
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.visible = false;
        this.label = '';
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    refresh() {
        this.cd.detectChanges();
    }
    getFlexGroupPersonelList(type) {
        if (type === "12") {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource();
            this.dataSource.data = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];
            this.refresh();
        }
        else {
            this.definitionsService.GetFlexGroupPersonelList(type)
                .subscribe((res) => {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource();
                this.dataSource.data = res;
                this.refresh();
                // this.searchCtrl.valueChanges.pipe(
                //   untilDestroyed(this)
                // ).subscribe(value => this.onFilterChange(value));
            });
        }
    }
    select(row) {
        // console.log(row);
        // if (this.defaults.Type != null) {
        this.defaults.Data.ID = row.ID;
        this.defaults.Data.Code = row.Code;
        this.defaults.Data.Name = row.Name;
        this.dialogRef.close(this.defaults.Data);
        // }
    }
    turkishCulture() {
        this.adapter.setLocale("tr");
    }
    ngOnInit() {
        this.turkishCulture();
        console.log(this.defaults);
        this.form = this.fb.group({});
        this.languageMap = _interfaces_util__WEBPACK_IMPORTED_MODULE_0__["default"].getLabels();
        if (this.defaults.Type === "13")
            this.getReasons('defaults');
        else
            this.getFlexGroupPersonelList(this.defaults.Type);
    }
    getReasons(type) {
        this.definitionsService.DefinitionGetConstants(type)
            .subscribe((res) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource();
            this.dataSource.data = res;
            this.refresh();
        });
    }
    waitProgress(message, timer) {
        this.snackbar.dismiss();
        let config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarConfig();
        if (timer !== undefined) {
            config.duration = timer;
        }
        config.panelClass = ['message-position'];
        this.snackbar.open(message, "", config);
    }
    save() {
        if (this.mode === 'create') {
            this.createDefinition();
        }
        else if (this.mode === 'update') {
            this.updateDefinition();
        }
    }
    createDefinition() {
        const definition = this.form.value;
        if (this.defaults.modul === 'code' && (definition.code === '' || definition.name === '')) {
            this.waitProgress("Kod ve açıklama alanı zorunludur...", 1000);
            return;
        }
        if (!definition.imageSrc) {
            definition.imageSrc = 'assets/img/avatars/1.jpg';
        }
        this.dialogRef.close(definition);
    }
    updateDefinition() {
        const definition = this.form.value;
        if (this.defaults.sub && this.defaults.modul === 'code' && (definition.subcode === '' || definition.subname === '')) {
            this.waitProgress("Alt Kod ve açıklama alanı zorunludur...", 1000);
            return;
        }
        definition.id = this.defaults.def.id;
        console.log(definition);
        this.dialogRef.close(definition);
    }
    isCreateMode() {
        return this.mode === 'create';
    }
    isUpdateMode() {
        return this.mode === 'update';
    }
}
TransferDefinitionsComponent.id = 100;
TransferDefinitionsComponent.ɵfac = function TransferDefinitionsComponent_Factory(t) { return new (t || TransferDefinitionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_definitions_service__WEBPACK_IMPORTED_MODULE_15__.DefinitionsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar)); };
TransferDefinitionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: TransferDefinitionsComponent, selectors: [["vex-transfer-definitions"]], inputs: { columns: "columns" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_FORMATS,
                useValue: {
                    parse: {
                        dateInput: ['l', 'LL'],
                    },
                    display: {
                        dateInput: 'L',
                        monthYearLabel: 'M YYYY',
                        dateA11yLabel: 'LL',
                        monthYearA11yLabel: 'MMMM YYYY',
                    },
                },
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__.MomentDateAdapter },
            { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__.MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
        ])], decls: 20, vars: 6, consts: [[3, "formGroup"], ["fxLayout", "row"], [2, "width", "100%"], ["matInput", "", "placeholder", "Filtre", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "ID"], ["hidden", "", "class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["hidden", "", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Code"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "CardNo"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 3, "hidden", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "hidden", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["class", "hover:bg-hover cursor-pointer", "style", "max-height: 120px;", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["hidden", "", "mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["hidden", "", "mat-cell", ""], [2, "font-size", "20px"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", ""], [2, "font-size", "11px"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase", 3, "hidden"], ["mat-cell", "", 3, "hidden"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "cursor-pointer", 2, "max-height", "120px", 3, "click"]], template: function TransferDefinitionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup", function TransferDefinitionsComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, TransferDefinitionsComponent_th_7_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, TransferDefinitionsComponent_td_8_Template, 3, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, TransferDefinitionsComponent_th_10_Template, 2, 1, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, TransferDefinitionsComponent_td_11_Template, 3, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](12, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, TransferDefinitionsComponent_th_13_Template, 2, 1, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, TransferDefinitionsComponent_td_14_Template, 3, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, TransferDefinitionsComponent_th_16_Template, 2, 2, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, TransferDefinitionsComponent_td_17_Template, 3, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, TransferDefinitionsComponent_tr_18_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, TransferDefinitionsComponent_tr_19_Template, 1, 1, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  margin: 0px !important;\n  font-size: smaller;\n}\n\n.mat-class[_ngcontent-%COMP%] {\n  font-size: 14px;\n  transform: scale(-1);\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ebeff5;\n  font-weight: bolder;\n}\n\n.mat-success[_ngcontent-%COMP%] {\n  background-color: green;\n  color: #fff;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: smaller;\n  padding: 0px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: smaller;\n  padding: 0px;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n  height: 30px !important;\n  font-size: smaller;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  font-size: 11pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyLWRlZmluaXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQU1BO0VBQ0EsZUFBQTtFQUFnQixvQkFBQTtBQUZoQjs7QUFNQTtFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7QUFIRDs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBUkY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFURjs7QUFZQTtFQUVBLHVCQUFBO0VBRUEsa0JBQUE7QUFYQTs7QUFlQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBWkYiLCJmaWxlIjoidHJhbnNmZXItZGVmaW5pdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG4gXHJcbiBcclxuXHJcbi5tYXQtY2xhc3Mge1xyXG5mb250LXNpemU6IDE0cHg7dHJhbnNmb3JtOiBzY2FsZSgtMSk7XHJcblxyXG59XHJcblxyXG4uaGlnaGxpZ2h0e1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2ViZWZmNTtcclxuIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxufVxyXG5cclxuIFxyXG5cclxuLm1hdC1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuIFxyXG4gXHJcbiBcclxuLm1hdC1jZWxsIHtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC8vIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuXHJcbn1cclxuLm1hdC1yb3cge1xyXG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdkNWViO1xyXG5oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuZm9udC1zaXplOiBzbWFsbGVyO1xyXG5cclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6MTFwdDtcclxufSJdfQ== */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__.stagger20ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_13__.fadeInUp400ms,
            _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_14__.scaleFadeIn400ms
        ] } });


/***/ }),

/***/ 24033:
/*!***********************************************************!*\
  !*** ./src/app/pages/transfer/transfer-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferRoutingModule": () => (/* binding */ TransferRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _transfer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer.component */ 99738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    {
        path: '',
        component: _transfer_component__WEBPACK_IMPORTED_MODULE_0__.TransferComponent,
        data: {
            toolbarShadowEnabled: true
        }
    }
];
class TransferRoutingModule {
}
TransferRoutingModule.ɵfac = function TransferRoutingModule_Factory(t) { return new (t || TransferRoutingModule)(); };
TransferRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TransferRoutingModule });
TransferRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TransferRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 99738:
/*!******************************************************!*\
  !*** ./src/app/pages/transfer/transfer.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferComponent": () => (/* binding */ TransferComponent),
/* harmony export */   "DemoDialogComponent": () => (/* binding */ DemoDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _interfaces_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../interfaces/util */ 10071);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 51590);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static-data/aio-table-data */ 48595);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ 50279);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/collections */ 28288);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@vex/animations/stagger.animation */ 41238);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 28554);
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-take-until-destroy */ 33618);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ 88767);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ 81784);
/* harmony import */ var _iconify_icons_fa_solid_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-fa-solid/database */ 55490);
/* harmony import */ var _iconify_icons_fa_solid_mobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-fa-solid/mobile */ 92104);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ 78182);
/* harmony import */ var _iconify_icons_fa_solid_address_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/address-card */ 17452);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ 90588);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _wait_wait_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../wait/wait.component */ 5043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/authorization.service */ 9695);
/* harmony import */ var _services_definitions_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/definitions.service */ 27104);
/* harmony import */ var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../@vex/services/layout.service */ 39011);
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/system.service */ 87137);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../@vex/components/page-layout/page-layout.component */ 52687);
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../@vex/components/page-layout/page-layout-content.directive */ 42774);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../@vex/components/page-layout/page-layout-header.directive */ 63068);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../@vex/components/breadcrumbs/breadcrumbs.component */ 68298);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! angular-split */ 77052);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
















// import icKey from '@iconify/icons-fa-solid/key';
// import icKey from '@iconify/icons-ic/src/vpn-key';

// import icSetings from '@iconify/icons-ic/src/settings';






































const _c0 = ["usrPaginator"];
function TransferComponent_vex_page_layout_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "vex-page-layout-header", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "vex-breadcrumbs", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "mat-button-toggle-group", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "mat-button-toggle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_vex_page_layout_header_1_Template_mat_button_toggle_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r38.resize("boxed"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "mat-button-toggle", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_vex_page_layout_header_1_Template_mat_button_toggle_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r40.resize("fullwidth"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("container", ctx_r0.layoutCtrl.value === "boxed")("px-gutter", ctx_r0.layoutCtrl.value === "fullwidth");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r0.languageMap["Veri Transfer"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("crumbs", ctx_r0.breadcrumbs);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formControl", ctx_r0.layoutCtrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", ctx_r0.languageMap["Ortala"].labelName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", ctx_r0.languageMap["Tam Ekran"].labelName, " ");
} }
function TransferComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_a_4_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r43); const link_r41 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r42.gotoTab(link_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r41 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.languageMap[link_r41.name].labelName, " ");
} }
function TransferComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-checkbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function TransferComponent_th_10_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return $event ? ctx_r44.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r2.activeLinkIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
} }
function TransferComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function TransferComponent_td_11_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r48); const row_r46 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return $event ? ctx_r47.detailToggleDb(row_r46) : null; })("click", function TransferComponent_td_11_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r3.activeLinkIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r46));
} }
function TransferComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r50.ID);
} }
function TransferComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r6.languageMap["Ad\u0131"].labelName, " ");
} }
function TransferComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r51.Name);
} }
function TransferComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r8.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r8.languageMap["Veritaban\u0131"].labelName, " ");
} }
function TransferComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r52 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r9.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r52.Database);
} }
function TransferComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r10.languageMap["Protokol"].labelName, " ");
} }
function TransferComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r53.Protocol);
} }
function TransferComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r12.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r12.languageMap["Sunucu"].labelName, " ");
} }
function TransferComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r54 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r13.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r54.Hostname);
} }
function TransferComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r14.languageMap["Kullan\u0131c\u0131 Ad\u0131"].labelName, " ");
} }
function TransferComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r55.Username);
} }
function TransferComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r16.languageMap["\u015Eifre"].labelName, " ");
} }
function TransferComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r56.Password);
} }
function TransferComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r18.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r18.languageMap["Tablo"].labelName, " ");
} }
function TransferComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r57 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r19.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r57.DbTable);
} }
function TransferComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "TransferID");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r58.TransferId);
} }
function TransferComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r22.languageMap["G/C"].labelName, " ");
} }
function TransferComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "mat-checkbox", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", row_r59.Inout);
} }
function TransferComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r24.languageMap["G"].labelName, " ");
} }
function TransferComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r60.InChar);
} }
function TransferComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r26.languageMap["C"].labelName, " ");
} }
function TransferComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r61.OutChar);
} }
function TransferComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r28.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r28.languageMap["Sorgu"].labelName, " ");
} }
function TransferComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r29.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r62.DbQuery);
} }
function TransferComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "tr", 62);
} }
const _c1 = function (a0) { return { "highlight": a0 }; };
function TransferComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_tr_52_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r65); const row_r63 = restoredCtx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r64.detailToggleSelect(row_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r63 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeInUp", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](2, _c1, row_r63 === ctx_r31.selectedRow));
} }
function TransferComponent_mat_dialog_content_55_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const services_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", services_r68.kodu);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", services_r68.adi, " ");
} }
function TransferComponent_mat_dialog_content_55_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const services_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", services_r69.adi);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", services_r69.adi, " ");
} }
const _c2 = function (a0) { return { "width": a0 }; };
function TransferComponent_mat_dialog_content_55_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-dialog-content", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "form", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_mat_dialog_content_55_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r70.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, " add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_mat_dialog_content_55_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r72.postSystemHostTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](12, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "mat-form-field", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "mat-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](17, TransferComponent_mat_dialog_content_55_mat_option_17_Template, 2, 2, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "mat-form-field", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](21, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "mat-form-field", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](25, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "mat-form-field", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "mat-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](30, TransferComponent_mat_dialog_content_55_mat_option_30_Template, 2, 2, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroup", ctx_r32.formTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r32.languageMap["Kaydet"].labelName.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](12, _c2, ctx_r32.isMobileLayout ? "80px" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r32.languageMap["Kaynak"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r32.fieldTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](14, _c2, ctx_r32.isMobileLayout ? "80px" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r32.languageMap["Ba\u015Flang\u0131\u00E7"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](16, _c2, ctx_r32.isMobileLayout ? "80px" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r32.languageMap["Uzunluk"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](18, _c2, ctx_r32.isMobileLayout ? "80px" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r32.languageMap["Hedef"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r32.transferColumns);
} }
function TransferComponent_mat_dialog_content_56_th_7_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-checkbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function TransferComponent_mat_dialog_content_56_th_7_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return $event ? ctx_r105.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", ctx_r73.selection.hasValue() && ctx_r73.isAllSelected())("indeterminate", ctx_r73.selection.hasValue() && !ctx_r73.isAllSelected());
} }
function TransferComponent_mat_dialog_content_56_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function TransferComponent_mat_dialog_content_56_td_8_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r109); const row_r107 = restoredCtx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return $event ? ctx_r108.detailToggle(row_r107) : null; })("click", function TransferComponent_mat_dialog_content_56_td_8_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r107 = ctx.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", ctx_r74.selection.isSelected(row_r107));
} }
function TransferComponent_mat_dialog_content_56_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r111.ID);
} }
function TransferComponent_mat_dialog_content_56_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r112.SystemTransferDbID);
} }
function TransferComponent_mat_dialog_content_56_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Kaynak");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r113.SourceField);
} }
function TransferComponent_mat_dialog_content_56_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Baslama");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r114.Start);
} }
function TransferComponent_mat_dialog_content_56_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Uzunluk");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r115.Length);
} }
function TransferComponent_mat_dialog_content_56_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Hedef");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r116.DestinationField);
} }
function TransferComponent_mat_dialog_content_56_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r87.languageMap["Aksiyon"].labelName, "");
} }
function TransferComponent_mat_dialog_content_56_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_mat_dialog_content_56_td_29_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r119); const row_r117 = restoredCtx.$implicit; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r118.deleteSystemHostTable(row_r117); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "mat-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icIcon", ctx_r88.icDelete);
} }
function TransferComponent_mat_dialog_content_56_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "tr", 62);
} }
const _c3 = function (a0) { return { "selected": a0 }; };
function TransferComponent_mat_dialog_content_56_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "tr", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_mat_dialog_content_56_tr_31_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r122); const row_r120 = restoredCtx.$implicit; const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r121.detailToggleTbl(row_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r120 = ctx.$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeInUp", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](2, _c3, ctx_r90.selectionTbl.isSelected(row_r120)));
} }
function TransferComponent_mat_dialog_content_56_th_36_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-checkbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function TransferComponent_mat_dialog_content_56_th_36_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return $event ? ctx_r123.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", ctx_r91.selection.hasValue() && ctx_r91.isAllSelected())("indeterminate", ctx_r91.selection.hasValue() && !ctx_r91.isAllSelected());
} }
function TransferComponent_mat_dialog_content_56_td_37_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function TransferComponent_mat_dialog_content_56_td_37_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r127); const row_r125 = restoredCtx.$implicit; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return $event ? ctx_r126.detailToggle(row_r125) : null; })("click", function TransferComponent_mat_dialog_content_56_td_37_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r125 = ctx.$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", ctx_r92.selection.isSelected(row_r125));
} }
function TransferComponent_mat_dialog_content_56_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r129.ID);
} }
function TransferComponent_mat_dialog_content_56_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Kod");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r130.Code);
} }
function TransferComponent_mat_dialog_content_56_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Ad\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r131.Name);
} }
function TransferComponent_mat_dialog_content_56_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "G/C");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_56_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r132.Type);
} }
function TransferComponent_mat_dialog_content_56_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r101.languageMap["Aksiyon"].labelName, "");
} }
function TransferComponent_mat_dialog_content_56_td_52_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_mat_dialog_content_56_td_52_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r135); const row_r133 = restoredCtx.$implicit; const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r134.deleteSystemHostTable(row_r133); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "mat-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icIcon", ctx_r102.icDelete);
} }
function TransferComponent_mat_dialog_content_56_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "tr", 62);
} }
function TransferComponent_mat_dialog_content_56_tr_54_Template(rf, ctx) { if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "tr", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_mat_dialog_content_56_tr_54_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r138); const row_r136 = restoredCtx.$implicit; const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r137.detailToggleTbl(row_r136); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r136 = ctx.$implicit;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeInUp", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](2, _c3, ctx_r104.selectionTbl.isSelected(row_r136)));
} }
const _c4 = function (a0) { return { "height": a0 }; };
function TransferComponent_mat_dialog_content_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-dialog-content", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "as-split", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "as-split-area", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](6, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, TransferComponent_mat_dialog_content_56_th_7_Template, 2, 2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, TransferComponent_mat_dialog_content_56_td_8_Template, 2, 1, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](9, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](10, TransferComponent_mat_dialog_content_56_th_10_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, TransferComponent_mat_dialog_content_56_td_11_Template, 3, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](12, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, TransferComponent_mat_dialog_content_56_th_13_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](14, TransferComponent_mat_dialog_content_56_td_14_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](15, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](16, TransferComponent_mat_dialog_content_56_th_16_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](17, TransferComponent_mat_dialog_content_56_td_17_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](18, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](19, TransferComponent_mat_dialog_content_56_th_19_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](20, TransferComponent_mat_dialog_content_56_td_20_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](21, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, TransferComponent_mat_dialog_content_56_th_22_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, TransferComponent_mat_dialog_content_56_td_23_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](24, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](25, TransferComponent_mat_dialog_content_56_th_25_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](26, TransferComponent_mat_dialog_content_56_td_26_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](27, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](28, TransferComponent_mat_dialog_content_56_th_28_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, TransferComponent_mat_dialog_content_56_td_29_Template, 3, 1, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](30, TransferComponent_mat_dialog_content_56_tr_30_Template, 1, 0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](31, TransferComponent_mat_dialog_content_56_tr_31_Template, 1, 4, "tr", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "as-split-area", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](35, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](36, TransferComponent_mat_dialog_content_56_th_36_Template, 2, 2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](37, TransferComponent_mat_dialog_content_56_td_37_Template, 2, 1, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](38, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](39, TransferComponent_mat_dialog_content_56_th_39_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](40, TransferComponent_mat_dialog_content_56_td_40_Template, 3, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](41, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](42, TransferComponent_mat_dialog_content_56_th_42_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](43, TransferComponent_mat_dialog_content_56_td_43_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](44, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](45, TransferComponent_mat_dialog_content_56_th_45_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](46, TransferComponent_mat_dialog_content_56_td_46_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](47, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](48, TransferComponent_mat_dialog_content_56_th_48_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](49, TransferComponent_mat_dialog_content_56_td_49_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](50, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](51, TransferComponent_mat_dialog_content_56_th_51_Template, 2, 1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](52, TransferComponent_mat_dialog_content_56_td_52_Template, 3, 1, "td", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](53, TransferComponent_mat_dialog_content_56_tr_53_Template, 1, 0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](54, TransferComponent_mat_dialog_content_56_tr_54_Template, 1, 4, "tr", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](12, _c4, ctx_r33.isMobileLayout ? null : ctx_r33.subFooter ? "calc(45vh - 50px)" : "calc(45vh)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("direction", ctx_r33.isMobileLayout ? "vertical" : "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("size", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", ctx_r33.dataSourceTbl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matHeaderRowDef", ctx_r33.columnsTbl)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matRowDefColumns", ctx_r33.columnsTbl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("size", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", ctx_r33.dataSourceDvc);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matHeaderRowDef", ctx_r33.columnsDvc)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matRowDefColumns", ctx_r33.columnsDvc);
} }
const _c5 = function (a0, a1) { return { "backgroundColor": a0, "color": a1 }; };
function TransferComponent_nav_57_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_nav_57_div_1_a_1_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r147); const link_r145 = restoredCtx.$implicit; const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return ctx_r146.gotoTab2(link_r145); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r145 = ctx.$implicit;
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction2"](3, _c5, link_r145.Index === ctx_r144.activeLinkIndex2 ? "#5C77FF " : "#EBEBEE", link_r145.Index === ctx_r144.activeLinkIndex2 ? "white" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r144.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r144.languageMap[link_r145.name].labelName);
} }
function TransferComponent_nav_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, TransferComponent_nav_57_div_1_a_1_Template, 3, 6, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r139.links2);
} }
function TransferComponent_nav_57_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Kaynak");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_nav_57_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_nav_57_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r150); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r149.getSourceData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, TransferComponent_nav_57_button_3_span_1_Template, 2, 0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "mat-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, " Getir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx_r140.SystemTransferDbID == null || ctx_r140.dGetir);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r140.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icIcon", ctx_r140.icDatabase);
} }
function TransferComponent_nav_57_button_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Kaynak ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_nav_57_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_nav_57_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r153); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r152.controlSourceData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, TransferComponent_nav_57_button_5_span_1_Template, 2, 0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "mat-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, " Hata ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx_r141.SystemTransferDbID == null || ctx_r141.dKaynak);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r141.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icIcon", ctx_r141.icDatabase);
} }
function TransferComponent_nav_57_button_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Kaynak ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_nav_57_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_nav_57_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r156); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r155.postSourceData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, TransferComponent_nav_57_button_7_span_1_Template, 2, 0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "mat-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, " Aktar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx_r142.SystemTransferDbID == null || ctx_r142.dAktar);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r142.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icIcon", ctx_r142.icDatabase);
} }
function TransferComponent_nav_57_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "span", 69);
} }
function TransferComponent_nav_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "nav", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, TransferComponent_nav_57_div_1_Template, 2, 1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, TransferComponent_nav_57_button_3_Template, 4, 3, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, TransferComponent_nav_57_button_5_Template, 4, 3, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, TransferComponent_nav_57_button_7_Template, 4, 3, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, TransferComponent_nav_57_span_9_Template, 1, 0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r34.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r34.activeLinkIndex2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r34.activeLinkIndex2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r34.activeLinkIndex2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r34.isMobileLayout);
} }
const _c6 = function () { return [5, 10, 20, 50, 100]; };
function TransferComponent_mat_paginator_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "mat-paginator", 114, 115);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](1, _c6));
} }
function TransferComponent_mat_progress_bar_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "mat-progress-bar", 116);
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r36.progresValue);
} }
function TransferComponent_mat_dialog_content_60_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-checkbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function TransferComponent_mat_dialog_content_60_th_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return $event ? ctx_r178.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", ctx_r158.selection.hasValue() && ctx_r158.isAllSelected())("indeterminate", ctx_r158.selection.hasValue() && !ctx_r158.isAllSelected());
} }
function TransferComponent_mat_dialog_content_60_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function TransferComponent_mat_dialog_content_60_td_4_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r182); const row_r180 = restoredCtx.$implicit; const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return $event ? ctx_r181.detailToggle(row_r180) : null; })("click", function TransferComponent_mat_dialog_content_60_td_4_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r180 = ctx.$implicit;
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", ctx_r159.selection.isSelected(row_r180));
} }
function TransferComponent_mat_dialog_content_60_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_60_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r184 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r184.ID);
} }
function TransferComponent_mat_dialog_content_60_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " EmployeeID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_60_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r185 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r185.EmployeeID);
} }
function TransferComponent_mat_dialog_content_60_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_60_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r186 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r186.Device);
} }
function TransferComponent_mat_dialog_content_60_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " NewDateTime ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_60_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r187 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r187.NewDateTime);
} }
function TransferComponent_mat_dialog_content_60_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Barcode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_60_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r188 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r188.Barcode);
} }
function TransferComponent_mat_dialog_content_60_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_60_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r189 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r189.Type);
} }
function TransferComponent_mat_dialog_content_60_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " ReasonID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_60_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r190 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r190.ReasonID);
} }
function TransferComponent_mat_dialog_content_60_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Hata ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function TransferComponent_mat_dialog_content_60_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r191 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](row_r191.Exception);
} }
function TransferComponent_mat_dialog_content_60_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "tr", 127);
} }
function TransferComponent_mat_dialog_content_60_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "tr", 128);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeInUp", undefined);
} }
function TransferComponent_mat_dialog_content_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "mat-dialog-content", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, TransferComponent_mat_dialog_content_60_th_3_Template, 2, 2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, TransferComponent_mat_dialog_content_60_td_4_Template, 2, 1, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](5, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, TransferComponent_mat_dialog_content_60_th_6_Template, 2, 0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, TransferComponent_mat_dialog_content_60_td_7_Template, 3, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](8, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, TransferComponent_mat_dialog_content_60_th_9_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](10, TransferComponent_mat_dialog_content_60_td_10_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](11, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](12, TransferComponent_mat_dialog_content_60_th_12_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, TransferComponent_mat_dialog_content_60_td_13_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](14, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](15, TransferComponent_mat_dialog_content_60_th_15_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](16, TransferComponent_mat_dialog_content_60_td_16_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](17, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](18, TransferComponent_mat_dialog_content_60_th_18_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](19, TransferComponent_mat_dialog_content_60_td_19_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](20, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, TransferComponent_mat_dialog_content_60_th_21_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, TransferComponent_mat_dialog_content_60_td_22_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](23, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](24, TransferComponent_mat_dialog_content_60_th_24_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](25, TransferComponent_mat_dialog_content_60_td_25_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](26, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](27, TransferComponent_mat_dialog_content_60_th_27_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](28, TransferComponent_mat_dialog_content_60_td_28_Template, 3, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, TransferComponent_mat_dialog_content_60_tr_29_Template, 1, 0, "tr", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](30, TransferComponent_mat_dialog_content_60_tr_30_Template, 1, 1, "tr", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](5, _c4, ctx_r37.isMobileLayout ? "calc(35vh)" : ctx_r37.subFooter ? "calc(92vh - 480px)" : "calc(97vh - 480px)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", ctx_r37.dataSourceData);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matHeaderRowDef", ctx_r37.columnsData)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matRowDefColumns", ctx_r37.columnsData);
} }
const _c7 = function (a0, a1) { return { "margin-top": a0, "width": a1 }; };
class TransferComponent {
    constructor(data, route, authorizationService, definitionsService, layoutService, systemService, fb, dialog, snackbar, router, adapter, location) {
        this.data = data;
        this.route = route;
        this.authorizationService = authorizationService;
        this.definitionsService = definitionsService;
        this.layoutService = layoutService;
        this.systemService = systemService;
        this.fb = fb;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.router = router;
        this.adapter = adapter;
        this.language = [];
        this.languageMap = {};
        this.activeLinkIndex = 0;
        this.activeLinkIndex2 = 0;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('boxed');
        this.columns = ['Checkbox', 'ID', 'Name', 'Database', 'Protocol', 'Hostname', 'Username', 'Password', 'Inout', 'Repeat', 'Actions'];
        this.columnsTbl = ['Checkbox', 'ID', 'SourceField', 'SystemTransferDbID', 'Start', 'Length', 'DestinationField', 'Actions'];
        this.columnsDvc = ['Checkbox', 'ID', 'Code', 'Name', 'Type', 'Actions'];
        this.columnsDb = ['Checkbox', 'ID', 'Name', 'Database', 'Protocol', 'Hostname', 'Username', 'Password', 'DbTable', 'TransferId', 'Inout', 'InChar', 'OutChar', 'DbQuery'];
        this.columnsData = ['Checkbox', 'ID', 'EmployeeID', 'Device', 'NewDateTime', 'Barcode', 'Type', 'ReasonID', 'Exception'];
        this.links = [];
        this.links2 = [];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 20, 50];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_24__.SelectionModel(true, []);
        this.selectionTbl = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_24__.SelectionModel(true, []);
        this.fieldTypes = [];
        this.transferColumns = [];
        this.SystemTransferDbID = null;
        this.SystemDatabaseID = null;
        this.SystemDatabaseTable = null;
        this.SystemDatabaseQuery = null;
        this.hEmployeeID = false;
        this.hDevice = false;
        this.hNewDateTime = false;
        this.hBarcode = false;
        this.hType = false;
        this.hReasonID = false;
        this.dAktar = true;
        this.dKaynak = true;
        this.dGetir = true;
        this.Inout = false;
        this.InChar = '';
        this.OutChar = '';
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl();
        this.searchStr = this.searchCtrl.valueChanges;
        this.labels = _static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_1__.aioTableLabels;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.pageauth = { write: false, delete: false, update: false };
        // icKey = icKey;
        this.icDatabase = _iconify_icons_fa_solid_database__WEBPACK_IMPORTED_MODULE_8__["default"];
        // icSetings = icSetings;
        this.icMobile = _iconify_icons_fa_solid_mobile__WEBPACK_IMPORTED_MODULE_9__["default"];
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_10__["default"];
        this.icId = _iconify_icons_fa_solid_address_card__WEBPACK_IMPORTED_MODULE_11__["default"];
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_12__["default"];
        this.isMobileLayout = false;
        this.selectedRow = 0;
    }
    resize(type) {
        if (type == 'fullwidth')
            this.layoutService.collapseSidenav();
        else
            this.layoutService.expandSidenav();
    }
    ngOnInit() {
        window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; };
        this.isMobileLayout = window.innerWidth <= 991;
        this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
        this.form = this.fb.group({ ID: 0, Code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required], Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required], Password: [''], IsAdmin: [''] });
        this.turkishCulture();
        this.form = this.fb.group({
            ID: null, Name: null, Database: null, Protocol: null, Hostname: null, DUsername: null, Password: null, Repeat: null, Inout: null
        });
        this.formDatabase = this.fb.group({
            ID: null, Name: null, Database: null, Protocol: null, Hostname: null, DUsername: null, Password: null, DbTable: null, TransferType: null, Inout: null, InChar: null, OutChar: null, DbQuery: null
        });
        this.formTable = this.fb.group({
            ID: null, SystemTransferDbID: null, SourceField: null, Start: null, Length: null, DestinationField: null
        });
        this.route.paramMap.subscribe(params => {
            this.type = params.get("type");
            this.languageMap = _interfaces_util__WEBPACK_IMPORTED_MODULE_0__["default"].getLabels();
            this.href = this.router.url;
            this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'));
            this.breadcrumbs = [this.languageMap['Parametreler'].labelName, this.languageMap['Genel Parametreler'].labelName, this.languageMap['Veri Transfer'].labelName];
            // this.definitionGetShiftGroup();
            if (this.type !== "data") {
                this.links.push({ Index: 0, name: "DB Sistem Tanımı" });
                this.activeLinkIndex = 0;
            }
            else if (this.type == "data") {
                this.links.push({ Index: 1, name: "Hareket Transfer" });
                this.activeLinkIndex = 1;
            }
            this.links2.push({ Index: 0, name: "Kaynak Veri" });
            // this.links2.push({ Index: 1, name: "Kaynak Hata" });
            this.getInfo();
            this.getDevices();
        });
    }
    showWaitScreen(observable) {
        let dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_13__.WaitComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        let subscription = observable.subscribe((response) => {
            subscription.unsubscribe();
            dialogRef.close();
        }, (error) => {
            subscription.unsubscribe();
            dialogRef.close();
        });
    }
    ngAfterViewInit() {
        // this.dataSourceData.paginator = this.usrPaginator;
        // this.dataSource.sort = this.sort;
    }
    myObservable(observer) {
        setTimeout(() => {
            observer.next("");
            observer.complete();
        }, 2000);
    }
    GetTransferColumnName(row) {
        // console.log(row.DbTable.split(".")[0]);
        // console.log(row.DbTable.split(".")[1]);
        this.systemService.GetTransferColumnName(row.DbTable.split(".")[0], row.DbTable.split(".")[1])
            .subscribe((res) => {
            this.transferColumns = [];
            Object.keys(res).forEach((key) => {
                let data = { adi: res[key].COLUMN_NAME };
                this.transferColumns.push(data);
            });
            // this.fieldTypes.push({ adi: "EmployeeID" });
            //     console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getDevices() {
        return this.systemService.GetDevices(0)
            .subscribe((res) => {
            this.dataSourceDvc = new _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableDataSource();
            this.dataSourceDvc.data = res;
            // this.dataSourceDvc.paginator = this.usrPaginator;
            // if (this.dataSourceData.data.length == 0) this.dKaynak = true; else this.dKaynak = false;
            // this.progresValue = this.progresValue + (100 / this.selection.selected.length);
        }, err => {
            console.log(err);
            // this.dKaynak = true;
        });
    }
    GetSourceDataAsyc(i, y) {
        return this.systemService.GetSourceData(y)
            .toPromise().then((res) => {
            console.log(res);
            if (i == 0 && res !== null)
                this.dataSourceArray = res;
            else
                this.dataSourceArray = this.dataSourceArray.concat(res);
            // this.dataSourceData = new MatTableDataSource();
            // this.dataSourceData.data = res;
            // this.dataSourceData.paginator = this.usrPaginator;
            // if (this.dataSourceData.data.length == 0) this.dKaynak = true; else this.dKaynak = false;
            // this.progresValue = this.progresValue + (100 / this.selection.selected.length);
        }, err => {
            console.log(err);
            this.dKaynak = true;
        });
        // return this.dataSourceArray;
    }
    getSourceData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__awaiter)(this, void 0, void 0, function* () {
            // let observable = new Observable(this.myObservable);
            // this.showWaitScreen(observable);
            // console.log(this.selection.selected);
            const dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_13__.WaitComponent, {
                panelClass: 'transparent',
                disableClose: true
            });
            this.progresValue = 0;
            // this.dataSourceData = null;
            // await this.GetSourceDataAsyc();
            // debugger;
            this.dataSourceArray = null;
            this.dataSourceData = null;
            // this.dataSourceData = null;
            console.log(this.selection.selected);
            var unique = [];
            var distinct = [];
            for (let i = 0; i < this.selection.selected.length; i++) {
                if (!unique[this.selection.selected[i].ID]) {
                    distinct.push(this.selection.selected[i].ID);
                    unique[this.selection.selected[i].ID] = 1;
                }
            }
            for (let i = 0; i < distinct.length; i++) {
                // this.detailToggleDb(this.selection.selected[i]);
                this.getSystemHostTable(distinct[i].ID);
                yield this.GetSourceDataAsyc(i, this.dataSourceTbl.data);
            }
            // console.log(this.dataSourceArray);
            this.dataSourceData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableDataSource();
            this.dataSourceData.data = this.dataSourceArray;
            this.dataSourceData.paginator = this.usrPaginator;
            this.dKaynak = false;
            dialogRef.close();
        });
    }
    controlSourceData() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_27__.Observable(this.myObservable);
        this.showWaitScreen(observable);
        this.systemService.ControlSourceData(this.dataSourceData.data)
            .subscribe((res) => {
            this.dataSourceData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableDataSource();
            this.dataSourceData.data = res;
            if (res.length == 0)
                this.dAktar = false;
            else
                this.dAktar = true;
            // this.dataSourceData = new MatTableDataSource();
            // this.dataSourceData.data = res;
            // this.progresValue = this.progresValue + (100 / this.selection.selected.length);
        }, err => {
            console.log(err);
        });
    }
    postSourceData() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_27__.Observable(this.myObservable);
        this.showWaitScreen(observable);
        this.dAktar = true;
        this.dKaynak = true;
        // let obj = { SystemDatabaseID: this.SystemDatabaseID, SystemDatabaseTable: this.SystemDatabaseTable };
        console.log(this.dataSource.data);
        this.systemService.PostSourceData(this.dataSource.data)
            .subscribe((res) => {
            this.getInfo();
            this.progresValue = 100;
            // this.dataSourceData = new MatTableDataSource();
            // this.dataSourceData.data = res;
            // this.progresValue = this.progresValue + (100 / this.selection.selected.length);
        }, err => {
            console.log(err);
        });
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    detailToggleSelect(row) {
        this.selectedRow = this.selectedRow === row ? null : row;
        this.dataSourceData = null;
        this.GetTransferColumnName(row);
        // this.selection.clear();
        this.SystemDatabaseID = row.ID;
        this.SystemDatabaseTable = row.DbTable;
        // this.SystemDatabaseQuery = row.DbTable;
        this.Inout = row.Inout;
        this.InChar = row.InChar;
        this.OutChar = row.OutChar;
        this.getSystemHostTable(row.ID);
        this.fieldTypes = [];
        this.fieldTypes.push({ kodu: "EmployeeID", adi: "Sicil ID" });
        this.fieldTypes.push({ kodu: "Device", adi: "Cihaz ID" });
        this.fieldTypes.push({ kodu: "NewDateTime", adi: "Tarih" });
        this.fieldTypes.push({ kodu: "Barcode", adi: "Barkod" });
        if (row.Inout)
            this.fieldTypes.push({ kodu: "Type", adi: "G/C" });
        this.fieldTypes.push({ kodu: "ReasonID", adi: "Neden ID" });
        // this.formDatabase.patchValue({
        //   ID: row.ID, Name: row.Name, Database: row.Database, Protocol: row.Protocol, Hostname: row.Hostname, DUsername: row.Username, Password: row.Password, DbTable: row.DbTable, TransferType: row.TransferType,
        //   Inout: row.Inout, InChar: row.InChar, OutChar: row.OutChar, DbQuery: row.DbQuery
        // });
        this.SystemTransferDbID = row.ID;
        this.formTable.patchValue({ ID: null, SystemTransferDbID: row.ID, SourceField: null, Start: null, Length: null, DestinationField: null });
    }
    detailToggleDb(row) {
        // this.selection.toggle(row);
        this.selectedRow = this.selectedRow === row ? null : row;
        this.dataSourceData = null;
        this.selection.toggle(row);
        this.GetTransferColumnName(row);
        // this.selection.clear();
        this.SystemDatabaseID = row.ID;
        this.SystemDatabaseTable = row.DbTable;
        // this.SystemDatabaseQuery = row.DbTable;
        this.Inout = row.Inout;
        this.InChar = row.InChar;
        this.OutChar = row.OutChar;
        this.getSystemHostTable(row.ID);
        this.fieldTypes = [];
        this.fieldTypes.push({ kodu: "EmployeeID", adi: "Sicil ID" });
        this.fieldTypes.push({ kodu: "Device", adi: "Cihaz ID" });
        this.fieldTypes.push({ kodu: "NewDateTime", adi: "Tarih" });
        this.fieldTypes.push({ kodu: "Barcode", adi: "Barkod" });
        if (row.Inout)
            this.fieldTypes.push({ kodu: "Type", adi: "G/C" });
        this.fieldTypes.push({ kodu: "ReasonID", adi: "Neden ID" });
        // this.formDatabase.patchValue({
        //   ID: row.ID, Name: row.Name, Database: row.Database, Protocol: row.Protocol, Hostname: row.Hostname, DUsername: row.Username, Password: row.Password, DbTable: row.DbTable, TransferType: row.TransferType,
        //   Inout: row.Inout, InChar: row.InChar, OutChar: row.OutChar, DbQuery: row.DbQuery
        // });
        this.SystemTransferDbID = row.ID;
        this.formTable.patchValue({ ID: null, SystemTransferDbID: row.ID, SourceField: null, Start: null, Length: null, DestinationField: null });
        if (this.selection.selected.length > 0)
            this.dGetir = false;
        else {
            this.dGetir = true;
            this.dKaynak = true;
        }
    }
    detailToggleTbl(row) {
        this.selectionTbl.clear();
        this.selectionTbl.toggle(row);
        this.formTable.patchValue({ ID: row.ID, SystemTransferDbID: row.SystemTransferDbID, SourceField: row.SourceField, Start: row.Start, Length: row.Length, DestinationField: row.DestinationField });
    }
    getSystemHostTable(ID) {
        // if (this.dataSourceData!==null)
        // {
        //   if (this.usrPaginator!==null)
        //   this.usrPaginator=null
        //   this.dataSourceData.paginator = null;
        // }
        this.systemService.GetSystemHostTable(ID)
            .subscribe((res) => {
            this.dataSourceTbl = new _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableDataSource();
            this.dataSourceTbl.data = res;
            // console.log(this.dataSourceTbl.data);
            this.hEmployeeID = this.dataSourceTbl.data.find(obj => obj.SourceField === "EmployeeID") == undefined ? true : false;
            this.hDevice = this.dataSourceTbl.data.find(obj => obj.SourceField === "Device") == undefined ? true : false;
            this.hNewDateTime = this.dataSourceTbl.data.find(obj => obj.SourceField === "NewDateTime") == undefined ? true : false;
            this.hBarcode = this.dataSourceTbl.data.find(obj => obj.SourceField === "Barcode") == undefined ? true : false;
            this.hType = this.dataSourceTbl.data.find(obj => obj.SourceField === "Type") == undefined ? true : false;
            this.hReasonID = this.dataSourceTbl.data.find(obj => obj.SourceField === "ReasonID") == undefined ? true : false;
            // hDevice=false;hNewDateTime=false;hBarcode=false;hType=false;hReasonID=false;
            // console.log(this.dataSourceTbl.data.find(obj => obj.SourceField === "Device"));
        }, err => {
            console.log(err);
        });
    }
    textChange(field, row, e) {
        if (field == "Length")
            row.Length = e.target.value;
        else if (field == "Start")
            row.Start = e.target.value;
        else if (field == "DestinationField")
            row.DestinationField = e.target.value;
        // console.log(e);
        // console.log(e.target.value);
    }
    postSystemHostTable() {
        const row = this.formTable.value;
        this.systemService.PostSystemHostTable(row)
            .subscribe((res) => {
            this.getSystemHostTable(row.SystemTransferDbID);
        });
    }
    deleteSystemHostTable(row) {
        this.systemService.DeleteSystemHostTable(row.ID)
            .subscribe((res) => {
            this.clear();
            this.getSystemHostTable(row.SystemTransferDbID);
        });
    }
    gotoTab(link) {
        this.activeLinkIndex = link.Index;
        // this.selection=null;
        this.dataSourceData = null;
        this.dataSourceTbl = null;
        this.dGetir = true;
        this.dKaynak = true;
        this.dAktar = true;
        this.getInfo();
    }
    gotoTab2(link) {
        this.activeLinkIndex2 = link.Index;
        console.log(link);
    }
    turkishCulture() {
        this.adapter.setLocale("tr");
    }
    getInfo() {
        // if (this.activeLinkIndex == 0) {
        //   this.systemService.GetSystemHost()
        //     .subscribe((res: any[]) => {
        //       this.dataSource = new MatTableDataSource();
        //       this.dataSource.data = res;
        //     }, err => {
        //       console.log(err);
        //     });
        // }
        // else 
        // if (this.activeLinkIndex == 0) {
        this.dataSourceData = null;
        this.dataSourceTbl = null;
        // this.dataSourceData.paginator=null;
        this.systemService.GetSystemDatabase()
            .subscribe((res) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableDataSource();
            this.dataSource.data = res;
        }, err => {
            console.log(err);
        });
        // }
        // else if (this.activeLinkIndex == 1) {
        //   this.systemService.GetSystemFile()
        //     .subscribe((res: any[]) => {
        //       this.dataSource = new MatTableDataSource();
        //       this.dataSource.data = res;
        //     }, err => {
        //       console.log(err);
        //     });
        // }
    }
    formReset(form) {
        form.reset();
        // Object.keys(form.controls).forEach(key => {
        //   form.get(key).setErrors(null) ;
        // });
    }
    add() {
        this.formReset(this.form);
        this.form.patchValue({ ID: 0 });
    }
    save() {
        if (this.form.invalid) {
            return;
        }
        this.postUser(this.form.value);
        // console.log(this.form.value);
    }
    delete(row) {
        this.openDialog(row.ID);
    }
    openDialog(ID) {
        this.dialog.open(DemoDialogComponent, {
            data: {
                temp1: this.languageMap['Amir bilgisi silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
                Hayir: this.languageMap['Hayır'].labelName
            },
            disableClose: false,
            width: '400px'
        }).afterClosed().subscribe(result => {
            this.result = result;
            if (this.result === "Yes") {
                this.deleteUser(ID);
            }
        });
    }
    selectRow(row) {
        // console.log(row);
        this.form.patchValue({ ID: row.ID, Code: row.Code, Name: row.Name, Password: row.Password, IsAdmin: row.IsAdmin });
    }
    postUser(obj) {
        this.authorizationService.PostUser(obj)
            .subscribe((res) => {
            console.log(res);
            // this.getUsers();
        });
    }
    deleteUser(Id) {
        this.authorizationService.DeleteUser(Id)
            .subscribe((res) => {
            console.log(res);
            // this.getUsers();
        });
    }
    clear() {
        this.formTable.patchValue({ ID: null, SourceField: null, Start: null, Length: null, DestinationField: null });
    }
    detailToggle(row) {
        this.selection.toggle(row);
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
        if (this.selection.selected.length > 0)
            this.dGetir = false;
        else {
            this.dGetir = true;
            this.dKaynak = true;
        }
    }
    getUser(userCode, route) {
        this.authorizationService.GetUser(userCode, route)
            .subscribe((res) => {
            this.pageauth.write = res[0].write;
            this.pageauth.update = res[0].update;
            this.pageauth.delete = res[0].delete;
        }, err => {
            console.log(err);
        });
    }
    definitionGetShiftGroup() {
        let id = 0;
        this.definitionsService.DefinitionGetWorkingTypes(id)
            .subscribe((res) => {
            console.log(res);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableDataSource();
            this.dataSource.data = res;
            this.searchCtrl.valueChanges.pipe((0,ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this)).subscribe(value => this.onFilterChange(value));
        });
    }
    onFilterChange(value) {
        if (!this.dataSource) {
            return;
        }
        value = value.trim();
        value = value.toLowerCase();
        this.dataSource.filter = value;
    }
    ngOnDestroy() {
    }
}
TransferComponent.ɵfac = function TransferComponent_Factory(t) { return new (t || TransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_30__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_14__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_definitions_service__WEBPACK_IMPORTED_MODULE_15__.DefinitionsService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_16__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_17__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_30__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_32__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_33__.Location)); };
TransferComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({ type: TransferComponent, selectors: [["transfer"]], viewQuery: function TransferComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.usrPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MAT_DATE_FORMATS,
                useValue: {
                    parse: {
                        dateInput: ['l', 'LL'],
                    },
                    display: {
                        dateInput: 'L',
                        monthYearLabel: 'M YYYY',
                        dateA11yLabel: 'LL',
                        monthYearA11yLabel: 'MMMM YYYY',
                    },
                },
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__.MomentDateAdapter },
            { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__.MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
        ])], decls: 61, vars: 21, consts: [[2, "overflow", "hidden"], ["class", "pb-16", "fxLayout", "column", "fxLayoutAlign", "center start", "style", " margin-bottom: -75px; ", 4, "ngIf"], [1, "-mt-6", 2, "overflow", "hidden", 3, "ngStyle"], ["mat-tab-nav-bar", "", 1, "vex-tabs", "vex-tabs-dense", "border-0", 2, "width", "100%"], ["mat-tab-link", "", 3, "click", 4, "ngFor", "ngForOf"], ["color", "primary", "mat-icon-button", "", "type", "button", 3, "click"], [2, "margin-top", "10px", 3, "icIcon"], ["fxLayout", "row", 2, "overflow", "scroll", "margin-top", "10px", "max-height", "160px"], ["fxFlex", "auto", "mat-table", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "Checkbox"], ["mat-header-cell", "", 3, "hidden", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 3, "hidden", 4, "matCellDef"], ["matColumnDef", "ID"], ["hidden", "", "mat-header-cell", "", 4, "matHeaderCellDef"], ["hidden", "", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Database"], ["mat-cell", "", 3, "hidden", 4, "matCellDef"], ["matColumnDef", "Protocol"], ["matColumnDef", "Hostname"], ["matColumnDef", "Username"], ["matColumnDef", "Password"], ["matColumnDef", "DbTable"], ["matColumnDef", "TransferId"], ["matColumnDef", "Inout"], ["matColumnDef", "InChar"], ["mat-cel", "", 4, "matCellDef"], ["matColumnDef", "OutChar"], ["matColumnDef", "DbQuery"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "start", 2, "width", "100%"], [2, "width", "100%", "overflow", "hidden"], ["fxLayout", "row", "style", " width: 100%; margin-top: 5px;", 4, "ngIf"], ["fxLayout", "row", "style", " margin-top: 10px;", 3, "ngStyle", 4, "ngIf"], ["mat-tab-nav-bar", "", "class", "vex-tabs vex-tabs-dense border-0", "style", "width: 100%; background-color:#EBEBEE", 4, "ngIf"], ["style", "font-size: 10px;  height: 50px; margin-top: -10px; ", "showFirstLastButtons", "false", "hidePageSize", "true", "pageSize", "50 ", 3, "pageSizeOptions", 4, "ngIf"], ["mode", "determinate", "style", "height: 20px;", 3, "value", 4, "ngIf"], ["fxLayout", "row", "style", "overflow:scroll;  margin-top: 10px;   ", 3, "ngStyle", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center start", 1, "pb-16", 2, "margin-bottom", "-75px"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1"], [1, "breadcrumb", 3, "crumbs"], [1, "mt-4", "sm:mt-0", 3, "formControl"], ["value", "boxed", 3, "click"], ["value", "fullwidth", 3, "click"], ["mat-tab-link", "", 3, "click"], ["mat-header-cell", "", 3, "hidden"], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4", 3, "hidden"], ["color", "primary", 3, "checked", "change", "click"], ["hidden", "", "mat-header-cell", ""], ["hidden", "", "mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", ""], [2, "font-size", "10px"], ["mat-cell", "", 3, "hidden"], [2, "font-size", "11px", "font-weight", "bold"], ["color", "primary", "disabled", "", 3, "checked"], ["mat-cel", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"], ["fxLayout", "row", 2, "width", "100%", "margin-top", "5px"], [2, "width", "100%", 3, "formGroup"], ["fxLayout", "row"], ["color", "primary", "mat-button", "", 3, "click"], [1, "material-icons", "md-48", 2, "font-size", "30px"], ["fxFlex", ""], ["mat-raised-button", "", "color", "primary", 2, "margin-right", "3px", "width", "90px", 3, "click"], ["hidden", "", "formControlName", "ID", "matInput", "", 2, "font-size", "larger", "font-weight", "bold"], ["hidden", "", "formControlName", "SystemTransferDbID", "matInput", "", 2, "font-size", "larger", "font-weight", "bold"], ["appearance", "outline", 3, "ngStyle"], ["formControlName", "SourceField", "cdkFocusInitial", "", 2, "width", "100%"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Start", "matInput", "", 2, "font-size", "larger", "font-weight", "bold"], ["formControlName", "Length", "matInput", "", 2, "font-size", "larger", "font-weight", "bold"], ["formControlName", "DestinationField", "cdkFocusInitial", "", 2, "width", "100%"], [3, "value"], ["fxLayout", "row", 2, "margin-top", "10px", 3, "ngStyle"], [1, "card"], [3, "direction"], [2, "overflow", "hidden", 3, "size"], [1, "card", 2, "height", "100%", "overflow", "scroll"], ["hidden", "", "class", "w-4", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "SystemTransferDbID"], ["matColumnDef", "SourceField"], ["matColumnDef", "Start"], ["matColumnDef", "Length"], ["matColumnDef", "DestinationField"], ["matColumnDef", "Actions", "sticky", ""], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["class", "hover:bg-hover cursor-pointer", "mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], [1, "card", 2, "height", "100%", "overflow", "scroll", "margin-bottom", "30px"], ["matColumnDef", "Code"], ["matColumnDef", "Type"], ["hidden", "", "class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["hidden", "", "mat-cell", "", 1, "w-4"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "click"], [3, "icIcon"], ["mat-row", "", 1, "hover:bg-hover", "cursor-pointer", 3, "ngClass", "click"], ["hidden", "", "mat-cell", "", 1, "w-10", "text-secondary"], ["mat-tab-nav-bar", "", 1, "vex-tabs", "vex-tabs-dense", "border-0", 2, "width", "100%", "background-color", "#EBEBEE"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "style", "margin-right: 10px;", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["fxFlex", "", 4, "ngIf"], ["mat-tab-link", "", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", 3, "ngStyle", "click"], [3, "hidden"], ["mat-raised-button", "", "color", "primary", 2, "margin-right", "10px", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["showFirstLastButtons", "false", "hidePageSize", "true", "pageSize", "50 ", 2, "font-size", "10px", "height", "50px", "margin-top", "-10px", 3, "pageSizeOptions"], ["usrPaginator", ""], ["mode", "determinate", 2, "height", "20px", 3, "value"], ["fxLayout", "row", 2, "overflow", "scroll", "margin-top", "10px", 3, "ngStyle"], ["matColumnDef", "EmployeeID"], ["matColumnDef", "Device"], ["matColumnDef", "NewDateTime"], ["matColumnDef", "Barcode"], ["matColumnDef", "ReasonID"], ["matColumnDef", "Exception"], ["mat-header-row", "", "style", "font-size: 10px; padding: 2px; height: 10px;", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "style", "font-size: 8px; height: 5px;", 4, "matRowDef", "matRowDefColumns"], [2, "font-size", "20px"], ["mat-header-row", "", 2, "font-size", "10px", "padding", "2px", "height", "10px"], ["mat-row", "", 2, "font-size", "8px", "height", "5px"]], template: function TransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "vex-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, TransferComponent_vex_page_layout_header_1_Template, 11, 9, "vex-page-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "vex-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, TransferComponent_a_4_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function TransferComponent_Template_button_click_5_listener() { return ctx.getInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "mat-dialog-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](9, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](10, TransferComponent_th_10_Template, 2, 3, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, TransferComponent_td_11_Template, 2, 2, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](12, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, TransferComponent_th_13_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](14, TransferComponent_td_14_Template, 3, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](15, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](16, TransferComponent_th_16_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](17, TransferComponent_td_17_Template, 3, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](18, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](19, TransferComponent_th_19_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](20, TransferComponent_td_20_Template, 3, 2, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](21, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, TransferComponent_th_22_Template, 2, 1, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, TransferComponent_td_23_Template, 3, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](24, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](25, TransferComponent_th_25_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](26, TransferComponent_td_26_Template, 3, 2, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](27, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](28, TransferComponent_th_28_Template, 2, 1, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, TransferComponent_td_29_Template, 3, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](30, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](31, TransferComponent_th_31_Template, 2, 1, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](32, TransferComponent_td_32_Template, 3, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](33, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](34, TransferComponent_th_34_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](35, TransferComponent_td_35_Template, 3, 2, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](36, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](37, TransferComponent_th_37_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](38, TransferComponent_td_38_Template, 3, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](39, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](40, TransferComponent_th_40_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](41, TransferComponent_td_41_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](42, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](43, TransferComponent_th_43_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](44, TransferComponent_td_44_Template, 3, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](45, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](46, TransferComponent_th_46_Template, 2, 1, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](47, TransferComponent_td_47_Template, 3, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](48, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](49, TransferComponent_th_49_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](50, TransferComponent_td_50_Template, 3, 2, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](51, TransferComponent_tr_51_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](52, TransferComponent_tr_52_Template, 1, 4, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](55, TransferComponent_mat_dialog_content_55_Template, 31, 20, "mat-dialog-content", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](56, TransferComponent_mat_dialog_content_56_Template, 55, 14, "mat-dialog-content", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](57, TransferComponent_nav_57_Template, 10, 5, "nav", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](58, TransferComponent_mat_paginator_58_Template, 2, 2, "mat-paginator", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](59, TransferComponent_mat_progress_bar_59_Template, 1, 1, "mat-progress-bar", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](60, TransferComponent_mat_dialog_content_60_Template, 31, 7, "mat-dialog-content", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx.isMobileLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction2"](18, _c7, ctx.isMobileLayout ? "10px " : "0px", ctx.layoutCtrl.value === "fullwidth" ? "100%" : "90%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icIcon", ctx.icMoreHoriz);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsDb)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matRowDefColumns", ctx.columnsDb);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 1 && ctx.activeLinkIndex2 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 1 && ctx.activeLinkIndex2 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 1 && ctx.activeLinkIndex2 === 0);
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_18__.PageLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgIf, _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_19__.PageLayoutContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_37__.DefaultStyleDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_39__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_41__.IconDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_42__.DefaultLayoutDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTable, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_42__.DefaultFlexDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatRowDef, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_42__.DefaultLayoutAlignDirective, _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_20__.PageLayoutHeaderDirective, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_21__.BreadcrumbsComponent, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_43__.MatButtonToggleGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControlDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_43__.MatButtonToggle, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatHeaderCell, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_37__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_45__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_47__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatOption, angular_split__WEBPACK_IMPORTED_MODULE_48__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_48__.SplitAreaDirective, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_49__.MatProgressBar], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n  height: 5px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  margin: 0px !important;\n  font-size: smaller;\n}\n\n.class-mat-tab-link[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n}\n\n.mat-class[_ngcontent-%COMP%] {\n  font-size: 14px;\n  transform: scale(-1);\n}\n\n.div-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: medium;\n  font-weight: bold;\n  padding: 4px;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #c7d5eb;\n  font-weight: bolder;\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 10px;\n  height: 10px;\n  padding: 0px 0px 0px 4px;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 30px;\n  height: 30px;\n  padding: 0px 0px 0px 4px;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  outline: none;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 11px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL2xpYi9saWIvc3Vic3RpdHV0ZUNsYXNzQXBwbHlBdFJ1bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0YsV0FBQTtBQUNBOztBQUlBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0E7RUNiQSwyQ0FBbUI7RUFBbkIseUNBQW1CO0FEWW5COztBQWtCQTtFQUNBLGVBQUE7RUFBZ0Isb0JBQUE7QUFkaEI7O0FBeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXRCRjs7QUFrQ0E7RUFDQSxjQUFBO0FBL0JBOztBQWlFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUE5REY7O0FBaUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBOURGOztBQWlFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQTlERjs7QUFpRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQTlERjs7QUFpRUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUE5REYiLCJmaWxlIjoidHJhbnNmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiBcclxuXHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuIFxyXG4uY2xhc3MtbWF0LXRhYi1saW5rXHJcbntcclxuICBAYXBwbHkgYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktY29udHJhc3Q7XHJcbiAgXHJcbn1cclxuIFxyXG4vLyAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xyXG4vLyAgIGJvcmRlcjogMnB4IHNvbGlkICM3NTc1NzU7XHJcbi8vICAgYmFja2dyb3VuZDogIzY4ZDBlNTtcclxuLy8gICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwJSAxMDAlLCAxMDAlIDApO1xyXG4vLyAgIHBhZGRpbmc6IDMwJTtcclxuLy8gfVxyXG4gXHJcbiBcclxuXHJcbiBcclxuXHJcbi5tYXQtY2xhc3Mge1xyXG5mb250LXNpemU6IDE0cHg7dHJhbnNmb3JtOiBzY2FsZSgtMSk7XHJcblxyXG59XHJcblxyXG4vLyAuaGlnaGxpZ2h0e1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWZmNTtcclxuLy8gIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuXHJcblxyXG4vLyB9XHJcbiBcclxuLmRpdi10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuIFxyXG4vLyAubWF0LWhlYWRlci1yb3cge1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDEwcHg7XHJcbi8vICAgaGVpZ2h0OiAxMHB4O1xyXG4vLyAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDRweDtcclxuLy8gfVxyXG4gXHJcbiBcclxuOmhvc3Qge1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLy8gLnNlbGVjdGVkIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbiBcclxuLy8gLm1hdC1yb3c6aG92ZXIge1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICBvdXRsaW5lOiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LWNlbGxcclxuLy8gIHtcclxuLy8gICBmb250LXNpemU6IDhweDtcclxuLy8gICBwYWRkaW5nOiAwcHg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbi8vIH1cclxuXHJcbi8vIC50YWJsZS1yb3cge1xyXG4vLyAgIC8vIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY0O1xyXG4gXHJcbi8vIH0gXHJcblxyXG4vLyAubWF0LXJvdyAsLm1hdC1mb290ZXItcm93IHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4vLyAgIC8vIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4vLyAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbi8vIH1cclxuXHJcblxyXG4uaGlnaGxpZ2h0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2Q1ZWI7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDRweDtcclxufVxyXG5cclxuLm1hdC1yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDRweDtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxufSBcclxuIiwiQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7Il19 */"], data: { animation: [
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUp400ms,
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__.stagger40ms
        ] } });
class DemoDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__["default"];
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
}
DemoDialogComponent.ɵfac = function DemoDialogComponent_Factory(t) { return new (t || DemoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MAT_DIALOG_DATA)); };
DemoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({ type: DemoDialogComponent, selectors: [["roundings"]], decls: 15, vars: 5, consts: [["mat-dialog", "", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["type", "button", "mat-icon-button", "", "tabindex", "-1", 3, "click"], [3, "icIcon"], ["align", "end"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]], template: function DemoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_4_listener() { return ctx.close("No answer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_11_listener() { return ctx.close("Yes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_13_listener() { return ctx.close("No"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx.data.temp1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", ctx.data.temp2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx.data.Evet);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx.data.Hayir);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_42__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_42__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_39__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_41__.IconDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogActions], encapsulation: 2 });


/***/ }),

/***/ 3024:
/*!***************************************************!*\
  !*** ./src/app/pages/transfer/transfer.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferModule": () => (/* binding */ TransferModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer-routing.module */ 24033);
/* harmony import */ var _transfer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer.component */ 99738);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@vex/components/page-layout/page-layout.module */ 91417);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@vex/components/breadcrumbs/breadcrumbs.module */ 72781);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 1465);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@vex/directives/container/container.module */ 90743);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _transfer_definitions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer-definitions.component */ 85018);
/* harmony import */ var _attendance_attendance_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../attendance/attendance.module */ 20830);
/* harmony import */ var _leaves_leave_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../leaves/leave.module */ 3554);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 97435);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! mat-table-exporter */ 88838);
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mat-table-filter */ 68513);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 19372);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-split */ 77052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);









// import { MatSliderModule,MatSlideToggleModule }from '@angular/material';










// import { ColorFadeModule } from '../../../@vex/pipes/color/color-fade.module';





// import { AttendanceDefinitionsComponent} from './../attendance/attendance-definitions.component';













class TransferModule {
}
TransferModule.ɵfac = function TransferModule_Factory(t) { return new (t || TransferModule)(); };
TransferModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TransferModule });
TransferModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            angular_split__WEBPACK_IMPORTED_MODULE_10__.AngularSplitModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
            mat_table_filter__WEBPACK_IMPORTED_MODULE_13__.MatTableFilterModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
            // MatSliderModule,
            // MatSlideToggleModule,
            _transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransferRoutingModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.FlexLayoutModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckboxModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButtonModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_31__.IconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__.ContainerModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule,
            // ColorFadeModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_35__.MatButtonToggleModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_36__.MatTableExporterModule,
            _attendance_attendance_module__WEBPACK_IMPORTED_MODULE_7__.AttendanceModule,
            _leaves_leave_module__WEBPACK_IMPORTED_MODULE_8__.LeaveModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TransferModule, { declarations: [_transfer_component__WEBPACK_IMPORTED_MODULE_1__.DemoDialogComponent, _transfer_component__WEBPACK_IMPORTED_MODULE_1__.TransferComponent, _transfer_definitions_component__WEBPACK_IMPORTED_MODULE_6__.TransferDefinitionsComponent], imports: [angular_split__WEBPACK_IMPORTED_MODULE_10__.AngularSplitModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        mat_table_filter__WEBPACK_IMPORTED_MODULE_13__.MatTableFilterModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        _transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransferRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.FlexLayoutModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_31__.IconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__.ContainerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule,
        // ColorFadeModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_35__.MatButtonToggleModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_36__.MatTableExporterModule,
        _attendance_attendance_module__WEBPACK_IMPORTED_MODULE_7__.AttendanceModule,
        _leaves_leave_module__WEBPACK_IMPORTED_MODULE_8__.LeaveModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_transfer_transfer_module_ts.js.map