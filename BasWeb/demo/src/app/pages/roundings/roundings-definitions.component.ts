import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
import icClose1 from '@iconify/icons-ic/close';
import { DefinitionsService } from '../services/definitions.service';

export class Definition {
  type: string;
  id: number;
  sub: boolean;
  code: string;
  name: string;
  subcode: string;
  subname: string;


  constructor(definition) {
    this.type = definition.type;
    this.id = definition.id;
    this.sub = definition.sub;
    this.code = definition.code;
    this.name = definition.name;
    this.subcode = definition.subcode;
    this.subname = definition.subname;
  }
}

export class DefinitionHourDetail {
  type: string;
  id: number;
  firstValue: number;
  finalValue: number;
  plainValue: number;
  sub: boolean;

  constructor(definitionDetail) {
    this.type = definitionDetail.type;
    this.id = definitionDetail.id;
    this.sub = definitionDetail.sub;
    this.firstValue = definitionDetail.firstValue;
    this.finalValue = definitionDetail.finalValue;
    this.plainValue = definitionDetail.plainValue;
  }
}

@Component({
  selector: 'vex-roundings-definitions',
  templateUrl: './roundings-definitions.component.html',
  styleUrls: ['./roundings.component.scss']
})


export class RoundingsDefinitionsComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  icMoreVert = icMoreVert;
  icClose = icClose;
  icClose1 = icClose1;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icSave = icSave;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  visible = false;
  label = '';
  codeV = false; nameV = false;
  firstDayValueV = false; finalDayValueV = false; plainDayValueV = false;
  firstHourValueV = false; finalHourValueV = false; plainHourValueV = false;
  subcodeV = false; subnameV = false;
  saveEnabled = false;
  // sub=false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<RoundingsDefinitionsComponent>,
    public definitionsService: DefinitionsService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar) {
  }
  closeDialog() {

    this.dialogRef.close(null);
  }


  controlInputValue1(type,event)
  {
    
    if (event.target.value>=(type=='Hour'?this.form.value.finalHourValue:this.form.value.finalDayValue))
    this.saveEnabled=false;
    else
    this.saveEnabled=true; 
  }


  controlInputValue2(type,event)
  {
    
    if (event.target.value<=(type=='Hour'?this.form.value.firstHourValue:this.form.value.firstDayValue))
    this.saveEnabled=false;
    else
    this.saveEnabled=true; 
  }

  onFocusOutCode(event: any) {
    if (event.target.value.length > 0)
      this.definitionGetTypes(this.defaults.screen, null, event.target.value);
  }


  definitionGetTypes(type, id, code) {


    this.definitionsService.DefinitionGetTypeByCode(type, id, code)
      .subscribe((res: any[]) => {
        if (res.length > 0)
          this.form.patchValue({ name: res[0].name });
        else this.form.patchValue({ name: null });

      }, err => {
        console.log(err);

      });

  }

  ngOnInit() {

    //  debugger;
    const locale = 'en-US';
    this.languageMap = AppUtil.getLabels();

    if ((this.defaults.screen === 'RoundingHour' || this.defaults.screen === 'RoundingDay') && this.defaults.sub === false) { this.codeV = true; this.nameV = true; }

    if ((this.defaults.screen === 'RoundingHour') && this.defaults.sub === true) { this.firstHourValueV = true; this.finalHourValueV = true; this.plainHourValueV = true; }


    if ((this.defaults.screen === 'RoundingDay') && this.defaults.sub === true) { this.firstDayValueV = true; this.finalDayValueV = true; this.plainDayValueV = true; }


    if ((this.defaults.modul === 'code') && this.defaults.sub === false) { this.codeV = true; this.nameV = true; }

    if ((this.defaults.modul === 'code') && this.defaults.sub === true) { this.codeV = true; this.nameV = true; this.subcodeV = true; this.subnameV = true; }

    this.label = 'Yeni ' + (this.defaults.screen === 'RoundingHour' ? 'Puantaj Saatleri Yuvarlama' : (this.defaults.screen === 'RoundingDay' ? 'Puantaj Gün Yuvarlama' : this.defaults.screen)) +
      (this.defaults.sub ? ' Detay' : ' Tanım');
    this.defaults.update ? this.mode = 'update' : this.mode = 'create';

    if (this.defaults.modul === 'code' && this.defaults.def === null)
      this.defaults.def = {} as Definition;

    if (this.defaults.modul === 'param' && this.defaults.def === null)
      this.defaults.def = {} as DefinitionHourDetail;


    //  console.log(this.defaults.def);
    console.log(this.defaults.def.plainValue);
    console.log(this.defaults.def.firstValue);
    console.log(this.defaults.def.finalValue);
    const plainDayValues:any = this.defaults.def.plainValue !== undefined ? formatDate(this.defaults.def.plainValue, 'HH:mm', locale) : '00:00';
    const firstDayValues:any = this.defaults.def.firstValue !== undefined ? formatDate(this.defaults.def.firstValue, 'HH:mm', locale) : '00:00';
    const finalDayValues:any = this.defaults.def.finalValue !== undefined ? formatDate(this.defaults.def.finalValue, 'HH:mm', locale) :'00:00';

    // const plainDayValues = this.defaults.def.plainValue !== undefined ? this.defaults.def.plainValue: '00:00';
    // const firstDayValues = this.defaults.def.firstValue !== undefined ? this.defaults.def.firstValue : '00:00';
    // const finalDayValues = this.defaults.def.finalValue !== undefined ? this.defaults.def.finalValue : '00:00';


    // [DefinitionCreateUpdateComponent.id++],
    if ((this.defaults.modul === 'param') && this.defaults.sub === false)
      this.form = this.fb.group({
        id: 0,
        code: [(this.defaults.def.code || this.defaults.def.code2 || this.defaults.def.code3 || this.defaults.def.code4 || this.defaults.def.code5 || ''), Validators.required],
        name: [(this.defaults.def.name || this.defaults.def.name2 || this.defaults.def.name3 || this.defaults.def.name4 || this.defaults.def.name5 || ''), Validators.required],
        subcode: [this.defaults.def.subcode || ''],
        subname: [this.defaults.def.subname || ''],
        firstHourValue: [(this.defaults.def.firstValue || 0), Validators.min(0), Validators.max(60)],
        finalHourValue: [(this.defaults.def.firstValue || 0), Validators.min(0), Validators.max(60)],
        plainHourValue: [this.defaults.def.plainValue || 0],
        firstDayValue: [firstDayValues],
        finalDayValue: [finalDayValues],
        plainDayValue: [plainDayValues]
      });
    else if ((this.defaults.modul === 'param') && this.defaults.sub === true && this.defaults.screen === "RoundingDay")
      this.form = this.fb.group({
        id: 0,
        code: [this.defaults.def.code || this.defaults.def.code2 || this.defaults.def.code3 || this.defaults.def.code4 || this.defaults.def.code5 || ''],
        name: [this.defaults.def.name || this.defaults.def.name2 || this.defaults.def.name3 || this.defaults.def.name4 || this.defaults.def.name5 || ''],
        subcode: [this.defaults.def.subcode || ''],
        subname: [this.defaults.def.subname || ''],
        firstHourValue: [this.defaults.def.firstValue || 0],
        finalHourValue: [this.defaults.def.finalValue || 0],
        plainHourValue: [this.defaults.def.plainValue || 0],
        firstDayValue: [firstDayValues],
        finalDayValue: [(finalDayValues), [Validators.required, Validators.min(1)]],
        plainDayValue: [plainDayValues]
      });
    else if ((this.defaults.modul === 'param') && this.defaults.sub === true && this.defaults.screen === "RoundingHour")
      this.form = this.fb.group({
        id: 0,
        code: [this.defaults.def.code || this.defaults.def.code2 || this.defaults.def.code3 || this.defaults.def.code4 || this.defaults.def.code5 || ''],
        name: [this.defaults.def.name || this.defaults.def.name2 || this.defaults.def.name3 || this.defaults.def.name4 || this.defaults.def.name5 || ''],
        subcode: [this.defaults.def.subcode || ''],
        subname: [this.defaults.def.subname || ''],
        firstHourValue: [(this.defaults.def.firstValue || 0)],
        finalHourValue: [(this.defaults.def.finalValue || 0), [Validators.required, Validators.min(1)]],
        plainHourValue: [(this.defaults.def.plainValue || 0)],
        firstDayValue: [firstDayValues],
        finalDayValue: [finalDayValues],
        plainDayValue: [plainDayValues]
      });


    this.form.valueChanges.subscribe(
      result => {
        // console.log(this.form.status);
        // this.saveEnabled = true;
      });
  }

  waitProgress(message, timer) {
    this.snackbar.dismiss();
    let config = new MatSnackBarConfig();
    if (timer !== undefined) {
      config.duration = timer;
    }
    config.panelClass = ['message-position'];
    this.snackbar.open(message, "", config);

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

    if (this.defaults.modul === 'code' && (definition.code === '' || definition.name === '')) {
      this.waitProgress("Kod ve açıklama alanı zorunludur...", 1000);
      return;
    }


    if (!definition.imageSrc) {
      definition.imageSrc = 'assets/img/avatars/1.jpg';
    }

    this.dialogRef.close(definition);
  }

  updateDefinition() {
    const definition = this.form.value;
    if (this.defaults.sub && this.defaults.modul === 'code' && (definition.subcode === '' || definition.subname === '')) {
      this.waitProgress("Alt Kod ve açıklama alanı zorunludur...", 1000);
      return;
    }
    definition.id = this.defaults.def.id;
    this.dialogRef.close(definition);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
