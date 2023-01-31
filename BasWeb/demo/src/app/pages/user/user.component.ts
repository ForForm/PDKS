import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
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
// import icKey from '@iconify/icons-fa-solid/key';
// import icKey from '@iconify/icons-ic/src/vpn-key';
// import icSetings from '@iconify/icons-ic/src/settings';
import icMobile from '@iconify/icons-fa-solid/mobile';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icId from '@iconify/icons-fa-solid/address-card';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { LayoutService } from './../../../@vex/services/layout.service';
import { PersonnelService } from '../services/personnel.service';
import { WaitComponent } from '../wait/wait.component';
import { PersonnelListComponent } from './personnel-list.component';
import { MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
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
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { PasswordStrengthValidator } from "./password-strength.validators";
// export function createPasswordValidator(): ValidatorFn {
//   return (form: FormGroup): ValidationErrors | null => {
//           return (form.get("Password").value);
//   }
// }

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
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



export class UserComponent implements OnInit, OnDestroy {

  selectedRowIndex = 0;
  language: any = []; languageMap: LanguageMap = {};
  layoutCtrl = new FormControl('boxed');
  @Input() columns = ['Checkbox', 'ID', 'Code', 'Name', 'Password', 'EmployeeId', 'EmployeeCode', 'IsAdmin', 'IsForced', 'Actions'];
  icClose = icClose;
  icAdd = icAdd;
  icMoreHoriz = icMoreHoriz;
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
  // icKey = icKey;
  // icSetings=icSetings;
  icMobile = icMobile;
  icPhone = icPhone;
  icId = icId;
  icDelete = icDelete;
  result: string;
  subFooter: boolean;
  isMobileLayout = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  Employees = [];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    private fb: FormBuilder,
    private layoutService: LayoutService,
    public personnelService: PersonnelService,
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

  ngOnInit() {

    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
    this.isMobileLayout = window.innerWidth <= 991;

    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    this.form = this.fb.group({
      ID: 0,
      Code: ['', Validators.required],
      Name: ['', Validators.required],
      Password: ['', [Validators.minLength(8), PasswordStrengthValidator]],
      IsAdmin: [0],
      IsForced: [0],
      EmployeeId: [0],
      EmployeeCode: ['']
    });
    this.turkishCulture();
    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      this.breadcrumbs = [this.languageMap['Sistem'].labelName, this.languageMap['Kullanıcı İşlemleri'].labelName, this.languageMap['Kullanıcı Tanımlama'].labelName];
      // this.definitionGetShiftGroup();
      this.getUsers();
      this.getPersonnel(null);
    });

  }



  getPersonnel(obj) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    // var obj={FilterType:obj.Type, FilterCode:obj.Code}
    this.personnelService.GetPersonnel(obj)
      .subscribe((res: any[]) => {

        this.Employees = res;
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
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

    this.postUser(this.form.value)
    // console.log(this.form.value);

  }

  delete(row) {
    this.openDialog(row.ID);

  }


  openDialog(ID) {
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

        this.deleteUser(ID);

      }
    });
  }


  openDefinition(value, obj) {


    this.dialog.open(PersonnelListComponent, {
      panelClass: 'listClass',
      data: { Type: value, Data: { ID: null, Code: null, Name: null } },
      disableClose: false,
      width: '450px',
      height: '600px'
    }).afterClosed().subscribe(result => {

      this.form.patchValue({ EmployeeId: result.ID, EmployeeCode: result.Code, });
      // if (value == '0') {
      //   if (obj == 1) { this.form.patchValue({ Emp1: result.Code }); if (result.ID == null) this.FilteroObjEnableArray[0] = false; else this.FilteroObjEnableArray[0] = true; }
      //   else
      //     this.form.patchValue({ Emp2: result.Code });
      // }


    });
  }


  selectRow(row) {

    // row.Password
    this.selectedRowIndex = row.ID;
    this.form.patchValue({ ID: row.ID, Code: row.Code, Name: row.Name, Password: null, IsAdmin: row.IsAdmin, EmployeeId: row.EmployeeId, EmployeeCode: row.EmployeeCode })

  }



  getUsers() {

    this.authorizationService.GetUsers()
      .subscribe((res: any[]) => {
        console.log(res);

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));

      });

  }


  waitProgress(message, timer) {
    this.snackbar.dismiss();
    let config = new MatSnackBarConfig();
    if (timer !== undefined) {
      config.duration = timer;
      config.verticalPosition = 'top';

    }
    config.panelClass = ['message-position'];
    this.snackbar.open(message, "", config);

  }

  postUser(obj) {

    this.authorizationService.PostUser(obj)
      .subscribe((res: any[]) => {
        console.log(res);

        if (res[0].ReturnCode === '401') {
          // this.waitProgress(, 1000);
          this.openSnackBar(res[0].ReturnDscr);
        }
        else
          this.getUsers();

      });


  }


  
  openSnackBar(message) {

    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'],
      duration: 1000,
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

  deleteUser(Id) {

    this.authorizationService.DeleteUser(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getUsers();

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