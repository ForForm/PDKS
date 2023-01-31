import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSave from '@iconify/icons-ic/save';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
// import { Definition,DefinitionHourDetail } from '../definitions/interfaces/definition.model'
import { formatDate, Time } from "@angular/common";

 

@Component({
  selector: 'vex-shiftcalendar-definitions',
  templateUrl: './shiftcalendar-definitions.component.html',
  styleUrls: ['./shiftcalendar.component.scss']
})


export class ShiftCalendarDefinitionsComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icSave=icSave;
  
  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  visible=false;
  label='';
  codeV=false;nameV=false;
  firstDayValueV=false;finalDayValueV=false;plainDayValueV=false;
  firstHourValueV=false;finalHourValueV=false;plainHourValueV=false;

  subcodeV=false;subnameV=false;
  // sub=false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
               private dialogRef: MatDialogRef<ShiftCalendarDefinitionsComponent>,
              private fb: FormBuilder,
              private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    
    const locale = 'en-US';
    this.languageMap=AppUtil.getLabels();  

    if ((this.defaults.screen==='RoundingHour' || this.defaults.screen==='RoundingDay' ) && this.defaults.sub===false)
    {this.codeV=true;this.nameV=true;}

    if ((this.defaults.screen==='RoundingHour'  ) && this.defaults.sub===true)
    {this.firstHourValueV=true;this.finalHourValueV=true; this.plainHourValueV=true;}


    if ((this.defaults.screen==='RoundingDay' ) && this.defaults.sub===true)
    {this.firstDayValueV=true;this.finalDayValueV=true; this.plainDayValueV=true;}


    if ((this.defaults.modul==='code') && this.defaults.sub===false)
    {this.codeV=true;this.nameV=true;}

    if ((this.defaults.modul==='code') && this.defaults.sub===true)
    {this.codeV=true;this.nameV=true;this.subcodeV=true;this.subnameV=true;}

    this.label='Yeni '+ (this.defaults.screen==='RoundingHour'?'Puantaj Saatleri Yuvarlama':(this.defaults.screen==='RoundingDay'?'Puantaj Gün Yuvarlama':this.defaults.screen))+
    (this.defaults.sub?' Detay':' Tanım');
    this.defaults.update?this.mode = 'update':this.mode = 'create';
    
   

    const plainDayValues= this.defaults.def.plainValue!==undefined?formatDate(this.defaults.def.plainValue, 'HH:mm',locale):'00:00' ;
    const firstDayValues= this.defaults.def.firstValue!==undefined?formatDate(this.defaults.def.firstValue, 'HH:mm',locale):'00:00' ;
    const finalDayValues= this.defaults.def.finalValue!==undefined?formatDate(this.defaults.def.finalValue, 'HH:mm',locale):'00:00' ;

    // [DefinitionCreateUpdateComponent.id++],
    this.form = this.fb.group({
      id: 0,
      code: [this.defaults.def.code || this.defaults.def.code2 || this.defaults.def.code3 || this.defaults.def.code4 || this.defaults.def.code5 || ''],
      name: [this.defaults.def.name || this.defaults.def.name2 || this.defaults.def.name3 || this.defaults.def.name4 || this.defaults.def.name5 ||''],
      subcode: [this.defaults.def.subcode || ''],
      subname: [this.defaults.def.subname || ''],
      firstHourValue:[this.defaults.def.firstValue || 0],
      finalHourValue:[this.defaults.def.finalValue || 0],
      plainHourValue:[this.defaults.def.plainValue || 0],
      firstDayValue:[firstDayValues],
      finalDayValue:[finalDayValues],
      plainDayValue:[plainDayValues]


      
    });
  }

  waitProgress(message,timer) {
    this.snackbar.dismiss();
    let config = new MatSnackBarConfig();
    if (timer!==undefined)
    {
      config.duration = timer;
    }
    config.panelClass = ['message-position'];
    this.snackbar.open(message,"", config);

  }

  save() {
    if (this.mode === 'create') {
      this.createDefinition();
    } else if (this.mode === 'update') {
      this.updateDefinition();
    }
  }

  createDefinition() {
    const definition = this.form.value;
    
     if (this.defaults.modul==='code' && (definition.code==='' || definition.name===''))
      {
        this.waitProgress("Kod ve açıklama alanı zorunludur...",1000);
        return;
      }


    if (!definition.imageSrc) {
      definition.imageSrc = 'assets/img/avatars/1.jpg';
    }

    this.dialogRef.close(definition);
  }

  updateDefinition() {
    const definition = this.form.value;
    if (this.defaults.sub && this.defaults.modul==='code' && (definition.subcode==='' || definition.subname===''))
    {
      this.waitProgress("Alt Kod ve açıklama alanı zorunludur...",1000);
      return;
    } 
    definition.id = this.defaults.def.id;   
    console.log(definition);
    this.dialogRef.close(definition);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
