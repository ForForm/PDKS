"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_apps_editor_editor_module_ts"],{

/***/ 84309:
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 1465:
/*!***************************************************************************!*\
  !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryToolbarModule": () => (/* binding */ SecondaryToolbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary-toolbar.component */ 44480);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.module */ 72781);
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);










class SecondaryToolbarModule {
}
SecondaryToolbarModule.ɵfac = function SecondaryToolbarModule_Factory(t) { return new (t || SecondaryToolbarModule)(); };
SecondaryToolbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SecondaryToolbarModule });
SecondaryToolbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule,
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SecondaryToolbarModule, { declarations: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule,
        _directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__.ContainerModule], exports: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent] }); })();


/***/ }),

/***/ 79447:
/*!************************************************************!*\
  !*** ./src/app/pages/apps/editor/editor-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorRoutingModule": () => (/* binding */ EditorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.component */ 52015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent
    }
];
class EditorRoutingModule {
}
EditorRoutingModule.ɵfac = function EditorRoutingModule_Factory(t) { return new (t || EditorRoutingModule)(); };
EditorRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditorRoutingModule });
EditorRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 52015:
/*!*******************************************************!*\
  !*** ./src/app/pages/apps/editor/editor.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ 44480);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.component */ 68298);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-quill */ 35196);







