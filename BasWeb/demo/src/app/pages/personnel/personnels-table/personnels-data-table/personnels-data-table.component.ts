import { LanguageMap } from './../../../interfaces/language.interface';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { debounceTime } from 'rxjs/operators';
import AppUtil from './../../../interfaces/util';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icColumns from '@iconify/icons-fa-solid/columns';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger20ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from '../../../services/authorization.service';
import { PersonnelService } from '../../../services/personnel.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { LayoutService } from './../../../../../@vex/services/layout.service';
import { configs } from './../../../../../@vex/services/configs';
import { Config } from './../../../../../@vex/services/../interfaces/config.model';
import { StyleService } from './../../../../../@vex/services/style.service';
@Component({
  selector: 'vex-personnels-data-table',
  templateUrl: './personnels-data-table.component.html',
  styleUrls: ['./personnels-data-table.component.scss'],
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
export class PersonnelsDataTableComponent<T> implements OnInit, OnChanges, AfterViewInit {
  searchCtrl = new FormControl();
  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );
  layoutCtrl = new FormControl('boxed');
  language: any = []; languageMap: LanguageMap = {};
  selectedIndex = new FormControl(0);
  @Input() data: T[];
  @Input() columns: any[];
  @Input() subFooter: boolean;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [10, 20, 50];
  @Input() searchStr: string;
  @Input() tabAuth: any;



  @Output() toggleStar = new EventEmitter<{ contactId, auth: true }>();
  @Output() editContact = new EventEmitter<{ contactId, chief, auth: true }>();
  @Output() deleteContact = new EventEmitter<{ contactId, auth: true }>();
  @Output() openContact = new EventEmitter<{ contactId, chief, auth: false }>();
  @Output() createPersonnel = new EventEmitter<any>();
  @Output() getPersonnel = new EventEmitter<any>();
  @Output() createColumns = new EventEmitter<any>();

  visibleColumns: Array<keyof T | string>;
  dataSource = new MatTableDataSource<T>();

  configs: Config[] = configs;
  tableData: any;
  @ViewChild("usrPaginator", { static: false }) usrPaginator: MatPaginator;
  // @ViewChild("userSort", { static: false }) userSort: MatSort;
  @ViewChild(MatSort) sort: MatSort;
  breadcrumbs: string[];
  icMoreVert = icMoreVert;
  icPersonAdd = icPersonAdd;
  icColumns = icColumns;
  icStar = icStar;

  icSearch = icSearch;
  icStarBorder = icStarBorder;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  href: string;
  total: number;
  workTotal: number;
  firedTotal: number;
  pageauth = { write: false, delete: false, update: false }
  workFilters = [];
  selectedWorkFilter = 0;
  isMobileLayout = false;
  selectedRowIndex = 0;
  constructor(private dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    public authorizationService: AuthorizationService,
    private snackbar: MatSnackBar,
    private layoutService: LayoutService,
    private styleService: StyleService,
    public personnelService: PersonnelService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  // @ViewChild(MatSort, { static: true }) sort: MatSort;
 

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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }



  getUserTabs(tabs) {
    this.authorizationService.GetUserTabs(tabs)
      .subscribe((res) => {
        console.log(res);

        // this.pageauth.write=res[0].write;
        // this.pageauth.update=res[0].update;
        // this.pageauth.delete=res[0].delete;   
        // console.log(this.pageauth);     
      }, err => {
        console.log(err);

      });
  }



  resize(type) {
    if (type == 'fullwidth')
      this.layoutService.collapseSidenav();
    else
      this.layoutService.expandSidenav();

  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
      this.isMobileLayout = window.innerWidth <= 991;
      this.languageMap = AppUtil.getLabels();
      this.breadcrumbs = [this.languageMap['Personel'].labelName, this.languageMap['Personel Bilgileri'].labelName];
      const arr: any[] = this.data;


      this.getPersonnelStatus();

    })
  }


  getPersonnelStatus() {


    // var obj={FilterType:obj.Type, FilterCode:obj.Code}
    this.personnelService.GetPersonnelStatus()
      .subscribe((res: any[]) => {

        this.total=res[0].Total;
        this.workTotal=res[1].Total;
        this.firedTotal=res[2].Total;

        this.workFilters = [
          { code: 0, name: this.languageMap['Tümü'].labelName, total: this.total },
          { code: 1, name: this.languageMap['Çalışanlar'].labelName, workTotal: this.workTotal},
          { code: 2, name: this.languageMap['Çıkanlar'].labelName, firedTotal: this.firedTotal }
        ];


      }, err => {
        console.log(err);

      });
  }

  getPersonnelQuery(obj) {


    // var obj={FilterType:obj.Type, FilterCode:obj.Code}
    this.personnelService.GetPersonnel(obj)
      .subscribe((res: any[]) => {

        this.dataSource.data = res;
        this.dataSource.paginator = this.usrPaginator;
        this.dataSource.sort = this.sort;

      }, err => {
        console.log(err);

      });
  }

  ngOnChanges(changes: SimpleChanges): void {

    // try {


    if (changes.columns) {
      this.visibleColumns = this.columns.map(column => column.property);
    }

    if (changes.data) {

      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.data;
      this.dataSource.paginator = this.usrPaginator;
      this.dataSource.sort=this.sort;

      if (this.selectedWorkFilter == 0) this.total = this.data == undefined ? 0 : this.data.length;
      if (this.selectedWorkFilter == 1) this.workTotal = this.data == undefined ? 0 : this.data.length;
      if (this.selectedWorkFilter == 2) this.firedTotal = this.data == undefined ? 0 : this.data.length;
    }

    if (changes.searchStr) {
      this.dataSource.filter = (this.searchStr || '').trim().toLowerCase();
    }
    // }
    // catch (error) { }

  }

  emitToggleStar(event: Event, id) {
    event.stopPropagation();
    this.toggleStar.emit({ contactId: id, auth: true });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.usrPaginator;
    this.dataSource.sort = this.sort  ;
  }

  

}

