import { LanguageMap } from './../interfaces/language.interface';
// import AppUtil from './../interfaces/util';

import { NgModule,AfterViewInit,Inject,EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional,Output,SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
// import { Definition,DefinitionHourDetail } from '../definitions/interfaces/definition.model';
// import { DefinitionCreateUpdateComponent, } from '../definitions/definition-create-update/definition-create-update.component';
import { WorkingtypesDefinitionsComponent } from './workingtypes-definitions.component';
// import { RoundingsDefinitionsModule } from './roundings-definitions.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from  '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
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
import { ActivatedRoute,Router } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import { Location } from "@angular/common";
import { formatDate, Time } from "@angular/common";
 
 

@Component({
  selector: 'workingtypes-table',
  templateUrl: './workingtypes-table.component.html',
  styleUrls: ['./workingtypes.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})



export class WorkingtypesTableComponent implements OnInit,OnDestroy {

  // language: any = []; languageMap: LanguageMap = {};
  deftype='';
  layoutCtrl = new FormControl('fullwidth');
  @Input() selectedIndex: number;
  @Input() columns = ['Checkbox','ID','Code','Name','Type','RoundingHourID','RoundingDayID','Multiplier','LowerLimit','UpperLimit','Compulsory','Confirmation','Saturday','Weekend',
  'GeneralHoliday','ReportCode','IntegrationCode','Actions'];
  @Input() languageMap: LanguageMap = {};
  @Input() pageauth= {write:false, delete:false,update:false};
 

  @Output() openContact = new EventEmitter<{auth:false}>();
  pageSize = 10;
  subFooter: boolean = false;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  searchStr = this.searchCtrl.valueChanges;

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
  result: string;
  href: string;
  subCode:string='';
  subName:string='';
  selectedRowIndex=0;
  selectedRowIndex2=0;
  selectedTypeIndex=-1;
  roundingHours: any = [];
  roundingDays: any = [];
  workingTypesCode: any = [];
  workingTypesType: any = [];
  workingDistTypes: any = [];
  isMobileLayout=false;
  backgroundColor:string;
  links = [];
  newRecordD=false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService,
    public definitionsService: DefinitionsService ,   
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    location: Location) { 
  }
 
  ngOnDestroy() {
  }

  
  openWorkingType(index)
  {    
    if (index<0) return;    
    this.selectedTypeIndex=index;
    this.definitionGetTypes(this.selectedTypeIndex);
    this.newRecordD=((this.selectedTypeIndex===100)?true:false);
  }


  ngOnInit() {

    this.newRecordD=true;
    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    // this.backgroundColor=JSON.parse(sessionStorage.getItem('Color'));
    this.route.paramMap.subscribe(params => {             
    // this.definitionGetTypesById(null);
    this.definitionGetRoundingTypes('roundingHour',null);
    this.definitionGetRoundingTypes('roundingDay',null);
    this.definitionGetWorkingTypeEnums('WorkingTypes',null);
    this.definitionGetWorkingTypeEnums('WorkingDistTypes',null);
    this.links.push({ index: 100, name: this.languageMap['Hepsi'].labelName });
    this.links.push({ index: 0, name: this.languageMap['Normal'].labelName });
    this.links.push({ index: 1, name: this.languageMap['Devamsız'].labelName });
    this.links.push({ index: 2, name: this.languageMap['İzin'].labelName });
    this.links.push({ index: 3, name: this.languageMap['Mesai'].labelName });
    this.links.push({ index: 4, name: this.languageMap['Hakediş'].labelName });
    this.links.push({ index: 5, name: this.languageMap['Çalışma'].labelName });
    this.links.push({ index: 6, name: this.languageMap['Zamlı'].labelName });
    this.links.push({ index: 7, name: this.languageMap['Diğer'].labelName });
    // this.definitionGetTypes(0);
    });

  }


  
  definitionGetTypes(type) {

    this.definitionsService.DefinitionGetWorkingTypes(type)
    .subscribe((res:any[]) => {

      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res;

    });

 
  }


  definitionGetTypesById(row) {

    let id=0;
    if (row===null) id=0; else if (row.ID===undefined) id=0; else id=row.ID;
    this.definitionsService.DefinitionGetWorkingTypesById(id)
    .subscribe((res:any[]) => {
      Object.keys(res).forEach((key) => {
        let data = {kodu:res[key].Code, adi:res[key].Name};
        this.workingTypesCode.push(data);
      });

      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res;

    });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value)); 
 
  }
  
  

  
  definitionGetRoundingTypes(type,row) {
    let data;
    let id=0;
    if (row===null) id=0; else id=row.ID;
    this.definitionsService.DefinitionGetType(type,id)
    .subscribe((res) => {
      Object.keys(res).forEach((key) => {
        let data = {kodu:res[key].id, adi:res[key].name};
        if (type==='roundingHour')
        this.roundingHours.push(data);
        if (type==='roundingDay')
        this.roundingDays.push(data);;
      });
      
    }, err => {
        console.log(err);

    });

  }

  
  definitionGetWorkingTypeEnums(type,code) {
    let data;    
    this.definitionsService.DefinitionGetWorkingTypeEnums(type,code)
    .subscribe((res) => {
      Object.keys(res).forEach((key) => {
        let data = {kodu:res[key].Code, adi:res[key].Name};
        if (type==='WorkingTypes')
        this.workingTypesType.push(data);
        if (type==='WorkingDistTypes')
        this.workingDistTypes.push(data);;
      });
      
      // console.log(this.workingTypesType);
      // console.log(this.workingDistTypes);
      

    }, err => {
        console.log(err);

    });

  }
  

  updateDefinition(definition,auth) {
    this.selectedRowIndex=definition.ID;
    definition.Type=(definition.Type==='99'?'7':definition.Type);

    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    this.dialog.open(WorkingtypesDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '1290px',
      maxWidth: this.isMobileLayout?'90vw':'80vw',
      // height:'95vh',
      // panelClass: 'padding:0px',
      disableClose: true,
      data:{def: definition,sub:false,update:true,screen:this.deftype,auth:auth,languageMap:this.languageMap,roundingHours:this.roundingHours,roundingDays:this.roundingDays,workingTypesType:this.workingTypesType,workingDistTypes:this.workingDistTypes } }).afterClosed().subscribe(updatedDefinition => {
        // updatedDefinition.type=this.deftype;        
      if (definition!=updatedDefinition && updatedDefinition!=false) {
         if (auth)
          this.definitionGetTypes(this.selectedTypeIndex);
        // this.definitionGetTypesById(null);

      }
    });
  }


  createDefinition() {

    let definition:any={Type:''};
    definition.Type=this.selectedTypeIndex;
    this.dialog.open(WorkingtypesDefinitionsComponent,{
    panelClass: 'myapp-no-padding-dialog',
     width: '1290px',
     maxWidth: this.isMobileLayout?'90vw':'80vw',
     disableClose: true,
    //  height:'95vh',s
     data:{ def:definition, sub:false,  update:false, screen:this.deftype, auth:true,languageMap:this.languageMap,roundingHours:this.roundingHours,roundingDays:this.roundingDays,workingTypesType:this.workingTypesType,workingDistTypes:this.workingDistTypes}}).afterClosed().subscribe((definition ) => {
       // if (definition) {
       // this.updateData(definition);       
      //  this.definitionGetTypesById(null);

      this.definitionGetTypes(this.selectedTypeIndex);
     // }
   });}
  
  deleteDefinition(definition) {
    this.selectedRowIndex=definition.ID;
    this.deleteData(definition);
  }

  deleteData(obj)
  {
    this.openDialog(obj);
  }

  openDialog(obj) {
    this.dialog.open(DemoDialogComponent, {
      data: { temp1:this.languageMap['Bağlantılı tüm alt kodlar silinecektir.'].labelName, temp2:this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName,Evet:this.languageMap['Evet'].labelName,
      Hayir:this.languageMap['Hayır'].labelName  }, 
      disableClose: false,
      width: '400px'

    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result==="Yes")
      {
        const data={code:obj.ID}
          this.definitionsService.DefinitionDeleteWorkingType(data)
          .subscribe((res) => {
            this.definitionGetTypes(this.selectedTypeIndex);
          }, err => {
              console.log(err);

          });
      }
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