const _c0 = function () { return ["Apps", "WYSIWYG Editor"]; };
const _c1 = function () { return { flex: "1 1 auto" }; };
class EditorComponent {
    constructor() {
        this.text = `<p class="ql-align-center"><br></p><h1 class="ql-align-center"><strong class="ql-size-large" spellcheck="false">Vex Rich Text Editor</strong></h1><p><br></p><h2 class="ql-align-center">Get started with an <strong>easy to use</strong>, completely <u>customizable</u>, yet beautiful and blazing fast <strong>WYSIWYG Editor</strong> built right into Angular and the easy use of <strong>[formControl]</strong>.</h2><p><br></p><p><br></p><iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" src="https://player.vimeo.com/video/253905163" height="280" width="500"></iframe><p><br></p><p><br></p><h2 class="ql-align-center"><strong class="ql-size-large" spellcheck="false">Getting Started is Easy</strong></h2><p><br></p><pre class="ql-syntax ql-align-center" spellcheck="false">

<span class="hljs-keyword">&lt;quill-editor [formControl]=&quot;form&quot;&gt;&lt;/quill-editor&gt;</span>

</pre>`;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.text);
    }
    ngOnInit() {
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(); };
EditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["vex-editor"]], decls: 5, vars: 6, consts: [["current", "WYSIWYG Editor"], [3, "crumbs"], [1, "p-gutter", "container"], [1, "card"], [3, "formControl", "styles"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "quill-editor", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInUp", undefined)("formControl", ctx.form)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.SecondaryToolbarComponent, _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsComponent, ngx_quill__WEBPACK_IMPORTED_MODULE_5__.QuillEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */", "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\n.ql-editor > * {\n  cursor: text;\n}\n\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n\n.ql-snow {\n  box-sizing: border-box;\n}\n\n.ql-snow * {\n  box-sizing: border-box;\n}\n\n.ql-snow .ql-hidden {\n  display: none;\n}\n\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n\n.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n\n.ql-snow .ql-empty {\n  fill: none;\n}\n\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n\n.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}\n\n.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}\n\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n\n.ql-snow a {\n  color: #06c;\n}\n\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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b0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usc0JBQXNC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QUE2QjtFQUM3QixxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJxdWlsbC5zbm93LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogUXVpbGwgRWRpdG9yIHYxLjMuN1xuICogaHR0cHM6Ly9xdWlsbGpzLmNvbS9cbiAqIENvcHlyaWdodCAoYykgMjAxNCwgSmFzb24gQ2hlblxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBzYWxlc2ZvcmNlLmNvbVxuICovXG4ucWwtY29udGFpbmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnFsLWNvbnRhaW5lci5xbC1kaXNhYmxlZCAucWwtdG9vbHRpcCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5xbC1jb250YWluZXIucWwtZGlzYWJsZWQgLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWRdID4gbGk6OmJlZm9yZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnFsLWNsaXBib2FyZCB7XG4gIGxlZnQ6IC0xMDAwMDBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbn1cbi5xbC1jbGlwYm9hcmQgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5xbC1lZGl0b3Ige1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBsaW5lLWhlaWdodDogMS40MjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIHRhYi1zaXplOiA0O1xuICAtbW96LXRhYi1zaXplOiA0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi5xbC1lZGl0b3IgPiAqIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuLnFsLWVkaXRvciBwLFxuLnFsLWVkaXRvciBvbCxcbi5xbC1lZGl0b3IgdWwsXG4ucWwtZWRpdG9yIHByZSxcbi5xbC1lZGl0b3IgYmxvY2txdW90ZSxcbi5xbC1lZGl0b3IgaDEsXG4ucWwtZWRpdG9yIGgyLFxuLnFsLWVkaXRvciBoMyxcbi5xbC1lZGl0b3IgaDQsXG4ucWwtZWRpdG9yIGg1LFxuLnFsLWVkaXRvciBoNiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY291bnRlci1yZXNldDogbGlzdC0xIGxpc3QtMiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sLFxuLnFsLWVkaXRvciB1bCB7XG4gIHBhZGRpbmctbGVmdDogMS41ZW07XG59XG4ucWwtZWRpdG9yIG9sID4gbGksXG4ucWwtZWRpdG9yIHVsID4gbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ucWwtZWRpdG9yIHVsID4gbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDIwMjInO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0sXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGkgKixcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPWZhbHNlXSA+IGxpICoge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0gPiBsaTo6YmVmb3JlLFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdID4gbGk6OmJlZm9yZSB7XG4gIGNvbG9yOiAjNzc3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSA+IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFwyNjExJztcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPWZhbHNlXSA+IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFwyNjEwJztcbn1cbi5xbC1lZGl0b3IgbGk6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLnFsLWVkaXRvciBsaTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpOjpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogLTEuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5xbC1lZGl0b3IgbGkucWwtZGlyZWN0aW9uLXJ0bDo6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xuICBtYXJnaW4tcmlnaHQ6IC0xLjVlbTtcbn1cbi5xbC1lZGl0b3Igb2wgbGk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSxcbi5xbC1lZGl0b3IgdWwgbGk6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMS41ZW07XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWRpcmVjdGlvbi1ydGwsXG4ucWwtZWRpdG9yIHVsIGxpLnFsLWRpcmVjdGlvbi1ydGwge1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTEgbGlzdC0yIGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtMDtcbn1cbi5xbC1lZGl0b3Igb2wgbGk6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTAsIGRlY2ltYWwpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0xIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtMTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTE6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTEsIGxvd2VyLWFscGhhKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMSB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMiBsaXN0LTMgbGlzdC00IGxpc3QtNSBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0yIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtMjtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTI6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTIsIGxvd2VyLXJvbWFuKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMiB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTMge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0zO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMzpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMywgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTMge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTQge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC00O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNDpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNCwgbG93ZXItYWxwaGEpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC00IHtcbiAgY291bnRlci1yZXNldDogbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTUge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC01O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtNSwgbG93ZXItcm9tYW4pICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC01IHtcbiAgY291bnRlci1yZXNldDogbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNiB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTY7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC02OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC02LCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNiB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNyB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC03OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC03LCBsb3dlci1hbHBoYSkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTcge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOCB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTg7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC04OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC04LCBsb3dlci1yb21hbikgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTgge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC05IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTk6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTksIGRlY2ltYWwpICcuICc7XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAzZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0xOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDQuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTEucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTEucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTI6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogNmVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMjpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA3LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0yLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA2ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0yLnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA3LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0zOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDllbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTM6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTAuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTMucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDllbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTMucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC00Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDEyZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC00Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDEzLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC00LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMmVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTMuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTU6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTVlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTU6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTYuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTUucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC01LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNjpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxOGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNjpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxOS41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMThlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTYucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE5LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC03Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDIxZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC03Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDIyLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC03LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyMWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjIuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTg6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjRlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTg6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjUuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTgucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI0ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC04LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyNS41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtOTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyN2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtOTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyOC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtOS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjdlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTkucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI4LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLXZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5xbC1lZGl0b3IgLnFsLXZpZGVvLnFsLWFsaWduLWNlbnRlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnFsLWVkaXRvciAucWwtdmlkZW8ucWwtYWxpZ24tcmlnaHQge1xuICBtYXJnaW46IDAgMCAwIGF1dG87XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwO1xufVxuLnFsLWVkaXRvciAucWwtYmctb3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5MDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhhMDA7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Yztcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLXB1cnBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2Y7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3ItcmVkIHtcbiAgY29sb3I6ICNlNjAwMDA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1vcmFuZ2Uge1xuICBjb2xvcjogI2Y5MDtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXllbGxvdyB7XG4gIGNvbG9yOiAjZmYwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogIzAwOGEwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLWJsdWUge1xuICBjb2xvcjogIzA2Yztcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXB1cnBsZSB7XG4gIGNvbG9yOiAjOTNmO1xufVxuLnFsLWVkaXRvciAucWwtZm9udC1zZXJpZiB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xufVxuLnFsLWVkaXRvciAucWwtZm9udC1tb25vc3BhY2Uge1xuICBmb250LWZhbWlseTogTW9uYWNvLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xufVxuLnFsLWVkaXRvciAucWwtc2l6ZS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuLnFsLWVkaXRvciAucWwtc2l6ZS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1zaXplLWh1Z2Uge1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtZGlyZWN0aW9uLXJ0bCB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xufVxuLnFsLWVkaXRvciAucWwtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnFsLWVkaXRvciAucWwtYWxpZ24tanVzdGlmeSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4ucWwtZWRpdG9yIC5xbC1hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnFsLWVkaXRvci5xbC1ibGFuazo6YmVmb3JlIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcbiAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsZWZ0OiAxNXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbn1cbi5xbC1zbm93LnFsLXRvb2xiYXI6YWZ0ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhcjphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogdGFibGU7XG59XG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbixcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24gc3ZnLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uIHN2ZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjphY3RpdmU6aG92ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246YWN0aXZlOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5xbC1zbm93LnFsLXRvb2xiYXIgaW5wdXQucWwtaW1hZ2VbdHlwZT1maWxlXSxcbi5xbC1zbm93IC5xbC10b29sYmFyIGlucHV0LnFsLWltYWdlW3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXIsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMDZjO1xufVxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UucWwtZmlsbCB7XG4gIGZpbGw6ICMwNmM7XG59XG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZSxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLW1pdGVyIHtcbiAgc3Ryb2tlOiAjMDZjO1xufVxuQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpLFxuICAucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuICAucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLWZpbGwsXG4gIC5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLWZpbGwsXG4gIC5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLnFsLWZpbGwsXG4gIC5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZS5xbC1maWxsIHtcbiAgICBmaWxsOiAjNDQ0O1xuICB9XG4gIC5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLFxuICAucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UsXG4gIC5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLW1pdGVyLFxuICAucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UtbWl0ZXIge1xuICAgIHN0cm9rZTogIzQ0NDtcbiAgfVxufVxuLnFsLXNub3cge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnFsLXNub3cgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucWwtc25vdyAucWwtaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5xbC1zbm93IC5xbC1vdXQtYm90dG9tLFxuLnFsLXNub3cgLnFsLW91dC10b3Age1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAucWwtZmxpcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG59XG4ucWwtc25vdyAucWwtZm9ybWF0cyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5xbC1zbm93IC5xbC1mb3JtYXRzOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5xbC1zbm93IC5xbC1zdHJva2Uge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICM0NDQ7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xufVxuLnFsLXNub3cgLnFsLXN0cm9rZS1taXRlciB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzQ0NDtcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICBzdHJva2Utd2lkdGg6IDI7XG59XG4ucWwtc25vdyAucWwtZmlsbCxcbi5xbC1zbm93IC5xbC1zdHJva2UucWwtZmlsbCB7XG4gIGZpbGw6ICM0NDQ7XG59XG4ucWwtc25vdyAucWwtZW1wdHkge1xuICBmaWxsOiBub25lO1xufVxuLnFsLXNub3cgLnFsLWV2ZW4ge1xuICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7XG59XG4ucWwtc25vdyAucWwtdGhpbixcbi5xbC1zbm93IC5xbC1zdHJva2UucWwtdGhpbiB7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cbi5xbC1zbm93IC5xbC10cmFuc3BhcmVudCB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5xbC1zbm93IC5xbC1kaXJlY3Rpb24gc3ZnOmxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLXNub3cgLnFsLWRpcmVjdGlvbi5xbC1hY3RpdmUgc3ZnOmxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ucWwtc25vdyAucWwtZGlyZWN0aW9uLnFsLWFjdGl2ZSBzdmc6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBoMiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGgzIHtcbiAgZm9udC1zaXplOiAxLjE3ZW07XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGg0IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGg1IHtcbiAgZm9udC1zaXplOiAwLjgzZW07XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGg2IHtcbiAgZm9udC1zaXplOiAwLjY3ZW07XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgYmxvY2txdW90ZSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgY29kZSxcbi5xbC1zbm93IC5xbC1lZGl0b3IgcHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBwcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgY29kZSB7XG4gIGZvbnQtc2l6ZTogODUlO1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBwcmUucWwtc3ludGF4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjQxZjtcbiAgY29sb3I6ICNmOGY4ZjI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ucWwtc25vdyAucWwtcGlja2VyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLWxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXItbGFiZWw6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLW9wdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBub25lO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXItb3B0aW9ucyAucWwtcGlja2VyLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLWxhYmVsIHtcbiAgY29sb3I6ICNjY2M7XG4gIHotaW5kZXg6IDI7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwgLnFsLWZpbGwge1xuICBmaWxsOiAjY2NjO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLWxhYmVsIC5xbC1zdHJva2Uge1xuICBzdHJva2U6ICNjY2M7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICB0b3A6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyLFxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIHtcbiAgd2lkdGg6IDI4cHg7XG59XG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItbGFiZWwsXG4ucWwtc25vdyAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCB7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItbGFiZWwgc3ZnLFxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItbGFiZWwgc3ZnIHtcbiAgcmlnaHQ6IDRweDtcbn1cbi5xbC1zbm93IC5xbC1pY29uLXBpY2tlciAucWwtcGlja2VyLW9wdGlvbnMge1xuICBwYWRkaW5nOiA0cHggMHB4O1xufVxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItaXRlbSB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItb3B0aW9ucyB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHdpZHRoOiAxNTJweDtcbn1cbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuLnFsLXNub3cgLnFsLXBpY2tlcjpub3QoLnFsLWNvbG9yLXBpY2tlcik6bm90KC5xbC1pY29uLXBpY2tlcikgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxOHB4O1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWxbZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciB7XG4gIHdpZHRoOiA5OHB4O1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiAnTm9ybWFsJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjFcIl06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiMVwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgMSc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCIyXCJdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjJcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDInO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiM1wiXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIzXCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyAzJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjRcIl06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNFwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgNCc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCI1XCJdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjVcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDUnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiNlwiXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCI2XCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyA2Jztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiMVwiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjJcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjNcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCI0XCJdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNVwiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAwLjgzZW07XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjZcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMC42N2VtO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IHtcbiAgd2lkdGg6IDEwOHB4O1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWw6OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdTYW5zIFNlcmlmJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9c2VyaWZdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9c2VyaWZdOjpiZWZvcmUge1xuICBjb250ZW50OiAnU2VyaWYnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1tb25vc3BhY2VdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9bW9ub3NwYWNlXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ01vbm9zcGFjZSc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9c2VyaWZdOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1tb25vc3BhY2VdOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogTW9uYWNvLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIHtcbiAgd2lkdGg6IDk4cHg7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogJ05vcm1hbCc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPXNtYWxsXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNtYWxsXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1NtYWxsJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9bGFyZ2VdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9bGFyZ2VdOjpiZWZvcmUge1xuICBjb250ZW50OiAnTGFyZ2UnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1odWdlXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWh1Z2VdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSHVnZSc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9c21hbGxdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9bGFyZ2VdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9aHVnZV06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIucWwtYmFja2dyb3VuZCAucWwtcGlja2VyLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlci5xbC1jb2xvciAucWwtcGlja2VyLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnFsLXRvb2xiYXIucWwtc25vdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogOHB4O1xufVxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtZm9ybWF0cyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLXBpY2tlci1sYWJlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtcGlja2VyLW9wdGlvbnMge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjIpIDAgMnB4IDhweDtcbn1cbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLWxhYmVsIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItb3B0aW9ucyB7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQsXG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xufVxuLnFsLXRvb2xiYXIucWwtc25vdyArIC5xbC1jb250YWluZXIucWwtc25vdyB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2RkZDtcbiAgY29sb3I6ICM0NDQ7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiVmlzaXQgVVJMOlwiO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICB3aWR0aDogMTcwcHg7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcCBhLnFsLXByZXZpZXcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcCBhLnFsLWFjdGlvbjo6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICBjb250ZW50OiAnRWRpdCc7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcCBhLnFsLXJlbW92ZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1JlbW92ZSc7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcCBhIHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcC5xbC1lZGl0aW5nIGEucWwtcHJldmlldyxcbi5xbC1zbm93IC5xbC10b29sdGlwLnFsLWVkaXRpbmcgYS5xbC1yZW1vdmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAucWwtZWRpdGluZyBpbnB1dFt0eXBlPXRleHRdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAucWwtZWRpdGluZyBhLnFsLWFjdGlvbjo6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbiAgY29udGVudDogJ1NhdmUnO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcFtkYXRhLW1vZGU9bGlua106OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiRW50ZXIgbGluazpcIjtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwW2RhdGEtbW9kZT1mb3JtdWxhXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJFbnRlciBmb3JtdWxhOlwiO1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXBbZGF0YS1tb2RlPXZpZGVvXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJFbnRlciB2aWRlbzpcIjtcbn1cbi5xbC1zbm93IGEge1xuICBjb2xvcjogIzA2Yztcbn1cbi5xbC1jb250YWluZXIucWwtc25vdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4iXX0= */", ".ql-toolbar.ql-snow {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  border-width: 0;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  --tw-shadow: var(--elevation-z6);\n  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.ql-container.ql-snow {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  border-width: 0;\n}\n\n.ql-toolbar.ql-snow .ql-picker .ql-picker-label:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.ql-toolbar.ql-snow button.ql-active {\n  border-radius: 0.25rem;\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n}\n\n.ql-toolbar.ql-snow button.ql-active .ql-stroke {\n  stroke: currentColor;\n}\n\n.ql-toolbar.ql-snow button.ql-active .ql-fill {\n  fill: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9xdWlsbC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL2xpYi9saWIvc3Vic3RpdHV0ZUNsYXNzQXBwbHlBdFJ1bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDRUEsK0JBQW1CO0VBQW5CLGdDQUFtQjtFQUFuQixlQUFtQjtFQUFuQixrQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixvQkFBbUI7RUFBbkIsZ0NBQW1CO0VBQW5CLGtEQUFtQjtFQUFuQix1R0FBbUI7QURBbkI7O0FBRUE7RUNGQSxtQ0FBbUI7RUFBbkIsa0NBQW1CO0VBQW5CLGVBQW1CO0FESW5COztBQUVBO0VDTkEsOEJBQW1CO0VBQW5CLG1CQUFtQjtBRFFuQjs7QUFFQTtFQ1ZBLHNCQUFtQjtFQUFuQiwyQ0FBbUI7RUFBbkIseUNBQW1CO0FEWW5COztBQUNFO0VDYkYsb0JBQW1CO0FEZW5COztBQUVFO0VDakJGLGtCQUFtQjtBRGtCbkIiLCJmaWxlIjoiX3F1aWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucWwtdG9vbGJhci5xbC1zbm93IHtcclxuICBAYXBwbHkgYm9yZGVyLTAgcm91bmRlZC10IHB4LTQgcHktNCBzaGFkb3c7XHJcbn1cclxuXHJcbi5xbC1jb250YWluZXIucWwtc25vdyB7XHJcbiAgQGFwcGx5IGJvcmRlci0wIHJvdW5kZWQtYjtcclxufVxyXG5cclxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtcGlja2VyIC5xbC1waWNrZXItbGFiZWw6Zm9jdXMge1xyXG4gIEBhcHBseSBvdXRsaW5lLW5vbmU7XHJcbn1cclxuXHJcbi5xbC10b29sYmFyLnFsLXNub3cgYnV0dG9uLnFsLWFjdGl2ZSB7XHJcbiAgQGFwcGx5IGJnLXByaW1hcnkgcm91bmRlZCB0ZXh0LXByaW1hcnktY29udHJhc3Q7XHJcblxyXG4gIC5xbC1zdHJva2Uge1xyXG4gICAgQGFwcGx5IHN0cm9rZS1jdXJyZW50O1xyXG4gIH1cclxuXHJcbiAgLnFsLWZpbGwge1xyXG4gICAgQGFwcGx5IGZpbGwtY3VycmVudDtcclxuICB9XHJcbn1cclxuIiwiQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7Il19 */"], encapsulation: 2, data: { animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] } });


