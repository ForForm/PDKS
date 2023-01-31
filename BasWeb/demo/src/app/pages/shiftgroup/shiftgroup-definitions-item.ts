// import { Component, Inject, OnInit } from '@angular/core';
import { LanguageMap } from './../interfaces/language.interface';
import { WaitComponent } from '../wait/wait.component';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { SubShiftGroupDefinitionsComponent } from './subshiftgroup-definitions.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { filter } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
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
import { MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
//  import { Definition,DefinitionHourDetail } from './../definitions/interfaces/definition.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icClose1 from '@iconify/icons-ic/close';
import { DefinitionsService } from '../services/definitions.service';
import { ShiftGroupService } from '../services/shiftgroup.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
// import { untilDestroyed } from 'ngx-take-until-destroy';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as _moment from "moment";
const moment = _moment;
import * as uuid from 'uuid';
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
import { formatDate, Time } from "@angular/common";
import { Timestamp } from 'rxjs/internal/operators/timestamp';



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
  selector: 'vex-shiftgroup-definitions-item',
  templateUrl: './shiftgroup-definitions-item.html',
  styleUrls: ['./shiftgroup.component.scss'],
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



export class ShiftGroupDefinitionsItemComponent implements OnInit {
  language: any = []; languageMap: LanguageMap = {};
  public maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/];
  static id = 100;
  definitions: [];

  @Input() columns = ['ID', 'ShiftGroupID', 'ShiftID', 'NumberOfDays', 'Actions'];
  @Input() columnsB = ['ID', 'ShiftGroupID', 'ShiftID',  'Actions'];
  @Input() tabSelected: boolean;
  @Input() tab: number = 0;
  @Input() formOnay: boolean = false;
  @Input() shiftsCode: any = [];
  @Input() saveClick: boolean;
  @Output() changeDetectEvent = new EventEmitter<boolean>();

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  icAdd = icAdd;
  icEdit = icEdit;
  icClose1 = icClose1;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icMoreHoriz = icMoreHoriz;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  // dataSourceT: MatTableDataSource<any> | null;
  dataSourceB: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  selectionT = new SelectionModel<any>(true, []);
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
  searchCtrl = new FormControl();
  subcodeV = false; subnameV = false;
  subData = [];
  createSubDefinitionV = true;
  TimeLast: Time = null;
  result: string;
  update = false;
  isMobileLayout = false;
  saveClicked = false;
  saveEnabled = false;
  selectedRowIndex1: number;
  selectedRowIndex3: number;
  constructor(

    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ShiftGroupDefinitionsItemComponent>,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public definitionsService: DefinitionsService,
    public shiftGroupService: ShiftGroupService,
    private adapter: DateAdapter<any>,
    private snackbar: MatSnackBar) {
  }


  ngOnChanges(changes: { [property: string]: SimpleChange }) {

    try {
      let change: SimpleChange = changes['saveClick'];
      if (this.saveClicked !== change.currentValue)
        this.save();
      this.saveClicked = change.currentValue;
    } catch (error) {
      console.error(error);
    }
  }

  turkishCulture() {
    this.adapter.setLocale("tr");
  }

  onFocusOutCode(event: any) {
    // && !this.update

    if (event.target.value.length > 0 && !this.update)
      this.getShiftGroupByCode(event.target.value);

  }


  getShiftGroupByCode(code) {

    this.shiftGroupService.GetShiftGroupByCode(code)
      .subscribe((res: any[]) => {
        if (res.length > 0) {
          this.openSnackBar("İlgili kod tanımlıdır, kullanılamaz.");
          this.form.reset();
          this.form.patchValue({
            ID: 0
          });
          this.focusToFormControlName('Code');

        } else {
          this.form.reset();
          this.form.patchValue({
            ID: 0, Code: code
          });
        }
      });
  }


  focusToFormControlName(name) {
    (<any>this.form.get(name)).nativeElement.focus();
  }

  openSnackBar(message) {


    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'],
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    };

    this.snackbar.openFromComponent(InfoComponent, {
      data: { temp: message, close: this.languageMap['Kapat'].labelName }, ...configSuccess
    });


  }

  ngOnInit() {
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    // debugger;
    this.turkishCulture();
    this.languageMap = AppUtil.getLabels();
    // this.defaults.update ? this.mode = 'update' : this.mode = 'create';
    this.update = this.defaults.update;
    if (this.defaults.modul === 'code' && this.defaults.def === null)
      this.defaults.def = {};


    this.route.paramMap.subscribe(params => {
      if (this.tabSelected === false || !this.defaults.update) {

        this.form = this.fb.group({
          ID: new FormControl({ value: 0, disabled: !this.defaults.auth }),
          Code: new FormControl({ value: '', disabled: !this.defaults.auth }, Validators.required),
          Name: new FormControl({ value: '', disabled: !this.defaults.auth }, Validators.required),
          StartDate: new FormControl({ value: '', disabled: !this.defaults.auth }, Validators.required),
          ShiftCalc: new FormControl({ value: false, disabled: !this.defaults.auth })
        });

      }
      else {

        this.form = this.fb.group({
          ID: [this.defaults.def.ID || ''],
          Code: [this.defaults.def.Code || '', Validators.required],
          Name: [this.defaults.def.Name || '', Validators.required],
          StartDate: [this.defaults.def.StartDate || '', Validators.required],
          ShiftCalc: [this.defaults.def.ShiftCalc || false],
        });


        this.getShiftGroupDistribution(this.defaults.def.ID);
        // this.getShiftGroupTolerance(this.defaults.def.ID);
        this.getShiftGroupBackUp(this.defaults.def.ID);


      }

      this.form.valueChanges.subscribe(
        result => {
          this.saveEnabled = true;
          this.changeDetectEvent.emit(this.saveEnabled && !this.form.invalid);
        });


      // this.changeDetectEvent.emit(false);
    })

  }




  definitionUpdateShiftGroupBackup(row) {
    this.selectedRowIndex3 = row.ID;
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    this.dialog.open(SubShiftGroupDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: row, update: true, id: row.ID, shiftsCode: this.shiftsCode, parent: 'shiftGroupBackUp' }
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.saveShiftGroupBackUp(updatedDefinition);

    });
  }




  createSubDefinition() {
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    const locale = 'en-US';

    this.dialog.open(SubShiftGroupDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: { ID: 0, ShiftGroupID: definition.ID }, update: false, id: 0, shiftsCode: this.shiftsCode, parent: 'shiftGroup' },
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.saveSubDefinition(updatedDefinition);
    });
  }



  createShiftGroupBackUp() {
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    this.dialog.open(SubShiftGroupDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: { ID: 0, ShiftGroupID: definition.ID }, update: false, id: 0, shiftsCode: this.shiftsCode, parent: 'shiftGroupBackUp' },
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {
        this.saveShiftGroupBackUp(updatedDefinition);

      }
    });
  }


  getShiftGroupDistribution(row) {

    console.log(row);
    let id = 0;
    if (row === null) id = 0; else id = row;
    this.shiftGroupService.GetShiftGroupDist(id)
      .subscribe((res: any[]) => {


        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

      }, err => {
        console.log(err);

      });

  }


  getShiftGroupBackUp(row) {

    let id = 0;
    if (row === null) id = 0; else id = row;
    this.shiftGroupService.GetShiftGroupBackUp(id)
      .subscribe((res: any[]) => {


        this.dataSourceB = new MatTableDataSource();
        this.dataSourceB.data = res;


      }, err => {
        console.log(err);

      });

  }






  enableSubSaveButton() {
    let totalMinutes = 0;
    for (var j = 0, len = this.subData.length; j < len; j++) {
      var m = moment(this.subData[j].Time, 'YYYY/MM/DD HH:mm:ss');
      totalMinutes += (m.hour() * 60) + m.minute();
      this.TimeLast = this.subData[j].LastHour;
    }

    if (totalMinutes == 1440)
      this.createSubDefinitionV = false;
    else
      this.createSubDefinitionV = true;

  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }




  ngOnDestroy() {
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
    // debugger;
    if (!this.defaults.update)
      this.createDefinition();
    else {
      this.update = true;
      this.updateDefinition();
    }
  }

  createDefinition() {
    const definition = this.form.value;
    definition.ID = 0;
    // if (this.form.value.Code === '' || this.form.value.Name === '' || this.form.value.StartDate == 0) {
    //   this.waitProgress("Kod, ad veya gün alanları zorunludur.", 3000);
    //   return;
    // }
    // else
    this.createData(definition);
    // this.dialogRef.close(definition);
  }

  updateDefinition() {
    // debugger;
    const definition = this.form.value;
    definition.ID = this.defaults.def.ID;
    this.updateData(definition);
  }

  updateData(obj) {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });


    this.shiftGroupService.PostShiftGroup(obj)
      .subscribe((res: any) => {
        // this.form.patchValue({ ID: res[0].ID })
        this.update = true;
        this.saveEnabled = false;
        this.changeDetectEvent.emit(false);
        dialogRef.close();
      }, err => {
        this.update = false;
        dialogRef.close();
        console.log(err);

      });
  }


  createData(obj) {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.shiftGroupService.PostShiftGroup(obj)
      .subscribe((res: any) => {
        this.form.patchValue({ ID: res[0].ID })
        this.update = true;
        this.saveEnabled = false;
        this.changeDetectEvent.emit(false);
        dialogRef.close();
      }, err => {
        this.update = false;
        dialogRef.close();
        console.log(err);

      });
  }



  saveSubDefinition(def) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.shiftGroupService.PostShiftGroupDist(def)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        this.getShiftGroupDistribution(def.ShiftGroupID);
        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err);

      });

  }




  saveShiftGroupBackUp(def) {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.shiftGroupService.PostShiftGroupBackUp(def)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        this.getShiftGroupBackUp(def.ShiftGroupID);
        dialogRef.close();
      }, err => {
        dialogRef.close();
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

  updateDistibutionRow(row) {

    this.selectedRowIndex1 = row.ID;
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    let data = this.dataSource.data;
    let totalMinutes = 0;
    this.dialog.open(SubShiftGroupDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: row, update: true, id: row.id, shiftsCode: this.shiftsCode, parent: 'shiftGroup' }
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.saveSubDefinition(updatedDefinition);

    });
  }



  deleteDistibutionRow(row) {

    this.selectedRowIndex1 = row.ID;
    this.dialog.open(DemoDialogComponent2, {
      data: {
        temp1: this.languageMap['Kayıt silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {

        this.shiftGroupService.DeleteShiftGroupDist(row.ID)
          .subscribe((res) => {
            this.getShiftGroupDistribution(row.ShiftGroupID);

          }, err => {
            console.log(err);

          });
      }
    });
  }



  definitionDeleteShiftGroupBackup(row) {

    this.selectedRowIndex3 = row.ID;
    this.dialog.open(DemoDialogComponent2, {
      data: {
        temp1: this.languageMap['Kayıt silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {

        this.shiftGroupService.DeleteShiftGroupBackUp(row.ID)
          .subscribe((res) => {
            this.getShiftGroupBackUp(row.ShiftGroupID);

          }, err => {
            console.log(err);

          });
      }
    });
  }


  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}



@Component({
  selector: 'definitions',
  template: `
  <div mat-dialog fxLayout="row" fxLayoutAlign="space-between center"  >
  <div><h3>{{data.temp1}}</h3></div>

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

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent2>, @Inject(MAT_DIALOG_DATA) public data) {
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