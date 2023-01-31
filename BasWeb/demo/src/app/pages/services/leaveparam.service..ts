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
export class LeaveParamService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }


 
  GetLeaveExtendParams() {
    console.log(this.apiUrl + 'leaveparam/extend/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    return this.http.get(this.apiUrl + 'leaveparam/extend/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }

   
  PostLeaveExtendParams(obj) {
    console.log(this.apiUrl + 'leaveparam/extend');
    return this.http.post(this.apiUrl + 'leaveparam/extend', obj);
  }

  PostLeaveDistParams(obj) {
    console.log(this.apiUrl + 'leaveparam/dist');
    return this.http.post(this.apiUrl + 'leaveparam/dist', obj);
  }

  DeleteLeaveExtendParams(Id) {
    console.log(this.apiUrl + 'leaveparam/extend/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'leaveparam/extend/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

 
  GetLeaveDistParams() {
    console.log(this.apiUrl + 'leaveparam/dist/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    return this.http.get(this.apiUrl + 'leaveparam/dist/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }


  DeleteLeaveDistParams(Id) {
    console.log(this.apiUrl + 'leaveparam/dist/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'leaveparam/dist/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }



  GetLeaveLimitParams() {
    console.log(this.apiUrl + 'leaveparam/limit/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    return this.http.get(this.apiUrl + 'leaveparam/limit/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }

  
  GetYearlyParams() {
    console.log(this.apiUrl + 'leaveparam/year/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    return this.http.get(this.apiUrl + 'leaveparam/year/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }


  GetYearlyParamsCode(flexId) {
    console.log(this.apiUrl + 'leaveparam/year/codes' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+flexId);
    return this.http.get(this.apiUrl + 'leaveparam/year/codes/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+flexId);
  }


  GetYearlyParamsUsed(Id) {
    console.log(this.apiUrl + 'leaveparam/year/used' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+Id);
    return this.http.get(this.apiUrl + 'leaveparam/year/used/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+Id);
  }


  GetYearlyParamsSeniority(flexId) {
    console.log(this.apiUrl + 'leaveparam/year/seniority' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+flexId);
    return this.http.get(this.apiUrl + 'leaveparam/year/seniority/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+flexId);
  }

  DeleteLeaveLimitParams(Id) {
    console.log(this.apiUrl + 'leaveparam/limit/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'leaveparam/limit/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

  PostLeaveLimitParams(obj) {
    console.log(this.apiUrl + 'leaveparam/limit');
    return this.http.post(this.apiUrl + 'leaveparam/limit', obj);
  }

  PostLeaveYearParams(obj) {
    console.log(this.apiUrl + 'leaveparam/year');
    return this.http.post(this.apiUrl + 'leaveparam/year', obj);
  }

  PostLeaveYearParamsCode(obj) {
    console.log(this.apiUrl + 'leaveparam/year/codes');
    return this.http.post(this.apiUrl + 'leaveparam/year/codes', obj);
  }


  PostLeaveYearParamsSen(obj) {
    console.log(this.apiUrl + 'leaveparam/year/seniority');
    return this.http.post(this.apiUrl + 'leaveparam/year/seniority', obj);
  }

  PostLeaveYearParamsUsed(obj) {
    console.log(this.apiUrl + 'leaveparam/year/used');
    return this.http.post(this.apiUrl + 'leaveparam/year/used', obj);
  }

  DeleteYearParams(Id) {
    console.log(this.apiUrl + 'leaveparam/year/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'leaveparam/year/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

  DeleteYearParamsCode(Id) {
    console.log(this.apiUrl + 'leaveparam/year/codes/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'leaveparam/year/codes/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

  
  DeleteYearParamsSen(Id) {
    console.log(this.apiUrl + 'leaveparam/year/seniority/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'leaveparam/year/seniority/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

    
  DeleteYearParamsUsed(Id) {
    console.log(this.apiUrl + 'leaveparam/year/used/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'leaveparam/year/used/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }


}