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
export class ScoringService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }


  CalculateScoring(obj) {

    console.log(this.apiUrl + 'scoring/calculate/daily');
    return this.http.post(this.apiUrl + 'scoring/calculate/daily', obj);
  }


  
  CalculateMonthlyScoring(obj) {

    console.log(this.apiUrl + 'scoring/calculate/monthly');
    return this.http.post(this.apiUrl + 'scoring/calculate/monthly', obj);
  }


  
  PostScoring(obj) {

    console.log(this.apiUrl + 'scoring/daily'); 
    obj[0].Username=JSON.parse(sessionStorage.getItem('Username'));
    obj[0].CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'scoring/daily', obj);
  }
  // type, wokingTypes, Id,StartDate,EndDate,view,filter
  GetScoring(obj) {
    // console.log(this.apiUrl + 'scoring/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type + '/' +wokingTypes + '/' + Id+ '/' + StartDate+ '/' + EndDate+ '/' + view+ '/' + filter);
    // return this.http.get(this.apiUrl + 'scoring/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))  + '/' + type + '/' + wokingTypes + '/' + Id+'/' + StartDate+ '/' + EndDate+ '/' + view+ '/' + filter);
    return this.http.post(this.apiUrl + 'scoring/', obj) ;
  }

  GetScoringDeff(Id) {
    console.log(this.apiUrl + 'scoring/deff/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.get(this.apiUrl + 'scoring/deff/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }


  PostScoringDeff(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'scoring/deff/',obj);
  }

  DeleteScoringDeff(Id) {
    console.log(this.apiUrl + 'scoring/deff/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'scoring/deff/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }


  GetScoringByEmployee(Employee,StartDate,EndDate) {
    console.log(this.apiUrl + 'scoring/daily/employee/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Employee+ '/' + StartDate+ '/' + EndDate);
    return this.http.get(this.apiUrl + 'scoring/daily/employee/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Employee+'/' + StartDate+ '/' + EndDate);
  }

  
 

  // PostEntranceExit(obj) {
  //   console.log(obj);
  //   console.log(this.apiUrl + 'entranceexit');
  //   return  this.http.post(this.apiUrl + 'entranceexit',obj);
  // }

  // DeleteEntranceExit(id) {
  //   console.log(this.apiUrl + 'entranceexit/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  //   return  this.http.delete(this.apiUrl + 'entranceexit/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  // }


  // PostShiftGroup(obj) {

  //   obj.Username=JSON.parse(sessionStorage.getItem('Username'));
  //   obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));

  //   console.log(this.apiUrl + 'shiftgroup');
  //   return  this.http.post(this.apiUrl + 'shiftgroup',obj);
  // }












}