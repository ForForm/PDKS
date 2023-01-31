"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_scoring_scoring_module_ts"],{

/***/ 50680:
/*!*********************************************************!*\
  !*** ./src/app/pages/scoring/leave-record.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveRecordComponent": () => (/* binding */ LeaveRecordComponent),
/* harmony export */   "DemoDialogComponent2": () => (/* binding */ DemoDialogComponent2)
/* harmony export */ });
/* harmony import */ var _interfaces_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../interfaces/util */ 10071);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
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
/* harmony import */ var _iconify_icons_ic_close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/close */ 93224);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete-forever */ 45866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../@vex/animations/stagger.animation */ 41238);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../@vex/animations/scale-fade-in.animation */ 69703);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ 81784);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ 88767);
/* harmony import */ var _wait_wait_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../wait/wait.component */ 5043);
/* harmony import */ var _leaves_leave_definitions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../leaves/leave-definitions.component */ 75109);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_definitions_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/definitions.service */ 27104);
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/attendance.service */ 31354);
/* harmony import */ var _services_leaves_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/leaves.service */ 54362);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
















// import { Definition,DefinitionHourDetail } from '../definitions/interfaces/definition.model'






























const _c0 = function (a0) { return { "backgroundColor": a0 }; };
function LeaveRecordComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function LeaveRecordComponent_a_10_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r7); const link_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](); return ctx_r6.gotoTab(link_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](2, _c0, link_r5.index === ctx_r0.activeLinkIndex ? "#5C77FF " : "#EBEBEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", link_r5.name, " ");
} }
function LeaveRecordComponent_mat_form_field_45_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("change", function LeaveRecordComponent_mat_form_field_45_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](); return ctx_r8.calculateTotalDay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r2.languageMap["G\u00FCn"].labelName);
} }
function LeaveRecordComponent_mat_dialog_content_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "mat-dialog-content", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](5, "mat-datepicker-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](6, "mat-datepicker", null, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](8, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](7);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r3.languageMap["Tarih"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("matDatepicker", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("for", _r10);
} }
function LeaveRecordComponent_mat_dialog_content_47_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "mat-dialog-content", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("change", function LeaveRecordComponent_mat_dialog_content_47_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](); return ctx_r11.calculateTotalTime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](8, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("change", function LeaveRecordComponent_mat_dialog_content_47_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](); return ctx_r13.calculateTotalTime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](12, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r4.languageMap["Saat"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r4.languageMap["Saat"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r4.languageMap["S\u00FCre"].labelName);
} }
const moment = moment__WEBPACK_IMPORTED_MODULE_21__;
class LeaveRecordComponent {
    constructor(defaults, dialogRef, fb, cd, definitionsService, adapter, dialog, attendanceService, leavesService, snackbar) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.cd = cd;
        this.definitionsService = definitionsService;
        this.adapter = adapter;
        this.dialog = dialog;
        this.attendanceService = attendanceService;
        this.leavesService = leavesService;
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
        this.activeLinkIndex = 0;
        this.links = [];
        this.saveEnabled = false;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.icMyLocation = _iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_9__["default"];
        this.icLocationCity = _iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_10__["default"];
        this.icEditLocation = _iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_11__["default"];
        this.icClose1 = _iconify_icons_ic_close__WEBPACK_IMPORTED_MODULE_12__["default"];
        this.icDeleteForever = _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_13__["default"];
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.visible = false;
        this.label = '';
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_17__["default"];
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18__["default"];
        this.InOutType = [{ Code: 1, Name: 'Giriş' }, { Code: 2, Name: 'Çıkış' }];
        this.isEdited = false;
    }
    changeDetectEvent(saveEnabled) {
        console.log(this.form);
        console.log(this.form.invalid);
        this.saveEnabled = saveEnabled;
    }
    ngOnInit() {
        //  debugger;
        const locale = 'en-US';
        this.turkishCulture();
        this.languageMap = _interfaces_util__WEBPACK_IMPORTED_MODULE_0__["default"].getLabels();
        this.getReasons('defaults');
        let startDate = moment(new Date());
        let endDate = moment(new Date());
        this.links.push({ index: 0, name: this.languageMap['Günlük İzinler'].labelName });
        this.links.push({ index: 1, name: this.languageMap['Saatlik İzinler'].labelName });
        if (this.defaults.Type == 0) {
            this.form = this.fb.group({
                Code: [this.defaults.Data.EmployeeCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                Name: this.defaults.Data.EmployeeName,
                Type: null, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: null, ID: null,
                Izin: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], IzinDesc: null, StartDate: [startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                Day: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], Description: null, EndDate: [endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], StartTime: '00:00', EndTime: '00:00', TotalTime: '00:00'
            });
            // if (this.defaults.Data.Type === 1) this.activeLinkIndex = 0; else if (this.defaults.Data.Type === 2) this.activeLinkIndex = 1;
            if (this.defaults.Data.Type === 1)
                this.gotoTab({ index: 0 });
            else if (this.defaults.Data.Type === 2)
                this.gotoTab({ index: 1 });
        }
        else {
            if (this.defaults.Data.Type == 1)
                this.form = this.fb.group({
                    Code: [this.defaults.Data.EmployeeCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                    Name: this.defaults.Data.EmployeeName,
                    Type: this.defaults.Data.Type, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: this.defaults.Data.ReasonID, ID: this.defaults.Data.ID,
                    Izin: [this.defaults.Data.ReasonCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], IzinDesc: this.defaults.Data.ReasonName, StartDate: [this.defaults.Data.StartDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                    Day: [this.defaults.Data.Day, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], Description: this.defaults.Data.Description, EndDate: [this.defaults.Data.EndDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                    StartTime: this.defaults.Data.StartTime !== null ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_27__.formatDate)(this.defaults.Data.StartTime, 'HH:mm', locale) : '00:00',
                    EndTime: this.defaults.Data.EndTime !== null ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_27__.formatDate)(this.defaults.Data.EndTime, 'HH:mm', locale) : '00:00',
                    TotalTime: this.getTimeInterval((this.defaults.Data.StartTime !== null ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_27__.formatDate)(this.defaults.Data.StartTime, 'HH:mm', locale) : '00:00'), (this.defaults.Data.EndTime !== null ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_27__.formatDate)(this.defaults.Data.EndTime, 'HH:mm', locale) : '00:00'))
                });
            else if (this.defaults.Data.Type == 2)
                this.form = this.fb.group({
                    Code: [this.defaults.Data.EmployeeCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                    Name: this.defaults.Data.EmployeeName,
                    Type: this.defaults.Data.Type, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: this.defaults.Data.ReasonID, ID: this.defaults.Data.ID,
                    Izin: [this.defaults.Data.ReasonCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], IzinDesc: this.defaults.Data.ReasonName, StartDate: [this.defaults.Data.StartDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                    Day: [this.defaults.Data.Day], Description: this.defaults.Data.Description, EndDate: [this.defaults.Data.EndDate],
                    StartTime: this.defaults.Data.StartTime !== null ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_27__.formatDate)(this.defaults.Data.StartTime, 'HH:mm', locale) : '00:00',
                    EndTime: this.defaults.Data.EndTime !== null ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_27__.formatDate)(this.defaults.Data.EndTime, 'HH:mm', locale) : '00:00',
                    TotalTime: this.getTimeInterval((this.defaults.Data.StartTime !== null ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_27__.formatDate)(this.defaults.Data.StartTime, 'HH:mm', locale) : '00:00'), (this.defaults.Data.EndTime !== null ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_27__.formatDate)(this.defaults.Data.EndTime, 'HH:mm', locale) : '00:00'))
                });
            this.calculateTotalTime();
            if (this.defaults.Data.Type === 1)
                this.activeLinkIndex = 0;
            else if (this.defaults.Data.Type === 2)
                this.activeLinkIndex = 1;
        }
        this.form.valueChanges.subscribe(result => {
            this.saveEnabled = true;
            this.changeDetectEvent(this.saveEnabled && !this.form.invalid);
        });
    }
    gotoTab(link) {
        this.activeLinkIndex = link.index;
        if (link.index === 0) {
            let startDate = moment(new Date());
            let endDate = moment(new Date());
            this.form = this.fb.group({
                Code: [this.defaults.Data.Code, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                Name: this.defaults.Data.Name, Type: null, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: null, ID: null,
                Izin: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], IzinDesc: null, StartDate: [startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                Day: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], Description: null, EndDate: [endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], StartTime: '00:00', EndTime: '00:00', TotalTime: '00:00'
            });
        }
        else {
            let startDate = moment(new Date());
            let endDate = moment(new Date());
            this.form = this.fb.group({
                Code: [this.defaults.Data.Code, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                Name: this.defaults.Data.Name, Type: null, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: null, ID: null,
                Izin: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], IzinDesc: null, StartDate: [startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                Day: null, Description: null, EndDate: endDate, StartTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
                EndTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]], TotalTime: '00:00'
            });
        }
        this.form.valueChanges.subscribe(result => {
            this.saveEnabled = true;
            this.changeDetectEvent(this.saveEnabled && !this.form.invalid);
        });
    }
    addRecord() {
        this.isEdited = true;
        const dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_19__.WaitComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        console.log(this.form.value);
        let objArray = [];
        const definition = this.form.value;
        // definition.StartDate=definition.StartDate.format("YYYY-MM-DDT00:00:00") ;
        // definition.EndDate=definition.EndDate.format("YYYY-MM-DDT00:00:00") ;
        definition.Type = this.activeLinkIndex;
        definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        definition.Username = JSON.parse(sessionStorage.getItem('Username'));
        definition.ReasonCode = this.form.value.Izin;
        definition.ReasonID = this.form.value.ReasonID;
        objArray.push(definition);
        this.leavesService.PostLeaves(objArray)
            .subscribe((res) => {
            this.saveEnabled = false;
            dialogRef.close();
        }, err => {
            dialogRef.close();
            console.log(err);
        });
    }
    // myObservable(observer) {
    //   setTimeout(() => {
    //     observer.next("");
    //     observer.complete();
    //   }, 1000);
    // }
    showWaitScreen(observable) {
        let dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_19__.WaitComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        let subscription = observable.subscribe((response) => {
            subscription.unsubscribe();
            console.log(response);
            dialogRef.close();
        }, (error) => {
            subscription.unsubscribe();
            dialogRef.close();
        });
    }
    calculateTotalTime() {
        // this.calcDisabled = false; this.saveDisabled = true;
        let start = moment(this.form.value.StartTime, 'HH:mm');
        let end = moment(this.form.value.EndTime, 'HH:mm');
        // let sure = this.getTimeInterval(start, end).replace(':', '');
        this.form.patchValue({ TotalTime: this.getTimeInterval(start, end) });
    }
    getTimeInterval(startTime, endTime) {
        var start = moment(startTime, "HH:mm");
        var end = moment(endTime, "HH:mm");
        var minutes = end.diff(start, 'minutes');
        var interval = moment().hour(0).minute(minutes);
        return interval.format("HH:mm");
    }
    closeDialog() {
        this.dialogRef.close(this.isEdited);
    }
    refresh() {
        this.cd.detectChanges();
    }
    turkishCulture() {
        this.adapter.setLocale("tr");
    }
    getReasons(type) {
        // debugger;
        this.definitionsService.DefinitionGetConstants(type)
            .subscribe((res) => {
            console.log(res);
            this.InOutReason = res;
        });
    }
    deleteContact(Type, ID) {
        this.openDialog(Type, ID);
    }
    openDialog(Type, ID) {
        this.dialog.open(DemoDialogComponent2, {
            data: {
                temp1: this.languageMap['Hareket bilgisi silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
                Hayir: this.languageMap['Hayır'].labelName
            },
            disableClose: false,
            width: '400px'
        }).afterClosed().subscribe(result => {
            this.result = result;
            if (this.result === "Yes") {
                this.deleteContactRecord(ID);
                if (Type == 0)
                    this.form.patchValue({ IID: 0, StartDate: null, StartTime: null, InReason: 0 });
                if (Type == 1)
                    this.form.patchValue({ OID: 0, EndDate: null, EndTime: null, OutReason: 0 });
                this.isEdited = true;
            }
        });
    }
    deleteContactRecord(id) {
        this.attendanceService.DeleteAttendance(id, 0)
            .subscribe((res) => {
            //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
            // this.definitionGetTypesDistibution(obj.workingTypeID);
            // this.waitProgressDismiss();
            // this.getAttendance(this.radioValue, this.form.value.StartDate, this.form.value.EndDate);
        }, err => {
            console.log(err);
            // this.waitProgress(err, 3000);
        });
    }
    calculateTotalDay() {
        this.form.value.StartDate = this.form.value.StartDate.format("YYYY-MM-DDT00:00:00");
        let startDate = moment(this.form.value.StartDate);
        let endDate = moment(this.form.value.StartDate);
        endDate.add(this.form.value.Day, 'days');
        this.form.patchValue({ EndDate: endDate.format("YYYY-MM-DDT00:00:00") });
    }
    openDefinition(value, obj) {
        this.dialog.open(_leaves_leave_definitions_component__WEBPACK_IMPORTED_MODULE_20__.LeaveDefinitionsComponent, {
            data: { Type: value, Data: { ID: null, Code: null, Name: null } },
            disableClose: false,
            width: '400px',
            height: '700px'
        }).afterClosed().subscribe(result => {
            // console.log(value);
            // console.log(result);
            if (value == '13') {
                if (obj == 1)
                    this.form.patchValue({ ReasonID: result.ID, Izin: result.Code, IzinDesc: result.Name });
            }
            if (value == '0') {
                this.form.patchValue({ EmployeeID: result.ID, Code: result.Code, Name: result.Name });
            }
        });
    }
    // waitProgressDismiss() {
    //   this.snackbar.dismiss();
    // }
    waitProgress(message, timer) {
        this.snackbar.dismiss();
        let config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarConfig();
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
        this.dialogRef.close(definition);
    }
    isCreateMode() {
        return this.mode === 'create';
    }
    isUpdateMode() {
        return this.mode === 'update';
    }
}
LeaveRecordComponent.id = 100;
LeaveRecordComponent.ɵfac = function LeaveRecordComponent_Factory(t) { return new (t || LeaveRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_25__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_services_definitions_service__WEBPACK_IMPORTED_MODULE_22__.DefinitionsService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_30__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_services_attendance_service__WEBPACK_IMPORTED_MODULE_23__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_services_leaves_service__WEBPACK_IMPORTED_MODULE_24__.LeavesService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBar)); };
LeaveRecordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({ type: LeaveRecordComponent, selectors: [["vex-leave-record"]], inputs: { columns: "columns" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MAT_DATE_FORMATS,
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
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_31__.MomentDateAdapter },
            { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_31__.MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
        ])], decls: 53, vars: 18, consts: [[3, "formGroup"], ["mat-dialog-title", "", "cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", "cdkDragHandle", "", 1, "px-gutter", "py-1", "border-b", 2, "background-color", "#D2D2DB", "color", "black"], ["fxFlex", ""], ["mat-button", "", 2, "width", "90px", 3, "click"], [2, "color", "black"], ["mat-raised-button", "", "color", "primary", 2, "margin-right", "3px", "width", "90px", 3, "disabled", "click"], ["mat-tab-nav-bar", "", "id", "tabElement11", 1, "vex-tabs", "vex-tabs-dense", "border-0", 2, "width", "100%", "background-color", "#EBEBEE", "height", "5vh"], ["mat-tab-link", "", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "card", 2, "padding", "5px"], ["fxLayout", "row", 2, "margin-top", "10px"], ["hidden", "", "formControlName", "ID", "matInput", ""], ["hidden", "", "formControlName", "EmployeeID", "matInput", ""], [2, "width", "30%"], ["readonly", "", "formControlName", "Code", "matInput", ""], ["matSuffix", "", "inline", "true", 3, "icIcon", "click"], [2, "width", "60%"], ["readonly", "", "formControlName", "Name", "matInput", ""], ["fxLayout", "row", 2, "margin-top", "-10px"], ["readonly", "", "formControlName", "Izin", "matInput", ""], ["formControlName", "IzinDesc", "readonly", "", "matInput", ""], ["format", "DD/MM/YYYY", "formControlName", "StartDate", "matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepickerStartDate", ""], [4, "ngIf"], ["fxLayout", "row", "style", "margin-top: -10px;", 4, "ngIf"], [2, "width", "100%"], ["formControlName", "Description", "matInput", ""], ["mat-tab-link", "", 3, "ngStyle", "click"], ["formControlName", "Day", "type", "number", "matInput", "", 3, "change"], ["format", "DD/MM/YYYY", "formControlName", "EndDate", "matInput", "", 3, "matDatepicker"], ["datepickerEndDate", ""], ["format", "HH:mm:ss", "matInput", "", "type", "time", "formControlName", "StartTime", 1, "col-md-5", "end", 3, "change"], ["format", "HH:mm:ss", "matInput", "", "type", "time", "formControlName", "EndTime", 1, "col-md-5", "end", 3, "change"], ["readonly", "", "format", "HH:mm:ss", "matInput", "", "type", "time", "formControlName", "TotalTime", 1, "col-md-5", "end"]], template: function LeaveRecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function LeaveRecordComponent_Template_button_click_3_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function LeaveRecordComponent_Template_button_click_6_listener() { return ctx.addRecord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](10, LeaveRecordComponent_a_10_Template, 2, 4, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](12, "mat-dialog-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](15, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](19, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function LeaveRecordComponent_Template_mat_icon_click_19_listener() { return ctx.openDefinition("0", 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](20, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](21, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](25, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](26, "mat-dialog-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](27, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](31, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function LeaveRecordComponent_Template_mat_icon_click_31_listener() { return ctx.openDefinition("13", 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](32, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](33, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](37, "mat-dialog-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](38, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](41, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](42, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](43, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](45, LeaveRecordComponent_mat_form_field_45_Template, 4, 1, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](46, LeaveRecordComponent_mat_dialog_content_46_Template, 9, 3, "mat-dialog-content", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](47, LeaveRecordComponent_mat_dialog_content_47_Template, 13, 3, "mat-dialog-content", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](48, "mat-dialog-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](49, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](52, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.languageMap["\u00C7\u0131k\u0131\u015F"].labelName.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("disabled", !ctx.saveEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.languageMap["Kaydet"].labelName.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.languageMap["SicilNo"].labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("icIcon", ctx.icMoreHoriz);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.languageMap["Ad\u0131"].labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.languageMap["\u0130zin"].labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("icIcon", ctx.icMoreHoriz);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.languageMap["\u0130zin A\u00E7\u0131klama"].labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.languageMap["Tarih"].labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 1 || ctx.activeLinkIndex === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.languageMap["A\u00E7\u0131klama"].labelName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_35__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__.MatSuffix, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_38__.IconDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__.MatDatepicker, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabLink, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_40__.DefaultStyleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NumberValueAccessor], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-right: 0px;\n  padding-left: 0px;\n  max-height: none;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.mat-tab-header-pagination-controls-enabled[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mat-class[_ngcontent-%COMP%] {\n  font-size: 14px;\n  transform: scale(-1);\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #ebeff5;\n  font-weight: bolder;\n}\n\n.mat-success[_ngcontent-%COMP%] {\n  background-color: green;\n  color: #fff;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 10px;\n  justify-content: center;\n}\n\nmat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%] {\n  justify-content: center;\n  font-size: 10px;\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  height: 0px;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%], tr.mat-row[_ngcontent-%COMP%] {\n  height: 8px !important;\n  padding: 0px;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.mat-icon.mat-icon-inline[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBTUE7RUFDRSxhQUFBO0FBSEY7O0FBUUE7RUFDQSxlQUFBO0VBQWdCLG9CQUFBO0FBSmhCOztBQVFBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtBQUxEOztBQVdBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBUkY7O0FBYUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFhQTs7RUFFRSx1QkFBQTtFQUNBLGVBQUE7QUFWRjs7QUFhQTtFQUNFLFdBQUE7QUFWRjs7QUFhQTs7RUFFRSxzQkFBQTtFQUNBLFlBQUE7QUFWRjs7QUFjQTtFQUNFLGVBQUE7QUFYRjs7QUFlQTtFQUNFLFlBQUE7QUFaRjs7QUFlQTtFQUNFLGVBQUE7QUFaRiIsImZpbGUiOiJsZWF2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxufVxyXG4gXHJcbiBcclxuLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgbWF4LWhlaWdodDogbm9uZTtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4gXHJcbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNvbnRyb2xzLWVuYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiBcclxuICBcclxuLm1hdC1jbGFzcyB7XHJcbmZvbnQtc2l6ZTogMTRweDt0cmFuc2Zvcm06IHNjYWxlKC0xKTtcclxuXHJcbn1cclxuXHJcbi5oaWdobGlnaHR7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlZmY1O1xyXG4gZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG59XHJcblxyXG5cclxuIFxyXG5cclxuLm1hdC1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4gXHJcblxyXG4gIFxyXG4ubWF0LWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWhlYWRlci1jZWxsLFxyXG5tYXQtY2VsbCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIGhlaWdodDogMHB4O1xyXG59XHJcblxyXG50ci5tYXQtZm9vdGVyLXJvdyxcclxudHIubWF0LXJvdyB7XHJcbiAgaGVpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgXHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLm1hdC1pY29uLm1hdC1pY29uLWlubGluZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__.stagger20ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_15__.fadeInUp400ms,
            _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_16__.scaleFadeIn400ms
        ] } });
class DemoDialogComponent2 {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
}
DemoDialogComponent2.ɵfac = function DemoDialogComponent2_Factory(t) { return new (t || DemoDialogComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MAT_DIALOG_DATA)); };
DemoDialogComponent2.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({ type: DemoDialogComponent2, selectors: [["roundings"]], decls: 15, vars: 5, consts: [["mat-dialog", "", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["type", "button", "mat-icon-button", "", "tabindex", "-1", 3, "click"], [3, "icIcon"], ["align", "end"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]], template: function DemoDialogComponent2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DemoDialogComponent2_Template_button_click_4_listener() { return ctx.close("No answer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DemoDialogComponent2_Template_button_click_11_listener() { return ctx.close("Yes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function DemoDialogComponent2_Template_button_click_13_listener() { return ctx.close("No"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.data.temp1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("", ctx.data.temp2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.data.Evet);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx.data.Hayir);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_38__.IconDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogActions], encapsulation: 2 });


/***/ }),

/***/ 30035:
/*!*********************************************************!*\
  !*** ./src/app/pages/scoring/scoring-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoringRoutingModule": () => (/* binding */ ScoringRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _scoring_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoring.component */ 95221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    {
        path: '',
        component: _scoring_component__WEBPACK_IMPORTED_MODULE_0__.ScoringComponent,
        data: {
            toolbarShadowEnabled: true
        }
    }
];
class ScoringRoutingModule {
}
ScoringRoutingModule.ɵfac = function ScoringRoutingModule_Factory(t) { return new (t || ScoringRoutingModule)(); };
ScoringRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ScoringRoutingModule });
ScoringRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScoringRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 95221:
/*!****************************************************!*\
  !*** ./src/app/pages/scoring/scoring.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY_FORMATS": () => (/* binding */ MY_FORMATS),
