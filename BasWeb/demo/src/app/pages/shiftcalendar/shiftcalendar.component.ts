
import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject, BehaviorSubject } from 'rxjs';
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
import { ShiftGroupService } from '../services/shiftgroup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { untilDestroyed } from 'ngx-take-until-destroy';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSave from '@iconify/icons-ic/save';
import {
  MomentDateModule,
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

// import { ConsoleReporter } from 'jasmine';
// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';
import * as _moment from "moment";
import { async } from '@angular/core/testing';
import { WaitComponent } from '../wait/wait.component';
const moment = _moment;
export interface Personnel {
  Say: number;
  Property: string;
  Label: string;
  ID: number;
  StartDate?: Date;
  BeginDate?: Date;
  EndDate?: Date;
  Shifts: [{ shiftID: number, Day: number }];
}
// property: this.languageMap['Tarih'].labelName , id: 0, startDate: null, dates:this.dates


@Component({
  selector: 'shiftcalendar',
  templateUrl: './shiftcalendar.component.html',
  styleUrls: ['./shiftcalendar.component.scss'],
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



export class ShiftCalendarComponent implements OnInit, OnDestroy {

  language: any = []; languageMap: LanguageMap = {};
  layoutCtrl = new FormControl('fullwidth');
  @Input() columns = ['Checkbox', 'ID', 'Code', 'Name', 'StartDate'];
  @Input() columnsShift: TableColumn<any>[];
  // selectedColumns: any = [];
  selectedColumns: Personnel[];
  // selectedColumns :any= [];
  // @Input() columns: TableColumn<T>[];

  // @Input() columnsShift:TableColumn<T>[] = [
  //   { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
  //   { label: 'ID', property: 'id', type: 'text', visible: true, cssClasses: ['font-medium'] },
  //   { label: 'Kod', property: 'code', type: 'text', visible: true, cssClasses: ['font-medium'] },
  //   { label: 'Adı', property: 'name', type: 'text', visible: true },
  //   { label: 'Actions', property: 'actions', type: 'button', visible: true }
  // ];
  icClose = icClose;
  icEdit = icEdit;
  icSave = icSave;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  dataSourceShift: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  form: FormGroup;
  searchStr = this.searchCtrl.valueChanges;
  labels = aioTableLabels;
  icFilterList = icFilterList;
  breadcrumbs: string[];
  href: string;
  pageauth = { write: false, delete: false, update: false };
  profile$: any;
  Colors: string[][];
  usrData = [];
  saveEnabled = false;
  subFooter: boolean;
  result: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    public shiftGroupService: ShiftGroupService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private adapter: DateAdapter<any>,
    private changeDetectorRefs: ChangeDetectorRef,
    location: Location) {


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
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    let startDate = moment(new Date());
    this.form = this.fb.group({ BeginDate: [startDate, Validators.required], EndDate: [startDate, Validators.required] });
    this.turkishCulture();
    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      this.breadcrumbs = [this.languageMap['Parametreler'].labelName, this.languageMap['Genel Parametreler'].labelName, this.languageMap['Takvim Parametreleri'].labelName];
      this.definitionGetShiftGroup();

    });

  }

  definitionGetShiftGroup() {

    let id = 0;
    this.shiftGroupService.GetShiftGroup(id)
      .subscribe((res: any[]) => {

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

        //   this.searchCtrl.valueChanges.pipe(
        //     untilDestroyed(this)
        //   ).subscribe(value => this.onFilterChange(value));
        //   this.getShiftGroupCalendar();
      }
      );

  }


  getShiftGroupCalendar() {

    let id = 0;
    this.shiftGroupService.GetShiftGroupCalendar()
      .subscribe((res: any[]) => {
        if (res.length > 0) {

          Object.keys(res).forEach(key => {
            this.dataSource.data.forEach(row => { if (row.ID === res[key].ID) this.selection.select(row); }
            );
          });

          this.form.patchValue({ BeginDate: res[0].BeginDate, EndDate: res[0].EndDate });
          this.getCalendar();
          // this.create();
        }
      });

  }





  getCalendar() {



    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.refresh();
    this.selectedColumns.push({ Say: 0, Property: 'Tarih', Label: 'Tarih', ID: 0, StartDate: this.form.value.BeginDate, BeginDate: this.form.value.BeginDate, EndDate: this.form.value.EndDate, Shifts: null });
    let say: number = this.selection.selected.length;
    for (var i = 0; i < say; i++) {
      this.selectedColumns.push({ Say: i, Property: 'Code' + i.toString(), Label: this.selection.selected[i].Code, ID: this.selection.selected[i].ID, StartDate: this.selection.selected[i].StartDate, BeginDate: this.form.value.BeginDate, EndDate: this.form.value.EndDate, Shifts: null });
    }
    const displayedColumns: any[] = this.selectedColumns.map(col => col.Property);
    this.columnsShift = displayedColumns;

    this.shiftGroupService.GetShiftGroupDistCalendar(this.selectedColumns)
      .subscribe((res: any[]) => {

        this.Colors = [];
        for (var i: number = 0; i < res.length; i++) {
          this.Colors[i] = [];
          for (var j: number = 0; j < 31; j++) {
            this.Colors[i][j] = '';
          }

        }

        // console.log(res);
        Object.keys(res).forEach(key => {

          moment.locale(sessionStorage.getItem('Lng'));
          res[key]['Tarih'] = moment(res[key]['Tarih']).format('DD.MM.y dddd');
          this.usrData[key] = res[key];
          this.Colors[key][0] = this.usrData[key].Color0;
          this.Colors[key][1] = this.usrData[key].Color1;
          this.Colors[key][2] = this.usrData[key].Color2;
          this.Colors[key][3] = this.usrData[key].Color3;
          this.Colors[key][4] = this.usrData[key].Color4;
          this.Colors[key][5] = this.usrData[key].Color5;
          this.Colors[key][6] = this.usrData[key].Color6;
          this.Colors[key][7] = this.usrData[key].Color7;
          this.Colors[key][8] = this.usrData[key].Color8;
          this.Colors[key][9] = this.usrData[key].Color9;
          this.Colors[key][10] = this.usrData[key].Color10;
          this.Colors[key][11] = this.usrData[key].Color11;
          this.Colors[key][12] = this.usrData[key].Color12;
          this.Colors[key][13] = this.usrData[key].Color13;
          this.Colors[key][14] = this.usrData[key].Color14;
          this.Colors[key][15] = this.usrData[key].Color15;
          this.Colors[key][16] = this.usrData[key].Color16;
          this.Colors[key][17] = this.usrData[key].Color17;
          this.Colors[key][18] = this.usrData[key].Color18;
          this.Colors[key][19] = this.usrData[key].Color19;
          this.Colors[key][20] = this.usrData[key].Color20;
          this.Colors[key][21] = this.usrData[key].Color21;
          this.Colors[key][22] = this.usrData[key].Color22;
          this.Colors[key][23] = this.usrData[key].Color23;
          this.Colors[key][24] = this.usrData[key].Color24;
          this.Colors[key][25] = this.usrData[key].Color25;
          this.Colors[key][26] = this.usrData[key].Color26;
          this.Colors[key][27] = this.usrData[key].Color27;
          this.Colors[key][28] = this.usrData[key].Color28;
          this.Colors[key][29] = this.usrData[key].Color29;
          this.Colors[key][30] = this.usrData[key].Color30;

        });

        this.dataSourceShift = new MatTableDataSource(res);
        this.saveEnabled = true;
        dialogRef.close();
      });

  }


  openDialog(ID) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: this.languageMap['Tarihler arası posta bilgisi tekrar hesaplanacak.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        this.create();
        //  this.deleteUser(ID);

      }
    });
  }

  saveCalendar() {


    if (this.form.invalid) {
      return;
    }

    this.openDialog(0);
    // this.create();

  }


  create() {

    if (this.form.invalid) {
      return;
    }


    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.refresh();
    this.selectedColumns.push({ Say: 0, Property: 'Tarih', Label: 'Tarih', ID: 0, StartDate: this.form.value.BeginDate, BeginDate: this.form.value.BeginDate, EndDate: this.form.value.EndDate, Shifts: null });
    let say: number = this.selection.selected.length;
    for (var i = 0; i < say; i++) {
      this.selectedColumns.push({ Say: i, Property: 'Code' + i.toString(), Label: this.selection.selected[i].Code, ID: this.selection.selected[i].ID, StartDate: this.selection.selected[i].StartDate, BeginDate: this.form.value.BeginDate, EndDate: this.form.value.EndDate, Shifts: null });
    }
    const displayedColumns: any[] = this.selectedColumns.map(col => col.Property);
    this.columnsShift = displayedColumns;

    this.shiftGroupService.CreateShiftGroupDistCalendar(this.selectedColumns)
      .subscribe((res: any[]) => {

        this.Colors = [];
        for (var i: number = 0; i < res.length; i++) {
          this.Colors[i] = [];
          for (var j: number = 0; j < 31; j++) {
            this.Colors[i][j] = '';
          }

        }

        Object.keys(res).forEach(key => {

          // moment.locale(sessionStorage.getItem('Lng'));
          // res[key]['Tarih'] = moment(res[key]['Tarih']).format('DD.MM.y dddd');
          this.usrData[key] = res[key];
          this.Colors[key][0] = this.usrData[key].Color0;
          this.Colors[key][1] = this.usrData[key].Color1;
          this.Colors[key][2] = this.usrData[key].Color2;
          this.Colors[key][3] = this.usrData[key].Color3;
          this.Colors[key][4] = this.usrData[key].Color4;
          this.Colors[key][5] = this.usrData[key].Color5;
          this.Colors[key][6] = this.usrData[key].Color6;
          this.Colors[key][7] = this.usrData[key].Color7;
          this.Colors[key][8] = this.usrData[key].Color8;
          this.Colors[key][9] = this.usrData[key].Color9;
          this.Colors[key][10] = this.usrData[key].Color10;
          this.Colors[key][11] = this.usrData[key].Color11;
          this.Colors[key][12] = this.usrData[key].Color12;
          this.Colors[key][13] = this.usrData[key].Color13;
          this.Colors[key][14] = this.usrData[key].Color14;
          this.Colors[key][15] = this.usrData[key].Color15;
          this.Colors[key][16] = this.usrData[key].Color16;
          this.Colors[key][17] = this.usrData[key].Color17;
          this.Colors[key][18] = this.usrData[key].Color18;
          this.Colors[key][19] = this.usrData[key].Color19;
          this.Colors[key][20] = this.usrData[key].Color20;
          this.Colors[key][21] = this.usrData[key].Color21;
          this.Colors[key][22] = this.usrData[key].Color22;
          this.Colors[key][23] = this.usrData[key].Color23;
          this.Colors[key][24] = this.usrData[key].Color24;
          this.Colors[key][25] = this.usrData[key].Color25;
          this.Colors[key][26] = this.usrData[key].Color26;
          this.Colors[key][27] = this.usrData[key].Color27;
          this.Colors[key][28] = this.usrData[key].Color28;
          this.Colors[key][29] = this.usrData[key].Color29;
          this.Colors[key][30] = this.usrData[key].Color30;

          // if (this.usrData[key].gun1.charAt(0) === "(") 
          // if (this.usrData[key].code0 === '18') this.Colors[key][0] = "red"; else this.Colors[key][0] = "black";
          // if (this.usrData[key].code1 === '18') this.Colors[key][1] = "red"; else this.Colors[key][1] = "black";
          // if (this.usrData[key].code2 === '18') this.Colors[key][2] = "red"; else this.Colors[key][2] = "black";
          // if (this.usrData[key].code3 === '18') this.Colors[key][3] = "red"; else this.Colors[key][3] = "black";
          // if (this.usrData[key].code4 === '18') this.Colors[key][4] = "red"; else this.Colors[key][4] = "black";
          // if (this.usrData[key].code5 === '18') this.Colors[key][5] = "red"; else this.Colors[key][5] = "black";
          // if (this.usrData[key].code6 === '18') this.Colors[key][6] = "red"; else this.Colors[key][6] = "black";
          // if (this.usrData[key].code7 === '18') this.Colors[key][7] = "red"; else this.Colors[key][7] = "black";
          // if (this.usrData[key].code8 === '18') this.Colors[key][8] = "red"; else this.Colors[key][8] = "black";
          // if (this.usrData[key].code9 === '18') this.Colors[key][9] = "red"; else this.Colors[key][9] = "black";
          // if (this.usrData[key].code10 === '18') this.Colors[key][10] = "red"; else this.Colors[key][10] = "black";

          // if (this.usrData[key].code11 === '18') this.Colors[key][11] = "red"; else this.Colors[key][11] = "black";
          // if (this.usrData[key].code12 === '18') this.Colors[key][12] = "red"; else this.Colors[key][12] = "black";
          // if (this.usrData[key].code13 === '18') this.Colors[key][13] = "red"; else this.Colors[key][13] = "black";
          // if (this.usrData[key].code14 === '18') this.Colors[key][14] = "red"; else this.Colors[key][14] = "black";
          // if (this.usrData[key].code15 === '18') this.Colors[key][15] = "red"; else this.Colors[key][15] = "black";
          // if (this.usrData[key].code16 === '18') this.Colors[key][16] = "red"; else this.Colors[key][16] = "black";
          // if (this.usrData[key].code17 === '18') this.Colors[key][17] = "red"; else this.Colors[key][17] = "black";
          // if (this.usrData[key].code18 === '18') this.Colors[key][18] = "red"; else this.Colors[key][18] = "black";
          // if (this.usrData[key].code19 === '18') this.Colors[key][19] = "red"; else this.Colors[key][19] = "black";
          // if (this.usrData[key].code20 === '18') this.Colors[key][20] = "red"; else this.Colors[key][20] = "black";

          // if (this.usrData[key].code21 === '18') this.Colors[key][21] = "red"; else this.Colors[key][21] = "black";
          // if (this.usrData[key].code22 === '18') this.Colors[key][22] = "red"; else this.Colors[key][22] = "black";
          // if (this.usrData[key].code23 === '18') this.Colors[key][23] = "red"; else this.Colors[key][23] = "black";
          // if (this.usrData[key].code24 === '18') this.Colors[key][24] = "red"; else this.Colors[key][24] = "black";
          // if (this.usrData[key].code25 === '18') this.Colors[key][25] = "red"; else this.Colors[key][25] = "black";
          // if (this.usrData[key].code26 === '18') this.Colors[key][26] = "red"; else this.Colors[key][26] = "black";
          // if (this.usrData[key].code27 === '18') this.Colors[key][27] = "red"; else this.Colors[key][27] = "black";
          // if (this.usrData[key].code28 === '18') this.Colors[key][28] = "red"; else this.Colors[key][28] = "black";
          // if (this.usrData[key].code29 === '18') this.Colors[key][29] = "red"; else this.Colors[key][29] = "black";
          // if (this.usrData[key].code30 === '18') this.Colors[key][30] = "red"; else this.Colors[key][30] = "black";


        });

        this.dataSourceShift = new MatTableDataSource(res);
        this.saveEnabled = true;
        this.shiftGroupService.SaveShiftGroupDistCalendar(this.dataSourceShift.data)
          .subscribe((res) => {

            this.getCalendar();
            dialogRef.close();
          }, err => {
            dialogRef.close();
            console.log(err);

          });


        dialogRef.close();
      });


  }

  refresh() {
    this.dataSourceShift = null;
    this.selectedColumns = [];
    this.columnsShift = [];
    this.changeDetectorRefs.detectChanges();

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

  waitProgressDismiss() {
    this.snackbar.dismiss();
  }


  detailToggle(row) {
    this.selection.toggle(row);
    this.selection.selected.sort((a, b) => (a.Code > b.Code) ? 1 : -1);
    console.log(this.selection.selected);
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    this.selection.selected.sort((a, b) => (a.Code > b.Code) ? 1 : -1);
    console.log(this.selection.selected);
  }

  getUser(userCode, route) {

    this.authorizationService.GetUser(userCode, route)
      .subscribe((res) => {
        this.pageauth.write = res[0].write;
        this.pageauth.update = res[0].update;
        this.pageauth.delete = res[0].delete;

        // console.log(this.pageauth);
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
