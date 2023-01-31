import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';

import { Inject, Component,  OnDestroy, OnInit,Input, ViewChild, Optional } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Definition } from './shift-definitions.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from  '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog} from '@angular/material/dialog';
import {  aioTableLabels } from '../../../static-data/aio-table-data';
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
// import theme from '../../../@vex/utils/tailwindcss';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { AuthorizationService } from '../services/authorization.service';
import { DefinitionsService } from '../services/definitions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute,Router } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import { Location } from "@angular/common";

@Component({
  selector: 'shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
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



export class ShiftComponent implements OnInit, OnDestroy {

  language: any = []; languageMap: LanguageMap = {};  
  layoutCtrl = new FormControl('fullwidth');
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Definition> | null;
  selection = new SelectionModel<Definition>(true, []);
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
  breadcrumbs:string[];
  result: string;
  href: string;
  pageauth= {write:false, delete:false,update:false};
  modul:string;
  subCode:string='';
  subName:string='';
  selectedRowIndex=0;
  selectedRowIndex2=0;
  selectedIndex=0;
  isMobileLayout=false;
  subFooter: boolean = false;
  shiftTypes: any = [];

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
 
   


  GetEnums(type) {
  
    this.definitionsService.GetEnums(type,null)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { id: res[key].ID.toString(), code: res[key].Code.toString(), name: res[key].Name };
          this.shiftTypes.push(data);
        });

        // console.log(this.shiftTypes);
      }, err => {
        console.log(err);

      });

  }


  
  getUser(userCode,route) {

    this.authorizationService.GetUser(userCode,route)
    .subscribe((res) => {
      this.pageauth.write=res[0].write;
      this.pageauth.update=res[0].update;
      this.pageauth.delete=res[0].delete;
    }, err => {
        console.log(err);

    });

  }

  ngOnInit() {

    this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.route.paramMap.subscribe(params => {      
    this.languageMap=AppUtil.getLabels();       
    this.subCode='';
    this.subName='';
     this.modul='param';
    this.href=this.router.url;
    this.GetEnums('ShiftTypes');
    this.getUser(JSON.parse(sessionStorage.getItem('Username')) ,this.href.replace(/\//g,'@'))
    this.breadcrumbs=[this.languageMap['Parametreler'].labelName,this.languageMap['Genel Parametreler'].labelName,this.languageMap['Vardiya Parametreleri'].labelName];
    });

  }
 
   
  ngOnDestroy() {
  }
}



// @Component({
//   selector: 'roundings',
//   template: `
//   <div mat-dialog fxLayout="row" fxLayoutAlign="space-between center"  >
//   <div><h3>{{data.temp1}}</h3></div>

// </div>

// <mat-dialog-content>
//   <p>{{data.temp2}}  </p>
//   <br/>
// </mat-dialog-content>


// <mat-dialog-actions align="end">
// <button mat-button color="primary" (click)="close('Yes')">{{data.Evet}}</button>
// <button mat-button (click)="close('No')">{{data.Hayir}}</button>
// </mat-dialog-actions>
//   `
// })

// export class DemoDialogComponent {

//   icClose = icClose;

//   constructor(private dialogRef: MatDialogRef<DemoDialogComponent>) {
//   }

//   close(answer: string) {
//     this.dialogRef.close(answer);
//   }
// }
