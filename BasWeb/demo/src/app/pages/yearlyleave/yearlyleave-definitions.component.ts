import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSave from '@iconify/icons-ic/save';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
// import { Definition,DefinitionHourDetail } from '../definitions/interfaces/definition.model'
import { formatDate, Time } from "@angular/common";
import { MatTableDataSource } from '@angular/material/table';
import { DefinitionsService } from '../services/definitions.service';
import { stagger20ms } from '../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../@vex/animations/scale-fade-in.animation';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LeaveParamService } from '../services/leaveparam.service.';
import { MatDialog } from '@angular/material/dialog';
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
import { WaitComponent } from '../wait/wait.component';
import { Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceDefinitionsComponent } from '../attendance/attendance-definitions.component';

@Component({
  selector: 'vex-yearlyleave-definitions',
  templateUrl: './yearlyleave-definitions.component.html',
  styleUrls: ['./yearlyleave.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
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


export class YearlyLeaveDefinitionsComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  static id = 100;
  LeaveUsedTypes = [];
  result: string;
  Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  @Input() columns = ['ID', 'EmployeeID', 'Code', 'Name',   'Month', 'Year', 'Day', 'Type','Actions'];
  form: FormGroup;
  formYearUsed: FormGroup; //personel filterForm
  mode: 'create' | 'update' = 'create';
  dataSource: MatTableDataSource<any> | null;
  dataSourceV: MatTableDataSource<any> | null;
  icMoreVert = icMoreVert;
  icClose = icClose;
  Type = 0;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icSave = icSave;
  selectedYearUsedRow = 0;
  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icMoreHoriz = icMoreHoriz;
  icPhone = icPhone;
  visible = false;
  label = '';
  groups: any;

  // sub=false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<YearlyLeaveDefinitionsComponent>,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    public leaveparamService: LeaveParamService,
    private cd: ChangeDetectorRef,
    public definitionsService: DefinitionsService,
    private adapter: DateAdapter<any>,
    private snackbar: MatSnackBar) {
  }

  openDefinition(value, obj) {
    this.dialog.open(AttendanceDefinitionsComponent, {
      panelClass: 'listClass',
      data: { Type: value, Data: { ID: null, Code: null, Name: null } },
      disableClose: false,
      width: '450px',
      height: '600px'
    }).afterClosed().subscribe(result => {

      // if (result.ID == null) this.FilteroObjEnableArray[0] = false; else this.FilteroObjEnableArray[0] = true;
      if (value == '0') {
        if (obj == 1) {
          this.formYearUsed.patchValue({ EmployeeID: result.ID, Code: result.Code, Name:result.Name });
          console.log(this.formYearUsed.value);
        }
      }


    });
  }

  deleteYearUsedRow(row) {
    this.openDialog(row.ID);
  }

  deleteYearParamsUsed( Id) {

    this.leaveparamService.DeleteYearParamsUsed(Id)
      .subscribe((res: any[]) => {
        console.log(res);

        this.getYearlyParamsUsed();

      });
  }
  
  openDialog(ID) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: this.languageMap['Personel bilgisi silinecektir.'].labelName,
        temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
          this.deleteYearParamsUsed(ID);
      }
    });
  }

  saveYearUsedRow() {

    if (this.formYearUsed.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
 
    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    const definition = this.formYearUsed.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    // definition.FlexPersonnelGroupID=this.selectedYearRow['FlexPersonnelGroupID'];
    this.leaveparamService.PostLeaveYearParamsUsed(definition)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        // this.definitionGetTypesDistibution(obj.workingTypeID);
        // this.getParams();
        this.getYearlyParamsUsed();
        // this.waitProgressDismiss();
        dialogRef.close();

      }, err => {
        console.log(err);
        // this.waitProgress(err, 3000);
        dialogRef.close();
      });
  }
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getEnums(type, code) {

    this.definitionsService.GetEnums(type, code)
      .subscribe((res: any[]) => {

        if (type === 'LeaveUsedTypes')
          this.LeaveUsedTypes = res;




      });
  }

  refresh() {
    this.cd.detectChanges();

  }

  getFlexGroupPersonelList(type) {

    if (type === "12") {

      this.dataSource = new MatTableDataSource();
      this.dataSource.data = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];
      this.refresh();


    }
    else {
      this.definitionsService.GetFlexGroupPersonelList(type)
        .subscribe((res: any[]) => {
          this.dataSource = new MatTableDataSource();
          this.dataSource.data = res;
          this.refresh();
          // this.searchCtrl.valueChanges.pipe(
          //   untilDestroyed(this)
          // ).subscribe(value => this.onFilterChange(value));

        });
    }
  }

  select(row) {


    this.defaults.Data.ID = row.ID;
    this.defaults.Data.Code = row.Code;
    this.defaults.Data.Name = row.Name;
    this.dialogRef.close(this.defaults.Data);

  }

  addYearUsedRow() {
    this.formYearUsed.reset();

  }



  selectYearUsedRow(row) {

    // Time:  formatDate(row.Time, 'HH:mm', locale)
    const locale = 'en-US';
    this.selectedYearUsedRow = this.selectedYearUsedRow === row ? null : row;
    this.formYearUsed.patchValue({
      ID: row.ID, EmployeeID: row.EmployeeID, Code: row.Code, Name: row.Name, Surname: row.Surname,
      Type: row.Type.toString(), Month: row.Month, Year: row.Year, Day: row.Day
    });

    // console.log(this.formYearCode.value);

  }

  turkishCulture() {
    this.adapter.setLocale("tr");
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.formYearUsed = this.fb.group({
        ID: null, EmployeeID: [null, Validators.required], Code: [null, Validators.required], Name: null, Month: [null, Validators.required], Year: [null, Validators.required], Day: null, Type: [null, Validators.required]
      });

      this.languageMap = AppUtil.getLabels();
      this.getEnums('LeaveUsedTypes', null);
      this.getYearlyParamsUsed();

    });

  }


  getYearlyParamsUsed() {

    let selectedColumns = [];
    this.leaveparamService.GetYearlyParamsUsed(0)
      .subscribe((res: any[]) => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
      }, err => {
        console.log(err);

      });
  }


  getFlexGroupPersonel(ID) {

    this.definitionsService.GetFlexGroupPersonel(ID)
      .subscribe((res: any[]) => {

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        this.refresh();

      });

  }

  getFlexGroupWorkingType(type) {

    this.definitionsService.DefinitionGetWorkingTypesLeave(type)
      .subscribe((res: any[]) => {

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        this.refresh();

      });

  }

  getReasons(type) {

    this.definitionsService.DefinitionGetConstants(type)
      .subscribe((res: any[]) => {

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        this.refresh();


      });


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

  save() {
    if (this.mode === 'create') {
      this.createDefinition();
    } else if (this.mode === 'update') {
      this.updateDefinition();
    }
  }

  createDefinition() {
    const definition = this.form.value;

    if (this.defaults.modul === 'code' && (definition.code === '' || definition.name === '')) {
      this.waitProgress("Kod ve açıklama alanı zorunludur...", 1000);
      return;
    }


    if (!definition.imageSrc) {
      definition.imageSrc = 'assets/img/avatars/1.jpg';
    }

    this.dialogRef.close(definition);
  }

  updateDefinition() {
    const definition = this.form.value;
    if (this.defaults.sub && this.defaults.modul === 'code' && (definition.subcode === '' || definition.subname === '')) {
      this.waitProgress("Alt Kod ve açıklama alanı zorunludur...", 1000);
      return;
    }
    definition.id = this.defaults.def.id;
    console.log(definition);
    this.dialogRef.close(definition);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
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



