import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';

import { NgModule, AfterViewInit, Inject, EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
// import { Definition,DefinitionHourDetail } from '../definitions/interfaces/definition.model';
// import { DefinitionCreateUpdateComponent, } from '../definitions/definition-create-update/definition-create-update.component';
import { RoundingsDefinitionsComponent, Definition, DefinitionHourDetail } from './roundings-definitions.component';
// import { RoundingsDefinitionsModule } from './roundings-definitions.module';
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
import { endianness } from 'os';


// @NgModule({
//   declarations: [RoundingsTableComponent,DefinitionCreateUpdateComponent],
//   exports:[DefinitionCreateUpdateComponent],
//   entryComponents: [
//     DefinitionCreateUpdateComponent,
//   ]
// })


// @NgModule({
//   declarations: [RoundingsDefinitionsComponent],
//    imports: [RoundingsDefinitionsComponent],
//   entryComponents: [
//     RoundingsDefinitionsComponent,
//   ]
// })


@Component({
  selector: 'roundings-table',
  templateUrl: './roundings-table.component.html',
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




export class RoundingsTableComponent implements OnInit, OnDestroy {

  language: any = []; languageMap: LanguageMap = {};
  deftype = '';
  layoutCtrl = new FormControl('fullwidth');
  subject$: ReplaySubject<Definition[]> = new ReplaySubject<Definition[]>(1);
  subjectHour$: ReplaySubject<DefinitionHourDetail[]> = new ReplaySubject<DefinitionHourDetail[]>(1);
  data$: Observable<Definition[]> = this.subject$.asObservable();
  dataHour$: Observable<DefinitionHourDetail[]> = this.subjectHour$.asObservable();
  subFooter:boolean;
  definitions: Definition[];
  definitionHourDetail: DefinitionHourDetail[];
  @Input() selectedIndex: number;

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
  breadcrumbs: string[];
  result: string;
  href: string;
  pageauth = { write: false, delete: false, update: false };
  modul: string;
  subCode: string = '';
  subName: string = '';
  selectedRowIndex = 0;
  selectedRowIndex2 = 0;
  isMobileLayout=false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    location: Location) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedIndex) {
      this.selectedRowIndex = -1;
      this.selectedRowIndex2 = -1;
      this.subCode = '';
      this.subName = '';
      this.ngOnInit();
    }
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

  
  ngOnInit() {
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.subFooter=JSON.parse(localStorage.getItem('SubFooter'));
    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      if (this.selectedIndex === 0) this.deftype = 'RoundingHour'; else this.deftype = 'RoundingDay';

      console.log(this.deftype);
      this.modul = 'param';
      this.href = this.router.url;
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      this.breadcrumbs = [this.languageMap['Parametreler'].labelName, this.languageMap['Genel Parametreler'].labelName, this.languageMap['Yuvarlama Tanımları'].labelName];
      this.definitionGetTypes(this.deftype, null);
    });

  }

  
  definitionClick(row) {
    this.subCode = row.code;
    this.subName = row.name;
    this.definitionDetailGet(this.deftype, row.code);

  }

  
  updateDefinition(definition: Definition) {    
    definition.sub = false;
    this. selectedRowIndex = definition.id
    this.dialog.open(RoundingsDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: definition, sub: false, modul: this.modul, update: true, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
      width: '450px',
      disableClose: true
    }).afterClosed().subscribe(updatedDefinition => {
      updatedDefinition.type = this.deftype;
      if (updatedDefinition) {
        this.updateData(updatedDefinition);
      }
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
  
  deleteDefinition(definition: Definition) {
    this.selectedRowIndex=definition.id;
    this.deleteData(definition);
  }

  definitionPostTypeDetail(obj) {
    obj.code = this.subCode;
    console.log(obj);
    this.definitionsService.DefinitionPostTypeDetail(obj)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        this.definitionDetailGet(this.deftype, obj.code);
      }, err => {
        console.log(err);

      });
  }


  createDefinitionDetail() {

    let dayLastFinalValue:any;
    if (this.deftype==='RoundingDay') dayLastFinalValue='1900-01-01T00:00'; else dayLastFinalValue='0';
    if (this.dataSourceHour.data.length>0)
    dayLastFinalValue=this.dataSourceHour.data[this.dataSourceHour.data.length-1].finalValue;
    let obj={firstValue:dayLastFinalValue}

    console.log(obj);
    this.dialog.open(RoundingsDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: obj, sub: true, modul: this.modul, update: false, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
      width: '750px',
      disableClose: true,
    }).afterClosed().subscribe((definitionHourDetail: DefinitionHourDetail) => {
      definitionHourDetail.type = this.deftype;
      if (definitionHourDetail) {
        this.definitionPostTypeDetail(definitionHourDetail);
        // this.definitionPostTypes(definitionHourDetail);

      }
    });
  }

  deleteData(obj) {
    this.openDialog(obj,'Bağlantılı tüm alt kodlar silinecektir.');
  }

  openDialog(obj,message) {
    this.dialog.open(DemoDialogComponent2, {
      data: {
        temp1: this.languageMap[message].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        const data = { type: this.deftype, code: (obj.code === '' ? (obj.code2 === '' ? (obj.code3 === '' ? (obj.code4 === '' ? (obj.code5 === '' ? '' : obj.code5) : obj.code4) : obj.code3) : obj.code2) : obj.code) }
        this.definitionsService.DefinitionDeleteType(data)
          .subscribe((res) => {
            this.definitionGetTypes(this.deftype, null);
          }, err => {
            console.log(err);

          });
      }
    });
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

           console.log(this.dataSource.data);
        });

        this.searchCtrl.valueChanges.pipe(
          untilDestroyed(this)
        ).subscribe(value => this.onFilterChange(value));

        console.log(row);
        if (row !== null)
          this.dataSource.data.forEach(row1 => (row1.id === row.id ? this.selection.select(row1) : null));

        this.definitionDetailGet(this.deftype, null);

      }, err => {
        console.log(err);

      });

  }


  ngOnDestroy() {
  }

  addSubCode(definition: Definition) {
    definition.sub = true;
    this.dialog.open(RoundingsDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: definition, sub: true, modul: 'param', update: false, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
      width: '750px',
      disableClose: true

    }).afterClosed().subscribe(updatedDefinition => {
      updatedDefinition.type = 'sub' + this.deftype;
      if (definition) {
        this.definitionPostTypes(updatedDefinition);
      }
    });
  }

  createDefinition() {

    this.dialog.open(RoundingsDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: null, sub: false, modul: this.modul, update: false, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
      width: '450px',
      disableClose: true,
    }).afterClosed().subscribe((definition: Definition) => {

      
      definition.type = this.deftype;
      if (definition) {        
        this.definitionPostTypes(definition);

      }
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





  updateDefinitionDetail(definitionHourDetail: DefinitionHourDetail) {
    this.selectedRowIndex2=definitionHourDetail.id;
    definitionHourDetail.sub = true;
    this.dialog.open(RoundingsDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: definitionHourDetail, sub: true, modul: this.modul, update: true, screen: this.deftype, screenName: this.languageMap[this.deftype].labelName + ' ' + this.languageMap['Kod Tanımları'].labelName },
      width: '750px',
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


  deleteDefinitionDetail(definitionHourDetail: DefinitionHourDetail) {
    this.selectedRowIndex2=definitionHourDetail.id;    
    this.deleteDataDetail(definitionHourDetail);
  }

  deleteDataDetail(obj) {
    this.openDialogDetail(obj,'Kayıt silinecektir.');
  }


  
  openDialogDetail(obj, message) {
    this.dialog.open(DemoDialogComponent2, {
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

export class DemoDialogComponent2 {

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent2>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}