/***/ }),

/***/ 62406:
/*!****************************************************!*\
  !*** ./src/app/pages/apps/editor/editor.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorModule": () => (/* binding */ EditorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-routing.module */ 79447);
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.component */ 52015);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ 35196);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ 1465);
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ 72781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);









class EditorModule {
}
EditorModule.ɵfac = function EditorModule_Factory(t) { return new (t || EditorModule)(); };
EditorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _editor_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditorRoutingModule,
            ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillModule.forRoot({
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ header: 1 }, { header: 2 }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ align: [] }],
                        ['clean'],
                        ['link', 'image', 'video'] // link and image, video
                    ]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule,
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EditorModule, { declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_1__.EditorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _editor_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditorRoutingModule, ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule,
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule] }); })();


/***/ }),

/***/ 35196:
/*!*******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2020/ngx-quill.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUILL_CONFIG_TOKEN": () => (/* binding */ QUILL_CONFIG_TOKEN),
/* harmony export */   "QuillEditorBase": () => (/* binding */ QuillEditorBase),
/* harmony export */   "QuillEditorComponent": () => (/* binding */ QuillEditorComponent),
/* harmony export */   "QuillModule": () => (/* binding */ QuillModule),
/* harmony export */   "QuillService": () => (/* binding */ QuillService),
/* harmony export */   "QuillViewComponent": () => (/* binding */ QuillViewComponent),
/* harmony export */   "QuillViewHTMLComponent": () => (/* binding */ QuillViewHTMLComponent),
/* harmony export */   "defaultModules": () => (/* binding */ defaultModules)
/* harmony export */ });
/* harmony import */ var E_Projects_PdksProd_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 62783);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 46511);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);










