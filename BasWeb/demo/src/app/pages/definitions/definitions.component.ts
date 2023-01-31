import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';

import { AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Definition, DefinitionHourDetail } from '../definitions/interfaces/definition.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from '../../../static-data/aio-table-data';
// import { CustomerCreateUpdateComponent } from '../apps/aio-table/customer-create-update/customer-create-update.component';
import { DefinitionCreateUpdateComponent } from './definition-create-update/definition-create-update.component';
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
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
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
import { WaitComponent } from '../wait/wait.component';
import { LayoutService } from './../../../@vex/services/layout.service';


@Component({
  selector: 'definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.scss'],
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
export class DefinitionsComponent implements OnInit, AfterViewInit, OnDestroy {

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
    { label: 'Kod2', property: 'code2', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Adı2', property: 'name2', type: 'text', visible: true },
    { label: 'Kod3', property: 'code3', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Adı3', property: 'name3', type: 'text', visible: true },
    { label: 'Kod4', property: 'code4', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Adı4', property: 'name4', type: 'text', visible: true },
    { label: 'Kod5', property: 'code5', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Adı5', property: 'name5', type: 'text', visible: true },
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
  breadcrumbs: string[];
  result: string;
  href: string;
  pageauth = { write: false, delete: false, update: false };
  modul: string;
  subCode: string = '';
  subName: string = '';
  selectedRowIndex = 0;
  selectedRowIndex2 = 0;
  isMobileLayout = false;
  subFooter: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data,
    @Optional() private dialogRef: MatDialogRef<DefinitionsComponent>,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    location: Location) {


  }


  resize(type) {
    if (type == 'fullwidth')
      this.layoutService.collapseSidenav();
    else
      this.layoutService.expandSidenav();

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

  openDialog(obj, message) {
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
        const data = { id: obj.id , type: this.deftype, code: (obj.code === '' ? (obj.code2 === '' ? (obj.code3 === '' ? (obj.code4 === '' ? (obj.code5 === '' ? '' : obj.code5) : obj.code4) : obj.code3) : obj.code2) : obj.code) }
        this.definitionsService.DefinitionDeleteType(data)
          .subscribe((res) => {
            this.definitionGetTypes(this.deftype, null);
          }, err => {
            console.log(err);

          });
      }
    });
  }

  openDialogDetail(obj, message) {
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

   
        const data = { type: this.deftype, id: obj.id }
        this.definitionsService.DefinitionDeleteTypeDetail(data)
          .subscribe((res) => {
            this.definitionDetailGet(this.deftype, this.subCode);
          }, err => {
            console.log(err);

          });
      }
    });
  }


  //   getUrl() : Observable<any> {
  //     let response = this.route.url; return response;
  // }

  ngOnInit() {

    // console.log(this.data);
    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    this.route.paramMap.subscribe(params => {
      this.modul = 'code';
      if (this.data !== null) {
        this.deftype = this.data.type;
        // this.href = "@apps@definitions@" + this.deftype;
        // this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'));
        this.pageauth.write = false;
        // this.layoutCtrl='fullwidth';
        this.layoutCtrl = new FormControl('fullwidth');

      }
      else {
        this.subCode = '';
        this.subName = '';
        this.deftype = params.get("type");
        this.href = this.router.url;
        this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))

      }



      this.languageMap = AppUtil.getLabels();
      this.breadcrumbs = [this.languageMap['Tanımlamalar'].labelName, this.languageMap['Genel Tanımlamalar'].labelName, (this.deftype === 'RoundingHour' ? this.languageMap['Yuvarlama Saat'].labelName : (this.deftype === 'RoundingDay' ? this.languageMap['Yuvarlama Gün'].labelName : this.languageMap[this.deftype].labelName)) + ' ' + this.languageMap['Kod Tanımları'].labelName];

      this.definitionGetTypes(this.deftype, null);

    })
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

        this.searchCtrl.valueChanges.pipe(
          untilDestroyed(this)
        ).subscribe(value => this.onFilterChange(value));
      }, err => {
        console.log(err);
      });
  }



  definitionDetailClick(row) {
    this.selectedRowIndex = row.id;
    this.subCode = row.code;
    this.subName = row.name;
    // this. definitionDetailGet(this.deftype,row.code);
    // console.log(this.data);
    if (this.data != null)
      if (this.data.type != null) {
        this.data.id = row.id;
        this.data.code = row.code === '' ? (row.code2 === '' ? (row.code3 === '' ? (row.code4 === '' ? (row.code5) : row.code4) : row.code3) : row.code2) : row.code;
        this.data.name = row.name === '' ? (row.name2 === '' ? (row.name3 === '' ? (row.name4 === '' ? (row.name5) : row.name4) : row.name3) : row.name2) : row.name;
        this.data.codePath = row.codePath;
        this.dialogRef.close(this.data);
      }
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

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }


  get visibleColumnsHour() {
    return this.columnsHour.filter(column => column.visible).map(column => column.property);
  }

  definitionGetTypes(type, row) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

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

        dialogRef.close();

      }, err => {
        dialogRef.close();
        console.log(err);

      });

  }




  definitionPostTypes(obj) {
    this.definitionsService.DefinitionPostType(obj)
      .subscribe((res) => {
        const row = this.dataSource.data.filter(x => x.id === obj.id);
        this.definitionGetTypes(this.deftype, null);
      }, err => {
        console.log(err);

      });
  }


  updateData(obj) {
    this.definitionsService.DefinitionPostType(obj)
      .subscribe((res) => {
        const row = this.dataSource.data.filter(x => x.id === obj.id);
        this.definitionGetTypes(this.deftype, row[0]);
      }, err => {
        console.log(err);

      });
  }

  deleteData(obj) {
    this.openDialog(obj, 'Bağlantılı tüm alt kodlar silinecektir.');
  }


  deleteDataDetail(obj) {
    this.openDialogDetail(obj, 'Kayıt silinecektir.');
  }


  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  createDefinition() {


    this.dialog.open(DefinitionCreateUpdateComponent,

      {
        panelClass: 'myapp-no-padding-dialog',
        data: { def: null, sub: false, modul: this.modul, update: false, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
        width: '550px',
        disableClose: true
      }).afterClosed().subscribe((definition: Definition) => {

        definition.type = this.deftype;
        if (definition) {
          this.definitionPostTypes(definition);

        }
      });
  }

  definitionPostTypeDetail(obj) {
    obj.code = this.subCode;
    this.definitionsService.DefinitionPostTypeDetail(obj)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        this.definitionDetailGet(this.deftype, obj.code);
      }, err => {
        console.log(err);

      });
  }

  createDefinitionDetail() {

    this.dialog.open(DefinitionCreateUpdateComponent, {
      panelClass: 'myapp-no-padding-dialog', data: { def: null, sub: true, modul: this.modul, update: false, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
      width: '550px',
      disableClose: true
    }).afterClosed().subscribe((definitionHourDetail: DefinitionHourDetail) => {
      definitionHourDetail.type = this.deftype;
      if (definitionHourDetail) {
        this.definitionPostTypeDetail(definitionHourDetail);
        // this.definitionPostTypes(definitionHourDetail);

      }
    });
  }

  updateDefinition(definition: Definition) {

    this.selectedRowIndex = definition.id;
    definition.sub = false;
    this.dialog.open(DefinitionCreateUpdateComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: definition, sub: false, modul: this.modul, update: true, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
      width: '550px',
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {
        updatedDefinition.type = this.deftype;
        this.updateData(updatedDefinition);
      }
    });
  }


  updateDefinitionDetail(definitionHourDetail: DefinitionHourDetail) {
    this.selectedRowIndex2 = definitionHourDetail.id
    definitionHourDetail.sub = true;
    this.dialog.open(DefinitionCreateUpdateComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: definitionHourDetail, sub: true, modul: this.modul, update: true, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
      width: '550px',
      disableClose: true
    }).afterClosed().subscribe((definitionHourDetail: DefinitionHourDetail) => {
      definitionHourDetail.type = this.deftype;
      if (definitionHourDetail) {
        console.log(definitionHourDetail);
        // this.modalDetailGet(this.deftype,this.subCode);
        this.definitionPostTypeDetail(definitionHourDetail);
      }
    });

  }



  deleteDefinition(definition: Definition) {

    
    this.selectedRowIndex = definition.id;
    this.deleteData(definition);
  }

  deleteDefinitionDetail(definitionHourDetail: DefinitionHourDetail) {

    
    
    this.selectedRowIndex2 = definitionHourDetail.id;
    this.deleteDataDetail(definitionHourDetail);
  }



  addSubCode(definition: Definition) {

    this.selectedRowIndex = definition.id;
    definition.sub = true;
    this.dialog.open(DefinitionCreateUpdateComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: definition, sub: true, modul: 'code', update: false, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
      width: '550px',
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {
      if (updatedDefinition) {
        updatedDefinition.type = 'sub' + this.deftype;
        this.definitionPostTypes(updatedDefinition);
      }
    });
  }


  deleteDefinitions(definitions: Definition[]) {
    definitions.forEach(c => this.deleteDefinition(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
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

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Definition) {
    const index = this.definitions.findIndex(c => c === row);
    // this.personnels[index].labels = change.value;
    this.subject$.next(this.definitions);
  }

  ngOnDestroy() {
  }
}



@Component({
  selector: 'definitions',
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