/* harmony export */   "ScoringComponent": () => (/* binding */ ScoringComponent),
/* harmony export */   "DemoDialogComponent": () => (/* binding */ DemoDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _interfaces_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../interfaces/util */ 10071);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! mat-table-filter */ 68513);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static-data/aio-table-data */ 48595);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ 50279);
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ 69410);
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star-border */ 12642);
/* harmony import */ var _iconify_icons_fa_solid_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-fa-solid/search */ 66350);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ 70672);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ 88767);
/* harmony import */ var _iconify_icons_fa_solid_columns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-fa-solid/columns */ 7543);
/* harmony import */ var _iconify_icons_fa_solid_calculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-fa-solid/calculator */ 62788);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/collections */ 28288);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@vex/animations/stagger.animation */ 41238);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@vex/animations/scale-fade-in.animation */ 69703);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 28554);
/* harmony import */ var _iconify_icons_ic_refresh__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/refresh */ 66549);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ 81784);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ 73717);
/* harmony import */ var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete-forever */ 45866);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ 90588);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ 21523);
/* harmony import */ var _iconify_icons_ic_filter_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/filter-list */ 17034);
/* harmony import */ var _scoring_scoring_definitions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../scoring/scoring-definitions.component */ 26903);
/* harmony import */ var _leave_record_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./leave-record.component */ 50680);
/* harmony import */ var _attendance_attendance_record_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../attendance/attendance-record.component */ 88355);
/* harmony import */ var _wait_wait_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../wait/wait.component */ 5043);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material-moment-adapter */ 80155);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! uuid */ 32239);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _personnel_components_personnels_edit_personnels_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./../personnel/components/personnels-edit/personnels-edit.component */ 767);
/* harmony import */ var _vex_services_configs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./../../../@vex/services/configs */ 21403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../services/authorization.service */ 9695);
/* harmony import */ var _services_definitions_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../services/definitions.service */ 27104);
/* harmony import */ var _services_personnel_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../services/personnel.service */ 475);
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../services/attendance.service */ 31354);
/* harmony import */ var _vex_services_style_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./../.../../../../@vex/services/style.service */ 26872);
/* harmony import */ var _services_leaves_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../services/leaves.service */ 54362);
/* harmony import */ var _services_scoring_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../services/scoring.service */ 52102);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./../../../@vex/services/config.service */ 63531);
/* harmony import */ var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./../../../@vex/services/layout.service */ 39011);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! angular-split */ 77052);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/toolbar */ 47727);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/slide-toggle */ 71232);














































































