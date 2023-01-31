(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_apps_contacts_contacts-grid_contacts-grid_module_ts"],{

/***/ 50279:
/*!***************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-filter-list.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 83826:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsCardComponent": () => (/* binding */ ContactsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ 78182);
/* harmony import */ var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-business */ 6501);
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ 82793);
/* harmony import */ var _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chat */ 57375);
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ 69410);
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star-border */ 12642);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 58852);














function ContactsCardComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx_r0.icStar);
} }
function ContactsCardComponent_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx_r1.icStarBorder);
} }
class ContactsCardComponent {
    constructor() {
        this.openContact = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.toggleStar = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.icBusiness = _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.icChat = _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_5__["default"];
    }
    ngOnInit() {
    }
    emitToggleStar(event, contactId) {
        event.stopPropagation();
        this.toggleStar.emit(contactId);
    }
}
ContactsCardComponent.ɵfac = function ContactsCardComponent_Factory(t) { return new (t || ContactsCardComponent)(); };
ContactsCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ContactsCardComponent, selectors: [["vex-contacts-card"]], inputs: { contact: "contact" }, outputs: { openContact: "openContact", toggleStar: "toggleStar" }, decls: 23, vars: 11, consts: [[1, "card", "overflow-hidden"], ["matRipple", "", 1, "p-4", "text-center", "hover:bg-hover", "trans-ease-out", "cursor-pointer", "relative", 3, "click"], [1, "avatar", "h-24", "w-24", "mx-auto", 3, "src"], [1, "title", "mb-1", "mt-3"], [1, "body-2", "text-secondary"], ["inline", "true", 1, "ltr:mr-1", "rtl:ml-1", 3, "icon"], ["mat-icon-button", "", "type", "button", 1, "absolute", "top-2", "right-2", 3, "click"], ["class", "text-amber", 3, "icIcon", 4, "ngIf"], [3, "icIcon", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "bg-app-bar", "p-2"], ["mat-icon-button", "", "type", "button", 1, "text-secondary"], [3, "icIcon"], [1, "text-amber", 3, "icIcon"]], template: function ContactsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContactsCardComponent_Template_div_click_1_listener() { return ctx.openContact.emit(ctx.contact.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "ic-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ic-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContactsCardComponent_Template_button_click_13_listener($event) { return ctx.emitToggleStar($event, ctx.contact == null ? null : ctx.contact.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ContactsCardComponent_mat_icon_14_Template, 1, 1, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ContactsCardComponent_mat_icon_15_Template, 1, 1, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.contact == null ? null : ctx.contact.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.contact == null ? null : ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.icBusiness);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.contact == null ? null : ctx.contact.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.icPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.contact == null ? null : ctx.contact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.contact == null ? null : ctx.contact.starred);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.contact == null ? null : ctx.contact.starred));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx.icPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx.icMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icIcon", ctx.icChat);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__.IconDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 86108:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/components/contacts-card/contacts-card.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsCardModule": () => (/* binding */ ContactsCardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _contacts_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-card.component */ 83826);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);








class ContactsCardModule {
}
ContactsCardModule.ɵfac = function ContactsCardModule_Factory(t) { return new (t || ContactsCardModule)(); };
ContactsCardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactsCardModule });
ContactsCardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__.IconModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactsCardModule, { declarations: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_0__.ContactsCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__.IconModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule], exports: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_0__.ContactsCardComponent] }); })();


/***/ }),