const _c0 = [[["", "quill-editor-toolbar", ""]]];
const _c1 = ["[quill-editor-toolbar]"];
const defaultModules = {
  toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
    header: 1
  }, {
    header: 2
  }], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], [{
    script: 'sub'
  }, {
    script: 'super'
  }], [{
    indent: '-1'
  }, {
    indent: '+1'
  }], [{
    direction: 'rtl'
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], [{
    color: []
  }, {
    background: []
  }], [{
    font: []
  }], [{
    align: []
  }], ['clean'], ['link', 'image', 'video'] // link and image, video
  ]
};

const getFormat = (format, configFormat) => {
  const passedFormat = format || configFormat;
  return passedFormat || 'html';
};

const QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('config', {
  providedIn: 'root',
  factory: () => ({
    modules: defaultModules
  })
});

class QuillService {
  constructor(injector, config) {
    this.config = config;
    this.count = 0;
    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);

    if (!this.config) {
      this.config = {
        modules: defaultModules
      };
    }
  }

  getQuill() {
    var _this = this;

    this.count++;

    if (!this.Quill && this.count === 1) {
      this.$importPromise = new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_Projects_PdksProd_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          // Quill adds events listeners on import https://github.com/quilljs/quill/blob/develop/core/emitter.js#L8
          // We'd want to use the unpatched `addEventListener` method to have all event callbacks to be run outside of zone.
          // We don't know yet if the `zone.js` is used or not, just save the value to restore it back further.
          const maybePatchedAddEventListener = _this.document.addEventListener; // There're 2 types of Angular applications:
          // 1) zone-full (by default)
          // 2) zone-less
          // The developer can avoid importing the `zone.js` package and tells Angular that he/she is responsible for running
          // the change detection by himself. This is done by "nooping" the zone through `CompilerOptions` when bootstrapping
          // the root module. We fallback to `document.addEventListener` if `__zone_symbol__addEventListener` is not defined,
          // this means the `zone.js` is not imported.
          // The `__zone_symbol__addEventListener` is basically a native DOM API, which is not patched by zone.js, thus not even going
          // through the `zone.js` task lifecycle. You can also access the native DOM API as follows `target[Zone.__symbol__('methodName')]`.
          // eslint-disable-next-line @typescript-eslint/dot-notation

          _this.document.addEventListener = _this.document['__zone_symbol__addEventListener'] || _this.document.addEventListener;
          const quillImport = yield __webpack_require__.e(/*! import() */ "node_modules_quill_dist_quill_js").then(__webpack_require__.t.bind(__webpack_require__, /*! quill */ 33999, 19));
          _this.document.addEventListener = maybePatchedAddEventListener;
          _this.Quill = quillImport.default ? quillImport.default : quillImport; // Only register custom options and modules once

          _this.config.customOptions?.forEach(customOption => {
            const newCustomOption = _this.Quill.import(customOption.import);

            newCustomOption.whitelist = customOption.whitelist;

            _this.Quill.register(newCustomOption, true, _this.config.suppressGlobalRegisterWarning);
          });
          _this.config.customModules?.forEach(({
            implementation,
            path
          }) => {
            _this.Quill.register(path, implementation, _this.config.suppressGlobalRegisterWarning);
          });
          resolve(_this.Quill);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    return this.$importPromise;
  }

}

