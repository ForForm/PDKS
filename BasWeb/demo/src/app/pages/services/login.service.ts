import { Injectable, Inject, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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
export class LoginService implements OnInit {

  // public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;
  public firmName: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) {}

  ngOnInit(): void { 

  }

  SendPassword(CompanyId,Username)
  {
    console.log(this.apiUrl + 'login/sendpassword/'+CompanyId+'/'+Username);
    return  this.http.get(this.apiUrl + 'login/sendpassword/'+CompanyId+'/'+Username);
  }


  Login(obj) {
    console.log(this.apiUrl + 'login');
    return this.http.post(this.apiUrl + 'login', obj);
  }

  LoginGetMenu(Lng) {
    console.log(this.apiUrl + 'login/menu/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Lng);
    return  this.http.get(this.apiUrl + 'login/menu/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Lng);
  }

  LoginGetLabels(Lng) {
    console.log(this.apiUrl + 'login/label/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Lng);
    return  this.http.get(this.apiUrl + 'login/label/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+Lng);
  }

 get getFirmName() {
    this.firmName.next(JSON.parse(sessionStorage.getItem('Firmname')));
    return this.firmName.asObservable();
  }
  


  UpdateUserFavorite(obj) {
    console.log(this.apiUrl + 'login/favorite');
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'login/favorite', obj);
  }


}