/***/ 18181:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsGridRoutingModule": () => (/* binding */ ContactsGridRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _contacts_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-grid.component */ 33171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        redirectTo: 'all'
    },
    {
        path: ':activeCategory',
        component: _contacts_grid_component__WEBPACK_IMPORTED_MODULE_0__.ContactsGridComponent,
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: false
        }
    }
];
class ContactsGridRoutingModule {
}
ContactsGridRoutingModule.ɵfac = function ContactsGridRoutingModule_Factory(t) { return new (t || ContactsGridRoutingModule)(); };
ContactsGridRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactsGridRoutingModule });
ContactsGridRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactsGridRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 33171:
/*!******************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsGridComponent": () => (/* binding */ ContactsGridComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-contacts */ 54358);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ 5291);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ 250);
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-add */ 42792);
/* harmony import */ var _components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contacts-edit/contacts-edit.component */ 97736);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ 50279);
/* harmony import */ var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-cloud-download */ 41916);
/* harmony import */ var _static_data_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../static-data/contacts */ 23466);
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/utils/track-by */ 45007);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ 82110);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ 41238);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-fade-in.animation */ 69703);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.directive */ 18259);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout/grid */ 92465);
/* harmony import */ var _components_contacts_card_contacts_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/contacts-card/contacts-card.component */ 83826);





























function ContactsGridComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("active", _r4.isActive)("disabled", link_r3.disabled)("routerLink", link_r3.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", link_r3.label, " ");
} }
function ContactsGridComponent_div_23_vex_contacts_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "vex-contacts-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("openContact", function ContactsGridComponent_div_23_vex_contacts_card_2_Template_vex_contacts_card_openContact_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r7.openContact($event); })("toggleStar", function ContactsGridComponent_div_23_vex_contacts_card_2_Template_vex_contacts_card_toggleStar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return ctx_r9.toggleStar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeInUp", undefined)("contact", contact_r6);
} }
function ContactsGridComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ContactsGridComponent_div_23_vex_contacts_card_2_Template, 1, 2, "vex-contacts-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@stagger", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 3, ctx_r1.filteredContacts$))("ngForTrackBy", ctx_r1.trackById);
} }
function ContactsGridComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "No contacts matching your filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@scaleFadeIn", undefined);
} }
class ContactsGridComponent {
    constructor(dialog, route) {
        this.dialog = dialog;
        this.route = route;
        this.contacts = _static_data_contacts__WEBPACK_IMPORTED_MODULE_7__.contactsData;
        this.filteredContacts$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(paramMap => paramMap.get('activeCategory')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(activeCategory => {
            switch (activeCategory) {
                case 'all': {
                    return _static_data_contacts__WEBPACK_IMPORTED_MODULE_7__.contactsData;
                }
                case 'starred': {
                    return _static_data_contacts__WEBPACK_IMPORTED_MODULE_7__.contactsData.filter(c => c.starred);
                }
                default: {
                    return [];
                }
            }
        }));
        this.links = [
            {
                label: 'ALL CONTACTS',
                route: '../all'
            },
            {
                label: 'FREQUENTLY CONTACTED',
                route: '../frequent'
            },
            {
                label: 'STARRED',
                route: '../starred'
            }
        ];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__["default"];
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.icCloudDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.icContacts = _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_8__.trackById;
    }
    ngOnInit() { }
    openContact(id) {
        this.dialog.open(_components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_4__.ContactsEditComponent, {
            data: id || null,
            width: '600px'
        });
    }
    toggleStar(id) {
        const contact = _static_data_contacts__WEBPACK_IMPORTED_MODULE_7__.contactsData.find(c => c.id === id);
        if (contact) {
            contact.starred = !contact.starred;
        }
    }
}
ContactsGridComponent.ɵfac = function ContactsGridComponent_Factory(t) { return new (t || ContactsGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute)); };
ContactsGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: ContactsGridComponent, selectors: [["vex-contacts-grid"]], decls: 27, vars: 15, consts: [["fxLayout", "column", 1, "h-full"], ["fxFlex", "none", 1, "p-6", "pb-0", "bg-card", "shadow-b"], ["vexContainer", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "display-1", "mt-0", "mb-4"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary-light"], ["size", "24px", 3, "icon"], [1, "block"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxFlex", "auto", "mat-tab-nav-bar", "", 1, "vex-tabs", "border-0"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink", 4, "ngFor", "ngForOf"], ["color", "primary", "fxFlex", "none", "fxHide.xs", "", "mat-icon-button", "", "matTooltip", "Search Contacts", "type", "button"], [3, "icIcon"], ["color", "primary", "fxFlex", "none", "fxHide.xs", "", "mat-icon-button", "", "matTooltip", "Export Contacts", "type", "button", 1, "ltr:ml-1", "rtl:mr-1"], ["color", "primary", "fxFlex", "none", "mat-icon-button", "", "matTooltip", "Filter Contacts", "type", "button", 1, "ltr:ml-1", "rtl:mr-1"], ["color", "primary", "fxFlex", "none", "fxHide.gt-xs", "", "mat-mini-fab", "", "matTooltip", "Add Contact", "type", "button", 1, "ltr:ml-1", "rtl:mr-1", 3, "click"], ["color", "primary", "fxFlex", "none", "fxHide.xs", "", "mat-raised-button", "", "type", "button", 1, "ltr:ml-4", "rtl:mr-4", 3, "click"], ["inline", "true", "size", "20px", 1, "ltr:mr-2", "rtl:ml-2", "ltr:-ml-1", "rtl:-mr-1", 3, "icon"], ["class", "overflow-y-auto", "fxFlex", "auto", 4, "ngIf"], ["fxFlex", "auto", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink"], ["rla", "routerLinkActive"], ["fxFlex", "auto", 1, "overflow-y-auto"], ["vexContainer", "", "gdColumns", "1fr 1fr 1fr 1fr", "gdColumns.lt-md", "1fr 1fr", "gdColumns.xs", "1fr", "gdGap", "24px", 1, "p-gutter"], [3, "contact", "openContact", "toggleStar", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "contact", "openContact", "toggleStar"], ["fxFlex", "auto", "fxLayout", "column", "fxLayoutAlign", "center center"], ["src", "assets/img/illustrations/idea.svg", 1, "m-12", "h-64"], [1, "headline", "m-0", "text-center"]], template: function ContactsGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "ic-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, ContactsGridComponent_a_10_Template, 3, 4, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ContactsGridComponent_Template_button_click_17_listener() { return ctx.openContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ContactsGridComponent_Template_button_click_19_listener() { return ctx.openContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "ic-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "ADD CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, ContactsGridComponent_div_23_Template, 4, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, ContactsGridComponent_div_25_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@scaleIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icon", ctx.icContacts);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icIcon", ctx.icSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icIcon", ctx.icCloudDownload);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icIcon", ctx.icFilterList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icIcon", ctx.icPersonAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("icon", ctx.icPersonAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](24, 11, ctx.filteredContacts$).length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](26, 13, ctx.filteredContacts$).length === 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultFlexDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_13__.ContainerDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultLayoutAlignDirective, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_20__.IconDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultShowHideDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLinkWithHref, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLinkActive, ngx_quicklink__WEBPACK_IMPORTED_MODULE_27__["ɵɵLinkDirective"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_28__.DefaultGridColumnsDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_28__.DefaultGridGapDirective, _components_contacts_card_contacts_card_component__WEBPACK_IMPORTED_MODULE_14__.ContactsCardComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms,
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRight400ms,
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__.stagger40ms,
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__.fadeInUp400ms,
            _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_12__.scaleFadeIn400ms
        ] } });


/***/ }),

/***/ 35542:
/*!***************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsGridModule": () => (/* binding */ ContactsGridModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-grid-routing.module */ 18181);
/* harmony import */ var _contacts_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts-grid.component */ 33171);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 46298);
/* harmony import */ var _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contacts-edit/contacts-edit.module */ 2775);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contacts-card/contacts-card.module */ 86108);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);














class ContactsGridModule {
}
ContactsGridModule.ɵfac = function ContactsGridModule_Factory(t) { return new (t || ContactsGridModule)(); };
ContactsGridModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ContactsGridModule });
ContactsGridModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsGridRoutingModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
            _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_2__.ContactsEditModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
            _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_3__.ContactsCardModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_4__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContactsGridModule, { declarations: [_contacts_grid_component__WEBPACK_IMPORTED_MODULE_1__.ContactsGridComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsGridRoutingModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_2__.ContactsEditModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
        _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_3__.ContactsCardModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_4__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_apps_contacts_contacts-grid_contacts-grid_module_ts.js.map