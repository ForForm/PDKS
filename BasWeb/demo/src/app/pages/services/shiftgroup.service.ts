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
export class ShiftGroupService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) {}

  ngOnInit(): void { }
 
  
  GetShiftGroup(id) {
    console.log(this.apiUrl + 'shiftgroup/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'shiftgroup/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }

  GetShiftGroupByCode(code) {
    console.log(this.apiUrl + 'shiftgroup/code/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+code);
    return  this.http.get(this.apiUrl + 'shiftgroup/code/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+code);
  }

  PostShiftGroup(obj) {

    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));

    console.log(this.apiUrl + 'shiftgroup');
    return  this.http.post(this.apiUrl + 'shiftgroup',obj);
  }


  DeleteShiftGroup(id) {
    console.log(this.apiUrl + 'shiftgroup/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'shiftgroup/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }
 


  GetShiftGroupDist(id) {

    console.log(this.apiUrl + 'shiftgroup/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'shiftgroup/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);

  }

  PostShiftGroupDist(obj) {
    console.log(this.apiUrl + 'shiftgroup/dist');
    return  this.http.post(this.apiUrl + 'shiftgroup/dist',obj);
  }



  DeleteShiftGroupDist(id) {
    console.log(this.apiUrl + 'shiftgroup/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'shiftgroup/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }





  GetShiftGroupBackUp(id) {
    console.log(this.apiUrl + 'shiftgroup/backup/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'shiftgroup/backup/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }


  PostShiftGroupBackUp(obj) {
    console.log(this.apiUrl + 'shiftgroup/backup');
    return  this.http.post(this.apiUrl + 'shiftgroup/backup',obj);
  }

 
  DeleteShiftGroupBackUp(id) {
    console.log(this.apiUrl + 'shiftgroup/backup/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'shiftgroup/backup/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }
 


  CreateShiftGroupDistCalendar(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'shiftgroup/dist/create/calendar',obj);
  }

  GetShiftGroupDistCalendar(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'shiftgroup/dist/get/calendar',obj);
  }
  
  GetShiftGroupCalendar() {
    console.log(this.apiUrl + 'shiftgroup/dist/calendar/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
    return  this.http.get(this.apiUrl + 'shiftgroup/dist/calendar/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));

    
  }

  
  SaveShiftGroupDistCalendar(obj) {
    obj[0].Username=JSON.parse(sessionStorage.getItem('Username'));
    obj[0].CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'shiftgroup/dist/calendar/save',obj);
  }


  GetCalendar(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'shiftgroup/calendar',obj);
  }

 


 
 


}