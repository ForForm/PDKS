import { Injectable, Inject, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SyndicateService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) {}

  ngOnInit(): void { }
 
   

  GetAbsence() {
    console.log(this.apiUrl + 'syndicate/absence/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
    return  this.http.get(this.apiUrl + 'syndicate/absence/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
  }

  GetOvertime() {
    console.log(this.apiUrl + 'syndicate/overtime/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
    return  this.http.get(this.apiUrl + 'syndicate/overtime/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username')));
  }

  PostAbsence(obj) {

    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'syndicate/absence');
    return  this.http.post(this.apiUrl + 'syndicate/absence',obj);
  }

  PostOvertime(obj) {

    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'syndicate/overtime');
    return  this.http.post(this.apiUrl + 'syndicate/overtime',obj);
  }

  PostDeduction(obj) {

    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'syndicate/overtime/deduction');
    return  this.http.post(this.apiUrl + 'syndicate/overtime/deduction',obj);
  }

  PostPayment(obj) {

    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'syndicate/overtime/payment');
    return  this.http.post(this.apiUrl + 'syndicate/overtime/payment',obj);
  }



  GetAbsenceDetail(SyndicateAbsenceID) {
    console.log(this.apiUrl + 'syndicate/absence/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+SyndicateAbsenceID);
    return  this.http.get(this.apiUrl + 'syndicate/absence/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+SyndicateAbsenceID);
  }

  
  GetDeduction(syndicateOvertimeID) {
    console.log(this.apiUrl + 'syndicate/overtime/deduction/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+syndicateOvertimeID);
    return  this.http.get(this.apiUrl + 'syndicate/overtime/deduction/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+syndicateOvertimeID);
  }

  GetPayment(syndicateOvertimeID) {
    console.log(this.apiUrl + 'syndicate/overtime/payment/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+syndicateOvertimeID);
    return  this.http.get(this.apiUrl + 'syndicate/overtime/payment/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+syndicateOvertimeID);
  }

  
  PostAbsenceDetail(obj) {

    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'syndicate/absence/detail');
    return  this.http.post(this.apiUrl + 'syndicate/absence/detail',obj);
  }

  
  DeleteAbsence(id) {
    console.log(this.apiUrl + 'syndicate/absence/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'syndicate/absence/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }


  DeleteAbsenceDetail(id) {
    console.log(this.apiUrl + 'syndicate/absence/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'syndicate/absence/detail/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }

  
  DeleteOvertime(id) {
    console.log(this.apiUrl + 'syndicate/overtime/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'syndicate/overtime/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }

  
  DeleteDeduction(id) {
    console.log(this.apiUrl + 'syndicate/overtime/deduction/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'syndicate/overtime/deduction/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }


  DeletePayment(id) {
    console.log(this.apiUrl + 'syndicate/overtime/payment/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
    return  this.http.delete(this.apiUrl + 'syndicate/overtime/payment/'+JSON.parse(sessionStorage.getItem('CompanyId'))+'/'+JSON.parse(sessionStorage.getItem('Username'))+'/'+id);
  }



}