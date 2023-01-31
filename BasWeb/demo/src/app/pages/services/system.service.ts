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
export class SystemService implements OnInit {

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


  GetSystemHost() {
    console.log(this.apiUrl + 'system/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) );
    return this.http.get(this.apiUrl + 'system/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }

  GetSystemHostTable(Id) {
    console.log(this.apiUrl + 'system/table/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+ '/' + Id );
    return this.http.get(this.apiUrl + 'system/table/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+ '/' + Id);
  }


  GetDevices(Id) {
    console.log(this.apiUrl + 'system/device/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.get(this.apiUrl + 'system/device/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+ '/' + Id);
  }

  DeleteDevice(Id,SystemDbID) {
    console.log(this.apiUrl + 'system/device/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id+ '/' + SystemDbID);
    return this.http.delete(this.apiUrl + 'system/device/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id+ '/' + SystemDbID);
  }


  GetSourceData(obj) {
    
    console.log(obj)
    obj[0].Username=JSON.parse(sessionStorage.getItem('Username'));
    obj[0].CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'system/table/data' ,obj );
    return this.http.post(this.apiUrl + 'system/table/data',obj);
  }

  ControlSourceData(obj) {
    
    console.log(obj)
    obj[0].Username=JSON.parse(sessionStorage.getItem('Username'));
    obj[0].CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'system/table/controldata' ,obj );
    return this.http.post(this.apiUrl + 'system/table/controldata',obj);
  }

  PostSourceData(obj) {
    
    obj[0].Username=JSON.parse(sessionStorage.getItem('Username'));
    obj[0].CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'system/table/postdata' ,obj );
    return this.http.post(this.apiUrl + 'system/table/postdata',obj);
  }

  GetTransferColumnName(Id,Schema,Table) {
    console.log(this.apiUrl + 'system/table/columns/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) 
    + '/' + Id+ '/' + Schema+ '/' + Table );
    return this.http.get(this.apiUrl + 'system/table/columns/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) 
    + '/' +Id+ '/'+ Schema+ '/' + Table);
  }

  PostSystemHostTable(obj) {
    
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'system/table' ,obj );
    return this.http.post(this.apiUrl + 'system/table',obj);
  }


  PostDevice(obj) {
    
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'system/device' ,obj );
    return this.http.post(this.apiUrl + 'system/device',obj);
  }


  DeleteSystemTable(Id) {
    console.log(this.apiUrl + 'system/table/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'system/table/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }


  
  DeleteSystemDb(Id) {
    console.log(this.apiUrl + 'system/db/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'system/db/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }


  GetSystemDatabase() {
    console.log(this.apiUrl + 'system/database/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) );
    return this.http.get(this.apiUrl + 'system/database/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }


  GetSystemDatabaseTest(Id) {
    console.log(this.apiUrl + 'system/database/test/'+ JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+ Id );
    return this.http.get(this.apiUrl + 'system/database/test/'+ JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+'/'+ Id);
  }



  GetSystemFile() {
    console.log(this.apiUrl + 'system/file/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) );
    return this.http.get(this.apiUrl + 'system/file/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }


  PostSystemHost(obj) {
    console.log(this.apiUrl + 'system');
    return this.http.post(this.apiUrl + 'system', obj);
  }

  PostSystemDatabase(obj) {
    console.log(this.apiUrl + 'system/database');
    return this.http.post(this.apiUrl + 'system/database', obj);
  }

  PostSystemFile(obj) {
    console.log(this.apiUrl + 'system/file');
    return this.http.post(this.apiUrl + 'system/file', obj);
  }

  DeleteLeaves(Id) {
    console.log(this.apiUrl + 'leaves/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'leaves/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

 



}