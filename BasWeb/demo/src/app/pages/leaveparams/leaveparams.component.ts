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
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icExcel from '@iconify/icons-fa-solid/file-excel';
import icFilter from '@iconify/icons-ic/filter-list';
import { AuthorizationService } from '../services/authorization.service';
import { LeavesService } from '../services/leaves.service';
import { ScoringService } from '../services/scoring.service';
import { DefinitionsService } from '../services/definitions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { ScoringDefinitionsComponent } from '../scoring/scoring-definitions.component';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AttendanceRecordComponent } from '../attendance/attendance-record.component';
import { LeaveComponent } from '../leaves/leave.component';
// import {OverlayContainer} from '@angular/cdk/overlay';
import { WaitComponent } from '../wait/wait.component';
import { LeaveParamsDefinitionsComponent } from '../leaveparams/leaveparams-definitions.component';
import { LayoutService } from './../../../@vex/services/layout.service';
import { AttendanceDefinitionsComponent } from '../attendance/attendance-definitions.component';
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
  selector: 'leaveparams',
  templateUrl: './leaveparams.component.html',
  styleUrls: ['./leaveparams.component.scss'],
  animations: [
    stagger20ms,
    fadeInUp400ms,
    scaleFadeIn400ms
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
export class LeaveParamsComponent<T> implements OnInit, OnChanges, OnDestroy {

  language: any = []; languageMap: LanguageMap = {};
  activeLinkIndex = 0;
  links = [];
  filterHide = true;
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
  YearlyStartTypes = [];
  YearlySeniority = [];
  WorkingTypesCode: any = [];
  Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  subFooter: boolean;
  //datasources
  dataSourceExtend: MatTableDataSource<any> | null;
  dataSourceDist: MatTableDataSource<any> | null;
  dataSourceLimit: MatTableDataSource<any> | null;
  dataSourceYear: MatTableDataSource<any> | null;
  dataSourceYearCode: MatTableDataSource<any> | null;
  dataSourceYearSeniority: MatTableDataSource<any> | null;
  // columns: TableColumn<T>[];
  columns = ['Checkbox', 'ID', 'FlexPersonnelGroupID', 'FlexPersonnelGroupCode', 'FlexPersonnelGroupName', 'WorkingTypeID', 'WorkingTypeCode', 'WorkingTypeName', 'Saturday', 'Weekend', 'General', 'Actions'];
  columnsDist = ['Checkbox', 'ID', 'FlexPersonnelGroupID', 'FlexPersonnelGroupCode', 'FlexPersonnelGroupName',
    'SourceWorkingTypeID', 'SourceWorkingTypeCode', 'SourceWorkingTypeName', 'SourceLimit',
    'DestWorkingTypeID', 'DestWorkingTypeCode', 'DestWorkingTypeName', 'DestLimit',
    'Actions'];
  columnsLimit = ['Checkbox', 'ID', 'FlexPersonnelGroupID', 'FlexPersonnelGroupCode', 'FlexPersonnelGroupName',
    'SourceWorkingTypeID', 'SourceWorkingTypeCode', 'SourceWorkingTypeName',
    'LeaveUsageType', 'DayLimit', 'MonthLimit', 'YearLimit', 'YearLimitControl', 'Pieced',
    'DestWorkingTypeID', 'DestWorkingTypeCode', 'DestWorkingTypeName',
    'Actions'];

  columnsYear = ['Checkbox', 'ID', 'FlexPersonnelGroupID', 'FlexPersonnelGroupCode', 'FlexPersonnelGroupName',
    'StartDateType', 'Date', 'IsPeriod', 'CalcNewYear', 'CalcStartingDdate', 'CancelPeriod', 'CancelPeriodMonth', 'CancelPeriodDay',
    'Actions'];


  columnsYearCode = ['Checkbox', 'ID', 'FlexPersonnelGroupID', 'FlexPersonnelGroupCode', 'FlexPersonnelGroupName',
    'WorkingTypeID', 'Time',
    'Actions'];

  columnsYearSeniority = ['Checkbox', 'ID', 'FlexPersonnelGroupID', 'FlexPersonnelGroupCode', 'FlexPersonnelGroupName',
    'Type', 'FirstYear', 'LastYear', 'VestingDay', 'Actions'];


  selection = new SelectionModel<any>(true, []);

  //datasources

  //forms
  formExtend: FormGroup; //personel filterForm
  formDist: FormGroup; //personel filterForm
  formLimit: FormGroup; //personel filterForm
  formYear: FormGroup; //personel filterForm
  formYearCode: FormGroup; //personel filterForm
  formYearSen: FormGroup; //personel filterForm
  formSettings: FormGroup; // puantaj menu bar
  //forms

  // filterEntity: GridFilterEntity;
  filterType: MatTableFilter;



  layoutCtrl = new FormControl('boxed');

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



  leaves = [{ Name: 'Hepsi', Checked: true }, { Name: 'Günlük İzinler', Checked: false }, { Name: 'Saatlik İzinler', Checked: false }];
  breadcrumbs: string[];
  href: string;
  pageauth = { write: false, delete: false, update: false };
  tabAuth: any[];
  selectedObject: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  data: T[];
  dataD: T[];
  tableColumns: TableColumn<any>[] = [];
  leaveUsageTypes: any = [];
  result: string;
  isMobileLayout = false;
  updatePanelHidden = false;
  selectedRow = 0;
  selectedYearRow = 0;
  selectedYearCodeRow = 0;
  selectedYearSenRow = 0;
  constructor(
    // overlayContainer: OverlayContainer,
    // public datepipe: DatePipe,
    private route: ActivatedRoute,
    public paramsService: ParamsService,
    public leaveparamService: LeaveParamService,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    public personnelService: PersonnelService,
    public attendanceService: AttendanceService,
    private layoutService: LayoutService,
    public leavesService: LeavesService,
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

  resize(type) {
    if (type == 'fullwidth')
      this.layoutService.collapseSidenav();
    else
      this.layoutService.expandSidenav();

  }



  definitionGetWorkingTypeEnums(type, code) {
    let data;
    this.definitionsService.DefinitionGetWorkingTypeEnums(type, code)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { kodu: Number(res[key].Code), adi: res[key].Name };
          this.leaveUsageTypes.push(data);
        });

      }, err => {
        console.log(err);

      });

  }

  getLeaveExtendParams() {

    let selectedColumns = [];
    this.leaveparamService.GetLeaveExtendParams()
      .subscribe((res: any[]) => {

        console.log(res);
        this.dataSourceExtend = new MatTableDataSource();
        this.dataSourceExtend.data = res;
      }, err => {
        console.log(err);

      });
  }

  getLeaveDistParams() {

    let selectedColumns = [];
    this.leaveparamService.GetLeaveDistParams()
      .subscribe((res: any[]) => {
        this.dataSourceDist = new MatTableDataSource();
        this.dataSourceDist.data = res;
      }, err => {
        console.log(err);

      });
  }

  getLeaveLimitParams() {

    let selectedColumns = [];
    this.leaveparamService.GetLeaveLimitParams()
      .subscribe((res: any[]) => {
        this.dataSourceLimit = new MatTableDataSource();
        this.dataSourceLimit.data = res;
      }, err => {
        console.log(err);

      });
  }


  getYearlyParams() {

    let selectedColumns = [];
    this.leaveparamService.GetYearlyParams()
      .subscribe((res: any[]) => {
        this.dataSourceYear = new MatTableDataSource();
        this.dataSourceYear.data = res;
        this.formYearCode.reset();
        this.formYearSen.reset();
      }, err => {
        console.log(err);

      });
  }



  getYearlyParamsCode(Id) {

    let selectedColumns = [];
    this.leaveparamService.GetYearlyParamsCode(Id)
      .subscribe((res: any[]) => {
        this.dataSourceYearCode = new MatTableDataSource();
        this.dataSourceYearCode.data = res;
      }, err => {
        console.log(err);

      });
  }


  getYearlyParamsSeniority(Id) {

    let selectedColumns = [];
    this.leaveparamService.GetYearlyParamsSeniority(Id)
      .subscribe((res: any[]) => {
        this.dataSourceYearSeniority = new MatTableDataSource();
        this.dataSourceYearSeniority.data = res;
      }, err => {
        console.log(err);

      });
  }

  ngOnInit() {
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.definitionGetWorkingTypeEnums('LeaveUsageTypes', null);
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);
    this.turkishCulture();
    // this.href = this.router.url;
    // this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))

    this.formExtend = this.fb.group({
      ID: null, FlexPersonnelGroupID: null, FlexPersonnelGroupCode: [null, Validators.required], FlexPersonnelGroupName: null, WorkingTypeID: null, WorkingTypeCode: [null, Validators.required], WorkingTypeName: null, Saturday: null, Weekend: null, General: null
    });

    this.formDist = this.fb.group({
      ID: null, FlexPersonnelGroupID: null, FlexPersonnelGroupCode: [null, Validators.required], FlexPersonnelGroupName: null,
      SourceWorkingTypeID: null, SourceWorkingTypeCode: [null, Validators.required], SourceWorkingTypeName: null, SourceLimit: 0,
      DestWorkingTypeID: null, DestWorkingTypeCode: [null, Validators.required], DestWorkingTypeName: null, DestLimit: 0
    });

    this.formLimit = this.fb.group({
      ID: null, FlexPersonnelGroupID: null, FlexPersonnelGroupCode: [null, Validators.required], FlexPersonnelGroupName: null,
      SourceWorkingTypeID: null, SourceWorkingTypeCode: [null, Validators.required], SourceWorkingTypeName: null, Limit: 0, LeaveUsageType: [null, Validators.required],
      DayLimit: '00:00', MonthLimit: null, YearLimit: null, YearLimitControl: null,
      Pieced: null,
      DestWorkingTypeID: null, DestWorkingTypeCode: [null, Validators.required], DestWorkingTypeName: null

    });


    this.formYear = this.fb.group({
      ID: null, FlexPersonnelGroupID: null, FlexPersonnelGroupCode: [null, Validators.required], FlexPersonnelGroupName: null,
      StartDateType: [null, Validators.required], Date: [null, Validators.required], IsPeriod: null, CalcNewYear: null, CalcStartingDate: null, CancelPeriod: null, CancelPeriodMonth: null,
      CancelPeriodDay: null
    });


    this.formYearCode = this.fb.group({
      ID: null, FlexPersonnelGroupID: [null, Validators.required], FlexPersonnelGroupCode: null, FlexPersonnelGroupName: null,
      WorkingTypeID: [null, Validators.required], Time: [null, Validators.required]
    });

    this.formYearSen = this.fb.group({
      ID: null, FlexPersonnelGroupID: [null, Validators.required], FlexPersonnelGroupCode: null, FlexPersonnelGroupName: null,
      Type: [null, Validators.required], FirstYear: [null, Validators.required], LastYear: [null, Validators.required], VestingDay: [null, Validators.required]
    });

    this.searchForm = this.fb.group({ departureDate: '' });

    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.breadcrumbs = [this.languageMap['Parametreler'].labelName, this.languageMap['İzin Parametreleri'].labelName];
      const aa = [
        { Index: 0, name: 'İzin Öteleme' },
        { Index: 1, name: 'İzin Dağılım' },
        { Index: 2, name: 'İzin Limit' },
        { Index: 3, name: 'Yıllık İzin' }];
      this.links = aa;
      // this.getParamsGroup();
      this.getLeaveExtendParams();
      this.getLeaveDistParams();
    });

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



  turkishCulture() {
    this.adapter.setLocale("tr");
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


  myObservable(observer) {
    setTimeout(() => {
      observer.next("");
      observer.complete();
    }, 2000);
  }

  selectExtendRow(row) {

    this.selectedRow = this.selectedRow === row ? null : row;
    this.formExtend.patchValue({ ID: row.ID, FlexPersonnelGroupID: row.FlexPersonnelGroupID, FlexPersonnelGroupCode: row.FlexPersonnelGroupCode, FlexPersonnelGroupName: row.FlexPersonnelGroupName, Code: row.Code, Name: row.Name, Saturday: row.Saturday, Weekend: row.Weekend, General: row.General, WorkingTypeID: row.WorkingTypeID, WorkingTypeCode: row.WorkingTypeCode });
  }

  selectDistRow(row) {
    this.selectedRow = this.selectedRow === row ? null : row;
    this.formDist.patchValue({
      ID: row.ID, FlexPersonnelGroupID: row.FlexPersonnelGroupID, FlexPersonnelGroupCode: row.FlexPersonnelGroupCode, FlexPersonnelGroupName: row.FlexPersonnelGroupName,
      SourceWorkingTypeID: row.SourceWorkingTypeID, SourceWorkingTypeCode: row.SourceWorkingTypeCode, SourceWorkingTypeName: row.SourceWorkingTypeName, SourceLimit: row.SourceLimit,
      DestWorkingTypeID: row.DestWorkingTypeID, DestWorkingTypeCode: row.DestWorkingTypeCode, DestWorkingTypeName: row.DestWorkingTypeName, DestLimit: row.DestLimit

    });
  }


  selectLimitRow(row) {
    // Limit:row.Limit,Limit:row.Limit,Limit:row.Limit,

    this.selectedRow = this.selectedRow === row ? null : row;
    // this.datePipe.transform(new Date(),"dd-MM-yyyy");

    this.formLimit.patchValue({
      ID: row.ID, FlexPersonnelGroupID: row.FlexPersonnelGroupID, FlexPersonnelGroupCode: row.FlexPersonnelGroupCode, FlexPersonnelGroupName: row.FlexPersonnelGroupName,
      SourceWorkingTypeID: row.SourceWorkingTypeID, SourceWorkingTypeCode: row.SourceWorkingTypeCode, SourceWorkingTypeName: row.SourceWorkingTypeName,
      Limit: row.Limit, LeaveUsageType: Number(row.LeaveUsageType),
      DayLimit: moment(row.DayLimit, "YYYY-MM-DD HH:mm:ss").format("HH:mm"),
      MonthLimit: row.MonthLimit, YearLimit: row.YearLimit, YearLimitControl: row.YearLimitControl,
      Pieced: row.Pieced,
      DestWorkingTypeID: row.DestWorkingTypeID, DestWorkingTypeCode: row.DestWorkingTypeCode, DestWorkingTypeName: row.DestWorkingTypeName
    });
  }


  selectYearRow(row) {
    this.selectedYearRow = this.selectedYearRow === row ? null : row;

    this.formYearCode.patchValue({ FlexPersonnelGroupID: row.FlexPersonnelGroupID });
    this.formYearSen.patchValue({ FlexPersonnelGroupID: row.FlexPersonnelGroupID });
    this.formYear.patchValue({
      ID: row.ID, FlexPersonnelGroupID: row.FlexPersonnelGroupID, FlexPersonnelGroupCode: row.FlexPersonnelGroupCode, FlexPersonnelGroupName: row.FlexPersonnelGroupName,
      StartDateType: row.StartDateType.toString(), Date: row.Date, IsPeriod: row.IsPeriod, CalcNewYear: row.CalcNewYear, CalcStartingDate: row.CalcStartingDate, CancelPeriod: row.CancelPeriod, CancelPeriodMonth: row.CancelPeriodMonth,
      CancelPeriodDay: row.CancelPeriodDay

    });

    this.getYearlyParamsCode(row.FlexPersonnelGroupID);
    this.getYearlyParamsSeniority(row.FlexPersonnelGroupID);
  }

  selectYearCodeRow(row) {

    const locale = 'en-US';
    this.selectedYearCodeRow = this.selectedYearCodeRow === row ? null : row;
    this.formYearCode.patchValue({
      ID: row.ID, FlexPersonnelGroupID: row.FlexPersonnelGroupID, FlexPersonnelGroupCode: row.FlexPersonnelGroupCode, FlexPersonnelGroupName: row.FlexPersonnelGroupName,
      WorkingTypeID: row.WorkingTypeID.toString(), Time: formatDate(row.Time, 'HH:mm', locale)
    });

    // console.log(this.formYearCode.value);

  }


  selectYearSenRow(row) {
    this.selectedYearSenRow = this.selectedYearSenRow === row ? null : row;
    this.formYearSen.patchValue({
      ID: row.ID, FlexPersonnelGroupID: row.FlexPersonnelGroupID, FlexPersonnelGroupCode: row.FlexPersonnelGroupCode, FlexPersonnelGroupName: row.FlexPersonnelGroupName,
      Type: row.Type.toString(), FirstYear: row.FirstYear, LastYear: row.LastYear, VestingDay: row.VestingDay

    });

  }

  deleteExtendRow(row) {
    this.openDialog(0, row.ID, 0);
  }

  deleteDistRow(row) {
    this.openDialog(1, row.ID, 0);
  }

  deleteLimitRow(row) {
    this.openDialog(2, row.ID, 0);
  }

  deleteYearRow(row) {
    this.openDialog(3, row.ID, row.FlexPersonnelGroupID);
  }


  deleteYearCodeRow(row) {
    this.openDialog(4, row.ID, row.FlexPersonnelGroupID);
  }

  deleteYearSenRow(row) {
    this.openDialog(5, row.ID, row.FlexPersonnelGroupID);
  }


  openDialog(type, ID, FlexId) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: this.languageMap['İzin bilgisi silinecektir.'].labelName,
        temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {

        if (type == 0)
          this.deleteLeaveExtendParams(ID);
        if (type == 1)
          this.deleteLeaveDistParams(ID);
        if (type == 2)
          this.deleteLeaveLimitParams(ID);
        if (type == 3)
          this.deleteYearParams(FlexId, ID);
        if (type == 4)
          this.deleteYearParamsCode(FlexId, ID);
        if (type == 5)
          this.deleteYearParamsSen(FlexId, ID);



      }
    });
  }



  deleteLeaveExtendParams(Id) {

    this.leaveparamService.DeleteLeaveExtendParams(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getLeaveExtendParams();

      });


  }

  deleteLeaveDistParams(Id) {

    this.leaveparamService.DeleteLeaveDistParams(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getLeaveDistParams();

      });


  }


  deleteLeaveLimitParams(Id) {

    this.leaveparamService.DeleteLeaveLimitParams(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getLeaveLimitParams();

      });


  }

  deleteYearParams(FlexId, Id) {

    this.leaveparamService.DeleteYearParams(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getYearlyParams();
        this.getYearlyParamsCode(FlexId);
        this.getYearlyParamsSeniority(FlexId);

      });
  }


  deleteYearParamsCode(flexId, Id) {

    this.leaveparamService.DeleteYearParamsCode(Id)
      .subscribe((res: any[]) => {
        console.log(res);
        this.getYearlyParamsCode(flexId);

      });
  }


  deleteYearParamsSen(flexId, Id) {

    this.leaveparamService.DeleteYearParamsSen(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getYearlyParamsSeniority(flexId);

      });
  }

  addExtendRow() {

    this.formExtend.patchValue({ ID: null, FlexPersonnelGroupID: null, FlexPersonnelGroupCode: null, FlexPersonnelGroupName: null, WorkingTypeID: null, WorkingTypeCode: null, Code: null, Name: null, Saturday: null, Weekend: null, General: null });
  }


  addDistRow() {

    this.formDist.patchValue({
      ID: null, FlexPersonnelGroupID: null, FlexPersonnelGroupCode: null, FlexPersonnelGroupName: null,
      SourceWorkingTypeID: null, SourceWorkingTypeCode: null, SourceWorkingTypeName: null, SourceLimit: 0,
      DestWorkingTypeID: null, DestWorkingTypeCode: null, DestWorkingTypeName: null, DestLimit: 0
    });
  }


  addLimitRow() {

    this.formLimit.patchValue({
      ID: null, FlexPersonnelGroupID: null, FlexPersonnelGroupCode: null, FlexPersonnelGroupName: null,
      SourceWorkingTypeID: null, SourceWorkingTypeCode: null, SourceWorkingTypeName: null, Limit: 0, LeaveUsageType: null,
      DayLimit: '00:00', MonthLimit: null, YearLimit: null, YearLimitControl: null,
      Pieced: null,
      DestWorkingTypeID: null, DestWorkingTypeCode: null, DestWorkingTypeName: null
    });
  }


  addYearRow() {
    this.formYear.reset();
    this.formYearCode.reset();
    this.formYearSen.reset();
    this.dataSourceYearCode.data = [];
    this.dataSourceYearSeniority.data = []

  }


  addYearCodeRow() {
    this.formYearCode = this.fb.group({
      ID: null, WorkingTypeID: [null, Validators.required], Time: [null, Validators.required], FlexPersonnelGroupID: this.selectedYearRow['FlexPersonnelGroupID']
    });

  }

  addYearSenRow() {
    this.formYearSen = this.fb.group({
      ID: null, Type: [null, Validators.required], FirstYear: [null, Validators.required], LastYear: [null, Validators.required], VestingDay: [null, Validators.required],
      FlexPersonnelGroupID: this.selectedYearRow['FlexPersonnelGroupID']
    });


  }

  saveExtendRow() {


    if (this.formExtend.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });


    const definition = this.formExtend.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    this.leaveparamService.PostLeaveExtendParams(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        // this.getParams();
        this.getLeaveExtendParams();
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });




  }

  saveDistRow() {

    if (this.formDist.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    const definition = this.formDist.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    this.leaveparamService.PostLeaveDistParams(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        // this.getParams();
        this.getLeaveDistParams();
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });




  }

  saveLimitRow() {

    if (this.formLimit.invalid) {
      return;
    }

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });


    const definition = this.formLimit.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    this.leaveparamService.PostLeaveLimitParams(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        // this.getParams();
        this.getLeaveLimitParams();
        // this.waitProgressDismiss();
        dialogRef.close();

      }, err => {
        console.log(err);
        // this.waitProgress(err, 3000);
        dialogRef.close();
      });
  }


  saveYearRow() {

    if (this.formYear.invalid) {
      return;
    }

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });


    const definition = this.formYear.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    this.leaveparamService.PostLeaveYearParams(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        // this.getParams();
        this.getYearlyParams();
        // this.waitProgressDismiss();
        dialogRef.close();

      }, err => {
        console.log(err);
        // this.waitProgress(err, 3000);
        dialogRef.close();
      });
  }

  saveYearCodeRow() {

    if (this.formYearCode.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    const definition = this.formYearCode.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    // definition.FlexPersonnelGroupID=this.selectedYearRow['FlexPersonnelGroupID'];
    this.leaveparamService.PostLeaveYearParamsCode(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        // this.getParams();
        this.getYearlyParamsCode(definition.FlexPersonnelGroupID);
        // this.waitProgressDismiss();
        dialogRef.close();

      }, err => {
        console.log(err);
        // this.waitProgress(err, 3000);
        dialogRef.close();
      });
  }


  saveYearSenRow() {

    if (this.formYearSen.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    const definition = this.formYearSen.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    // definition.FlexPersonnelGroupID=this.selectedYearRow['FlexPersonnelGroupID'];
    this.leaveparamService.PostLeaveYearParamsSen(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        // this.getParams();
        this.getYearlyParamsSeniority(definition.FlexPersonnelGroupID);
        // this.waitProgressDismiss();
        dialogRef.close();
      }, err => {
        console.log(err);
        // this.waitProgress(err, 3000);
        dialogRef.close();
      });
  }


  openDefinition(type, value) {

    this.dialog.open(LeaveParamsDefinitionsComponent, {
      panelClass: 'listClass',
      data: { Type: type, Data: { ID: null, Code: null, Name: null } },
      disableClose: false,
      width: '450px',
      height: '660px'
    }).afterClosed().subscribe(result => {

      if (type == 0)
        this.formExtend.patchValue({ FlexPersonnelGroupID: result.ID, FlexPersonnelGroupCode: result.Code, FlexPersonnelGroupName: result.Name });
      if (type == 13)
        this.formExtend.patchValue({ WorkingTypeID: result.ID, WorkingTypeCode: result.Code, WorkingTypeName: result.Name });

      if (type == 1)
        this.formDist.patchValue({ FlexPersonnelGroupID: result.ID, FlexPersonnelGroupCode: result.Code, FlexPersonnelGroupName: result.Name });
      if (type == 11) {
        if (result.Code !== this.formDist.value.DestWorkingTypeCode)
          this.formDist.patchValue({ SourceWorkingTypeID: result.ID, SourceWorkingTypeCode: result.Code, SourceWorkingTypeName: result.Name });
      }
      if (type == 12) {

        if (result.Code !== this.formDist.value.SourceWorkingTypeCode)
          this.formDist.patchValue({ DestWorkingTypeID: result.ID, DestWorkingTypeCode: result.Code, DestWorkingTypeName: result.Name });
      }
      if (type == 21) {
        if (result.Code !== this.formLimit.value.DestWorkingTypeCode)
          this.formLimit.patchValue({ SourceWorkingTypeID: result.ID, SourceWorkingTypeCode: result.Code, SourceWorkingTypeName: result.Name });
      }
      if (type == 22) {
        if (result.Code !== this.formLimit.value.SourceWorkingTypeCode)
          this.formLimit.patchValue({ DestWorkingTypeID: result.ID, DestWorkingTypeCode: result.Code, DestWorkingTypeName: result.Name });
      }

      if (type == 2)
        this.formLimit.patchValue({ FlexPersonnelGroupID: result.ID, FlexPersonnelGroupCode: result.Code, FlexPersonnelGroupName: result.Name });

      if (type == 3)
        this.formYear.patchValue({ FlexPersonnelGroupID: result.ID, FlexPersonnelGroupCode: result.Code, FlexPersonnelGroupName: result.Name });
    });
  }





  getParamsGroup() {

    let selectedColumns = [];
    this.paramsService.GetParamGroup()
      .subscribe((res: any[]) => {

        console.log(res);
        Object.keys(res).forEach((key) => {

          const aa = { Index: res[key].Index, name: res[key].Name };
          this.links.push(aa);
        });


      }, err => {
        console.log(err);

      });
  }

  checkChange(row, e) {
    row.Value = e.checked.toString();
  }

  optionChange(row, e) {
    row.Value = e.value;
  }

  textChange(row, e) {
    row.Value = e.target.value;
  }




  ngOnChanges(changes: SimpleChanges): void {


    if (changes.data) {
      this.dataSourceExtend.data = this.data;
    }

    if (changes.searchStr) {
      this.dataSourceExtend.filter = (this.searchStr || '').toString().trim().toLowerCase();
    }

    this.dataSourceExtend.sort = this.sort;

  }

  getEnums(type, code) {

    this.definitionsService.GetEnums(type, code)
      .subscribe((res: any[]) => {

        if (type === 'YearlyStartType')
          this.YearlyStartTypes = res;

        if (type === 'YearlySeniority')
          this.YearlySeniority = res;

        console.log(this.YearlyStartTypes);

        // console.log(this.ExitReasons);

      });
  }

  definitionGetWorkingTypes(id) {

    this.definitionsService.DefinitionGetWorkingTypes(id)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          if (res[key].Type == 2) {
            let data = { ID: res[key].ID.toString(), Code: res[key].Code, Name: res[key].Name };
            this.WorkingTypesCode.push(data);
          }
        });

        console.log(this.WorkingTypesCode);
      }, err => {
        console.log(err);

      });

  }

  gotoTab(link) {
    this.nxtDisabled = true;
    this.activeLinkIndex = link.Index;

    if (link.Index == 0)
      this.getLeaveExtendParams();
    else if (link.Index == 1)
      this.getLeaveDistParams();
    else if (link.Index == 2)
      this.getLeaveLimitParams();
    else if (link.Index == 3) {
      this.getEnums('YearlyStartType', null);
      this.getEnums('YearlySeniority', null);
      this.getYearlyParams();
      this.definitionGetWorkingTypes(100);
    }
  }



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceExtend.filter = filterValue;
  }



  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceExtend.data.forEach(row => this.selection.select(row));

    if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;

  }


  detailToggle(row) {
    this.selection.toggle(row);
    if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;
  }



  definitionGetTypes(row) {

    let id = 0;
    if (row === null) id = 0; else if (row.ID === undefined) id = 0; else id = row.ID;
    this.definitionsService.DefinitionGetWorkingTypesById(id)
      .subscribe((res: any[]) => {
        Object.keys(res).forEach((key) => {
          let data = { kodu: res[key].Code, adi: res[key].Name };
          // this.columnsS.push(res[key].Code)

        });

        this.dataSourceExtend = new MatTableDataSource();
        this.dataSourceExtend.data = res;

      });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));

  }



  // ClearPFilter() {
  //   let startDate = moment(new Date());
  //   let endDate = moment(new Date());
  //   startDate.add(-10, 'days');
  //   this.formExtend.reset();
  //   this.dataSourceExtend = null;
  //   this.footerHide = true;

  // }



  textSelected(name) {
    this.selectedObject = name;
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

  waitProgressDismiss() {
    this.snackbar.dismiss();
  }







  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceExtend.data.length;
    return numSelected === numRows;
  }





  onFilterChange(value: string) {
    if (!this.dataSourceExtend) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSourceExtend.filter = value;
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
