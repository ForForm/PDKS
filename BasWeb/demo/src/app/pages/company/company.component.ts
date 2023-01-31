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


@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
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

export class CompanyComponent implements OnInit, OnDestroy {

  selectedRowIndex=0;
  subFooter:boolean;
  language: any = []; languageMap: LanguageMap = {};
  layoutCtrl = new FormControl('boxed');
  @Input() columns = ['Checkbox', 'ID', 'Code', 'Name', 'Address', 'Telephone1', 'Telephone2', 'Fax', 'Mail', 'Actions'];
  icClose = icClose;
  icAdd = icAdd;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  form: FormGroup;
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
  isMobileLayout=false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    private layoutService: LayoutService,
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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  turkishCulture() {
    this.adapter.setLocale("tr");
  }

  ngOnInit() {

    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;

    this.subFooter=JSON.parse(localStorage.getItem('SubFooter'));
    this.form = this.fb.group({ ID: 0, Code: ['', Validators.required], Name: ['', Validators.required], Address: [''], Telephone1: ['', [ Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]], Telephone2: ['', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")], Fax: [''], Mail: ['', [ Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]] });
    this.turkishCulture();
    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      this.breadcrumbs = [this.languageMap['Tanımlamalar'].labelName, this.languageMap['Genel Parametreler'].labelName, this.languageMap['Şirket Tanımları'].labelName];
      // this.definitionGetShiftGroup();
      this.getCompanies();
    });

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

    this.postCompany(this.form.value)
    // console.log(this.form.value);

  }

  delete(row) {
    this.openDialog(row.ID);

  }

  
openDialog(ID) {
  this.dialog.open(DemoDialogComponent, {
    data: { temp1:this.languageMap['Kayıt silinecektir.'].labelName, temp2:this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName,Evet:this.languageMap['Evet'].labelName,
    Hayir:this.languageMap['Hayır'].labelName  }, 
    disableClose: false,
    width: '400px'
  }).afterClosed().subscribe(result => {
    this.result = result;
    if (this.result==="Yes")
    {
       this.deleteCompany(ID);
         
    }
  });
}

  selectRow(row) {

    this.selectedRowIndex=row.ID;
    // console.log(row);
    this.form.patchValue({ ID: row.ID, Code: row.Code, Name: row.Name, Address: row.Address, Telephone1: row.Telephone1, Telephone2: row.Telephone2, Fax: row.Fax, Mail: row.Mail })

  }



  getCompanies() {

    this.authorizationService.GetCompanies()
      .subscribe((res: any[]) => {
        console.log(res);

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));

      });


  }


  postCompany(obj) {

    this.authorizationService.PostCompany(obj)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getCompanies();

      });


  }

  deleteCompany(Id) {

    this.authorizationService.DeleteCompany(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getCompanies();

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
