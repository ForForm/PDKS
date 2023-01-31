"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_personnel_personnels_module_ts"],{

/***/ 71805:
/*!**************************************************************!*\
  !*** ./src/app/pages/personnel/personnels-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonnelsRoutingModule": () => (/* binding */ PersonnelsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'grid',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-src_app_pages_shiftgroup_shiftgroup_component_ts"), __webpack_require__.e("default-src_app_pages_definitions_definitions_component_ts"), __webpack_require__.e("default-src_app_pages_personnel_components_personnels-edit_personnels-edit_module_ts"), __webpack_require__.e("node_modules_iconify_icons-ic_close_js-node_modules_iconify_icons-ic_save_js-node_modules_ico-b4087e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./personnels-grid/personnels-grid.module */ 42799)).then(m => m.PersonnelsGridModule)
            },
            {
                path: 'table',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_iconify_icons-ic_twotone-cloud-download_js-node_modules_iconify_icons-ic-5f8558"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_app_pages_services_definitions_service_ts"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("default-node_modules_angular_material-moment-adapter___ivy_ngcc___fesm2015_material-moment-ad-7a3747"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("default-src_app_pages_shiftgroup_shiftgroup_component_ts"), __webpack_require__.e("default-src_app_pages_definitions_definitions_component_ts"), __webpack_require__.e("default-src_app_pages_personnel_components_personnels-edit_personnels-edit_module_ts"), __webpack_require__.e("node_modules_iconify_icons-ic_save_js-node_modules_iconify_icons-ic_twotone-more-horiz_js-src-a7ccc0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./personnels-table/personnels-table.module */ 46002)).then(m => m.PersonnelsTableModule)
            },
            {
                path: 'transfer',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_angular-split___ivy_ngcc___fesm2015_angular-split_js"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("default-src_vex_animations_scale-fade-in_animation_ts-src_app_pages_services_personnel_servic-eb6ce6"), __webpack_require__.e("src_app_pages_personnel_personnels-transfer_personnels-transfer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./personnels-transfer/personnels-transfer.module */ 64569)).then(m => m.PersonnelsTransferModule)
            }
        ]
    }
];
class PersonnelsRoutingModule {
}
PersonnelsRoutingModule.ɵfac = function PersonnelsRoutingModule_Factory(t) { return new (t || PersonnelsRoutingModule)(); };
PersonnelsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonnelsRoutingModule });
PersonnelsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonnelsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 84222:
/*!******************************************************!*\
  !*** ./src/app/pages/personnel/personnels.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonnelsModule": () => (/* binding */ PersonnelsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _personnels_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personnels-routing.module */ 71805);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ 12077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




class PersonnelsModule {
}
PersonnelsModule.ɵfac = function PersonnelsModule_Factory(t) { return new (t || PersonnelsModule)(); };
PersonnelsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PersonnelsModule });
PersonnelsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggleModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _personnels_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonnelsRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PersonnelsModule, { imports: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggleModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _personnels_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonnelsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_personnel_personnels_module_ts.js.map