import { LanguageMap } from './../interfaces/language.interface';
// import AppUtil from './../interfaces/util';
import { MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { NgModule, AfterViewInit, Inject, EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
// import { Definition,DefinitionHourDetail } from '../definitions/interfaces/definition.model';
// import { DefinitionCreateUpdateComponent, } from '../definitions/definition-create-update/definition-create-update.component';
import { ShiftDefinitionsComponent } from './shift-definitions.component';
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
import { ShiftService } from '../services/shift.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import { Location } from "@angular/common";
import { stagger20ms } from '../../../@vex/animations/stagger.animation';
import { scaleFadeIn400ms } from '../../../@vex/animations/scale-fade-in.animation';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { formatDate, Time } from "@angular/common";
import { DefinitionKind } from '@angular/compiler/src/constant_pool';
export const MY_FORMATS = {
  parse: {
    dateInput: "LL"
  },
  display: {
    dateInput: "LL",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};




@Component({
  selector: 'shift-table',
  templateUrl: './shift-table.component.html',
  styleUrls: ['./shift.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ],
  animations: [
    stagger20ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})




export class ShiftTableComponent implements OnInit, OnDestroy {

  // language: any = []; languageMap: LanguageMap = {};
  deftype = '';
  layoutCtrl = new FormControl('fullwidth');
  @Input() selectedIndex: number;
  @Input() languageMap: LanguageMap = {};
  @Input() pageauth = { write: false, delete: false, update: false };

  @Input() columns = ['Checkbox', 'Type', 'ID', 'Code', 'Name', 'Time', 'Start', 'Finish', 'StartEarly', 'EarlyFinish', 'LateStart', 'LateFinish', 'WeekHoliday', 'TypeOfWeekHoliday', 'Actions'];

  pageSize = 10;
  subFooter: boolean = false;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
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
  modul: string;
  subCode: string = '';
  subName: string = '';
  selectedRowIndex = 0;
  selectedRowIndex2 = 0;
  roundingHours: any = [];
  roundingDays: any = [];
  // workingTypesCode: any = [{ kodu: 1, adi: 'Serbest Vardiya' }, { kodu: 2, adi: 'Hafta İçi' }, { kodu: 3, adi: 'Cumartesi' }, { kodu: 4, adi: 'Arefe' }, { kodu: 5, adi: 'Resmi/Dini Tatil' }, { kodu: 6, adi: 'Tam Gün / Normal' }];
  
  workingTypes: any = [];
  workingTypesType: any = [];
  workingTypesStatus: any = [];
  typeOfWeekHoliday: any = [];
  selectedTypeIndex = -1;
  links = [];
  newRecordD=false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() shiftTypes: any = [];
  isMobileLayout = false;
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService,
    public shiftService: ShiftService,
    private dialog: MatDialog,
    private adapter: DateAdapter<any>,
    private snackbar: MatSnackBar,
    private router: Router,
    location: Location) {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.selectedIndex) {
  //     this.selectedRowIndex=-1;
  //     this.selectedRowIndex2=-1;  
  //     this.subCode='';
  //     this.subName='';
  //     this.ngOnInit();


  //   }
  // }

 

  openShiftType(index) {

    if (index < 0) return;
    this.selectedTypeIndex = index;
    this.getShift(this.selectedTypeIndex);
    this.newRecordD=((this.selectedTypeIndex===100)?true:false);

  }

  getShift(type) {

    this.shiftService.GetShift(type)
      .subscribe((res: any[]) => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
      });


  }

  ngOnInit() {

    this.newRecordD=true;
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;

    this.adapter.setLocale("tr");
    this.route.paramMap.subscribe(params => {

      // console.log(this.shiftTypes);
      this.modul = 'param';
      this.links.push({ index: 100, name: this.languageMap['Hepsi'].labelName });
      this.links.push({ index: 0, name: this.languageMap['Vardiya'].labelName });
      this.links.push({ index: 1, name: this.languageMap['Serbest Vardiya'].labelName });
      
      // this.getShiftById(null);
      // this.definitionGetTypes(null);
    });

  }


  definitionGetTypes(row) {
    let id = 0;
    this.definitionsService.DefinitionGetWorkingTypesById(id)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { id: res[key].ID, code: res[key].Code, name: res[key].Name };
          this.workingTypes.push(data);
        });

      }, err => {
        console.log(err);

      });

  }



  getShiftById(row) {

    let id = 0;
    if (row === null) id = 0; else if (row.ID === undefined) id = 0; else id = row.ID;
    this.shiftService.GetShiftById(id)
      .subscribe((res: any[]) => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;

      });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));

  }


  createShift() {

    let definition:any={Type:''};
    definition.Type=this.selectedTypeIndex;
    this.dialog.open(ShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '1270px',
      maxWidth: this.isMobileLayout ? '90vw' : '80vw',
      disableClose: true,
      // height:'90vh',
      data: { def: definition, sub: false, modul: this.modul, update: false, screen: this.deftype, auth: true, languageMap: this.languageMap }
    }).afterClosed().subscribe((updatedDefinition) => {
      if (updatedDefinition)
      this.getShift(this.selectedTypeIndex);  
        // this.getShiftById(null);
    });
  }


  updateShift(definition, auth) {
    this.selectedRowIndex = definition.ID;
    // definition.Type=this.selectedTypeIndex;  
    this.dialog.open(ShiftDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '1270px',
      maxWidth: this.isMobileLayout ? '90vw' : '80vw',
      // height:'90vh',
      disableClose: true,
      data: { def: definition, sub: false, modul: this.modul, update: true, screen: this.deftype, auth: auth, languageMap: this.languageMap }
    }).afterClosed().subscribe(updatedDefinition => {
      if (definition != updatedDefinition && updatedDefinition) {
        if (auth)
          this.getShift(this.selectedTypeIndex);  
          // this.getShiftById(null);
      }
    });
  }

  deleteShift(definition) {
    this.selectedRowIndex = definition.ID;
    this.deleteData(definition);
  }

  deleteData(obj) {
    this.openDialog(obj);
  }

  openDialog(obj) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: this.languageMap['Bağlantılı tüm alt kodlar silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        this.shiftService.DeleteShift(obj.ID)
          .subscribe((res) => {

            if (res[0].ReturnCode=='200')
            this.getShift(this.selectedTypeIndex);
            if (res[0].ReturnCode=='201')
            this.openSnackBar(this.languageMap[res[0].ReturnDscr].labelName,1000);

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
      this.getShiftById(row);

    } else
      this.getShiftById(null);
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
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

  // addSubCode(definition)
  // {
  //   this.dialog.open(ShiftDefinitionsComponent, {
  //     width: '1270px',
  //     height:'850px',
  //     data:{def: definition,sub:true, modul:'param', update:false, screen:this.deftype}}).afterClosed().subscribe(updatedDefinition => {
  //        updatedDefinition.type='sub'+this.deftype;
  //      if (definition) {
  //        this.definitionPostTypes(updatedDefinition);
  //      }
  //    });
  // }

  waitProgress(message, timer) {
    this.snackbar.dismiss();
    let config = new MatSnackBarConfig();
    if (timer !== undefined) {
      config.duration = timer;
    }
    config.panelClass = ['message-position'];
    this.snackbar.open(message, "", config);

  }

  waitProgressDismiss() {
    this.snackbar.dismiss();
  }

  openSnackBar(message,dur) {

    console.log(message);
    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'],
      duration: dur,
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



  // definitionPostTypes(obj)
  // { 
  //   this.definitionsService.DefinitionPostWorkingType(obj)
  //   .subscribe((res) => {
  //    const row= this.dataSource.data.filter(x => x.ID === obj.ID);     
  //    this.getShift(null);
  //   }, err => {
  //       console.log(err);

  //   });
  // }

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

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {
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