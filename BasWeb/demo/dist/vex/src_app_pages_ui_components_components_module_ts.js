"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_ui_components_components_module_ts"],{

/***/ 33576:
/*!******************************************************************!*\
  !*** ./src/app/pages/ui/components/components-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsRoutingModule": () => (/* binding */ ComponentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    {
        path: 'overview',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_animations_fade-in-up_animation-b3d153"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-input_-0158e5"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-autoco-7372e2"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-lists_-4be674"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-cards_-2ef232"), __webpack_require__.e("common"), __webpack_require__.e("node_modules_iconify_icons-ic_twotone-more-vert_js-src_app_pages_ui_components_components-ove-ede2c2")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-overview/components-overview.module */ 56763)).then(m => m.ComponentsOverviewModule)
    },
    {
        path: 'autocomplete',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-autoco-7372e2"), __webpack_require__.e("src_app_pages_ui_components_components-autocomplete_components-autocomplete_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-autocomplete/components-autocomplete.module */ 21795)).then(m => m.ComponentsAutocompleteModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'buttons',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_animations_fade-in-up_animation-b3d153"), __webpack_require__.e("src_app_pages_ui_components_components-buttons_components-buttons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-buttons/components-buttons.module */ 30975)).then(m => m.ComponentsButtonsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'button-group',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("src_app_pages_ui_components_components-button-group_components-button-group_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-button-group/components-button-group.module */ 32387)).then(m => m.ComponentsButtonGroupModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'cards',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("default-src_vex_animations_fade-in-right_animation_ts-src_vex_animations_fade-in-up_animation-b3d153"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-cards_-2ef232"), __webpack_require__.e("src_app_pages_ui_components_components-cards_components-cards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-cards/components-cards.module */ 40459)).then(m => m.ComponentsCardsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'checkbox',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-checkbox_components-checkbox_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-checkbox/components-checkbox.module */ 27465)).then(m => m.ComponentsCheckboxModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'dialogs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-dialogs_components-dialogs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-dialogs/components-dialogs.module */ 40263)).then(m => m.ComponentsDialogsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'grid-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-grid-list_components-grid-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-grid-list/components-grid-list.module */ 12072)).then(m => m.ComponentsGridListModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'input',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-input_-0158e5"), __webpack_require__.e("src_app_pages_ui_components_components-input_components-input_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-input/components-input.module */ 81107)).then(m => m.ComponentsInputModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'lists',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("default-src_app_pages_ui_components_components-overview_components_components-overview-lists_-4be674"), __webpack_require__.e("src_app_pages_ui_components_components-lists_components-lists_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-lists/components-lists.module */ 41557)).then(m => m.ComponentsListsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'menu',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("node_modules_iconify_icons-ic_twotone-more-vert_js-src_app_pages_ui_components_components-men-44e1d4")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-menu/components-menu.module */ 68510)).then(m => m.ComponentsMenuModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'progress',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-progress_components-progress_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-progress/components-progress.module */ 67318)).then(m => m.ComponentsProgressModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'progress-spinner',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-progress-spinner_components-progress-spinner_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-progress-spinner/components-progress-spinner.module */ 9110)).then(m => m.ComponentsProgressSpinnerModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'radio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-radio_components-radio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-radio/components-radio.module */ 4292)).then(m => m.ComponentsRadioModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'slide-toggle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-slide-toggle_components-slide-toggle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-slide-toggle/components-slide-toggle.module */ 35724)).then(m => m.ComponentsSlideToggleModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'slider',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-slider_components-slider_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-slider/components-slider.module */ 36552)).then(m => m.ComponentsSliderModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'snack-bar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_components_components-snack-bar_components-snack-bar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-snack-bar/components-snack-bar.module */ 44504)).then(m => m.ComponentsSnackBarModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'tooltip',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_vex_components_breadcrumbs_breadcrumbs_module_ts-src_vex_components_secondary-too-aca073"), __webpack_require__.e("default-src_vex_components_highlight_highlight_module_ts-src_vex_components_secondary-toolbar-9c9442"), __webpack_require__.e("common"), __webpack_require__.e("node_modules_iconify_icons-ic_twotone-favorite_js-src_app_pages_ui_components_components-tool-bb2318")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components-tooltip/components-tooltip.module */ 17531)).then(m => m.ComponentsTooltipModule),
        data: {
            containerEnabled: true
        }
    }
];
class ComponentsRoutingModule {
}
ComponentsRoutingModule.ɵfac = function ComponentsRoutingModule_Factory(t) { return new (t || ComponentsRoutingModule)(); };
ComponentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsRoutingModule });
ComponentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule] }); })();


/***/ }),

/***/ 54152:
/*!**********************************************************!*\
  !*** ./src/app/pages/ui/components/components.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-routing.module */ 33576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _components_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _components_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_components_components_module_ts.js.map