// import { Component, Inject, OnInit } from '@angular/core';
import { LanguageMap } from './../interfaces/language.interface';
import { WaitComponent } from '../wait/wait.component';
import { HostListener } from '@angular/core';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { SubShiftDefinitionsComponent } from './subshift-definitions.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { filter } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
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
import { MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
//  import { Definition,DefinitionHourDetail } from './../definitions/interfaces/definition.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import { DefinitionsService } from '../services/definitions.service';
import { ShiftService } from '../services/shift.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as _moment from "moment";
const moment = _moment;
import * as uuid from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
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
import { ContentObserver } from '@angular/cdk/observers';
import { Console } from 'console';

export interface WorkingTypesCode {
  id: string;
  code: string;
  name: string;
}


export class Definition {
  ID: number;
  ShiftID: number;
  WorkingTypeID: number;
  FirstHour: Time;
  LastHour: Time;
  Time: Time;
  State: string;

  constructor(definition) {
    this.ID = definition.ID;
    this.ShiftID = definition.ShiftID;
    this.WorkingTypeID = definition.WorkingTypeID;
    this.FirstHour = definition.FirstHour;
    this.LastHour = definition.LastHour;
    this.Time = definition.Time;
    this.State = definition.State;
  }
}



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

export interface DistributionElement {
  ID: number;
  ShiftID: number;
  WorkingTypeID: number;
  WorkingTypeCode: number;
  WorkingTypeName: string;
  FirstHour: Time;
  LastHour: Time;
  Time: Time;
  State: string;
  Index: number
}

const DISTRIBUTION_DATA: DistributionElement[] = [];

@Component({
  selector: 'vex-shift-definitions-item',
  templateUrl: './shift-definitions-item.html',
  styleUrls: ['./shift-definitions-item.scss'],
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



export class ShiftDefinitionsItemComponent implements OnInit {

  tableData: any = { deneme: '' };
  // language: any = []; languageMap: LanguageMap = {};  
  public maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/];
  static id = 100;
  // subject$: ReplaySubject<Definition[]> = new ReplaySubject<Definition[]>(1);
  // data$: Observable<Definition[]> = this.subject$.asObservable();
  definitions: any[];

  @Input() columns = ['ID', 'ShiftID', 'FirstHour', 'LastHour', 'WorkingTypeID', 'WorkingTypeName', 'Time', 'State', 'Actions'];
  @Input() columnsD = ['ID', 'ShiftID', 'WorkingTypeID', 'State', 'Actions'];
  @Input() columnsM = ['ID', 'ShiftID', 'WorkingTypeSrcID', 'TotalTime', 'WorkingTypeDestID', 'TransferTime', 'Actions'];
  @Input() columnsN = ['ID', 'ShiftID', 'WorkingTypeID', 'FirstHour', 'LastHour', 'Actions'];
  @Input() columnsT = ['ID', 'ShiftID', 'EarlyStartTime', 'StartTime', 'LateStartTime', 'EarlyFinishTime', 'FinishTime', 'LateFinishTime', 'Actions'];
  @Input() columnsH = ['ID', 'ShiftID', 'StartDate', 'HolidayType', 'HolidayShiftID', 'Actions'];

  @Input() tabSelected: boolean;
  @Input() tab: number = 0;
  @Input() formOnay: boolean = false;
  @Input() roundingHours: any = [];
  @Input() roundingDays: any = [];
  @Input() workingTypesType: any = [];
  @Input() workingTypesCode: WorkingTypesCode[];
  filteredOptions: Observable<WorkingTypesCode[]>;
  @Input() workingTypes: any = [];
  @Input() workingTypesStatus: any = [];
  @Input() typeOfWeekHoliday: any = [];
  @Input() screenName: string = '';
  @Input() languageMap: LanguageMap = {};
  @Input() saveClick: boolean;
  @Output() changeDetectEvent = new EventEmitter<boolean>();
  // @Output() save = new EventEmitter<any>();
  form: FormGroup;
  totalMinutes: number = 0;
  selectedRowIndex = 0;
  // workingTypesCode: any = [];
  freeShiftDistStatus: any = [];
  mode: 'create' | 'update' = 'create';
  icAdd = icAdd;
  icEdit = icEdit;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icSave = icSave;
  icMoreHoriz = icMoreHoriz;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  // dataSource: MatTableDataSource<Definition> | null;
  dataSource: MatTableDataSource<any> | null;
  dataSourceD: MatTableDataSource<any> | null;
  dataSourceM: MatTableDataSource<any> | null;
  dataSourceN: MatTableDataSource<any> | null;
  dataSourceT: MatTableDataSource<any> | null;
  dataSourceH: MatTableDataSource<any> | null;
  selection = new SelectionModel<Definition>(true, []);
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
  dayTurning: any = [];
  shiftTypes: any = [];
  shiftHolidayTypes: any = [];
  shiftTypesExceptSerbest: any = [];
  publicHolidays: any = [];
  result: string;
  shiftType: 0;
  update = false;
  isMobileLayout = false;
  saveClicked = false;
  saveEnabled = false;
  remainTimeHour: number = 0;
  remainTimeMin: number = 0;
  selectedRowIndex2: number;
  selectedRowIndexH: number;
  WorkingTypeCode = new FormControl(0);
  VOForm: FormGroup;

  // @HostListener('document:keyup', ['$event'])
  // handleDeleteKeyboardEvent(event: KeyboardEvent) {


  //   if(event.key === 'ArrowDown') this.AddNewRow();

  //   // if(event.key === 'Delete' || event.key === 'Backspace')
  //   // {      

  //   // }
  // }

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ShiftDefinitionsItemComponent>,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public definitionsService: DefinitionsService,
    public shiftService: ShiftService,
    private snackbar: MatSnackBar) {
  }


  private _filter(name: string): WorkingTypesCode[] {
    const filterValue = name.toLowerCase();
    return this.workingTypesCode.filter(option => option.name.toLowerCase().includes(filterValue));
  }



  ngOnInit() {


    this.filteredOptions = this.WorkingTypeCode.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    const locale = 'en-US';
    this.languageMap = this.defaults.languageMap;
    this.defaults.update ? this.mode = 'update' : this.mode = 'create';
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    if (this.defaults.modul === 'code' && this.defaults.def === null)
      this.defaults.def = {} as Definition;

    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([])
    });

    console.log(this.defaults);

    this.VOForm = this.fb.group({
      VORows: this.fb.array(DISTRIBUTION_DATA.map(val => this.fb.group({
        ID: new FormControl(val.ID),
        ShiftID: new FormControl(val.ShiftID),
        FirstHour: new FormControl(val.FirstHour),
        LastHour: new FormControl(val.LastHour),
        WorkingTypeID: new FormControl(val.WorkingTypeID),
        WorkingTypeCode: new FormControl(val.WorkingTypeCode),
        WorkingTypeName: new FormControl(val.WorkingTypeName),
        Time: new FormControl(val.Time),
        State: new FormControl(val.State),
        action: new FormControl('existingRecord'),
        isEditable: new FormControl(true),
        isNewRow: new FormControl(false),
        Index: new FormControl(0),
      })
      )) //end of fb array
    });

    this.route.paramMap.subscribe(params => {

      this.update = this.defaults.update;
      this.GetEnums('FreeShiftDistStatus', null);
      this.GetEnums('ShiftTypes', null);
      this.GetEnums('DayTurning', null);
      this.GetEnums('TypeOfWeekHoliday', null);
      this.GetEnums('PublicHoliday', null);
      if (this.tabSelected === false || !this.defaults.update) {
        this.shiftType = 0;
        this.form = this.fb.group({
          ID: new FormControl({ value: 0, disabled: !this.defaults.auth }),
          Code: new FormControl({ value: '', disabled: !this.defaults.auth }, Validators.required),
          Name: new FormControl({ value: '', disabled: !this.defaults.auth }, Validators.required),
          Type: new FormControl({ value: '', disabled: !this.defaults.auth }, Validators.required),
          DayTurning: new FormControl({ value: 0, disabled: !this.defaults.auth }),
          DayTurningTime: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          Time: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          StartEarly: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          Start: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          LateStart: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          EarlyFinish: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          Finish: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          LateFinish: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          WeekHoliday: new FormControl({ value: 0, disabled: !this.defaults.auth }),
          TypeOfWeekHoliday: new FormControl({ value: 0, disabled: !this.defaults.auth }),
        });
      }
      else {

        this.update = true;
        const dayTurningTime = this.defaults.def.DayTurningTime !== undefined ? formatDate(this.defaults.def.DayTurningTime, 'HH:mm', locale) : '00:00';
        const time = this.defaults.def.Time !== undefined ? formatDate(this.defaults.def.Time, 'HH:mm', locale) : '00:00';
        const startEarly = this.defaults.def.StartEarly !== undefined ? formatDate(this.defaults.def.StartEarly, 'HH:mm', locale) : '00:00';
        const start = this.defaults.def.Start !== undefined ? formatDate(this.defaults.def.Start, 'HH:mm', locale) : '00:00';
        const lateStart = this.defaults.def.LateStart !== undefined ? formatDate(this.defaults.def.LateStart, 'HH:mm', locale) : '00:00';
        const earlyFinish = this.defaults.def.EarlyFinish !== undefined ? formatDate(this.defaults.def.EarlyFinish, 'HH:mm', locale) : '00:00';
        const finish = this.defaults.def.Finish !== undefined ? formatDate(this.defaults.def.Finish, 'HH:mm', locale) : '00:00';
        const lateFinish = this.defaults.def.LateFinish !== undefined ? formatDate(this.defaults.def.LateFinish, 'HH:mm', locale) : '00:00';

        this.form = this.fb.group({
          ID: [this.defaults.def.ID || 0],
          Code: new FormControl({ value: this.defaults.def.Code || '', disabled: !this.defaults.auth }, Validators.required),
          Name: new FormControl({ value: this.defaults.def.Name || '', disabled: !this.defaults.auth }, Validators.required),
          Type: new FormControl({ value: this.defaults.def.Type.toString() || '', disabled: !this.defaults.auth }, Validators.required),
          DayTurning: new FormControl({ value: this.defaults.def.DayTurning.toString() || 0, disabled: !this.defaults.auth }),
          DayTurningTime: new FormControl({ value: dayTurningTime, disabled: !this.defaults.auth }),
          Time: new FormControl({ value: time, disabled: !this.defaults.auth }),
          StartEarly: new FormControl({ value: startEarly, disabled: !this.defaults.auth }),
          Start: new FormControl({ value: start, disabled: !this.defaults.auth }),
          LateStart: new FormControl({ value: lateStart, disabled: !this.defaults.auth }),
          EarlyFinish: new FormControl({ value: earlyFinish, disabled: !this.defaults.auth }),
          Finish: new FormControl({ value: finish, disabled: !this.defaults.auth }),
          LateFinish: new FormControl({ value: lateFinish, disabled: !this.defaults.auth }),
          WeekHoliday: new FormControl({ value: this.defaults.def.WeekHoliday, disabled: !this.defaults.auth }),
          TypeOfWeekHoliday: new FormControl({ value: this.defaults.def.TypeOfWeekHoliday.toString(), disabled: !this.defaults.auth }),

        });

        if (this.tab == 0) { this.getShiftDistribution(this.defaults.def.ID); this.getShiftTolerance(this.defaults.def.ID); this.getShiftHoliday(this.defaults.def.ID); this.getShift(0); }
        else {
          this.getFreeShiftDistribution(this.defaults.def.ID);
          this.getFreeShiftMeal(this.defaults.def.ID);
          this.getFreeShiftNight(this.defaults.def.ID);
          this.getShiftTolerance(this.defaults.def.ID);

        }
      }

      if (this.tab === 0)
        this.form.controls['Type'].setValidators([Validators.required]);
      else
        this.form.controls['Type'].clearValidators();

      this.form.controls['Type'].updateValueAndValidity();

      this.form.valueChanges.subscribe(
        result => {
          this.saveEnabled = true;
          this.changeDetectEvent.emit(this.saveEnabled && !this.form.invalid);
        });

    })

  }


  getShift(type) {

    this.shiftService.GetShift(type)
      .subscribe((res: any[]) => {
        res.forEach(element => {
          if (element.Type == 4 || element.Type == 5) {
            let data = { kodu: element.ID, adi: element.Name };
            this.shiftHolidayTypes.push(data);
          }
        });


      });


  }



  EditSVO(element) {



    console.log(element);
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    let subData = [];
    subData.push({
      'ID': element.controls.ID.value, 'WorkingTypeID': element.controls.WorkingTypeID.value, 'WorkingTypeCode': element.controls.WorkingTypeCode.value, 'ShiftID': element.controls.ShiftID.value, 'Time':
        element.controls.Time.value, 'FirstHour':
        element.controls.FirstHour.value, 'LastHour':
        element.controls.LastHour.value, 'Username': JSON.parse(sessionStorage.getItem('Username')),
      'CompanyId': JSON.parse(sessionStorage.getItem('CompanyId'))
    });
    this.shiftService.PostShiftDist(subData)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        this.VOForm = this._formBuilder.group({
          VORows: this._formBuilder.array([])
        });
        this.getShiftDistribution(element.controls.ShiftID.value);
        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err);

      });

  }

  CancelSVO(definition) {
    // console.log(VOFormElement);
    // console.log(definition);
    const control = this.VOForm.get('VORows') as FormArray;
    // control.removeAt(this.selectedRowIndex);
    // console.log(control);

    if (control.length === 1)
      control.removeAt(0);
    else
      control.removeAt(definition.controls.Index.value);
    // const firstHour=control.length===0?'00:00':control.value[control.length-1].LastHour;
    this.dataSource = new MatTableDataSource(control.controls);
    this.enableSubSaveButton();
  }






  initiateVOForm(): FormGroup {


    const control = this.VOForm.get('VORows') as FormArray;
    const firstHour = control.length === 0 ? this.form.value.DayTurningTime : control.value[control.length - 1].LastHour;


    // VOFormElement.get('VORows').at(i).get('FirstHour').value,
    // console.log(control.value[control.length].LastHour);
    return this.fb.group({
      ID: new FormControl(control.length),
      ShiftID: new FormControl(this.form.value.ID),
      WorkingTypeID: new FormControl(0),
      WorkingTypeCode: new FormControl(0),
      WorkingTypeName: new FormControl({ value: '', disabled: true }),
      FirstHour: new FormControl(firstHour),
      LastHour: new FormControl(null),
      Time: new FormControl({ value: '00:00', disabled: true }),
      State: new FormControl(''),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
      Index: new FormControl(this.selectedRowIndex + 1)
    });
  }

  calculateTime(VOFormElement, i) {

    this.selectedRowIndex = i;
    VOFormElement.get('VORows').at(i).get('Time').patchValue(this.getTimeInterval(VOFormElement.get('VORows').at(i).get('FirstHour').value, VOFormElement.get('VORows').at(i).get('LastHour').value));
  }

  setWorkingTypeName(VOFormElement, i, element) {

    this.selectedRowIndex = i;
    for (var j = 0, len = this.workingTypesCode.length; j < len; j++) {
      if (this.workingTypesCode[j].code === element.value.WorkingTypeCode) {
        VOFormElement.get('VORows').at(i).get('WorkingTypeName').patchValue(this.workingTypesCode[j].name);
      }
    }
  }


  AddNewRow(VOFormElement, j) {
    // this.getBasicDetails();

    const control = this.VOForm.get('VORows') as FormArray;
   
    if (j > -1 && VOFormElement.get('VORows').at(j) !== undefined) {
      
      let finder = false;
      for (var i = 0, len = this.workingTypesCode.length; i < len; i++) {
        // console.log(this.workingTypesCode[i].code + '--' + VOFormElement.get('VORows').at(j).get('WorkingTypeCode').value);
        if (this.workingTypesCode[i].code === VOFormElement.get('VORows').at(j).get('WorkingTypeCode').value)
          finder = true;
        // control.value[control.length - 1].WorkingTypeName=this.workingTypesCode[i].name;

      }
      if (!finder) {
        VOFormElement.get('VORows').at(j).get('Time').patchValue('00:00');
        // VOFormElement.get('VORows').at(j).get('LastHour').patchValue(null);
        this.enableSubSaveButton();
        this.openSnackBar("Hatalı Çalışma Kodu"); return;
      } else {
        VOFormElement.get('VORows').at(j).get('Time').patchValue(this.getTimeInterval(VOFormElement.get('VORows').at(j).get('FirstHour').value,VOFormElement.get('VORows').at(j).get('LastHour').value));
        this.enableSubSaveButton();
        const firstHour = control.length === 0 ? '00:00' : VOFormElement.get('VORows').at(control.length-1).get('LastHour').value;
        if (control.length > 0)
          if (firstHour === null) return;

        if (this.totalMinutes == 1440) return;
        control.insert(control.controls.length, this.initiateVOForm());
        this.dataSource = new MatTableDataSource(control.controls);
        // this.focusToVoFormControlName('WorkingTypeID', control.controls.length - 1);
      }

    }
    else 
    {
      this.enableSubSaveButton();
      const firstHour = control.length === 0 ? '00:00' : VOFormElement.get('VORows').at(j).get('LastHour').value;
      if (control.length > 0)
        if (firstHour === null) return;
      if (this.totalMinutes == 1440) return;
      control.insert(control.controls.length, this.initiateVOForm());
      this.dataSource = new MatTableDataSource(control.controls);
    }

    console.log(this.totalMinutes);
  }

  focusToVoFormControlName(name, i) {

    // // controls
    // console.log((<any>(this.VOForm.get('VORows') as FormArray).controls[i].get(name)));
    // // (<any>(this.VOForm.get('VORows') as FormArray).at(i).get(name)).nativeElement.focus();
    // (<any>(this.VOForm.get('VORows') as FormArray).controls[i].get(name)).nativeElement.focus();
  }

  focusToFormControlName(name) {
    (<any>this.form.get(name)).nativeElement.focus();
  }


  ngOnChanges(changes: { [property: string]: SimpleChange }) {

    try {
      let change: SimpleChange = changes['saveClick'];
      if (this.saveClicked !== change.currentValue)
        this.save();
      this.saveClicked = change.currentValue;


      if (this.tab === 0)
        this.form.controls['Type'].setValidators([Validators.required]);
      else
        this.form.controls['Type'].clearValidators();

      this.form.controls['Type'].updateValueAndValidity();
    } catch (error) {


    }
  }

  onFocusOutCode(event: any) {

    if (event.target.value.length > 0 && !this.update)
      this.getShiftByCode(event.target.value);

  }


  getShiftByCode(code) {

    this.shiftService.GetShiftByCode(code)
      .subscribe((res: any[]) => {
        if (res.length > 0) {
          this.openSnackBar("İlgili kod tanımlıdır, kullanılamaz.");
          this.form.reset();
          this.form.patchValue({
            ID: 0, DayTurning: 0, WeekHoliday: 0, TypeOfWeekHoliday: 0, DayTurningTime: '00:00', Time: '00:00', StartEarly: '00:00', Start: '00:00', LateStart: '00:00', EarlyFinish: '00:00',
            Finish: '00:00', LateFinish: '00:00'
          });
          this.focusToFormControlName('Code');

        } else {
          this.form.reset();
          this.form.patchValue({
            ID: 0, Code: code, DayTurning: 0, WeekHoliday: 0, TypeOfWeekHoliday: 0, DayTurningTime: '00:00', Time: '00:00', StartEarly: '00:00', Start: '00:00', LateStart: '00:00', EarlyFinish: '00:00',
            Finish: '00:00', LateFinish: '00:00'
          });



        }
      });

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





  save() {

    const definition = this.form.value;
    definition.Type = this.tab == 1 ? '1' : this.form.value.Type;
    if (definition.Code == '' || definition.Name == '') {
      return;
    }

    this.postShift(definition);
  }


  setVOForm(element, say): FormGroup {



    return this.fb.group({
      ID: new FormControl(element.ID),
      ShiftID: new FormControl(element.ShiftID),
      WorkingTypeID: new FormControl(element.WorkingTypeID),
      WorkingTypeCode: new FormControl(element.WorkingTypeCode),
      WorkingTypeName: new FormControl({ value: element.WorkingTypeName, disabled: true }),
      FirstHour: new FormControl(moment(element.FirstHour).format('HH:mm')),
      LastHour: new FormControl(moment(element.LastHour).format('HH:mm')),
      Time: new FormControl({ value: element.Time, disabled: true }),
      State: new FormControl(element.State),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
      Index: new FormControl(say)
    });
  }

  getShiftDistribution(row) {

    let id = 0;
    if (row === null) id = 0; else id = row;
    this.shiftService.GetShiftDist(id)
      .subscribe((res: any[]) => {

        let say = 0;
        res.forEach(element => {

          const control = this.VOForm.get('VORows') as FormArray;
          control.insert(control.controls.length, this.setVOForm(element, say));
          this.dataSource = new MatTableDataSource(control.controls);
          say++;
        });


        // this.dataSource = new MatTableDataSource();        
        // this.subData = res;
        // this.dataSource.data = this.subData;
        // this.enableSubSaveButton();


      }, err => {
        console.log(err);

      });

  }

  getFreeShiftDistribution(row) {

    let id = 0;
    if (row === null) id = 0; else id = row;
    this.shiftService.GetFreeShiftDist(id)
      .subscribe((res: any[]) => {
        this.dataSourceD = new MatTableDataSource();
        // this.definitions = res;
        // this.subData = [];
        // for (var j = 0, len = this.definitions.length; j < len; j++) {
        //   const updatedDefinition: any = {};
        //   updatedDefinition.ID = this.definitions[j].ID;
        //   updatedDefinition.ShiftID = this.definitions[j].ShiftID;
        //   updatedDefinition.WorkingTypeID = this.definitions[j].WorkingTypeID;
        //   updatedDefinition.State=111;
        //   this.subData.push(updatedDefinition);
        // }
        // this.enableSubSaveButton();
        // this.dataSourceD.data = this.subData;
        this.dataSourceD.data = res;
        // if (row !== null)
        //   this.dataSourceD.data.forEach(row1 => (row1.ID === row.ID ? this.selection.select(row1) : null));


      }, err => {
        console.log(err);

      });

  }

  getFreeShiftMeal(row) {

    let id = 0;
    if (row === null) id = 0; else id = row;
    this.shiftService.GetFreeShiftMeal(id)
      .subscribe((res: any[]) => {
        this.dataSourceM = new MatTableDataSource();
        // this.definitions = res;
        // this.subData = [];
        // for (var j = 0, len = this.definitions.length; j < len; j++) {
        //   const updatedDefinition: any = {};
        //   updatedDefinition.ID = this.definitions[j].ID;
        //   updatedDefinition.FirstHour = this.definitions[j].FirstHour;
        //   updatedDefinition.LastHour = this.definitions[j].LastHour;
        //   updatedDefinition.Time = this.definitions[j].Time;
        //   updatedDefinition.ShiftID = this.definitions[j].ShiftID;
        //   updatedDefinition.WorkingTypeID = this.definitions[j].WorkingTypeID;
        //   this.subData.push(updatedDefinition);
        // }


        // this.enableSubSaveButton();
        // this.dataSourceM.data = this.subData;
        // res[0].WorkingTypeSrcID="1";
        // res[0].WorkingTypeDestID="2";
        this.dataSourceM.data = res;
        // if (row !== null)
        //   this.dataSourceM.data.forEach(row1 => (row1.ID === row.ID ? this.selection.select(row1) : null));


      }, err => {
        console.log(err);

      });

  }

  getFreeShiftNight(row) {

    let id = 0;
    if (row === null) id = 0; else id = row;
    this.shiftService.GetFreeShiftNight(id)
      .subscribe((res: any[]) => {
        this.dataSourceN = new MatTableDataSource();
        // this.definitions = res;
        // this.subData = [];
        // for (var j = 0, len = this.definitions.length; j < len; j++) {
        //   const updatedDefinition: any = {};
        //   updatedDefinition.ID = this.definitions[j].ID;
        //   updatedDefinition.FirstHour = this.definitions[j].FirstHour;
        //   updatedDefinition.LastHour = this.definitions[j].LastHour;
        //   updatedDefinition.Time = this.definitions[j].Time;
        //   updatedDefinition.ShiftID = this.definitions[j].ShiftID;
        //   updatedDefinition.WorkingTypeID = this.definitions[j].WorkingTypeID;
        //   this.subData.push(updatedDefinition);
        // }


        // this.enableSubSaveButton();
        // this.dataSourceN.data = this.subData;
        this.dataSourceN.data = res;

        // if (row !== null)
        //   this.dataSourceN.data.forEach(row1 => (row1.ID === row.ID ? this.selection.select(row1) : null));


      }, err => {
        console.log(err);

      });

  }


  async createSubShift() {

    // let response = await this.enableSubSaveButton();
    // if (response > 0) {
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    const locale = 'en-US';
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: { ID: uuid.v4(), ShiftID: definition.ID, FirstHour: this.TimeLast, WorkingTypeID: 0, State: 0, DayTurningTime: definition.DayTurningTime }, screenName: this.screenName, vreadonly: (this.TimeLast == null ? false : true), update: false, id: 0, sub: 'shiftDist', workingTypesCode: this.workingTypesCode },
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {
        updatedDefinition.ID = 0;
        updatedDefinition.FirstHour = '1900-01-01T' + updatedDefinition.FirstHour + '00';
        updatedDefinition.LastHour = '1900-01-01T' + updatedDefinition.LastHour + '00';
        updatedDefinition.Time = '1900-01-01T' + updatedDefinition.Time + '00';
        this.subData.push(updatedDefinition);
        // this.dataSource = new MatTableDataSource<Definition>(this.subData);
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = this.subData;
        this.enableSubSaveButton();
      }
    });
    // }

  }

  enableSubSaveButton() {
    this.totalMinutes = 0;


    // console.log(this.dataSource);
    // if (this.dataSource==undefined) return;

    if (this.dataSource !== undefined)
      if (this.dataSource.data.length > 0) {
        for (var j = 0, len = this.dataSource.data.length; j < len; j++) {
          // var m = moment(this.dataSource.data[j].controls.Time.value, 'YYYY/MM/DD HH:mm:ss');
          var m = moment(this.dataSource.data[j].controls.Time.value, 'HH:mm');
          this.totalMinutes += (m.hour() * 60) + m.minute();
          this.TimeLast = this.dataSource.data[j].controls.LastHour.value;
          // console.log(this.dataSource.data.length.toString()+'------'+this.dataSource.data[j].controls.Time.value+'-----'+this.totalMinutes);
        }

        if (this.dataSource.data.length == 0)
          this.TimeLast = null;
      }

    // console.log(this.totalMinutes)
    if (this.totalMinutes == 1440)
      this.createSubDefinitionV = false;
    else

      this.createSubDefinitionV = true;


    this.remainTimeHour = Math.floor((1440 - this.totalMinutes) / 60);
    this.remainTimeMin = (1440 - this.totalMinutes) % 60;
    return this.totalMinutes;

  }


  async saveSubShift() {




    let response = await this.enableSubSaveButton();
    if (response == 1440) {


      let subData = [];
      const locale = 'en-US';
      var promise = new Promise((resolve, reject) => {
        this.dataSource.data.forEach((element, index, array) => {

          subData.push({
            'ID': 0, 'WorkingTypeID': element.controls.WorkingTypeID.value, 'WorkingTypeCode': element.controls.WorkingTypeCode.value, 'ShiftID': element.controls.ShiftID.value, 'Time':
              element.controls.Time.value, 'FirstHour':
              element.controls.FirstHour.value, 'LastHour':
              element.controls.LastHour.value, 'Username': JSON.parse(sessionStorage.getItem('Username')),
            'CompanyId': JSON.parse(sessionStorage.getItem('CompanyId'))
          });

          if (index === array.length - 1) {
            resolve(1);
          }
        });

      });

      promise.then(() => {

        const dialogRef = this.dialog.open(WaitComponent, {
          panelClass: 'transparent',
          disableClose: true
        });

        this.shiftService.PostShiftDist(subData)
          .subscribe((res) => {
            //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
            this.getShiftDistribution(this.subData[0].ShiftID);
            dialogRef.close();
          }, err => {
            dialogRef.close();
            console.log(err);

          });

        dialogRef.close();
      });

    }
  }

  updateDistibutionRow(row) {
    this.selectedRowIndex = row.ID;
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    let data = this.dataSource.data;
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: row, update: true, id: row.id, vreadonly: true, screenName: this.screenName, sub: 'shiftDist', workingTypesCode: this.workingTypesCode },
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {

        updatedDefinition.ID = updatedDefinition.ID;
        updatedDefinition.FirstHour = '1900-01-01T' + updatedDefinition.FirstHour + '00';
        updatedDefinition.WorkingTypeID = updatedDefinition.WorkingTypeID;
        updatedDefinition.LastHour = '1900-01-01T' + updatedDefinition.LastHour + '00';
        updatedDefinition.Time = '1900-01-01T' + updatedDefinition.Time + '00';
        for (var j = 0, len = data.length; j < len; j++) {
          if (data[j].ID == updatedDefinition.ID)
            data[j] = updatedDefinition;
        }
        this.dataSource.data = data;
        this.enableSubSaveButton();
      }



    });
  }


  deleteDistibutionRow(row) {
    this.selectedRowIndex = row.ID;
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

        this.shiftService.DeleteShiftDist(row.ID)
          .subscribe((res) => {
            this.getShiftDistribution(row.ShiftID);
          }, err => {
            console.log(err);

          });
        // this.subData.splice(this.subData.indexOf(row), 1);
        // this.dataSource.data = this.subData;
        // this.enableSubSaveButton();

      }
    });
  }

  definitionUpdateShiftTolerance(row) {
    this.selectedRowIndex2 = row.ID;
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: row, update: true, id: row.ID, vreadonly: false, screenName: this.screenName, sub: 'shiftTolerance', workingTypesCode: this.workingTypesCode },
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.getShiftTolerance(definition.ID);

    });
  }


  definitionUpdateShiftHoliday(row) {
    this.selectedRowIndexH = row.ID;
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: row, update: true, id: row.ID, vreadonly: false, screenName: this.screenName, sub: 'shiftHoliday', shiftHolidayTypes: this.shiftHolidayTypes, publicHolidays: this.publicHolidays },
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.getShiftHoliday(definition.ID);

    });
  }

  createShiftHoliday() {
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: {
        def: { ID: uuid.v4(), ShiftID: definition.ID }, screenName: this.screenName, vreadonly: false, update: false, id: 0,
        sub: 'shiftHoliday', shiftHolidayTypes: this.shiftHolidayTypes, publicHolidays: this.publicHolidays
      },
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {
        this.getShiftHoliday(definition.ID);

      }
    });
  }

  createShiftTolerance() {
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: {
        def: { ID: uuid.v4(), ShiftID: definition.ID, WorkingTypeID: 0 }, screenName: this.screenName, vreadonly: false, update: false, id: 0,
        sub: 'shiftTolerance', workingTypesCode: this.workingTypesCode
      },
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {
        this.getShiftTolerance(definition.ID);

      }
    });
  }

  getShiftTolerance(shiftId) {

    this.shiftService.GetShiftTolerance(shiftId)
      .subscribe((res: any[]) => {


        this.dataSourceT = new MatTableDataSource();
        this.dataSourceT.data = res;

      }, err => {
        console.log(err);

      });

  }


  getShiftHoliday(shiftId) {

    this.shiftService.GetShiftHoliday(shiftId)
      .subscribe((res: any[]) => {


        console.log(res);
        this.dataSourceH = new MatTableDataSource();
        this.dataSourceH.data = res;

      }, err => {
        console.log(err);

      });

  }


  saveShiftTolerance(def) {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.shiftService.PostShiftTolerance(def)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.getShiftTolerance(def.ShiftGroupID);
        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err);

      });
  }


  definitionDeleteShiftTolerance(row) {

    this.selectedRowIndex2 = row.ID;
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

        this.shiftService.DeleteShiftTolerance(row.ID)
          .subscribe((res) => {
            this.getShiftTolerance(row.ShiftID);

          }, err => {
            console.log(err);

          });
      }
    });
  }



  definitionDeleteShiftHoliday(row) {

    this.selectedRowIndexH = row.ID;
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

        this.shiftService.DeleteShiftHoliday(row.ID)
          .subscribe((res) => {
            this.getShiftHoliday(row.ShiftID);

          }, err => {
            console.log(err);

          });
      }
    });
  }


  createSubFreeShift() {
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    const locale = 'en-US';
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: { ID: uuid.v4(), ShiftID: definition.ID, WorkingTypeID: 0, State: '', DayTurningTime: definition.DayTurningTime }, screenName: this.screenName, vreadonly: (this.TimeLast == null ? false : true), update: false, id: 0, sub: 'freeShiftDist', workingTypesCode: this.workingTypesCode, freeShiftDistStatus: this.freeShiftDistStatus },
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.getFreeShiftDistribution(definition.ID);

    });

  }

  updateFreeDistibutionRow(row) {
    this.selectedRowIndex = row.ID;
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: row, update: true, id: row.id, vreadonly: true, screenName: this.screenName, sub: 'freeShiftDist', workingTypesCode: this.workingTypesCode, freeShiftDistStatus: this.freeShiftDistStatus },
      disableClose: true

    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.getFreeShiftDistribution(definition.ID);


    });
  }


  deleteFreeDistibutionRow(row) {
    this.selectedRowIndex = row.ID;
    const definition = this.form.value;
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
        this.shiftService.DeleteFreeShiftDist(row.ID)
          .subscribe((res) => {
            this.getFreeShiftDistribution(definition.ID);
          }, err => {
            console.log(err);

          });
      }
    });
  }




  createSubFreeShiftMeal() {
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    const locale = 'en-US';
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: { ID: uuid.v4(), ShiftID: definition.ID, WorkingTypeID: 0, DayTurningTime: definition.DayTurningTime }, screenName: this.screenName, vreadonly: (this.TimeLast == null ? false : true), update: false, id: 0, sub: 'freeShiftMeal', workingTypesCode: this.workingTypesCode },
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.getFreeShiftMeal(definition.ID);

    });
  }



  updateFreeMealRow(row) {
    this.selectedRowIndex = row.ID;
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: row, update: true, id: row.id, vreadonly: true, screenName: this.screenName, sub: 'freeShiftMeal', workingTypesCode: this.workingTypesCode },
      disableClose: true

    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.getFreeShiftMeal(definition.ID);


    });
  }

  deleteFreeMealRow(row) {
    this.selectedRowIndex = row.ID;
    const definition = this.form.value;
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
        this.shiftService.DeleteFreeShiftMeal(row.ID)
          .subscribe((res) => {
            this.getFreeShiftMeal(definition.ID);
          }, err => {
            console.log(err);

          });
      }
    });
  }

  createSubFreeShiftNight() {
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    const locale = 'en-US';
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: { ID: uuid.v4(), ShiftID: definition.ID, WorkingTypeID: 0, State: 0, DayTurningTime: definition.DayTurningTime }, screenName: this.screenName, vreadonly: (this.TimeLast == null ? false : true), update: false, id: 0, sub: 'freeShiftNight', workingTypesCode: this.workingTypesCode },
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {


      if (updatedDefinition)
        this.getFreeShiftNight(definition.ID);

    });
  }




  updateFreeNightRow(row) {
    this.selectedRowIndex = row.ID;
    this.createSubDefinitionV = true;
    const definition = this.form.value;
    this.dialog.open(SubShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: row, update: true, id: row.id, vreadonly: true, screenName: this.screenName, sub: 'freeShiftNight', workingTypesCode: this.workingTypesCode },
      disableClose: true

    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition)
        this.getFreeShiftNight(definition.ID);


    });
  }



  deleteFreeNightRow(row) {
    this.selectedRowIndex = row.ID;
    const definition = this.form.value;
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
        this.shiftService.DeleteFreeShiftNight(row.ID)
          .subscribe((res) => {
            this.getFreeShiftNight(definition.ID);
          }, err => {
            console.log(err);

          });
      }
    });
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



  GetEnums(type, code) {
    let data;
    this.definitionsService.GetEnums(type, code)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { kodu: res[key].Code, adi: res[key].Name };
          if (type === 'Type')
            this.workingTypesType.push(data);
          if (type === 'FreeShiftDistStatus')
            this.freeShiftDistStatus.push(data);
          if (type === 'Status')
            this.workingTypesStatus.push(data);
          if (type === 'TypeOfWeekHoliday')
            this.typeOfWeekHoliday.push(data);
          if (type === 'DayTurning')
            this.dayTurning.push(data);
          if (type === 'PublicHoliday')
            this.publicHolidays.push(data);
          if (type === 'ShiftTypes') {
            // this.dayTurning.push(data);
            this.shiftTypes.push(data);
            if (data.kodu !== '1') { this.shiftTypesExceptSerbest.push(data); }

          }


        });

      }, err => {
        console.log(err);

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


  updateData(obj) {

  }



  postShift(definition) {

    // definition.ID = 0;
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.shiftService.PostShift(definition)
      .subscribe((res) => {
        //  this.definitionGetShift(null);
        this.form.patchValue({ ID: res[0].ID })
        this.update = true;
        this.saveEnabled = false;
        this.changeDetectEvent.emit(false);
        this.enableSubSaveButton();
        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err);

      });

    // const definition = this.form.value;
    // definition.ID = 0;
    // if (this.form.value.Code === '' || this.form.value.Name === '') {
    //   this.waitProgress("Kod, ad ve tip alanları zorunludur.", 3000);
    //   return;
    // }

    // this.dialogRef.close(definition);
  }


  getTimeInterval(startTime, endTime) {
    var start = moment(startTime, "HH:mm");
    var end = moment(endTime, "HH:mm");
    var minutes = end.diff(start, 'minutes');
    var interval = moment().hour(0).minute(minutes);
    return interval.format("HH:mm");
  }


  updateDefinition() {
    const definition = this.form.value;
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