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
export class AttendanceService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) {}

  ngOnInit(): void { }
 
  
  GetAttendance(obj) {

    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'attendance/filter/');
    return  this.http.post(this.apiUrl + 'attendance/filter',obj);
  }

  GetFilterColumns(table) {
    console.log(this.apiUrl + 'attendance/filter/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+table);
    return  this.http.get(this.apiUrl + 'attendance/filter/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+table);
  }

  PostFilterColumns(obj) {
    console.log(obj);
  
    console.log(this.apiUrl + 'attendance/filter/columns');
    return  this.http.post(this.apiUrl + 'attendance/filter/columns',obj);
  }


  PostAttendance(obj) {
    console.log(obj);
    console.log(this.apiUrl + 'attendance');
    return  this.http.post(this.apiUrl + 'attendance',obj);
  }

  DeleteAttendance(IIDNO,OIDNO) {
    console.log(this.apiUrl + 'attendance/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+ '/' + IIDNO+ '/' + OIDNO);
    return  this.http.delete(this.apiUrl + 'attendance/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+  IIDNO+ '/' + OIDNO);
  }
 

  // PostShiftGroup(obj) {

  //   obj.Username=JSON.parse(sessionStorage.getItem('Username'));
  //   obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));

  //   console.log(this.apiUrl + 'shiftgroup');
  //   return  this.http.post(this.apiUrl + 'shiftgroup',obj);
  // }


 


 


 
 


}