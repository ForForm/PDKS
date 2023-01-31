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
export class PersonnelService implements OnInit {

  public userData: any;
  private _sessionId: string;
  public showLoader: boolean = false;

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void { }

  GetAmirPersonnels(Id) {
    console.log(this.apiUrl + 'personnel/chiefpersonnels/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.get(this.apiUrl + 'personnel/chiefpersonnels/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

  GetArchieve(Id) {
    console.log(this.apiUrl + 'personnel/archieve/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.get(this.apiUrl + 'personnel/archieve/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }


  GetPersonnelAmir(Id) {
    console.log(this.apiUrl + 'personnel/chief/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.get(this.apiUrl + 'personnel/chief/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }


  GetPersonnel(obj) {
    if (obj == null) {
      let Obj={Username : JSON.parse(sessionStorage.getItem('Username')), CompanyId : JSON.parse(sessionStorage.getItem('CompanyId'))};
      return this.http.post(this.apiUrl + 'personnel/query', Obj);
    } else {
      obj.Username = JSON.parse(sessionStorage.getItem('Username'));
      obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
      return this.http.post(this.apiUrl + 'personnel/query', obj);
    }

  }
  GetPersonnelStatus() {
    console.log(this.apiUrl + 'personnel/status/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))) ;
    return this.http.get(this.apiUrl + 'personnel/status/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }


  GetPersonnelTransfer() {
    console.log(this.apiUrl + 'personnel/transfer/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    return this.http.get(this.apiUrl + 'personnel/transfer/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }

  SetPersonnelTransferTemplate(obj) {

    return this.http.post(this.apiUrl + 'personnel/transfer/template', obj);
  }

  GetPersonnelTransferTemplate(templateName) {
    console.log(this.apiUrl + 'personnel/transfer/template/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+ '/' + templateName);
    return this.http.get(this.apiUrl + 'personnel/transfer/template/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username'))+ '/' + templateName);
  }

  SetPersonnelTransfer(obj) {
    obj[0].Username = JSON.parse(sessionStorage.getItem('Username'));
    obj[0].CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'personnel/transfer/', obj);
  }

  SetChiefTransfer(obj) {
     obj.Username = JSON.parse(sessionStorage.getItem('Username'));
     obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'personnel/transfer/chief/', obj);
  }

  
  DeletePersonnelTransferControl() {
    console.log(this.apiUrl + 'personnel/transfer/control/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    return this.http.delete(this.apiUrl + 'personnel/transfer/control/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }


  SetPersonnelTransferControl(obj) {
    obj.Username = JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'personnel/transfer/control/', obj);
  }

  GetContact(id) {
    console.log(this.apiUrl + 'personnel/contact/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
    return this.http.get(this.apiUrl + 'personnel/contact/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
  }

  GetID(id) {
    console.log(this.apiUrl + 'personnel/id/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
    return this.http.get(this.apiUrl + 'personnel/id/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + id);
  }


  PostContact(obj) {
    obj.Username = JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));

    console.log(this.apiUrl + 'personnel/contact', obj);
    return this.http.post(this.apiUrl + 'personnel/contact', obj);
  }


  PostChief(obj) {
    obj.Username = JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));

    console.log(this.apiUrl + 'personnel/chief', obj);
    return this.http.post(this.apiUrl + 'personnel/chief', obj);
  }

  DeleteChief(Id) {
    console.log(this.apiUrl + 'personnel/chief/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'personnel/chief/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

  PostID(obj) {
    obj.Username = JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));

    console.log(this.apiUrl + 'personnel/id', obj);
    return this.http.post(this.apiUrl + 'personnel/id', obj);
  }


  GetPersonnelFilter() {
    console.log(this.apiUrl + 'personnel/filter/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
    return this.http.get(this.apiUrl + 'personnel/filter/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')));
  }


  DeletePersonnel(Id) {
    console.log(this.apiUrl + 'personnel/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
    return this.http.delete(this.apiUrl + 'personnel/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + Id);
  }

  UploadImage(image: File) {
    const formData = new FormData();
    formData.append('Image', image);
    return this.http.post(this.apiUrl + 'personnel/image', formData);
  }


  PostPersonnel(obj) {
    obj.Username = JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    console.log(this.apiUrl + 'personnel');
    return this.http.post(this.apiUrl + 'personnel', obj);
  }


  PersonnelGetQuery(type, code) {
    console.log(this.apiUrl + 'personnel/filter/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type + '/' + code);
    return this.http.get(this.apiUrl + 'personnel/filter/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + type + '/' + code);
  }

  PersonnelGetFilterColumns(table) {
    console.log(this.apiUrl + 'personnel/filter/columns/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + table);
    return this.http.get(this.apiUrl + 'personnel/filter/columns/' + JSON.parse(sessionStorage.getItem('CompanyId')) + '/' + JSON.parse(sessionStorage.getItem('Username')) + '/' + table);
  }

  PersonnelPostFilterColumns(obj) {
    obj[0].Username = JSON.parse(sessionStorage.getItem('Username'));
    obj[0].CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    return this.http.post(this.apiUrl + 'personnel/filter/columns', obj);
  }


  // ------------------------------------------------------------


}