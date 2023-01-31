import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, SimpleChanges, OnChanges, ViewChild, Optional, ChangeDetectorRef, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatTableFilter } from 'mat-table-filter';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from '../../../static-data/aio-table-data';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
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
// import { AttendanceModule} from './../attendance/attendance.module';
import icRefresh from '@iconify/icons-ic/refresh';
import { PersonnelService } from '../services/personnel.service';
import { ParamsService } from '../services/params.service';
import { LeaveParamService } from '../services/leaveparam.service.';
import { AttendanceService } from '../services/attendance.service';
import { ReportingService } from '../services/reporting.service';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icExcel from '@iconify/icons-fa-solid/file-excel';
import icFilter from '@iconify/icons-ic/filter-list';
import { AuthorizationService } from '../services/authorization.service';
import { LeavesService } from '../services/leaves.service';
import { YearlyLeaveService } from '../services/yearlyleave.service';
import { ScoringService } from '../services/scoring.service';
import { DefinitionsService } from '../services/definitions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { MatSnackBarConfig } from '@angular/material/snack-bar';
// import { ScoringDefinitionsComponent } from '../scoring/scoring-definitions.component';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AttendanceRecordComponent } from '../attendance/attendance-record.component';
import { LeaveComponent } from '../leaves/leave.component';
// import {OverlayContainer} from '@angular/cdk/overlay';
import { WaitComponent } from '../wait/wait.component';
// import { LeaveParamsDefinitionsComponent } from '../leaveparams/leaveparams-definitions.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { AttendanceDefinitionsComponent } from '../attendance/attendance-definitions.component';
import { YearlyLeaveDefinitionsComponent } from './yearlyleave-definitions.component';
// import { debounceTime } from 'rxjs/operators';

