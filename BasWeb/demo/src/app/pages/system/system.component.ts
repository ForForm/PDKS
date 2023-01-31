import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, SimpleChanges, OnChanges, ViewChild, Optional, ChangeDetectorRef, HostListener } from '@angular/core';
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
import { SystemService } from '../services/system.service';
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
import { MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
// import { untilDestroyed } from 'ngx-take-until-destroy';
// import {OverlayContainer} from '@angular/cdk/overlay';
import { WaitComponent } from '../wait/wait.component';
import { LayoutService } from './../../../@vex/services/layout.service';
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

export class GridFilterEntity {
  PRSICIL: string;
  ADI: string;
  SOYADI: string;
  DEPART: string;
  POSTAR: Date;
  PUANTAJ: string;
  TARIH: Date;
  PSKODU: string;
  VRKODU: string;
  CALISMA1: Time;
  CALISMA2: Time;
  CALISMA3: Time;
  CALISMA4: Time;
  CALISMA5: Time;
  CALISMA19: Time;
  CALISMA36: Time;
  CALISMA37: Time;
  CALISMA38: Time;
  CALISMA39: Time;
  CALISMA44: Time;
  CALISMA47: Time;
  CALISMA48: Time;
  CALISMA49: Time;
  CALISMA50: Time;

}


@Component({
  selector: 'system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss'],
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
export class SystemComponent<T> implements OnInit, OnChanges, OnDestroy {

  language: any = []; languageMap: LanguageMap = {};
  activeLinkIndex = 1;
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
  selectedRow=0;
  //datasources
  dataSource: MatTableDataSource<any> | null; //PersonelListe
  // columns: TableColumn<T>[];
  columns = ['Checkbox', 'ID', 'Name', 'Database', 'Protocol', 'Hostname', 'Username', 'Password', 'Inout',  'Repeat','Actions'];
  columnsDb = ['Checkbox', 'ID', 'Name', 'Database', 'Protocol', 'Hostname', 'Username', 'Password', 'DbTable','TransferIdColumn','TransferId','TransferType','Inout', 'RepeatTime','RepeatDirection', 'Limit','FirstLast', 'InChar','OutChar','DbQuery','Actions'];
  columnsFile = ['Checkbox', 'ID', 'Name', 'File', 'Inout', 'InChar','OutChar','Actions'];
  selection = new SelectionModel<any>(true, []);
  visibleColumns: Array<keyof T | string>;
  //datasources

  //forms
  form: FormGroup; //personel filterForm
  formDatabase: FormGroup; //personel filterForm
  formFile: FormGroup; //personel filterForm
  formSettings: FormGroup; // puantaj menu bar
  //forms

  Collarcolors = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];

  //progressBar
  progresValue: number;
  calculateArray: number[];
  //progreessBar

  columnsSArray = [{ type: 'button', property: 'filter' }, { type: 'text', property: 'PRSICIL' }, { type: 'text', property: 'ADI' }, { type: 'text', property: 'SOYADI' }, { type: 'text', property: 'DEPART' }, { type: 'date', property: 'POSTAR' }, { type: 'text', property: 'PUANTAJ' }, { type: 'date', property: 'TARIH' }, { type: 'text', property: 'PSKODU' }, { type: 'text', property: 'VRKODU' }, { type: 'time', property: 'CALISMA1' }, { type: 'time', property: 'CALISMA2' }, { type: 'time', property: 'CALISMA3' }, { type: 'time', property: 'CALISMA4' }, { type: 'time', property: 'CALISMA5' }, { type: 'time', property: 'CALISMA19' }, { type: 'time', property: 'CALISMA36' }, { type: 'time', property: 'CALISMA37' }, { type: 'time', property: 'CALISMA38' }, { type: 'time', property: 'CALISMA39' }, { type: 'time', property: 'CALISMA44' }, { type: 'time', property: 'CALISMA47' }, { type: 'time', property: 'CALISMA48' }, { type: 'time', property: 'CALISMA49' }, { type: 'time', property: 'CALISMA50' }
  ];

  columnsS = ['filter', 'PRSICIL', 'ADI', 'SOYADI', 'DEPART', 'POSTAR', 'PUANTAJ', 'TARIH', 'PSKODU', 'VRKODU', 'CALISMA1', 'CALISMA2', 'CALISMA3', 'CALISMA4', 'CALISMA5', 'CALISMA19', 'CALISMA36', 'CALISMA37', 'CALISMA38', 'CALISMA39', 'CALISMA44', 'CALISMA47', 'CALISMA48', 'CALISMA49', 'CALISMA50'];
  columnsIO = ['ID', 'Code', 'NewDateTime', 'ReasonID', 'Device', 'ONewDateTime', 'OReasonID', 'ODevice', 'Actions'];
  columnsL = ['ID', 'Code', 'Name', 'Surname', 'ReasonID', 'ReasonCode', 'ReasonName', 'StartDate', 'StartTime', 'Day', 'EndDate', 'EndTime', 'Description', 'CalcDescription', 'Actions'];

  filterEntity: GridFilterEntity;
  // filterType: MatTableFilter;



  layoutCtrl = new FormControl('boxed');

  searchForm: FormGroup;

  formPFilter: FormGroup;



  pCALISMA = { CALISMA1: 0, CALISMA2: 0, CALISMA3: 0, CALISMA4: 0, CALISMA5: 0, CALISMA19: 0, CALISMA36: 0, CALISMA37: 0, CALISMA38: 0, CALISMA39: 0, CALISMA44: 0, CALISMA47: 0, CALISMA48: 0, CALISMA49: 0, CALISMA50: 0 };
  tCALISMA = { CALISMA1: 0, CALISMA2: 0, CALISMA3: 0, CALISMA4: 0, CALISMA5: 0, CALISMA19: 0, CALISMA36: 0, CALISMA37: 0, CALISMA38: 0, CALISMA39: 0, CALISMA44: 0, CALISMA47: 0, CALISMA48: 0, CALISMA49: 0, CALISMA50: 0 };

  pPRSICIL = 0;
  icClose = icClose;


  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSourceS: MatTableDataSource<any> | null;
  dataSourceIO: MatTableDataSource<any> | null;
  dataSourceL: MatTableDataSource<any> | null;


  selectionS = new SelectionModel<any>(true, []);
  selectionL = new SelectionModel<any>(true, []);
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
  enabled=true;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  data: T[];
  dataD: T[];
  tableColumns: TableColumn<any>[] = [];
  testOk=false;
  result: string;

  updatePanelHidden = false;
  isMobileLayout=false;
  constructor(
    // overlayContainer: OverlayContainer,
    public datepipe: DatePipe,
    private route: ActivatedRoute,
    public paramsService: ParamsService,
    public systemService: SystemService,
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


  delete(row)
  {
    this.openDialog('DB',row);

  }

  resize(type)
  {
    if (type=='fullwidth')
    this.layoutService.collapseSidenav();
    else 
    this.layoutService.expandSidenav();

  }

  myObservable(observer) {
    setTimeout(() => {
      observer.next("");
      observer.complete();
    }, 2000);
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



  openSnackBar(message,timer) {  
    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'] ,
      duration: timer,
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

  ngOnInit() {

    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
    this.isMobileLayout = window.innerWidth <= 991;
 
    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    this.turkishCulture();
    // this.href = this.router.url;
    // this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))

    this.form = this.fb.group({
      ID: null, Name: null, Database: null, Protocol: null, Hostname: null, DUsername: null, Password: null, Repeat: null, Inout: null
    });


    this.formDatabase = this.fb.group({
      ID: null, 
      Name: [null, Validators.required],
      Database: [null, Validators.required], 
      Protocol: [null, Validators.required],
      Hostname: [null, Validators.required],
      DUsername:[null, Validators.required],
      Password: [null, Validators.required], 
      DbTable: [null, Validators.required], 
      TransferIdColumn: [null, Validators.required], 
      TransferId: null, 
      TransferType: null, 
      Inout: 0,
      RepeatTime: null,
      RepeatDirection: 0,
      Limit: null,
      FirstLast:0,
      InChar: null, 
      OutChar: null,
      DbQuery: null
    });

    
    this.formFile = this.fb.group({
      ID: null, Name: null, File: null, Inout: null, InChar: null, OutChar: null
    });

    this.formPFilter = this.fb.group({ PRSICIL: true, ADI: false, SOYADI: false, DEPART: false, POSTAR: false, PUANTAJ: false, TARIH: false, PSKODU: false, VRKODU: false });
    this.searchForm = this.fb.group({ departureDate: '' });
    this.formSettings = this.fb.group({ chkPFooter: false, chkPFilter: false, chkFreeze: false });
    // this.filterEntity = new GridFilterEntity();
    // this.filterType = MatTableFilter.ANYWHERE;

    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.breadcrumbs = [this.languageMap['Sistem'].labelName, this.languageMap['Sistem Tanımları'].labelName];

      const obj = { type: 'workType', code: 0 };
      // this.getParamsGroup();

      // this.links.push({ Index: 0, name: "Sistem Tanımı" });
      this.links.push({ Index: 1, name: "DB Sistem Tanımı" });
      // this.links.push({ Index: 2, name: "Dosya Sistem Tanımı" });


      this.getInfo();
    });

  }


  test(Id)
  {
    this.enabled=false;
    this.testOk=false;
    // this.openSnackBar('İşlem Yapılıyor....',300000);
    this.systemService.GetSystemDatabaseTest(Id)
    .subscribe((res: any[]) => {
      this.enabled=true;
      if (res['ReturnDscr']=='Sucess') 
      this.testOk=true;
      this.openSnackBar(res['ReturnDscr'],3000);
     }, err => {
      console.log(err);

    });

  }


  save()
  {
    if (this.activeLinkIndex == 0) this.PostSystemHost();
    if (this.activeLinkIndex == 1) this.PostSystemDatabase();
    if (this.activeLinkIndex == 2) this.PostSystemFile();
  
  }


  PostSystemHost() {

    this.waitProgress(this.languageMap['İşlem yapılıyor. Lütfen Bekleyiniz...'].labelName, undefined);
    const definition = this.form.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    // definition.ID=0;
    this.systemService.PostSystemHost(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        this.getInfo();
        this.waitProgressDismiss();

      }, err => {
        console.log(err);
        this.waitProgress(err, 3000);
      });
  }


  PostSystemDatabase() {

    this.waitProgress(this.languageMap['İşlem yapılıyor. Lütfen Bekleyiniz...'].labelName, undefined);
    const definition = this.formDatabase.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    // definition.ID=0;
    this.systemService.PostSystemDatabase(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        this.getInfo();
        this.waitProgressDismiss();

      }, err => {
        console.log(err);
        this.waitProgress(err, 3000);
      });
  }

  PostSystemFile() {

    this.waitProgress(this.languageMap['İşlem yapılıyor. Lütfen Bekleyiniz...'].labelName, undefined);
    const definition = this.formFile.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    // definition.ID=0;
    this.systemService.PostSystemFile(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        this.getInfo();
        this.waitProgressDismiss();

      }, err => {
        console.log(err);
        this.waitProgress(err, 3000);
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


  clear() {

    if (this.activeLinkIndex == 0) this.form.reset(); 
    if (this.activeLinkIndex == 1) this.formDatabase.reset() 
    if (this.activeLinkIndex == 2) this.formFile.reset();


  }


  getSystemDataBase()
  {

    this.systemService.GetSystemDatabase()
    .subscribe((res: any[]) => {

      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res;

    }, err => {
      console.log(err);

    });
  }


  getSystemHost()
  {
    this.systemService.GetSystemHost()
    .subscribe((res: any[]) => {

      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res;

    }, err => {
      console.log(err);

    });
  }


  getSystemFile()
  {
    this.systemService.GetSystemFile()
    .subscribe((res: any[]) => {

      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res;

    }, err => {
      console.log(err);

    });
  }

  getInfo() {

    if (this.activeLinkIndex == 0)  this.getSystemHost();
    else if (this.activeLinkIndex == 1) this.getSystemDataBase();
    else if (this.activeLinkIndex == 2)  this.getSystemFile();
  }


  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.columns) {
    //   this.visibleColumns = this.columns.map(column => column.property);
    // }

    if (changes.data) {
      this.dataSource.data = this.data;
    }

    if (changes.searchStr) {
      this.dataSource.filter = (this.searchStr || '').toString().trim().toLowerCase();
    }

    this.dataSource.sort = this.sort;

  }


  gotoTab(link) {
    this.nxtDisabled = true;
    this.activeLinkIndex = link.Index;
    this.getInfo();
  }



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));

    if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;

  }


  detailToggle(row) {
    // this.selection.toggle(row);
    // if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;
    this.selectedRow = this.selectedRow === row ? null : row;
    this.form.patchValue({ ID: row.ID, Name: row.Name, Database: row.Database, Protocol: row.Protocol, Hostname: row.Hostname, DUsername: row.Username, Password: row.Password, Inout: row.Inout, RepeatTime: row.RepeatTime});
  }


  detailToggleDb(row) {
    // this.selection.toggle(row);
    // if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;
    this.selectedRow = this.selectedRow === row ? null : row;
    this.formDatabase.patchValue({ ID: row.ID, Name: row.Name, Database: row.Database, Protocol: row.Protocol, Hostname: row.Hostname, DUsername: row.Username, Password: row.Password,DbTable:row.DbTable,
      TransferIdColumn:row.TransferIdColumn,TransferType:row.TransferType, TransferId:row.TransferId,
       Inout: row.Inout,InChar:row.InChar,OutChar:row.OutChar,DbQuery:row.DbQuery, RepeatTime:moment(row.RepeatTime, "YYYY-MM-DD HH:mm:ss").format("HH:mm"),
        RepeatDirection:row.RepeatDirection, Limit:moment(row.Limit, "YYYY-MM-DD HH:mm:ss").format("HH:mm"), FirstLast:row.FirstLast  });
  }


  
  detailToggleFile(row) {
    // this.selection.toggle(row);
    // if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;

    this.formFile.patchValue({ ID: row.ID, Name: row.Name, File: row.File,Inout: row.Inout,InChar:row.InChar,OutChar:row.OutChar });
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

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

      });

    // this.searchCtrl.valueChanges.pipe(
    //   untilDestroyed(this)
    // ).subscribe(value => this.onFilterChange(value));

  }












  detailToggleS(selected) {


    for (var prop in this.pCALISMA) {
      if (this.pCALISMA.hasOwnProperty(prop)) {
        this.pCALISMA[prop] = 0;
      }
    }

    this.dataSourceS.data.forEach(row => {
      // debugger;

      if (selected.PRSICIL === row.PRSICIL) {
        var start = "1900-01-01 00:00:00"; //var end = row.CALISMA1;
        this.pCALISMA.CALISMA1 += moment(row.CALISMA1, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA2 += moment(row.CALISMA2, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA3 += moment(row.CALISMA3, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA4 += moment(row.CALISMA4, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA5 += moment(row.CALISMA5, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA19 += moment(row.CALISMA19, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA36 += moment(row.CALISMA36, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA37 += moment(row.CALISMA37, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA38 += moment(row.CALISMA38, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA39 += moment(row.CALISMA39, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA44 += moment(row.CALISMA44, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA47 += moment(row.CALISMA47, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA48 += moment(row.CALISMA48, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA49 += moment(row.CALISMA49, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
        this.pCALISMA.CALISMA50 += moment(row.CALISMA50, "YYYY-MM-DD HH:mm:ss").diff(moment(start, "YYYY-MM-DD HH:mm:ss"), 'minutes') / 60;
      }
    }
    );

    this.pPRSICIL = selected.PRSICIL;
  }





  openDialog(type,row) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: this.languageMap['Kayıt silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
          if (type=='DB') this.deleteDB(row.ID);

      }
    });
  }


  deleteDB(Id)
  {
    this.systemService.DeleteSystemDb(Id)
    .subscribe((res: any[]) => {

      this.getSystemDataBase();

    }, err => {
      console.log(err);

    });
  }

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