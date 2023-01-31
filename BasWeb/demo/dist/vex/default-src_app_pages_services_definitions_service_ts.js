"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_services_definitions_service_ts"],{

/***/ 27104:
/*!*******************************************************!*\
  !*** ./src/app/pages/services/definitions.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefinitionsService": () => (/* binding */ DefinitionsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



class DefinitionsService {
    constructor(apiUrl, http, router, ngZone) {
        this.apiUrl = apiUrl;
        this.http = http;
        this.router = router;
        this.ngZone = ngZone;
        this.showLoader = false;
    }
    ngOnInit() { }
    GetFlexGroupPersonel(ID) {
        console.log(this.apiUrl + 'definitions/flex/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
        return this.http.get(this.apiUrl + 'definitions/flex/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
    }
    GetFlexGroupPersonelList(Type) {
        console.log(this.apiUrl + 'definitions/flex/list/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type);
        return this.http.get(this.apiUrl + 'definitions/flex/list/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type);
    }
    PostFlexGroupPersonel(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'definitions/flex');
        return this.http.post(this.apiUrl + 'definitions/flex', obj);
    }
    DeleteFlexGroupPersonel(ID) {
        console.log(this.apiUrl + 'definitions/flex/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
        return this.http.delete(this.apiUrl + 'definitions/flex/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
    }
    GetFlexGroupPersonelDetail(FlexPersonnelGroupID, ID) {
        console.log(this.apiUrl + 'definitions/flex/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + FlexPersonnelGroupID + '/' + ID);
        return this.http.get(this.apiUrl + 'definitions/flex/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + FlexPersonnelGroupID + '/' + ID);
    }
    PostFlexGroupPersonelDetail(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'definitions/flex/detail');
        return this.http.post(this.apiUrl + 'definitions/flex/detail', obj);
    }
    DeleteFlexGroupPersonelDetail(ID) {
        console.log(this.apiUrl + 'definitions/flex/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
        return this.http.delete(this.apiUrl + 'definitions/flex/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
    }
    DefinitionGetConstantsGroups() {
        console.log(this.apiUrl + 'definitions/constants/groups/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
        return this.http.get(this.apiUrl + 'definitions/constants/groups/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    }
    DefinitionGetConstantsGroupsDetail(Type) {
        console.log(this.apiUrl + 'definitions/constants/groups/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type);
        return this.http.get(this.apiUrl + 'definitions/constants/groups/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type);
    }
    DefinitionGetConstants(Type) {
        console.log(this.apiUrl + 'definitions/constants/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type);
        return this.http.get(this.apiUrl + 'definitions/constants/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type);
    }
    DefinitionPostConstants(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'definitions/constants');
        return this.http.post(this.apiUrl + 'definitions/constants', obj);
    }
    DefinitionDeleteConstants(ID) {
        console.log(this.apiUrl + 'definitions/constants/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
        return this.http.delete(this.apiUrl + 'definitions/constants/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + ID);
    }
    DefinitionGetWorkingTypesById(id) {
        console.log(this.apiUrl + 'definitions//workingtypes/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
        return this.http.get(this.apiUrl + 'definitions/workingtypes/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
    }
    DefinitionGetWorkingTypes(type) {
        console.log(this.apiUrl + 'definitions//workingtypes/type/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type);
        return this.http.get(this.apiUrl + 'definitions/workingtypes/type/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type);
    }
    DefinitionGetWorkingTypesByCode(code) {
        console.log(this.apiUrl + 'definitions//workingtypes/code/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + code);
        return this.http.get(this.apiUrl + 'definitions/workingtypes/code/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + code);
    }
    DefinitionGetWorkingTypesLeave(Type) {
        console.log(this.apiUrl + 'definitions/workingtypes/leave/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type);
        return this.http.get(this.apiUrl + 'definitions/workingtypes/leave/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type);
    }
    DefinitionGetWorkingTypeDistribution(id) {
        console.log(this.apiUrl + 'definitions/workingtypes/dist/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
        return this.http.get(this.apiUrl + 'definitions/workingtypes/dist/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
    }
    DefinitionPostWorkingTypeDist(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'definitions/workingtypes/dist');
        return this.http.post(this.apiUrl + 'definitions/workingtypes/dist', obj);
    }
    DefinitionDeleteWorkingTypeDist(id) {
        console.log(this.apiUrl + 'definitions/workingtypes/dist/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
        return this.http.delete(this.apiUrl + 'definitions/workingtypes/dist/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
    }
    GetEnums(type, code) {
        console.log(this.apiUrl + 'definitions/workingtypes/enums/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type + '/' + code);
        return this.http.get(this.apiUrl + 'definitions/workingtypes/enums/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type + '/' + code);
    }
    DefinitionGetWorkingTypeEnums(type, code) {
        console.log(this.apiUrl + 'definitions/workingtypes/enums/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type + '/' + code);
        return this.http.get(this.apiUrl + 'definitions/workingtypes/enums/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type + '/' + code);
    }
    DefinitionGetType(Type, Id) {
        console.log(this.apiUrl + 'definitions/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type + '/' + Id);
        return this.http.get(this.apiUrl + 'definitions/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type + '/' + Id);
    }
    DefinitionGetTypeDetail(Type, Code) {
        console.log(this.apiUrl + 'definitions/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type + '/' + Code);
        return this.http.get(this.apiUrl + 'definitions/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type + '/' + Code);
    }
    DefinitionPostTypeDetail(obj) {
        // /'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'definitions/detail');
        return this.http.post(this.apiUrl + 'definitions/detail', obj);
    }
    DefinitionPostType(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'definitions');
        console.log(obj);
        return this.http.post(this.apiUrl + 'definitions', obj);
    }
    DefinitionPostWorkingType(obj) {
        obj.Username = JSON.parse(sessionStorage.getItem('Username'));
        obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
        console.log(this.apiUrl + 'definitions/workingtypes');
        return this.http.post(this.apiUrl + 'definitions/workingtypes', obj);
    }
    DefinitionDeleteType(obj) {
        // type,code
        console.log(this.apiUrl + 'definitions/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + obj.type + '/' + obj.code);
        return this.http.delete(this.apiUrl + 'definitions/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + obj.type + '/' + obj.code);
    }
    DefinitionDeleteWorkingType(obj) {
        // type,code
        console.log(this.apiUrl + 'definitions/workingtypes/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + obj.code);
        return this.http.delete(this.apiUrl + 'definitions/workingtypes/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + obj.code);
    }
    DefinitionDeleteTypeDetail(obj) {
        // type,code
        console.log(this.apiUrl + 'definitions/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + obj.type + '/' + obj.id);
        return this.http.delete(this.apiUrl + 'definitions/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + obj.type + '/' + obj.id);
    }
}
DefinitionsService.ɵfac = function DefinitionsService_Factory(t) { return new (t || DefinitionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('apiUrl'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
DefinitionsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefinitionsService, factory: DefinitionsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_services_definitions_service_ts.js.map