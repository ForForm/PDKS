import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, SimpleChanges, OnChanges, ViewChild, Optional, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
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
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icColumns from '@iconify/icons-fa-solid/columns';
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
import icExcel from '@iconify/icons-fa-solid/file-excel';
import { AuthorizationService } from '../services/authorization.service';
import { ParamsService } from './../../../../src/app/pages/services/params.service';
import { DefinitionsService } from '../services/definitions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { AttendanceColumnsComponent } from '../attendance/attendance-columns.component';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { AttendanceDefinitionsComponent } from '../attendance/attendance-definitions.component';
import { AttendanceRecordComponent } from '../attendance/attendance-record.component';
import { WaitComponent } from '../wait/wait.component';
import { LayoutService } from './../../../@vex/services/layout.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { debounceTime } from 'rxjs/operators';
// import { Personnel } from '../../pages/personnel/interfaces/personnel.interface';

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


import * as _moment from "moment";
// import { ConsoleReporter } from 'jasmine';
// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';

const moment = _moment;


@Component({
  selector: 'attendance',
  templateUrl: './attendance.component.html',
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
// 
export class AttendanceComponent<T> implements OnInit, OnChanges, OnDestroy {

  selectedRow = 0;
  language: any = []; languageMap: LanguageMap = {};
  layoutCtrl = new FormControl('boxed');
  attendanceType = [];
  radioValue = 0;
  // @Input() columns= ['Checkbox','ID','Code','Name','StartDate'];
  columns: TableColumn<T>[];
  icClose = icClose;
  filterHide = false;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  form: FormGroup;
  formSearch: FormGroup;
  searchStr = this.searchCtrl.valueChanges;
  labels = aioTableLabels;

  subFooter: boolean;
  icFilterList = icFilterList;
  icFilter = icFilter;
  icStar = icStar;
  icAdd = icAdd;
  icEdit = icEdit;
  icDeleteForever = icDeleteForever;
  icExcel = icExcel;
  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icMoreHoriz = icMoreHoriz;
  icColumns = icColumns;
  breadcrumbs: string[];
  href: string;
  pageauth = { write: false, delete: false, update: false };
  selectedObject: string;
  Collarcolors = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];
  @ViewChild("usrPaginator", { static: false }) usrPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  data: T[];
  tableColumns: TableColumn<any>[] = [];
  visibleColumns: Array<keyof T | string>;
  result: string;
  isMobileLayout = false;
  employeeInfo: any;
  FilteroObjEnableArray: boolean[] = [true];


  constructor(

    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    private layoutService: LayoutService,
    public paramsService: ParamsService,
    public personnelService: PersonnelService,
    public attendanceService: AttendanceService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private adapter: DateAdapter<any>,
    location: Location) {

  }

  resize(type) {
    if (type == 'fullwidth')
      this.layoutService.collapseSidenav();
    else
      this.layoutService.expandSidenav();

  }

  ngOnInit() {


    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;

    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    startDate.add(-10, 'days');

    this.formSearch = this.fb.group({ Search: null });
    this.form = this.fb.group({
      Emp1: null, Emp2: null, EmpType1: null, EmpType2: null, Depart1: null, Depart2: null, Cost1: null, Cost2: null, Cadre1: null, Cadre2: null, Prof1: null, Prof2: null,
      Task1: null, Task2: null, Group1: null, Group2: null, Unit1: null, Unit2: null, Branch1: null, Branch2: null, Service1: null, Service2: null, Gomlek1: null, Gomlek2: null, Value: null,
      Type: null, StartDate: [startDate, Validators.required], EndDate: [endDate, Validators.required]
    });
    this.turkishCulture();
    
    this.route.paramMap.subscribe(params => {
      this.getFilterColumns();
      this.languageMap = AppUtil.getLabels();
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      this.breadcrumbs = [this.languageMap['Giriş - Çıkış'].labelName, this.languageMap['Giriş - Çıkış İşlemleri'].labelName];
      
      
      this.attendanceType = [{ RecordOrInout: 0, Label: this.languageMap['Kayıt'].labelName, Checked: true },
       { RecordOrInout: 1, Label: this.languageMap['Giriş Çıkış Kayıt'].labelName, Checked: false }];

       for (let index = 0; index < 15; index++)
       this.FilteroObjEnableArray[index] = true;

       
      //  console.log(this.columns);
      //  this.item.RecordOrInout=true;
          
        

    });

  }

  openSnackBar(message) {

    console.log(message);
    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'],
      duration: 2000,
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

  controlDate(value) {

    // let endDate = moment(value).format('YYYY-MM-DD');
    // let startDate = moment(this.formSearch.value.StartDate).format('YYYY-MM-DD');
    let endDate = moment(value).format('YYYY-DD-MM');
    let startDate = this.form.value.StartDate.format('YYYY-MM-DD');
    
    if (startDate > endDate) {
      this.openSnackBar("İlk tarih son tarihten büyük olamaz");
      this.formSearch.patchValue({ EndDate: null });
    }

  }

  onBlurMethod(type,value2)
  {

    const value1=(type=='Emp'?this.form.value.Emp1:(type=='EmpType'?this.form.value.EmpType1:(type=='Depart'?this.form.value.Depart1:(type=='Cost'?this.form.value.Cost1:(type=='Cadre'?this.form.value.Cadre1:(type=='Prof'?this.form.value.Prof1:(type=='Task'?this.form.value.Task1:(type=='Group'?this.form.value.Group1:(type=='Unit'?this.form.value.Unit1:(type=='Branch'?this.form.value.Branch1:(type=='Service'?this.form.value.Service1:'')))))))))));

    console.log(value1);
    if (value2 < value1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");    
  }

  openDefinition(value, obj) {


    this.dialog.open(AttendanceDefinitionsComponent, {
      panelClass: 'listClass',
      data: { Type: value, Data: { ID: null, Code: null, Name: null } },
      disableClose: false,
      width: '450px',
      height: '600px'
    }).afterClosed().subscribe(result => {

      if (value == '0') {
        if (obj == 1) { this.form.patchValue({ Emp1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[0] = false; else this.FilteroObjEnableArray[0] = true; }
        else {

          if (result.Code < this.form.value.Emp1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Emp2: result.Code });
        }
      }

      if (value == '3') {
        if (obj == 1) { this.form.patchValue({ EmpType1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[3] = false; else this.FilteroObjEnableArray[3] = true; }
          else {
            if (result.Code < this.form.value.EmpType1)
              this.openSnackBar("İlk değer son değerden büyük olamaz");
            this.form.patchValue({ EmpType2: result.Code });
          }
      }

      if (value == '1') {
        if (obj == 1) { this.form.patchValue({ Depart1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[1] = false; else this.FilteroObjEnableArray[1] = true; }
        else {
          if (result.Code < this.form.value.Depart1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Depart2: result.Code });
        }
      }
      if (value == '4') {
        if (obj == 1) { this.form.patchValue({ Cost1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[4] = false; else this.FilteroObjEnableArray[4] = true; }
        else {
          if (result.Code < this.form.value.Cost1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Cost2: result.Code });
        }
      }
      if (value == '5') {
        if (obj == 1) { this.form.patchValue({ Cadre1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[5] = false; else this.FilteroObjEnableArray[5] = true; }
        else {
          if (result.Code < this.form.value.Cadre1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Cadre2: result.Code });
        }
      }
      if (value == '6') {
        if (obj == 1) { this.form.patchValue({ Prof1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[6] = false; else this.FilteroObjEnableArray[6] = true; }
        else {
          if (result.Code < this.form.value.Prof1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Prof2: result.Code });
        }
      }

      if (value == '7') {
        if (obj == 1) { this.form.patchValue({ Task1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[7] = false; else this.FilteroObjEnableArray[7] = true; }
        else {
          if (result.Code < this.form.value.Task1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Task2: result.Code });
        }
      }

      if (value == '8') {
        if (obj == 1) { this.form.patchValue({ Group1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[8] = false; else this.FilteroObjEnableArray[8] = true; }
        else {
          if (result.Code < this.form.value.Group1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Group2: result.Code });
        }
      }

      if (value == '9') {
        if (obj == 1) { this.form.patchValue({ Unit1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[9] = false; else this.FilteroObjEnableArray[9] = true; }
        else {
          if (result.Code < this.form.value.Unit1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Unit2: result.Code });
        }
      }

      if (value == '10') {
        if (obj == 1) { this.form.patchValue({ Branch1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[10] = false; else this.FilteroObjEnableArray[10] = true; }
        else {
          if (result.Code < this.form.value.Branch1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Branch2: result.Code });
        }
      }

      if (value == '11') {
        if (obj == 1) { this.form.patchValue({ Service1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[11] = false; else this.FilteroObjEnableArray[11] = true; }
        else {
          if (result.Code < this.form.value.Service1)
            this.openSnackBar("İlk değer son değerden büyük olamaz");
          this.form.patchValue({ Service2: result.Code });
        }
      }

      if (value == '12') {
        if (obj == 1) { this.form.patchValue({ Gomlek1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[12] = false; else this.FilteroObjEnableArray[12] = true; }
 
          this.form.patchValue({ Gomlek2: result.Code });
        
      }
    });
  }

  addAttendanceSub(row) {
    console.log(row);
    this.employeeInfo = { EmployeeID: row.ID, Code: row.Code, Name: row.Name, Surname: row.Surname };
    this.addAttendance(null);
  }
  addAttendance(row) {
    // this.employeeInfo = { EmployeeID:row.ID, Code: row.Code, Name: row.Name, Surname: row.Surname };
    this.dialog.open(AttendanceRecordComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { RecordOrInout: 1, Data: row, EmployeeInfo: this.employeeInfo },
      disableClose: true,
      width: '800px',
      maxWidth: this.isMobileLayout ? '100vw' : '80vw'
    }).afterClosed().subscribe(result => {

      if (result)
        this.getAttendance(this.radioValue, this.form.value.StartDate, this.form.value.EndDate);
    });
  }

  myObservable(observer) {
    setTimeout(() => {
      observer.next("");
      observer.complete();
    }, 6000);
  }

  selectDist(row) {
    this.selectedRow = this.selectedRow === row ? null : row;
    this.employeeInfo = { EmployeeID: row.ID, Code: row.Code, Name: row.Name, Surname: row.Surname };
  }

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

  getAttendance(type, begin, end) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });


    if (type == 0) {
      this.columns.forEach(element => {
        element.label = element.label.toString().replace("Giriş", "").trim();
      });
    } else {
      this.columns.forEach(element => {
        if (element.label == "Cihaz") element.label = "GirişCihaz"
        if (element.label == "Tarih") element.label = "GirişTarih"
        if (element.label == "Neden") element.label = "GirişNeden"

      });

    }

    this.dataSource = null;
    let obj = this.form.value;
    obj.Type = type;
    this.attendanceService.GetAttendance(obj)
      .subscribe((res: any[]) => {

        // console.log(res);
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        this.dataSource.paginator = this.usrPaginator;
        this.dataSource.sort= this.sort;
        this.employeeInfo = null;
        if (this.formSearch.value.Search !== null)
          this.applyFilter(this.formSearch.value.Search);
        // console.log(res);
        // this.newWaitProgressDismiss();
        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err);
      });
  }


  ngAfterViewInit() {

    this.dataSource.paginator = this.usrPaginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.visibleColumns = this.columns.map(column => column.property);
    }

    if (changes.data) {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.data;
      this.dataSource.paginator = this.usrPaginator;
      this.dataSource.sort=this.sort;
    }

    if (changes.searchStr) {
      this.dataSource.filter = (this.searchStr || '').toString().trim().toLowerCase();
    }


  }


  textSelected(name) {
    this.selectedObject = name;
  }




  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  turkishCulture() {
    this.adapter.setLocale("tr");
  }

  applyFilter(filterValue: string) {
    this.employeeInfo = null;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }




  radioChange(type) {
    this.employeeInfo = null;
    this.radioValue = type;
    this.getAttendance(type, this.form.value.StartDate, this.form.value.EndDate);
    // this.applyFilter(null);
    // this.searchCtrl.reset();
    // this.formSearch.patchValue({ Search:null });
    // this.applyFilter(this.formSearch.value.Search);
  }





  createColumns() {

    this.dialog.open(AttendanceColumnsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { contactId: null, auth: true, tabAuth: false },
      width: '450px',
      disableClose: true
    }).afterClosed().subscribe(result => {
      //  this.ngOnInit();
      // debugger;
      if (result)
        this.getFilterColumns();
    })


  }


  Filter() {

    if (this.form.invalid) {
      return;
    }

    this.employeeInfo = null;
    this.getAttendance(this.radioValue, this.form.value.StartDate, this.form.value.EndDate);
    // this.formSearch.patchValue({ Search:null });
    // this.applyFilter(this.formSearch.value.Search);

  }

  getFilterColumns() {

    let selectedColumns = [];
    this.attendanceService.GetFilterColumns('BAS_Attendance')
      .subscribe((res) => {

        const arr: any = res;

        arr.forEach(element => {
          if (element.Active && element.ColumnName === 'Photo') {
            const dataType = 'image';
            const data = { label: element.Label, property: element.ColumnName, type: dataType, cssClasses: ['font-medium'] };
            selectedColumns.push(data);
          }
        });

        arr.forEach(element => {
          if (element.Active && element.ColumnName === 'ID') {
            const dataType = 'text';
            const data = { label: element.Label, property: element.ColumnName, type: dataType, cssClasses: ['font-medium'] };
            selectedColumns.push(data);
          }
        });

        // console.log(this.radioValue);

        arr.forEach(element => {
          if (element.Active) {
            if (element.ColumnName === 'Photo') return;
            if (element.ColumnName === 'ID') return;
            // const dataType=(element.DATA_TYPE==='datetime'?'date':(element.DATA_TYPE==='bit'?'checkbox':(element.ColumnName==='Photo'?'image':(element.ColumnName==='Chief'?'button':'text'))));
            const dataType = (element.DATA_TYPE === 'datetime' ? 'date' : (element.ColumnName === 'Chief' ? 'button' : (element.ColumnName === 'Photo' ? 'image' : (element.DATA_TYPE === 'bit' ? 'checkbox' : 'text'))));
            const data = { label: element.Label.toString().replace("Giriş", ""), property: element.ColumnName, type: dataType, cssClasses: ['font-medium'] };
            selectedColumns.push(data);
          }
        });


        selectedColumns.push({ label: this.languageMap['Aksiyon'].labelName, property: 'menu', type: 'button', cssClasses: ['text-secondary', 'w-10'] });

        this.columns = selectedColumns;
        this.tableColumns = selectedColumns.map(column => column.property);
        console.log(this.tableColumns);

        this.getParameters();

      }, err => {
        console.log(err);

      });
  }



  getParameters() {
    this.paramsService.GetParam()
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          if (res[key].Name === 'InOut')
            if (res[key].Value == "true") this.radioChange(1);
            else this.radioChange(0);

        });

      }, err => {
        console.log(err);

      });
  }
  detailToggle(row) {
    this.selection.toggle(row);
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  Clear() {
    this.form.reset();
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    startDate.add(-10, 'days');
    this.form.patchValue({ StartDate: startDate, EndDate: endDate });
  }







  editAttendance(row) {
    this.selectedRow = this.selectedRow === row ? null : row;
    this.dialog.open(AttendanceRecordComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { RecordOrInout: this.radioValue, Data: row },
      disableClose: true,
      width: '800px',
      maxWidth: this.isMobileLayout ? '100vw' : '80vw'
    }).afterClosed().subscribe(result => {

      if (result)
        {
          this.getAttendance(this.radioValue, this.form.value.StartDate, this.form.value.EndDate);
          
        }
    });
  }

  deleteContact(row) {

    this.openDialog(row.IIDNO == 0 ? row.OIDNO : row.IIDNO);

  }

  deleteContactRecord(id) {

    this.attendanceService.DeleteAttendance(id, 0)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        // this.waitProgressDismiss();

        this.getAttendance(this.radioValue, this.form.value.StartDate, this.form.value.EndDate);

      }, err => {
        console.log(err);
        // this.waitProgress(err, 3000);
      });

  }


  openDialog(ID) {
    this.dialog.open(DemoDialogComponent, {
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

      }
    });
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