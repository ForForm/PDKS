import { Language, LanguageMap } from '../interfaces/language.interface';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';

export default class AppUtil {

  constructor(private dialog1: MatDialog) {
  }


  static getLabels() {

    let language: any = [];
    let languageMap: LanguageMap = {};

    // debugger;
    if (JSON.parse(sessionStorage.getItem('Labels')) == null) return;
    const res = JSON.parse(sessionStorage.getItem('Labels'));
    Object.keys(res).forEach((key) => {
      let data = { label: res[key].Label, labelName: res[key].LabelLng }
      language.push(data);
    });
    language.forEach((s: Language) => {
      languageMap[s.label] = s;
    });



    return languageMap;
  }




  static getlocalStorageLabels() {

    let language: any = [];
    let languageMap: LanguageMap = {};

    const res = JSON.parse(localStorage.getItem('Labels'));
    Object.keys(res).forEach((key) => {
      let data = { label: res[key].Label, labelName: res[key].LabelLng }
      language.push(data);
    });
    language.forEach((s: Language) => {
      languageMap[s.label] = s;
    });

    return languageMap;
  }

   

}

// <mat-progress-spinner diameter="60" strokeWidth="10" style="margin-top:10px"   mode="indeterminate"></mat-progress-spinner>



@Component({
  selector: 'matspinner',
  template: `<div> 
   </div>
  `
})

// @NgModule({
//   imports: [MatProgressSpinnerModule] 
// })

export class DemoDialogComponent2 {


  constructor(private dialogRef: MatDialogRef<DemoDialogComponent2>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}