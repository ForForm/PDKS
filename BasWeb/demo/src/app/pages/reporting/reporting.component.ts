import { LanguageMap } from './../interfaces/language.interface';
import { AttendanceDefinitionsComponent } from '../attendance/attendance-definitions.component';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional, OnChanges, Injectable, SimpleChanges, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Observable, of, ReplaySubject, BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from '../../../static-data/aio-table-data';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icExcel from '@iconify/icons-fa-solid/file-excel';
import { SelectionModel, CollectionViewer, SelectionChange, DataSource } from '@angular/cdk/collections';
import { ColumnsComponent } from './columns.component';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-fa-solid/search';
import { AuthorizationService } from '../services/authorization.service';
import { ReportingService } from '../services/reporting.service';
import { DefinitionsService } from '../services/definitions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { untilDestroyed } from 'ngx-take-until-destroy';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icAdd from '@iconify/icons-ic/twotone-add';
import icColumns from '@iconify/icons-fa-solid/columns';
import icReport from '@iconify/icons-ic/outline-table-chart';
import icAddress from '@iconify/icons-emojione/house';
import icMobile from '@iconify/icons-fa-solid/mobile';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icId from '@iconify/icons-fa-solid/address-card';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icDatabase from '@iconify/icons-fa-solid/database';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import * as _moment from "moment";
import { WaitComponent } from '../wait/wait.component';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { StyleService } from './../../../@vex/services/style.service';
	  
const moment = _moment;

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
import { Console } from 'console';
import { isThisISOWeek } from 'date-fns';
const TREE_DATA: any[] = [];

