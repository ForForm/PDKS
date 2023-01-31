// import { Component, Inject, OnInit } from '@angular/core';
import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional, Output, SimpleChanges } from '@angular/core';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { filter } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icSave from '@iconify/icons-ic/save';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
//  import { Definition,DefinitionHourDetail } from './../definitions/interfaces/definition.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icCancel from '@iconify/icons-ic/cancel';
import { DefinitionsService } from '../services/definitions.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
// import { untilDestroyed } from 'ngx-take-until-destroy';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as _moment from "moment";
const moment = _moment;
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { formatDate, Time } from "@angular/common";
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import icClose1 from '@iconify/icons-ic/close';



export const MY_FORMATS = {
  parse: {
    dateInput: "LL"
  },
  display: {
    dateInput: "LL",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: 'vex-subshiftgroup-definitions',
  templateUrl: './subshiftgroup-definitions.component.html',
  styleUrls: ['./shiftgroup.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],

  providers: [
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})



export class SubShiftGroupDefinitionsComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};    
  public maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/];
  static id = 100;
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  icAdd = icAdd;
  icCancel = icCancel;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icSave = icSave;
  subFooter: boolean = false;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  visible = false;
  label = '';
  workingTypesStatus: any = [];
  searchCtrl = new FormControl();
  workingTypesCode: any = [];
  icClose1 = icClose1;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<SubShiftGroupDefinitionsComponent>,
    private fb: FormBuilder,
    public definitionsService: DefinitionsService,
    private snackbar: MatSnackBar) {
  }


  closeDialog() {
    this.dialogRef.close();
  }


  ngOnInit() {


    console.log(this.defaults);
    const locale = 'en-US';
    this.languageMap=AppUtil.getLabels();       
    this.defaults.update ? this.mode = 'update' : this.mode = 'create';
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
  
    if (this.defaults.parent === 'shiftGroup')
      this.form = this.fb.group({
        ID: [this.defaults.def.ID || 0],
        ShiftID: [this.defaults.def.ShiftID || '', Validators.required],
        ShiftGroupID: [this.defaults.def.ShiftGroupID || ''],
        Code: [this.defaults.def.Code || ''],
        Name: [this.defaults.def.Name || ''],
        NumberOfDays: [this.defaults.def.NumberOfDays || '',Validators.required],
      });

      if (this.defaults.parent === 'shiftGroupBackUp')
      this.form = this.fb.group({
        ID: [this.defaults.def.ID || 0],
        ShiftID: [this.defaults.def.ShiftID || 0],
        ShiftGroupID: [this.defaults.def.ShiftGroupID || 0,Validators.required],
        // NumberOfDays: [this.defaults.def.NumberOfDays || 0,Validators.required],
      });
      
    // if (this.defaults.parent === 'shiftGroupTolerance') {

    //   const earlyStartTime = this.defaults.def.EarlyStartTime !== undefined ? formatDate(this.defaults.def.EarlyStartTime, 'HH:mm', locale) : '00:00';
    //   const startTime = this.defaults.def.StartTime !== undefined ? formatDate(this.defaults.def.StartTime, 'HH:mm', locale) : '00:00';
    //   const lateStartTime = this.defaults.def.LateStartTime !== undefined ? formatDate(this.defaults.def.LateStartTime, 'HH:mm', locale) : '00:00';
    //   const earlyFinishTime = this.defaults.def.EarlyFinishTime !== undefined ? formatDate(this.defaults.def.EarlyFinishTime, 'HH:mm', locale) : '00:00';
    //   const finishTime = this.defaults.def.FinishTime !== undefined ? formatDate(this.defaults.def.FinishTime, 'HH:mm', locale) : '00:00';
    //   const lateFinishTime = this.defaults.def.LateFinishTime !== undefined ? formatDate(this.defaults.def.LateFinishTime, 'HH:mm', locale) : '00:00';
    

    //   this.form = this.fb.group({
    //     ID: [this.defaults.def.ID || 0],
    //     ShiftGroupID: [this.defaults.def.ShiftGroupID || 0],
    //     EarlyStartTime: earlyStartTime,
    //     StartTime: startTime,
    //     LateStartTime: lateStartTime,
    //     EarlyFinishTime: earlyFinishTime,
    //     FinishTime: finishTime,
    //     LateFinishTime: lateFinishTime

    //   });


   

    // }
 

  }

  definitionGetWorkingTypeEnums(type, code) {
    let data;
    this.definitionsService.DefinitionGetWorkingTypeEnums(type, code)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { kodu: res[key].Code, adi: res[key].Name };
          // if (type==='Type')
          // this.workingTypesType.push(data);
          if (type === 'Status')
            this.workingTypesStatus.push(data);;
        });

      }, err => {
        console.log(err);

      });

  }

  ngOnDestroy() {
  }


  definitionGetTypes(row) {
    let id = 0;
    this.definitionsService.DefinitionGetWorkingTypesById(id)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { id: res[key].ID.toString(), code: res[key].Code, name: res[key].Name };
          this.workingTypesCode.push(data);
        });

      }, err => {
        console.log(err);

      });

  }

  getTimeInterval(startTime, endTime) {
    var start = moment(startTime, "HH:mm");
    var end = moment(endTime, "HH:mm");
    var minutes = end.diff(start, 'minutes');
    var interval = moment().hour(0).minute(minutes);
    return interval.format("HH:mm");
  }
  calculateTime() {
    this.form.patchValue({ Time: this.getTimeInterval(this.form.value.FirstHour, this.form.value.LastHour) });
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
    definition.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username=JSON.parse(sessionStorage.getItem('Username'));
    // definition.Code === '' || definition.Name === '' ||
    // if (this.defaults.parent==='shiftGroup')    
    // if ( definition.NumberOfDays == 0 || definition.ShiftID == 0) {
    //   this.waitProgress("Kod, ad, gün ve çalışma kodu zorunludur...", 1000);
    //   return;
    // }

    // if (this.defaults.parent==='shiftGroupTolerance')    
    // if (definition.EarlyStartTolerance === '00:00' || 
    //     definition.LateStartTolerance === '00:00' || 
    //     definition.EarlyFinishTolerance == '00:00' || 
    //     definition.LateFinishTolerance == '00:00') {
    //   this.waitProgress("Tolerans alanları zorunludur...", 1000);
    //   return;
    // }
    
    // if (this.defaults.parent==='shiftGroupBackUp')    
    // if (definition.NumberOfDays == 0 || definition.ShiftID == 0) {
    //   this.waitProgress("Gün ve çalışma kodu zorunludur...", 1000);
    //   return;
    // }


    this.dialogRef.close(definition);
  }

  updateDefinition() {
    const definition = this.form.value;
    definition.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username=JSON.parse(sessionStorage.getItem('Username'));
    this.dialogRef.close(definition);

  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