QuillService.ɵfac = function QuillService_Factory(t) {
  return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](QUILL_CONFIG_TOKEN, 8));
};

QuillService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: QuillService,
  factory: QuillService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [QUILL_CONFIG_TOKEN]
      }]
    }];
  }, null);
})(); // eslint-disable-next-line @angular-eslint/directive-class-suffix


class QuillEditorBase {
  constructor(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    this.elementRef = elementRef;
    this.cd = cd;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.required = false;
    this.customToolbarPosition = 'top';
    this.sanitize = false;
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.customModules = [];
    this.preserveWhitespace = false;
    this.trimOnValidation = false;
    this.compareValues = false;
    this.filterNull = false;
    /*
    https://github.com/KillerCodeMonkey/ngx-quill/issues/1257 - fix null value set
           provide default empty value
    by default null
           e.g. defaultEmptyValue="" - empty string
           <quill-editor
      defaultEmptyValue=""
      formControlName="message"
    ></quill-editor>
    */

    this.defaultEmptyValue = null;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.disabled = false; // used to store initial value before ViewInit

    this.subscription = null;

    this.valueGetter = (quillEditor, editorElement) => {
      let html = editorElement.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }

      let modelValue = html;
      const format = getFormat(this.format, this.service.config.format);

      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }

      return modelValue;
    };

    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);

      if (format === 'html') {
        if (this.sanitize) {
          value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML, value);
        }

        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }

      return value;
    };

    this.selectionChangeHandler = (range, oldRange, source) => {
      const shouldTriggerOnModelTouched = !range && !!this.onModelTouched; // only emit changes when there's any listener

      if (!this.onBlur.observers.length && !this.onFocus.observers.length && !this.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
        return;
      }

      this.zone.run(() => {
        if (range === null) {
          this.onBlur.emit({
            editor: this.quillEditor,
            source
          });
        } else if (oldRange === null) {
          this.onFocus.emit({
            editor: this.quillEditor,
            source
          });
        }

        this.onSelectionChanged.emit({
          editor: this.quillEditor,
          oldRange,
          range,
          source
        });

        if (shouldTriggerOnModelTouched) {
          this.onModelTouched();
        }

        this.cd.markForCheck();
      });
    };

    this.textChangeHandler = (delta, oldDelta, source) => {
      // only emit changes emitted by user interactions
      const text = this.quillEditor.getText();
      const content = this.quillEditor.getContents();
      let html = this.editorElem.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }

      const trackChanges = this.trackChanges || this.service.config.trackChanges;
      const shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!this.onModelChange; // only emit changes when there's any listener

      if (!this.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
        return;
      }

      this.zone.run(() => {
        if (shouldTriggerOnModelChange) {
          this.onModelChange(this.valueGetter(this.quillEditor, this.editorElem));
        }

        this.onContentChanged.emit({
          content,
          delta,
          editor: this.quillEditor,
          html,
          oldDelta,
          source,
          text
        });
        this.cd.markForCheck();
      });
    }; // eslint-disable-next-line max-len


    this.editorChangeHandler = (event, current, old, source) => {
      // only emit changes when there's any listener
      if (!this.onEditorChanged.observers.length) {
        return;
      } // only emit changes emitted by user interactions


      if (event === 'text-change') {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.editorElem.querySelector('.ql-editor').innerHTML;

        if (html === '<p><br></p>' || html === '<div><br></div>') {
          html = this.defaultEmptyValue;
        }

        this.zone.run(() => {
          this.onEditorChanged.emit({
            content,
            delta: current,
            editor: this.quillEditor,
            event,
            html,
            oldDelta: old,
            source,
            text
          });
          this.cd.markForCheck();
        });
      } else {
        this.zone.run(() => {
          this.onEditorChanged.emit({
            editor: this.quillEditor,
            event,
            oldRange: old,
            range: current,
            source
          });
          this.cd.markForCheck();
        });
      }
    };

    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);
  }

  static normalizeClassNames(classes) {
    const classList = classes.trim().split(' ');
    return classList.reduce((prev, cur) => {
      const trimmed = cur.trim();

      if (trimmed) {
        prev.push(trimmed);
      }

      return prev;
    }, []);
  }

  ngAfterViewInit() {
    var _this2 = this;

    return (0,E_Projects_PdksProd_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(_this2.platformId)) {
        return;
      } // eslint-disable-next-line @typescript-eslint/naming-convention


      const Quill = yield _this2.service.getQuill();

      _this2.elementRef.nativeElement.insertAdjacentHTML(_this2.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', _this2.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');

      _this2.editorElem = _this2.elementRef.nativeElement.querySelector('[quill-editor-element]');

      const toolbarElem = _this2.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');

      const modules = Object.assign({}, _this2.modules || _this2.service.config.modules);

      if (toolbarElem) {
        modules.toolbar = toolbarElem;
      } else if (modules.toolbar === undefined) {
        modules.toolbar = defaultModules.toolbar;
      }

      let placeholder = _this2.placeholder !== undefined ? _this2.placeholder : _this2.service.config.placeholder;

      if (placeholder === undefined) {
        placeholder = 'Insert text here ...';
      }

      if (_this2.styles) {
        Object.keys(_this2.styles).forEach(key => {
          _this2.renderer.setStyle(_this2.editorElem, key, _this2.styles[key]);
        });
      }

      if (_this2.classes) {
        _this2.addClasses(_this2.classes);
      }

      _this2.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });

      _this2.customModules.forEach(({
        implementation,
        path
      }) => {
        Quill.register(path, implementation);
      });

      let bounds = _this2.bounds && _this2.bounds === 'self' ? _this2.editorElem : _this2.bounds;

      if (!bounds) {
        bounds = _this2.service.config.bounds ? _this2.service.config.bounds : _this2.document.body;
      }

      let debug = _this2.debug;

      if (!debug && debug !== false && _this2.service.config.debug) {
        debug = _this2.service.config.debug;
      }

      let readOnly = _this2.readOnly;

      if (!readOnly && _this2.readOnly !== false) {
        readOnly = _this2.service.config.readOnly !== undefined ? _this2.service.config.readOnly : false;
      }

      let defaultEmptyValue = _this2.defaultEmptyValue;

      if (_this2.service.config.hasOwnProperty('defaultEmptyValue')) {
        defaultEmptyValue = _this2.service.config.defaultEmptyValue;
      }

      let scrollingContainer = _this2.scrollingContainer;

      if (!scrollingContainer && _this2.scrollingContainer !== null) {
        scrollingContainer = _this2.service.config.scrollingContainer === null || _this2.service.config.scrollingContainer ? _this2.service.config.scrollingContainer : null;
      }

      let formats = _this2.formats;

      if (!formats && formats === undefined) {
        formats = _this2.service.config.formats ? [..._this2.service.config.formats] : _this2.service.config.formats === null ? null : undefined;
      }

      _this2.zone.runOutsideAngular(() => {
        _this2.quillEditor = new Quill(_this2.editorElem, {
          bounds,
          debug: debug,
          formats: formats,
          modules,
          placeholder,
          readOnly,
          defaultEmptyValue,
          scrollingContainer: scrollingContainer,
          strict: _this2.strict,
          theme: _this2.theme || (_this2.service.config.theme ? _this2.service.config.theme : 'snow')
        }); // Set optional link placeholder, Quill has no native API for it so using workaround

        if (_this2.linkPlaceholder) {
          const tooltip = _this2.quillEditor?.theme?.tooltip;
          const input = tooltip?.root?.querySelector('input[data-link]');

          if (input?.dataset) {
            input.dataset.link = _this2.linkPlaceholder;
          }
        }
      });

      if (_this2.content) {
        const format = getFormat(_this2.format, _this2.service.config.format);

        if (format === 'text') {
          _this2.quillEditor.setText(_this2.content, 'silent');
        } else {
          const newValue = _this2.valueSetter(_this2.quillEditor, _this2.content);

          _this2.quillEditor.setContents(newValue, 'silent');
        }

        _this2.quillEditor.getModule('history').clear();
      } // initialize disabled status based on this.disabled as default value


      _this2.setDisabledState();

      _this2.addQuillEventListeners(); // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.


      if (!_this2.onEditorCreated.observers.length && !_this2.onValidatorChanged) {
        return;
      } // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.


      requestAnimationFrame(() => {
        if (_this2.onValidatorChanged) {
          _this2.onValidatorChanged();
        }

        _this2.onEditorCreated.emit(_this2.quillEditor);
      });
    })();
  }

  ngOnDestroy() {
    this.dispose();
  }

  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }
    /* eslint-disable @typescript-eslint/dot-notation */


    if (changes.readOnly) {
      this.quillEditor.enable(!changes.readOnly.currentValue);
    }

    if (changes.placeholder) {
      this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
    }

    if (changes.defaultEmptyValue) {
      this.quillEditor.root.dataset.defaultEmptyValue = changes.defaultEmptyValue.currentValue;
    }

    if (changes.styles) {
      const currentStyling = changes.styles.currentValue;
      const previousStyling = changes.styles.previousValue;

      if (previousStyling) {
        Object.keys(previousStyling).forEach(key => {
          this.renderer.removeStyle(this.editorElem, key);
        });
      }

      if (currentStyling) {
        Object.keys(currentStyling).forEach(key => {
          this.renderer.setStyle(this.editorElem, key, this.styles[key]);
        });
      }
    }

    if (changes.classes) {
      const currentClasses = changes.classes.currentValue;
      const previousClasses = changes.classes.previousValue;

      if (previousClasses) {
        this.removeClasses(previousClasses);
      }

      if (currentClasses) {
        this.addClasses(currentClasses);
      }
    } // We'd want to re-apply event listeners if the `debounceTime` binding changes to apply the
    // `debounceTime` operator or vice-versa remove it.


    if (changes.debounceTime) {
      this.addQuillEventListeners();
    }
    /* eslint-enable @typescript-eslint/dot-notation */

  }

  addClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.addClass(this.editorElem, c);
    });
  }

  removeClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.removeClass(this.editorElem, c);
    });
  }

  writeValue(currentValue) {
    // optional fix for https://github.com/angular/angular/issues/14988
    if (this.filterNull && currentValue === null) {
      return;
    }

    this.content = currentValue;

    if (!this.quillEditor) {
      return;
    }

    const format = getFormat(this.format, this.service.config.format);
    const newValue = this.valueSetter(this.quillEditor, currentValue);

    if (this.compareValues) {
      const currentEditorValue = this.quillEditor.getContents();

      if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
        return;
      }
    }

    if (currentValue) {
      if (format === 'text') {
        this.quillEditor.setText(currentValue);
      } else {
        this.quillEditor.setContents(newValue);
      }

      return;
    }

    this.quillEditor.setText('');
  }

  setDisabledState(isDisabled = this.disabled) {
    // store initial value to set appropriate disabled status after ViewInit
    this.disabled = isDisabled;

    if (this.quillEditor) {
      if (isDisabled) {
        this.quillEditor.disable();
        this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
      } else {
        if (!this.readOnly) {
          this.quillEditor.enable();
        }

        this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
      }
    }
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  registerOnValidatorChange(fn) {
    this.onValidatorChanged = fn;
  }

  validate() {
    if (!this.quillEditor) {
      return null;
    }

    const err = {};
    let valid = true;
    const text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

    const textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;
    const deltaOperations = this.quillEditor.getContents().ops;
    const onlyEmptyOperation = deltaOperations && deltaOperations.length === 1 && ['\n', ''].includes(deltaOperations[0].insert);

    if (this.minLength && textLength && textLength < this.minLength) {
      err.minLengthError = {
        given: textLength,
        minLength: this.minLength
      };
      valid = false;
    }

    if (this.maxLength && textLength > this.maxLength) {
      err.maxLengthError = {
        given: textLength,
        maxLength: this.maxLength
      };
      valid = false;
    }

    if (this.required && !textLength && onlyEmptyOperation) {
      err.requiredError = {
        empty: true
      };
      valid = false;
    }

    return valid ? null : err;
  }

  addQuillEventListeners() {
    this.dispose(); // We have to enter the `<root>` zone when adding event listeners, so `debounceTime` will spawn the
    // `AsyncAction` there w/o triggering change detections. We still re-enter the Angular's zone through
    // `zone.run` when we emit an event to the parent component.

    this.zone.runOutsideAngular(() => {
      this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
      this.subscription.add( // mark model as touched if editor lost focus
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.quillEditor, 'selection-change').subscribe(([range, oldRange, source]) => {
        this.selectionChangeHandler(range, oldRange, source);
      })); // The `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
      // will be invoked upon subscription and teardown.

      let textChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.quillEditor, 'text-change');
      let editorChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.quillEditor, 'editor-change');

      if (typeof this.debounceTime === 'number') {
        textChange$ = textChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(this.debounceTime));
        editorChange$ = editorChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(this.debounceTime));
      }

      this.subscription.add( // update model if text changes
      textChange$.subscribe(([delta, oldDelta, source]) => {
        this.textChangeHandler(delta, oldDelta, source);
      }));
      this.subscription.add( // triggered if selection or text changed
      editorChange$.subscribe(([event, current, old, source]) => {
        this.editorChangeHandler(event, current, old, source);
      }));
    });
  }

  dispose() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

}

QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
  return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: QuillEditorBase,
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    readOnly: "readOnly",
    placeholder: "placeholder",
    maxLength: "maxLength",
    minLength: "minLength",
    required: "required",
    formats: "formats",
    customToolbarPosition: "customToolbarPosition",
    sanitize: "sanitize",
    styles: "styles",
    strict: "strict",
    scrollingContainer: "scrollingContainer",
    bounds: "bounds",
    customOptions: "customOptions",
    customModules: "customModules",
    trackChanges: "trackChanges",
    preserveWhitespace: "preserveWhitespace",
    classes: "classes",
    trimOnValidation: "trimOnValidation",
    linkPlaceholder: "linkPlaceholder",
    compareValues: "compareValues",
    filterNull: "filterNull",
    debounceTime: "debounceTime",
    defaultEmptyValue: "defaultEmptyValue",
    valueGetter: "valueGetter",
    valueSetter: "valueSetter"
  },
  outputs: {
    onEditorCreated: "onEditorCreated",
    onEditorChanged: "onEditorChanged",
    onContentChanged: "onContentChanged",
    onSelectionChanged: "onSelectionChanged",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillEditorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: QuillService
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    trimOnValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    linkPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    compareValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterNull: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    defaultEmptyValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onEditorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class QuillEditorComponent extends QuillEditorBase {
  constructor(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    super(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service);
  }

}

QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
  return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuillEditorComponent,
  selectors: [["quill-editor"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => QuillEditorComponent)
  }, {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => QuillEditorComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function QuillEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    }
  },
  styles: [":host{display:inline-block}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => QuillEditorComponent)
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => QuillEditorComponent)
      }],
      selector: 'quill-editor',
      template: `
  <ng-content select="[quill-editor-toolbar]"></ng-content>
`,
      styles: [`
    :host {
      display: inline-block;
    }
    `]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone]
      }]
    }, {
      type: QuillService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [QuillService]
      }]
    }];
  }, null);
})();

