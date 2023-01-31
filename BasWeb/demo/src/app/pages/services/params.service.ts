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
export class ParamsService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }

  GetParamGroup() {
    console.log(this.apiUrl + 'params/group/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) );
    return this.http.get(this.apiUrl + 'params/group/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }


  GetParam() {
    console.log(this.apiUrl + 'params/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) );
    return this.http.get(this.apiUrl + 'params/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }

  PostParam(obj) {
    console.log(this.apiUrl + 'params');
    return this.http.post(this.apiUrl + 'params', obj);
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