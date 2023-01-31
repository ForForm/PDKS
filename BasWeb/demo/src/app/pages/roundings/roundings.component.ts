import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { LayoutService } from './../../../@vex/services/layout.service';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Definition, DefinitionHourDetail } from './roundings-definitions.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from '../../../static-data/aio-table-data';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { debounceTime } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';
// import theme from '../../../@vex/utils/tailwindcss';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { AuthorizationService } from '../services/authorization.service';
import { DefinitionsService } from '../services/definitions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import { Location } from "@angular/common";
// import { DemoDialogComponent } from "../roundings/roundings.module/DemoDialogComponent";
// import { DefinitionCreateUpdateComponent } from '../definitions/definition-create-update/definition-create-update.component';

// @NgModule({
//   imports: [
//     DemoDialogComponent,
//   ]
// })

@Component({
  selector: 'roundings',
  templateUrl: './roundings.component.html',
  styleUrls: ['./roundings.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    // {provide: MAT_DIALOG_DATA, useValue: {}},
    //  {provide: MAT_DIALOG_DATA, useValue: {}},
    // {provide: MatDialogRef, useValue: {}},
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})



export class RoundingsComponent implements OnInit, OnDestroy {

  // searchCtrl = new FormControl();
  language: any = []; languageMap: LanguageMap = {};
  deftype = '';
  layoutCtrl = new FormControl('boxed');
  subject$: ReplaySubject<Definition[]> = new ReplaySubject<Definition[]>(1);
  subjectHour$: ReplaySubject<DefinitionHourDetail[]> = new ReplaySubject<DefinitionHourDetail[]>(1);
  data$: Observable<Definition[]> = this.subject$.asObservable();
  dataHour$: Observable<DefinitionHourDetail[]> = this.subjectHour$.asObservable();
  definitions: Definition[];
  definitionHourDetail: DefinitionHourDetail[];

  @Input()
  columns: TableColumn<Definition>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'ID', property: 'id', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Kod', property: 'code', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Adı', property: 'name', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  columnsHour: TableColumn<DefinitionHourDetail>[] = [
    { label: 'ID', property: 'id', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'İlkDeğer', property: 'firstValue', type: 'text', visible: true },
    { label: 'SonDeğer', property: 'finalValue', type: 'text', visible: true },
    { label: 'KabulDeğer', property: 'plainValue', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }

  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Definition> | null;
  dataSourceHour: MatTableDataSource<DefinitionHourDetail> | null;
  selection = new SelectionModel<Definition>(true, []);
  selectionHour = new SelectionModel<DefinitionHourDetail>(true, []);
  searchCtrl = new FormControl();
  labels = aioTableLabels;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;
  // theme = theme;
  subFooter: boolean = false;
  backgroundColor: string;
  breadcrumbs: string[];
  result: string;
  href: string;
  pageauth = { write: false, delete: false, update: false };
  modul: string;
  subCode: string = '';
  subName: string = '';
  selectedRowIndex = 0;
  selectedRowIndex2 = 0;
  selectedIndex = 0;
  isMobileLayout = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    private layoutService: LayoutService,
    public definitionsService: DefinitionsService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    location: Location) {


  }


  onTabChanged($event) {
    this.selectedIndex = $event.index;
  }



  resize(type) {
    if (type == 'fullwidth')
      this.layoutService.collapseSidenav();
    else
      this.layoutService.expandSidenav();

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



  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }


  get visibleColumnsHour() {
    return this.columnsHour.filter(column => column.visible).map(column => column.property);
  }

  definitionDetailClick(row) {
    this.selectedRowIndex = row.id;
    this.subCode = row.code;
    this.subName = row.name;
    this.definitionDetailGet(this.deftype, row.code);

  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  detailToggle(row) {
    this.selection.toggle(row);
    if (this.selection.isSelected(row)) {
      this.definitionGetTypes(this.deftype, row);

    } else
      this.definitionGetTypes(this.deftype, null);
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }


  definitionDetailGet(type, code) {

    this.definitionsService.DefinitionGetTypeDetail(type, code)
      .subscribe((res) => {
        this.subjectHour$.next(<DefinitionHourDetail[]>res);
        this.dataSourceHour = new MatTableDataSource();


        this.dataHour$.pipe(
          filter<DefinitionHourDetail[]>(Boolean)
        ).subscribe(definitionHourDetail => {
          this.definitionHourDetail = definitionHourDetail;
          this.dataSourceHour.data = definitionHourDetail;

        });

        // this.searchCtrl.valueChanges.pipe(
        //   untilDestroyed(this)
        // ).subscribe(value => this.onFilterChange(value));
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

  definitionGetTypes(type, row) {

    let id = 0;
    if (row === null) id = 0; else id = row.id;
    this.definitionsService.DefinitionGetType(type, id)
      .subscribe((res) => {
        this.subject$.next(<Definition[]>res);
        this.dataSource = new MatTableDataSource();

        this.data$.pipe(
          filter<Definition[]>(Boolean)
        ).subscribe(definitions => {
          this.definitions = definitions;
          this.dataSource.data = definitions;

        });

        this.searchCtrl.valueChanges.pipe(
          untilDestroyed(this)
        ).subscribe(value => this.onFilterChange(value));

        if (row !== null)
          this.dataSource.data.forEach(row1 => (row1.id === row.id ? this.selection.select(row1) : null));

        this.definitionDetailGet(this.deftype, null);

      }, err => {
        console.log(err);

      });

  }




  ngOnInit() {

    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    // this.backgroundColor = JSON.parse(sessionStorage.getItem('Color'));
    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.subCode = '';
      this.subName = '';
      this.deftype = "RoundingHour";
      this.modul = 'param';
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      // this.breadcrumbs=['PARAMETRELER','Genel Parametreler','Yuvarlama Tanımları'];
      this.breadcrumbs = [this.languageMap['Parametreler'].labelName, this.languageMap['Genel Parametreler'].labelName, this.languageMap['Yuvarlama Tanımları'].labelName];
      console.log(this.deftype);
      this.definitionGetTypes(this.deftype, null);
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