@Component({
  selector: 'reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss'],
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

export class ReportingComponent<T> implements OnInit, OnChanges, OnDestroy {

  subFooter: boolean;
  language: any = []; languageMap: LanguageMap = {};
  // @Input() columns = ['Checkbox', 'ID', 'Code', 'Name', 'Address', 'Telephone1', 'Telephone2', 'Fax', 'Mail'];
  // columns: TableColumn<T>[];
  columns: Array<keyof T | string>;
  icClose = icClose;
  icSearch = icSearch;
  icReport = icReport;
  icAdd = icAdd;
  icColumns = icColumns;
  icDeleteForever = icDeleteForever;
  filterList = [];
  spName = '';
  reportName = '';
  ParamsValue = [];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSourceGrid: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  form: FormGroup;
  // formDef: FormGroup;
  searchStr = this.searchCtrl.valueChanges;
  labels = aioTableLabels;
  icFilterList = icFilterList;
  breadcrumbs: string[];
  href: string;
  pageauth = { write: false, delete: false, update: false };
  icAddress = icAddress;
  icMobile = icMobile;
  icPhone = icPhone;
  icId = icId;
  icDelete = icDelete;
  icDatabase = icDatabase;
  icMoreHoriz = icMoreHoriz;
  icExcel = icExcel;
  result: string;
  columnsArray: any[] = [];
  columnsArrayCheck: any[] = [];
  links = [];
  activeLinkIndex = 0;
  NewRecord = false;
  Collarcolors = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];
  ReportDefList: any[] = [];
  FilteroObjEnableArray: boolean[] = [true];
  @ViewChild("usrPaginator", { static: false }) usrPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  isMobileLayout = false;
  dsize11 = 15; dsize12 = 85; dsize21 = 70; dsize22 = 30;
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public reportingService: ReportingService,
    public definitionsService: DefinitionsService,
    private styleService: StyleService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private adapter: DateAdapter<any>,
    location: Location,

  ) { }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
  getReportTree() {
    this.reportingService.GetReporting()
      .subscribe((res: any[]) => {

        let parentArray: any[] = [];
        Object.keys(res).forEach(key => {
          if (res[key].Child == 0) {
            parentArray.push({ id: res[key].ID, name: res[key].ReportName });
          }
        });

        let aa: any[] = [];
        Object.keys(parentArray).forEach(key => {
          // this.rootLevelNodes.push(parentArray[key].name);
          let reportItem: any[] = [];
          Object.keys(res).forEach(key2 => {
            if (parentArray[key].id == res[key2].ParentId)
              reportItem.push({ 'name': res[key2].ReportName });
          });
          aa.push({ 'name': parentArray[key].name, 'children': reportItem });
          // this.dataMap.set(parentArray[key].name, reportItem);
        });


        this.dataSource.data = aa;

        // Object.keys(parentArray).forEach(key => {
        //   this.rootLevelNodes.push(parentArray[key].name);
        //   let reportItem: string[] = [];
        //   Object.keys(res).forEach(key2 => {
        //     if (parentArray[key].id == res[key2].ParentId)
        //       reportItem.push(res[key2].ReportName);
        //   });
        //   this.dataMap.set(parentArray[key].name, reportItem);
        // });
      });
  }


  extendMenu(node) {
    this.treeControl.isExpanded(node)

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSourceGrid.filter = filterValue;
  }


  minSplit1(e) {
    if (this.isMobileLayout) {
      if (this.dsize11 === 0) this.dsize11 = 100; else this.dsize11 = 0;
      if (this.dsize12 === 100) this.dsize12 = 0; else this.dsize12 = 100;
    }
  }


  minSplit2(e) {
    if (this.isMobileLayout) {
      if (this.dsize21 === 0) this.dsize21 = 100; else this.dsize21 = 0;
      if (this.dsize22 === 100) this.dsize22 = 0; else this.dsize22 = 100;
    }

  }

  ngOnInit() {


    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    if (this.isMobileLayout)
     {this.dsize11 = 100; this.dsize12 = 0; this.dsize21 = 100; this.dsize22 = 0; }

    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    startDate.add(-10, 'days');
    this.form = this.fb.group({
      Emp1: null, Emp2: null, EmpType1: null, EmpType2: null, Depart1: null, Depart2: null, Cost1: null, Cost2: null, Cadre1: null, Cadre2: null, Prof1: null, Prof2: null,
      Task1: null, Task2: null, Group1: null, Group2: null, Unit1: null, Unit2: null, Branch1: null, Branch2: null, Service1: null, Service2: null, Collar1: null, Collar2: null, Value: null,
      Type: null, StartDate: [startDate, Validators.required], EndDate: [endDate, Validators.required],
      DefId: null,
      DefName: null,
      ReportName: null,
      SpName: null
    });

    this.turkishCulture();
    this.route.paramMap.subscribe(params => {
      // this.treeControl=[];
      this.languageMap = AppUtil.getLabels();
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'));
      this.breadcrumbs = [this.languageMap['Raporlama'].labelName, this.languageMap['Rapor Üretici'].labelName];
      this.getReportTree();

      // this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
      // this.dataSource = new DynamicDataSource(this.treeControl, this.database);
      // this.dataSource.data = this.database.initialData();
      this.links.push({ Index: 0, name: "Filtre" });
      this.links.push({ Index: 1, name: "Rapor Çalıştır" });
    });

    
    for (let index = 0; index < 15; index++) 
    this.FilteroObjEnableArray[index]=true;

  }

  resetFilter() {
    let reportName = this.form.value.ReportName;
    this.form.reset();
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    startDate.add(-10, 'days');
    this.form.patchValue({ StartDate: startDate, EndDate: endDate, ReportName: reportName });
  }


  addDef() {
    this.resetFilter();
    this.NewRecord = true;
  }

  reportClick(name) {

    this.ReportDefList = [];
    this.filterList = [];
    this.form.patchValue({ ReportName: name });
    this.NewRecord = false;
    this.activeLinkIndex = 0;
    this.getReportingParams(name);


  }

  getReportingDef(name, defId) {

    this.reportingService.GetReportingDef(name, defId)
      .subscribe((res: any[]) => {
        this.resetFilter();

        // debugger;
        if (defId == null) {
          this.ReportDefList = res;
        }

        // this.filterList=[];
        let dynamicParams = JSON.parse(res[0].Sql);
        Object.keys(this.filterList).forEach(key => {
          this.filterList[key].ParamValue = null;
        });

        Object.keys(this.filterList).forEach(key => {
          Object.keys(dynamicParams).forEach(key1 => {
            if (dynamicParams[key1].ParamName === this.filterList[key].ParamName) {
              this.filterList[key].ParamValue = dynamicParams[key1].ParamValue
            }
          });
        });
        // StartDate: res[0].StartDate, EndDate: res[0].EndDate,
        this.form.patchValue({
          Emp1: res[0].Emp1, Emp2: res[0].Emp2, EmpType1: res[0].EmpType1, EmpType2: res[0].EmpType2, Depart1: res[0].Depart1, Depart2: res[0].Depart2, Cost1: res[0].Cost1, Cost2: res[0].Cost2, Cadre1: res[0].Cadre1, Cadre2: res[0].Cadre2, Prof1: res[0].Prof1, Prof2: res[0].Prof2,
          Task1: res[0].Task1, Task2: res[0].Task2, Group1: res[0].Group1, Group2: res[0].Group2, Unit1: res[0].Unit1, Unit2: res[0].Unit2, Branch1: res[0].Branch1, Branch2: res[0].Branch2, Service1: res[0].Service1, Service2: res[0].Service2, Collar1: res[0].Collar1, Collar2: res[0].Collar2,
          DefId: res[0].ID, DefName: res[0].Name, SpName: this.spName
        });
      });
  }

  getReportingParams(name) {

    this.columns = [];
    this.reportName = name;

    this.reportingService.GetReportingParams(name)
      .subscribe((res: any[]) => {

        if (res.length == 0) {
          this.form.patchValue({ SpName: null });
          if (this.isMobileLayout) {this.dsize11 = 0; this.dsize12 = 100;}
          return;

        }
        // debugger;
        // console.log(res);
        this.dataSourceGrid = new MatTableDataSource();
        this.dataSourceGrid.paginator = this.usrPaginator;
        this.dataSourceGrid.sort = this.sort;
        this.dataSourceGrid.data = [];
        this.filterList = res;
        this.spName = res[0].SpName;
        this.getReportingDef(name, null);
        if (this.isMobileLayout) {this.dsize11 = 0; this.dsize12 = 100;}
      });
  }

  saveDef() {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    let obj = this.form.value;
    obj.ParamsValue = this.filterList;
    this.reportingService.PostReportingDef(obj)
      .subscribe((res: any[]) => {
        this.form.patchValue({ DefId: res });

        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();
      });


  }

  async ascsaveDef(obj): Promise<any> {

    obj.ParamsValue = this.filterList;
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    return await this.reportingService.PostReportingDef(obj).toPromise().then(data => {
      let obj: any = {
        SpName: this.spName, Username: JSON.parse(sessionStorage.getItem('Username')), CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')),
        Params: this.filterList, DefId: this.form.value.DefId
      };
      this.dataSourceGrid.data = [];
      this.columnsArray = [];
      this.reportingService.ExecReporting(obj)
        .subscribe((res: any[]) => {
          this.dataSourceGrid = new MatTableDataSource();
          this.dataSourceGrid.paginator = this.usrPaginator;
          this.dataSourceGrid.sort = this.sort;
          if (res.length == 0) {
            dialogRef.close();
            return;
          }

          console.log(res[0]);

          Object.keys(res[0]).forEach(element => {
            this.columnsArray.push({ label: element, property: element });
          });
          this.columns = this.columnsArray.map(column => column.property);
          this.dataSourceGrid.data = res;
          // this.searchCtrl.valueChanges.pipe(
          //   untilDestroyed(this)
          // ).subscribe(value => this.onFilterChange(value));

          dialogRef.close();
        }, err => {
          console.log(err);
          dialogRef.close();
        });


    });


  }

  execReport() {

    this.ascsaveDef(this.form.value);


  }

  openDeleteRefDialog(DefId) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: this.languageMap['Rapor Tanım bilgisi silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        this.deleteDef(DefId);

      }
    });
  }

  deleteDef(DefId) {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.reportingService.DeleteReportingDef(DefId)
      .subscribe((res: any[]) => {
        this.getReportingDef(this.form.value.ReportName, null)
        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();
      });


  }


  Clear() {
    this.form.reset();
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    startDate.add(-10, 'days');
    this.form.patchValue({ StartDate: startDate, EndDate: endDate });
  }


  gotoTab(link) {
    this.activeLinkIndex = link.Index;
    if (link.Index === 1)
      this.execReport();
    // this.saveDef(); 

  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceGrid.data.length;
    return numSelected === numRows;
  }

  turkishCulture() {
    this.adapter.setLocale("tr");
  }






  handleChange(name, event) {

    Object.keys(this.filterList).forEach(key => {
      if (this.filterList[key].ParamName == name) {
        this.filterList[key].ParamValue = event.target.value;
        // this.remove(name);
        // this.filterList.push({ ParamName: name, ParamValue: event.target.value });
      }
    });
  }

  handleChangeDate(name, event) {
    Object.keys(this.filterList).forEach(key => {
      if (this.filterList[key].ParamName == name) {
        this.filterList[key].ParamValue = moment(event.value);
        // this.remove(name);
        // this.filterList.push({ ParamName: name, ParamValue: moment(event.value) });
      }
    });


  }


  ngOnChanges(changes: SimpleChanges): void {

    // if (changes["dataSource"]) {
    //   this.dataSourceGrid.paginator = this.usrPaginator;
    // }

    if (changes.columns) {
      this.columns = this.columnsArray.map(column => column.property);
    }

    // if (changes.data) {
    //   this.dataSource.data = this.data;
    //   this.dataSource.paginator = this.usrPaginator;
    // }

    // if (changes.searchStr) {
    //   this.dataSource.filter = (this.searchStr || '').toString().trim().toLowerCase();
    // }
  }

  columnCheck(name, event) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    if (event.checked) {
      this.columnsArray.push({ label: name, property: name });
      // this.columnsArrayCheck.push({ name: true });
      this.columns.push(name);
    }
    else {
      this.columnsArray = this.columnsArray.filter(
        item => item.property !== name
      );

      const index: number = this.columns.indexOf(name);
      this.columns.splice(index, 1);
    }


    dialogRef.close();

  }



  remove(id: string): void {
    this.filterList = this.filterList.filter(
      item => item.ParamName !== id
    );
  }

  clearFilter() {

  }


  selectColumns() {

    this.dialog.open(ColumnsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { contactId: null, auth: true, tabAuth: false },
      width: '450px',
      disableClose: true,
      // panelClass: 'padding:0px'
    }).afterClosed().subscribe(result => {
      if (result)
        this.ngOnInit();
    })


  }





  formReset(form: FormGroup) {

    form.reset();

  }
  add() {
    this.formReset(this.form)
    this.form.patchValue({ ID: 0 });
  }


  save() {

    if (this.form.invalid) {
      return;
    }

    // this.postCompany(this.form.value)
    // console.log(this.form.value);

  }

  // delete(row) {
  //   this.openDialog(row.ID);

  // }




  selectRow(row) {

    // console.log(row);
    this.form.patchValue({ ID: row.ID, Code: row.Code, Name: row.Name, Address: row.Address, Telephone1: row.Telephone1, Telephone2: row.Telephone2, Fax: row.Fax, Mail: row.Mail })

  }

  getReporting() {

    this.reportingService.GetReporting()
      .subscribe((res: any[]) => {
        console.log(res);

        // this.dataSourceGrid = new MatTableDataSource();
        // this.dataSourceGrid.data = res;

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));

      });


  }





  detailToggle(row) {
    this.selection.toggle(row);
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceGrid.data.forEach(row => this.selection.select(row));
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
    if (!this.dataSourceGrid) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSourceGrid.filter = value;
  }



  ngOnDestroy() {
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
