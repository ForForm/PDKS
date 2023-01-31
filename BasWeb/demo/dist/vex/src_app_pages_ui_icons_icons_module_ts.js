(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_icons_icons_module_ts"],{

/***/ 69410:
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-star.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path opacity=\".3\" d=\"M12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z\" fill=\"currentColor\"/><path d=\"M22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z\" fill=\"currentColor\"/>",
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

/***/ 5291:
/*!***************************************************!*\
  !*** ./src/@vex/animations/scale-in.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleInAnimation": () => (/* binding */ scaleInAnimation),
/* harmony export */   "scaleIn400ms": () => (/* binding */ scaleIn400ms)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);

function scaleInAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleIn', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(0)'
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(1)'
            }))
        ])
    ]);
}
const scaleIn400ms = scaleInAnimation(400);


/***/ }),

/***/ 92453:
/*!********************************************************!*\
  !*** ./src/app/pages/ui/icons/icons-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsRoutingModule": () => (/* binding */ IconsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.component */ 90086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _icons_component__WEBPACK_IMPORTED_MODULE_0__.IconsComponent,
        data: {
            scrollDisabled: true
        },
        children: [
            {
                path: '',
                redirectTo: 'ic'
            },
            {
                path: 'ic',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ui_icons_icons-ic_icons-ic_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icons-ic/icons-ic.module */ 32019)).then(m => m.IconsIcModule)
            },
            {
                path: 'fa',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ui_icons_icons-fa_icons-fa_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icons-fa/icons-fa.module */ 71460)).then(m => m.IconsFaModule)
            }
        ]
    }
];
class IconsRoutingModule {
}
IconsRoutingModule.ɵfac = function IconsRoutingModule_Factory(t) { return new (t || IconsRoutingModule)(); };
IconsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconsRoutingModule });
IconsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 90086:
/*!***************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsComponent": () => (/* binding */ IconsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ 69410);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ 82110);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@vex/animations/scale-in.animation */ 5291);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-right.animation */ 250);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 28094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.directive */ 18259);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-quicklink */ 53883);


















function IconsComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("active", _r2.isActive)("disabled", link_r1.disabled)("routerLink", link_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", link_r1.label, " ");
} }
let IconsComponent = class IconsComponent {
    constructor(router) {
        this.router = router;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.colorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.color$ = this.colorCtrl.valueChanges;
        this.links = [
            {
                label: 'MATERIAL ICONS',
                route: 'ic'
            },
            {
                label: 'FONT AWESOME',
                route: 'fa'
            },
        ];
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
        this.searchCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(20), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(search => this.router.navigate([], { queryParams: { search } }));
    }
};
IconsComponent.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
IconsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: IconsComponent, selectors: [["vex-icons"]], decls: 17, vars: 10, consts: [[1, "h-full", "flex", "flex-col"], [1, "px-gutter", "pt-6", "pb-0", "bg-card", "shadow-b", "flex-none"], ["vexContainer", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "display-1", "mt-0", "mb-4"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary-light"], ["size", "24px", 3, "icon"], [1, "block"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxFlex", "auto", "mat-tab-nav-bar", "", 1, "vex-tabs", "border-0"], ["mat-tab-link", "", "queryParamsHandling", "preserve", "routerLinkActive", "", 3, "active", "disabled", "routerLink", 4, "ngFor", "ngForOf"], ["fxFlex", "none", "fxHide.xs", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "border", "rounded-full", "text-hint", "overflow-hidden", "bg-card", "ml-2"], ["size", "18px", 1, "ml-4", "mr-3", 3, "icon"], ["fxFlex", "auto", "placeholder", "Search Icons...", "type", "text", 1, "outline-none", "border-0", "h-10", "placeholder:text-secondary", "body-1", "bg-card", 3, "formControl"], [1, "flex", "flex-col", "flex-auto"], ["mat-tab-link", "", "queryParamsHandling", "preserve", "routerLinkActive", "", 3, "active", "disabled", "routerLink"], ["rla", "routerLinkActive"]], template: function IconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ic-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, IconsComponent_a_10_Template, 3, 4, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ic-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@scaleIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.icStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.icSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 8, ctx.color$));
    } }, directives: [_vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_4__.ContainerDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultShowHideDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, ngx_quicklink__WEBPACK_IMPORTED_MODULE_15__["ɵɵLinkDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29ucy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__.scaleIn400ms,
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInRight400ms
        ] } });
IconsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()
], IconsComponent);



/***/ }),

/***/ 40275:
/*!************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsModule": () => (/* binding */ IconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-routing.module */ 92453);
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.component */ 90086);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 69691);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 79391);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.module */ 90743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);













class IconsModule {
}
IconsModule.ɵfac = function IconsModule_Factory(t) { return new (t || IconsModule)(); };
IconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__.ContainerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IconsModule, { declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_1__.IconsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_2__.ContainerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_icons_icons_module_ts.js.map