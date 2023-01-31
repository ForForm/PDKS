import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional } from '@angular/core';
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
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import icClose from '@iconify/icons-ic/twotone-close';
import { AuthorizationService } from '../services/authorization.service';
import { DefinitionsService } from '../services/definitions.service';
import { SystemService } from '../services/system.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { untilDestroyed } from 'ngx-take-until-destroy';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icAdd from '@iconify/icons-ic/twotone-add';
// import icKey from '@iconify/icons-fa-solid/key';
// import icKey from '@iconify/icons-ic/src/vpn-key';
import icDatabase from '@iconify/icons-fa-solid/database';
// import icSetings from '@iconify/icons-ic/src/settings';
import icMobile from '@iconify/icons-fa-solid/mobile';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icId from '@iconify/icons-fa-solid/address-card';
import icDelete from '@iconify/icons-ic/twotone-delete';

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
import { WaitComponent } from '../wait/wait.component';
import { LayoutService } from './../../../@vex/services/layout.service';

@Component({
  selector: 'transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
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

export class TransferComponent implements OnInit, OnDestroy {

  language: any = []; languageMap: LanguageMap = {};
  type: string;
  subFooter:boolean;
  activeLinkIndex = 0;
  activeLinkIndex2 = 0;
  layoutCtrl = new FormControl('boxed');
  columns = ['Checkbox', 'ID', 'Name', 'Database', 'Protocol', 'Hostname', 'Username', 'Password', 'Inout', 'Repeat', 'Actions'];
  columnsTbl = ['Checkbox', 'ID', 'SourceField', 'SystemDbID', 'Start', 'Length', 'DestinationField', 'Actions'];
  columnsDvc = ['Checkbox', 'ID', 'Code', 'Name', 'Type', 'Actions'];
  columnsDb = ['Checkbox', 'ID', 'Name', 'Database', 'Protocol', 'Hostname', 'Username', 'Password', 'DbTable', 'TransferId', 'Inout', 'InChar', 'OutChar', 'DbQuery'];
  columnsData = ['Checkbox', 'ID', 'EmployeeID', 'EmployeeCode', 'DeviceID','DeviceCode', 'NewDateTime', 'Barcode', 'Type', 'WorkingTypeID','WorkingTypeCode', 'Exception','TransferID'];
  links = [];
  links2 = [];
  icClose = icClose;
  icAdd = icAdd;
  icMoreHoriz = icMoreHoriz;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  DeviceTypes: number[] = [0,1,2];
  dataSource: MatTableDataSource<any> | null;
  dataSourceTbl: MatTableDataSource<any> | null;
  dataSourceDvc: MatTableDataSource<any> | null;
  dataSourceData: MatTableDataSource<any> | null;  
  dataSourceArray: any[];
  @ViewChild("usrPaginator", { static: false }) usrPaginator: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  selectionTbl = new SelectionModel<any>(true, []);
  selectionDevice = new SelectionModel<any>(true, []);
  selectionTransfer = new SelectionModel<any>(true, []);
  fieldTypes: any = [];
  transferColumns: any = [];
  SystemDbID = null;
  SystemDatabaseID = null;
  SystemDatabaseTable = null;
  SystemDatabaseQuery = null;
  hEmployeeID = false; hDevice = false; hNewDateTime = false; hBarcode = false; hType = false; hReasonID = false; dAktar = true; dKaynak = true; dGetir = true;
  Inout = false;
  InChar = '';
  OutChar = '';
  searchCtrl = new FormControl();
  form: FormGroup;
  formDatabase: FormGroup; //personel filterForm
  formTable: FormGroup; //personel filterForm
  formDevice: FormGroup;  
  searchStr = this.searchCtrl.valueChanges;
  labels = aioTableLabels;
  icFilterList = icFilterList;
  breadcrumbs: string[];
  href: string;
  pageauth = { write: false, delete: false, update: false };
  // icKey = icKey;
  icDatabase = icDatabase;
  // icSetings = icSetings;
  icMobile = icMobile;
  icPhone = icPhone;
  icId = icId;
  icDelete = icDelete;
  result: string;
  progresValue: number;
  isMobileLayout=false;
  selectedRow:any;
  datas:any[];
  datasError:any[];
  datasValid:any[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    private layoutService: LayoutService,
    public systemService: SystemService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private adapter: DateAdapter<any>,
    location: Location) {


  }

  resize(type)
  {
    if (type=='fullwidth')
    this.layoutService.collapseSidenav();
    else 
    this.layoutService.expandSidenav();

  }

  ngOnInit() {

    
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.subFooter=JSON.parse(localStorage.getItem('SubFooter'));
    this.form = this.fb.group({ ID: 0, Code: ['', Validators.required], Name: ['', Validators.required], Password: [''], IsAdmin: [''] });
    this.turkishCulture();

    this.form = this.fb.group({
      ID: null, Name: null, Database: null, Protocol: null, Hostname: null, DUsername: null, Password: null, Repeat: null, Inout: null
    });

    this.formDatabase = this.fb.group({
      ID: null, Name: null, Database: null, Protocol: null, Hostname: null, DUsername: null, Password: null, DbTable: null, TransferType: null, Inout: null, InChar: null, OutChar: null, DbQuery: null
    });

    this.formTable = this.fb.group({
      ID: null, SystemDbID: null, SourceField: null, Start: null, Length: null, DestinationField: null
    });

    this.formDevice = this.fb.group({
      ID: null,  Code: null, Name: null, Type:null
    });


    this.route.paramMap.subscribe(params => {

      this.type = params.get("type");

      this.languageMap = AppUtil.getLabels();
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      this.breadcrumbs = [this.languageMap['Parametreler'].labelName, this.languageMap['Genel Parametreler'].labelName, this.languageMap['Veri Transfer'].labelName];
      // this.definitionGetShiftGroup();

      if (this.type !== "data") {
        this.links.push({ Index: 0, name: "Veri Yolu" });
        this.activeLinkIndex = 0;
      }
      else if (this.type == "data") {
        this.links.push({ Index: 1, name: "Hareket Transfer" });
        this.activeLinkIndex = 1;
      }
      this.links2.push({ Index: 0, name: "Kaynak Veri" });
      // this.links2.push({ Index: 1, name: "Kaynak Hata" });


      this.getInfo();
      this.getDevices();

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
        dialogRef.close();
      },
      (error) => {
        subscription.unsubscribe();
        dialogRef.close();
      }
    );
  }
  ngAfterViewInit() {
    // this.dataSourceData.paginator = this.usrPaginator;
    // this.dataSource.sort = this.sort;
  }

  myObservable(observer) {
    setTimeout(() => {
      observer.next("");
      observer.complete();
    }, 2000);
  }

  GetTransferColumnName(row) {

    // console.log(row.DbTable.split(".")[0]);
    // console.log(row.DbTable.split(".")[1]);

    this.systemService.GetTransferColumnName(row.ID,  row.DbTable.split(".")[0], row.DbTable.split(".")[1])
      .subscribe((res: any[]) => {

        this.transferColumns = [];
        Object.keys(res).forEach((key) => {

          let data = { adi: res[key].Columns };
          this.transferColumns.push(data);
        });

        // this.fieldTypes.push({ adi: "EmployeeID" });
        //     console.log(res);

      }, err => {
        console.log(err);

      });

  }


  getDevices() {


    return this.systemService.GetDevices(0)
      .subscribe((res: any[]) => {

        this.dataSourceDvc = new MatTableDataSource();
        this.dataSourceDvc.data = res;
        // this.dataSourceDvc.paginator = this.usrPaginator;
        // if (this.dataSourceData.data.length == 0) this.dKaynak = true; else this.dKaynak = false;
        // this.progresValue = this.progresValue + (100 / this.selection.selected.length);
      }, err => {
        console.log(err);
        // this.dKaynak = true;
      });
  }

  GetSourceDataAsyc(i, y) {



    return this.systemService.GetSourceData(y)
      .toPromise().then((res: any[]) => {        
        if (i == 0 && res !== null) this.dataSourceArray = res;
        else
          this.dataSourceArray = this.dataSourceArray.concat(res);
          // this.getInfo();
        // this.dataSourceData = new MatTableDataSource();
        // this.dataSourceData.data = res;
        // this.dataSourceData.paginator = this.usrPaginator;
        // if (this.dataSourceData.data.length == 0) this.dKaynak = true; else this.dKaynak = false;
        // this.progresValue = this.progresValue + (100 / this.selection.selected.length);
      }, err => {
        console.log(err);
        this.dKaynak = true;
      });



    // return this.dataSourceArray;

  }

  async getSourceData() {

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);
    // console.log(this.selection.selected);

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.dAktar = true;
    this.progresValue = 0;
    // this.dataSourceData = null;
    // await this.GetSourceDataAsyc();
    // debugger;
    this.dataSourceArray = null;
    this.dataSourceData = null;

    // this.dataSourceData = null; 
    // var unique = [];
    // var distinct = [];
    // for (let i = 0; i < this.selection.selected.length; i++) {
    //   if (!unique[this.selection.selected[i].ID]) {
    //     distinct.push(this.selection.selected[i].ID);
    //     unique[this.selection.selected[i].ID] = 1;
    //   }
    // }

    // for (let i = 0; i < distinct.length; i++) {
    //   // this.detailToggleDb(this.selection.selected[i]);
    //   // this.getSystemHostTable(distinct[i].ID);
    //   await this.GetSourceDataAsyc(i, this.dataSourceTbl.data);
    // }

    // console.log(this.dataSourceArray);
    await this.GetSourceDataAsyc(0, this.dataSourceTbl.data);
    this.dataSourceData = new MatTableDataSource();
    this.dataSourceData.data = this.dataSourceArray;
    this.datas= this.dataSourceArray;
    this.dataSourceData.paginator = this.usrPaginator;
    this.dKaynak = false;
    
    dialogRef.close();

  }

  controlSourceData() {
    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    let dataLength=this.dataSourceData.data.length;
    // this.datas = this.dataSourceData.data;
    
    this.datasValid = this.datas.filter(item => item["Exception"] === '');
    this.datasError= this.datas.filter(item => item["Exception"] !== '');
    // this.dataSourceData.data=this.datas.filter(item => item["Exception"] !== '');


    this.dataSourceData.data=this.datasError;

    // if (dataLength>datas.length)  

    console.log(dataLength);    
    console.log(this.datasError.length);

    if (dataLength>this.datasError.length)  
    {this.dAktar = false; this.dKaynak=true;  } else  
    {this.dAktar = true; this.dKaynak=false;}

    // this.systemService.ControlSourceData(this.dataSourceData.data)
    //   .subscribe((res: any[]) => {

    //     this.dataSourceData = new MatTableDataSource();
    //     this.dataSourceData.data = res;
    //     if (res.length == 0) this.dAktar = false; else this.dAktar = true;
    //   }, err => {
    //     console.log(err);

    //   });
  }
  postSourceData() {
    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);


    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.dAktar = true;
    this.dKaynak = true;
    // let obj = { SystemDatabaseID: this.SystemDatabaseID, SystemDatabaseTable: this.SystemDatabaseTable };
    // console.log(this.datasValid);
    let obj= this.datas;
    obj[0].SystemDbID= this.selectedRow['ID'];
    this.systemService.PostSourceData(obj)
      .subscribe((res: any[]) => {

        this.getInfo();
        this.selectedRow=0;
        dialogRef.close();
        // this.progresValue = 100;
        // this.dataSourceData = new MatTableDataSource();
        // this.dataSourceData.data = res;
        // this.progresValue = this.progresValue + (100 / this.selection.selected.length);
      }, err => {
        console.log(err);

      });
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  detailToggleSelect(row) {

    this.selectedRow = this.selectedRow === row ? null : row;
    this.dataSourceData = null;
    this.GetTransferColumnName(row);
    // this.selection.clear();
    this.SystemDatabaseID = row.ID;
    this.SystemDatabaseTable = row.DbTable;
    // this.SystemDatabaseQuery = row.DbTable;
    this.Inout = row.Inout;
    this.InChar = row.InChar;
    this.OutChar = row.OutChar;
    this.getSystemHostTable(row.ID);

    this.fieldTypes = [];
    this.fieldTypes.push({ kodu: "CompanyCode", adi: "CompanyCode" });
    this.fieldTypes.push({ kodu: "WorkingTypeCode", adi: "WorkingTypeCode" });
    this.fieldTypes.push({ kodu: "EmployeeCode", adi: "EmployeeCode" });
    this.fieldTypes.push({ kodu: "Barcode", adi: "Barcode" });
    this.fieldTypes.push({ kodu: "Type", adi: "Type" });
    this.fieldTypes.push({ kodu: "Device", adi: "Device" });
    this.fieldTypes.push({ kodu: "NewDateTime", adi: "NewDateTime" });

    // this.fieldTypes.push({ kodu: "EmployeeID", adi: "Sicil ID" });
    // this.fieldTypes.push({ kodu: "Device", adi: "Cihaz ID" });
    // this.fieldTypes.push({ kodu: "NewDateTime", adi: "Tarih" });
    // this.fieldTypes.push({ kodu: "Barcode", adi: "Barkod" });
    // if (row.Inout)
    //   this.fieldTypes.push({ kodu: "Type", adi: "G/C" });
    // this.fieldTypes.push({ kodu: "ReasonID", adi: "Neden ID" });


    // this.formDatabase.patchValue({
    //   ID: row.ID, Name: row.Name, Database: row.Database, Protocol: row.Protocol, Hostname: row.Hostname, DUsername: row.Username, Password: row.Password, DbTable: row.DbTable, TransferType: row.TransferType,
    //   Inout: row.Inout, InChar: row.InChar, OutChar: row.OutChar, DbQuery: row.DbQuery
    // });
    this.SystemDbID = row.ID;
    this.formTable.patchValue({ ID: null, SystemDbID: row.ID, SourceField: null, Start: null, Length: null, DestinationField: null });

  }


  detailToggleDb(row) {
    // this.selection.toggle(row);
    this.selectedRow = this.selectedRow === row ? null : row;
    this.dataSourceData = null;
    // this.selection.toggle(row);
    this.GetTransferColumnName(row);
    // this.selection.clear();
    this.SystemDatabaseID = row.ID;
    this.SystemDatabaseTable = row.DbTable;
    // this.SystemDatabaseQuery = row.DbTable;
    this.Inout = row.Inout;
    this.InChar = row.InChar;
    this.OutChar = row.OutChar;
    this.getSystemHostTable(row.ID);

    // this.fieldTypes = [];
    // this.fieldTypes.push({ kodu: "EmployeeID", adi: "Sicil ID" });
    // this.fieldTypes.push({ kodu: "Device", adi: "Cihaz ID" });
    // this.fieldTypes.push({ kodu: "NewDateTime", adi: "Tarih" });
    // this.fieldTypes.push({ kodu: "Barcode", adi: "Barkod" });
    // if (row.Inout)
    //   this.fieldTypes.push({ kodu: "Type", adi: "G/C" });
    // this.fieldTypes.push({ kodu: "ReasonID", adi: "Neden ID" });

    this.fieldTypes = [];
    this.fieldTypes.push({ kodu: "CompanyCode", adi: "CompanyCode" });
    this.fieldTypes.push({ kodu: "WorkingTypeID", adi: "WorkingTypeID" });
    this.fieldTypes.push({ kodu: "WorkingTypeCode", adi: "WorkingTypeCode" });
    this.fieldTypes.push({ kodu: "EmployeeID", adi: "EmployeeID" });
    this.fieldTypes.push({ kodu: "EmployeeCode", adi: "EmployeeCode" });    
    this.fieldTypes.push({ kodu: "Barcode", adi: "Barcode" });
    this.fieldTypes.push({ kodu: "Type", adi: "Type" });
    this.fieldTypes.push({ kodu: "DeviceID", adi: "DeviceID" });
    this.fieldTypes.push({ kodu: "DeviceCode", adi: "DeviceCode" });
    this.fieldTypes.push({ kodu: "NewDateTime", adi: "NewDateTime" });

    // this.formDatabase.patchValue({
    //   ID: row.ID, Name: row.Name, Database: row.Database, Protocol: row.Protocol, Hostname: row.Hostname, DUsername: row.Username, Password: row.Password, DbTable: row.DbTable, TransferType: row.TransferType,
    //   Inout: row.Inout, InChar: row.InChar, OutChar: row.OutChar, DbQuery: row.DbQuery
    // });
    this.SystemDbID = row.ID;
    this.formTable.patchValue({ ID: null, SystemDbID: row.ID, SourceField: null, Start: null, Length: null, DestinationField: null });

    // if (this.selection.selected.length > 0)
    //   this.dGetir = false; else { this.dGetir = true; this.dKaynak = true; }

     this.dGetir=false; this.dKaynak=true; this.dAktar=true;
  }

  detailToggleTbl(row) {

    this.selectionTbl.clear();
    this.selectionTbl.toggle(row);
    this.formTable.patchValue({ ID: row.ID, SystemDbID: row.SystemDbID, SourceField: row.SourceField, Start: row.Start, Length: row.Length, DestinationField: row.DestinationField });
  }


  
  detailToggleDevice(row) {
    this.selectionDevice.clear();
    this.selectionDevice.toggle(row);
    this.formDevice.patchValue({ ID: row.ID, Code:row.Code, Name:row.Name,Type:row.Type});
  }

  detailToggleTransfer(row) {
    this.selectionTransfer.clear();
    this.selectionTransfer.toggle(row);
      }

  getSystemHostTable(ID) {

    // if (this.dataSourceData!==null)
    // {
    //   if (this.usrPaginator!==null)
    //   this.usrPaginator=null
    //   this.dataSourceData.paginator = null;
    // }

    this.systemService.GetSystemHostTable(ID)
      .subscribe((res: any[]) => {

        this.dataSourceTbl = new MatTableDataSource();
        this.dataSourceTbl.data = res;
        // console.log(this.dataSourceTbl.data);
        this.hEmployeeID = this.dataSourceTbl.data.find(obj => obj.SourceField === "EmployeeID") == undefined ? true : false;
        this.hDevice = this.dataSourceTbl.data.find(obj => obj.SourceField === "Device") == undefined ? true : false;
        this.hNewDateTime = this.dataSourceTbl.data.find(obj => obj.SourceField === "NewDateTime") == undefined ? true : false;
        this.hBarcode = this.dataSourceTbl.data.find(obj => obj.SourceField === "Barcode") == undefined ? true : false;
        this.hType = this.dataSourceTbl.data.find(obj => obj.SourceField === "Type") == undefined ? true : false;
        this.hReasonID = this.dataSourceTbl.data.find(obj => obj.SourceField === "ReasonID") == undefined ? true : false;

        // hDevice=false;hNewDateTime=false;hBarcode=false;hType=false;hReasonID=false;
        // console.log(this.dataSourceTbl.data.find(obj => obj.SourceField === "Device"));

      }, err => {
        console.log(err);

      });
  }


  textChange(field, row, e) {
    if (field == "Length")
      row.Length = e.target.value;
    else if (field == "Start")
      row.Start = e.target.value;
    else if (field == "DestinationField")
      row.DestinationField = e.target.value;


    // console.log(e);
    // console.log(e.target.value);
  }

  postSystemHostTable() {

    const row = this.formTable.value;
    this.systemService.PostSystemHostTable(row)
      .subscribe((res: any[]) => {

        this.getSystemHostTable(row.SystemDbID);
      });

  }


  postDevice() {

    const row = this.formDevice.value;
    row.SystemDbID=this.SystemDbID;
    this.systemService.PostDevice(row)
      .subscribe((res: any[]) =>{
        this.getDevices();
      });

  }


  deleteSystemTable(row) {


    this.systemService.DeleteSystemTable(row.ID)
      .subscribe((res: any[]) => {
        this.clear();
        this.getSystemHostTable(row.SystemDbID);
      });

  }


  deleteDevice(row) {    
    this.systemService.DeleteDevice(row.ID,this.SystemDbID)
      .subscribe((res: any[]) => {
        this.clearDevice();
        this.getDevices();
      });
  }


  // delete(row) {
  //   this.openDialog(row.ID);

  // }


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
         if (type=='Device') this.deleteDevice(row);
         if (type=='Table') this.deleteSystemTable(row);
      }
    });
  }

  gotoTab(link) {

    this.activeLinkIndex = link.Index;
    // this.selection=null;
    this.dataSourceData = null;
    this.dataSourceTbl = null;
    this.dGetir = true;
    this.dKaynak = true;
    this.dAktar = true;
    this.getInfo();
  }


  gotoTab2(link) {
    this.activeLinkIndex2 = link.Index;

 
  }

  turkishCulture() {
    this.adapter.setLocale("tr");
  }



  getInfo() {

    // if (this.activeLinkIndex == 0) {
    //   this.systemService.GetSystemHost()
    //     .subscribe((res: any[]) => {

    //       this.dataSource = new MatTableDataSource();
    //       this.dataSource.data = res;

    //     }, err => {
    //       console.log(err);

    //     });
    // }
    // else 
    // if (this.activeLinkIndex == 0) {
    this.dataSourceData = null;
    this.dataSourceTbl = null;
    // this.dataSourceData.paginator=null;
    this.systemService.GetSystemDatabase()
      .subscribe((res: any[]) => {

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;


      }, err => {
        console.log(err);

      });
    // }

    // else if (this.activeLinkIndex == 1) {
    //   this.systemService.GetSystemFile()
    //     .subscribe((res: any[]) => {

    //       this.dataSource = new MatTableDataSource();
    //       this.dataSource.data = res;

    //     }, err => {
    //       console.log(err);

    //     });
    // }
  }


  formReset(form: FormGroup) {

    form.reset();

    // Object.keys(form.controls).forEach(key => {
    //   form.get(key).setErrors(null) ;
    // });
  }
  add() {
    this.formReset(this.form)
    this.form.patchValue({ ID: 0 });
  }


  save() {

    if (this.form.invalid) {
      return;
    }

    this.postUser(this.form.value)
    // console.log(this.form.value);

  }



  selectRow(row) {

    // console.log(row);
    this.form.patchValue({ ID: row.ID, Code: row.Code, Name: row.Name, Password: row.Password, IsAdmin: row.IsAdmin })

  }





  postUser(obj) {

    this.authorizationService.PostUser(obj)
      .subscribe((res: any[]) => {
        console.log(res);

        // this.getUsers();

      });


  }

  deleteUser(Id) {

    this.authorizationService.DeleteUser(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        // this.getUsers();

      });


  }

  clear() {
    this.formTable.patchValue({ ID: null, SourceField: null, Start: null, Length: null, DestinationField: null });
  }


  
  clearDevice() {
    this.formDevice.patchValue({ ID: null, Code: null, Name: null, Type: null });
  }


  detailToggle(row) {
    
    this.selection.toggle(row);
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));


    if (this.selection.selected.length > 0)
      this.dGetir = false; else { this.dGetir = true; this.dKaynak = true; }
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


  definitionGetShiftGroup() {

    let id = 0;
    this.definitionsService.DefinitionGetWorkingTypes(id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

        this.searchCtrl.valueChanges.pipe(
          untilDestroyed(this)
        ).subscribe(value => this.onFilterChange(value));

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
