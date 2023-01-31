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
export class ShiftService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) {}

  ngOnInit(): void { }
 

  GetShift(type) {
    console.log(this.apiUrl + 'shift/type/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+type);
    return  this.http.get(this.apiUrl + 'shift/type/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+type);
  }
  

  GetShiftById(id) {
    console.log(this.apiUrl + 'shift/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'shift/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }
  
  GetShiftByCode(code) {
    console.log(this.apiUrl + 'shift/code/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+code);
    return  this.http.get(this.apiUrl + 'shift/code/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+code);
  }

  PostShift(obj) {

    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));

    console.log(this.apiUrl + 'shift');
    return  this.http.post(this.apiUrl + 'shift',obj);
  }
  
  DeleteShift(id) {
    console.log(this.apiUrl + 'shift/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'shift/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }

  
  GetShiftDist(id) {
    console.log(this.apiUrl + 'shift/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'shift/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }

  
   PostShiftDist(obj) {
    console.log(this.apiUrl + 'shift/dist');
    return  this.http.post(this.apiUrl + 'shift/dist',obj);
  }


  DeleteShiftDist(id) {
    console.log(this.apiUrl + 'shift/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'shift/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }
 
 
  GetShiftTolerance(id) {
    console.log(this.apiUrl + 'shift/tolerance/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'shift/tolerance/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }


  GetShiftHoliday(id) {
    console.log(this.apiUrl + 'shift/holiday/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'shift/holiday/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }


  DeleteShiftHoliday(id) {
    console.log(this.apiUrl + 'shift/holiday/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'shift/holiday/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }


  PostShiftTolerance(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'shift/tolerance');
    return  this.http.post(this.apiUrl + 'shift/tolerance',obj);
  }

  PostShiftHoliday(obj) {
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'shift/holiday');
    return  this.http.post(this.apiUrl + 'shift/holiday',obj);
  }

  DeleteShiftTolerance(id) {
    console.log(this.apiUrl + 'shift/tolerance/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'shift/tolerance/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }




  GetFreeShiftDist(id) {
    console.log(this.apiUrl + 'freeshift/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'freeshift/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }

  PostFreeShiftDist(obj) {
    console.log(this.apiUrl + 'freeshift/dist');
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return  this.http.post(this.apiUrl + 'freeshift/dist',obj);
  }

  DeleteFreeShiftDist(id) {
    console.log(this.apiUrl + 'freeshift/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'freeshift/dist/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }
 

  GetFreeShiftMeal(id) {    
    console.log(this.apiUrl + 'freeshift/meal/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'freeshift/meal/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }


  PostFreeShiftMeal(obj) {
    console.log(this.apiUrl + 'freeshift/meal');
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return  this.http.post(this.apiUrl + 'freeshift/meal',obj);
  }

  DeleteFreeShiftMeal(id) {
    console.log(this.apiUrl + 'freeshift/meal/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'freeshift/meal/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }
 

  GetFreeShiftNight(id) {
    console.log(this.apiUrl + 'freeshift/night/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.get(this.apiUrl + 'freeshift/night/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }

  PostFreeShiftNight(obj) {
    console.log(this.apiUrl + 'freeshift/night');
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return  this.http.post(this.apiUrl + 'freeshift/night',obj);
  }

  DeleteFreeShiftNight(id) {
    console.log(this.apiUrl + 'freeshift/night/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'freeshift/night/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }

}