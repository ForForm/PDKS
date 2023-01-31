// import { Component, Inject, OnInit } from '@angular/core';
import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional, Output, SimpleChanges } from '@angular/core';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { filter } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
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
import { untilDestroyed } from 'ngx-take-until-destroy';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ShiftService } from '../services/shift.service';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import * as _moment from "moment";
const moment = _moment;
 
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
  selector: 'vex-subshift-definitions',
  templateUrl: './subshift-definitions.component.html',
  styleUrls: ['./shift.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],

  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'L',
          monthYearLabel: 'M YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})



export class SubShiftDefinitionsComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  public maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/];
  static id = 100;
  form: FormGroup;
  formFreeDist: FormGroup;
  formFreeMeal: FormGroup;
  formFreeNight: FormGroup;
  formTolerance:FormGroup;
  formHoliday:FormGroup;
  mode: 'create' | 'update' = 'create';
  icAdd = icAdd;
  icCancel = icCancel;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icClose1 = icClose1;
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
  // workingTypesCode: any = [];
  freeShiftDistStatus: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<SubShiftDefinitionsComponent>,
    private fb: FormBuilder,
    private adapter: DateAdapter<any>,
    public shiftService: ShiftService,
    public definitionsService: DefinitionsService,
    private snackbar: MatSnackBar) {
  }




  closeDialog() {
    this.dialogRef.close();
  }


  turkishCulture() {
    this.adapter.setLocale("tr");
  }


  ngOnInit() {

    const locale = 'en-US';

    this.turkishCulture();
    this.languageMap = AppUtil.getLabels();
    this.defaults.update ? this.mode = 'update' : this.mode = 'create';

    if (this.defaults.sub == 'shiftDist') {
      let firstHour: any;
      if (this.defaults.vreadonly)
        firstHour = this.defaults.def.FirstHour !== null ? formatDate(this.defaults.def.FirstHour, 'HH:mm', locale) : '00:00';
      else
        firstHour = this.defaults.def.DayTurningTime;


      const lastHour = this.defaults.def.LastHour !== undefined ? formatDate(this.defaults.def.LastHour, 'HH:mm', locale) : '00:00';
      const time = this.defaults.def.Time !== undefined ? formatDate(this.defaults.def.Time, 'HH:mm', locale) : '00:00';


      this.form = this.fb.group({
        ID: [this.defaults.def.ID || 0],
        ShiftID: [this.defaults.def.ShiftID],
        WorkingTypeID: [this.defaults.def.WorkingTypeID || '', Validators.required],
        FirstHour: [firstHour],
        LastHour: [lastHour],
        Time: [time]
      });
    }

    else if (this.defaults.sub == 'freeShiftDist')
      this.formFreeDist = this.fb.group({
        ID: [this.defaults.def.ID || 0],
        ShiftID: [this.defaults.def.ShiftID],
        WorkingTypeID: [this.defaults.def.WorkingTypeID || '', Validators.required],
        State: [this.defaults.def.State.toString() || '', Validators.required]
      });
    else if (this.defaults.sub == 'freeShiftMeal') {

      const totalTime = this.defaults.def.TotalTime !== undefined ? formatDate(this.defaults.def.TotalTime, 'HH:mm', locale) : '00:00';
      const transferTime = this.defaults.def.TransferTime !== undefined ? formatDate(this.defaults.def.TransferTime, 'HH:mm', locale) : '00:00';

      this.formFreeMeal = this.fb.group({
        ID: [this.defaults.def.ID || 0],
        ShiftID: [this.defaults.def.ShiftID],
        WorkingTypeSrcID: [this.defaults.def.WorkingTypeSrcID || '', Validators.required],
        TotalTime: [totalTime || '00:00'],
        WorkingTypeDestID: [this.defaults.def.WorkingTypeDestID || '', Validators.required],
        TransferTime: [transferTime || '00:00']

      });
    }
    else if (this.defaults.sub == 'freeShiftNight') {

      const firstHour = this.defaults.def.FirstHour !== undefined ? formatDate(this.defaults.def.FirstHour, 'HH:mm', locale) : '00:00';
      const lastHour = this.defaults.def.LastHour !== undefined ? formatDate(this.defaults.def.LastHour, 'HH:mm', locale) : '00:00';

      this.formFreeNight = this.fb.group({
        ID: [this.defaults.def.ID || 0],
        ShiftID: [this.defaults.def.ShiftID],
        WorkingTypeID: [this.defaults.def.WorkingTypeID || '', Validators.required],
        FirstHour: [firstHour || '00:00'],
        LastHour: [lastHour || '00:00']
      });
    }
    else if (this.defaults.sub == 'shiftTolerance')
    {

      const earlyStartTime = this.defaults.def.EarlyStartTime !== undefined ? formatDate(this.defaults.def.EarlyStartTime, 'HH:mm', locale) : '00:00';
      const startTime = this.defaults.def.StartTime !== undefined ? formatDate(this.defaults.def.StartTime, 'HH:mm', locale) : '00:00';
      const lateStartTime = this.defaults.def.LateStartTime !== undefined ? formatDate(this.defaults.def.LateStartTime, 'HH:mm', locale) : '00:00';
      const earlyFinishTime = this.defaults.def.EarlyFinishTime !== undefined ? formatDate(this.defaults.def.EarlyFinishTime, 'HH:mm', locale) : '00:00';
      const finishTime = this.defaults.def.FinishTime !== undefined ? formatDate(this.defaults.def.FinishTime, 'HH:mm', locale) : '00:00';
      const lateFinishTime = this.defaults.def.LateFinishTime !== undefined ? formatDate(this.defaults.def.LateFinishTime, 'HH:mm', locale) : '00:00';
    

      this.formTolerance = this.fb.group({
        ID: [this.defaults.def.ID || 0],
        ShiftID: [this.defaults.def.ShiftID || 0],
        EarlyStartTime: earlyStartTime,
        StartTime: startTime,
        LateStartTime: lateStartTime,
        EarlyFinishTime: earlyFinishTime,
        FinishTime: finishTime,
        LateFinishTime: lateFinishTime

      });
    }
    else if (this.defaults.sub == 'shiftHoliday')
    {
       
      this.formHoliday = this.fb.group({
        ID: [this.defaults.def.ID || 0],
        ShiftID: [this.defaults.def.ShiftID || 0],
        StartDate: [this.defaults.def.StartDate, Validators.required],
        HolidayType: [this.defaults.def.HolidayType, Validators.required],
        HolidayShiftID: [this.defaults.def.HolidayShiftID!==undefined?this.defaults.def.HolidayShiftID.toString():null, Validators.required]

      });
    }

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

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }


  save() {
    if (this.mode === 'create') {
      this.createShift();
    } else if (this.mode === 'update') {
      this.updateShift();
    }
  }

  createShift() {

    if (this.form.invalid) {
      return;
    }

    const definition = this.form.value;
    this.dialogRef.close(definition);
  }

  updateShift() {
    const definition = this.form.value;
    this.dialogRef.close(definition);

  }



  saveFreeDist() {

    if (this.formFreeDist.invalid) {
      return;
    }
    const locale = 'en-US';
    const definition = this.formFreeDist.value;
    definition.ID = (this.mode === 'create') ? 0 : definition.ID;
    this.shiftService.PostFreeShiftDist(definition)
      .subscribe((res) => {
        this.dialogRef.close(definition);

      }, err => {
        console.log(err);

      });
  }




  saveFreeMeal() {

    if (this.formFreeMeal.invalid) {
      return;
    }
    const locale = 'en-US';
    const definition = this.formFreeMeal.value;
    definition.ID = (this.mode === 'create') ? 0 : definition.ID;
    this.shiftService.PostFreeShiftMeal(definition)
      .subscribe((res) => {
        this.dialogRef.close(definition);

      }, err => {
        console.log(err);

      });
  }


  
  saveShiftTolerance() {

    if (this.formTolerance.invalid) {
      return;
    }
    const locale = 'en-US';
    const definition = this.formTolerance.value;
    definition.ID = (this.mode === 'create') ? 0 : definition.ID;
    this.shiftService.PostShiftTolerance(definition)
      .subscribe((res) => {
        this.dialogRef.close(definition);

      }, err => {
        console.log(err);

      });
  }

  
  saveShiftHoliday() {

    if (this.formHoliday.invalid) {
      return;
    }
    const locale = 'en-US';
    const definition = this.formHoliday.value;
    definition.ID = (this.mode === 'create') ? 0 : definition.ID;
    this.shiftService.PostShiftHoliday(definition)
      .subscribe((res) => {
        this.dialogRef.close(definition);

      }, err => {
        console.log(err);

      });
  }

  saveFreeNight() {

    if (this.formFreeNight.invalid) {
      return;
    }

    const locale = 'en-US';
    const definition = this.formFreeNight.value;
    definition.ID = (this.mode === 'create') ? 0 : definition.ID;
    this.shiftService.PostFreeShiftNight(definition)
      .subscribe((res) => {
        this.dialogRef.close(definition);

      }, err => {
        console.log(err);

      });
  }


}


