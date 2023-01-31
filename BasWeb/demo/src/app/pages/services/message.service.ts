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
export class MessageService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;
  public messageCount: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }

  GetUserMessage(type,userid) {
    console.log(this.apiUrl + 'message/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type + '/' + userid );
    return this.http.get(this.apiUrl + 'message/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+ '/' + type + '/' + userid);
  }

  get getMessageCount() {
    this.messageCount.next(JSON.parse(sessionStorage.getItem('MessageCount')));
    return this.messageCount.asObservable();
  }
  
  PostUserMessageRead(obj) {
    console.log(this.apiUrl + 'message/read');
    return this.http.post(this.apiUrl + 'message/read', obj);
  }


  PostUserMessage(obj) {
    console.log(this.apiUrl + 'message');
    return this.http.post(this.apiUrl + 'message', obj);
  }

   











}