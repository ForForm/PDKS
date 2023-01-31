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
export class DashboardService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }

  
  GetReportingDef() {
    console.log(this.apiUrl + 'dashboard/definition/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) );
    return this.http.get(this.apiUrl + 'dashboard/definition/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }

  GetReporting(spName) {
    console.log(this.apiUrl + 'dashboard/report/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+spName );
    return this.http.get(this.apiUrl + 'dashboard/report/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+spName);
  }

  GetReportingGrid(spName) {
    console.log(this.apiUrl + 'dashboard/reportgrid/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+spName );
    return this.http.get(this.apiUrl + 'dashboard/reportgrid/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+spName);
  }


  GetReportingGroup(spName) {
    console.log(this.apiUrl + 'dashboard/reportgroup/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+spName );
    return this.http.get(this.apiUrl + 'dashboard/reportgroup/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+spName);
  }

  DeleteReportingDef(Id) {
    console.log(this.apiUrl + 'dashboard/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+Id );
    return this.http.delete(this.apiUrl + 'dashboard/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) +'/'+Id);
  }


  
  DeleteViewDef(Id) {
    console.log(this.apiUrl + 'dashboard/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+Id );
    return this.http.delete(this.apiUrl + 'dashboard/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) +'/'+Id);
  }


  PostReportingDef(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
  
    console.log(this.apiUrl + 'dashboard/definition',obj);
    return  this.http.post(this.apiUrl + 'dashboard/definition',obj);
  }

  







}