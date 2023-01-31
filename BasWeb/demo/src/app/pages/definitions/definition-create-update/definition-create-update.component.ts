import { LanguageMap } from '../../interfaces/language.interface';
import AppUtil from '../../interfaces/util';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Definition,DefinitionHourDetail } from '../interfaces/definition.model'
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCancel from '@iconify/icons-ic/cancel';
import icUpdate from '@iconify/icons-ic/update';
import icSave from '@iconify/icons-ic/save';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import icClose1 from '@iconify/icons-ic/close';

@Component({
  selector: 'vex-definition-create-update',
  templateUrl: './definition-create-update.component.html',
  styleUrls: ['./definition-create-update.component.scss']
})
export class DefinitionCreateUpdateComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icCancel=icCancel;
  icUpdate=icUpdate;
  icSave=icSave;
  icClose1 = icClose1;

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
               private dialogRef: MatDialogRef<DefinitionCreateUpdateComponent>,
              private fb: FormBuilder,
              private snackbar: MatSnackBar) {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  
  ngOnInit() {
    
    console.log(this.defaults);
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
    
    if (this.defaults.modul==='code' && this.defaults.def===null) 
    this.defaults.def = {} as Definition;

    if (this.defaults.modul==='param' && this.defaults.def===null) 
    this.defaults.def = {} as DefinitionHourDetail;


    if ((this.defaults.modul==='code') && this.defaults.sub===false)
    this.form = this.fb.group({
      id: 0,
      code: [(this.defaults.def.code || this.defaults.def.code2 || this.defaults.def.code3 || this.defaults.def.code4 || this.defaults.def.code5 || ''), Validators.required],
      name: [(this.defaults.def.name || this.defaults.def.name2 || this.defaults.def.name3 || this.defaults.def.name4 || this.defaults.def.name5 ||''), Validators.required],
      subcode: [this.defaults.def.subcode || ''],
      subname: [this.defaults.def.subname || ''],
      firstHourValue:[this.defaults.def.firstValue || 0],
      finalHourValue:[this.defaults.def.finalValue || 0],
      plainHourValue:[this.defaults.def.plainValue || 0],
      firstDayValue:[this.defaults.def.firstValue || 0],
      finalDayValue:[this.defaults.def.finalValue || 0],
      plainDayValue:[this.defaults.def.plainValue || 0]
    });
    else  if ((this.defaults.modul==='code') && this.defaults.sub===true)
    this.form = this.fb.group({
      id: 0,
      code: [(this.defaults.def.code || this.defaults.def.code2 || this.defaults.def.code3 || this.defaults.def.code4 || this.defaults.def.code5 || ''), Validators.required],
      name: [(this.defaults.def.name || this.defaults.def.name2 || this.defaults.def.name3 || this.defaults.def.name4 || this.defaults.def.name5 ||''), Validators.required],
      subcode: [(this.defaults.def.subcode || ''),Validators.required],
      subname: [(this.defaults.def.subname || ''),Validators.required],
      firstHourValue:[this.defaults.def.firstValue || 0],
      finalHourValue:[this.defaults.def.finalValue || 0],
      plainHourValue:[this.defaults.def.plainValue || 0],
      firstDayValue:[this.defaults.def.firstValue || 0],
      finalDayValue:[this.defaults.def.finalValue || 0],
      plainDayValue:[this.defaults.def.plainValue || 0]
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
    definition.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username=JSON.parse(sessionStorage.getItem('Username'));
  

    if (!definition.imageSrc) {
      definition.imageSrc = 'assets/img/avatars/1.jpg';
    }

    this.dialogRef.close(definition);
  }

  updateDefinition() {
    const definition = this.form.value;
    definition.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username=JSON.parse(sessionStorage.getItem('Username'));
  
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
