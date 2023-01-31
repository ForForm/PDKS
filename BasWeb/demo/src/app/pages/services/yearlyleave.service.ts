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
export class YearlyLeaveService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }


 
  GetYearlyLeave(Id) {
    console.log(this.apiUrl + 'yearlyleave/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id );
    return this.http.get(this.apiUrl + 'yearlyleave/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

 
  GetYearlyLeaveDetail(Id) {
    console.log(this.apiUrl + 'yearlyleave/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id );
    return this.http.get(this.apiUrl + 'yearlyleave/detail/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }
 
 
  GetYearlyLeaveTran(Id,Year) {
    console.log(this.apiUrl + 'yearlyleave/transactions/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id+ '/' + Year );
    return this.http.get(this.apiUrl + 'yearlyleave/transactions/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id+ '/' + Year);
  }
 
  CalculateYearlyLeave(obj) {
    obj[0].Username=JSON.parse(sessionStorage.getItem('Username'));
    obj[0].CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'yearlyleave/calculate',obj);
    return this.http.post(this.apiUrl + 'yearlyleave/calculate',obj);
  }





}