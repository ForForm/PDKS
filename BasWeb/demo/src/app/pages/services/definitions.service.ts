import { Injectable, Inject, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DefinitionsService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) {}

  ngOnInit(): void { }
  
  GetFlexGroupPersonel(ID) {
    
    console.log(this.apiUrl + 'definitions/flex/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
    return  this.http.get(this.apiUrl + 'definitions/flex/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
  }


  GetFlexGroupPersonelList(Type) {
    
    console.log(this.apiUrl + 'definitions/flex/list/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type);
    return  this.http.get(this.apiUrl + 'definitions/flex/list/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type);
  }

  PostFlexGroupPersonel(obj) {
    
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'definitions/flex');
    return  this.http.post(this.apiUrl + 'definitions/flex',obj);
  }

  DeleteFlexGroupPersonel(ID) {
    console.log(this.apiUrl + 'definitions/flex/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
    return  this.http.delete(this.apiUrl + 'definitions/flex/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
  }

  GetFlexGroupPersonelDetail(FlexPersonnelGroupID,ID) {
    
    console.log(this.apiUrl + 'definitions/flex/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+FlexPersonnelGroupID+'/'+ID);
    return  this.http.get(this.apiUrl + 'definitions/flex/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+FlexPersonnelGroupID+'/'+ID);
  }

  PostFlexGroupPersonelDetail(obj) {
    
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'definitions/flex/detail');
    return  this.http.post(this.apiUrl + 'definitions/flex/detail',obj);
  }


  DeleteFlexGroupPersonelDetail(ID) {
    console.log(this.apiUrl + 'definitions/flex/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
    return  this.http.delete(this.apiUrl + 'definitions/flex/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
  }
  DefinitionGetConstantsGroups() {
    console.log(this.apiUrl + 'definitions/constants/groups/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
    return  this.http.get(this.apiUrl + 'definitions/constants/groups/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
  }
  
  DefinitionGetConstantsGroupsDetail(Type) {
    console.log(this.apiUrl + 'definitions/constants/groups/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type);
    return  this.http.get(this.apiUrl + 'definitions/constants/groups/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type);
  }

  DefinitionGetPublicHoliday(Group,Year) {
    console.log(this.apiUrl + 'definitions/constants/holiday/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Group+'/'+Year);
    return  this.http.get(this.apiUrl + 'definitions/constants/holiday/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Group+'/'+Year);
  }

  DefinitionPostPublicHoliday(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'definitions/constants/holiday');
    return  this.http.post(this.apiUrl + 'definitions/constants/holiday',obj);
  }

  DefinitionDeleteHoliday(ID) {
    console.log(this.apiUrl + 'definitions/constants/holiday/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
    return  this.http.delete(this.apiUrl + 'definitions/constants/holiday/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
  }

  DefinitionGetConstants(Type) {
    console.log(this.apiUrl + 'definitions/constants/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type);
    return  this.http.get(this.apiUrl + 'definitions/constants/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type);
  }
  
  
  DefinitionPostConstants(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'definitions/constants');
    return  this.http.post(this.apiUrl + 'definitions/constants',obj);
  }

  DefinitionDeleteConstants(ID) {
    console.log(this.apiUrl + 'definitions/constants/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
    return  this.http.delete(this.apiUrl + 'definitions/constants/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
  }


  DefinitionGetWorkingTypesById(id) {
    console.log(this.apiUrl + 'definitions//workingtypes/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'definitions/workingtypes/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }
  
  
  DefinitionGetWorkingTypes(type) {
    console.log(this.apiUrl + 'definitions//workingtypes/type/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+type);
    return  this.http.get(this.apiUrl + 'definitions/workingtypes/type/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+type);
  }

  DefinitionGetWorkingTypesByCode(code) {
    console.log(this.apiUrl + 'definitions//workingtypes/code/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+code);
    return  this.http.get(this.apiUrl + 'definitions/workingtypes/code/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+code);
  }
  

  DefinitionGetWorkingTypesLeave(Type) {
    console.log(this.apiUrl + 'definitions/workingtypes/leave/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type);
    return  this.http.get(this.apiUrl + 'definitions/workingtypes/leave/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type);
  }
  
    
  DefinitionGetWorkingTypeDistribution(id) {
    console.log(this.apiUrl + 'definitions/workingtypes/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'definitions/workingtypes/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }

  



  DefinitionPostWorkingTypeDist(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'definitions/workingtypes/dist');
    return  this.http.post(this.apiUrl + 'definitions/workingtypes/dist',obj);
  }

  

  

  DefinitionDeleteWorkingTypeDist(id) {
    console.log(this.apiUrl + 'definitions/workingtypes/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'definitions/workingtypes/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }


  GetEnums(type,code) {
    console.log(this.apiUrl + 'definitions/workingtypes/enums/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+type+'/'+code);
    return  this.http.get(this.apiUrl + 'definitions/workingtypes/enums/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+type+'/'+code);
  }


  DefinitionGetWorkingTypeEnums(type,code) {
    console.log(this.apiUrl + 'definitions/workingtypes/enums/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+type+'/'+code);
    return  this.http.get(this.apiUrl + 'definitions/workingtypes/enums/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+type+'/'+code);
  }

  DefinitionGetTypeByCode(Type,Id,Code) {
    
    console.log(this.apiUrl + 'definitions/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type+'/'+Id+'/'+Code);
    return  this.http.get(this.apiUrl + 'definitions/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type+'/'+Id+'/'+Code);
  }
  
  DefinitionGetType(Type,Id) {
    
    console.log(this.apiUrl + 'definitions/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type+'/'+Id+'/'+null);
    return  this.http.get(this.apiUrl + 'definitions/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type+'/'+Id+'/'+null);
  }

  DefinitionGetTypeDetail(Type,Code) {
    console.log(this.apiUrl + 'definitions/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type+'/'+Code);
    return  this.http.get(this.apiUrl + 'definitions/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Type+'/'+Code);
  }

  DefinitionPostTypeDetail(obj) {
    // /'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'definitions/detail');
    return  this.http.post(this.apiUrl + 'definitions/detail',obj);
  }


  DefinitionPostType(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'definitions');
    console.log(obj);
    return  this.http.post(this.apiUrl + 'definitions',obj);
  }

  DefinitionPostWorkingType(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'definitions/workingtypes');
    return  this.http.post(this.apiUrl + 'definitions/workingtypes',obj);
  }

 


   DefinitionDeleteType(obj) {
    // type,code
    console.log(this.apiUrl + 'definitions/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+obj.type+'/'+obj.code);
    return  this.http.delete(this.apiUrl + 'definitions/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+obj.type+'/'+obj.code);
  }


  DefinitionDeleteWorkingType(obj) {
    // type,code
    console.log(this.apiUrl + 'definitions/workingtypes/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+obj.code);
    return  this.http.delete(this.apiUrl + 'definitions/workingtypes/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+obj.code);
  }

   
  DefinitionDeleteTypeDetail(obj) {
    // type,code
    console.log(this.apiUrl + 'definitions/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+obj.type+'/'+obj.id);
    return  this.http.delete(this.apiUrl + 'definitions/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+obj.type+'/'+obj.id);
  }


}