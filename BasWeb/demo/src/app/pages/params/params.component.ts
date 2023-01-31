import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, SimpleChanges, OnChanges, ViewChild, Optional, ChangeDetectorRef, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

// import { MatTableFilter } from 'mat-table-filter';
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
import { DashboardService } from '../services/dashboard.service';
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
// import { ScoringDefinitionsComponent } from '../scoring/scoring-definitions.component';
// import { untilDestroyed } from 'ngx-take-until-destroy';
// import { AttendanceRecordComponent } from '../attendance/attendance-record.component';
// import { LeaveComponent } from '../leaves/leave.component';
// import {OverlayContainer} from '@angular/cdk/overlay';
import { WaitComponent } from '../wait/wait.component';
import { LayoutService } from './../../../@vex/services/layout.service';
// import { AttendanceDefinitionsComponent } from '../attendance/attendance-definitions.component';
import { StyleService } from './../../../@vex/services/style.service';

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
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

const moment = _moment;



@Component({
  selector: 'params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss'],
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
export class ParamsComponent<T> implements OnInit, OnChanges, OnDestroy {

  language: any = []; languageMap: LanguageMap = {};
  activeLinkIndex = 0;
  activeScoreIndex = 0;
  links = [];
  scoreLinks = [];
  filterHide = true;
  nxtDisabled = true;
  footerHide = true;
  calculatingPersonel: string = '';
  //icons
  icRefresh = icRefresh;
  icFilter = icFilter;
  icAdd = icAdd;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icCalculator = icCalculator;
  icColumns = icColumns;
  selectedRow = 0;
  selectedRowS = 0;
  selectedRowSd = 0;
  //
  selectedRowDIndex = 0;

  //datasources
  dataSource: MatTableDataSource<any> | null; //PersonelListe
  dataSourceD: MatTableDataSource<any> | null; //PersonelListe
  dataSourceS: MatTableDataSource<any> | null; //PersonelListe
  dataSourceSD: MatTableDataSource<any> | null; //PersonelListe
  columns: TableColumn<T>[];
  columnsD = ['Checkbox', 'ID', 'Section', 'Type', 'View', 'ShowX', 'XLabel', 'ShowY', 'YLabel',
    'ShowDetail', 'DetailLabel', 'SpName', 'BackgroundColor', 'Top', 'Left'];
  columnsS = ['Checkbox', 'ID', 'Code', 'Name'];
  columnsSD = ['ID', 'Code', 'Name', 'Type', 'DailyScoring', 'MonthlyScoring', 'EmptyRows', 'Default', 'WorkingTypeID', 'Actions'];


  selection = new SelectionModel<any>(true, []);
  visibleColumns: Array<keyof T | string>;
  //datasources

  //progressBar
  progresValue: number;
  calculateArray: number[];

  // filterType: MatTableFilter;



  layoutCtrl = new FormControl('boxed');
  icClose = icClose;


  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  selectionS = new SelectionModel<any>(true, []);
  selectionL = new SelectionModel<any>(true, []);
  // selectionD = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  formD: FormGroup;
  formS: FormGroup;
  searchStr = this.searchCtrl.valueChanges;
  leavesRecordIndex = 0;
  tableData: any;
  calcDisabled = true;
  saveDisabled = true;
  labels = aioTableLabels;

  icFilterList = icFilterList;
  icStar = icStar;
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
  Sections = [
    { Name: '1,1' }, { Name: '1,2' }, { Name: '1,3' },
    { Name: '2,1' }, { Name: '2,2' }, { Name: '2,3' },
    { Name: '3,1' }, { Name: '3,2' }, { Name: '3,3' },
    { Name: '4,1' }, { Name: '4,2' }, { Name: '4,3' },
    { Name: '5,1' }, { Name: '5,2' }, { Name: '5,3' },
    { Name: '6,1' }, { Name: '6,2' }, { Name: '6,3' },
    { Name: '7,1' }, { Name: '7,2' }, { Name: '7,3' },
    { Name: '8,1' }, { Name: '8,2' }, { Name: '8,3' },
    { Name: '9,1' }, { Name: '9,2' }, { Name: '9,3' },
    { Name: '10,1' }, { Name: '10,2' }, { Name: '10,3' }
  ];

  Types = [
    { Name: 'grid' }, { Name: 'pie' }, { Name: 'piegrid' }, { Name: 'advancedpie' },
    { Name: 'horizontal' }, { Name: 'horizontal2d' },
    { Name: 'vertical' }, { Name: 'vertical2d' },
    { Name: 'normalized' }, { Name: 'horizontalNormalized' }, { Name: 'tree' },
    { Name: 'line' }, { Name: 'card' }, { Name: 'stacked' },
    { Name: 'gauge' }, { Name: 'polar' }
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  data: T[];
  dataD: T[];
  tableColumns: TableColumn<any>[] = [];
  timeViewTypes: any = [];
  scoringViewTypes: any = [];
  result: string;
  chartInfoLabel: string = '';

  updatePanelHidden = false;
  isMobileLayout = false;
  constructor(
    // overlayContainer: OverlayContainer,
    public datepipe: DatePipe,
    private styleService: StyleService,
    private route: ActivatedRoute,
    public paramsService: ParamsService,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    public personnelService: PersonnelService,
    public attendanceService: AttendanceService,
    public leavesService: LeavesService,
    private layoutService: LayoutService,
    public scoringService: ScoringService,
    public dashboardService: DashboardService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private adapter: DateAdapter<any>,
    location: Location) {

    // overlayContainer.getContainerElement().classList.add('scoring.component');

  }

  newRecord() {
    this.formS.reset();
    this.selectionS.clear();

  }

  selectWorkingTypeRow(row) {
    this.selectedRowS = row;
  }

  selectScoreDesignRow(row) {

    this.selectionS.clear();
    this.selectedRowSd = row;
    this.formS.patchValue(row);
    this.dataSourceS.data.forEach(element => {
      var item = row.WorkingTypeID.split(',');
      item.forEach(s => {
        if (s == element.ID)
          this.selectionS.select(element);
      });
    });
  }

  detailToggleS(row) {
    this.selectionS.toggle(row);
    // if (this.selectionS.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;
  }

  delete(row) {
    this.openDialog('View',row.ID);
  }



  saveScoringDeff() {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.formS.value.WorkingTypeID = '';
    this.selectionS.selected.forEach(element => {
      this.formS.value.WorkingTypeID += element.ID + ',';
    });

    this.scoringService.PostScoringDeff(this.formS.value)
      .subscribe((res) => {
        this.definitionGetScoringDeff(null);
        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err);

      });

  }

  definitionGetTypes(row) {

    let id = 0;
    if (row === null) id = 0; else if (row.ID === undefined) id = 0; else id = row.ID;
    this.definitionsService.DefinitionGetWorkingTypesById(id)
      .subscribe((res: any[]) => {

        this.dataSourceS = new MatTableDataSource();
        this.dataSourceS.data = res;

      });

    // this.searchCtrl.valueChanges.pipe(
    //   untilDestroyed(this)
    // ).subscribe(value => this.onFilterChange(value));

  }



  definitionGetScoringDeff(row) {

    let id = 0;
    if (row === null) id = 0; else if (row.ID === undefined) id = 0; else id = row.ID;
    this.scoringService.GetScoringDeff(id)
      .subscribe((res: any[]) => {
        this.dataSourceSD = new MatTableDataSource();
        this.dataSourceSD.data = res;

      });

    // this.searchCtrl.valueChanges.pipe(
    //   untilDestroyed(this)
    // ).subscribe(value => this.onFilterChange(value));

  }


  ngOnInit() {

    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
    this.isMobileLayout = window.innerWidth <= 991;

    this.turkishCulture();

    this.formD = this.fb.group({
      ID: null, Section: null, Type: null, View: null, ShowX: null, XLabel: null, ShowY: null,
      YLabel: null, ShowDetail: null, DetailLabel: null, SpName: null, BackgroundColor: null, Top: null,
      Left: null
    });


    this.formS = this.fb.group({
      ID: null,
      Code: new FormControl(null, Validators.required),
      Name: new FormControl(null, Validators.required),
      Type: null,
      DailyScoring: new FormControl(null, Validators.required),
      MonthlyScoring: new FormControl(null, Validators.required),
      EmptyRows: null,
      Default: null
    });


    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.breadcrumbs = [this.languageMap['Sistem'].labelName, this.languageMap['Uygulama Parametreler'].labelName];
      const obj = { type: 'workType', code: 0 };
      this.timeViewTypes = [{ kodu: 0, adi: this.languageMap['Dakika'].labelName }, { kodu: 1, adi: this.languageMap['Ondalık'].labelName }];
      this.scoringViewTypes = [{ kodu: 0, adi: this.languageMap['Liste'].labelName }, { kodu: 1, adi: this.languageMap['Onay'].labelName }];

      this.getParamsGroup();
      this.getParams();
      this.definitionGetTypes(null);
      this.definitionGetScoringDeff(null);
      for (let index = 0; index < 2; index++) {
        const aa = { Index: index, name: (index === 0 ? this.languageMap['Parametre'].labelName : this.languageMap['Tasarım'].labelName) };
        this.scoreLinks.push(aa);
      }

    });
  }


  resize(type) {
    if (type == 'fullwidth')
      this.layoutService.collapseSidenav();
    else
      this.layoutService.expandSidenav();

  }


  ItemChange(value) {
    if (value === 'vertical2d' || value === 'horizontal2d' || value === 'line'
      || value === 'stacked' || value === 'normalized' || value === 'horizontalNormalized'
      || value === 'heatmap' || value === 'polar')
      this.chartInfoLabel = this.languageMap['SP den group, name, value değerleri dönmelidir.'].labelName;
    else if (value === 'grid')
      this.chartInfoLabel = '';
    else
      this.chartInfoLabel = this.languageMap['SP den name, value değerleri dönmelidir.'].labelName;
  }

  typesItemChange(e) {

    this.ItemChange(e.value);
  }

  rowClick(row) {

    // this.selectionD.clear();
    // this.selectionD.toggle(row);
    // this.selectionD.isSelected(row);
    this.selectedRowDIndex= row.ID;
    this.formD.patchValue({
      ID: row.ID, Section: row.Section, Type: row.Type,
      View: row.View.replace('[', '').replace(']', '')
      , ShowX: row.ShowX, ShowY: row.ShowY,
      Xlabel: row.Xlabel, Ylabel: row.Ylabel, ShowDetail: row.ShowDetail, DetailLabel: row.DetailLabel, SpName: row.SpName,
      BackgroundColor: row.BackgroundColor, Top: row.Top, Left: row.Left
    });
    this.ItemChange(row.Type);

  }


  newDashRecord() {
    this.formD.reset();
  }

  deleteDashItem() {

    this.openDialog('DashBoard',this.formD.value.ID);
  }



  openDialog(Type,ID) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: Type=='Dashboard'?this.languageMap['Çizerge kaydı silinecektir.'].labelName:this.languageMap['Taslak kaydı silinecektir.'].labelName,
        temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName,
        Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        if (Type=='Dashboard')
        this.DeleteDashboard(ID);
        else if (Type=='View')
        this.DeleteView(ID);
      }
    });
  }


  DeleteDashboard(Id) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.dashboardService.DeleteReportingDef(Id)
      .subscribe((res) => {
        this.formD.reset();
        this.getReportDef();
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  DeleteView(Id) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.scoringService.DeleteScoringDeff(Id)
      .subscribe((res) => {
        this.formS.reset();
        this.definitionGetScoringDeff(null);
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  PostDashboard() {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.dashboardService.PostReportingDef(this.formD.value)
      .subscribe((res) => {
        this.getReportDef();
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  getReportDef() {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.dashboardService.GetReportingDef()
      .subscribe((res: any[]) => {


        this.dataSourceD = new MatTableDataSource();
        this.dataSourceD.data = res;

        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  PostParameter(activeLinkIndex) {

    if (activeLinkIndex === 7)
      this.PostDashboard();
    else {

      // this.waitProgress(this.languageMap['İşlem yapılıyor. Lütfen Bekleyiniz...'].labelName, undefined);
      const dialogRef = this.dialog.open(WaitComponent, {
        panelClass: 'transparent',
        disableClose: true
      });
      const definition = this.dataSource.data;
      definition[0].CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
      definition[0].Username = JSON.parse(sessionStorage.getItem('Username'));
      // definition.ID=0;
      this.paramsService.PostParam(definition)
        .subscribe((res) => {
          //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
          // this.definitionGetTypesDistibution(obj.workingTypeID);
          this.getParams();
          // this.waitProgressDismiss();
          dialogRef.close();

        }, err => {
          console.log(err);
          dialogRef.close();
          // this.waitProgress(err, 3000);
        });
    }
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

  getParamsGroup() {

    let selectedColumns = [];
    this.paramsService.GetParamGroup()
      .subscribe((res: any[]) => {

        Object.keys(res).forEach((key) => {

          const aa = { Index: res[key].Index, name: res[key].Name };
          this.links.push(aa);
        });


      }, err => {
        console.log(err);

      });
  }


  getParams() {

    let selectedColumns = [];
    this.paramsService.GetParam()
      .subscribe((res: any[]) => {

        let data = { label: 'Parametre', property: 'Label', type: 'text', cssClasses: ['font-medium'] };
        selectedColumns.push(data);
        data = { label: 'Değer', property: 'Value', type: 'checkbox', cssClasses: ['font-medium'] };
        selectedColumns.push(data);


        Object.keys(res).forEach((key) => {
          if (res[key].Template !== null) {
            res[key].Template = JSON.parse(res[key].Template);
          }
        });

        this.columns = selectedColumns;
        this.visibleColumns = selectedColumns.map(column => column.property);

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

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
    if (changes.columns) {
      this.visibleColumns = this.columns.map(column => column.property);
    }

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

    if (link.Index !== 4) this.activeScoreIndex = 0;

    if (this.activeLinkIndex === 7)
      this.getReportDef();
  }


  gotoScoreTab(link) {
    // this.nxtDisabled = true;
    this.activeScoreIndex = link.Index;

    // if (this.activeLinkIndex === 7)
    //   this.getReportDef();
    // console.log(this.activeLinkIndex);
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
    this.selection.toggle(row);
    if (this.selection.selected.length == 0) this.nxtDisabled = true; else this.nxtDisabled = false;
  }









  textSelected(name) {
    this.selectedObject = name;
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  isAllSelectedS() {
    const numSelected = this.selectionS.selected.length;
    const numRows = this.dataSourceS.data.length;
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
