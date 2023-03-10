import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, SimpleChanges, OnChanges, DoCheck, ViewChild, Optional, ChangeDetectorRef, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { MatTableFilter } from 'mat-table-filter';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
// import { MatTabChangeEvent } from '@angular/material';
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
import icClose from '@iconify/icons-ic/twotone-close';
import icRefresh from '@iconify/icons-ic/refresh';
import { PersonnelService } from '../services/personnel.service';
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
import { ScoringDefinitionsComponent } from '../scoring/scoring-definitions.component';
import { LeaveRecordComponent } from './leave-record.component';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AttendanceRecordComponent } from '../attendance/attendance-record.component';
import { StyleService } from './../.../../../../@vex/services/style.service';
import { LeaveComponent } from '../leaves/leave.component';
import { WaitComponent } from '../wait/wait.component';
import { MatMenuTrigger } from '@angular/material/menu';
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

import * as uuid from 'uuid';
import * as _moment from "moment";
import { DatePipe } from '@angular/common';
import { WaitRoutingModule } from '../wait/wait-routing.module';
import { PersonnelsEditComponent } from './../personnel/components/personnels-edit/personnels-edit.component';
const moment = _moment;
// import { ColorVariable, colorVariables } from './color-variables';
// import { ConfigService } from '../../services/config.service';
import { ConfigService } from './../../../@vex/services/config.service';
import { LayoutService } from './../../../@vex/services/layout.service';
import { configs } from './../../../@vex/services/configs';
import { ConfigName } from './../../../@vex/interfaces/config-name.model';
import { Config } from './../../../@vex/interfaces/config.model';

