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
export class AuthorizationService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) {}

  ngOnInit(): void { }
 
  GetTreeView(Lng) {
    console.log(this.apiUrl + 'authorization/treeview/'+ JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+ JSON.parse(sessionStorage.getItem('Username'))+'/'+Lng);
    return  this.http.get(this.apiUrl + 'authorization/treeview/'+ JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+ JSON.parse(sessionStorage.getItem('Username'))+'/'+Lng);
  }

  GetUser(userCode,route) {
    console.log(this.apiUrl + 'authorization/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+userCode+'/'+route);
    return  this.http.get(this.apiUrl + 'authorization/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+userCode+'/'+route);
  }

  GetCompanies() {

    console.log(this.apiUrl + 'authorization/companies/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
    return  this.http.get(this.apiUrl + 'authorization/companies/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
  }

  PostUserSession(obj) {  
    return this.http.post(this.apiUrl + 'authorization/session', obj);
  }

  GetCompaniesAuth(groupCode) {

    console.log(this.apiUrl + 'authorization/companies/auth/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+groupCode);
    return  this.http.get(this.apiUrl + 'authorization/companies/auth/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+groupCode);
  }

  PostCompany(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'authorization/companies/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
    return  this.http.post(this.apiUrl + 'authorization/companies',obj);
  }

  DeleteCompany(ID) {
    console.log(this.apiUrl + 'authorization/companies/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
    return  this.http.delete(this.apiUrl + 'authorization/companies/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+ID);
  }

  GetUserTabs(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'authorization');
    return  this.http.post(this.apiUrl + 'authorization',obj);
  }

  GetGroups() {
    console.log(this.apiUrl + 'authorization/groups/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
    return  this.http.get(this.apiUrl + 'authorization/groups/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
  }
  


  GetUsers() {
    console.log(this.apiUrl + 'authorization/users/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
    return  this.http.get(this.apiUrl + 'authorization/users/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
  }

  GetUserLog(UserId) {
    console.log(this.apiUrl + 'authorization/userlog/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+UserId);
    return  this.http.get(this.apiUrl + 'authorization/userlog/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+UserId);
  }
  
  PostUserLog(obj) {
    console.log(this.apiUrl + 'authorization/userlog');
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'authorization/userlog', obj);
  }

  PostUser(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'authorization/users/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
    return  this.http.post(this.apiUrl + 'authorization/users',obj);
  }

  DeleteUser(Id) {
    console.log(this.apiUrl + 'authorization/users/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Id);
    return  this.http.get(this.apiUrl + 'authorization/users/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Id);
  }
  
  GetMenuGroup(groupCode) {
    console.log(this.apiUrl + 'authorization/menu/group/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+groupCode);
    return  this.http.get(this.apiUrl + 'authorization/menu/group/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+groupCode);
  }

  

  GetMenuUser() {
    console.log(this.apiUrl + 'authorization/menu/user/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
   return  this.http.get(this.apiUrl + 'authorization/menu/user/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
 }
 
 
 GetMenuGroups() {
  console.log(this.apiUrl + 'authorization/menu/groups/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
 return  this.http.get(this.apiUrl + 'authorization/menu/groups/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
}



// ------------------------------------------------------------

 GetUserMenu(userData) {
 
  console.log(this.apiUrl + 'authorization/menu/'+userData);
    return  this.http.get(this.apiUrl + 'authorization/menu/'+userData);
    // NavigationItem[]
    // const any=[{type: 'link',label: 'Dashboard222',route: '//dashboards//analytics'}];
    // return any;
  }

  DeleteMenuGroup(Code) {
    console.log(this.apiUrl + 'authorization/menu/group/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Code);
    return  this.http.delete(this.apiUrl + 'authorization/menu/group/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Code);
  }

  DeleteMenuUser(Code) {
    console.log(this.apiUrl + 'authorization/menu/user/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Code);
    return  this.http.delete(this.apiUrl + 'authorization/menu/user/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Code);
  }

  
  PostMenuUser(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'authorization/menu/user');
    return  this.http.post(this.apiUrl + 'authorization/menu/user',obj);
  }


  
  PostMenuTree(obj) {

    console.log(obj);
    // obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    // obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'authorization/treeview');
    return  this.http.post(this.apiUrl + 'authorization/treeview',obj);
  }

  
  
  PostMenuGroup(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'authorization/menu/group');
    return  this.http.post(this.apiUrl + 'authorization/menu/group',obj);
  }
  
  // ------------------------------------------------------------
  

}