class QuillViewHTMLComponent {
  constructor(sanitizer, service) {
    this.sanitizer = sanitizer;
    this.service = service;
    this.content = '';
    this.sanitize = false;
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
  }

  ngOnChanges(changes) {
    if (changes.theme) {
      const theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    } else if (!this.theme) {
      const theme = this.service.config.theme ? this.service.config.theme : 'snow';
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    }

    if (changes.content) {
      const content = changes.content.currentValue;
      this.innerHTML = this.sanitize ? content : this.sanitizer.bypassSecurityTrustHtml(content);
    }
  }

}

QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
  return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
};

QuillViewHTMLComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuillViewHTMLComponent,
  selectors: [["quill-view-html"]],
  inputs: {
    content: "content",
    theme: "theme",
    sanitize: "sanitize"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
  template: function QuillViewHTMLComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themeClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
  styles: [".ql-container.ngx-quill-view-html{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      selector: 'quill-view-html',
      styles: [`
.ql-container.ngx-quill-view-html {
  border: 0;
}
`],
      template: `
  <div class="ql-container" [ngClass]="themeClass">
    <div class="ql-editor" [innerHTML]="innerHTML">
    </div>
  </div>
`
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer]
      }]
    }, {
      type: QuillService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class QuillViewComponent {
  constructor(elementRef, renderer, zone, service, domSanitizer, platformId) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.sanitize = false;
    this.strict = true;
    this.customModules = [];
    this.customOptions = [];
    this.preserveWhitespace = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();

    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);
      let content = value;

      if (format === 'text') {
        quillEditor.setText(content);
      } else {
        if (format === 'html') {
          if (this.sanitize) {
            value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML, value);
          }

          content = quillEditor.clipboard.convert(value);
        } else if (format === 'json') {
          try {
            content = JSON.parse(value);
          } catch (e) {
            content = [{
              insert: value
            }];
          }
        }

        quillEditor.setContents(content);
      }
    };
  }

  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }

    if (changes.content) {
      this.valueSetter(this.quillEditor, changes.content.currentValue);
    }
  }

  ngAfterViewInit() {
    var _this3 = this;

    return (0,E_Projects_PdksProd_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(_this3.platformId)) {
        return;
      } // eslint-disable-next-line @typescript-eslint/naming-convention


      const Quill = yield _this3.service.getQuill();
      const modules = Object.assign({}, _this3.modules || _this3.service.config.modules);
      modules.toolbar = false;

      _this3.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });

      _this3.customModules.forEach(({
        implementation,
        path
      }) => {
        Quill.register(path, implementation);
      });

      let debug = _this3.debug;

      if (!debug && debug !== false && _this3.service.config.debug) {
        debug = _this3.service.config.debug;
      }

      let formats = _this3.formats;

      if (!formats && formats === undefined) {
        formats = _this3.service.config.formats ? Object.assign({}, _this3.service.config.formats) : _this3.service.config.formats === null ? null : undefined;
      }

      const theme = _this3.theme || (_this3.service.config.theme ? _this3.service.config.theme : 'snow');

      _this3.elementRef.nativeElement.insertAdjacentHTML('afterbegin', _this3.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');

      _this3.editorElem = _this3.elementRef.nativeElement.querySelector('[quill-view-element]');

      _this3.zone.runOutsideAngular(() => {
        _this3.quillEditor = new Quill(_this3.editorElem, {
          debug: debug,
          formats: formats,
          modules,
          readOnly: true,
          strict: _this3.strict,
          theme
        });
      });

      _this3.renderer.addClass(_this3.editorElem, 'ngx-quill-view');

      if (_this3.content) {
        _this3.valueSetter(_this3.quillEditor, _this3.content);
      } // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.


      if (!_this3.onEditorCreated.observers.length) {
        return;
      } // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.


      requestAnimationFrame(() => {
        _this3.onEditorCreated.emit(_this3.quillEditor);
      });
    })();
  }

}

QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
  return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};

QuillViewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuillViewComponent,
  selectors: [["quill-view"]],
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    formats: "formats",
    sanitize: "sanitize",
    strict: "strict",
    content: "content",
    customModules: "customModules",
    customOptions: "customOptions",
    preserveWhitespace: "preserveWhitespace"
  },
  outputs: {
    onEditorCreated: "onEditorCreated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function QuillViewComponent_Template(rf, ctx) {},
  styles: [".ql-container.ngx-quill-view{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      selector: 'quill-view',
      styles: [`
.ql-container.ngx-quill-view {
  border: 0;
}
`],
      template: `
`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: QuillService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

class QuillModule {
  static forRoot(config) {
    return {
      ngModule: QuillModule,
      providers: [{
        provide: QUILL_CONFIG_TOKEN,
        useValue: config
      }]
    };
  }

}

QuillModule.ɵfac = function QuillModule_Factory(t) {
  return new (t || QuillModule)();
};

QuillModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: QuillModule
});
QuillModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-quill
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 62783:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apps_editor_editor_module_ts.js.map