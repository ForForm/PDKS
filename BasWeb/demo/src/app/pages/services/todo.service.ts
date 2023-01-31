import { Injectable, Inject, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {NgModule} from '@angular/core';
import {
  // MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";

import * as _moment from "moment"; 
const moment = _moment;


export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root',
 
})

// @NgModule({
//   declarations: [],
//   imports: [],
  
//   providers: [
//     {
      
//       provide: MAT_DATE_FORMATS,
//       useValue: {
//         parse: {
//           dateInput: ['l', 'LL'],
//         },
//         display: {
//           dateInput: 'L',
//           monthYearLabel: 'M YYYY',
//           dateA11yLabel: 'LL',
//           monthYearA11yLabel: 'MMMM YYYY',
//         },
//       },
//     },
//     { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }   
//   ]
// })

export class TodoService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;
  public todoCount: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public longToday: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }

  GetUserTodo(Id) {
    console.log(this.apiUrl + 'todo/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.get(this.apiUrl + 'todo/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }


  PostUserTodo(obj) {
    console.log(this.apiUrl + 'todo');
    return this.http.post(this.apiUrl + 'todo', obj);
  }

  get getLongToday() {
    
    this.longToday.next(moment(new Date()).format('Do MMMM YYYY, HH:mm'));
    return this.longToday.asObservable();
  }


  get getTodoCount() {
    this.todoCount.next(JSON.parse(sessionStorage.getItem('TodoCount')));
    return this.todoCount.asObservable();
  }




  DeleteUserTodo(Id) {
    console.log(this.apiUrl + 'todo/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'todo/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }













}