const _c0 = ["viewPaginator"];
const _c1 = ["usrPaginator"];
const _c2 = function (a0) { return { "color": a0 }; };
function ScoringComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_a_1_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r16); const link_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r15.gotoTab(link_r14.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r14 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](2, _c2, link_r14.index === ctx_r0.activeLinkIndex ? "white" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r0.languageMap[link_r14.name].labelName, " ");
} }
function ScoringComponent_div_3_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", item_r19.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", item_r19.Name, " ");
} }
const _c3 = function () { return [5, 10, 20, 50, 100]; };
function ScoringComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r20.getScoring(ctx_r20.leavesRecordIndex, 0, ctx_r20.form.value.StartDate, ctx_r20.form.value.EndDate, ctx_r20.defaultScoringViewID, null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](5, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](6, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](8, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](11, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("selectionChange", function ScoringComponent_div_3_Template_mat_select_selectionChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r22.changeView($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](12, ScoringComponent_div_3_mat_option_12_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](14, "mat-paginator", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r1.languageMap["Tasar\u0131m"].labelName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", ctx_r1.defaultScoringViewID);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngForOf", ctx_r1.scoringViews);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction0"](4, _c3));
} }
function ScoringComponent_div_5_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r44.filterHide = !ctx_r44.filterHide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](1, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r24.languageMap["Filtre"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r24.icFilter);
} }
const _c4 = function (a0) { return { "text-align": a0 }; };
function ScoringComponent_div_5_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](2, _c4, ctx_r25.isMobileLayout ? "start" : "end"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r25.progresValue == 100 ? ctx_r25.languageMap["\u0130\u015Flem Tamamland\u0131"].labelName : ctx_r25.calculatingPersonel, " ");
} }
function ScoringComponent_div_5_ng_container_36_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-checkbox", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("change", function ScoringComponent_div_5_ng_container_36_ng_container_1_th_1_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](4); return $event ? ctx_r56.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("checked", ctx_r54.selection.hasValue() && ctx_r54.isAllSelected())("indeterminate", ctx_r54.selection.hasValue() && !ctx_r54.isAllSelected());
} }
function ScoringComponent_div_5_ng_container_36_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-checkbox", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("change", function ScoringComponent_div_5_ng_container_36_ng_container_1_td_2_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r60); const row_r58 = restoredCtx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](4); return $event ? ctx_r59.detailToggle(row_r58) : null; })("click", function ScoringComponent_div_5_ng_container_36_ng_container_1_td_2_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("checked", ctx_r55.selection.isSelected(row_r58));
} }
function ScoringComponent_div_5_ng_container_36_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_5_ng_container_36_ng_container_1_th_1_Template, 2, 2, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_5_ng_container_36_ng_container_1_td_2_Template, 2, 1, "td", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} }
function ScoringComponent_div_5_ng_container_36_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", column_r47.property === "ID" || ctx_r62.isMobileLayout && (column_r47.property !== "Surname" && column_r47.property !== "Name" && column_r47.property !== "Code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", column_r47.label, " ");
} }
function ScoringComponent_div_5_ng_container_36_ng_container_2_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", column_r47.property === "ID" || ctx_r63.isMobileLayout && (column_r47.property !== "Surname" && column_r47.property !== "Name" && column_r47.property !== "Code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r65[column_r47.property], "");
} }
function ScoringComponent_div_5_ng_container_36_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_5_ng_container_36_ng_container_2_th_1_Template, 2, 2, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_5_ng_container_36_ng_container_2_td_2_Template, 2, 2, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matColumnDef", column_r47.property);
} }
function ScoringComponent_div_5_ng_container_36_ng_container_3_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", ctx_r68.isMobileLayout && (column_r47.property !== "Surname" && column_r47.property !== "Name" && column_r47.property !== "Code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", column_r47.label, "");
} }
function ScoringComponent_div_5_ng_container_36_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", ctx_r69.isMobileLayout && (column_r47.property !== "Surname" && column_r47.property !== "Name" && column_r47.property !== "Code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](2, 2, row_r71[column_r47.property], "dd.MM.y"), " ");
} }
function ScoringComponent_div_5_ng_container_36_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_5_ng_container_36_ng_container_3_th_1_Template, 2, 2, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_5_ng_container_36_ng_container_3_td_2_Template, 3, 5, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matColumnDef", column_r47.property);
} }
function ScoringComponent_div_5_ng_container_36_ng_container_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", ctx_r74.isMobileLayout && (column_r47.property !== "Surname" && column_r47.property !== "Name" && column_r47.property !== "Code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", column_r47.label, "");
} }
function ScoringComponent_div_5_ng_container_36_ng_container_4_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-checkbox", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_ng_container_36_ng_container_4_td_2_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", ctx_r75.isMobileLayout && (column_r47.property !== "Surname" && column_r47.property !== "Name" && column_r47.property !== "Code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("checked", row_r77[column_r47.property])("disabled", column_r47.property !== "select");
} }
function ScoringComponent_div_5_ng_container_36_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_5_ng_container_36_ng_container_4_th_1_Template, 2, 2, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_5_ng_container_36_ng_container_4_td_2_Template, 2, 3, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matColumnDef", column_r47.property);
} }
function ScoringComponent_div_5_ng_container_36_ng_container_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", column_r47.label, "");
} }
function ScoringComponent_div_5_ng_container_36_ng_container_5_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](1, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r84 = ctx.$implicit;
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("src", row_r84[column_r47.property], _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵsanitizeUrl"]);
} }
function ScoringComponent_div_5_ng_container_36_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_5_ng_container_36_ng_container_5_th_1_Template, 2, 1, "th", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_5_ng_container_36_ng_container_5_td_2_Template, 2, 1, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matColumnDef", column_r47.property);
} }
function ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", column_r47.label, "");
} }
function ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_td_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "mat-icon", 115);
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r92.icStar);
} }
function ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_td_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "mat-icon", 88);
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r93.icStarBorder);
} }
function ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_td_2_mat_icon_2_Template, 1, 1, "mat-icon", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](3, ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_td_2_mat_icon_3_Template, 1, 1, "mat-icon", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r91 = ctx.$implicit;
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", row_r91[column_r47.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", !row_r91[column_r47.property]);
} }
function ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_th_1_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_td_2_Template, 4, 2, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} }
function ScoringComponent_div_5_ng_container_36_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_5_ng_container_36_ng_container_6_ng_container_1_Template, 3, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matColumnDef", column_r47.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r47.property === "Chief");
} }
function ScoringComponent_div_5_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_5_ng_container_36_ng_container_1_Template, 3, 0, "ng-container", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_5_ng_container_36_ng_container_2_Template, 3, 1, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](3, ScoringComponent_div_5_ng_container_36_ng_container_3_Template, 3, 1, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](4, ScoringComponent_div_5_ng_container_36_ng_container_4_Template, 3, 1, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](5, ScoringComponent_div_5_ng_container_36_ng_container_5_Template, 3, 1, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](6, ScoringComponent_div_5_ng_container_36_ng_container_6_Template, 2, 2, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r47.property === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r47.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r47.type === "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r47.type === "checkbox" && column_r47.property !== "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r47.type === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r47.type === "button");
} }
function ScoringComponent_div_5_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "tr", 116);
} }
const _c5 = function (a0) { return { "background-color": a0 }; };
function ScoringComponent_div_5_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "tr", 117);
} if (rf & 2) {
    const row_r96 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("@fadeInUp", undefined)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](2, _c5, ctx_r28.selection.isSelected(row_r96) ? "#c7d5eb" : null));
} }
function ScoringComponent_div_5_mat_form_field_73_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_73_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r97.textSelected("Emp2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_73_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r98); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r99.openDefinition("0", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r31.languageMap["SicilNo"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r31.FilteroObjEnableArray[0] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r31.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_80_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_80_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r100.textSelected("EmpType2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_80_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r101); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r102.openDefinition("3", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r32.languageMap["Personel Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r32.FilteroObjEnableArray[3] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r32.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_87_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_87_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r103.textSelected("Depart2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_87_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r104); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r105.openDefinition("1", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r33.languageMap["Departman"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r33.FilteroObjEnableArray[1] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r33.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_94_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_94_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r106.textSelected("Cost2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_94_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r107); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r108.openDefinition("4", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r34.languageMap["Masraf Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r34.FilteroObjEnableArray[4] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r34.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_101_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_101_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r109.textSelected("Cadre2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_101_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r110); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r111.openDefinition("5", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r35.languageMap["Kadro Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r35.FilteroObjEnableArray[5] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r35.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_108_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_108_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r112.textSelected("Prof2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_108_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r113); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r114.openDefinition("6", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r36.languageMap["Meslek Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r36.FilteroObjEnableArray[6] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r36.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_115_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_115_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r115.textSelected("Task2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_115_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r116); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r117.openDefinition("7", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r37.languageMap["Gorev Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r37.FilteroObjEnableArray[7] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r37.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_122_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_122_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r118.textSelected("Group2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_122_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r120.openDefinition("8", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r38.languageMap["Grup Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r38.FilteroObjEnableArray[8] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r38.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_129_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_129_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r121.textSelected("Unit2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_129_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r122); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r123.openDefinition("9", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r39.languageMap["Birim Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r39.FilteroObjEnableArray[9] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r39.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_136_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_136_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r124.textSelected("Branch2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_136_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r125); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r126.openDefinition("10", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r40.languageMap["\u015Eube Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r40.FilteroObjEnableArray[10] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r40.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_form_field_143_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_143_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r127.textSelected("Service2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_mat_form_field_143_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r128); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r129.openDefinition("11", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r41.languageMap["Servis Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", !ctx_r41.FilteroObjEnableArray[11] ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r41.icMoreHoriz);
} }
function ScoringComponent_div_5_mat_option_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", item_r130.Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", item_r130.Name, " ");
} }
function ScoringComponent_div_5_mat_option_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", item_r131.Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", item_r131.Name, " ");
} }
const _c6 = function (a0) { return { "margin-right": a0 }; };
const _c7 = function (a0) { return { "width": a0 }; };
const _c8 = function (a0) { return { width: a0 }; };
function ScoringComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "as-split", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "as-split-area", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](5, "mat-dialog-content", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](6, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](7, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("keyup", function ScoringComponent_div_5_Template_input_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r132.applyFilter($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](8, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](9, "mat-paginator", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](11, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](12, ScoringComponent_div_5_button_12_Template, 2, 2, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](13, "mat-dialog-content", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](14, "mat-toolbar", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](15, "mat-toolbar-row", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](17, "mat-dialog-content", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](18, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](19, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r134.calculate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](20, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](23, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](24, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r135.gotoTab(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](25, "ic-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](28, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](29, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](30, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](31, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](32, ScoringComponent_div_5_p_32_Template, 2, 4, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](33, "mat-progress-bar", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](34, "mat-dialog-content", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](35, "table", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](36, ScoringComponent_div_5_ng_container_36_Template, 7, 6, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](37, ScoringComponent_div_5_tr_37_Template, 1, 0, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](38, ScoringComponent_div_5_tr_38_Template, 1, 4, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](39, "as-split-area", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](40, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](41, "mat-dialog-content", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](42, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r136.getPersonnel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](43, "ic-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](46, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](47, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r137.ClearPFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](48, "ic-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](51, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](52, "mat-dialog-content", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](53, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](54, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](56, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](57, "mat-datepicker-toggle", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](58, "mat-datepicker", null, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](60, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](61, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](63, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](64, "mat-datepicker-toggle", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](65, "mat-datepicker", null, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](67, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](68, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](69, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](71, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r138.textSelected("Emp1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](72, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r139.openDefinition("0", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](73, ScoringComponent_div_5_mat_form_field_73_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](74, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](75, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](76, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](78, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r140.textSelected("EmpType1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](79, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r141.openDefinition("3", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](80, ScoringComponent_div_5_mat_form_field_80_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](81, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](82, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](83, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](85, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r142.textSelected("Depart1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](86, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r143.openDefinition("1", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](87, ScoringComponent_div_5_mat_form_field_87_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](88, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](89, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](90, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](92, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r144.textSelected("Cost1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](93, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r145.openDefinition("4", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](94, ScoringComponent_div_5_mat_form_field_94_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](95, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](96, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](97, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](99, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r146.textSelected("Cadre1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](100, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r147.openDefinition("5", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](101, ScoringComponent_div_5_mat_form_field_101_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](102, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](103, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](104, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](106, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_106_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r148.textSelected("Prof1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](107, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_107_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r149.openDefinition("6", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](108, ScoringComponent_div_5_mat_form_field_108_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](109, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](110, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](111, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](113, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_113_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r150.textSelected("Task1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](114, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_114_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r151.openDefinition("7", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](115, ScoringComponent_div_5_mat_form_field_115_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](116, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](117, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](118, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](120, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r152.textSelected("Group1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](121, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_121_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r153.openDefinition("8", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](122, ScoringComponent_div_5_mat_form_field_122_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](123, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](124, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](125, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](127, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_127_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r154.textSelected("Unit1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](128, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_128_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r155.openDefinition("9", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](129, ScoringComponent_div_5_mat_form_field_129_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](130, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](131, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](132, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](134, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_134_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r156.textSelected("Branch1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](135, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_135_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r157.openDefinition("10", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](136, ScoringComponent_div_5_mat_form_field_136_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](137, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](138, "mat-form-field", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](139, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](141, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_input_click_141_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r158.textSelected("Service1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](142, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_5_Template_mat_icon_click_142_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r133); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r159.openDefinition("11", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](143, ScoringComponent_div_5_mat_form_field_143_Template, 5, 3, "mat-form-field", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](144, "mat-dialog-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](145, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](146, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](147);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](148, "mat-select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](149, ScoringComponent_div_5_mat_option_149_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](150, "mat-form-field", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](151, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](152);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](153, "mat-select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](154, ScoringComponent_div_5_mat_option_154_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵreference"](59);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵreference"](66);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("gutterSize", ctx_r2.isMobileLayout ? 30 : 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("size", ctx_r2.filterHide ? 100 : 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpropertyInterpolate"]("placeholder", ctx_r2.languageMap["Filtre"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidePageSize", true)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction0"](82, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", !ctx_r2.isMobileLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("disabled", ctx_r2.nxtDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icCalculator);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap[ctx_r2.scoreLabel].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("disabled", ctx_r2.nxtDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icon", ctx_r2.icColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Listele"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](83, _c6, ctx_r2.isMobileLayout ? "10px" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](85, _c7, ctx_r2.isMobileLayout ? "120px" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngForOf", ctx_r2.calculateArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", ctx_r2.progresValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngForOf", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.visibleColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matRowDefColumns", ctx_r2.visibleColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("size", ctx_r2.filterHide ? 0 : 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", ctx_r2.filterHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icon", ctx_r2.icFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Filtre"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icon", ctx_r2.icDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Temizle"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Tarih"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matDatepicker", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("for", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Tarih"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matDatepicker", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("for", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](87, _c8, ctx_r2.FilteroObjEnableArray[0] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["SicilNo"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](89, _c8, ctx_r2.FilteroObjEnableArray[3] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Personel Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](91, _c8, ctx_r2.FilteroObjEnableArray[1] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Departman"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](93, _c8, ctx_r2.FilteroObjEnableArray[4] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Masraf Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](95, _c8, ctx_r2.FilteroObjEnableArray[5] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Kadro Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](97, _c8, ctx_r2.FilteroObjEnableArray[6] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Meslek Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](99, _c8, ctx_r2.FilteroObjEnableArray[7] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Gorev Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](101, _c8, ctx_r2.FilteroObjEnableArray[8] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Grup Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](103, _c8, ctx_r2.FilteroObjEnableArray[9] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Birim Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](105, _c8, ctx_r2.FilteroObjEnableArray[10] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["\u015Eube Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](107, _c8, ctx_r2.FilteroObjEnableArray[11] ? "50%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["Servis Tipi"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r2.icMoreHoriz);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx_r2.FilteroObjEnableArray[11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["G\u00F6mlek Yaka"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngForOf", ctx_r2.Collarcolors);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r2.languageMap["G\u00F6mlek Yaka"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngForOf", ctx_r2.Collarcolors);
} }
function ScoringComponent_div_6_div_12_mat_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "mat-checkbox", 183, 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("formControlName", item_r217.property)("value", item_r217.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", item_r217.property, " ");
} }
function ScoringComponent_div_6_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_6_div_12_mat_checkbox_1_Template, 3, 3, "mat-checkbox", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r217 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", item_r217.property !== "filter" && !item_r217.property.includes("WorkingTime"));
} }
function ScoringComponent_div_6_ng_container_15_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_6_ng_container_15_ng_container_1_th_1_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](2, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](4);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matMenuTriggerFor", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r226.icMoreVert);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "td", 190);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "td", 191);
} if (rf & 2) {
    const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", ctx_r228.footerHide);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_6_ng_container_15_ng_container_1_th_1_Template, 3, 2, "th", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_6_ng_container_15_ng_container_1_td_2_Template, 1, 0, "td", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](3, ScoringComponent_div_6_ng_container_15_ng_container_1_td_3_Template, 1, 1, "td", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matColumnDef", column_r221.property);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-form-field", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("ngModelChange", function ScoringComponent_div_6_ng_container_15_ng_container_2_th_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r236); const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit; const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return (ctx_r235.filterEntity[column_r221.property] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", !ctx_r232.formPFilter.value[column_r221.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r232.languageMap[column_r221.property].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngModel", ctx_r232.filterEntity[column_r221.property]);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_2_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r239[column_r221.property], " ");
} }
function ScoringComponent_div_6_ng_container_15_ng_container_2_td_2_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "button", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](row_r239[column_r221.property]);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_2_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_6_ng_container_15_ng_container_2_td_2_span_1_Template, 2, 1, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_6_ng_container_15_ng_container_2_td_2_button_2_Template, 3, 1, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r239 = ctx.$implicit;
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r233.getMoreInformation(row_r239));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", !ctx_r233.formPFilter.value[column_r221.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r221.property !== "EmployeeID");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r221.property === "EmployeeID");
} }
function ScoringComponent_div_6_ng_container_15_ng_container_2_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](5, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](8, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](11, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", ctx_r234.footerHide || !ctx_r234.formPFilter.value[column_r221.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", !ctx_r234.formSettings.value.chkPFooter);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](column_r221.property == "EmployeeID" ? ctx_r234.pPRSICIL + " " + ctx_r234.languageMap["G\u00FCn"].labelName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](column_r221.property == "EmployeeID" ? ctx_r234.pPRSICIL + " " + ctx_r234.languageMap["Saat"].labelName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](column_r221.property == "EmployeeID" ? ctx_r234.languageMap["Toplam G\u00FCn"].labelName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](column_r221.property == "EmployeeID" ? ctx_r234.languageMap["Toplam Saat"].labelName : "");
} }
function ScoringComponent_div_6_ng_container_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_6_ng_container_15_ng_container_2_th_1_Template, 5, 3, "th", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_6_ng_container_15_ng_container_2_td_2_Template, 3, 4, "td", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](3, ScoringComponent_div_6_ng_container_15_ng_container_2_td_3_Template, 13, 6, "td", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matColumnDef", column_r221.property)("sticky", ctx_r223.formSettings.value.chkFreeze);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_3_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-form-field", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("ngModelChange", function ScoringComponent_div_6_ng_container_15_ng_container_3_th_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r253); const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit; const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return (ctx_r252.filterEntity[column_r221.property] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", !ctx_r249.formPFilter.value[column_r221.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", !ctx_r249.formPFilter.value[column_r221.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r249.languageMap[column_r221.property].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngModel", ctx_r249.filterEntity[column_r221.property]);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r256 = ctx.$implicit;
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", !ctx_r250.formPFilter.value[column_r221.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](2, 2, row_r256[column_r221.property], "dd.MM.y"), " ");
} }
function ScoringComponent_div_6_ng_container_15_ng_container_3_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](2, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](4, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](6, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](8, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", ctx_r251.footerHide || !ctx_r251.formPFilter.value[column_r221.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", !ctx_r251.formSettings.value.chkPFooter);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_6_ng_container_15_ng_container_3_th_1_Template, 5, 4, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_6_ng_container_15_ng_container_3_td_2_Template, 3, 5, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](3, ScoringComponent_div_6_ng_container_15_ng_container_3_td_3_Template, 9, 2, "td", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matColumnDef", column_r221.property)("sticky", ctx_r224.formSettings.value.chkFreeze);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_4_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-form-field", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "input", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("ngModelChange", function ScoringComponent_div_6_ng_container_15_ng_container_4_th_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r264); const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit; const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return (ctx_r263.filterEntity[column_r221.property] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", column_r221.label === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](column_r221.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngModel", ctx_r260.filterEntity[column_r221.property]);
} }
function ScoringComponent_div_6_ng_container_15_ng_container_4_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "mat-list-item", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("contextmenu", function ScoringComponent_div_6_ng_container_15_ng_container_4_td_2_Template_mat_list_item_contextmenu_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r269); const row_r267 = restoredCtx.$implicit; const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit; const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r268.onContextMenu($event, { ShiftGroupID: row_r267.ShiftGroupID, ShiftID: row_r267.ShiftID, Date: row_r267.Date, EmployeeID: row_r267.EmployeeID, WorkingTime: column_r221.property, Approve: row_r267[column_r221.property.replace("WorkingTime", "Approve")], Value: row_r267[column_r221.property] }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("change", function ScoringComponent_div_6_ng_container_15_ng_container_4_td_2_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r269); const row_r267 = restoredCtx.$implicit; const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit; const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r271.scoringChanged(column_r221.property, row_r267, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r267 = ctx.$implicit;
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", column_r221.label === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](3, 3, row_r267[column_r221.property], "HH:mm"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](9, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](4, 6, row_r267[column_r221.property], "HH:mm") == "00:00" ? "whitesmoke" : row_r267[column_r221.property.replace("WorkingTime", "Approve")] === "1" ? "red" : "none"));
} }
function ScoringComponent_div_6_ng_container_15_ng_container_4_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](6, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](10, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](14, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2).$implicit;
    const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", ctx_r262.footerHide || column_r221.label === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", !ctx_r262.formSettings.value.chkPFooter);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](4, 6, ctx_r262.pCALISMA[column_r221.property] / 24, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](8, 9, ctx_r262.pCALISMA[column_r221.property], "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](12, 12, ctx_r262.tCALISMA[column_r221.property] / 24, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](16, 15, ctx_r262.tCALISMA[column_r221.property], "1.0-2"));
} }
function ScoringComponent_div_6_ng_container_15_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_6_ng_container_15_ng_container_4_th_1_Template, 5, 3, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_6_ng_container_15_ng_container_4_td_2_Template, 5, 11, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](3, ScoringComponent_div_6_ng_container_15_ng_container_4_td_3_Template, 17, 18, "td", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matColumnDef", column_r221.property);
} }
function ScoringComponent_div_6_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_div_6_ng_container_15_ng_container_1_Template, 4, 1, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](2, ScoringComponent_div_6_ng_container_15_ng_container_2_Template, 4, 2, "ng-container", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](3, ScoringComponent_div_6_ng_container_15_ng_container_3_Template, 4, 2, "ng-container", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](4, ScoringComponent_div_6_ng_container_15_ng_container_4_Template, 4, 1, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r221 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r221.type === "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r221.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r221.type === "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", column_r221.type === "time");
} }
function ScoringComponent_div_6_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "tr", 116);
} }
const _c9 = function (a0) { return { "highlight": a0 }; };
function ScoringComponent_div_6_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "tr", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_6_tr_17_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r278); const row_r276 = restoredCtx.$implicit; const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r277.detailToggleS(row_r276); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r276 = ctx.$implicit;
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("@fadeInUp", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](2, _c9, ctx_r163.selectedRowIndex == row_r276.ID));
} }
function ScoringComponent_div_6_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "tr", 221);
} }
function ScoringComponent_div_6_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} }
function ScoringComponent_div_6_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r279 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r279.ID, " ");
} }
function ScoringComponent_div_6_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r167.languageMap["SicilNo"].labelName, " ");
} }
function ScoringComponent_div_6_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r280 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r280.Code, " ");
} }
function ScoringComponent_div_6_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r169.languageMap["Tarih"].labelName, " ");
} }
function ScoringComponent_div_6_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r281 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](3, 1, row_r281.NewDateTime, "dd.MM.yyyy HH:mm"));
} }
function ScoringComponent_div_6_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r171.languageMap["Neden"].labelName, " ");
} }
function ScoringComponent_div_6_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r282 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r282.ReasonID, " ");
} }
function ScoringComponent_div_6_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r173.languageMap["Kap\u0131"].labelName, " ");
} }
function ScoringComponent_div_6_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r283 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r283.Device, " ");
} }
function ScoringComponent_div_6_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r175.languageMap["Tarih"].labelName, " ");
} }
function ScoringComponent_div_6_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r284 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](3, 1, row_r284.ONewDateTime, "dd.MM.yyyy HH:mm"));
} }
function ScoringComponent_div_6_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r177.languageMap["Neden"].labelName, " ");
} }
function ScoringComponent_div_6_td_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r285 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r285.OReasonID, " ");
} }
function ScoringComponent_div_6_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r179.languageMap["Kap\u0131"].labelName, " ");
} }
function ScoringComponent_div_6_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r286 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r286.ODevice, " ");
} }
function ScoringComponent_div_6_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r181.languageMap["Aksiyon"].labelName, "");
} }
const _c10 = function (a0) { return { definition: a0 }; };
function ScoringComponent_div_6_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "button", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_6_td_66_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](2, "mat-icon", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r287 = ctx.$implicit;
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](3, _c10, row_r287))("matMenuTriggerFor", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r182.icMoreVert);
} }
function ScoringComponent_div_6_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "tr", 229);
} }
function ScoringComponent_div_6_tr_68_Template(rf, ctx) { if (rf & 1) {
    const _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "tr", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_6_tr_68_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r291); const row_r289 = restoredCtx.$implicit; const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r290.selectedRowIndex2 = row_r289.IIDNO; });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r289 = ctx.$implicit;
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("@fadeInUp", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](2, _c9, ctx_r184.selectedRowIndex2 == row_r289.IIDNO));
} }
function ScoringComponent_div_6_th_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} }
function ScoringComponent_div_6_td_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r292 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r292.id, " ");
} }
function ScoringComponent_div_6_th_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r187.languageMap["Kod"].labelName, " ");
} }
function ScoringComponent_div_6_td_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r293 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r293.EmployeeCode, " ");
} }
function ScoringComponent_div_6_th_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r189.languageMap["Ad\u0131"].labelName, " ");
} }
function ScoringComponent_div_6_td_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r294 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r294.Name, " ");
} }
function ScoringComponent_div_6_th_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r191.languageMap["Soyad\u0131"].labelName, " ");
} }
function ScoringComponent_div_6_td_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r295 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r295.Surname, " ");
} }
function ScoringComponent_div_6_th_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1, "ReasonID");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} }
function ScoringComponent_div_6_td_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r296 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r296.ReasonID, " ");
} }
function ScoringComponent_div_6_th_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r195.languageMap["Neden Kodu"].labelName, " ");
} }
function ScoringComponent_div_6_td_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r297 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r297.ReasonCode, " ");
} }
function ScoringComponent_div_6_th_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r197.languageMap["Neden A\u00E7\u0131klama"].labelName, " ");
} }
function ScoringComponent_div_6_td_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r298 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r298.ReasonName, " ");
} }
function ScoringComponent_div_6_th_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r199.languageMap["Ba\u015Flang\u0131\u00E7 Tarih"].labelName, " ");
} }
function ScoringComponent_div_6_td_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r299 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](2, 1, row_r299.StartDate, "dd.MM.y"), " ");
} }
function ScoringComponent_div_6_th_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r201.languageMap["Ba\u015Flang\u0131\u00E7 Saat"].labelName, "");
} }
function ScoringComponent_div_6_td_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r300 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](2, 1, row_r300.StartTime, "HH:mm"), " ");
} }
function ScoringComponent_div_6_th_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r203.languageMap["G\u00FCn"].labelName, " ");
} }
function ScoringComponent_div_6_td_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r301 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r301.Day, " ");
} }
function ScoringComponent_div_6_th_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r205.languageMap["Biti\u015F Tarih"].labelName, " ");
} }
function ScoringComponent_div_6_td_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r302 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](2, 1, row_r302.EndDate, "dd.MM.y"), " ");
} }
function ScoringComponent_div_6_th_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r207.languageMap["Biti\u015F Saat"].labelName, "");
} }
function ScoringComponent_div_6_td_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r303 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpipeBind2"](2, 1, row_r303.EndTime, "HH:mm"), " ");
} }
function ScoringComponent_div_6_th_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r209.languageMap["A\u00E7\u0131klama"].labelName, " ");
} }
function ScoringComponent_div_6_td_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r304 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r304.Description, " ");
} }
function ScoringComponent_div_6_th_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r211.languageMap["Durum"].labelName, " ");
} }
function ScoringComponent_div_6_td_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r305 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", row_r305.CalcDescription, " ");
} }
function ScoringComponent_div_6_th_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r213.languageMap["Aksiyon"].labelName, "");
} }
function ScoringComponent_div_6_td_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "td", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "button", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_6_td_129_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](2, "mat-icon", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r306 = ctx.$implicit;
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](3, _c10, row_r306))("matMenuTriggerFor", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r214.icMoreVert);
} }
function ScoringComponent_div_6_tr_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "tr", 229);
} }
function ScoringComponent_div_6_tr_131_Template(rf, ctx) { if (rf & 1) {
    const _r310 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "tr", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_6_tr_131_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r310); const row_r308 = restoredCtx.$implicit; const ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2); return ctx_r309.selectedRowIndex3 = row_r308.ID; });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r308 = ctx.$implicit;
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("@fadeInUp", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpureFunction1"](2, _c9, ctx_r216.selectedRowIndex3 == row_r308.ID));
} }
function ScoringComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "as-split", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "as-split-area", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-dialog-content", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](5, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](6, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](7, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](8, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](9, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](10, "h4", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](12, ScoringComponent_div_6_div_12_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](13, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](14, "table", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](15, ScoringComponent_div_6_ng_container_15_Template, 5, 4, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](16, ScoringComponent_div_6_tr_16_Template, 1, 0, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](17, ScoringComponent_div_6_tr_17_Template, 1, 4, "tr", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](18, ScoringComponent_div_6_tr_18_Template, 1, 0, "tr", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](19, "as-split-area", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](20, "mat-dialog-content", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](22, "as-split", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](23, "as-split-area", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](24, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](25, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](26, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](27, "h2", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](29, "mat-dialog-content", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](30, "mat-form-field", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](31, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("keyup", function ScoringComponent_div_6_Template_input_keyup_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r312); const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r311.applyFilterAttendance($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](32, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](33, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_6_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r312); const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r313.addAttendance(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](34, "mat-icon", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](35, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](37, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](38, "mat-dialog-content", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](39, "table", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](40, 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](41, ScoringComponent_div_6_th_41_Template, 2, 0, "th", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](42, ScoringComponent_div_6_td_42_Template, 2, 1, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](43, 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](44, ScoringComponent_div_6_th_44_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](45, ScoringComponent_div_6_td_45_Template, 2, 1, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](46, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](47, ScoringComponent_div_6_th_47_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](48, ScoringComponent_div_6_td_48_Template, 4, 4, "td", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](49, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](50, ScoringComponent_div_6_th_50_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](51, ScoringComponent_div_6_td_51_Template, 2, 1, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](52, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](53, ScoringComponent_div_6_th_53_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](54, ScoringComponent_div_6_td_54_Template, 2, 1, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](55, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](56, ScoringComponent_div_6_th_56_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](57, ScoringComponent_div_6_td_57_Template, 4, 4, "td", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](58, 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](59, ScoringComponent_div_6_th_59_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](60, ScoringComponent_div_6_td_60_Template, 2, 1, "td", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](61, 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](62, ScoringComponent_div_6_th_62_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](63, ScoringComponent_div_6_td_63_Template, 2, 1, "td", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](64, 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](65, ScoringComponent_div_6_th_65_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](66, ScoringComponent_div_6_td_66_Template, 3, 5, "td", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](67, ScoringComponent_div_6_tr_67_Template, 1, 0, "tr", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](68, ScoringComponent_div_6_tr_68_Template, 1, 4, "tr", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](69, "as-split-area", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](70, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](71, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](72, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](73, "h2", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](75, "mat-dialog-content", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](76, "mat-form-field", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](77, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("keyup", function ScoringComponent_div_6_Template_input_keyup_77_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r312); const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r314.applyFilterLeave($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](78, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](79, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_div_6_Template_button_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r312); const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r315.addLeave(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](80, "mat-icon", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](81, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](83, "mat-dialog-content", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](84, "table", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](85, 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](86, ScoringComponent_div_6_th_86_Template, 2, 0, "th", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](87, ScoringComponent_div_6_td_87_Template, 2, 1, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](88, 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](89, ScoringComponent_div_6_th_89_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](90, ScoringComponent_div_6_td_90_Template, 2, 1, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](91, 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](92, ScoringComponent_div_6_th_92_Template, 2, 1, "th", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](93, ScoringComponent_div_6_td_93_Template, 2, 1, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](94, 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](95, ScoringComponent_div_6_th_95_Template, 2, 1, "th", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](96, ScoringComponent_div_6_td_96_Template, 2, 1, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](97, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](98, ScoringComponent_div_6_th_98_Template, 2, 0, "th", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](99, ScoringComponent_div_6_td_99_Template, 2, 1, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](100, 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](101, ScoringComponent_div_6_th_101_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](102, ScoringComponent_div_6_td_102_Template, 2, 1, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](103, 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](104, ScoringComponent_div_6_th_104_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](105, ScoringComponent_div_6_td_105_Template, 2, 1, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](106, 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](107, ScoringComponent_div_6_th_107_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](108, ScoringComponent_div_6_td_108_Template, 3, 4, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](109, 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](110, ScoringComponent_div_6_th_110_Template, 2, 1, "th", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](111, ScoringComponent_div_6_td_111_Template, 3, 4, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](112, 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](113, ScoringComponent_div_6_th_113_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](114, ScoringComponent_div_6_td_114_Template, 2, 1, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](115, 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](116, ScoringComponent_div_6_th_116_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](117, ScoringComponent_div_6_td_117_Template, 3, 4, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](118, 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](119, ScoringComponent_div_6_th_119_Template, 2, 1, "th", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](120, ScoringComponent_div_6_td_120_Template, 3, 4, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](121, 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](122, ScoringComponent_div_6_th_122_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](123, ScoringComponent_div_6_td_123_Template, 2, 1, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](124, 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](125, ScoringComponent_div_6_th_125_Template, 2, 1, "th", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](126, ScoringComponent_div_6_td_126_Template, 2, 1, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerStart"](127, 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](128, ScoringComponent_div_6_th_128_Template, 2, 1, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](129, ScoringComponent_div_6_td_129_Template, 3, 5, "td", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](130, ScoringComponent_div_6_tr_130_Template, 1, 0, "tr", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](131, ScoringComponent_div_6_tr_131_Template, 1, 4, "tr", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("gutterSize", ctx_r3.isMobileLayout ? 30 : 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("size", ctx_r3.isMobileLayout ? 50 : 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("hidden", !ctx_r3.formSettings.value.chkPFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("formGroup", ctx_r3.formPFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r3.languageMap["Kolon Se\u00E7im"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngForOf", ctx_r3.columnsSArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("filterType", ctx_r3.filterType)("exampleEntity", ctx_r3.filterEntity)("dataSource", ctx_r3.dataSourceS);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngForOf", ctx_r3.columnsSArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.columnsS)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matRowDefColumns", ctx_r3.columnsS);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matFooterRowDef", ctx_r3.columnsS)("matFooterRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("size", ctx_r3.isMobileLayout ? "50" : "40");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("direction", ctx_r3.isMobileLayout ? "vertical" : "horizontal")("gutterSize", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("size", ctx_r3.isMobileLayout ? 40 : 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r3.languageMap["Hareketler"].labelName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpropertyInterpolate"]("placeholder", ctx_r3.languageMap["Filtre"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r3.languageMap["Yeni Kay\u0131t"].labelName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("dataSource", ctx_r3.dataSourceIO);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.columnsIO)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matRowDefColumns", ctx_r3.columnsIO);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("size", ctx_r3.isMobileLayout ? 60 : 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r3.languageMap["\u0130zinler"].labelName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵpropertyInterpolate"]("placeholder", ctx_r3.languageMap["Filtre"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"](" ", ctx_r3.languageMap["Yeni Kay\u0131t"].labelName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("dataSource", ctx_r3.dataSourceL);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.columnsL)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matRowDefColumns", ctx_r3.columnsL);
} }
function ScoringComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_10_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r318); const definition_r316 = restoredCtx.definition; const ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r317.addAttendance(definition_r316); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2, "Hareket Giri\u015F Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](5, "G\u00FCnl\u00FCk \u0130zin Giri\u015Fleri");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](6, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](8, "Saatlik \u0130zin Giri\u015Fleri");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](9, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](11, "Mesaileri \u0130ptal Et");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](13, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](15, "G\u00FCn\u00FCn vardiyas\u0131n\u0131n de\u011Fi\u015Ftir");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](16, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](18, "Haftan\u0131n vardiyas\u0131n\u0131n de\u011Fi\u015Ftir");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} }
function ScoringComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](0, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](3, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_13_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r321); const item_r319 = restoredCtx.item; const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r320.editContact(item_r319); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](6, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_13_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r321); const item_r319 = restoredCtx.item; const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r322.Approve(item_r319, null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](8, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_13_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r321); const item_r319 = restoredCtx.item; const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r323.Approve(item_r319, null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](10, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_13_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r321); const item_r319 = restoredCtx.item; const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r324.ApproveCancel(item_r319, null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](13, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_13_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r321); const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r325.addLeave({ Type: 1 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](15, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_13_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r321); const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r326.addLeave({ Type: 2 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](18, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_13_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r321); const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r327.getScoringFilter("and s.Approve=1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](20, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_13_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r321); const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r328.getScoringFilter("and s.Approve=0"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](22, "mat-divider");
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r7.languageMap["Dosya Aktar\u0131m"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r7.languageMap["Personel Bilgileri"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r7.languageMap["\u0130zin i\u00E7in Onayla"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r7.languageMap["Onay"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r7.languageMap["Onay \u0130ptal"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r7.languageMap["G\u00FCnl\u00FCk \u0130zin Giri\u015Fleri"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r7.languageMap["Saatlik \u0130zin Giri\u015Fleri"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r7.languageMap["Onayl\u0131lar\u0131 G\u00F6ster"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r7.languageMap["Onays\u0131zlar\u0131 G\u00F6ster"].labelName);
} }
function ScoringComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](4, "mat-slide-toggle", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](8, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](9, "mat-slide-toggle", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](13, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](14, "mat-slide-toggle", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"]("", ctx_r9.languageMap["Kolon Se\u00E7im Yap"].labelName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"]("", ctx_r9.languageMap["Personel Toplam"].labelName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"]("", ctx_r9.languageMap["Kolon Sabitle"].labelName, " ");
} }
function ScoringComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r331 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_20_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r331); const definition_r329 = restoredCtx.definition; const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r330.updateLeave(definition_r329); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](1, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_20_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r331); const definition_r329 = restoredCtx.definition; const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r332.deleteLeave(definition_r329); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](5, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r11.icEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r11.languageMap["G\u00FCncelle"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r11.icDeleteForever);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r11.languageMap["Sil"].labelName);
} }
function ScoringComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_23_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r335); const definition_r333 = restoredCtx.definition; const ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r334.updateAttendance(definition_r333); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](1, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function ScoringComponent_ng_template_23_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵrestoreView"](_r335); const definition_r333 = restoredCtx.definition; const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"](); return ctx_r336.deleteAttendance(definition_r333); });
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](5, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r13.icEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r13.languageMap["G\u00FCncelle"].labelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("icIcon", ctx_r13.icDeleteForever);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx_r13.languageMap["Sil"].labelName);
} }
const MY_FORMATS = {
    parse: {
        dateInput: "LL"
    },
    display: {
        dateInput: "LL",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "LL",
        monthYearA11yLabel: "MMMM YYYY"
    }
};
const moment = moment__WEBPACK_IMPORTED_MODULE_26__;
//
class ScoringComponent {
    constructor(datepipe, route, authorizationService, definitionsService, personnelService, attendanceService, styleService, leavesService, scoringService, cd, fb, dialog, snackbar, router, adapter, configService, layoutService, location) {
        this.datepipe = datepipe;
        this.route = route;
        this.authorizationService = authorizationService;
        this.definitionsService = definitionsService;
        this.personnelService = personnelService;
        this.attendanceService = attendanceService;
        this.styleService = styleService;
        this.leavesService = leavesService;
        this.scoringService = scoringService;
        this.cd = cd;
        this.fb = fb;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.router = router;
        this.adapter = adapter;
        this.configService = configService;
        this.layoutService = layoutService;
        this.language = [];
        this.languageMap = {};
        this.activeLinkIndex = 0;
        this.links = [];
        this.filterHide = false;
        this.nxtDisabled = true;
        this.footerHide = true;
        this.calculatingPersonel = '';
        this.scoreLabel = 'Hesapla';
        this.FilteroObjEnableArray = [true];
        this.selectedRowIndex = 0;
        this.selectedRowIndex2 = 0;
        this.selectedRowIndex3 = 0;
        this.icRefresh = _iconify_icons_ic_refresh__WEBPACK_IMPORTED_MODULE_14__["default"];
        this.icFilter = _iconify_icons_ic_filter_list__WEBPACK_IMPORTED_MODULE_20__["default"];
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_18__["default"];
        this.icCalculator = _iconify_icons_fa_solid_calculator__WEBPACK_IMPORTED_MODULE_9__["default"];
        this.icColumns = _iconify_icons_fa_solid_columns__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.calcScoring = true;
        this.objList = [];
        this.scoringChangedValues = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_39__.SelectionModel(true, []);
        this.Collarcolors = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];
        this.columnsS = [];
        this.pCALISMA = {};
        this.tCALISMA = {};
        this.columnsIO = ['ID', 'Code', 'NewDateTime', 'ReasonID', 'Device', 'ONewDateTime', 'OReasonID', 'ODevice', 'Actions'];
        this.columnsL = ['ID', 'EmployeeCode', 'Name', 'Surname', 'ReasonID', 'ReasonCode', 'ReasonName', 'StartDate', 'StartTime', 'Day', 'EndDate', 'EndTime', 'Description', 'CalcDescription', 'Actions'];
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormControl('fullwidth');
        this.pPRSICILID = 0;
        this.pPRSICIL = 0;
        this.pPRSICILName = '';
        this.pPRSICILSurname = '';
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13__["default"];
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 20, 50];
        this.selectionS = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_39__.SelectionModel(true, []);
        this.selectionL = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_39__.SelectionModel(true, []);
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormControl();
        this.scoringViews = [];
        this.defaultScoringViewID = 0;
        this.ScoringView = new _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormControl();
        this.searchStr = this.searchCtrl.valueChanges;
        this.leavesRecordIndex = 0;
        this.calcDisabled = true;
        this.saveDisabled = true;
        this.labels = _static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_1__.aioTableLabels;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15__["default"];
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16__["default"];
        this.icDeleteForever = _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_17__["default"];
        this.icExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19__["default"];
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.icSearch = _iconify_icons_fa_solid_search__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.leaves = [{ Name: 'Hepsi', Checked: true }, { Name: 'Günlük İzinler', Checked: false }, { Name: 'Saatlik İzinler', Checked: false }];
        this.pageauth = { write: false, delete: false, update: false };
        this.workingTypeList = [];
        this.tableColumns = [];
        this.selectedRow = 0;
        this.updatePanelHidden = false;
        this.tabWait = 0;
        this.bCalc = true;
        this.say = 0;
        this.totalRecords = 0;
        this.isMobileLayout = false;
        this.contextMenuPosition = { x: '0px', y: '0px' };
        this.configs = _vex_services_configs__WEBPACK_IMPORTED_MODULE_28__.configs;
    }
    ngOnInit() {
        window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; };
        this.isMobileLayout = window.innerWidth <= 991;
        this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
        // this.backgroundColor=JSON.parse(sessionStorage.getItem('Color'))["default"];
        let startDate = moment(new Date());
        startDate.add(-10, 'days');
        let endDate = moment(new Date());
        this.route.paramMap.subscribe(params => {
            this.href = this.router.url;
            this.getUser(JSON.parse(localStorage.getItem('Username')), this.href.replace(/\//g, '@'));
            let tabs = [
                { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Puantaj Günlük Hesaplama' },
                { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Puantaj Günlük Tablo' },
            ];
            this.getUserTabs(tabs);
            tabs = [
                { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Temel Bilgiler' },
                { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Amir Bilgileri' },
                { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Amir Bağlı Personeller' },
                { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Kimlik Bilgisi' },
                { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel İletişim Bilgisi' },
                { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Arşiv' }
            ];
            this.getEmployeeTabs(tabs);
            this.turkishCulture();
            this.languageMap = _interfaces_util__WEBPACK_IMPORTED_MODULE_0__["default"].getLabels();
            this.breadcrumbs = [this.languageMap['Puantaj'].labelName, this.languageMap['Puantaj Hesaplama'].labelName, this.languageMap['Günlük Puantaj'].labelName];
            this.form = this.fb.group({
                Emp1: null, Emp2: null, EmpType1: null, EmpType2: null, Depart1: null, Depart2: null, Cost1: null, Cost2: null, Cadre1: null, Cadre2: null, Prof1: null, Prof2: null,
                Task1: null, Task2: null, Group1: null, Group2: null, Unit1: null, Unit2: null, Branch1: null, Branch2: null, Service1: null, Service2: null, Collar1: null, Collar2: null, Value: null,
                Type: null, StartDate: [startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.Validators.required], EndDate: [endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.Validators.required]
            });
            this.formPFilter = this.fb.group({ ID: false, EmployeeID: false, EmployeeCode: true, Name: false, Surname: false, Department: false, ShiftGroupDate: false, Scoring: false, Date: true, ShiftGroupCode: true, ShiftCode: true });
            this.formFilter = this.fb.group({ StartDate1: startDate, EndDate1: endDate });
            this.searchForm = this.fb.group({ departureDate: '' });
            this.formSettings = this.fb.group({ chkPFooter: false, chkPFilter: false, chkFreeze: false });
            this.filterEntity = {};
            this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_41__.MatTableFilter.ANYWHERE;
        });
        this.definitionGetTypes();
        this.personnelGetFilterColumns();
        this.getPersonnel();
        for (let index = 0; index < 15; index++)
            this.FilteroObjEnableArray[index] = true;
    }
    onContextMenu(event, item) {
        event.preventDefault();
        this.contextMenuPosition.x = event.clientX + 'px';
        this.contextMenuPosition.y = event.clientY + 'px';
        this.contextMenu.menuData = { 'item': item };
        this.contextMenu.menu.focusFirstItem('mouse');
        this.contextMenu.openMenu();
    }
    getMoreInformation(row) {
        return "ADI:" + row['Name'] + " " + row['Surname'] + "\n" + "DEPARTMAN:" + row['Department'] + "\n" + "POSTA TARIH:" + row['ShiftGroupDate'];
    }
    definitionGetTypes() {
        this.definitionsService.DefinitionGetWorkingTypesById(0)
            .subscribe((res) => {
            Object.keys(res).forEach((key) => {
                let data = { ID: res[key].ID, Code: res[key].Code, Name: res[key].Name };
                this.workingTypeList.push(data);
            });
            // this.dataSource = new MatTableDataSource();
            // this.dataSource.data = res;
        });
    }
    getPersonnel() {
        const dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_24__.WaitComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        this.form.value.Type = null;
        this.personnelService.GetPersonnel(this.form.value)
            .subscribe((res) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatTableDataSource(res);
            this.dataSource.paginator = this.usrPaginator;
            dialogRef.close();
        }, err => {
            console.log(err);
            // this.waitProgress(err, 3000);
            dialogRef.close();
        });
    }
    ngOnChanges(changes) {
        // if (changes["dataSource"]) {
        //   this.dataSource.paginator = this.usrPaginator;
        // }
        // if (changes.columns) {
        //   this.visibleColumns = this.columns.map(column => column.property);
        // }
        // if (changes.data) {
        //   this.dataSource.data = this.data;
        //   this.dataSource.paginator = this.usrPaginator;
        // }
        // if (changes.searchStr) {
        //   this.dataSource.filter = (this.searchStr || '').toString().trim().toLowerCase();
        // }
    }
    calculateScoring(obj) {
        return this.scoringService.CalculateScoring(obj).toPromise().then(data => {
            this.response = data;
            // console.log(this.response);
        });
    }
    calculate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_43__.__awaiter)(this, void 0, void 0, function* () {
            let idd = uuid__WEBPACK_IMPORTED_MODULE_25__.v4();
            if (this.scoreLabel === 'Hesapla') {
                this.scoreLabel = 'Durdur';
                this.bCalc = true;
            }
            else {
                this.scoreLabel = 'Hesapla';
                this.bCalc = false;
            }
            ;
            if (this.bCalc) {
                this.calculatingPersonel = this.languageMap['Hesaplama Başlıyor...'].labelName;
                this.progresValue = 0;
                this.calculateArray = new Array(this.selection.selected.length);
                this.say = 0;
            }
            let aaArray = [];
            let say2 = 0;
            let sayy = 0;
            for (var key in this.selection.selected) {
                sayy++;
                const aa = {
                    Count: this.say, type: this.leavesRecordIndex,
                    EmployeeID: this.selection.selected[key].ID,
                    ID: idd,
                    CompanyID: JSON.parse(sessionStorage.getItem('CompanyId')),
                    StartDate: moment(this.form.value.StartDate).format('YYYY-MM-DD'),
                    EndDate: moment(this.form.value.EndDate).format('YYYY-MM-DD'),
                    SendResult: (sayy == this.selection.selected.length) ? true : false
                };
                aaArray.push(aa);
                if (this.bCalc) {
                    this.say++;
                    say2++;
                    if (this.say === this.selection.selected.length) {
                        let response2 = yield this.calculateScoring(aaArray);
                        console.log("Bittii>>>");
                        console.log(this.response);
                        console.log("Bittii<<<<");
                    }
                    if (say2 === 50) {
                        let response = yield this.calculateScoring(aaArray);
                        // console.log(response);
                        say2 = 0;
                        aaArray = [];
                    }
                    this.calculatingPersonel = this.selection.selected[key].Code + '-' + this.selection.selected[key].Name + ' ' + this.selection.selected[key].Surname + ' ' + this.languageMap['puantaj hesaplanıyor...'].labelName + ' ' + ' Kayıt: ( ' + this.say.toString() + '/' + this.selection.selected.length.toString() + ' )';
                    this.progresValue = this.progresValue + (100 / this.selection.selected.length);
                    if (this.say === this.selection.selected.length) {
                        this.scoreLabel = 'Hesapla';
                    }
                }
                else
                    break;
            }
        });
    }
    changeView(e) {
        this.defaultScoringViewID = e.value;
        this.getScoring(this.leavesRecordIndex, 0, this.form.value.StartDate, this.form.value.EndDate, e.value, null);
    }
    getScoringFilter(filter) {
        this.getScoring(this.leavesRecordIndex, 0, this.form.value.StartDate, this.form.value.EndDate, this.defaultScoringViewID, filter);
    }
    getScoring(type, Id, StartDate, EndDate, view, filter) {
        const dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_24__.WaitComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        this.footerHide = true;
        this.dataSourceS = null;
        this.dataSourceL = null;
        this.dataSourceIO = null;
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_41__.MatTableFilter.ANYWHERE;
        let startDate = moment(StartDate).format('YYYY-MM-DD');
        let endDate = moment(EndDate).format('YYYY-MM-DD');
        let idArray = '';
        this.selection.selected.forEach(element => {
            idArray += element['ID'] + ',';
        });
        // console.log(idArray)
        this.scoringService.GetScoring(0, idArray, Id, startDate, endDate, this.defaultScoringViewID, filter)
            .subscribe((res) => {
            let say = 0;
            this.columnsSArray = [];
            if (res.length === 0) {
                dialogRef.close();
                return;
            }
            for (let item of Object.keys(res[0])) {
                if (item === "filter")
                    this.columnsSArray.push({ type: 'button', property: item, label: item });
                else if (item === "EmployeeID" || item === "EmployeeCode" || item === "Name" || item === "Surname" || item === "Department" || item === "Scoring" || item === "ShiftGroupCode"
                    || item === "ShiftCode")
                    this.columnsSArray.push({ type: 'text', property: item, label: item });
                else if (item === "ShiftGroupDate" || item === "Date")
                    this.columnsSArray.push({ type: 'date', property: item, label: item });
                else if (item.includes("WorkingTime")) {
                    if (this.workingTypeList.filter((sitem) => sitem["ID"].toString() === item.replace('WorkingTime', '')).length > 0)
                        this.columnsSArray.push({ type: 'time', property: item, label: this.workingTypeList.filter((sitem) => sitem["ID"].toString() === item.replace('WorkingTime', ''))[0].Name });
                    else
                        this.columnsSArray.push({ type: 'time', property: item, label: '' });
                    this.pCALISMA[item] = 0;
                    this.tCALISMA[item] = 0;
                }
            }
            this.columnsS = [] = this.columnsSArray.map(column => column.property);
            this.footerHide = false;
            this.dataSourceS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatTableDataSource();
            this.dataSourceS.data = res;
            this.dataSourceS.paginator = this.viewPaginator;
            this.setFooter(res);
            this.getLeaves(0, 0, this.form.value.StartDate, this.form.value.EndDate, null);
            this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, null);
            dialogRef.close();
        }, err => {
            console.log(err);
            dialogRef.close();
        });
    }
    Approve(item, something) {
        console.log(item);
        item["Approve"] = true;
        this.scoringChangedValues = [];
        this.scoringChangedValues.push(item);
        this.saveScoring();
    }
    ApproveCancel(item, something) {
        console.log(item);
        item["Approve"] = false;
        this.scoringChangedValues = [];
        this.scoringChangedValues.push(item);
        this.saveScoring();
    }
    saveScoring() {
        const dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_24__.WaitComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        console.log(this.scoringChangedValues);
        this.scoringService.PostScoring(this.scoringChangedValues)
            .subscribe((res) => {
            // this.saveEnabled = false;
            // this.getScoringSilent(this.leavesRecordIndex, this.scoringChangedValues[0]["EmployeeID"], this.scoringChangedValues[0].Date, this.scoringChangedValues[0].Date, this.defaultScoringViewID);
            this.getScoring(this.leavesRecordIndex, 0, this.form.value.StartDate, this.form.value.EndDate, this.defaultScoringViewID, null);
            dialogRef.close();
            this.scoringChangedValues = [];
            this.calcScoring = true;
            // try {
            //   for (let index = 0; index < this.objList.length; index++) {
            //     const element = document.getElementById(this.objList[index]);
            //     element.style.color = 'black';
            //     element.style.fontSize = '10px';
            //     element.style.fontWeight = 'normal';
            //   }
            // } catch (error) {
            //   console.log(error);
            // }
        }, err => {
            console.log(err);
            dialogRef.close();
        });
    }
    scoringChanged(column, row, event) {
        // console.log(row);
        // this.objList.push(event.target.id);
        // this.scoringChangedValues.push({ ID: row.ID, WorkingTime: column, Value: event.target.value });
        // row[column]=moment(event.target.value,"YYYY-MM-DD HH:mm:ss");
        row[column] = '1900-01-01T' + event.target.value + ':00';
        const element = document.getElementById(event.target.id);
        element.style.color = 'red';
        element.style.fontSize = '12px';
        element.style.fontWeight = 'bolder';
        this.calcScoring = false;
    }
    setFooter(data) {
        for (var prop in this.tCALISMA) {
            if (this.tCALISMA.hasOwnProperty(prop)) {
                this.tCALISMA[prop] = 0;
            }
        }
        this.dataSourceS.data.forEach(row => {
            var start = "1900-01-01 00:00:00";
            for (let item of Object.keys(row)) {
                if (item.includes("WorkingTime"))
                    this.tCALISMA[item] += moment(row[item], "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
            }
        });
    }
    showWaitScreen(observable) {
        let dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_24__.WaitComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        let subscription = observable.subscribe((response) => {
            subscription.unsubscribe();
            console.log(response);
            dialogRef.close();
        }, (error) => {
            subscription.unsubscribe();
            dialogRef.close();
        });
    }
    filterScoring() {
        // if (this.activeLinkIndex === 1) this.getScoring(this.leavesRecordIndex, 0, this.form.value.StartDate, this.form.value.EndDate);
        // else {
        this.selection.clear();
        this.calculatingPersonel = "";
        this.scoreLabel = 'Hesapla';
        this.progresValue = 0;
        this.calculateArray = new Array(this.selection.selected.length);
        this.say = 0;
        this.getPersonnel();
        // }
    }
    definitionGetScoringDeff(row) {
        let id = 0;
        if (row === null)
            id = 0;
        else if (row.ID === undefined)
            id = 0;
        else
            id = row.ID;
        this.scoringViews = [];
        this.scoringService.GetScoringDeff(id)
            .subscribe((res) => {
            res.forEach(element => {
                if (element.Default)
                    this.defaultScoringViewID = element.ID;
                this.scoringViews.push({ ID: element.ID, Name: element.Name, Default: element.Default });
            });
        });
    }
    gotoTab(index) {
        if (index === 0)
            this.filterScoring();
        else {
            this.getScoring(this.leavesRecordIndex, 0, this.form.value.StartDate, this.form.value.EndDate, this.defaultScoringViewID, null);
            this.definitionGetScoringDeff(null);
        }
        this.nxtDisabled = true;
        this.activeLinkIndex = index;
    }
    ngDoCheck() {
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
    getUserTabs(tabs) {
        this.authorizationService.GetUserTabs(tabs)
            .subscribe((res) => {
            this.tabAuth = res;
            Object.keys(this.tabAuth).forEach((key) => {
                if (this.tabAuth[key].read)
                    this.links.push({ index: Number(key), name: this.tabAuth[key].tabname.replace('Günlük ', '') });
            });
        }, err => {
            console.log(err);
        });
    }
    getEmployeeTabs(tabs) {
        this.authorizationService.GetUserTabs(tabs)
            .subscribe((res) => {
            this.tabEmpAuth = res;
        }, err => {
            console.log(err);
        });
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    applyFilterLeave(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSourceL.filter = filterValue;
    }
    applyFilterAttendance(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSourceIO.filter = filterValue;
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
        if (this.selection.selected.length == 0)
            this.nxtDisabled = true;
        else
            this.nxtDisabled = false;
    }
    detailToggle(row) {
        this.selection.toggle(row);
        if (this.selection.selected.length == 0)
            this.nxtDisabled = true;
        else
            this.nxtDisabled = false;
    }
    openDefinition(value, obj) {
        this.dialog.open(_scoring_scoring_definitions_component__WEBPACK_IMPORTED_MODULE_21__.ScoringDefinitionsComponent, {
            panelClass: 'listClass',
            data: { Type: value, Data: { ID: null, Code: null, Name: null } },
            disableClose: false,
            width: '450px',
            height: '600px'
        }).afterClosed().subscribe(result => {
            if (value == '0') {
                if (obj == 1) {
                    this.form.patchValue({ Emp1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[0] = false;
                    else
                        this.FilteroObjEnableArray[0] = true;
                }
                else
                    this.form.patchValue({ Emp2: result.Code });
            }
            if (value == '3') {
                if (obj == 1) {
                    this.form.patchValue({ EmpType1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[3] = false;
                    else
                        this.FilteroObjEnableArray[3] = true;
                }
                else
                    this.form.patchValue({ EmpType2: result.Code });
            }
            if (value == '1') {
                if (obj == 1) {
                    this.form.patchValue({ Depart1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[1] = false;
                    else
                        this.FilteroObjEnableArray[1] = true;
                }
                else
                    this.form.patchValue({ Depart2: result.Code });
            }
            if (value == '4') {
                if (obj == 1) {
                    this.form.patchValue({ Cost1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[4] = false;
                    else
                        this.FilteroObjEnableArray[4] = true;
                }
                else
                    this.form.patchValue({ Cost2: result.Code });
            }
            if (value == '5') {
                if (obj == 1) {
                    this.form.patchValue({ Cadre1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[5] = false;
                    else
                        this.FilteroObjEnableArray[5] = true;
                }
                else
                    this.form.patchValue({ Cadre2: result.Code });
            }
            if (value == '6') {
                if (obj == 1) {
                    this.form.patchValue({ Prof1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[6] = false;
                    else
                        this.FilteroObjEnableArray[6] = true;
                }
                else
                    this.form.patchValue({ Prof2: result.Code });
            }
            if (value == '7') {
                if (obj == 1) {
                    this.form.patchValue({ Task1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[7] = false;
                    else
                        this.FilteroObjEnableArray[7] = true;
                }
                else
                    this.form.patchValue({ Task2: result.Code });
            }
            if (value == '8') {
                if (obj == 1) {
                    this.form.patchValue({ Group1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[8] = false;
                    else
                        this.FilteroObjEnableArray[8] = true;
                }
                else
                    this.form.patchValue({ Group2: result.Code });
            }
            if (value == '9') {
                if (obj == 1) {
                    this.form.patchValue({ Unit1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[9] = false;
                    else
                        this.FilteroObjEnableArray[9] = true;
                }
                else
                    this.form.patchValue({ Unit2: result.Code });
            }
            if (value == '10') {
                if (obj == 1) {
                    this.form.patchValue({ Branch1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[10] = false;
                    else
                        this.FilteroObjEnableArray[10] = true;
                }
                else
                    this.form.patchValue({ Branch2: result.Code });
            }
            if (value == '11') {
                if (obj == 1) {
                    this.form.patchValue({ Service1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[11] = false;
                    else
                        this.FilteroObjEnableArray[11] = true;
                }
                else
                    this.form.patchValue({ Service2: result.Code });
            }
            if (value == '12') {
                if (obj == 1) {
                    this.form.patchValue({ Gomlek1: result.Code });
                    if (result.ID == null)
                        this.FilteroObjEnableArray[12] = false;
                    else
                        this.FilteroObjEnableArray[12] = true;
                }
                else
                    this.form.patchValue({ Gomlek2: result.Code });
            }
        });
    }
    ClearPFilter() {
        this.form.reset();
        let startDate = moment(new Date());
        let endDate = moment(new Date());
        startDate.add(-10, 'days');
        this.form.patchValue({ StartDate: startDate, EndDate: endDate });
        this.dataSource = null;
        this.footerHide = true;
    }
    filterPersonnel() {
        this.personnelGetFilterColumns();
        this.getPersonnel();
    }
    detailToggleS(selected) {
        if (this.selectedRowIndex !== selected.ID) {
            this.selectedRowIndex = selected.ID;
            for (var prop in this.pCALISMA) {
                if (this.pCALISMA.hasOwnProperty(prop)) {
                    this.pCALISMA[prop] = 0;
                }
            }
            // var start = "1900-01-01 00:00:00";
            // for (let item of Object.keys(row)) {
            //   if (item.includes("WorkingTime"))
            //     this.tCALISMA[item] += moment(row[item], "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
            // }
            this.dataSourceS.data.forEach(row => {
                if (selected.EmployeeCode === row.EmployeeCode) {
                    var start = "1900-01-01 00:00:00";
                    for (let item of Object.keys(row)) {
                        this.pCALISMA[item] += moment(row[item], "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    }
                    // this.pCALISMA.CALISMA2 += moment(row.CALISMA2, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA3 += moment(row.CALISMA3, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA4 += moment(row.CALISMA4, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA5 += moment(row.CALISMA5, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA19 += moment(row.CALISMA19, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA36 += moment(row.CALISMA36, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA37 += moment(row.CALISMA37, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA38 += moment(row.CALISMA38, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA39 += moment(row.CALISMA39, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA44 += moment(row.CALISMA44, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA47 += moment(row.CALISMA47, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA48 += moment(row.CALISMA48, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA49 += moment(row.CALISMA49, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                    // this.pCALISMA.CALISMA50 += moment(row.CALISMA50, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
                }
            });
            this.pPRSICILID = selected.EmployeeID;
            this.pPRSICIL = selected.EmployeeCode;
            this.pPRSICILName = selected.Name;
            this.pPRSICILSurname = selected.Surname;
            let startDate = moment(selected.YIL + '-' + selected.AY + '-' + '01').format('YYYY-MM-DD');
            let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');
            this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, selected.EmployeeCode);
            this.getLeaves(0, 0, this.form.value.StartDate, this.form.value.EndDate, selected.EmployeeCode);
        }
    }
    getLeaves(type, Id, StartDate, EndDate, EmployeeCode) {
        let startDate = moment(StartDate).format('YYYY-MM-DD');
        let endDate = moment(EndDate).format('YYYY-MM-DD');
        const dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_24__.WaitComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (EmployeeCode !== null)
            this.leavesService.GetLeavesEmployee(null, Id, startDate, endDate, EmployeeCode)
                .subscribe((res) => {
                console.log(res);
                this.dataSourceL = new _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatTableDataSource();
                this.dataSourceL.data = res;
                dialogRef.close();
            }, err => {
                console.log(err);
                dialogRef.close();
            });
        else
            this.leavesService.GetLeaves(null, Id, startDate, endDate)
                .subscribe((res) => {
                console.log(res);
                this.dataSourceL = new _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatTableDataSource();
                this.dataSourceL.data = res;
                dialogRef.close();
            }, err => {
                console.log(err);
                dialogRef.close();
            });
    }
    addLeave(item) {
        console.log(item);
        this.dialog.open(_leave_record_component__WEBPACK_IMPORTED_MODULE_22__.LeaveRecordComponent, {
            data: { Type: 0, Data: { 'Type': null, 'EmployeeID': this.pPRSICILID === 0 ? null : this.pPRSICILID, 'EmployeeCode': this.pPRSICIL === 0 ? null : this.pPRSICIL, 'EmployeeName': this.pPRSICILName + ' ' + this.pPRSICILSurname } },
            panelClass: 'myapp-no-padding-dialog',
            // panelClass: 'custom-modalbox',
            disableClose: false,
            autoFocus: false,
            width: '600px',
        }).afterClosed().subscribe(result => {
            if (result)
                this.getLeaves(0, 0, this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
        });
    }
    editContact(item) {
        this.dialog.open(_personnel_components_personnels_edit_personnels_edit_component__WEBPACK_IMPORTED_MODULE_27__.PersonnelsEditComponent, {
            panelClass: 'myapp-no-padding-dialog',
            data: { type: 'edit', contactId: item.EmployeeID || null, chief:  false || null, auth: false, tabAuth: this.tabEmpAuth },
            width: '1100px',
            height: '770px',
            disableClose: true,
            maxWidth: this.isMobileLayout ? '100vw' : '80vw'
            // panelClass: 'padding:0px'
        }).afterClosed().subscribe(result => {
            // if (result)
            //   this.getPersonnel(null);
        });
    }
    updateLeave(row) {
        this.dialog.open(_leave_record_component__WEBPACK_IMPORTED_MODULE_22__.LeaveRecordComponent, {
            data: { RecordOrInout: 1, Data: row },
            panelClass: 'myapp-no-padding-dialog',
            disableClose: false,
            autoFocus: true,
            width: '600px',
        }).afterClosed().subscribe(result => {
            if (result)
                this.getLeaves(0, 0, this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
        });
    }
    deleteLeave(row) {
        this.openDialog(row.ID, 0, 'Leave');
    }
    addAttendance(row) {
        // data: { RecordOrInout: 1, Data: {  'EmployeeCode': this.pPRSICIL === 0 ? null : this.pPRSICIL, 'IIDNO': null, 'OIDNO': null, 'ReasonID': 0, 'OReasonID': 0, 'Name': this.pPRSICILName, 'Surname': this.pPRSICILSurname, 'NewDateTime': null, 'ONewDateTime': null } },
        this.dialog.open(_attendance_attendance_record_component__WEBPACK_IMPORTED_MODULE_23__.AttendanceRecordComponent, {
            data: {
                RecordOrInout: 1, Data: {
                    'ID': this.pPRSICILID,
                    'EmployeeCode': this.pPRSICIL === 0 ? null : this.pPRSICIL, 'IIDNO': null, 'OIDNO': null, 'ReasonID': 0, 'OReasonID': 0,
                    'Name': this.pPRSICILName, 'Surname': this.pPRSICILSurname, 'NewDateTime': null, 'ONewDateTime': null
                }
            },
            panelClass: 'myapp-no-padding-dialog',
            disableClose: false,
            autoFocus: false,
            width: '750px',
            maxWidth: this.isMobileLayout ? '100vw' : '80vw'
        }).afterClosed().subscribe(result => {
            if (result)
                this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
        });
    }
    updateAttendance(row) {
        console.log(row);
        this.dialog.open(_attendance_attendance_record_component__WEBPACK_IMPORTED_MODULE_23__.AttendanceRecordComponent, {
            data: { RecordOrInout: 1, Data: row },
            panelClass: 'myapp-no-padding-dialog',
            disableClose: false,
            autoFocus: false,
            width: '750px',
            maxWidth: this.isMobileLayout ? '100vw' : '80vw'
        }).afterClosed().subscribe(result => {
            if (result)
                this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
        });
    }
    deleteAttendance(row) {
        // console.log(row);
        this.openDialog(row.IIDNO, row.OIDNO, 'Attendance');
    }
    getAttendance(begin, end, employee) {
        const dialogRef = this.dialog.open(_wait_wait_component__WEBPACK_IMPORTED_MODULE_24__.WaitComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        var filter = this.form.value;
        filter.Type = 1;
        if (employee !== null) {
            filter.Emp1 = employee;
            filter.Emp2 = employee;
        }
        else {
            filter.Emp1 = null;
            filter.Emp2 = null;
        }
        this.attendanceService.GetAttendance(filter)
            .subscribe((res) => {
            this.dataSourceIO = new _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatTableDataSource();
            this.dataSourceIO.data = res;
            dialogRef.close();
        }, err => {
            console.log(err);
            dialogRef.close();
        });
    }
    deleteLeaveRecord(Id) {
        this.leavesService.DeleteLeaves(Id)
            .subscribe((res) => {
            this.getLeaves(this.leavesRecordIndex, 0, this.formFilter.value.StartDate1, this.formFilter.value.EndDate1, this.pPRSICIL === 0 ? null : this.pPRSICIL);
        });
    }
    deleteAttendanceRecord(IIDNO, OIDNO) {
        this.attendanceService.DeleteAttendance(IIDNO, OIDNO)
            .subscribe((res) => {
            this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
        });
    }
    openDialog(IIDNO, OIDNO, type) {
        this.dialog.open(DemoDialogComponent, {
            data: {
                temp1: type === 'Leave' ? this.languageMap['İzin bilgisi silinecektir.'].labelName : this.languageMap['Hareket bilgisi silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
                Hayir: this.languageMap['Hayır'].labelName
            },
            disableClose: false,
            width: '400px'
        }).afterClosed().subscribe(result => {
            this.result = result;
            if (this.result === "Yes") {
                if (type === 'Leave')
                    this.deleteLeaveRecord(IIDNO);
                if (type === 'Attendance')
                    this.deleteAttendanceRecord(IIDNO, (OIDNO == null ? 0 : OIDNO));
            }
        });
    }
    textSelected(name) {
        this.selectedObject = name;
    }
    turkishCulture() {
        this.adapter.setLocale("tr");
    }
    personnelGetFilterColumns() {
        let selectedColumns = [];
        this.personnelService.PersonnelGetFilterColumns('BAS_Employee')
            .subscribe((res) => {
            const arr = res;
            arr.forEach(element => {
                if (element.Active && element.ColumnName === 'Photo') {
                    const dataType = 'image';
                    const data = { label: element.Label, property: element.ColumnName, type: dataType, cssClasses: ['font-medium'] };
                    selectedColumns.push(data);
                }
            });
            selectedColumns.push({ label: 'Seç', property: 'select', type: 'checkbox', cssClasses: ['font-medium'] });
            arr.forEach(element => {
                if (element.Active) {
                    if (element.ColumnName === 'Photo')
                        return;
                    const dataType = (element.DATA_TYPE === 'datetime' ? 'date' : (element.ColumnName === 'Chief' ? 'button' : (element.ColumnName === 'Photo' ? 'image' : (element.DATA_TYPE === 'bit' ? 'checkbox' : 'text'))));
                    const data = { label: element.Label, property: element.ColumnName, type: dataType, cssClasses: ['font-medium'] };
                    selectedColumns.push(data);
                }
            });
            this.columns = selectedColumns;
            this.visibleColumns = selectedColumns.map(column => column.property);
        }, err => {
            console.log(err);
        });
    }
    // ngAfterViewInit() {
    //   this.dataSourceS.paginator = this.viewPaginator;
    // }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
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
ScoringComponent.ɵfac = function ScoringComponent_Factory(t) { return new (t || ScoringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_44__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_45__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_29__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_services_definitions_service__WEBPACK_IMPORTED_MODULE_30__.DefinitionsService), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_services_personnel_service__WEBPACK_IMPORTED_MODULE_31__.PersonnelService), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_services_attendance_service__WEBPACK_IMPORTED_MODULE_32__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_vex_services_style_service__WEBPACK_IMPORTED_MODULE_33__.StyleService), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_services_leaves_service__WEBPACK_IMPORTED_MODULE_34__.LeavesService), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_services_scoring_service__WEBPACK_IMPORTED_MODULE_35__.ScoringService), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_38__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_47__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_45__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_48__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_vex_services_config_service__WEBPACK_IMPORTED_MODULE_36__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_37__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_44__.Location)); };
ScoringComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineComponent"]({ type: ScoringComponent, selectors: [["scoring"]], viewQuery: function ScoringComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_49__.MatMenuTrigger, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵloadQuery"]()) && (ctx.viewPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵloadQuery"]()) && (ctx.usrPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵProvidersFeature"]([
            _angular_common__WEBPACK_IMPORTED_MODULE_44__.DatePipe,
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_48__.MAT_DATE_FORMATS,
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
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_48__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_50__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_48__.MAT_DATE_LOCALE] },
            // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            //  { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵNgOnChangesFeature"]], decls: 24, vars: 10, consts: [["mat-tab-nav-bar", "", "id", "tabElement11", 1, "class-mat-tab-link", 2, "width", "100%", "height", "5vh"], ["mat-tab-link", "", "style", "margin-top: -5px;", "class", "class-mat-tab-link", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["fxFlex", ""], [4, "ngIf"], [2, "overflow", "hidden", "height", "85vh"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "start", "style", "width: 100%;  height: 100%;", 4, "ngIf"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "start", "style", "width: 100%; height: 100%;", 4, "ngIf"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["xPosition", "after", "yPosition", "below"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], ["contextMenu", "matMenu"], ["ngNativeValidate", "", 3, "formGroup"], ["xPosition", "before", "yPosition", "below", 1, "my-menu"], ["contactMenu", "matMenu"], ["matMenuContent", "", "style", "padding: 5px;"], ["LeaveMenu", "matMenu"], ["AttendanceMenu", "matMenu"], ["mat-tab-link", "", 1, "class-mat-tab-link", 2, "margin-top", "-5px", 3, "ngStyle", "click"], [2, "width", "700px"], [2, "width", "60px"], ["mat-icon-button", "", "type", "button", 2, "top", "-12px", 3, "click"], [1, "mat-icon1", 2, "font-size", "30px"], [2, "font-size", "10px", "width", "100%", "margin-top", "-1px"], [2, "width", "100%", 3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["hidePageSize", "true", "showFirstLastButtons", "false", "pageSize", "20", 1, "class-mat-tab-link", 2, "font-size", "10px", "height", "45px", "margin-top", "-30px", "width", "100%", 3, "pageSizeOptions"], ["viewPaginator", ""], [3, "value"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "start", 2, "width", "100%", "height", "100%"], [3, "formGroup"], ["direction", "horizontal", 3, "gutterSize"], [3, "size"], ["fxFlex.lt-md", "auto", 1, "card", 2, "height", "100%"], ["fxLayout", "row", 2, "overflow", "hidden", "margin-bottom", "-20px"], [2, "width", "70%", "font-size", "10px", "overflow", "hidden"], ["matInput", "", 3, "placeholder", "keyup"], ["showFirstLastButtons", "false", "pageSize", "20", 2, "font-size", "10px", "height", "50px", "margin-top", "-5px", 3, "hidePageSize", "pageSizeOptions"], ["usrPaginator", ""], ["color", "success", "style", "margin-top: -15px; margin-right: 20px;", 3, "matTooltip", "click", 4, "ngIf"], ["fxLayout", "row", 2, "width", "100%", "justify-content", "flex-end", "background-color", "whitesmoke"], ["fxFlex", "none", 1, "sticky", "bottom-0", "left-0", "right-0", "border-t"], [2, "padding", "0px", "height", "45px"], ["fxFlex", "calc(25% - 12px)", "fxFlex.lt-md", "auto"], ["fxLayout", "row", 2, "height", "100%"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "disabled", "click"], ["inline", "true", "size", "18px", 1, "ltr:mr-3", "rtl:ml-3", 2, "margin-top", "-20px", 3, "icIcon"], ["mat-raised-button", "", "type", "button", 1, "flex-auto", 3, "disabled", "click"], ["inline", "true", "size", "18px", 1, "ltr:mr-3", "rtl:ml-3", 3, "icon"], ["fxFlex", "calc(75% - 12px)", "fxFlex.lt-md", "auto", 2, "padding", "5px", 3, "ngStyle"], [1, "card", 2, "height", "20px", "overflow-y", "hidden", "overflow-x", "hidden", 3, "ngStyle"], [3, "ngStyle", 4, "ngFor", "ngForOf"], ["mode", "determinate", 2, "height", "20px", 3, "value"], ["fxLayout", "row", 2, "overflow-y", "auto", "width", "100%", "margin-top", "0px", "height", "65vh"], ["mat-table", "", "fxFlex", "auto", 1, "w-full", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngStyle", 4, "matRowDef", "matRowDefColumns"], [1, "card", 2, "padding", "5px", 3, "hidden"], ["fxLayout", "row", 2, "padding", "5px"], ["mat-raised-button", "", "type", "button", 1, "flex-auto", 3, "click"], ["inline", "true", "size", "16px", 1, "ltr:mr-5", "rtl:ml-5", 3, "icon"], [2, "height", "72vh", "overflow-y", "scroll", "overflow-x", "hidden"], ["fxLayout", "row"], ["appearance", "outline"], ["format", "dd/mm/yyyy", "formControlName", "StartDate", "matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepickerStartDate", ""], ["format", "dd/mm/yyyy", "formControlName", "EndDate", "matInput", "", 3, "matDatepicker"], ["datepickerEndDate", ""], ["fxLayout", "row", 2, "margin-top", "-20px"], ["appearance", "outline", 3, "ngStyle"], ["formControlName", "Emp1", "matInput", "", 3, "click"], ["inline", "true", "matSuffix", "", 3, "icIcon", "click"], ["appearance", "outline", 4, "ngIf"], ["formControlName", "EmpType1", "matInput", "", 3, "click"], ["formControlName", "Depart1", "matInput", "", 3, "click"], ["formControlName", "Cost1", "matInput", "", 3, "click"], ["formControlName", "Cadre1", "matInput", "", 3, "click"], ["formControlName", "Prof1", "matInput", "", 3, "click"], ["formControlName", "Task1", "matInput", "", 3, "click"], ["formControlName", "Group1", "matInput", "", 3, "click"], ["formControlName", "Unit1", "matInput", "", 3, "click"], ["formControlName", "Branch1", "matInput", "", 3, "click"], ["formControlName", "Service1", "matInput", "", 3, "click"], ["formControlName", "Collar1", 2, "width", "100%"], ["formControlName", "Collar2", 2, "width", "100%"], ["color", "success", 2, "margin-top", "-15px", "margin-right", "20px", 3, "matTooltip", "click"], [3, "icIcon"], [3, "ngStyle"], ["matColumnDef", "select", 4, "ngIf"], [3, "matColumnDef", 4, "ngIf"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change", "click"], [3, "matColumnDef"], ["mat-header-cell", "", 3, "hidden", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "hidden", 4, "matCellDef"], ["mat-header-cell", "", 3, "hidden"], ["mat-cell", "", 3, "hidden"], [3, "checked", "disabled", "click"], ["mat-header-cell", "", "style", "width: 30px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "min-width: 2rem; width: 30px;", 4, "matCellDef"], ["mat-header-cell", "", 2, "width", "30px"], ["mat-cell", "", 2, "min-width", "2rem", "width", "30px"], [1, "avatar", "h-5", "w-5", "align-middle", "my-1", 3, "src"], ["class", "w-10", "mat-cell", "", 4, "matCellDef"], ["mat-cell", "", 1, "w-10"], ["mat-icon-button", "", "type", "button"], ["class", "text-amber-500", "color", "primary", 3, "icIcon", 4, "ngIf"], [3, "icIcon", 4, "ngIf"], ["color", "primary", 1, "text-amber-500", 3, "icIcon"], ["mat-header-row", ""], ["mat-row", "", 3, "ngStyle"], ["formControlName", "Emp2", "matInput", "", 3, "value", "click"], ["formControlName", "EmpType2", "matInput", "", 3, "value", "click"], ["formControlName", "Depart2", "matInput", "", 3, "value", "click"], ["formControlName", "Cost2", "matInput", "", 3, "value", "click"], ["formControlName", "Cadre2", "matInput", "", 3, "value", "click"], ["formControlName", "Prof2", "matInput", "", 3, "value", "click"], ["formControlName", "Task2", "matInput", "", 3, "value", "click"], ["formControlName", "Group2", "matInput", "", 3, "value", "click"], ["formControlName", "Unit2", "matInput", "", 3, "value", "click"], ["formControlName", "Branch2", "matInput", "", 3, "value", "click"], ["formControlName", "Service2", "matInput", "", 3, "value", "click"], ["direction", "vertical", 3, "gutterSize"], ["fxFlex", "calc(15% - 12px)", "fxFlex.lt-md", "auto", 3, "hidden"], [1, "card", 2, "height", "100%"], [1, "px-gutter", "py-4", "border-b", 2, "width", "100%", "padding", "0px", "text-align", "center"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "display", "inline"], [1, "title", "m-0", 2, "font-size", "12px"], ["fxFlex", "calc(85% - 12px)", "fxFlex.lt-md", "auto"], ["matTableFilter", "", "fxFlex", "auto", "mat-table", "", 1, "w-full", 3, "filterType", "exampleEntity", "dataSource"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "class-mat-tab-link", "style", "  border: 1px solid black;", 4, "matFooterRowDef", "matFooterRowDefSticky"], [3, "direction", "gutterSize"], [1, "card", 2, "padding", "5px"], [1, "px-gutter", "py-4", "border-b", 2, "height", "30px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "title", "m-0", 2, "font-size", "15px", "font-weight", "bold", "margin-top", "-15px"], [2, "width", "80%", "font-size", "10px"], ["mat-raised-button", "", "color", "primary", 2, "width", "100px", "height", "40px", "font-size", "10px", "margin-top", "5px", 3, "click"], [2, "margin-left", "-15px", "padding-top", "0px"], ["fxLayout", "row", 2, "overflow-y", "scroll", "height", "15vh", "width", "100%"], ["fxFlex", "auto", "mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "ID"], ["hidden", "", "mat-header-cell", "", 4, "matHeaderCellDef"], ["hidden", "", "mat-cell", "", "style", "font-size: 10px;", 4, "matCellDef"], ["matColumnDef", "Code"], ["mat-cell", "", "style", "font-size: 10px;", 4, "matCellDef"], ["matColumnDef", "NewDateTime"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ReasonID"], ["matColumnDef", "Device"], ["matColumnDef", "ONewDateTime"], ["mat-cell", "", "style", " color: red;font-size: 10px;", 4, "matCellDef"], ["matColumnDef", "OReasonID"], ["matColumnDef", "ODevice"], ["matColumnDef", "Actions", "sticky", ""], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", "style", "height: 20px;", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], [2, "overflow", "hidden", 3, "size"], [2, "width", "85%", "font-size", "10px"], ["matColumnDef", "EmployeeCode"], ["matColumnDef", "Name"], ["matColumnDef", "Surname"], ["matColumnDef", "ReasonCode"], ["matColumnDef", "ReasonName"], ["matColumnDef", "StartDate"], ["matColumnDef", "StartTime"], ["style", "width: 80px;", "mat-header-cell", "", 4, "matHeaderCellDef"], ["style", "width: 10px;", "mat-cell", "", "style", "font-size: 10px;", 4, "matCellDef"], ["matColumnDef", "Day"], ["matColumnDef", "EndDate"], ["matColumnDef", "EndTime"], ["matColumnDef", "Description"], ["matColumnDef", "CalcDescription"], ["style", "font-size: 10px;", "mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["color", "primary", "style", "margin-left: 5px;", 3, "formControlName", "value", 4, "ngIf"], ["color", "primary", 2, "margin-left", "5px", 3, "formControlName", "value"], ["checkbox", ""], [3, "matColumnDef", "sticky", 4, "ngIf"], ["mat-header-cell", "", "style", "padding-left: 0px;width: 60px;", 4, "matHeaderCellDef"], ["mat-footer-cell", "", 3, "hidden", 4, "matFooterCellDef"], ["mat-header-cell", "", 2, "padding-left", "0px", "width", "60px"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor", "click"], ["mat-cell", ""], ["mat-footer-cell", "", 3, "hidden"], [3, "matColumnDef", "sticky"], ["style", "width: 100px;", "mat-header-cell", "", 3, "hidden", 4, "matHeaderCellDef"], ["mat-cell", "", "matTooltipClass", "test", 3, "hidden", "matTooltip", 4, "matCellDef"], ["mat-header-cell", "", 2, "width", "100px", 3, "hidden"], [1, "my-form-field", 2, "width", "100%", "padding-right", "5px"], ["matInput", "", 2, "font-size", "10px", 3, "ngModel", "ngModelChange"], ["mat-cell", "", "matTooltipClass", "test", 3, "hidden", "matTooltip"], ["style", "font-size: 10px;", 4, "ngIf"], ["style", "width: 100%; ", "class", "user-photo__btn", 4, "ngIf"], [2, "font-size", "10px"], [1, "user-photo__btn", 2, "width", "100%"], [3, "hidden"], [1, "mobile-label", "bold", 2, "color", "red", "font-size", "11px"], [1, "mobile-value", "bold", 2, "color", "red", "font-size", "11px"], [1, "mobile-label", "bold", 2, "font-size", "11px"], [1, "mobile-value", "bold", 2, "font-size", "11px"], [1, "my-form-field", 2, "width", "90%", 3, "hidden"], ["matInput", "", "type", "date", 3, "ngModel", "ngModelChange"], [1, "mobile-label", "bold"], [1, "mobile-value", "bold"], ["mat-footer-cell", "", "style", "text-align: left; ", 3, "hidden", 4, "matFooterCellDef"], [1, "my-form-field", 2, "width", "100%"], ["matInput", "", "type", "time", 3, "ngModel", "ngModelChange"], [3, "contextmenu"], ["matInput", "", "type", "time", 2, "font-size", "10px", 3, "value", "ngStyle", "change"], ["mat-footer-cell", "", 2, "text-align", "left", 3, "hidden"], [1, "mobile-value", "bold", 2, "font-size", "10px"], [1, "mobile-label", "bold", 2, "font-size", "10px"], ["mat-row", "", 3, "ngClass", "click"], ["mat-footer-row", "", 1, "class-mat-tab-link", 2, "border", "1px solid black"], ["hidden", "", "mat-header-cell", ""], ["hidden", "", "mat-cell", "", 2, "font-size", "10px"], ["mat-cell", "", 2, "font-size", "10px"], ["mat-cell", "", 2, "color", "red", "font-size", "10px"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 2, "height", "10px", "line-height", "30px", 3, "matMenuTriggerData", "matMenuTriggerFor", "click"], [2, "font-size", "10px", "line-height", "30px", "margin-bottom", "10px", 3, "icIcon"], ["mat-header-row", "", 2, "height", "20px"], ["mat-header-cell", "", 2, "width", "80px"], ["mat-row", "", 2, "font-size", "10px", 3, "ngClass", "click"], ["mat-menu-item", "", 2, "font-size", "10px", 3, "click"], ["mat-menu-item", "", 2, "font-size", "10px"], [2, "padding", "15px"], ["color", "primary", "formControlName", "chkPFilter"], ["color", "primary", "formControlName", "chkPFooter"], ["color", "primary", "formControlName", "chkFreeze"], ["mat-menu-item", "", 3, "click"]], template: function ScoringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](1, ScoringComponent_a_1_Template, 2, 4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](3, ScoringComponent_div_3_Template, 16, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](5, ScoringComponent_div_5_Template, 155, 109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](6, ScoringComponent_div_6_Template, 132, 34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](8, "mat-menu", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](10, ScoringComponent_ng_template_10_Template, 19, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](11, "mat-menu", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](13, ScoringComponent_ng_template_13_Template, 23, 9, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](14, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](15, "mat-menu", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](17, ScoringComponent_ng_template_17_Template, 15, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](18, "mat-menu", 13, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](20, ScoringComponent_ng_template_20_Template, 8, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](21, "mat-menu", 13, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtemplate"](23, ScoringComponent_ng_template_23_Template, 8, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngForOf", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("ngIf", ctx.activeLinkIndex === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵstyleProp"]("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("matMenuTriggerFor", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵproperty"]("formGroup", ctx.formSettings);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_51__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_44__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_52__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_44__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__.MatMenuContent, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormGroupDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_51__.MatTabLink, _angular_common__WEBPACK_IMPORTED_MODULE_44__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_53__.DefaultStyleDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_54__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_55__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_56__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_56__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_57__.MatSelect, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_58__.MatPaginator, _angular_material_core__WEBPACK_IMPORTED_MODULE_48__.MatOption, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_52__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_52__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_40__["ɵNgNoValidate"], angular_split__WEBPACK_IMPORTED_MODULE_59__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_59__.SplitAreaDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MatDialogContent, _angular_material_input__WEBPACK_IMPORTED_MODULE_60__.MatInput, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_61__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_61__.MatToolbarRow, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_62__.IconDirective, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_63__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatRowDef, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_64__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_64__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_56__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_64__.MatDatepicker, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_65__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatHeaderCell, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_66__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatRow, mat_table_filter__WEBPACK_IMPORTED_MODULE_41__.MatTableFilterDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatFooterRowDef, _angular_material_sort__WEBPACK_IMPORTED_MODULE_67__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatFooterCell, _angular_forms__WEBPACK_IMPORTED_MODULE_40__.NgModel, _angular_material_list__WEBPACK_IMPORTED_MODULE_68__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_44__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_53__.DefaultClassDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_42__.MatFooterRow, _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__.MatMenuItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_69__.MatDivider, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__.MatSlideToggle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_44__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_44__.DecimalPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n  height: 5px;\n}\n\n.my-dialog-container-class[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 9px;\n  padding: 0px;\n  justify-content: center;\n}\n\n  .mat-menu-content {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.mat-menu-item[_ngcontent-%COMP%] {\n  line-height: 35px;\n  height: 35px;\n}\n\n.user-photo__btn[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  margin: 3px;\n}\n\n.opened[_ngcontent-%COMP%] {\n  background: darkcyan;\n  color: white;\n  opacity: 1;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: #e5e5f9;\n  font-weight: bolder;\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 10px;\n  height: 10px;\n  padding: 0px 0px 0px 4px;\n}\n\n.mat-row[_ngcontent-%COMP%], .mat-footer-row[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 10px;\n  height: 10px;\n  padding: 0px 0px 0px 4px;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 11px;\n  justify-content: center;\n}\n\n.class-mat-tab-link[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  height: 0px;\n  padding: 0px;\n  justify-content: center;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  height: 0px;\n  padding: 0px;\n  justify-content: center;\n  font-weight: bolder;\n  font-size: 10px;\n}\n\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  margin: unset;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-right: 0px;\n  padding-left: 0px;\n  max-height: none;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%], tr.mat-row[_ngcontent-%COMP%] {\n  height: 8px !important;\n  padding: 0px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 50%;\n  font-size: 10px;\n  margin-top: 5px;\n}\n\n.my-form-field[_ngcontent-%COMP%] {\n  width: 50%;\n  font-size: 10px;\n  margin-bottom: -10px;\n}\n\n.mat-icon-button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 10px;\n  justify-content: center;\n}\n\n.mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n  min-height: 10px;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 0em 0em 0em 0em !important;\n  height: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JpbmcuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvbGliL2xpYi9zdWJzdGl0dXRlQ2xhc3NBcHBseUF0UnVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRkY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSEY7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFORjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQU5GOztBQVVBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FBUEY7O0FBY0E7RUN2RUEsMkNBQW1CO0VBQW5CLHlDQUFtQjtBRDZEbkI7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQWJGOztBQWlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFkRjs7QUFvQkE7RUFDRSxhQUFBO0FBakJGOztBQXFCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxlQUFBO0FBbkJGOztBQXVCQTs7RUFFRSxzQkFBQTtFQUNBLFlBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBcEJGOztBQXVCQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFwQkY7O0FBdURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXBERjs7QUF1REE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFwREY7O0FBdURBO0VBQ0UsZ0JBQUE7QUFwREY7O0FBd0RBO0VBRUUsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0FBdERGIiwiZmlsZSI6InNjb3JpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuIFxyXG4ubXktZGlhbG9nLWNvbnRhaW5lci1jbGFzc3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1tZW51LWl0ZW17XHJcbiAgbGluZS1oZWlnaHQ6MzVweDtcclxuICBoZWlnaHQ6MzVweDtcclxufVxyXG4gXHJcbiBcclxuLnVzZXItcGhvdG9fX2J0biB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIG1hcmdpbjogM3B4OyAgXHJcbiBcclxufVxyXG5cclxuLm9wZW5lZCB7XHJcbiAgYmFja2dyb3VuZDogZGFya2N5YW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5oaWdobGlnaHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVmOTtcclxuICBmb250LXdlaWdodDpib2xkZXI7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMHB4IDBweCAwcHggNHB4O1xyXG59XHJcblxyXG4ubWF0LXJvdywgLm1hdC1mb290ZXItcm93IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBwYWRkaW5nOiAwcHggMHB4IDBweCA0cHg7XHJcbn1cclxuXHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxufSBcclxuXHJcbiAgXHJcblxyXG5cclxuLmNsYXNzLW1hdC10YWItbGlua1xyXG57XHJcbiAgQGFwcGx5IGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWNvbnRyYXN0O1xyXG4gIFxyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIGhlaWdodDogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGhlaWdodDogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuIFxyXG4gXHJcbiBcclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgbWFyZ2luOiB1bnNldDtcclxufVxyXG5cclxuIFxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBtYXgtaGVpZ2h0OiBub25lO1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbiBcclxuXHJcbnRyLm1hdC1mb290ZXItcm93LFxyXG50ci5tYXQtcm93IHtcclxuICBoZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5teS1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuXHJcbi8vICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuLy8gICAgIHBhZGRpbmc6IDBlbSAwLjc1ZW0gMCAwLjc1ZW0gIWltcG9ydGFudDtcclxuLy8gIH1cclxuIFxyXG59XHJcblxyXG5cclxuXHJcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4vLyAgICAgLy9kaXNwbGF5OiBub25lO1xyXG4vLyAgICAgLy8td2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgICB3aWR0aDogMTVweDtcclxuLy8gICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgIG1hcmdpbjogMHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbi8vICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5jdXN0b20taW5wdCB7IFxyXG4vLyAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDAgIWltcG9ydGFudDtcclxuLy8gICBwYWRkaW5nOiAwZW0gMC43NWVtIDAgMC43NWVtICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5tYXQtaWNvbi1idXR0b257XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3Mge1xyXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG50ci5tYXQtZm9vdGVyLXJvdyB7XHJcbiAgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMGVtIDBlbSAwZW0gMGVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllczsiXX0= */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__.stagger20ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__.fadeInUp400ms,
            _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_12__.scaleFadeIn400ms
        ] } });
class DemoDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_13__["default"];
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
}
DemoDialogComponent.ɵfac = function DemoDialogComponent_Factory(t) { return new (t || DemoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MAT_DIALOG_DATA)); };
DemoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineComponent"]({ type: DemoDialogComponent, selectors: [["roundings"]], decls: 13, vars: 4, consts: [["mat-dialog", "", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["align", "end"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]], template: function DemoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](8, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_9_listener() { return ctx.close("Yes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵlistener"]("click", function DemoDialogComponent_Template_button_click_11_listener() { return ctx.close("No"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx.data.temp1);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate1"]("", ctx.data.temp2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx.data.Evet);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵtextInterpolate"](ctx.data.Hayir);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_52__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_52__.DefaultLayoutAlignDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_54__.MatButton], encapsulation: 2 });


/***/ }),

/***/ 98293:
/*!*************************************************!*\
  !*** ./src/app/pages/scoring/scoring.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoringModule": () => (/* binding */ ScoringModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _scoring_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoring-routing.module */ 30035);
/* harmony import */ var _scoring_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scoring.component */ 95221);
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@vex/components/page-layout/page-layout.module */ 91417);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@vex/components/breadcrumbs/breadcrumbs.module */ 72781);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 1465);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ 71232);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/menu */ 69872);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@vex/directives/container/container.module */ 90743);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _scoring_scoring_definitions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scoring/scoring-definitions.component */ 26903);
/* harmony import */ var _attendance_attendance_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../attendance/attendance.module */ 20830);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 75152);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 97435);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! mat-table-exporter */ 88838);
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mat-table-filter */ 68513);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ 93776);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 19372);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 47727);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-split */ 77052);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 64744);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _personnel_components_personnels_edit_personnels_edit_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../personnel/components/personnels-edit/personnels-edit.module */ 30662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);









