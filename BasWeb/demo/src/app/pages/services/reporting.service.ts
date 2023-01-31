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
export class ReportingService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }


  GetReporting() {
    console.log(this.apiUrl + 'report/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) );
    return this.http.get(this.apiUrl + 'report/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }

  
  GetReportingDef(name,defId) {
    console.log(this.apiUrl + 'report/def/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+name+'/'+defId );
    return this.http.get(this.apiUrl + 'report/def/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+name+'/'+defId);
  }

  PostReportingDef(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
  
    console.log(this.apiUrl + 'report',obj);
    return  this.http.post(this.apiUrl + 'report/def',obj);
  }

  DeleteReportingDef(Id) {
    console.log(this.apiUrl + 'report/def/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Id);
    return  this.http.delete(this.apiUrl + 'report/def/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Id);
  }


  ExecReporting(obj) {
    console.log(this.apiUrl + 'report',obj);
    return  this.http.post(this.apiUrl + 'report',obj);
  }

  GetReportingParams(spname) {
    console.log(this.apiUrl + 'report/params/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+ '/' + spname );
    return this.http.get(this.apiUrl + 'report/params/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+ '/' + spname);
  }
  








}