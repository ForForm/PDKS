import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, SimpleChanges, OnChanges, ViewChild, Optional, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LeaveRecordComponent } from './leave-record.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from '../../../static-data/aio-table-data';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFilter from '@iconify/icons-ic/filter-list';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import icSearch from '@iconify/icons-fa-solid/search';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icColumns from '@iconify/icons-fa-solid/columns';
import icCalculator from '@iconify/icons-fa-solid/calculator';
import { SelectionModel } from '@angular/cdk/collections';
import { stagger20ms } from '../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../@vex/animations/scale-fade-in.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import icClose from '@iconify/icons-ic/twotone-close';
import { PersonnelService } from '../services/personnel.service';
import { AttendanceService } from '../services/attendance.service';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icExcel from '@iconify/icons-fa-solid/file-excel';
import { AuthorizationService } from '../services/authorization.service';
import { LeavesService } from '../services/leaves.service';
import { DefinitionsService } from '../services/definitions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
// import { InOutColumnsComponent } from '../inout/inout-columns.component';
import { MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { LeaveDefinitionsComponent } from '../leaves/leave-definitions.component';
// import { InOutRecordComponent } from '../inout/inout-record.component';

import { untilDestroyed } from 'ngx-take-until-destroy';
import { debounceTime } from 'rxjs/operators';
// import { Personnel } from '../../pages/personnel/interfaces/personnel.interface';
import { WaitComponent } from '../wait/wait.component';

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
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
import { formatDate, Time } from "@angular/common";
import { Style, StyleService } from './../../../@vex/services/style.service';
import * as _moment from "moment";
import { MatStartDate } from '@angular/material/datepicker';
// import { ConsoleReporter } from 'jasmine';
// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';

const moment = _moment;


@Component({
  selector: 'leave',
  templateUrl: './leave.component.html',
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
// 
export class LeaveComponent<T> implements OnInit, OnChanges, OnDestroy {

  subFooter: boolean;
  language: any = []; languageMap: LanguageMap = {};
  layoutCtrl = new FormControl('fullwidth');
  columns: TableColumn<T>[];
  columnsLeave = ['ID', 'Photo', 'EmployeeID', 'EmployeeCode', 'EmployeeName', 'ReasonID', 'ReasonCode', 'ReasonName', 'StartDate', 'StartTime', 'Day', 'EndDate', 'WorkDate', 'EndTime', 'Description', 'CalcDescription', 'Actions'];
  icClose = icClose;
  links = [];
  subLinks = [];
  leaves = [];
  pageSize = 10;
  selectedRowIndex = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSourceEmp: MatTableDataSource<any> | null;
  dataSourceL: MatTableDataSource<any> | null;
  dataSourceLeave: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  selectionEmp = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  formFilter: FormGroup;
  formLeaveSave: FormGroup;
  FilteroObjEnableArray: boolean[] = [true];
  searchStr = this.searchCtrl.valueChanges;
  activeLinkIndex = 0;
  activeSubLinkIndex = 0;
  leavesRecordIndex = 0;
  tableData: any;
  calcDisabled = true;
  saveDisabled = true;
  // searchCtrl = new FormControl();
  // searchStr$ = this.searchCtrl.valueChanges.pipe(
  //   debounceTime(10)
  // );
  labels = aioTableLabels;

  icFilterList = icFilterList;
  icFilter = icFilter;
  icStar = icStar;
  icAdd = icAdd;
  icEdit = icEdit;
  icDeleteForever = icDeleteForever;
  icDelete = icDelete;
  icExcel = icExcel;
  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icColumns = icColumns;
  icCalculator = icCalculator;
  leaveRecordTypes = [];
  activeLeaveRecordType = 0;
  breadcrumbs: string[];
  href: string;
  pageauth = { write: false, delete: false, update: false };
  tabAuth: any[];
  selectedObject: string;
  Collarcolors = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild("leavePaginator", { static: false }) leavePaginator: MatPaginator;
  @ViewChild("empPaginator", { static: false }) empPaginator: MatPaginator;
  @ViewChild("empSort", { static: false }) empSort: MatSort;
  data: T[];
  dataD: T[];
  tableColumns: TableColumn<any>[] = [];
  visibleColumns: Array<keyof T | string>;
  result: string;
  updatePanelHidden = false;
  isMobileLayout = false;
  constructor(
    // @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    public personnelService: PersonnelService,
    public attendanceService: AttendanceService,
    public leavesService: LeavesService,
    private cd: ChangeDetectorRef,
    private styleService: StyleService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private adapter: DateAdapter<any>,
    location: Location) {


  }

  // ngAfterViewInit() {

  //   this.dataSourceEmp.paginator = this.empPaginator;
  //   this.dataSourceEmp.sort = this.empSort;
  // }


  controlDate(value) {

    let endDate = moment(value).format('YYYY-DD-MM');
    let startDate = this.formFilter.value.StartDate.format('YYYY-MM-DD');




    if (startDate > endDate) {
      this.openSnackBar("İlk tarih son tarihten büyük olamaz",1000);
      this.formFilter.patchValue({ EndDate: null });
    }

  }

  gotoSubTab(link) {
    this.activeSubLinkIndex = link.index;
    if (this.activeSubLinkIndex === 1)
      this.getLeave(this.leavesRecordIndex, this.formFilter.value.StartDate, this.formFilter.value.EndDate);
      if (this.activeSubLinkIndex === 0)
      this.getPersonnel();

  }

  gotoTab(link) {
    // this.fb.group= null;
    // this.formLeaveSave = null;
    this.activeSubLinkIndex=0;
    if (this.dataSourceLeave)
      this.dataSourceLeave.data = [];
    this.selectionEmp.clear();
    this.activeLinkIndex = link.index;
    // this.activeLeaveRecordType = 0;
    this.formLeaveSave.controls['Day'].clearValidators();
    let startDate = moment(new Date());
    let startDate1 = moment(new Date());
    let endDate = moment(new Date());
    startDate1.add(-10, 'days');

    if (link.index === 0) {

      // if (this.activeLeaveRecordType === 0)
      //   this.formLeaveSave = this.fb.group({
      //     EmployeeName: null, Surname: null, Type: null, EmployeeID: null, EmployeeCode: [null, Validators.required], ReasonID: null, ID: null,
      //     ReasonCode: [null, [Validators.required]], ReasonName: null, StartDate: [startDate, [Validators.required]],
      //     Day: null, Description: null, EndDate: [endDate, [Validators.required]], WorkDate: null, StartTime: '00:00', EndTime: '00:00', TotalTime: '00:00'
      //   });
      // else
      this.formLeaveSave = this.fb.group({
        EmployeeName: null, Surname: null, Type: null, EmployeeID: null, EmployeeCode: null, ReasonID: null, ID: null,
        ReasonCode: [null, [Validators.required]], ReasonName: null, StartDate: [startDate, [Validators.required]],
        Day: null, Description: null, EndDate: [endDate, [Validators.required]], WorkDate: null, StartTime: '00:00', EndTime: '00:00', TotalTime: '00:00'
      });

      this.leavesRecordIndex = this.activeLinkIndex; this.updatePanelHidden = false;
      this.formLeaveSave.controls['Day'].setValidators([Validators.required]);

    }
    else if (link.index === 1) {
      this.formLeaveSave = this.fb.group({
        EmployeeName: null, Surname: null, Type: null, EmployeeID: null, EmployeeCode: null, ReasonID: null, ID: null,
        ReasonCode: [null, [Validators.required]], ReasonName: null, StartDate: [startDate, [Validators.required]],
        Day: null, Description: null, EndDate: null, StartTime: ['00:00', [Validators.required]], EndTime: ['00:00', [Validators.required]], TotalTime: '00:00'
      });

      this.leavesRecordIndex = this.activeLinkIndex; this.updatePanelHidden = false;
    }



    // this.formLeaveSave.patchValue({ Izin: null, EmployeeID: null, Code: null, IzinDesc: null, StartDate: null, Day: null, EndDate: null, StartTime: null, EndTime: null, TotalTime: null, Description: null, Name: null, Surname: null });
    this.selection.clear();
    this.dataSourceL = null;
    this.formLeaveSave.controls['Day'].updateValueAndValidity();



  }

  onBlurMethod(type, value2) {

    const value1 = (type == 'Emp' ? this.formFilter.value.Emp1 : (type == 'EmpType' ? this.formFilter.value.EmpType1 : (type == 'Depart' ? this.formFilter.value.Depart1 : (type == 'Cost' ? this.formFilter.value.Cost1 : (type == 'Cadre' ? this.formFilter.value.Cadre1 : (type == 'Prof' ? this.formFilter.value.Prof1 : (type == 'Task' ? this.formFilter.value.Task1 : (type == 'Group' ? this.formFilter.value.Group1 : (type == 'Unit' ? this.formFilter.value.Unit1 : (type == 'Branch' ? this.formFilter.value.Branch1 : (type == 'Service' ? this.formFilter.value.Service1 : '')))))))))));

    console.log(value1);
    if (value2 < value1)
      this.openSnackBar("İlk değer son değerden büyük olamaz",2000);
  }

  radioChange(type) {

    if (this.dataSourceLeave)
      this.dataSourceLeave.data = [];

    this.activeLeaveRecordType = type;

    // console.log(this.activeLeaveRecordType);

    this.selectionEmp.clear();
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    this.formLeaveSave.reset();
    this.formLeaveSave.patchValue({ 'StartDate': startDate, 'EndDate': endDate });
    this.formLeaveSave.controls['EmployeeCode'].clearValidators()
    if (this.activeLeaveRecordType === 0)
      this.formLeaveSave.controls['EmployeeCode'].setValidators([Validators.required]);
    this.formLeaveSave.controls['EmployeeCode'].updateValueAndValidity();
    this.getLeaves(this.leavesRecordIndex, 0, this.formFilter.value.StartDate1, this.formFilter.value.EndDate1);
  }

  ngOnInit() {


    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;

    this.route.paramMap.subscribe(params => {
      this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
      let startDate = moment(new Date());
      let startDate1 = moment(new Date());
      let endDate = moment(new Date());

      startDate1.add(-10, 'days');
      // this.formFilter = this.fb.group({ StartDate1: startDate1, EndDate1: endDate });

      this.formFilter = this.fb.group({
        EmpId1: null, EmpId2: null, Emp1: null, Emp2: null, EmpType1: null, EmpType2: null, Depart1: null, Depart2: null, Cost1: null, Cost2: null, Cadre1: null, Cadre2: null, Prof1: null, Prof2: null,
        Task1: null, Task2: null, Group1: null, Group2: null, Unit1: null, Unit2: null, Branch1: null, Branch2: null, Service1: null, Service2: null, Collar1: null, Collar2: null, Value: null,
        Type: null, StartDate: [startDate, Validators.required], EndDate: [endDate, Validators.required]

      });

      this.formLeaveSave = this.fb.group({
        EmployeeName: null, Surname: null, Type: null, EmployeeID: null, EmployeeCode: null, ReasonID: null, ID: null,
        ReasonCode: [null, [Validators.required]], ReasonName: null, StartDate: [startDate, [Validators.required]],
        Day: null, Description: null, EndDate: [endDate, [Validators.required]], WorkDate: null, StartTime: '00:00', EndTime: '00:00', TotalTime: '00:00'
      });

      this.turkishCulture();
      this.href = this.router.url;
      this.getUser(JSON.parse(localStorage.getItem('Username')), this.href.replace(/\//g, '@'));
      this.languageMap = AppUtil.getLabels();
      let tabs = [
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'İzinler Günlük İzin Girişleri' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'İzinler Saatlik İzin Girişleri' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'İzinler İzin Kayıtları' }
      ]
      this.getUserTabs(tabs);

      this.subLinks.push({ index: 0, name: this.languageMap['Kayıt'].labelName });
      this.subLinks.push({ index: 1, name: this.languageMap['Kayıt Düzeltme'].labelName });

      this.leaves = [{ Name: 'Hepsi', Label: this.languageMap['Hepsi'].labelName, Checked: true },
      { Name: 'Günlük İzinler', Label: this.languageMap['Günlük İzinler'].labelName, Checked: false },
      { Name: 'Saatlik İzinler', Label: this.languageMap['Saatlik İzinler'].labelName, Checked: false }];
      this.personnelGetFilterColumns();
      this.getPersonnel();
      // this.getLeaves(this.leavesRecordIndex, 0, this.formFilter.value.StartDate1, this.formFilter.value.EndDate1);
      this.breadcrumbs = [this.languageMap['İzinler'].labelName, this.languageMap['İzin İşlemleri'].labelName, ''];
      this.leaveRecordTypes = [{ LeaveRecordType: 0, Label: this.languageMap['Kişisel İzin Giriş'].labelName, Checked: false },
      { LeaveRecordType: 1, Label: this.languageMap['Toplu İzin Giriş'].labelName, Checked: true }];

      for (let index = 0; index < 15; index++)
        this.FilteroObjEnableArray[index] = true;

    });

  }


  getLeave(type, begin, end) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });




    this.dataSourceLeave = null;
    let obj = this.formFilter.value;
    obj.Type = type;

    console.log(obj);
    this.leavesService.GetLeave(obj)
      .subscribe((res: any[]) => {

        this.dataSourceLeave = new MatTableDataSource();
        this.dataSourceLeave.data = res;
        this.dataSourceLeave.paginator = this.leavePaginator;

        // this.dataSource = new MatTableDataSource();
        // this.dataSource.data = res;
        // this.dataSource.paginator = this.usrPaginator;
        // this.employeeInfo = null;
        // if (this.formSearch.value.Search !== null)
        //   this.applyFilter(this.formSearch.value.Search);

        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err);
      });
  }

  ClearPFilter() {
    this.formFilter.reset();
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    startDate.add(-10, 'days');
    this.formFilter.patchValue({ StartDate: startDate, EndDate: endDate });
    // this.dataSource = null;
    // this.footerHide = true;

  }

  openSnackBar(message,dur) {

    console.log(message);
    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'],
      duration: dur,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    };
    // let config = new MatSnackBarConfig();
    // config.verticalPosition = 'top'; config.horizontalPosition = 'center';
    // config.panelClass = ['mat-toolbar', 'mat-primary', 'success-snackbar'] 
    this.snackbar.openFromComponent(InfoComponent, {
      data: { temp: message, close: this.languageMap['Kapat'].labelName }, ...configSuccess
    });


  }

  CalculateLeaves(obj) {

    this.leavesService.CalculateLeaves(obj)
      .subscribe((res: any[]) => {

        console.log(res);
        let errors = ''; let say = 0;
        for (var i = 0, len = res.length; i < len; i++) {
          if (res[i].Statu !== 'OK') {
            say++;
            errors += res[i].EmployeeCode + " " + this.languageMap[res[i].ErrorDesc].labelName + '\n';
            // if (say == 5) { errors += '....'; break; }
            this.saveDisabled = true;
          }
          else {
            this.formLeaveSave.patchValue({ EndDate: res[i].EndDate, Day: res[i].Day, WorkDate: res[i].WorkDate });
            this.saveDisabled = false;
          }
        }

        console.log(this.formLeaveSave);
        console.log(this.saveDisabled);

        if (errors !== '') {
          this.openSnackBar(errors.substring(0, errors.length - 1),3000);
          // this.waitProgress(errors.substring(0, errors.length - 1), 500000);
          // this.saveDisabled = true;
        }

        // if (errors !== '')
        //   this.waitProgress(errors.substring(0, errors.length - 1) + ' nolu personel' + (say > 1 ? '(ler)' : '') + ' için hata oluştu...', 3000);


        // this.dataSourceLeave = new MatTableDataSource();
        // this.dataSourceLeave.data = res;
        // this.dataSourceLeave.paginator = this.leavePaginator;
        // this.calcDisabled = true;
        // this.saveDisabled = false;

      }, err => {
        console.log(err);

      });

  }

  calculateTotalDay() {

    // debugger;

    // if (this.formLeaveSave.value.ID>0) return;

    this.calcDisabled = false; this.saveDisabled = true;

    let startDate = moment(this.formLeaveSave.value.StartDate);
    // let endDate = moment(this.formLeaveSave.value.StartDate);
    // endDate.add(this.formLeaveSave.value.Day, 'days');
    let tableD: any = [];

    // if (this.activeLeaveRecordType == 0) {
    //   let obj: any = {
    //     Type: this.activeLinkIndex , Username: JSON.parse(sessionStorage.getItem('Username')),
    //     CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), 
    //     ID: this.formLeaveSave.value.ID,
    //     EmployeeID: this.formLeaveSave.value.EmployeeID,
    //     ReasonID: this.formLeaveSave.value.ReasonID,
    //     StartDate: this.formLeaveSave.value.StartDate, StartTime: this.formLeaveSave.value.StartTime, 
    //     Day: this.formLeaveSave.value.Day, EndDate: null, EndTime: this.formLeaveSave.value.EndTime,
    //     Description: this.formLeaveSave.value.Description,TotalTime:this.formLeaveSave.value.TotalTime
    //   };
    //   tableD.push(obj);
    // } else if (this.activeLeaveRecordType == 1) {

    for (var i = 0, len = this.selectionEmp.selected.length; i < len; i++) {
      let obj: any = {
        Type: this.activeLinkIndex,
        Username: JSON.parse(sessionStorage.getItem('Username')),
        CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')),
        ID: this.formLeaveSave.value.ID,
        EmployeeID: this.selectionEmp.selected[i].ID,
        ReasonID: this.formLeaveSave.value.ReasonID,
        StartDate: this.formLeaveSave.value.StartDate, StartTime: this.formLeaveSave.value.StartTime,
        Day: this.formLeaveSave.value.Day, EndDate: null, EndTime: this.formLeaveSave.value.EndTime,
        Description: this.formLeaveSave.value.Description, TotalTime: this.formLeaveSave.value.TotalTime
      };
      tableD.push(obj);
    }
    // }

    this.CalculateLeaves(tableD);

    // let endDate = moment(this.formLeaveSave.value.StartDate);
    // let startDate = moment(this.formLeaveSave.value.StartDate);
    // endDate.add(this.formLeaveSave.value.Day, 'days').toDate();
    // this.formLeaveSave.patchValue({ EndDate: endDate.format("YYYY-MM-DDT00:00:00"), StartDate: startDate.format("YYYY-MM-DDT00:00:00") });
  }


  PostLeave() {

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);


    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    let objArray: any = [];
    // if (this.activeLinkIndex === 2) {
    //   let obj: any = this.formLeaveSave.value;
    //   obj.Username = JSON.parse(sessionStorage.getItem('Username'));
    //   obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    //   // obj.ReasonCode = this.formLeaveSave.value.Izin;
    //   objArray.push(obj)
    // }
    // else {

    //   if (this.activeLeaveRecordType == 0) {
    //     let obj: any = this.formLeaveSave.value;
    //     console.log(obj);
    //     obj.Username = JSON.parse(sessionStorage.getItem('Username'));
    //     obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'))
    //     obj.Type = this.activeLinkIndex;
    //     objArray.push(obj);
    //   }
    //   else {

    //     if (this.selectionEmp.selected.length === 0) {
    //       this.waitProgress("Personel seçimi gereklidir.", 3000);
    //       dialogRef.close();
    //       return;
    //     }

    for (var i = 0, len = this.selectionEmp.selected.length; i < len; i++) {
      let obj: any = { Type: this.leavesRecordIndex, Username: JSON.parse(sessionStorage.getItem('Username')), CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), EmployeeID: this.selectionEmp.selected[i].ID, EmployeeCode: this.selectionEmp.selected[i].EmployeeCode, Name: this.selectionEmp.selected[i].Name, Surname: this.selectionEmp.selected[i].Surname, ReasonID: this.formLeaveSave.value.ReasonID, ReasonCode: this.formLeaveSave.value.ReasonCode, ReasonName: this.formLeaveSave.value.ReasonName, StartDate: this.formLeaveSave.value.StartDate, StartTime: this.formLeaveSave.value.StartTime, Day: this.formLeaveSave.value.Day, EndDate: this.formLeaveSave.value.EndDate, WorkDate: this.formLeaveSave.value.WorkDate, EndTime: this.formLeaveSave.value.EndTime, Description: this.formLeaveSave.value.Description };
      objArray.push(obj);
    }

    //   }
    // }

    this.leavesService.PostLeaves(objArray)
      .subscribe((res: any[]) => {
        this.formLeaveSave.patchValue({ Type: null, ReasonCode: null, ReasonName: null, StartDate: null, Day: null, EndDate: null, StartTime: null, EndTime: null, TotalTime: null, Description: null });
        this.selection.clear();
        // if (this.activeLeaveRecordType == 0)
        //   this.getLeavesEmployee(this.leavesRecordIndex, 0, this.formFilter.value.StartDate1, this.formFilter.value.EndDate1, this.formLeaveSave.value.EmployeeCode);
        // else
        //   this.getLeaves(this.leavesRecordIndex, 0, this.formFilter.value.StartDate1, this.formFilter.value.EndDate1);
        // this.updatePanelHidden = true;
        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();

      });
  }

  getLeaves(type, Id, StartDate, EndDate) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    let startDate = moment(StartDate).format('YYYY-MM-DD');
    let endDate = moment(EndDate).format('YYYY-MM-DD');

    this.leavesService.GetLeaves(type, Id, startDate, endDate)
      .subscribe((res: any[]) => {
        this.dataSourceLeave = new MatTableDataSource();
        this.dataSourceLeave.data = res;
        this.dataSourceLeave.paginator = this.leavePaginator;
        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  getLeavesEmployee(type, Id, StartDate, EndDate, EmployeeCode) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    let startDate = moment(StartDate).format('YYYY-MM-DD');
    let endDate = moment(EndDate).format('YYYY-MM-DD');

    this.leavesService.GetLeavesEmployee(type, Id, startDate, endDate, EmployeeCode)
      .subscribe((res: any[]) => {
        console.log(res);
        this.dataSourceLeave = new MatTableDataSource();
        this.dataSourceLeave.data = res;
        this.dataSourceLeave.paginator = this.leavePaginator;
        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  LeaveControl() {

    if (this.formLeaveSave.invalid)
      return;

    // console.log();

    let startDate = moment(this.formLeaveSave.value.StartDate);
    let endDate = moment(this.formLeaveSave.value.StartDate);
    endDate.add(this.formLeaveSave.value.Day, 'days');
    let tableD: any = [];
    for (var i = 0, len = this.selectionEmp.selected.length; i < len; i++) {
      let obj: any = { Type: this.leavesRecordIndex + 1, Username: JSON.parse(sessionStorage.getItem('Username')), CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), ID: this.selectionEmp.selected[i].ID, EmployeeCode: this.selectionEmp.selected[i].EmployeeCode, Name: this.selectionEmp.selected[i].Name, Surname: this.selectionEmp.selected[i].Surname, ReasonCode: this.formLeaveSave.value.ReasonCode, ReasonName: this.formLeaveSave.value.ReasonName, StartDate: this.formLeaveSave.value.StartDate, StartTime: this.formLeaveSave.value.StartTime, Day: this.formLeaveSave.value.Day, EndDate: endDate, EndTime: this.formLeaveSave.value.EndTime, Description: this.formLeaveSave.value.Description };
      tableD.push(obj);
    }
    this.CalculateLeaves(tableD);


    // let startDate = moment(this.formLeaveSave.value.StartDate);
    // let endDate = moment(this.formLeaveSave.value.StartDate);
    // endDate.add(this.formLeaveSave.value.Day, 'days');
    // let tableD: any = [];
    // for (var i = 0, len = this.dataSourceL.data.length; i < len; i++) {
    //   let obj: any = { Type: this.leavesRecordIndex + 1, Username: JSON.parse(sessionStorage.getItem('Username')), CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), ID: this.dataSourceL.data[i].ID, Code: this.dataSourceL.data[i].Code, Name: this.dataSourceL.data[i].Name, Surname: this.dataSourceL.data[i].Surname, ReasonCode: this.formLeaveSave.value.ReasonCode, ReasonName: this.formLeaveSave.value.ReasonName, StartDate: this.formLeaveSave.value.StartDate, StartTime: this.formLeaveSave.value.StartTime, Day: this.formLeaveSave.value.Day, EndDate: endDate, EndTime: this.formLeaveSave.value.EndTime, Description: this.formLeaveSave.value.Description };
    //   tableD.push(obj);
    // }
    // this.CalculateLeaves(tableD);

  }


  detailToggle(row) {
    this.selectionEmp.toggle(row);
    // this.SetDailyPermitsGrid(this.selection.selected);
  }


  masterToggle() {


    console.log(this.isAllSelected);
    this.isAllSelected() ?
      this.selectionEmp.clear() :
      this.dataSourceEmp.data.forEach(row => this.selectionEmp.select(row));
    // this.SetDailyPermitsGrid(this.selection.selected);
  }


  isAllSelected() {
    const numSelected = this.selectionEmp.selected.length;
    const numRows = this.dataSourceEmp.data.length;
    return numSelected === numRows;
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.visibleColumns = this.columns.map(column => column.property);
    }

    if (changes.data) {

      this.dataSourceEmp = new MatTableDataSource();
      this.dataSourceEmp.data = this.data;
      this.dataSourceEmp.paginator = this.empPaginator;
      this.dataSourceEmp.sort= this.empSort;

      this.dataSourceLeave.data = this.data;
      this.dataSourceLeave.paginator = this.leavePaginator;
    }

    if (changes.searchStr) {
      this.dataSourceEmp.filter = (this.searchStr || '').toString().trim().toLowerCase();
    }

    // this.dataSourceEmp.sort = this.sort;

  }

  getUser(userCode, route) {

    this.authorizationService.GetUser(userCode, route)
      .subscribe((res) => {
        this.pageauth.write = res[0].write;
        this.pageauth.update = res[0].update;
        this.pageauth.delete = res[0].delete;
      }, err => {
        console.log(err);

      });

  }

  getUserTabs(tabs) {
    this.authorizationService.GetUserTabs(tabs)
      .subscribe((res: any[]) => {
        this.tabAuth = res;
        Object.keys(this.tabAuth).forEach((key) => {
          if (this.tabAuth[key].read)
            if (!this.isMobileLayout)
              this.links.push({ index: Number(key), name: this.tabAuth[key].tabname.replace("İzinler ", "") });
            else
              this.links.push({ index: Number(key), name: this.tabAuth[key].tabname.replace("İzinler ", "").replace(" Girişleri", "ler") });
        });

      }, err => {
        console.log(err);

      });
  }






  getLeaveType(type) {
    if (type === 'Hepsi') this.leavesRecordIndex = 0; else if (type === 'Günlük İzinler') this.leavesRecordIndex = 1; else { this.leavesRecordIndex = 2; }
    // this.updatePanelHidden=true;
    // this.formLeaveSave.reset();
    this.getLeaves(this.leavesRecordIndex, 0, this.formFilter.value.StartDate1, this.formFilter.value.EndDate1);
    // console.log(this.leavesRecordIndex);
  }


  selectLeaveRow(row) {
    this.updatePanelHidden = false;
    this.selectedRowIndex = row.ID;
    this.selectionEmp.isSelected(row);
    this.detailToggleLeave(row);

  }
  deleteLeave(row) {
    this.openDialog(row.ID);
  }

  openDialog(ID) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: this.languageMap['İzin bilgisi silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        this.deleteLeaveID(ID);

      }
    });
  }

  deleteLeaveID(Id) {

    this.leavesService.DeleteLeaves(Id)
      .subscribe((res: any[]) => {
        this.getLeaves(this.leavesRecordIndex, 0, this.formFilter.value.StartDate1, this.formFilter.value.EndDate1);
      });


  }


  textSelected(name) {
    this.selectedObject = name;
  }


  waitProgress(message, timer) {
    this.snackbar.dismiss();
    let config = new MatSnackBarConfig();
    if (timer !== undefined) {
      { config.duration = timer; config.verticalPosition = 'top'; config.horizontalPosition = 'center' }
    }
    config.panelClass = ['mat-toolbar', 'mat-primary', 'success-snackbar']
    this.snackbar.open(message, "", config);


  }

  waitProgressDismiss() {
    this.snackbar.dismiss();
  }


  turkishCulture() {
    this.adapter.setLocale("tr");
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceEmp.filter = filterValue;
  }

  applyFilter2(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceLeave.filter = filterValue;
  }








  personnelGetFilterColumns() {

    // EmployeetypeID
    let selectedColumns = [];
    this.personnelService.PersonnelGetFilterColumns('BAS_Employee')
      .subscribe((res) => {

        const arr: any = res;
        arr.forEach(element => {
          if (element.Active && element.ColumnName === 'Photo') {
            const dataType = 'image';
            const data = { label: element.Label, property: element.ColumnName, type: dataType, cssClasses: ['font-medium'] };
            selectedColumns.push(data);
          }
        });

        selectedColumns.push({ label: 'Seç', property: 'select', type: 'checkbox', cssClasses: ['font-medium'] });

        arr.forEach(element => {
          if (element.Active) {
            if (element.ColumnName === 'Photo') return;
            // const dataType=(element.DATA_TYPE==='datetime'?'date':(element.DATA_TYPE==='bit'?'checkbox':(element.ColumnName==='Photo'?'image':(element.ColumnName==='Chief'?'button':'text'))));
            const dataType = (element.DATA_TYPE === 'datetime' ? 'date' : (element.ColumnName === 'Chief' ? 'button' : (element.ColumnName === 'Photo' ? 'image' : (element.DATA_TYPE === 'bit' ? 'checkbox' : 'text'))));
            const data = { label: element.Label, property: element.ColumnName, type: dataType, cssClasses: ['font-medium'] };
            selectedColumns.push(data);
          }
        });


        this.columns = selectedColumns;
        this.visibleColumns = selectedColumns.map(column => column.property);
      }, err => {
        console.log(err);

      });
  }

  getPersonnel() {

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    // this.waitProgress(this.languageMap['İşlem yapılıyor. Lütfen Bekleyiniz...'].labelName, undefined);
    this.personnelService.GetPersonnel(null)
      .subscribe((res: any[]) => {
        this.dataSourceEmp = new MatTableDataSource();
        this.dataSourceEmp.data = res;
        this.dataSourceEmp.paginator = this.empPaginator;
        this.dataSourceEmp.sort= this.empSort;
        // this.tableData =res;
        dialogRef.close();
        // this.waitProgressDismiss();
      }, err => {
        dialogRef.close();
        console.log(err);
        // this.waitProgress(err, 3000);
      });
  }

  filterLeaves() {
    // this.getLeaves(this.leavesRecordIndex, 0, this.formFilter.value.StartDate, this.formFilter.value.EndDate);
    this.getLeave(this.leavesRecordIndex, this.formFilter.value.StartDate, this.formFilter.value.EndDate);

  }


   updateLeave(row) {

  //   // this.selectedRowIndex3=row.ID;
    this.dialog.open(LeaveRecordComponent, {
      data: { NewRecord: false, Data: row },
      panelClass: 'myapp-no-padding-dialog',
      disableClose: false,
      autoFocus: true,
      width: '600px',
    }).afterClosed().subscribe(result => {
      // if (result)
      this.getLeave(this.leavesRecordIndex, this.formFilter.value.StartDate, this.formFilter.value.EndDate);
    });
   }


  openDefinition(value, obj) {
    this.dialog.open(LeaveDefinitionsComponent, {
      panelClass: 'listClass',
      data: { Type: value, Data: { ID: null, EmployeeCode: null, Name: null } },
      disableClose: false,
      width: '450px',
      height: '600px'
    }).afterClosed().subscribe(result => {


      if (value == '13') {
        if (result !== undefined) {
          if (obj == 1)
            this.formLeaveSave.patchValue({ ReasonID: result.ID, ReasonCode: result.Code, ReasonName: result.Name });
          this.calcDisabled = false;
          this.saveDisabled = true;
        }
      }

      if (value == '0') {

        if (result !== undefined) {
          // this.formLeaveSave.reset();
          // let startDate = moment(new Date());
          // let endDate = moment(new Date());
          // this.formLeaveSave.patchValue({ EmployeeID: result.ID, EmployeeCode: result.Code, EmployeeName: result.Name, StartDate: startDate, EndDate: endDate });
          // this.getLeavesEmployee(this.leavesRecordIndex, 0, this.formFilter.value.StartDate1, this.formFilter.value.EndDate1, this.formLeaveSave.value.EmployeeCode);

          if (obj == 1) { this.formFilter.patchValue({ Emp1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[0] = false; else this.FilteroObjEnableArray[0] = true; }
          else {

            if (result.Code < this.formFilter.value.Emp1)
              this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
            this.formFilter.patchValue({ Emp2: result.Code });
          }
        }
      }


      // if (value == '15') {
      //   if (result !== undefined) {
      //     if (obj == 1) { this.formFilter.patchValue({ Emp1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[0] = false; else this.FilteroObjEnableArray[0] = true; }
      //     else {

      //       if (result.Code < this.formFilter.value.Emp1)
      //         this.openSnackBar("İlk değer son değerden büyük olamaz");
      //       this.formFilter.patchValue({ Emp2: result.Code });
      //     }
      //   }
      // }

      if (value == '3') {
        if (obj == 1) { this.formFilter.patchValue({ EmpType1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[3] = false; else this.FilteroObjEnableArray[3] = true; }
        else {
          if (result.Code < this.formFilter.value.EmpType1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ EmpType2: result.Code });
        }
      }

      if (value == '1') {
        if (obj == 1) { this.formFilter.patchValue({ Depart1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[1] = false; else this.FilteroObjEnableArray[1] = true; }
        else {
          if (result.Code < this.formFilter.value.Depart1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ Depart2: result.Code });
        }
      }
      if (value == '4') {
        if (obj == 1) { this.formFilter.patchValue({ Cost1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[4] = false; else this.FilteroObjEnableArray[4] = true; }
        else {
          if (result.Code < this.formFilter.value.Cost1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ Cost2: result.Code });
        }
      }
      if (value == '5') {
        if (obj == 1) { this.formFilter.patchValue({ Cadre1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[5] = false; else this.FilteroObjEnableArray[5] = true; }
        else {
          if (result.Code < this.formFilter.value.Cadre1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ Cadre2: result.Code });
        }
      }
      if (value == '6') {
        if (obj == 1) { this.formFilter.patchValue({ Prof1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[6] = false; else this.FilteroObjEnableArray[6] = true; }
        else {
          if (result.Code < this.formFilter.value.Prof1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ Prof2: result.Code });
        }
      }

      if (value == '7') {
        if (obj == 1) { this.formFilter.patchValue({ Task1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[7] = false; else this.FilteroObjEnableArray[7] = true; }
        else {
          if (result.Code < this.formFilter.value.Task1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ Task2: result.Code });
        }
      }

      if (value == '8') {
        if (obj == 1) { this.formFilter.patchValue({ Group1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[8] = false; else this.FilteroObjEnableArray[8] = true; }
        else {
          if (result.Code < this.formFilter.value.Group1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ Group2: result.Code });
        }
      }

      if (value == '9') {
        if (obj == 1) { this.formFilter.patchValue({ Unit1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[9] = false; else this.FilteroObjEnableArray[9] = true; }
        else {
          if (result.Code < this.formFilter.value.Unit1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ Unit2: result.Code });
        }
      }

      if (value == '10') {
        if (obj == 1) { this.formFilter.patchValue({ Branch1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[10] = false; else this.FilteroObjEnableArray[10] = true; }
        else {
          if (result.Code < this.formFilter.value.Branch1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ Branch2: result.Code });
        }
      }

      if (value == '11') {
        if (obj == 1) { this.formFilter.patchValue({ Service1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[11] = false; else this.FilteroObjEnableArray[11] = true; }
        else {
          if (result.Code < this.formFilter.value.Service1)
            this.openSnackBar("İlk değer son değerden büyük olamaz",1000);
          this.formFilter.patchValue({ Service2: result.Code });
        }
      }

      if (value == '12') {
        if (obj == 1) { this.formFilter.patchValue({ Gomlek1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[12] = false; else this.FilteroObjEnableArray[12] = true; }

        this.formFilter.patchValue({ Gomlek2: result.Code });

      }

    });
  }

  getTimeInterval(startTime, endTime) {
    var start = moment(startTime, "HH:mm");
    var end = moment(endTime, "HH:mm");
    var minutes = end.diff(start, 'minutes');
    var interval = moment().hour(0).minute(minutes);
    return interval.format("HH:mm");
  }

  controlTimes() {
    
    let start = moment(this.formLeaveSave.value.StartTime, 'HH:mm');
    let end = moment(this.formLeaveSave.value.EndTime, 'HH:mm');

    if (start>end && this.formLeaveSave.value.EndTime!=='00:00')
     {this.openSnackBar("İlk değer son değerden büyük olamaz",1000); this.saveDisabled = true; return;}
 
  }

  calculateTotalTime() {
    this.calcDisabled = false; this.saveDisabled = true;
    let start = moment(this.formLeaveSave.value.StartTime, 'HH:mm');
    let end = moment(this.formLeaveSave.value.EndTime, 'HH:mm');

    if (start>end)
     {this.openSnackBar("İlk değer son değerden büyük olamaz",1000);  return;}

    // let sure = this.getTimeInterval(start, end).replace(':', '');
    this.formLeaveSave.patchValue({ TotalTime: this.getTimeInterval(start, end) });

    if (this.formLeaveSave.value.StartTime != null && this.formLeaveSave.value.EndTime != null)
      this.calculateTotalDay();
  }






  // Filter() {

  //   if (this.form.invalid) {
  //     return;
  //   }
  // }




  SetDailyPermitsGrid(dailySelected) {

    let tableD: any = [];
    for (var i = 0, len = dailySelected.length; i < len; i++) {
      let obj: any = { ID: dailySelected[i].ID, Photo: dailySelected[i].Photo, EmployeeCode: dailySelected[i].EmployeeCode, Name: dailySelected[i].Name, Surname: dailySelected[i].Surname, ReasonCode: '', ReasonName: '', StartDate: null, Day: 0, EndDate: null };
      tableD.push(obj);
    }

    this.dataSourceL = new MatTableDataSource();
    this.dataSourceL.data = tableD;
    this.calcDisabled = false;
    this.saveDisabled = true;

  }



  isAllSelectedL() {
    const numSelected = this.selectionEmp.selected.length;
    const numRows = this.dataSourceLeave.data.length;
    return numSelected === numRows;
  }


  detailToggleLeave(row) {
    const locale = 'en-US';

    this.selectionEmp.clear();
    this.selectionEmp.toggle(row);
    this.activeLeaveRecordType = 0;
    if (row.Type === 0) {

      this.formLeaveSave.patchValue({
        EmployeeName: row.EmployeeName,
        Surname: row.Surname,
        Type: row.Type, EmployeeID:
          row.EmployeeID, EmployeeCode: row.EmployeeCode,
        ReasonID: row.ReasonID, ID: row.ID, ReasonCode: row.ReasonCode, ReasonName: row.ReasonName, StartDate: row.StartDate,
        Day: row.Day,
        EndDate: row.EndDate,
        WorkDate: row.WorkDate, Description: row.Description
      });
    }
    else {
      this.formLeaveSave.patchValue({
        EmployeeName: row.EmployeeName,
        Surname: row.Surname,
        Type: row.Type, EmployeeID: row.EmployeeID, EmployeeCode: row.EmployeeCode, ReasonID: row.ReasonID, ID: row.ID, ReasonCode: row.ReasonCode, ReasonName: row.ReasonName, StartDate: row.StartDate,
        StartTime: formatDate(row.StartTime, 'HH:mm', locale), Day: row.Day,
        EndDate: row.EndDate,
        EndTime: formatDate(row.EndTime, 'HH:mm', locale),
        WorkDate: row.WorkDate, Description: row.Description
      });
      let start = moment(this.formLeaveSave.value.StartTime, 'HH:mm');
      let end = moment(this.formLeaveSave.value.EndTime, 'HH:mm');
      this.formLeaveSave.patchValue({ TotalTime: this.getTimeInterval(start, end) });
    }
  }


  masterToggleL() {
    this.isAllSelected() ?
      this.selectionEmp.clear() :
      this.dataSourceLeave.data.forEach(row => this.selectionEmp.select(row));
    // this.SetDailyPermitsGrid(this.selection.selected);
  }





  onFilterChange(value: string) {
    if (!this.dataSourceEmp) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSourceEmp.filter = value;
  }



  ngOnDestroy() {
  }
}



@Component({
  selector: 'roundings',
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

export class DemoDialogComponent {

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent>,
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