// import { MatSliderModule,MatSlideToggleModule }from '@angular/material';











// import { ColorFadeModule } from '../../../@vex/pipes/color/color-fade.module';





// import { AttendanceDefinitionsComponent} from './../attendance/attendance-definitions.component';

// import { LeaveModule} from './../leaves/leave.module';















class ScoringModule {
}
ScoringModule.ɵfac = function ScoringModule_Factory(t) { return new (t || ScoringModule)(); };
ScoringModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ScoringModule });
ScoringModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
            angular_split__WEBPACK_IMPORTED_MODULE_12__.AngularSplitModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatNativeDateModule,
            mat_table_filter__WEBPACK_IMPORTED_MODULE_16__.MatTableFilterModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
            _scoring_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScoringRoutingModule,
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__.FlexLayoutModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTableModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckboxModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_35__.IconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__.MatTooltipModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__.ContainerModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_38__.MatSelectModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__.MatButtonToggleModule,
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_40__.MatTableExporterModule,
            _attendance_attendance_module__WEBPACK_IMPORTED_MODULE_7__.AttendanceModule,
            _personnel_components_personnels_edit_personnels_edit_module__WEBPACK_IMPORTED_MODULE_8__.PersonnelsEditModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ScoringModule, { declarations: [_scoring_component__WEBPACK_IMPORTED_MODULE_1__.DemoDialogComponent, _scoring_component__WEBPACK_IMPORTED_MODULE_1__.ScoringComponent, _scoring_scoring_definitions_component__WEBPACK_IMPORTED_MODULE_6__.ScoringDefinitionsComponent], imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
        angular_split__WEBPACK_IMPORTED_MODULE_12__.AngularSplitModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatNativeDateModule,
        mat_table_filter__WEBPACK_IMPORTED_MODULE_16__.MatTableFilterModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__.SecondaryToolbarModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
        _scoring_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScoringRoutingModule,
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__.FlexLayoutModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__.MatTabsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_35__.IconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_5__.ContainerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_38__.MatSelectModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__.MatButtonToggleModule,
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_40__.MatTableExporterModule,
        _attendance_attendance_module__WEBPACK_IMPORTED_MODULE_7__.AttendanceModule,
        _personnel_components_personnels_edit_personnels_edit_module__WEBPACK_IMPORTED_MODULE_8__.PersonnelsEditModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_scoring_scoring_module_ts.js.map