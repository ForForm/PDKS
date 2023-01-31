import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
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
import { SyndicateService } from '../services/syndicate.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
// import { untilDestroyed } from 'ngx-take-until-destroy';
import icAdd from '@iconify/icons-ic/twotone-add';
import icAddress from '@iconify/icons-emojione/house';
import icMobile from '@iconify/icons-fa-solid/mobile';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icId from '@iconify/icons-fa-solid/address-card';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { LayoutService } from './../../../@vex/services/layout.service';
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
import * as _moment from "moment";
import { DatePipe } from '@angular/common';
import { SyndicateDefinitionsComponent } from './syndicate-definitions.component';

const moment = _moment;


@Component({
  selector: 'syndicate',
  templateUrl: './syndicate.component.html',
  styleUrls: ['./syndicate.component.scss'],
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

export class SyndicateComponent implements OnInit, OnDestroy {

  activeLinkIndex = 0;
  selectedRowIndex = 0;
  selectedDetailRowIndex = 0;
  selectedOvertimeRowIndex = 0;
  selectedDeductionRowIndex = 0;
  selectedPaymentRowIndex = 0;
  // selectedFlexPersonnelGroupID=0;

  links = [];
  subFooter: boolean;
  language: any = []; languageMap: LanguageMap = {};
  layoutCtrl = new FormControl('boxed');
  @Input() columns = ['Checkbox', 'ID',
    'FlexPersonnelGroupID', 'FlexPersonnelGroupCode', 'FlexPersonnelGroupName',
    'WorkingTypeID', 'WorkingTypeCode', 'WorkingTypeName', 'Day', 'Time', 'Process',
    'WeekendWorkingTypeID', 'WeekendWorkingTypeCode', 'WeekendWorkingTypeName', 'Actions'];

  @Input() columnsDetail = ['Checkbox', 'ID', 'SyndicateAbsenceID',
    'WorkingTypeID', 'WorkingTypeCode', 'WorkingTypeName', 'ProcessType', 'Actions'];

  @Input() columnsOvertime = ['Checkbox', 'ID', 'FlexPersonnelGroupID', 'FlexPersonnelGroupCode', 'FlexPersonnelGroupName', 'WorkingTypeID', 'WorkingTypeCode', 'WorkingTypeName', 'UpperLimit', 'Actions'];
  @Input() columnsDeduction = ['Checkbox', 'ID', 'SyndicateOvertimeID', 'WorkingTypeID', 'WorkingTypeCode', 'WorkingTypeName', 'Actions'];
  @Input() columnsPayment = ['Checkbox', 'ID', 'SyndicateOvertimeID', 'WorkingTypeID', 'WorkingTypeCode', 'WorkingTypeName', 'Actions'];

  icClose = icClose;
  icAdd = icAdd;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  dataSourceDetail: MatTableDataSource<any> | null;
  dataSourceOvertime: MatTableDataSource<any> | null;
  dataSourceDeduction: MatTableDataSource<any> | null;
  dataSourcePayment: MatTableDataSource<any> | null;

  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  formAbsence: FormGroup;
  formAbsenceDetail: FormGroup;
  formOvertime: FormGroup;
  formDeduction: FormGroup;
  formPayment: FormGroup;

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
  result: string;
  isMobileLayout = false;
  selectedIndex = 0;
  icMoreHoriz = icMoreHoriz;
  processList: any = [];
  processTypeList: any = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    public syndicateService: SyndicateService,
    private layoutService: LayoutService,
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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  turkishCulture() {
    this.adapter.setLocale("tr");
  }




  gotoTab(link) {
    this.activeLinkIndex = link.Index;

    if (link.Index == 0)
      this.getAbsence();
    else if (link.Index == 1)
      this.getOvertime();

    //   this.getLeaveExtendParams();
    // else if (link.Index == 1)
    //   this.getLeaveDistParams();
    // else if (link.Index == 2)
    //   this.getLeaveLimitParams();
  }


  ngOnInit() {


    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    this.formAbsence =
      this.fb.group({
        ID: 0, FlexPersonnelGroupID: [null, Validators.required], FlexPersonnelGroupCode: '', WorkingTypeID: [null, Validators.required], WorkingTypeCode: '', WorkingTypeName: '',  Day: [null, Validators.required],Time: '00:00', Process: [null, Validators.required], WeekendWorkingTypeID: [null, Validators.required],
        WeekendWorkingTypeCode: ''
      });

    this.formAbsenceDetail =
      this.fb.group({ ID: 0, SyndicateAbsenceID:null, WorkingTypeID: [null, Validators.required], WorkingTypeCode: '',  WorkingTypeName: '', ProcessType: [null, Validators.required] });

    this.formOvertime =
      this.fb.group({ ID: 0, FlexPersonnelGroupID:[null, Validators.required], FlexPersonnelGroupCode: '', WorkingTypeID: [null, Validators.required], WorkingTypeCode: '',  WorkingTypeName: '',UpperLimit: '00:00' });

    this.formDeduction =
      this.fb.group({ ID: 0, SyndicateOvertimeID: 0, WorkingTypeID: 0, WorkingTypeName: '',  WorkingTypeCode: [null, Validators.required] });

    this.formPayment =
      this.fb.group({ ID: 0, SyndicateOvertimeID: 0, WorkingTypeID: 0,  WorkingTypeName: '', WorkingTypeCode: [null, Validators.required] });

    this.turkishCulture();
    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      this.breadcrumbs = [this.languageMap['Parametreler'].labelName, this.languageMap['Genel Parametreler'].labelName, this.languageMap['Sendika Parametreleri'].labelName];
      this.getEnums("Process",null);
      this.getEnums("ProcessType",null);
      // this.processList = [];
      // this.processTypeList=[];

      // this.processList = [
      //   { kodu: 0, adi: 'İşlem Yok' },
      //   { kodu: 1, adi: 'Mevcut Ay' },
      //   { kodu: 2, adi: 'Sonraki Ay' }];


      // this.processTypeList = [
      //   { kodu: 0, adi: 'Ekle' },
      //   { kodu: 1, adi: 'Çıkart' }];


      const aa = [
        { Index: 0, name: 'Devamsızlık Kesintileri' },
        { Index: 1, name: 'Mesai Kesintileri' }];

      this.links = aa;

      this.getAbsence();
    });

  }



  getEnums(type,code) {

    this.definitionsService.GetEnums(type,code)
      .subscribe((res: any[]) => {

        if (type==='Process')
        this.processList = res;        
        else if (type==='ProcessType')
        this.processTypeList = res;

        // console.log(this.ExitReasons);

      });

  }

  getOvertime() {

    this.syndicateService.GetOvertime()
      .subscribe((res: any[]) => {

        console.log(res);
        this.dataSourceOvertime = new MatTableDataSource();
        this.dataSourceOvertime.data = res;

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));

      });
  }

  getAbsence() {

    this.syndicateService.GetAbsence()
      .subscribe((res: any[]) => {

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));

      });
  }


  getAbsenceDetail(syndicateAbsenceID) {

    this.syndicateService.GetAbsenceDetail(syndicateAbsenceID)
      .subscribe((res: any[]) => {

        this.dataSourceDetail = new MatTableDataSource();
        this.dataSourceDetail.data = res;

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));

      });


  }

  getAbsenceDeduction(syndicateOvertimeID) {

    this.syndicateService.GetDeduction(syndicateOvertimeID)
      .subscribe((res: any[]) => {

        this.dataSourceDeduction = new MatTableDataSource();
        this.dataSourceDeduction.data = res;

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));

      });

  }


  getAbsencePayment(syndicateOvertimeID) {

    this.syndicateService.GetPayment(syndicateOvertimeID)
      .subscribe((res: any[]) => {

        this.dataSourcePayment = new MatTableDataSource();
        this.dataSourcePayment.data = res;

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));

      });

  }

  openDefinition(type, id) {

    this.dialog.open(SyndicateDefinitionsComponent, {
      panelClass: 'listClass',
      data: { Type: type, Id: id, Data: { ID: null, Code: null, Name: null } },
      disableClose: false,
      width: '450px',
      height: '660px'
    }).afterClosed().subscribe(result => {

      console.log(result);
      if (id === 1) this.formAbsence.patchValue({ FlexPersonnelGroupCode: result.Code, FlexPersonnelGroupID: result.ID });
      if (id === 2) this.formAbsence.patchValue({ WorkingTypeCode: result.Code,  WorkingTypeName: result.Name,  WorkingTypeID: result.ID });
      if (id === 3) this.formAbsence.patchValue({ WeekendWorkingTypeCode: result.Code,   WorkingTypeName: result.Name, WeekendWorkingTypeID: result.ID });
      if (id === 4) this.formAbsenceDetail.patchValue({ WorkingTypeCode: result.Code,  WorkingTypeName: result.Name,  WorkingTypeID: result.ID });

      if (id === 5) this.formOvertime.patchValue({ FlexPersonnelGroupCode: result.Code, FlexPersonnelGroupID: result.ID });
      if (id === 6) this.formOvertime.patchValue({ WorkingTypeCode: result.Code,  WorkingTypeName: result.Name,  WorkingTypeID: result.ID });
      if (id === 7) this.formDeduction.patchValue({ WorkingTypeCode: result.Code,  WorkingTypeName: result.Name,  WorkingTypeID: result.ID });
      if (id === 8) this.formPayment.patchValue({ WorkingTypeCode: result.Code,  WorkingTypeName: result.Name,  WorkingTypeID: result.ID });


    });
  }

  formReset(form: FormGroup) {

    form.reset();

    // Object.keys(form.controls).forEach(key => {
    //   form.get(key).setErrors(null) ;
    // });
  }
  add() {
    this.selectedRowIndex = 0;
    this.formReset(this.formAbsence)
    this.formAbsence.patchValue({ ID: 0 });
  }

  addDetail() {
    this.formReset(this.formAbsenceDetail)
    this.formAbsenceDetail.patchValue({ ID: 0 });
  }

  addOvertime() {

    this.selectedOvertimeRowIndex = 0;
    this.formReset(this.formOvertime)
    this.formOvertime.patchValue({ ID: 0 });
  }


  addDeduction() {

    this.selectedDeductionRowIndex = 0;
    this.formReset(this.formDeduction)
    this.formDeduction.patchValue({ ID: 0 });
  }


  addPayment() {

    this.selectedPaymentRowIndex = 0;
    this.formReset(this.formPayment)
    this.formPayment.patchValue({ ID: 0 });
  }


  save() {

    if (this.formAbsence.invalid) {
      return;
    }

    this.syndicateService.PostAbsence(this.formAbsence.value)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getAbsence();

      });

  }

  saveOvertime() {

    if (this.formOvertime.invalid) {
      return;
    }

    this.syndicateService.PostOvertime(this.formOvertime.value)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getOvertime();

      });

  }


  saveDeduction() {

    if (this.formDeduction.invalid) {
      return;
    }
    this.formDeduction.value.SyndicateOvertimeID = this.selectedOvertimeRowIndex;
    this.syndicateService.PostDeduction(this.formDeduction.value)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getAbsenceDeduction(this.formDeduction.value.SyndicateOvertimeID);

      });

  }


  savePayment() {

    if (this.formPayment.invalid) {
      return;
    }
    this.formPayment.value.SyndicateOvertimeID = this.selectedOvertimeRowIndex;
    this.syndicateService.PostPayment(this.formPayment.value)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getAbsencePayment(this.formPayment.value.SyndicateOvertimeID);

      });

  }


  saveDetail() {

    if (this.formAbsenceDetail.invalid) {
      return;
    }

    this.formAbsenceDetail.value.SyndicateAbsenceID = this.selectedRowIndex;
    this.syndicateService.PostAbsenceDetail(this.formAbsenceDetail.value)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getAbsenceDetail(this.formAbsenceDetail.value.SyndicateAbsenceID);

      });


  }


  delete(row) {
    this.openDialog(1, row);

  }

  deleteDetail(row) {
    this.openDialog(2, row);

  }

  deleteOvertime(row) {
    this.openDialog(3, row);

  }

  deleteDeduction(row) {
    this.openDialog(4, row);

  }

  deletePayment(row) {
    this.openDialog(5, row);

  }


  openDialog(type, row) {


    console.log(row);
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
        if (type === 1) {
          this.deleteAbsence(row.ID);
          this.formAbsence.reset();
        }
        if (type === 2) {
          this.deleteAbsenceDetail(row.SyndicateAbsenceID, row.ID);
          this.formAbsenceDetail.reset();
        }
        if (type === 3) {
          this.deleteAbsenceOvertime(row.ID);
          this.formOvertime.reset();

        }
        if (type === 4) {
          this.deleteAbsenceDeduction(row.SyndicateOvertimeID, row.ID);
          this.formDeduction.reset();
        }
        if (type === 5) {
          this.deleteAbsencePayment(row.SyndicateOvertimeID, row.ID);
          this.formPayment.reset();
        }

      }
    });
  }

  deleteAbsencePayment(syndicateOvertimeID, Id) {

    this.syndicateService.DeletePayment(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getAbsencePayment(syndicateOvertimeID);

      });
  }


  deleteAbsenceDeduction(syndicateOvertimeID, Id) {

    this.syndicateService.DeleteDeduction(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getAbsenceDeduction(syndicateOvertimeID);

      });
  }

  deleteAbsenceOvertime(Id) {

    this.syndicateService.DeleteOvertime(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getOvertime();
        this.getAbsenceDeduction(Id);
        this.getAbsencePayment(Id);

      });


  }

  deleteAbsence(Id) {

    this.syndicateService.DeleteAbsence(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getAbsence();


      });


  }

  deleteAbsenceDetail(syndicateAbsenceID, Id) {

    this.syndicateService.DeleteAbsenceDetail(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getAbsenceDetail(syndicateAbsenceID);

      });
  }

  selectRow(row) {

    this.selectedDetailRowIndex = 0;
    this.selectedRowIndex = row.ID;
    this.formAbsence.patchValue({
      ID: row.ID, FlexPersonnelGroupID: row.FlexPersonnelGroupID, FlexPersonnelGroupCode: row.FlexPersonnelGroupCode,
      WorkingTypeID: row.WorkingTypeID, WorkingTypeCode: row.WorkingTypeCode,WorkingTypeName: row.WorkingTypeName, Day: row.Day, Time: moment(row.Time, "YYYY-MM-DD HH:mm:ss").format("HH:mm")
      , Process: row.Process.toString(), WeekendWorkingTypeID: row.WeekendWorkingTypeID,
      WeekendWorkingTypeCode: row.WeekendWorkingTypeCode
    });
    this.formReset(this.formAbsenceDetail);
    this.getAbsenceDetail(row.ID);

    // this.formAbsence.patchValue({ ID:row.ID, FlexPersonnelGroupID:row.FlexPersonnelGroupID,  FlexPersonnelGroupCode:row.FlexPersonnelGroupCode })

  }



  selectRowDetail(row) {

    this.selectedDetailRowIndex = row.ID;
    this.formAbsenceDetail.patchValue({
      ID: row.ID, SyndicateAbsenceID: row.SyndicateAbsenceID,
      WorkingTypeID: row.WorkingTypeID, WorkingTypeCode: row.WorkingTypeCode, WorkingTypeName: row.WorkingTypeName, ProcessType: row.ProcessType.toString()
    });


    // this.formAbsence.patchValue({ ID:row.ID, FlexPersonnelGroupID:row.FlexPersonnelGroupID,  FlexPersonnelGroupCode:row.FlexPersonnelGroupCode })

  }

  selectOvertimeRow(row) {

    this.selectedDeductionRowIndex = 0;
    this.selectedPaymentRowIndex = 0;
    this.selectedOvertimeRowIndex = row.ID;
    // this.selectedFlexPersonnelGroupID = row.FlexPersonnelGroupID;

    this.formOvertime.patchValue({
      ID: row.ID, FlexPersonnelGroupID: row.FlexPersonnelGroupID, FlexPersonnelGroupCode: row.FlexPersonnelGroupCode,
      WorkingTypeID: row.WorkingTypeID, WorkingTypeCode: row.WorkingTypeCode, WorkingTypeName: row.WorkingTypeName, UpperLimit: moment(row.UpperLimit, "YYYY-MM-DD HH:mm:ss").format("HH:mm")

    });
    this.formReset(this.formDeduction);
    this.formReset(this.formPayment);
    this.getAbsenceDeduction(row.ID);
    this.getAbsencePayment(row.ID);

  }

  selectDeductionRow(row) {

    this.selectedDeductionRowIndex = row.ID;
    this.formDeduction.patchValue({
      ID: row.ID, WorkingTypeID: row.WorkingTypeID, WorkingTypeCode: row.WorkingTypeCode,WorkingTypeName: row.WorkingTypeName
    });
  }


  selectPaymentRow(row) {

    this.selectedPaymentRowIndex = row.ID;
    this.formPayment.patchValue({
      ID: row.ID, WorkingTypeID: row.WorkingTypeID, WorkingTypeCode: row.WorkingTypeCode,WorkingTypeName: row.WorkingTypeName
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
    this.definitionsService.DefinitionGetWorkingTypesById(id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));

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
