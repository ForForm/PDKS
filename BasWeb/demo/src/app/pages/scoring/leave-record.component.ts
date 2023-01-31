import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional, ChangeDetectorRef } from '@angular/core';
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
import icClose1 from '@iconify/icons-ic/close';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
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
import { LeavesService } from '../services/leaves.service';
import { Observable, pipe } from 'rxjs';
import { WaitComponent } from '../wait/wait.component';
import { LeaveDefinitionsComponent } from '../leaves/leave-definitions.component';

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
  selector: 'vex-leave-record',
  templateUrl: './leave-record.component.html',
  styleUrls: ['./leave.component.scss'],
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


export class LeaveRecordComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  static id = 100;

  @Input() columns = ['ID', 'Code', 'Name', 'CardNo'];
  form: FormGroup;
  formLeaveSave: FormGroup;
  mode: 'create' | 'update' = 'create';
  dataSource: MatTableDataSource<any> | null;
  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icSave = icSave;
  activeLinkIndex = 0;
  links = [];

  saveEnabled = false;
  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icClose1 = icClose1;
  icDeleteForever = icDeleteForever;

  icPhone = icPhone;
  visible = false;
  label = '';
  icAdd = icAdd;
  icMoreHoriz = icMoreHoriz;
  InOutType = [{ Code: 1, Name: 'Giriş' }, { Code: 2, Name: 'Çıkış' }];
  InOutReason: any[];
  isEdited = false;
  // sub=false;
  result: string;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<LeaveRecordComponent>,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    public definitionsService: DefinitionsService,
    private adapter: DateAdapter<any>,
    private dialog: MatDialog,
    public attendanceService: AttendanceService,
    public leavesService: LeavesService,
    private snackbar: MatSnackBar) {
  }

  changeDetectEvent(saveEnabled) {

    console.log(this.form);
    console.log(this.form.invalid);
    this.saveEnabled = saveEnabled;
  }

  ngOnInit() {

    //  debugger;
    const locale = 'en-US';
    this.turkishCulture();
    this.languageMap = AppUtil.getLabels();
    this.getReasons('defaults');

    let startDate = moment(new Date());
    let endDate = moment(new Date());

    this.links.push({ index: 0, name: this.languageMap['Günlük İzinler'].labelName });
    this.links.push({ index: 1, name: this.languageMap['Saatlik İzinler'].labelName });
    
    if (this.defaults.NewRecord) {

      this.form = this.fb.group({
        Code: [this.defaults.Data.EmployeeCode, [Validators.required]],
        Name: this.defaults.Data.EmployeeName, //this.defaults.Data.Name +' '+ this.defaults.Data.Surname,
        Type: null, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: null, ID: null,
        Izin: [null, [Validators.required]], IzinDesc: null, StartDate: [startDate, [Validators.required]],
        Day: [null, [Validators.required]], Description: null, EndDate: [endDate, [Validators.required]], StartTime: '00:00', EndTime: '00:00', TotalTime: '00:00'
      });

      // if (this.defaults.Data.Type === 1) this.activeLinkIndex = 0; else if (this.defaults.Data.Type === 2) this.activeLinkIndex = 1;
       if (this.defaults.Data.Type === 0) this.gotoTab({index:0}); else if (this.defaults.Data.Type === 1) this.gotoTab({index:1});

    }
    else {

      if (this.defaults.Data.Type == 0)
        this.form = this.fb.group({
          Code: [this.defaults.Data.EmployeeCode, [Validators.required]],
          Name: this.defaults.Data.EmployeeName, //this.defaults.Data.Name +' '+ this.defaults.Data.Surname,
          Type: this.defaults.Data.Type, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: this.defaults.Data.ReasonID, ID: this.defaults.Data.ID,
          Izin: [this.defaults.Data.ReasonCode, [Validators.required]], IzinDesc: this.defaults.Data.ReasonName, StartDate: [this.defaults.Data.StartDate, [Validators.required]],
          Day: [this.defaults.Data.Day, [Validators.required]], Description: this.defaults.Data.Description, EndDate: [this.defaults.Data.EndDate, [Validators.required]],
          StartTime: this.defaults.Data.StartTime !== null ? formatDate(this.defaults.Data.StartTime, 'HH:mm', locale) : '00:00',  //this.defaults.Data.StartTime,
          EndTime: this.defaults.Data.EndTime !== null ? formatDate(this.defaults.Data.EndTime, 'HH:mm', locale) : '00:00',
          TotalTime: this.getTimeInterval((this.defaults.Data.StartTime !== null ? formatDate(this.defaults.Data.StartTime, 'HH:mm', locale) : '00:00'), (this.defaults.Data.EndTime !== null ? formatDate(this.defaults.Data.EndTime, 'HH:mm', locale) : '00:00'))
        });
      else if (this.defaults.Data.Type == 1)
        this.form = this.fb.group({
          Code: [this.defaults.Data.EmployeeCode, [Validators.required]],
          Name: this.defaults.Data.EmployeeName, //this.defaults.Data.Name +' '+ this.defaults.Data.Surname,
          Type: this.defaults.Data.Type, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: this.defaults.Data.ReasonID, ID: this.defaults.Data.ID,
          Izin: [this.defaults.Data.ReasonCode, [Validators.required]], IzinDesc: this.defaults.Data.ReasonName, StartDate: [this.defaults.Data.StartDate, [Validators.required]],
          Day: [this.defaults.Data.Day], Description: this.defaults.Data.Description, EndDate: [this.defaults.Data.EndDate],
          StartTime: this.defaults.Data.StartTime !== null ? formatDate(this.defaults.Data.StartTime, 'HH:mm', locale) : '00:00',  //this.defaults.Data.StartTime,
          EndTime: this.defaults.Data.EndTime !== null ? formatDate(this.defaults.Data.EndTime, 'HH:mm', locale) : '00:00',
          TotalTime: this.getTimeInterval((this.defaults.Data.StartTime !== null ? formatDate(this.defaults.Data.StartTime, 'HH:mm', locale) : '00:00'), (this.defaults.Data.EndTime !== null ? formatDate(this.defaults.Data.EndTime, 'HH:mm', locale) : '00:00'))
        });

      // this.calculateTotalTime();
      if (this.defaults.Data.Type === 0) this.activeLinkIndex = 0; else if (this.defaults.Data.Type === 1) this.activeLinkIndex = 1;

    }

    
    this.form.valueChanges.subscribe(
      result => {
        this.saveEnabled = true;
        this.changeDetectEvent(this.saveEnabled && !this.form.invalid);
      });

  }

  gotoTab(link) {

    console.log(this.defaults);
    this.activeLinkIndex = link.index;
    if (link.index === 0) {
      let startDate = moment(new Date());
      let endDate = moment(new Date());
      this.form = this.fb.group({
        Code: [this.defaults.Data.EmployeeCode, [Validators.required]],
        Name: this.defaults.Data.EmployeeName,  Type: null, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: null, ID: null,
        Izin: [null, [Validators.required]], IzinDesc: null, StartDate: [startDate, [Validators.required]],
        Day: [null, [Validators.required]], Description: null, EndDate: [endDate, [Validators.required]], StartTime: '00:00', EndTime: '00:00', TotalTime: '00:00'
      });
    }
    else {
      let startDate = moment(new Date());
      let endDate = moment(new Date());
      this.form = this.fb.group({
        Code: [this.defaults.Data.EmployeeCode, [Validators.required]],
        Name: this.defaults.Data.EmployeeName,  Type: null, EmployeeID: this.defaults.Data.EmployeeID, ReasonID: null, ID: null,
        Izin: [null, [Validators.required]], IzinDesc: null, StartDate: [startDate, [Validators.required]],
        Day: null, Description: null, EndDate: endDate, StartTime: [null, [Validators.required]], 
        EndTime: [null, [Validators.required]], TotalTime: '00:00'
      });
    }

    this.form.valueChanges.subscribe(
      result => {
        this.saveEnabled = true;
        this.changeDetectEvent(this.saveEnabled && !this.form.invalid);
      });

  }


  addRecord() {

 

    this.isEdited = true;
 
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });


    console.log(this.form.value);

    let objArray: any = [];
    const definition = this.form.value;
    // definition.StartDate=definition.StartDate.format("YYYY-MM-DDT00:00:00") ;
    // definition.EndDate=definition.EndDate.format("YYYY-MM-DDT00:00:00") ;
    definition.Type = this.activeLinkIndex;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    definition.ReasonCode = this.form.value.Izin;
    definition.ReasonID=this.form.value.ReasonID;
    objArray.push(definition)
    this.leavesService.PostLeaves(objArray)
      .subscribe((res) => {
 
        this.saveEnabled = false;
        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err); 
      });


  }
  // myObservable(observer) {
  //   setTimeout(() => {
  //     observer.next("");
  //     observer.complete();
  //   }, 1000);
  // }


  showWaitScreen(observable: Observable<Object>) {
    let dialogRef: MatDialogRef<WaitComponent> = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    let subscription = observable.subscribe(
      (response: any) => {
        subscription.unsubscribe();
        console.log(response);
        dialogRef.close();
      },
      (error) => {
        subscription.unsubscribe();
        dialogRef.close();
      }
    );
  }


  calculateTotalTime() {
    // this.calcDisabled = false; this.saveDisabled = true; 
    let start = moment(this.form.value.StartTime, 'HH:mm');
    let end = moment(this.form.value.EndTime, 'HH:mm');
    // let sure = this.getTimeInterval(start, end).replace(':', '');
    this.form.patchValue({ TotalTime: this.getTimeInterval(start, end) });

    if (this.form.value.StartTime!=null && this.form.value.EndTime!=null)
    this.calculateTotalDay(); 

  }

  getTimeInterval(startTime, endTime) {
    var start = moment(startTime, "HH:mm");
    var end = moment(endTime, "HH:mm");
    var minutes = end.diff(start, 'minutes');
    var interval = moment().hour(0).minute(minutes);
    return interval.format("HH:mm");
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
    this.definitionsService.DefinitionGetConstants(type)
      .subscribe((res: any[]) => {

        console.log(res);
        this.InOutReason = res;


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

  calculateTotalDay() {

    // console.log(this.form.value.StartDate);
    // this.form.value.StartDate=this.form.value.StartDate.format("YYYY-MM-DDT00:00:00");
    let startDate = moment(this.form.value.StartDate);
    let tableD: any = [];

    let obj: any = {
      Type: this.activeLinkIndex , Username: JSON.parse(sessionStorage.getItem('Username')),
      CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), 
      ID: this.form.value.ID,
      EmployeeID: this.form.value.EmployeeID,
      ReasonID: this.form.value.ReasonID,
      StartDate: this.form.value.StartDate, StartTime: this.form.value.StartTime, 
      Day: this.form.value.Day, EndDate: null, EndTime: this.form.value.EndTime,
      Description: this.form.value.Description,TotalTime:this.form.value.TotalTime
    };
    tableD.push(obj);

    this.CalculateLeaves(tableD);

  }

  openSnackBar(message) {

    console.log(message);
    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'] ,
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    };
    // let config = new MatSnackBarConfig();
    // config.verticalPosition = 'top'; config.horizontalPosition = 'center';
    // config.panelClass = ['mat-toolbar', 'mat-primary', 'success-snackbar'] 
    this.snackbar.openFromComponent(InfoComponent, {
      data:{temp:message,close:this.languageMap['Kapat'].labelName},...configSuccess
    });

    
  }



  CalculateLeaves(obj) {

    this.leavesService.CalculateLeaves(obj)
      .subscribe((res: any[]) => {
 
        let errors = ''; let say = 0;
        for (var i = 0, len = res.length; i < len; i++) {
          if (res[i].Statu !== 'OK') {
            say++;
            errors += res[i].EmployeeCode + " " + this.languageMap[res[i].ErrorDesc].labelName + '\n';
            this.saveEnabled = false;
          }
          else {
            this.formLeaveSave.patchValue({ EndDate: res[i].EndDate, Day: res[i].Day, WorkDate: res[i].WorkDate });
            this.saveEnabled = true;
          }
        }

        if (errors !== '') {
          this.openSnackBar(errors.substring(0, errors.length - 1));
          // this.waitProgress(errors.substring(0, errors.length - 1), 500000);
          // this.saveDisabled = true;
        }

      

      }, err => {
        console.log(err);

      });

  }


  openDefinition(value, obj) {
    this.dialog.open(LeaveDefinitionsComponent, {
      data: { Type: value, Data: { ID: null, Code: null, Name: null } },
      disableClose: false,
      width: '400px',
      height: '700px'
    }).afterClosed().subscribe(result => {


    // console.log(value);
    // console.log(result);

      if (value == '13') {

        if (obj == 1)
          this.form.patchValue({ ReasonID:result.ID, Izin: result.Code, IzinDesc: result.Name });
      }

      if (value == '0') {
        this.form.patchValue({ EmployeeID: result.ID, Code: result.Code, Name: result.Name});

      }

    });
  }

  // waitProgressDismiss() {
  //   this.snackbar.dismiss();
  // }



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
  <div mat-dialog fxLayout="row" fxLayoutAlign="space-between center"  >
  <div><h3>{{data.temp1}}</h3></div>
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




@Component({
  selector: 'snack-bar',
  template: `

  <div style='text-align:right'>
    <button mat-raised-button
    color="accent"
    (click)="close()">{{data.close}}</button> 
  </div>
  
  
  <div style='overflow-y:auto'>
  <span>
   {{data.temp}} 
  </span>
  </div>
`
})

export class InfoComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<InfoComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data) {
  }

  
  close() {
    this.snackBarRef.dismiss();
  }

}