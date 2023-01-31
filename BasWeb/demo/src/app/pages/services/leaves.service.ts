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
export class LeavesService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }


  CalculateLeaves(obj) {

    console.log(this.apiUrl + 'leaves/calculate/');
    return this.http.post(this.apiUrl + 'leaves/calculate', obj);
  }

  GetLeaves(Type, Id,StartDate,EndDate) {
    console.log(this.apiUrl + 'leaves/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type + '/' + Id+ '/' + StartDate+ '/' + EndDate+'/filter');
    return this.http.get(this.apiUrl + 'leaves/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type + '/' + Id+'/' + StartDate+ '/' + EndDate+'/filter');
  }

  GetLeave(obj) {

    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'leaves/filter/');
    return  this.http.post(this.apiUrl + 'leaves/filter',obj);
  }

  GetLeavesEmployee(Type, Id,StartDate,EndDate,EmployeeCode) {
    console.log(this.apiUrl + 'leaves/'+JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type + '/' + Id+ '/' + StartDate+ '/' + EndDate+'/filter?EmployeeCode='+EmployeeCode);
    return this.http.get(this.apiUrl + 'leaves/'+JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Type + '/' + Id+'/' + StartDate+ '/' + EndDate+'/filter?EmployeeCode='+EmployeeCode);
  }

  PostLeaves(obj) {
    console.log(this.apiUrl + 'leaves');
    return this.http.post(this.apiUrl + 'leaves', obj);
  }

  DeleteLeaves(Id) {
    console.log(this.apiUrl + 'leaves/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'leaves/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
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