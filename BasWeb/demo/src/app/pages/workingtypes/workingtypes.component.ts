import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { Inject, Component,  OnDestroy, OnInit, ViewChild, Optional } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
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
  selector: 'workingtypes',
  templateUrl: './workingtypes.component.html',
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



export class WorkingtypesComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  layoutCtrl = new FormControl('fullwidth');
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
 
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
  subFooter: boolean = false;

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
    this.route.paramMap.subscribe(params => {         
      this.languageMap=AppUtil.getLabels();       
    this.subCode='';
    this.subName='';
    this.href=this.router.url;
    this.getUser(JSON.parse(sessionStorage.getItem('Username')) ,this.href.replace(/\//g,'@'))
    this.breadcrumbs=[this.languageMap['Parametreler'].labelName,this.languageMap['Genel Parametreler'].labelName,this.languageMap['Çalışma Türü Tanımları'].labelName];    
    });

  }
 
   
}
 
