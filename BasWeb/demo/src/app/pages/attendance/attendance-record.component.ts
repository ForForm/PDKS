import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional, ChangeDetectorRef, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
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
import icClose1 from '@iconify/icons-ic/close';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
// import { Definition,DefinitionHourDetail } from '../definitions/interfaces/definition.model'
import { formatDate, Time } from "@angular/common";
import { MatTableDataSource } from '@angular/material/table';
import { DefinitionsService } from '../services/definitions.service';
import { stagger20ms } from '../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../@vex/animations/scale-fade-in.animation';
import icAdd from '@iconify/icons-ic/twotone-add';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { AttendanceDefinitionsComponent } from '../attendance/attendance-definitions.component';
import { MatDialog } from '@angular/material/dialog';
import { AttendanceService } from '../services/attendance.service';
import { Observable, pipe } from 'rxjs';
import { WaitComponent } from '../wait/wait.component';
import { ActivatedRoute, Router } from '@angular/router';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { Validators, FormControl } from '@angular/forms';


import * as _moment from "moment";
const moment = _moment;



@Component({
  selector: 'vex-attendance-record',
  templateUrl: './attendance-record.component.html',
  styleUrls: ['./attendance.component.scss'],
  animations: [
    stagger20ms,
    fadeInUp400ms,
    scaleFadeIn400ms
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


export class AttendanceRecordComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  static id = 100;

  @Input() columns = ['ID', 'Code', 'Name', 'CardNo'];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  dataSource: MatTableDataSource<any> | null;
  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icSave = icSave;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icClose1 = icClose1;
  icDeleteForever = icDeleteForever;
  saveClicked = false;
  saveEnabled = false;
  icPhone = icPhone;
  visible = false;
  label = '';
  icAdd = icAdd;
  icMoreHoriz = icMoreHoriz;
  InOutType = [{ Code: 1, Name: 'Giriş' }, { Code: 2, Name: 'Çıkış' }];
  InOutReason: any[] = [];
  isEdited = false;
  // sub=false;
  result: string;
  isMobileLayout = false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AttendanceRecordComponent>,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    public definitionsService: DefinitionsService,
    private adapter: DateAdapter<any>,
    private dialog: MatDialog,
    public attendanceService: AttendanceService,
    private snackbar: MatSnackBar) {
  }




  changeDetectEvent(saveEnabled) {

    this.saveEnabled = saveEnabled;
  }


  ngOnInit() {

    console.log(this.defaults);
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;

    const locale = 'en-US';
    this.turkishCulture();
    this.languageMap = AppUtil.getLabels();
    this.getReasons('exit');

    if (this.defaults.Data == undefined)
      this.mode = "create";
    else
      this.mode = "update";

    let startDate = moment(new Date()).utcOffset(0); startDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 }); startDate.toISOString(); startDate.format();
    // let startDate = moment(new Date());

    this.route.paramMap.subscribe(params => {
      if (this.defaults.RecordOrInout == 0)
        this.form = this.fb.group({
          In: true,
          Out: false,
          IID: null,
          OID: null,
          EmployeeID: null,
          Code: [null, [Validators.required]],
          Name: [null, [Validators.required]],
          StartDate: [startDate, [Validators.required]],
          StartTime: ['08:00', [Validators.required]],
          InFlag: [null, [Validators.required]],
          InReason: null,
          // InReason: [null, [Validators.required]],
          EndDate: startDate,
          EndTime: null,
          OutFlag: null,
          OutReason: null,
        });
      else {
        this.form = this.fb.group({
          In: true,
          Out: false,
          IID: null,
          OID: null,
          EmployeeID: null,
          Code: [null],
          Name: [null],
          StartDate: [startDate],
          StartTime: ['08:00'],
          InFlag: [1],
          InReason: [null],
          EndDate: [startDate],
          EndTime: [null],
          OutFlag: [2],
          OutReason: [null]
        });

        this.form.setValidators(this.comparisonValidator());
      }

      if (this.defaults.Data == undefined) {
        var flag = this.defaults.Type == 0 ? null : 1;

        if (this.defaults.EmployeeInfo !== null) {
          this.form.patchValue({
            EmployeeID: this.defaults.EmployeeInfo.EmployeeID, Code: this.defaults.EmployeeInfo.Code, Name: this.defaults.EmployeeInfo.Name + ' ' + this.defaults.EmployeeInfo.Surname,
            Surname: ''
          });
          this.saveEnabled = true;
        }

      }
      else {

        let neden: any;
        if (this.defaults.Data.ReasonID == 0 || this.defaults.Data.ReasonID == null) neden = null; else neden = this.defaults.Data.ReasonID;
        let oneden: any;
        if (this.defaults.Data.OReasonID == 0 || this.defaults.Data.OReasonID == null) oneden = null; else oneden = this.defaults.Data.OReasonID;

        let startDate = this.defaults.Data.NewDateTime === null ? moment(new Date()).utcOffset(0) : moment(this.defaults.Data.NewDateTime).utcOffset(0);
        startDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 }); startDate.toISOString(); startDate.format();

        let endDate = this.defaults.Data.ONewDateTime === null ? moment(new Date()).utcOffset(0) : moment(this.defaults.Data.ONewDateTime).utcOffset(0);
        endDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 }); endDate.toISOString(); endDate.format();

        // let startDate =this.defaults.Data.NewDateTime === null ? moment(new Date()) : moment(this.defaults.Data.NewDateTime);
        // let endDate = this.defaults.Data.ONewDateTime === null ? moment(new Date()) : moment(this.defaults.Data.ONewDateTime);


        if (this.defaults.RecordOrInout == 0) {

          this.form.patchValue({
            IID: this.defaults.Data.IIDNO, OID: this.defaults.Data.OIDNO, EmployeeID: this.defaults.Data.ID,
            Code: this.defaults.Data.EmployeeCode, Name: this.defaults.Data.Name + ' ' + this.defaults.Data.Surname, StartDate: startDate,
            StartTime: formatDate(this.defaults.Data.NewDateTime, 'HH:mm', locale),
            InFlag: this.defaults.Data.Type, InReason: neden, EndDate: null, EndTime: '00:00', OutFlag: null, OutReason: oneden
          });
        }
        else {


          let name = (this.defaults.Data.Name === '' ? null : (this.defaults.Data.Name + ' ' + this.defaults.Data.Surname));
          this.form.patchValue({
            In: this.defaults.Data.IIDNO != null ? true : false,
            Out: this.defaults.Data.OIDNO != null ? true : false,
            IID: this.defaults.Data.IIDNO, OID: this.defaults.Data.OIDNO, EmployeeID: this.defaults.Data.ID, Code: this.defaults.Data.EmployeeCode, Name: name,
            StartDate: startDate,
            StartTime: this.defaults.Data.NewDateTime !== null ? formatDate(this.defaults.Data.NewDateTime, 'HH:mm', locale) : '08:00',
            InFlag: 1, InReason: neden,
            EndDate: endDate,
            EndTime: this.defaults.Data.ONewDateTime !== null ? formatDate(this.defaults.Data.ONewDateTime, 'HH:mm', locale) : '00:00',
            OutFlag: 2, OutReason: oneden
          });
        }
      }
      this.form.valueChanges.subscribe(
        result => {
          this.saveEnabled = true;


          this.changeDetectEvent(this.saveEnabled && !this.form.invalid);
        });
    });

  }


  addRecord() {
    if (this.form.invalid) {
      return;
    }

    this.isEdited = true;
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    const definition = this.form.value;



    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    // definition.ID=0;
    this.attendanceService.PostAttendance(definition)
      .subscribe((res) => {
        dialogRef.close();
        this.saveEnabled = false;
        this.closeDialog();
        // console.log(this.saveEnabled);
      }, err => {
        console.log(err);
        dialogRef.close();
        // this.waitProgress(err, 3000);
      });
  }

  public comparisonValidator(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {

      const code = group.controls['Code'];
      const startDate = group.controls['StartDate'];
      const startTime = group.controls['StartTime'];
      const inReason = group.controls['InReason'];
      const endDate = group.controls['EndDate'];
      const endTime = group.controls['EndTime'];
      const outReason = group.controls['OutReason'];

      if (code.value == null || code.value == '') code.setErrors({ notEquivalent: true }); else code.setErrors(null);

      if (this.form.value.In) {
        if (startDate.value == null || startDate.value == '') startDate.setErrors({ notEquivalent: true }); else startDate.setErrors(null);
        if (startTime.value == '00:00' || startTime.value == '') startTime.setErrors({ notEquivalent: true }); else startTime.setErrors(null);
        // if (inReason.value == null || inReason.value == '') inReason.setErrors({ notEquivalent: true }); else inReason.setErrors(null);
        endDate.setErrors(null);
        endTime.setErrors(null);
        // outReason.setErrors(null);
      }

      if (this.form.value.Out) {
        if (endDate.value == null || endDate.value == '') endDate.setErrors({ notEquivalent: true }); else endDate.setErrors(null);
        if (endTime.value == '00:00' || endTime.value == '') endTime.setErrors({ notEquivalent: true }); else endTime.setErrors(null);
        // if (outReason.value == null || outReason.value == '') outReason.setErrors({ notEquivalent: true }); else outReason.setErrors(null);
        startDate.setErrors(null);
        startTime.setErrors(null);
        // inReason.setErrors(null);
      }

      return;
    };
  }



  closeDialog() {
    this.dialogRef.close(this.isEdited);
  }

  refresh() {
    this.cd.detectChanges();

  }

  turkishCulture() {
    this.adapter.setLocale("tr");
  }


  getReasons(type) {
    // debugger;
    const obj= {ID:null,Code:null,Name:null,ReturnCode:null,ReturnDscr:null};
    this.InOutReason.push(obj);
    this.definitionsService.DefinitionGetConstants(type)
      .subscribe((res: any[]) => {
        const arr: any = res;
        arr.forEach(element => {
          
          this.InOutReason.push(element);
        });

        // this.InOutReason = res;
        console.log(res);


      });
  }


  deleteContact(Type, ID) {

    this.openDialog(Type, ID);

  }


  openDialog(Type, ID) {
    this.dialog.open(DemoDialogComponent2, {
      data: {
        temp1: this.languageMap['Hareket bilgisi silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        this.deleteContactRecord(ID);
        if (Type == 0) this.form.patchValue({ IID: 0, StartDate: null, StartTime: null, InReason: 0 });
        if (Type == 1) this.form.patchValue({ OID: 0, EndDate: null, EndTime: null, OutReason: 0 });
        this.isEdited = true;
      }
    });
  }


  deleteContactRecord(id) {

    this.attendanceService.DeleteAttendance(id, 0)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        // this.waitProgressDismiss();

        // this.getAttendance(this.radioValue, this.form.value.StartDate, this.form.value.EndDate);

      }, err => {
        console.log(err);
        // this.waitProgress(err, 3000);
      });

  }

  openList(value) {
    this.dialog.open(AttendanceDefinitionsComponent, {
      panelClass: 'listClass',
      data: { Filter: false, Type: value, Data: { ID: null, Code: null, Name: null } },
      disableClose: false,
      width: '400px',
      height: '600px'
    }).afterClosed().subscribe(result => {


      if (value == '0') {
        this.form.patchValue({ EmployeeID: result.ID, Code: result.Code, Name: result.Name, Surname: result.Surname });

      }



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



@Component({
  selector: 'roundings',
  template: `
  <div mat-dialog-title fxLayout="row" fxLayoutAlign="space-between center" style="background-color:white; color:black">
  <div>{{data.temp1}}</div>
  <button type="button" mat-icon-button (click)="close('No answer')" tabindex="-1">
      <mat-icon [icIcon]="icClose"></mat-icon>
  </button>
</div>

<mat-dialog-content>
  <p>{{data.temp2}}  </p>
  <br/>
</mat-dialog-content>


<mat-dialog-actions align="end">
<button mat-button color="primary" (click)="close('Yes')">{{data.Evet}}</button>
<button mat-button (click)="close('No')">{{data.Hayir}}</button>
</mat-dialog-actions>
`
})

export class DemoDialogComponent2 {

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent2>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}