import {
  // MAT_MOMENT_DATE_FORMATS,
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

import * as _moment from "moment";
import { DatePipe } from '@angular/common';

const moment = _moment;




@Component({
  selector: 'yearlyleave',
  templateUrl: './yearlyleave.component.html',
  styleUrls: ['./yearlyleave.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [
    DatePipe,
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
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
// 
export class YearlyLeaveComponent<T> implements OnInit, OnDestroy {
  language: any = []; languageMap: LanguageMap = {};
  activeLinkIndex = 0;
  links = [];
  filterHide = false;
  nxtDisabled = true;
  footerHide = true;
  calculatingPersonel: string = '';
  //icons
  icRefresh = icRefresh;
  icFilter = icFilter;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icCalculator = icCalculator;
  icColumns = icColumns;
  //
  subFooter: boolean;
  Collarcolors = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];
  //datasources
  dataSourceDetail: MatTableDataSource<any> | null;
  dataSourceTotal: MatTableDataSource<any> | null;
  dataSourceLeave: MatTableDataSource<any> | null;
  dataSourceEmp: MatTableDataSource<any> | null;
  // columns: TableColumn<T>[];

  visibleColumns: Array<keyof T | string>;
  columns: TableColumn<T>[];


  totalColumns = ['Checkbox', 'ID', 'Code', 'Name', 'DeptCode', 'DeptName', 'EmpTypeCode', 'EmpTypeName', 'StartingDate', 'CalculationDate',
    'Seniority', 'VestingDate', 'PeriodYear', 'Extra', 'VestingDay', 'UsedDay', 'TotalRemain'];

  detailColumns = ['Checkbox', 'EmployeeID', 'Year', 'PeriodYear', 'VestingDay', 'UsedDay', 'TotalRemain', 'OffSet', 'CalculationDate'];

  leaveColumns = ['Checkbox', 'EmployeeID', 'StartDate', 'EndDate', 'Day', 'OffSetDate', 'OffSetDay'];
  selection = new SelectionModel<any>(true, []);

  //datasources

  form: FormGroup; //personel filterForm
  // filterEntity: GridFilterEntity;
  filterType: MatTableFilter;



  layoutCtrl = new FormControl('fullwidth');

  searchForm: FormGroup;

  pPRSICIL = 0;
  icClose = icClose;


  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];


  searchCtrl = new FormControl();
  formFilter: FormGroup;
  formLeaveSave: FormGroup;
  searchStr = this.searchCtrl.valueChanges;
  leavesRecordIndex = 0;
  tableData: any;
  calcDisabled = true;
  saveDisabled = true;
  labels = aioTableLabels;

  icFilterList = icFilterList;
  icStar = icStar;
  icAdd = icAdd;
  icEdit = icEdit;
  icDeleteForever = icDeleteForever;

  icExcel = icExcel;

  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icSearch = icSearch;
  bCalc = true;
  say = 0;

  leaves = [{ Name: 'Hepsi', Checked: true }, { Name: 'Günlük İzinler', Checked: false }, { Name: 'Saatlik İzinler', Checked: false }];
  breadcrumbs: string[];
  href: string;
  pageauth = { write: false, delete: false, update: false };
  tabAuth: any[];
  selectedObject: string;
  scoreLabel: string = 'Hesapla';
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("usrPaginator", { static: false }) usrPaginator: MatPaginator;
  @ViewChild("totalPaginator", { static: false }) totalPaginator: MatPaginator;
  // @ViewChild("usrPaginator", { static: false }) usrPaginator: MatPaginator;

  data: T[];
  dataD: T[];
  tableColumns: TableColumn<any>[] = [];
  leaveUsageTypes: any = [];
  result: string;
  isExpansionDetailRow: any;
  expandedElement: any;
  progresValue: number;
  calculateArray: number[];
  response: any;
  updatePanelHidden = false;
  isMobileLayout=false;
  FilteroObjEnableArray: boolean[] = [true];
  constructor(
    // overlayContainer: OverlayContainer,
    // public datepipe: DatePipe,
    private route: ActivatedRoute,
    public paramsService: ParamsService,
    public reportingService: ReportingService,
    public leaveparamService: LeaveParamService,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    public personnelService: PersonnelService,
    public attendanceService: AttendanceService,
    public leavesService: LeavesService,
    public yearlyLeaveService: YearlyLeaveService,
    public scoringService: ScoringService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private adapter: DateAdapter<any>,
    location: Location) {

    // overlayContainer.getContainerElement().classList.add('scoring.component');

  }


  turkishCulture() {
    this.adapter.setLocale("tr");
  }


  createUsedLeaveEntry() {

    // let dayLastFinalValue:any;
    // if (this.deftype==='RoundingDay') dayLastFinalValue='1900-01-01T00:00'; else dayLastFinalValue='0';
    // if (this.dataSourceHour.data.length>0)
    // dayLastFinalValue=this.dataSourceHour.data[this.dataSourceHour.data.length-1].finalValue;
    // let obj={firstValue:dayLastFinalValue}
    // data: { def: obj, sub: true, modul: this.modul, update: false, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
    let obj={};
    this.dialog.open(YearlyLeaveDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: obj, sub: true},
      width: '750px',
      disableClose: false,
    }).afterClosed().subscribe((definitionHourDetail:any) => {
      // definitionHourDetail.type = this.deftype;
      // if (definitionHourDetail) {
      //   this.definitionPostTypeDetail(definitionHourDetail);
      //   // this.definitionPostTypes(definitionHourDetail);
      // }
    });
  }

  async ascsaveDef(form): Promise<any> {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
 
    let paramObj: any[] = [];
    paramObj.push({ParamName:'@CompanyId', ParamValue:null});
    paramObj.push({ParamName:'@Username', ParamValue:null});
    paramObj.push({ParamName:'@ReportDefinitionID', ParamValue:null});
    paramObj.push({ParamName:'@ReturnCode', ParamValue:null});

    let objNew=form;
    return await this.reportingService.PostReportingDef(objNew).toPromise().then(data => {
      let obj: any = {
         SpName: "BAS_GetEmployee",
         Username: JSON.parse(sessionStorage.getItem('Username')), CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')),        
         DefId: form.DefId
      };
 
      obj.Params=paramObj;
      this.reportingService.ExecReporting(obj)
        .subscribe((res: any[]) => {
          this.dataSourceEmp = new MatTableDataSource(res);
          this.dataSourceEmp.paginator = this.usrPaginator;
  
          dialogRef.close();
        }, err => {
          console.log(err);
          dialogRef.close();
        });


    });


  }

  execFilter() {
    let obj=this.form.value;
    obj.DefId=42;
    this.ascsaveDef(obj);
  }



  calculateYearlyLeave(obj) {
    // let startDate = moment(obj.StartDate).format('YYYY-MM-DD');
    // let endDate = moment(obj.EndDate).format('YYYY-MM-DD');
    return this.yearlyLeaveService.CalculateYearlyLeave(obj).toPromise().then(data => {
      this.response = <any>data;
      console.log(this.response);
    });

  }

  async calculate() {
    //data
    // this.route.paramMap.subscribe(params => {

    // debugger;
    if (this.scoreLabel === 'Hesapla') { this.scoreLabel = 'Durdur'; this.bCalc = true; }
    else { this.scoreLabel = 'Hesapla'; this.bCalc = false; };

    if (this.bCalc) {
      this.calculatingPersonel = this.languageMap['Hesaplama Başlıyor...'].labelName;
      this.progresValue = -1;
      this.calculateArray = new Array(this.selection.selected.length);
      this.say = 0;
    }

    let aaArray: any[] = [];
    let say2 = 0;
    for (var key in this.selection.selected) {
      const aa = {  Id: this.selection.selected[key].ID, StartDate:moment(this.form.value.StartDate).format('YYYY-MM-DD')}
      aaArray.push(aa);
      if (this.bCalc) {
        this.say++; say2++;

        if (this.say === this.selection.selected.length)
          await this.calculateYearlyLeave(aaArray);

        if (say2 === 5) {
          let response = await this.calculateYearlyLeave(aaArray);
          console.log(response);
          say2 = 0;
          aaArray = [];
        }
        this.calculatingPersonel = this.selection.selected[key].Code + '-' + this.selection.selected[key].Name + ' ' + this.selection.selected[key].Surname + ' ' + this.languageMap['yıllık izin hesaplanıyor...'].labelName + ' ' + ' Kayıt: ( ' + this.say.toString() + '/' + this.selection.selected.length.toString() + ' )';
        this.progresValue = this.progresValue + (100 / this.selection.selected.length);
        // this.say++; say2++;

        if (this.say === this.selection.selected.length) {
          this.scoreLabel = 'Hesapla';
          // console.log(this.say); console.log(this.selection.selected.length);
        }
      } else break;

    }




  }
  ngOnInit() {
    
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    this.turkishCulture();
    let startDate = moment(new Date());
    startDate.add(-10, 'days');
    let endDate = moment(new Date());
    this.form = this.fb.group({
      Emp1: null, Emp2: null, EmpType1: null, EmpType2: null, Depart1: null, Depart2: null, Cost1: null, Cost2: null, Cadre1: null, Cadre2: null, Prof1: null, Prof2: null,
      Task1: null, Task2: null, Group1: null, Group2: null, Unit1: null, Unit2: null, Branch1: null, Branch2: null, Service1: null, Service2: null, Collar1: null, Collar2: null, Value: null,
      Type: null, StartDate: [startDate, Validators.required], EndDate: [endDate, Validators.required]

    });
    this.searchForm = this.fb.group({ departureDate: '' });
    this.route.paramMap.subscribe(params => {

      const dialogRef = this.dialog.open(WaitComponent, {
        panelClass: 'transparent',
        disableClose: true
      });

      this.languageMap = AppUtil.getLabels();
      this.breadcrumbs = [this.languageMap['İzinler'].labelName, this.languageMap['Yıllık İzin İşlemleri'].labelName];
      const link = [
        { Index: 0, name: 'İzinler Yıllık İzin Hesaplama' },
        { Index: 1, name: 'İzinler Yıllık İzin Tablosu' },
      ];
      this.links = link;
      this.activeLinkIndex = 0;
      this.personnelGetFilterColumns();
      this.getPersonnel();
      dialogRef.close();
    });

    for (let index = 0; index < 15; index++) 
    this.FilteroObjEnableArray[index]=true;

  }


  personnelGetFilterColumns() {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
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
        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  getPersonnel() {


    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.personnelService.GetPersonnel(this.form.value)
      .subscribe((res: any[]) => {

        this.dataSourceEmp = new MatTableDataSource(res);
        this.dataSourceEmp.paginator = this.usrPaginator;

        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  gotoTab(link) {
    this.nxtDisabled = true;
    this.activeLinkIndex = link.Index;
    if (link.Index == 0) {
      this.selection.clear();
      this.personnelGetFilterColumns();
      this.getPersonnel();

    }
    else if (link.Index == 1)
      this.getYearlyLeave();


  }

  getYearlyLeave() {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
   let selectedColumns = [];
    this.yearlyLeaveService.GetYearlyLeave(0)
      .subscribe((res: any[]) => {
        // this.dataSourceTotal.paginator = this.totalPaginator;
        const rows = [];
        res.forEach(element => rows.push(element, { detailRow: true, element }));
        this.dataSourceTotal = new MatTableDataSource();
        this.dataSourceTotal.data = rows;
        this.isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }


  totalRowClick(row) {
    this.expandedElement = row;
    this.dataSourceLeave = null;
    this.getYearlyLeaveDetail(row.ID);
  }


  getYearlyLeaveDetail(Id) {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });


    this.yearlyLeaveService.GetYearlyLeaveDetail(Id)
      .subscribe((res: any[]) => {

        this.dataSourceDetail = new MatTableDataSource();
        this.dataSourceDetail.data = res;

        dialogRef.close();

      }, err => {
        dialogRef.close();
        console.log(err);

      });
  }


  selectDetailRow(row) {

    console.log(row);
    this.getYearlyLeaveTran(row.EmployeeID, row.Year);
    // this.formExtend.patchValue({ ID: row.ID, FlexPersonnelGroupID: row.FlexPersonnelGroupID, FlexPersonnelGroupCode: row.FlexPersonnelGroupCode, FlexPersonnelGroupName: row.FlexPersonnelGroupName, Code: row.Code, Name: row.Name, Saturday: row.Saturday, Weekend: row.Weekend, General: row.General });
  }


  getYearlyLeaveTran(Id, Year) {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.yearlyLeaveService.GetYearlyLeaveTran(Id, Year)
      .subscribe((res: any[]) => {

        this.dataSourceLeave = new MatTableDataSource();
        this.dataSourceLeave.data = res;
        dialogRef.close();

      }, err => {
        dialogRef.close();
        console.log(err);

      });
  }





  getUser(userCode, route) {

    this.authorizationService.GetUser(userCode, route)
      .subscribe((res) => {
        this.pageauth.write = res[0].write;
        this.pageauth.update = res[0].update;
        this.pageauth.delete = res[0].delete;

        console.log(this.pageauth);
      }, err => {
        console.log(err);

      });

  }




  // openDialog(type, ID) {
  //   this.dialog.open(DemoDialogComponent, {
  //     data: {
  //       temp1: this.languageMap['İzin bilgisi silinecektir.'].labelName,
  //       temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
  //       Hayir: this.languageMap['Hayır'].labelName
  //     },
  //     disableClose: false,
  //     width: '400px'
  //   }).afterClosed().subscribe(result => {
  //     this.result = result;
  //     if (this.result === "Yes") {


  //       // if (type == 2)
  //       //   this.deleteLeaveLimitParams(ID);


  //     }
  //   });
  // }

  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceEmp.data.length;
    return numSelected === numRows;
  }


  masterToggle() {

    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceEmp.data.forEach(row => this.selection.select(row));

    if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;

  }


  detailToggle(row) {
    this.selection.toggle(row);
    if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;
  }


  ngOnDestroy() {
  }



  ClearPFilter() {
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    startDate.add(-10, 'days');
    this.form.reset();
    this.form.patchValue({ StartDate: startDate, EndDate: endDate })
    this.dataSourceEmp = null;
    this.footerHide = true;

  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSourceEmp.filter = filterValue;
  }

  applyFilterTotal(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSourceTotal.filter = filterValue;
  }

  filterPersonnel() {
    this.personnelGetFilterColumns();
    this.execFilter();
    // this.getPersonnel();
    // const obj = { type: 'workType', code: 0 };
    // this.personnelService.PersonnelGetQuery(obj.type, obj.code)

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
        if (obj == 1)
          {this.form.patchValue({ Emp1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[0] = false; else this.FilteroObjEnableArray[0] = true;}
        else
          this.form.patchValue({ Emp2: result.Code });
      }

      if (value == '3') {
        if (obj == 1)
          {this.form.patchValue({ EmpType1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[3] = false; else this.FilteroObjEnableArray[3] = true;}
        else
          this.form.patchValue({ EmpType2: result.Code });
      }

      if (value == '1') {
        if (obj == 1)
          {this.form.patchValue({ Depart1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[1] = false; else this.FilteroObjEnableArray[1] = true;}
        else
          this.form.patchValue({ Depart2: result.Code });
      }
      if (value == '4') {
        if (obj == 1)
          {this.form.patchValue({ Cost1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[4] = false; else this.FilteroObjEnableArray[4] = true;}
        else
          this.form.patchValue({ Cost2: result.Code });
      }
      if (value == '5') {
        if (obj == 1)
          {this.form.patchValue({ Cadre1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[5] = false; else this.FilteroObjEnableArray[5] = true;}
        else
          this.form.patchValue({ Cadre2: result.Code });
      }
      if (value == '6') {
        if (obj == 1)
          {this.form.patchValue({ Prof1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[6] = false; else this.FilteroObjEnableArray[6] = true;}
        else
          this.form.patchValue({ Prof2: result.Code });
      }

      if (value == '7') {
        if (obj == 1)
          {this.form.patchValue({ Task1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[7] = false; else this.FilteroObjEnableArray[7] = true;}
        else
          this.form.patchValue({ Task2: result.Code });
      }

      if (value == '8') {
        if (obj == 1)
          {this.form.patchValue({ Group1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[8] = false; else this.FilteroObjEnableArray[8] = true;}
        else
          this.form.patchValue({ Group2: result.Code });
      }

      if (value == '9') {
        if (obj == 1)
          {this.form.patchValue({ Unit1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[9] = false; else this.FilteroObjEnableArray[9] = true;}
        else
          this.form.patchValue({ Unit22: result.Code });
      }

      if (value == '10') {
        if (obj == 1)
          {this.form.patchValue({ Branch1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[10] = false; else this.FilteroObjEnableArray[10] = true;}
        else
          this.form.patchValue({ Branch2: result.Code });
      }

      if (value == '11') {
        if (obj == 1)
          {this.form.patchValue({ Service1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[11] = false; else this.FilteroObjEnableArray[11] = true;}
        else
          this.form.patchValue({ Service2: result.Code });
      }

      if (value == '12') {
        if (obj == 1)
          {this.form.patchValue({ Collar1: result.Code });if (result.ID == null) this.FilteroObjEnableArray[12] = false; else this.FilteroObjEnableArray[12] = true;}
        else
          this.form.patchValue({ Collar2: result.Code });
      }
    });
  }
}