@Component({
  selector: 'scoring',
  templateUrl: './mscoring.component.html',
  styleUrls: ['./mscoring.component.scss'],
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
    // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    //  { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
// 
export class MScoringComponent<T> implements OnInit, OnChanges, OnDestroy {

  @ViewChild("viewPaginator", { static: false }) viewPaginator: MatPaginator;
  language: any = []; languageMap: LanguageMap = {};
  activeLinkIndex = 0;
  links = [];
  filterHide = false;
  nxtDisabled = true;
  footerHide = true;
  calculatingPersonel: string = '';
  scoreLabel: string = 'Hesapla';
  FilteroObjEnableArray: boolean[] = [true];
  selectedRowIndexM = '';
  selectedRowIndex = 0;
  selectedRowIndex2 = 0;
  selectedRowIndex3 = 0;
  icRefresh = icRefresh;
  icFilter = icFilter;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icCalculator = icCalculator;
  icColumns = icColumns;
  subFooter: boolean;
  backgroundColor: string;
  calcScoring = true;
  objList: any[] = [];
  scoringChangedValues: any[] = [];

  visibleColumns: Array<keyof T | string>;


  columns: TableColumn<T>[];
  selection = new SelectionModel<any>(true, []);

  form: FormGroup; //personel filterForm
  formSettings: FormGroup; // puantaj menu bar

  Collarcolors = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];

  progresValue: number;
  calculateArray: number[];
  columnsMArray: any[];
  columnsM = [];

  columnsSArray: any[];
  columnsS = [];
  pCALISMA: { [k: string]: any } = {};
  tCALISMA: { [k: string]: any } = {};

  columnsIO = ['ID', 'Code', 'NewDateTime', 'ReasonID', 'Device', 'ONewDateTime', 'OReasonID', 'ODevice', 'Actions'];
  columnsL = ['ID', 'EmployeeCode', 'Name', 'Surname', 'ReasonID', 'ReasonCode', 'ReasonName', 'StartDate', 'StartTime', 'Day', 'EndDate', 'EndTime', 'Description', 'CalcDescription', 'Actions'];

  filterEntity: any;
  filterEntityM: any;
  filterType: MatTableFilter;


  layoutCtrl = new FormControl('fullwidth');

  searchForm: FormGroup;

  formMFilter: FormGroup;
  formPFilter: FormGroup;

  pPRSICILID = 0;
  pPRSICIL = 0;
  pPRSICILName = '';
  pPRSICILSurname = '';
  icClose = icClose;


  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  @ViewChild("usrPaginator", { static: false }) usrPaginator: MatPaginator;
  dataSource: MatTableDataSource<any> | null;
  dataSourceS: MatTableDataSource<any> | null;
  dataSourceM: MatTableDataSource<any> | null;
  dataSourceIO: MatTableDataSource<any> | null;
  dataSourceL: MatTableDataSource<any> | null;
  selectionS = new SelectionModel<any>(true, []);
  selectionL = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  scoringViews: any = [];
  defaultScoringViewID = 0;
  defaultScoringViewMonthy = 0;
  ScoringView = new FormControl();
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



  leaves = [{ Name: 'Hepsi', Checked: true }, { Name: 'G??nl??k ??zinler', Checked: false }, { Name: 'Saatlik ??zinler', Checked: false }];
  breadcrumbs: string[];
  href: string;
  pageauth = { write: false, delete: false, update: false };
  tabAuth: any[];
  tabEmpAuth: any[];
  selectedObject: string;
  workingTypeList: any = [];

  data: T[];
  dataD: T[];
  tableColumns: TableColumn<any>[] = [];

  result: string;
  selectedRow = 0;
  updatePanelHidden = false;
  tabWait = 0;
  bCalc = true;
  say = 0;
  totalRecords = 0;
  objectRes: MatDialogRef<WaitComponent>;
  response: any;
  isMobileLayout = false;

  @ViewChild(MatMenuTrigger, { static: true })
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  configs: Config[] = configs;


  constructor(
    public datepipe: DatePipe,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    public personnelService: PersonnelService,
    public attendanceService: AttendanceService,
    private styleService: StyleService,
    public leavesService: LeavesService,
    public scoringService: ScoringService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private adapter: DateAdapter<any>,
    public configService: ConfigService,
    public layoutService: LayoutService,
    location: Location) {


  }

  controlDate(value) {

    let endDate = moment(value).format('YYYY-DD-MM');
    let startDate = this.form.value.StartDate.format('YYYY-MM-DD');

    console.log(endDate);
    console.log(startDate);


    if (startDate > endDate) {
      this.openSnackBar("??lk tarih son tarihten b??y??k olamaz");
      this.form.patchValue({ EndDate: null });
    }

  }


  onBlurMethod(type,value2)
  {

    const value1=(type=='Emp'?this.form.value.Emp1:(type=='EmpType'?this.form.value.EmpType1:(type=='Depart'?this.form.value.Depart1:(type=='Cost'?this.form.value.Cost1:(type=='Cadre'?this.form.value.Cadre1:(type=='Prof'?this.form.value.Prof1:(type=='Task'?this.form.value.Task1:(type=='Group'?this.form.value.Group1:(type=='Unit'?this.form.value.Unit1:(type=='Branch'?this.form.value.Branch1:(type=='Service'?this.form.value.Service1:'')))))))))));

    console.log(value1);
    if (value2 < value1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");    
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

  ngOnInit() {



    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;

    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    // this.backgroundColor=JSON.parse(sessionStorage.getItem('Color'))["default"];


    let startDate = moment(new Date());
    startDate.add(-10, 'days');
    let endDate = moment(new Date());



    this.route.paramMap.subscribe(params => {
      this.href = this.router.url;
      this.getUser(JSON.parse(localStorage.getItem('Username')), this.href.replace(/\//g, '@'));
      let tabs = [
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Puantaj Ayl??k Hesaplama' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Puantaj Ayl??k Tablo' },
      ]

      this.getUserTabs(tabs);

      tabs = [
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Temel Bilgiler' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Amir Bilgileri' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Amir Ba??l?? Personeller' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Kimlik Bilgisi' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel ??leti??im Bilgisi' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Ar??iv' }
      ]
      this.getEmployeeTabs(tabs)

      this.turkishCulture();
      this.languageMap = AppUtil.getLabels();
      this.breadcrumbs = [this.languageMap['Puantaj'].labelName, this.languageMap['Puantaj Hesaplama'].labelName, this.languageMap['Ayl??k Puantaj'].labelName];

      this.form = this.fb.group({
        Emp1: null, Emp2: null, EmpType1: null, EmpType2: null, Depart1: null, Depart2: null, Cost1: null, Cost2: null, Cadre1: null, Cadre2: null, Prof1: null, Prof2: null,
        Task1: null, Task2: null, Group1: null, Group2: null, Unit1: null, Unit2: null, Branch1: null, Branch2: null, Service1: null, Service2: null, Collar1: null, Collar2: null, Value: null,
        Type: null, StartDate: [startDate, Validators.required], EndDate: [endDate, Validators.required]

      });

      this.formMFilter = this.fb.group({ ID: false, EmployeeID: false, EmployeeCode: true, Name: false, Surname: false, Department: false, Month: true, Year: true });

      this.formPFilter = this.fb.group({ ID: false, EmployeeID: false, EmployeeCode: true, Name: false, Surname: false, Department: false, ShiftGroupDate: false, Scoring: false, Date: true, ShiftGroupCode: true, ShiftCode: true });


      this.formFilter = this.fb.group({ StartDate1: startDate, EndDate1: endDate });
      this.searchForm = this.fb.group({ departureDate: '' });
      this.formSettings = this.fb.group({ chkPFooter: false, chkPFilter: false, chkFreeze: false });
      this.filterEntity = {};
      this.filterType = MatTableFilter.ANYWHERE;
      this.filterEntityM = {};
      this.filterType = MatTableFilter.ANYWHERE;
    });

    this.definitionGetTypes();
    this.personnelGetFilterColumns();
    this.getPersonnel();

    for (let index = 0; index < 15; index++)
      this.FilteroObjEnableArray[index] = true;

  }

  onRightClick(event: MouseEvent, item: any) {

    console.log("dasdasdasd");
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }



  getMoreInformation(row): string {
    return "ADI:" + row['Name'] + " " + row['Surname'] + "\n" + "DEPARTMAN:" + row['Department'] + "\n" + "POSTA TARIH:" + row['ShiftGroupDate'];
  }


  definitionGetTypes() {

    this.definitionsService.DefinitionGetWorkingTypesById(0)
      .subscribe((res: any[]) => {
        Object.keys(res).forEach((key) => {
          let data = { ID: res[key].ID, Code: res[key].Code, Name: res[key].Name };
          this.workingTypeList.push(data);
        });

        // this.dataSource = new MatTableDataSource();
        // this.dataSource.data = res;

      });


  }


  getPersonnel() {


    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.form.value.Type = null;
    this.personnelService.GetPersonnel(this.form.value)
      .subscribe((res: any[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.usrPaginator;
        dialogRef.close();
      }, err => {
        console.log(err);
        // this.waitProgress(err, 3000);

        dialogRef.close();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {

    // if (changes["dataSource"]) {
    //   this.dataSource.paginator = this.usrPaginator;
    // }

    // if (changes.columns) {
    //   this.visibleColumns = this.columns.map(column => column.property);
    // }

    // if (changes.data) {
    //   this.dataSource.data = this.data;
    //   this.dataSource.paginator = this.usrPaginator;
    // }

    // if (changes.searchStr) {
    //   this.dataSource.filter = (this.searchStr || '').toString().trim().toLowerCase();
    // }
  }




  calculateScoring(obj) {

    return this.scoringService.CalculateMonthlyScoring(obj).toPromise().then(data => {
      this.response = <any>data;
    });


  }

  async calculate() {
    let idd = uuid.v4();
    if (this.scoreLabel === 'Hesapla') { this.scoreLabel = 'Durdur'; this.bCalc = true; }
    else { this.scoreLabel = 'Hesapla'; this.bCalc = false; };

    if (this.bCalc) {
      this.calculatingPersonel = this.languageMap['Hesaplama Ba??l??yor...'].labelName;
      this.progresValue = 0;
      this.calculateArray = new Array(this.selection.selected.length);
      this.say = 0;
    }

    let aaArray: any[] = [];
    let say2 = 0;
    let sayy = 0;
    for (var key in this.selection.selected) {
      sayy++;
      const aa = {
        Count: this.say, type: this.leavesRecordIndex, EmployeeID: this.selection.selected[key].ID,
        ID: idd,
        CompanyID: JSON.parse(sessionStorage.getItem('CompanyId')), 
        StartDate: moment(this.form.value.StartDate).format('YYYY-MM-DD'),
        EndDate: moment(this.form.value.EndDate).format('YYYY-MM-DD'),
        SendResult: (sayy == this.selection.selected.length) ? true : false
      }
      aaArray.push(aa);
      if (this.bCalc) {
        this.say++; say2++;

        if (this.say === this.selection.selected.length)
          await this.calculateScoring(aaArray);

        if (say2 === 50) {
          let response = await this.calculateScoring(aaArray);
          say2 = 0;
          aaArray = [];
        }
        this.calculatingPersonel = this.selection.selected[key].Code + '-' + this.selection.selected[key].Name + ' ' + this.selection.selected[key].Surname + ' ' + this.languageMap['puantaj hesaplan??yor...'].labelName + ' ' + ' Kay??t: ( ' + this.say.toString() + '/' + this.selection.selected.length.toString() + ' )';
        this.progresValue = this.progresValue + (100 / this.selection.selected.length);

        if (this.say === this.selection.selected.length) {
          this.scoreLabel = 'Hesapla';
        }
      } else break;

    }




  }

  changeView(e) {
    this.defaultScoringViewID = e.value;
    this.scoringViews.forEach(element => {
      if (element.ID === e.value)
        this.defaultScoringViewMonthy = element.MonthlyScoring;
    });
    
    this.getMonthlyScoring(1, 0, this.form.value.StartDate, this.form.value.EndDate, e.value);
    
  }


  getMonthlyScoringFilter() {
    let idArray = '';
    this.selection.selected.forEach(element => {
      idArray += element['ID'] + ',';
    });

    let EmployeeList: any = [];
    this.selection.selected.forEach(element => {
      EmployeeList.push(element.ID);
    });

    this.getMonthlyScoring(1,null,this.form.value.StartDate,this.form.value.EndDate,this.defaultScoringViewID);
  }


  getScoringFilter() {

    let idArray = '';
    this.selection.selected.forEach(element => {
      idArray += element['ID'] + ',';
    });

    let EmployeeList: any = [];
    this.selection.selected.forEach(element => {
      EmployeeList.push(element.ID);
    });

    const obj={view:this.defaultScoringViewID, type:0,StartDate:this.form.value.StartDate,EndDate: this.form.value.EndDate, EmployeeList:EmployeeList};
    this.getScoring(obj);
  }


  getMonthlyScoring(type, Id, StartDate, EndDate, view) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.footerHide = true;
    this.dataSourceS = null;
    this.dataSourceM = null;
    this.dataSourceL = null;
    this.dataSourceIO = null;
    this.filterType = MatTableFilter.ANYWHERE;
    let startDate = moment(StartDate).format('YYYY-MM-DD');
    let endDate = moment(EndDate).format('YYYY-MM-DD');

    let idArray = '';
    this.selection.selected.forEach(element => {
      idArray += element['ID'] + ',';
    });


    let EmployeeList: any = [];
    this.selection.selected.forEach(element => {
      EmployeeList.push(element.ID);
    });

    const obj = { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), view: view, type: type, StartDate: StartDate, EndDate: EndDate, EmployeeList: EmployeeList }

    this.scoringService.GetScoring(obj).subscribe((res: any[]) => {
        let say = 0;
        this.columnsMArray = [];
        if (res.length === 0) { dialogRef.close(); return; }
        for (let item of Object.keys(res[0])) {

          if (item === "filter")
            this.columnsMArray.push({ type: 'button', property: item, label: item });
          else if (item === "EmployeeID" || item === "EmployeeCode" || item === "Name" || item === "Surname" || item === "Department" || item === "Year" || item === "Month")
            this.columnsMArray.push({ type: 'text', property: item, label: item });
          else if (item.includes("WorkingTotalTime")  && this.defaultScoringViewMonthy==0) {
            if (this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('WorkingTotalTime', '')).length > 0)
              this.columnsMArray.push({ type: 'time', property: item, label: this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('WorkingTotalTime', ''))[0].Name });              
            else
              this.columnsMArray.push({ type: 'time', property: item, label: '' });
          }
          
          else if (item.includes("WorkingDecTotalTime")  && this.defaultScoringViewMonthy==1) {
            if (this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('WorkingDecTotalTime', '')).length > 0)
              this.columnsMArray.push({ type: 'time', property: item, label: this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('WorkingDecTotalTime', ''))[0].Name });              
            else
              this.columnsMArray.push({ type: 'time', property: item, label: '' });
          }
          else if (item.includes("WorkingTotalDay")) {
            if (this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('WorkingTotalDay', '')).length > 0)
              this.columnsMArray.push({ type: 'textDay', property: item, label:'(G)' });
            else
              this.columnsMArray.push({ type: 'textDay', property: item, label: '' });
          }

          // else if (item.includes("TotalDay")) {
          //   if (this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('TotalDay', '')).length > 0)
          //     this.columnsMArray.push({ type: 'text1', property: item, label: this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('TotalDay', ''))[0].Name + ' (G)' });
          //   else
          //     this.columnsMArray.push({ type: 'text1', property: item, label: '' });
          // }
          // else if (item.includes("DecTotalTime") && this.defaultScoringViewMonthy==1) {
          //   if (this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('DecTotalTime', '')).length > 0) 
          //     this.columnsMArray.push({ type: 'text1', property: item, label: this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('DecTotalTime', ''))[0].Name });
          //   else
          //     this.columnsMArray.push({ type: 'text1', property: item, label: '' });
          // }
          // else if (item.includes("TotalTime") && this.defaultScoringViewMonthy==0) {
          //   if (this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('TotalTime', '')).length > 0)
          //     this.columnsMArray.push({ type: 'text1', property: item, label: this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('TotalTime', ''))[0].Name + ' (S)' });
          //   else
          //     this.columnsMArray.push({ type: 'text1', property: item, label: '' });
          // }
        }
        this.columnsM = [] = this.columnsMArray.map(column => column.property);
        this.dataSourceM = new MatTableDataSource();
        this.dataSourceM.data = res;
        this.dataSourceM.paginator = this.viewPaginator;
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  getScoring(obj) {


    // type, Id, StartDate, EndDate, view, filter
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.footerHide = true;
    this.dataSourceS = null;
    this.dataSourceL = null;
    this.dataSourceIO = null;
    this.filterType = MatTableFilter.ANYWHERE;
    let startDate = moment(obj.StartDate).format('YYYY-MM-DD');
    let endDate = moment(obj.EndDate).format('YYYY-MM-DD');

    // let idArray = '';
    // this.selection.selected.forEach(element => {
    //   idArray += element['ID'] + ',';
    // });

    // let EmployeeList: any = [];
    // this.selection.selected.forEach(element => {
    //   EmployeeList.push(element.ID);
    // });

    const obj1 = { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), 
    view: obj.view, type: obj.type, StartDate: obj.StartDate, EndDate: obj.EndDate, EmployeeList: obj.EmployeeList }


    this.scoringService.GetScoring(obj1)
      .subscribe((res: any[]) => {
        let say = 0;
        this.columnsSArray = [];

        if (res.length === 0) { dialogRef.close(); return; }
        for (let item of Object.keys(res[0])) {
          if (item === "filter")
            this.columnsSArray.push({ type: 'button', property: item, label: item });
          else if (item === "EmployeeID" || item === "EmployeeCode" || item === "Name" || item === "Surname" || item === "Department" || item === "Scoring" || item === "ShiftGroupCode"
            || item === "ShiftCode")
            this.columnsSArray.push({ type: 'text', property: item, label: item });
          else if (item === "ShiftGroupDate" || item === "Date")
            this.columnsSArray.push({ type: 'date', property: item, label: item });
          else if (item.includes("WorkingTime")) {
            if (this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('WorkingTime', '')).length > 0)
              this.columnsSArray.push({ type: 'time', property: item, label: this.workingTypeList.filter((sitem: { [x: string]: { toString: () => string; }; }) => sitem["ID"].toString() === item.replace('WorkingTime', ''))[0].Name });
            else
              this.columnsSArray.push({ type: 'time', property: item, label: '' });
            this.pCALISMA[item] = 0;
            this.tCALISMA[item] = 0;
          }
        }

        this.columnsS = [] = this.columnsSArray.map(column => column.property);
        this.footerHide = false;
        this.dataSourceS = new MatTableDataSource();
        this.dataSourceS.data = res;
        // this.dataSourceS.paginator = this.viewPaginator;


        this.setFooter(res);
        // this.getLeaves(0, 0, this.form.value.StartDate, this.form.value.EndDate, null);
        // this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, null);
        this.getLeaves(0, 0, startDate, endDate, obj.EmployeeCode);
        this.getAttendance(startDate, endDate, obj.EmployeeCode);
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }


  Approve(item: any, something: any) {
    
    item["Approve"] = true;
    this.scoringChangedValues = [];
    this.scoringChangedValues.push(item);
    this.saveScoring();

  }

  ApproveCancel(item: any, something: any) {
    
    item["Approve"] = false;
    this.scoringChangedValues = [];
    this.scoringChangedValues.push(item);
    this.saveScoring();
  }


  saveScoring() {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });




    this.scoringService.PostScoring(this.scoringChangedValues)
      .subscribe((res) => {

        console.log(this.scoringChangedValues);

        // let startDate = moment(this.scoringChangedValues[0].Date.substring(0, 4) + '-' + this.scoringChangedValues[0].Date.substring(5, 7) + '-' + '01').format('YYYY-MM-DD');
        // let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');
        


        let startDatee = moment(this.scoringChangedValues[0].Date.substring(0, 4) + '-' + this.scoringChangedValues[0].Date.substring(5, 7) + '-' + '01').format('YYYY-MM-DD');
        let endDatee =  moment(startDatee).endOf('month').format('YYYY-MM-DD');
        let startDate = moment(this.form.value.StartDate).format('YYYY-MM-DD');
        let endDate = moment(this.form.value.EndDate).format('YYYY-MM-DD');
        

        let EmployeeList: any = [];
        EmployeeList.push(this.scoringChangedValues[0].EmployeeID);


        const obj = {
          CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')),
          view: this.defaultScoringViewID, type: 0,
          StartDate: (startDate<startDatee)?startDatee:startDate,
          EndDate: (endDate>endDatee)?endDatee:endDate,
          EmployeeList: EmployeeList,
          EmployeeCode:this.scoringChangedValues[0].EmployeeCode
        }
          
        this.getScoring(obj);
        this.scoringChangedValues = [];
        this.calcScoring = true;
      }, err => {

        console.log(err);
        dialogRef.close();
      });



  }

  scoringChanged(column, row, event) {

    // console.log(row);
    // this.objList.push(event.target.id);
    // this.scoringChangedValues.push({ ID: row.ID, WorkingTime: column, Value: event.target.value });
    // row[column]=moment(event.target.value,"YYYY-MM-DD HH:mm:ss");
    row[column] = '1900-01-01T' + event.target.value + ':00';
    const element = document.getElementById(event.target.id);
    element.style.color = 'red';
    element.style.fontSize = '12px';
    element.style.fontWeight = 'bolder';
    this.calcScoring = false;
  }

  setFooter(data) {

    for (var prop in this.tCALISMA) {
      if (this.tCALISMA.hasOwnProperty(prop)) {
        this.tCALISMA[prop] = 0;
      }
    }
    this.dataSourceS.data.forEach(row => {
      var start = "1900-01-01 00:00:00";
      for (let item of Object.keys(row)) {
        if (item.includes("WorkingTime"))
          this.tCALISMA[item] += moment(row[item], "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
      }
    }
    );

  }

  showWaitScreen(observable: Observable<Object>) {
    let dialogRef: MatDialogRef<WaitComponent> = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    let subscription = observable.subscribe(
      (response: any) => {
        subscription.unsubscribe();
        dialogRef.close();
      },
      (error) => {
        subscription.unsubscribe();
        dialogRef.close();
      }
    );
  }



  filterScoring() {

    this.selection.clear();
    this.calculatingPersonel = "";
    this.scoreLabel = 'Hesapla';
    this.progresValue = 0;
    this.calculateArray = new Array(this.selection.selected.length);
    this.say = 0;
    this.getPersonnel();
  }


  definitionGetScoringDeff(row) {

    let id = 0;
    if (row === null) id = 0; else if (row.ID === undefined) id = 0; else id = row.ID;
    this.scoringViews = [];
    this.scoringService.GetScoringDeff(id)
      .subscribe((res: any[]) => {
        res.forEach(element => {
          if (element.Default) { this.defaultScoringViewID = element.ID; this.defaultScoringViewMonthy = element.MonthlyScoring; }
          this.scoringViews.push({ ID: element.ID, Name: element.Name, Default: element.Default, MonthlyScoring: element.MonthlyScoring });
        });
      });
  }

  gotoTab(index) {

    if (index === 0)
      this.filterScoring();
    else {
      this.definitionGetScoringDeff(null);
      this.getMonthlyScoring(1, 0, this.form.value.StartDate, this.form.value.EndDate, this.defaultScoringViewID);
    }

    this.nxtDisabled = true;
    this.activeLinkIndex = index;

  }

  ngDoCheck() {


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
            this.links.push({ index: Number(key), name: this.tabAuth[key].tabname.replace('G??nl??k ', '') });
        });

      }, err => {
        console.log(err);

      });
  }


  getEmployeeTabs(tabs) {
    this.authorizationService.GetUserTabs(tabs)
      .subscribe((res: any[]) => {
        this.tabEmpAuth = res;

      }, err => {
        console.log(err);

      });
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  applyFilterLeave(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceL.filter = filterValue;
  }


  applyFilterAttendance(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceIO.filter = filterValue;
  }



  masterToggle() {

    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));

    if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;

  }


  detailToggle(row) {

    this.selection.toggle(row);
    if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;
  }

  openDefinition(value, obj) {
    this.dialog.open(ScoringDefinitionsComponent, {
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
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Emp2: result.Code });
        }
      }

      if (value == '3') {
        if (obj == 1) { this.form.patchValue({ EmpType1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[3] = false; else this.FilteroObjEnableArray[3] = true; }
        else {
          if (result.Code < this.form.value.EmpType1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ EmpType2: result.Code });
        }
      }

      if (value == '1') {

        if (obj == 1) { this.form.patchValue({ Depart1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[1] = false; else this.FilteroObjEnableArray[1] = true; }
        else {
          if (result.Code < this.form.value.Depart1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Depart2: result.Code });
        }
      }
      if (value == '4') {

        if (obj == 1) { this.form.patchValue({ Cost1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[4] = false; else this.FilteroObjEnableArray[4] = true; }
        else {
          if (result.Code < this.form.value.Cost1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Cost2: result.Code });
        }
      }
      if (value == '5') {

        if (obj == 1) { this.form.patchValue({ Cadre1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[5] = false; else this.FilteroObjEnableArray[5] = true; }
        else {
          if (result.Code < this.form.value.Cadre1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Cadre2: result.Code });
        }
      }
      if (value == '6') {
        if (obj == 1) { this.form.patchValue({ Prof1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[6] = false; else this.FilteroObjEnableArray[6] = true; }
        else {
          if (result.Code < this.form.value.Prof1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Prof2: result.Code });
        }
      }

      if (value == '7') {

        if (obj == 1) { this.form.patchValue({ Task1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[7] = false; else this.FilteroObjEnableArray[7] = true; }
        else {
          if (result.Code < this.form.value.Task1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Task2: result.Code });
        }
      }

      if (value == '8') {

        if (obj == 1) { this.form.patchValue({ Group1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[8] = false; else this.FilteroObjEnableArray[8] = true; }
        else {
          if (result.Code < this.form.value.Group1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Group2: result.Code });
        }
      }

      if (value == '9') {
        if (obj == 1) { this.form.patchValue({ Unit1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[9] = false; else this.FilteroObjEnableArray[9] = true; }
        else {
          if (result.Code < this.form.value.Unit1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Unit2: result.Code });
        }
      }

      if (value == '10') {

        if (obj == 1) { this.form.patchValue({ Branch1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[10] = false; else this.FilteroObjEnableArray[10] = true; }
        else {
          if (result.Code < this.form.value.Branch1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Branch2: result.Code });
        }
      }

      if (value == '11') {

        if (obj == 1) { this.form.patchValue({ Service1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[11] = false; else this.FilteroObjEnableArray[11] = true; }
        else {
          if (result.Code < this.form.value.Service1)
            this.openSnackBar("??lk de??er son de??erden b??y??k olamaz");
          this.form.patchValue({ Service2: result.Code });
        }
      }

      if (value == '12') {
        if (obj == 1) { this.form.patchValue({ Gomlek1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[12] = false; else this.FilteroObjEnableArray[12] = true; }
        else
          this.form.patchValue({ Gomlek2: result.Code });
      }
    });
  }








  ClearPFilter() {



    this.form.reset();
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    startDate.add(-10, 'days');
    this.form.patchValue({ StartDate: startDate, EndDate: endDate });
    this.dataSource = null;
    this.footerHide = true;

  }



  filterPersonnel() {
    this.personnelGetFilterColumns();
    this.getPersonnel();

  }



  MasterToggleM(selected) {

    if (this.selectedRowIndexM !== selected.ID) {
      

      // const dialogRef = this.dialog.open(WaitComponent, {
      //   panelClass: 'transparent',
      //   disableClose: true
      // });

      this.selectedRowIndexM = selected.ID;
      // let startDate = moment(selected.Year + '-' + selected.Month + '-' + '01').format('YYYY-MM-DD');
      // let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');

      let startDatee = moment(selected.Year + '-' + selected.Month + '-' + '01').format('YYYY-MM-DD');
      let endDatee = moment(startDatee).endOf('month').format('YYYY-MM-DD');
      let startDate = moment(this.form.value.StartDate).format('YYYY-MM-DD');
      let endDate = moment(this.form.value.EndDate).format('YYYY-MM-DD');
      // if (endDate>endDatee) endDate=endDatee;

      this.pPRSICILID = selected.EmployeeID;
      this.pPRSICIL = selected.EmployeeCode;
      this.pPRSICILName = selected.Name;
      this.pPRSICILSurname = selected.Surname;

      let EmployeeList: any = [];
      EmployeeList.push(selected.EmployeeID);
      const obj = {
        CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')),
        view: this.defaultScoringViewID, type: 0,
        StartDate: (startDate<startDatee)?startDatee:startDate,
        EndDate: (endDate>endDatee)?endDatee:endDate,
        EmployeeList: EmployeeList,
        EmployeeCode:selected.EmployeeCode
      }

      this.getScoring(obj);
    }


  }


  detailToggleS(selected) {

    if (this.selectedRowIndex !== selected.ID) {
      this.selectedRowIndex = selected.ID;

      for (var prop in this.pCALISMA) {
        if (this.pCALISMA.hasOwnProperty(prop)) {
          this.pCALISMA[prop] = 0;
        }
      }

      // var start = "1900-01-01 00:00:00";
      // for (let item of Object.keys(row)) {
      //   if (item.includes("WorkingTime"))
      //     this.tCALISMA[item] += moment(row[item], "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
      // }

      this.dataSourceS.data.forEach(row => {

        if (selected.EmployeeCode === row.EmployeeCode) {
          var start = "1900-01-01 00:00:00";
          for (let item of Object.keys(row)) {
            this.pCALISMA[item] += moment(row[item], "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          }
          // this.pCALISMA.CALISMA2 += moment(row.CALISMA2, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA3 += moment(row.CALISMA3, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA4 += moment(row.CALISMA4, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA5 += moment(row.CALISMA5, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA19 += moment(row.CALISMA19, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA36 += moment(row.CALISMA36, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA37 += moment(row.CALISMA37, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA38 += moment(row.CALISMA38, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA39 += moment(row.CALISMA39, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA44 += moment(row.CALISMA44, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA47 += moment(row.CALISMA47, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA48 += moment(row.CALISMA48, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA49 += moment(row.CALISMA49, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
          // this.pCALISMA.CALISMA50 += moment(row.CALISMA50, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        }
      }
      );


      this.pPRSICILID = selected.EmployeeID;
      this.pPRSICIL = selected.EmployeeCode;
      this.pPRSICILName = selected.Name;
      this.pPRSICILSurname = selected.Surname;

      let startDate = moment(selected.YIL + '-' + selected.AY + '-' + '01').format('YYYY-MM-DD');
      let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');


      // this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, selected.EmployeeCode);
      // this.getLeaves(0, 0, this.form.value.StartDate, this.form.value.EndDate, selected.EmployeeCode);

    }
  }


  getLeaves(type, Id, StartDate, EndDate, EmployeeCode) {

    let startDate = moment(StartDate).format('YYYY-MM-DD');
    let endDate = moment(EndDate).format('YYYY-MM-DD');


    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    if (EmployeeCode !== null)
      this.leavesService.GetLeavesEmployee(null, Id, startDate, endDate, EmployeeCode)
        .subscribe((res: any[]) => {
          console.log(res);
          this.dataSourceL = new MatTableDataSource();
          this.dataSourceL.data = res;
          dialogRef.close();
        }, err => {
          console.log(err);
          dialogRef.close();
        });
    else
      this.leavesService.GetLeaves(null, Id, startDate, endDate)
        .subscribe((res: any[]) => {
          console.log(res);
          this.dataSourceL = new MatTableDataSource();
          this.dataSourceL.data = res;
          dialogRef.close();
        }, err => {
          console.log(err);
          dialogRef.close();
        });

  }


  addLeave(item) {

    console.log(item);
    this.dialog.open(LeaveRecordComponent, {
      data: { NewRecord: true, Data: { 'Type': null, 'EmployeeID': this.pPRSICILID === 0 ? null : this.pPRSICILID, 'EmployeeCode': this.pPRSICIL === 0 ? null : this.pPRSICIL, 'EmployeeName': this.pPRSICILName + ' ' + this.pPRSICILSurname } },
      panelClass: 'myapp-no-padding-dialog',
      // panelClass: 'custom-modalbox',
      disableClose: false,
      autoFocus: false,
      width: '600px',

    }).afterClosed().subscribe(result => {
      if (result)
        this.getLeaves(0, 0, this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
    });
  }


  editContact(item) {

    this.dialog.open(PersonnelsEditComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { type: 'edit', contactId: item.EmployeeID || null, chief: false || null, auth: false, tabAuth: this.tabEmpAuth },
      width: '1100px',
      height: '770px',
      disableClose: true,
      maxWidth: this.isMobileLayout ? '100vw' : '80vw'
      // panelClass: 'padding:0px'
    }).afterClosed().subscribe(result => {
      // if (result)
      //   this.getPersonnel(null);
    });
  }

  updateLeave(row) {

    this.selectedRowIndex3=row.ID;
    this.dialog.open(LeaveRecordComponent, {
      data: { NewRecord: false, Data: row },
      panelClass: 'myapp-no-padding-dialog',
      disableClose: false,
      autoFocus: true,
      width: '600px',
    }).afterClosed().subscribe(result => {
      if (result)
        this.getLeaves(0, 0, this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
    });
  }


  deleteLeave(row) {
    this.selectedRowIndex3=row.ID;    
    this.openDialog(row.ID, 0, 'Leave');
  }



  addAttendance(row) {

    // data: { RecordOrInout: 1, Data: {  'EmployeeCode': this.pPRSICIL === 0 ? null : this.pPRSICIL, 'IIDNO': null, 'OIDNO': null, 'ReasonID': 0, 'OReasonID': 0, 'Name': this.pPRSICILName, 'Surname': this.pPRSICILSurname, 'NewDateTime': null, 'ONewDateTime': null } },

    this.dialog.open(AttendanceRecordComponent, {
      data: {
        RecordOrInout: 1, Data: {
          'ID': this.pPRSICILID,
          'EmployeeCode': this.pPRSICIL === 0 ? null : this.pPRSICIL, 'IIDNO': null, 'OIDNO': null, 'ReasonID': 0, 'OReasonID': 0,
          'Name': this.pPRSICILName, 'Surname': this.pPRSICILSurname, 'NewDateTime': null, 'ONewDateTime': null
        }
      },
      panelClass: 'myapp-no-padding-dialog',
      disableClose: false,
      autoFocus: false,
      width: '750px',
      maxWidth: this.isMobileLayout ? '100vw' : '80vw'
    }).afterClosed().subscribe(result => {
      if (result)
        this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
    });
  }

  updateAttendance(row) {

    this.selectedRowIndex2=row.IIDNO;
    this.dialog.open(AttendanceRecordComponent, {
      data: { RecordOrInout: 1, Data: row },
      panelClass: 'myapp-no-padding-dialog',
      disableClose: false,
      autoFocus: false,
      width: '750px',
      maxWidth: this.isMobileLayout ? '100vw' : '80vw'
    }).afterClosed().subscribe(result => {
      if (result)
        this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
    });
  }


  deleteAttendance(row) {
    this.selectedRowIndex2=row.IIDNO;
    this.openDialog(row.IIDNO, row.OIDNO, 'Attendance');
  }

  getAttendance(begin, end, employee) {



    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    var filter = this.form.value;
    filter.Type = 1;
    if (employee !== null) { filter.Emp1 = employee; filter.Emp2 = employee; }
    else { filter.Emp1 = null; filter.Emp2 = null; }
    this.attendanceService.GetAttendance(filter)
      .subscribe((res: any[]) => {
        this.dataSourceIO = new MatTableDataSource();
        this.dataSourceIO.data = res;
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }


  deleteLeaveRecord(Id) {

    this.leavesService.DeleteLeaves(Id)
      .subscribe((res: any[]) => {
        this.getLeaves(this.leavesRecordIndex, 0, this.formFilter.value.StartDate1, this.formFilter.value.EndDate1, this.pPRSICIL === 0 ? null : this.pPRSICIL);
      });


  }

  deleteAttendanceRecord(IIDNO, OIDNO) {
    this.attendanceService.DeleteAttendance(IIDNO, OIDNO)
      .subscribe((res) => {
        this.getAttendance(this.form.value.StartDate, this.form.value.EndDate, this.pPRSICIL === 0 ? null : this.pPRSICIL);
      });

  }


  openDialog(IIDNO, OIDNO, type) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: type === 'Leave' ? this.languageMap['??zin bilgisi silinecektir.'].labelName : this.languageMap['Hareket bilgisi silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istedi??inize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hay??r'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {

        if (type === 'Leave') this.deleteLeaveRecord(IIDNO);
        if (type === 'Attendance') this.deleteAttendanceRecord(IIDNO, (OIDNO == null ? 0 : OIDNO));
      }
    });
  }


  textSelected(name) {
    this.selectedObject = name;
  }




  turkishCulture() {
    this.adapter.setLocale("tr");
  }





  personnelGetFilterColumns() {

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

        selectedColumns.push({ label: 'Se??', property: 'select', type: 'checkbox', cssClasses: ['font-medium'] });

        arr.forEach(element => {
          if (element.Active) {
            if (element.ColumnName === 'Photo') return;
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



  // ngAfterViewInit() {
  //   this.dataSourceS.paginator = this.viewPaginator;

  // }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
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



export interface Item {
  id: number;
  name: string;
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