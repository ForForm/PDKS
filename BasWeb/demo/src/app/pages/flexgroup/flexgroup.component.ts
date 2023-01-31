import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { DefinitionsComponent } from '../definitions/definitions.component';
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
import { ShiftGroupComponent } from '../shiftgroup/shiftgroup.component';
import { ShiftGroupService } from '../services/shiftgroup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { untilDestroyed } from 'ngx-take-until-destroy';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { FlexGroupDefinitionsComponent } from '../flexgroup/flexgroup-definitions.component';
import icAdd from '@iconify/icons-ic/twotone-add';
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
import { ro } from 'date-fns/locale';


@Component({
  selector: 'flexgroup',
  templateUrl: './flexgroup.component.html',
  styleUrls: ['./flexgroup.component.scss'],
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

export class FlexGroupComponent implements OnInit, OnDestroy {

  language: any = []; languageMap: LanguageMap = {};
  layoutCtrl = new FormControl('boxed');
  @Input() columns = ['ID', 'Code', 'Name','IsAndOr', 'Actions'];
  @Input() columnsV = ['ID', 'FlexPersonnelGroupID', 'Type', 'Value', 'Actions'];
  icClose = icClose;

  groups: any;
  pageSize = 10;
  isVisible = false;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  dataSourceV: MatTableDataSource<any> | null;
  selectionH = new SelectionModel<any>(true, []);
  selectionD = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  form: FormGroup;
  formValue: FormGroup;
  searchStr = this.searchCtrl.valueChanges;
  labels = aioTableLabels;
  icFilterList = icFilterList;
  breadcrumbs: string[];
  href: string;
  pageauth = { write: false, delete: false, update: false };
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icAdd = icAdd;
  result: string;
  subFooter: boolean;
  isMobileLayout = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    private layoutService: LayoutService,
    public shiftGroupService: ShiftGroupService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private cd: ChangeDetectorRef,
    private adapter: DateAdapter<any>,
    location: Location) {


  }

  resize(type) {
    if (type == 'fullwidth')
      this.layoutService.collapseSidenav();
    else
      this.layoutService.expandSidenav();

  }


  getEnums(type, code) {

    this.definitionsService.GetEnums(type, code)
      .subscribe((res: any[]) => {

        if (type === 'FlexGroups')
          this.groups = res;

      });
  }

  ngOnInit() {


    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    this.getEnums('FlexGroups', null);
    this.form = this.fb.group({ ID: 0, Code: [null, Validators.required], Name: [null, Validators.required], IsAndOr:null });
    this.formValue = this.fb.group({ ID: 0, Type: [null, Validators.required], Value: [null, Validators.required] });
    this.turkishCulture();
    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      this.breadcrumbs = [this.languageMap['Tanımlamalar'].labelName, this.languageMap['Genel Tanımlamalar'].labelName, this.languageMap['Esnek Personel Grupları'].labelName];
    });

    this.getFlexGroupPersonel(null);

  }

  refresh() {
    this.cd.detectChanges();

  }


  getFlexGroupPersonel(ID) {

    this.definitionsService.GetFlexGroupPersonel(ID)
      .subscribe((res: any[]) => {

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        this.refresh();

      });

  }

  getFlexGroupPersonelDetail(FlexPersonnelGroupID, ID) {

    this.definitionsService.GetFlexGroupPersonelDetail(FlexPersonnelGroupID, ID)
      .subscribe((res: any[]) => {

        this.dataSourceV = new MatTableDataSource();
        this.dataSourceV.data = res;
        this.refresh();

      });

  }


  deleteFlexGroupPersonel(ID) {

    this.definitionsService.DeleteFlexGroupPersonel(ID)
      .subscribe((res: any[]) => {

        this.getFlexGroupPersonel(null);
        this.getFlexGroupPersonelDetail(ID, null);

      });

  }

  deleteFlexGroupPersonelDetail(ID) {

    this.definitionsService.DeleteFlexGroupPersonelDetail(ID)
      .subscribe((res: any[]) => {

        this.getFlexGroupPersonelDetail(this.form.value.ID, null);

      });
  }

  add() {
    this.form.patchValue({ ID: 0, Code: null, Name: null, IsAndOr:null });

  }

  addValue() {

    this.formValue.patchValue({ ID: 0, FlexPersonnelGroupID: this.form.value.ID, Type: null, Value: null });
  }

  select(row) {

    this.selectionH.clear();
    this.selectionH.toggle(row);
    this.selectionH.isSelected(row);

    this.form.patchValue({ ID: row.ID, Code: row.Code, Name: row.Name, IsAndOr:row.IsAndOr });
    this.formValue.patchValue({ ID: 0, FlexPersonnelGroupID: 0, Type: '', Value: '' });
    this.isVisible = true;
    this.getFlexGroupPersonelDetail(row.ID, null);
  }

  selectDetail(row) {

    this.selectionD.clear();
    this.selectionD.toggle(row);
    this.selectionD.isSelected(row);

    this.formValue.patchValue({ ID: row.ID, FlexPersonnelGroupID: this.form.value.ID, Type: row.Type, Value: row.Value });

  }


  delete(row) {
    // this.deleteFlexGroupPersonel(row.ID);
    this.openDialog('master', row, 'Bağlantılı tüm alt kodlar silinecektir.');
  }

  deleteDetail(row) {
    this.openDialog('detail', row, 'Kayıt silinecektir.');
  }

  postFlexGroupPersonel(obj) {

    if (this.form.invalid)
      return;

    this.definitionsService.PostFlexGroupPersonel(obj)
      .subscribe((res: any[]) => {

        this.form.patchValue({ ID: res[0].ID });
        this.getFlexGroupPersonel(null);

      });

  }

  postFlexGroupPersonelDetail(obj) {

    if (this.formValue.invalid)
      return;

    obj.FlexPersonnelGroupID = this.form.value.ID;
    this.definitionsService.PostFlexGroupPersonelDetail(obj)
      .subscribe((res: any[]) => {


        console.log(res);
        this.formValue.patchValue({ ID: res[0].ID });
        this.getFlexGroupPersonelDetail(this.form.value.ID, null);

      });

  }

  save() {
    this.postFlexGroupPersonel(this.form.value);
  }


  saveValue() {
    this.postFlexGroupPersonelDetail(this.formValue.value);
  }


  openShiftGroup(param) {

    const dialogRef = this.dialog.open(ShiftGroupComponent, {
      panelClass: 'listClass',
      data: { type: param },
      width: '750px',
      autoFocus: false,
      maxWidth: this.isMobileLayout ? '90vw' : '80vw'
    });

    dialogRef.afterClosed().subscribe(result => {

      this.formValue.patchValue({ Value: result.Code });

    });
  }

  openDefinition(value) {



    if (this.formValue.value.Type === '0' || this.formValue.value.Type === '12') {

      this.dialog.open(FlexGroupDefinitionsComponent, {
        panelClass: 'listClass',
        data: { Type: this.formValue.value.Type, Data: { ID: null, Code: null, Name: null } },
        disableClose: false,
        width: '450px',
        height: '600px'
      }).afterClosed().subscribe(result => {

        this.formValue.patchValue({ Value: result.Code });
      });

      return;
    }

    if (this.formValue.value.Type === '2') { this.openShiftGroup('Outter'); return; }

    let param = this.formValue.value.Type === '1' ? 'Department' :
      (this.formValue.value.Type === '3' ? 'Personnel' :
        this.formValue.value.Type === '4' ? 'CostCenter' : 
        this.formValue.value.Type === '5' ? 'Cadre' : 
        this.formValue.value.Type === '6' ? 'Profession' : 
        this.formValue.value.Type === '7' ? 'Task' : 
        this.formValue.value.Type === '8' ? 'Group' : 
        this.formValue.value.Type === '9' ? 'Unit' : 
        this.formValue.value.Type === '10' ? 'Branch' : 
        this.formValue.value.Type === '11' ? 'ServiceStation' : '');


    const dialogRef = this.dialog.open(DefinitionsComponent, {
      panelClass: 'listClass',
      data: { type: param, id: 0, code: '', name: '', codePath: '' },
      width: '750px',
      height: '775px',
      autoFocus: false,
      maxWidth: this.isMobileLayout ? '90vw' : '80vw'
    });
      dialogRef.afterClosed().subscribe(result => {

        this.formValue.patchValue({ Value: result.code });
    });
  
}



clearValue(element, e) {

  // console.log(element);
  // console.log(e);
  if (e.value==100) this.formValue.patchValue({ Value: '*' });
  else
  this.formValue.patchValue({ Value: null });
}

isAllSelected() {
  const numSelected = this.selectionD.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

turkishCulture() {
  this.adapter.setLocale("tr");
}


detailToggle(row) {
  this.selectionD.toggle(row);
}


masterToggle() {
  this.isAllSelected() ?
    this.selectionD.clear() :
    this.dataSource.data.forEach(row => this.selectionD.select(row));
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


openDialog(type, obj, message) {
  this.dialog.open(DemoDialogComponent, {
    data: {
      temp1: this.languageMap[message].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
      Hayir: this.languageMap['Hayır'].labelName
    },
    disableClose: false,
    width: '400px'
  }).afterClosed().subscribe(result => {
    this.result = result;
    if (this.result === "Yes") {
      if (type == 'master')
        this.deleteFlexGroupPersonel(obj.ID);

      if (type == 'detail')
        this.deleteFlexGroupPersonelDetail(obj.ID);
    }
  });
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
