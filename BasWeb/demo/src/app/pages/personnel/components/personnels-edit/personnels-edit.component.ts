import { LanguageMap } from './../../../interfaces/language.interface';
import AppUtil from './../../../interfaces/util';
import { Component, Inject, ViewChild, ElementRef, OnInit, Optional, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Personnel } from '../../interfaces/personnel.interface';
import { AuthorizationService } from '../../../services/authorization.service';
import { DefinitionsService } from '../../../services/definitions.service';
import { PersonnelService } from '../../../services/personnel.service';
import { DefinitionsComponent } from '../../../definitions/definitions.component';
import { filter } from 'rxjs/operators';
import { ShiftGroupComponent } from '../../../shiftgroup/shiftgroup.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icInfo from '@iconify/icons-ic/info';
import { ActivatedRoute, Router } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import icWork from '@iconify/icons-ic/twotone-work';
import { friendSuggestions } from '../../../../../static-data/friend-suggestions';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icCheck from '@iconify/icons-ic/twotone-check';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import icMail from '@iconify/icons-ic/twotone-mail';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icAddress from '@iconify/icons-emojione/house';
import icImage from '@iconify/icons-fa-solid/file-image';
import icId from '@iconify/icons-fa-solid/address-card';
import icMobile from '@iconify/icons-fa-solid/mobile';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFlag from '@iconify/icons-fa-solid/flag';
import icHand from '@iconify/icons-fa-solid/hand-peace';
import icWc from '@iconify/icons-ic/wc';
import icClose1 from '@iconify/icons-ic/close';

import icGenderless from '@iconify/icons-fa-solid/genderless';
import icBirthday from '@iconify/icons-emojione/birthday-cake';
import icStar from '@iconify/icons-ic/twotone-star';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icPerson from '@iconify/icons-ic/twotone-person';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { formatDate, Time } from "@angular/common";
import icWhatshot from '@iconify/icons-ic/twotone-whatshot';
import { WaitComponent } from '../../../wait/wait.component';
import { Observable, pipe } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { ReactiveFormsModule, FormControlDirective, FormControlName } from '@angular/forms';

export let contactIdCounter = 50;


import * as _moment from "moment";
import { Console } from 'console';

const moment = _moment;

// const originFormControlNgOnChanges = FormControlDirective.prototype.ngOnChanges;
// FormControlDirective.prototype.ngOnChanges = function () {
//   try {
//     this.form.nativeElement = this.valueAccessor._elementRef.nativeElement;
//     return originFormControlNgOnChanges.apply(this, arguments);

//   } catch (error) { }

// };

const originFormControlNameNgOnChanges = FormControlName.prototype.ngOnChanges;
FormControlName.prototype.ngOnChanges = function () {
  try {
    const result = originFormControlNameNgOnChanges.apply(this, arguments);
    this.control.nativeElement = this.valueAccessor._elementRef.nativeElement;
    return result;
  }
  catch (error) { }

};


class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}

export class Group {
  level = 0;
  parent: Group;
  expanded = true;
  totalCounts = 0;
  get visible(): boolean {
    return !this.parent || (this.parent.visible && this.parent.expanded);
  }
}

@Component({
  selector: 'vex-personnels-edit',
  templateUrl: './personnels-edit.component.html',
  styleUrls: ['./personnels-edit.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
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



export class PersonnelsEditComponent implements OnInit {


  userGroupSelection;
  perGroupSelection;
  arvGroupSelection;
  language: any = []; languageMap: LanguageMap = {};
  // dataSource: MatTableDataSource<Definition> | null;
  public dataSource = new MatTableDataSource<any | Group>([]);
  public dataSourcePer = new MatTableDataSource<any | Group>([]);
  public dataSourceArv = new MatTableDataSource<any | Group>([]);
  links = [];
  activeLinkIndex = 0;
  @Input() label: string;
  // activeLink = this.links[0];
  lblTemelBilgiler: string;
  suggestions = friendSuggestions;
  icWork = icWork;
  icPersonAdd = icPersonAdd;
  icCheck = icCheck;
  icMail = icMail;
  icAccessTime = icAccessTime;
  icAddress = icAddress;
  icImage = icImage;
  icId = icId;
  icMobile = icMobile;
  icAdd = icAdd;
  icFlag = icFlag;
  icHand = icHand;
  icWc = icWc;
  icGenderless = icGenderless;
  icBirthday = icBirthday;
  result: string;
  searchCtrl = new FormControl();
  searchStr = this.searchCtrl.valueChanges;
  icWhatshot = icWhatshot;
  // columns = ['ChiefEmployeeID','EmployeeID','Code','Name','Degree'];
  _alldata: any[];
  _alldataPer: any[];
  _alldataArv: any[];
  isEdited = false;

  columns: any[];
  displayedColumns: string[];
  groupByColumns: string[] = [];

  columnsPer: any[];
  displayedColumnsPer: string[];
  groupByColumnsPer: string[] = [];

  columnsArv: any[];
  displayedColumnsArv: string[];
  groupByColumnsArv: string[] = [];

  startDate = moment(new Date());

  workingTypesCountry: any = [];
  Chiefs: any = [];
  Degrees: any = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  // , [this.checkEmployeeTypeDate]
  form = this.fb.group({
    ID: null,
    Code: [{ value: null, disabled: !this.data.auth }, Validators.required],
    Name: [{ value: null, disabled: !this.data.auth }, Validators.required],
    Surname: [{ value: null, disabled: !this.data.auth }, Validators.required],
    Chief: { value: null, disabled: !this.data.auth },
    PassID: [{ value: null, disabled: !this.data.auth }, [Validators.required, Validators.pattern("^[0-9]*$")]],
    PassDate: [{ value: this.startDate, disabled: !this.data.auth }, Validators.required],
    StartingDate: [{ value: this.startDate, disabled: !this.data.auth }, Validators.required],
    SeniorityDate: { value: null, disabled: !this.data.auth },
    LeavingDate: { value: null, disabled: !this.data.auth },
    ExitReasonID: { value: null, disabled: !this.data.auth },
    CommunityDate: { value: null, disabled: !this.data.auth },
    CollarColor: { value: null, disabled: !this.data.auth },
    CollarColorDate: { value: null, disabled: !this.data.auth },
    PayrollCalculation: { value: null, disabled: !this.data.auth },
    PayrollCalculationDate: { value: null, disabled: !this.data.auth },
    FeeType: { value: null, disabled: !this.data.auth },
    FeeTypeDate: { value: this.startDate, disabled: !this.data.auth },
    Overtime: { value: null, disabled: !this.data.auth },
    OvertimeDate: { value: null, disabled: !this.data.auth },
    ShiftGroupID: { value: null, disabled: !this.data.auth },
    ShiftGroupCode: [{ value: null, disabled: !this.data.auth },Validators.required],
    ShiftGroupName: { value: null, disabled: !this.data.auth },
    ShiftGroupDate: { value: null, disabled: !this.data.auth },
    YearlyLeaveDate: { value: null, disabled: !this.data.auth },
    CodePath11: { value: null, disabled: !this.data.auth },
    EmployeeTypeID: { value: null, disabled: !this.data.auth },
    EmployeeTypeDate: { value: null, disabled: !this.data.auth },
    EmpTypeCode: [{ value: null, disabled: !this.data.auth }, Validators.required],
    EmpTypeName: { value: null, disabled: !this.data.auth },
    CodePath: { value: null, disabled: !this.data.auth },
    DepartmentID: { value: null, disabled: !this.data.auth },
    DepartmentDate: { value: null, disabled: !this.data.auth },
    DeptCode:[ { value: null, disabled: !this.data.auth },Validators.required],
    DeptName: { value: null, disabled: !this.data.auth },
    CodePath2: { value: null, disabled: !this.data.auth },
    CostCenterID: { value: null, disabled: !this.data.auth },
    CostCenterDate: { value: null, disabled: !this.data.auth },
    CostCode: { value: null, disabled: !this.data.auth },
    CostName: { value: null, disabled: !this.data.auth },
    CodePath3: { value: null, disabled: !this.data.auth },
    CadreID: { value: null, disabled: !this.data.auth },
    CadreDate: { value: null, disabled: !this.data.auth },
    CadreCode: { value: null, disabled: !this.data.auth },
    CadreName: { value: null, disabled: !this.data.auth },
    CodePath4: { value: null, disabled: !this.data.auth },
    ProfessionID: { value: null, disabled: !this.data.auth },
    ProfessionDate: { value: null, disabled: !this.data.auth },
    ProfCode: { value: null, disabled: !this.data.auth },
    ProfName: { value: null, disabled: !this.data.auth },
    Photo: '',
    CodePath5: { value: null, disabled: !this.data.auth },
    TaskID: { value: null, disabled: !this.data.auth },
    TaskDate: { value: null, disabled: !this.data.auth },
    TaskCode: { value: null, disabled: !this.data.auth },
    TaskName: { value: null, disabled: !this.data.auth },
    CodePath6: { value: null, disabled: !this.data.auth },
    GroupID: { value: null, disabled: !this.data.auth },
    GroupDate: { value: null, disabled: !this.data.auth },
    GroupCode: { value: null, disabled: !this.data.auth },
    GroupName: { value: null, disabled: !this.data.auth },
    CodePath7: { value: null, disabled: !this.data.auth },
    UnitID: { value: null, disabled: !this.data.auth },
    UnitDate: { value: null, disabled: !this.data.auth },
    UnitCode: { value: null, disabled: !this.data.auth },
    UnitName: { value: null, disabled: !this.data.auth },
    CodePath8: { value: null, disabled: !this.data.auth },
    BranchID: { value: null, disabled: !this.data.auth },
    BranchDate: { value: null, disabled: !this.data.auth },
    BranchCode: { value: null, disabled: !this.data.auth },
    BranchName: { value: null, disabled: !this.data.auth },
    CodePath9: { value: null, disabled: !this.data.auth },
    ServiceStationID: { value: null, disabled: !this.data.auth },
    ServiceStationDate: { value: null, disabled: !this.data.auth },
    ServiceStationCode: { value: null, disabled: !this.data.auth },
    ServiceStationName: { value: null, disabled: !this.data.auth },
    CodePath10: { value: null, disabled: !this.data.auth },


  });

  formChief = this.fb.group({
    ID: null,
    ChiefEmployeeID: [{ value: null, disabled: !this.data.auth }, [Validators.required]],
    Code: { value: null, disabled: !this.data.auth },
    Name: { value: null, disabled: !this.data.auth },
    Degree: [{ value: null, disabled: !this.data.auth }, [Validators.required]],

  });

  formChiefPersonnels = this.fb.group({
    // ID: null,
    // ChiefEmployeeID:  [null, [Validators.required]],
    // Code:null,
    // Name:null,
    // Degree: [null, [Validators.required]],

  });
  // Validators.required,
  formContact = this.fb.group({
    ID: null,
    EmployeeID: { value: null, disabled: !this.data.auth },
    Phone1: [{ value: null, disabled: !this.data.auth }, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
    Phone2: [{ value: null, disabled: !this.data.auth }, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
    MobilePhone: [{ value: null, disabled: !this.data.auth }, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    Email: [{ value: null, disabled: !this.data.auth }, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    Address: { value: null, disabled: !this.data.auth },
    Province: { value: null, disabled: !this.data.auth },
    Country: { value: null, disabled: !this.data.auth },
    PostCode: { value: null, disabled: !this.data.auth },
  });

  // [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]
  // [Validators.required, Validators.pattern("^[0-9]*$")]
  formID = this.fb.group({
    ID: null,
    EmployeeID: { value: null, disabled: !this.data.auth },
    CitizenshipNo: [{ value: null, disabled: !this.data.auth }, [Validators.maxLength(11), Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
    DateOfBirth: { value: null, disabled: !this.data.auth },
    Gender: { value: null, disabled: !this.data.auth },
    SerialNumber: [{ value: null, disabled: !this.data.auth }, [ Validators.pattern("^[0-9]*$")]],
    Nationality: { value: null, disabled: !this.data.auth },
    ValidUntil: { value: null, disabled: !this.data.auth },
    Mother: { value: null, disabled: !this.data.auth },
    Father: { value: null, disabled: !this.data.auth },
  });

  Collarcolors=[];
  Feetypes=[];
  // Collarcolors = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];
  // Feetypes = [{ Code: '0', Name: 'Günlük' }, { Code: '1', Name: 'Haftalık' }, { Code: '2', Name: 'Aylık' }];
  ExitReasons = [];

  selectedFile: ImageSnippet;
  defaultPath = 'assets/img/avatars/who.png';
  gender: string[];

  contact: Personnel[];
  icStar = icStar;
  icStarBorder = icStarBorder;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icClose1 = icClose1;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icInfo = icInfo;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icBusiness = icBusiness;
  icPerson = icPerson;
  icEmail = icEmail;
  icPhone = icPhone;
  href: string;
  pageauth = { write: false, delete: false, update: false }
  tabDisabled = false;
  isMobileLayout = false;
  saveEnabled = false;
  pictureUpload=false;

  @ViewChild('name') NameInputElement:ElementRef<HTMLInputElement>; 

  // @ViewChild('Name', {static: true}) name:any;
  // onLoad = true;
  // columns = ['ChiefEmployeeID','EmployeeID','Code','Name','Degree'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { type: any, contactId: Personnel['ID'], chief: false, auth: false, tabAuth: any },
    // @Optional() @Inject(MAT_DIALOG_DATA) private auth:0,
    // private cdr: ChangeDetectorRef,

    private dialogRef: MatDialogRef<PersonnelsEditComponent>,
    public authorizationService: AuthorizationService,
    public personnelService: PersonnelService,
    public definitionsService: DefinitionsService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private adapter: DateAdapter<any>,
    private router: Router) {

    this.form.valueChanges.subscribe(
      result => {
        this.saveEnabled = true;
      });


    this.formChief.valueChanges.subscribe(
      result => {
        // console.log(this.form.status);
        this.saveEnabled = true;
      });

    this.formID.valueChanges.subscribe(
      result => {
        // console.log(this.form.status);
        this.saveEnabled = true;
      });


    this.formContact.valueChanges.subscribe(
      result => {
        // console.log(this.form.status);
        this.saveEnabled = true;
      });
  }

  ngAfterViewChecked() {
    //this.saveEnabled=false;
    //your code to update the model
    // this.saveEnabled = false;
    // this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.searchStr) {
      this.dataSourceArv.filter = (this.searchStr || '').toString().trim().toLowerCase();
    }

  }


  ngOnInit() {


    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;

    this.turkishCulture();
    // this.getReasons('permission');
    this.getEnums('LeaveReasons',null);
    this.getEnums('CollarColors',null);
    this.getEnums('FeeTypes',null);
    this.definitionGetWorkingTypeEnums('Country', null);

    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      this.lblTemelBilgiler = this.languageMap['Temel Bilgiler'].labelName;
 
      if (this.data.type !== 'create') {
        if (this.data.chief) {
          Object.keys(this.data.tabAuth).forEach((key) => {
            if (this.data.tabAuth[key].read && !this.isMobileLayout)
              this.links.push({ index: Number(key), name: this.data.tabAuth[key].tabname.replace("Personel ", "") });
            else if (this.data.tabAuth[key].read && this.isMobileLayout)
              this.links.push({ index: Number(key), name: this.data.tabAuth[key].tabname.replace("Personel ", "").replace(" Bilgileri", "").replace("Amir Bağlı Personeller", "Personeller").replace(" Bilgiler", "").replace(" Bilgisi", "").replace(" Bilgileri", "") });
          });
        }
        else
          Object.keys(this.data.tabAuth).forEach((key) => {
            if (this.data.tabAuth[key].read && this.data.tabAuth[key].tabname !== 'Personel Amir Bağlı Personeller' && !this.isMobileLayout)
              this.links.push({ index: Number(key), name: this.data.tabAuth[key].tabname.replace("Personel ", "") });
            else if (this.data.tabAuth[key].read && this.data.tabAuth[key].tabname !== 'Personel Amir Bağlı Personeller' && this.isMobileLayout)
              this.links.push({ index: Number(key), name: this.data.tabAuth[key].tabname.replace("Personel ", "").replace(" Bilgiler", "").replace(" Bilgisi", "").replace(" Bilgileri", "").replace("Amiri", "Amir") });
          });
      } else
        Object.keys(this.data.tabAuth).forEach((key) => {
          if (this.data.tabAuth[key].read && this.data.tabAuth[key].tabname !== 'Personel Amir Bağlı Personeller' && !this.isMobileLayout)
            this.links.push({ index: Number(key), name: this.data.tabAuth[key].tabname.replace("Personel ", "") });
          else if (this.data.tabAuth[key].read && this.data.tabAuth[key].tabname !== 'Personel Amir Bağlı Personeller' && this.isMobileLayout)
            this.links.push({ index: Number(key), name: this.data.tabAuth[key].tabname.replace("Personel ", "").replace(" Bilgiler", "").replace(" Bilgisi", "").replace(" Bilgileri", "").replace("Amiri", "Amir") });
        });
      // console.log(this.links);
      this.activeLinkIndex = this.links[0].index;
      this.gender = [this.languageMap['Kadın'].labelName, this.languageMap['Erkek'].labelName];
      this.href = this.router.url;
      this.form.patchValue({
        CodePath: '',//this.languageMap['Personel Tipi'].labelName,
        CodePath2: '',//this.languageMap['Departman Tipi'].labelName,
        CodePath3: '',// this.languageMap['Masraf Tipi'].labelName,
        CodePath4: '',// this.languageMap['Kadro Tipi'].labelName,
        CodePath5: '',// this.languageMap['Meslek Tipi'].labelName,
        CodePath6: '',// this.languageMap['Gorev Tipi'].labelName,
        CodePath7: '',//this.languageMap['Grup Tipi'].labelName,
        CodePath8: '',// this.languageMap['Birim Tipi'].labelName,
        CodePath9: '',//this.languageMap['Şube Tipi'].labelName,
        CodePath10: '',//this.languageMap['Servis Tipi'].labelName,
        CodePath11: ''
      });

      this.columns = [{ field: 'ID', columnName: 'ID' }, { field: 'ChiefEmployeeID', columnName: 'ChiefEmployeeID' }, { field: 'EmployeeID', columnName: 'EmployeeID' }, { field: 'Code', columnName: this.languageMap['Kod'].labelName }, { field: 'Name', columnName: this.languageMap['Adı'].labelName }, { field: 'Degree', columnName: this.languageMap['Derece'].labelName }, { field: 'Delete', columnName: '' }];
      this.displayedColumns = this.columns.map(column => column.field);
      this.groupByColumns = ['Degree'];

      this.columnsPer = [{ field: 'ID', columnName: 'ID' }, { field: 'ChiefEmployeeID', columnName: 'ChiefEmployeeID' }, { field: 'EmployeeID', columnName: 'EmployeeID' }, { field: 'Code', columnName: this.languageMap['Kod'].labelName }, { field: 'Name', columnName: this.languageMap['Adı'].labelName }, { field: 'Degree', columnName: this.languageMap['Derece'].labelName }, { field: 'Delete', columnName: '' }];
      this.displayedColumnsPer = this.columnsPer.map(column => column.field);
      this.groupByColumnsPer = ['Degree'];


      this.columnsArv = [{ field: 'ID', columnName: 'ID' }, { field: 'EmployeeID', columnName: 'EmployeeID' }, { field: 'Type', columnName: this.languageMap['Tip'].labelName }, { field: 'StartDate', columnName: this.languageMap['Başlangıç Tarih'].labelName }, { field: 'NewValue', columnName: this.languageMap['Değer'].labelName }, { field: 'BeginDate', columnName: this.languageMap['İş Giriş Tarihi'].labelName }, { field: 'LeaveDate', columnName: this.languageMap['İşten Çıkış Tarihi'].labelName }, { field: 'ReasonID', columnName: this.languageMap['İşten Çıkış Nedeni'].labelName }];
      this.displayedColumnsArv = this.columnsArv.map(column => column.field);
      this.groupByColumnsArv = ['Type'];


      if (this.data.auth)
        this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'))
      else { this.pageauth.write = false; this.pageauth.update = false; this.pageauth.delete = false; }

      //   if (this.data.contactId == null)
      //   this.getPersonnel(null, null, 'Chief=1');
      //  else

      // console.log(this.data);
      if (this.data.type == 'edit' || this.data.type == 'open') {
        this.getPersonnel({ ID: this.data.contactId });
      }
      else if (this.data.type == 'create') {
        this.tabDisabled = true;
        this.form.controls["Code"].setValidators([Validators.required]);
        this.saveEnabled = false;
      }
      else
        this.tabDisabled = false;

      // this.getPersonnel({ Chief: true });

    })
  }

  onFocusOutCode(event: any) {
    if (event.target.value.length > 0)
      this.getPersonnel({ Emp1: event.target.value, Emp2: event.target.value });
      
     
      // this.focusToFormControlName('Name');
  }

  getPersonnel(obj) {
    this.saveEnabled = false;
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.personnelService.GetPersonnel(obj)
      .subscribe((res: any[]) => {

        if (res.length === 0 && !obj.Chief) {
          
          this.form.reset();          
          let startDate = moment(new Date());
          this.form.patchValue({ Code: obj.Emp1, PassDate: startDate, StartingDate: startDate });
          this.tabDisabled = true;
          this.saveEnabled = false;
       
          setTimeout(()=>{
            this.NameInputElement.nativeElement.focus(),100
          });
          
 


        }
        else {


          if (obj.Chief !== undefined && res.length>0) {

            this.Chiefs=[];
            this.formChief.patchValue(res[0].ID);
            Object.keys(res).forEach((key) => {
              let data = { kodu: res[key].ID, adi: res[key].Name + ' ' + res[key].Surname };
              this.Chiefs.push(data);
            });
           
          }
          else {
            this.contact = res[0];
            this.form.patchValue(this.contact);
          }
        }

        // this.focusToFormControlName('Name');
        this.saveEnabled = false;
        dialogRef.close();
      }, err => {

        this.saveEnabled = false;
        dialogRef.close();
        console.log(err);
      });

    this.saveEnabled = false;
  }


  openContact(param) {
    const dialogRef = this.dialog.open(DefinitionsComponent, {
      panelClass: 'listClass',
      data: { type: param, id: 0, code: '', name: '', codePath: '' },
      width: '750px',
      height:'775px',
      autoFocus: false,
      maxWidth: this.isMobileLayout ? '90vw' : '80vw'
    });


    let startDate = moment(new Date());

    dialogRef.afterClosed().subscribe(result => {
  
      if (param === 'Personnel')
        this.form.patchValue({ EmployeeTypeID: result.id, EmployeeTypeDate:startDate, EmpTypeCode: result.code, EmpTypeName: result.name, CodePath: result.codePath.split(result.code)[0] });
      if (param === 'Department')
        this.form.patchValue({ DepartmentID: result.id, DepartmentDate: startDate, DeptCode: result.code, DeptName: result.name, CodePath2: result.codePath.split(result.code)[0] });
      if (param === 'CostCenter')
        this.form.patchValue({ CostCenterID: result.id, CostCenterDate:startDate, CostCode: result.code, CostName: result.name, CodePath3: result.codePath.split(result.code)[0] });
      if (param === 'Cadre')
        this.form.patchValue({ CadreID: result.id, CadreDate:startDate,  CadreCode: result.code, CadreName: result.name, CodePath4: result.codePath.split(result.code)[0] });
      if (param === 'Profession')
        this.form.patchValue({ ProfessionID: result.id, ProfessionDate:startDate, ProfCode: result.code, ProfName: result.name, CodePath5: result.codePath.split(result.code)[0] });
      if (param === 'Task')
        this.form.patchValue({ TaskID: result.id, TaskDate:startDate, TaskCode: result.code, TaskName: result.name, CodePath6: result.codePath.split(result.code)[0] });
      if (param === 'Group')
        this.form.patchValue({ GroupID: result.id, GroupDate:startDate, GroupCode: result.code, GroupName: result.name, CodePath7: result.codePath.split(result.code)[0] });
      if (param === 'Unit')
        this.form.patchValue({ UnitID: result.id, UnitDate:startDate,  UnitCode: result.code, UnitName: result.name, CodePath8: result.codePath.split(result.code)[0] });
      if (param === 'Branch')
        this.form.patchValue({ BranchID: result.id, BranchDate:startDate, BranchCode: result.code, BranchName: result.name, CodePath9: result.codePath.split(result.code)[0] });
      if (param === 'ServiceStation')
        this.form.patchValue({ ServiceStationID: result.id, ServiceStationDate:startDate, ServiceStationCode: result.code, ServiceStationName: result.name, CodePath10: result.codePath.split(result.code)[0] });

    });
   }

// openShiftGroup(param) {}

  openShiftGroup(param) {

    const dialogRef = this.dialog.open(ShiftGroupComponent, {
      panelClass: 'listClass',
      data: { type: param },
      width: '750px',
      autoFocus: false,
      maxWidth: this.isMobileLayout ? '90vw' : '80vw'
    });

    let startDate = moment(new Date());

    dialogRef.afterClosed().subscribe(result => {
 
      this.form.patchValue({ ShiftGroupID: result.ID,  ShiftGroupDate:startDate,  ShiftGroupCode: result.Code, ShiftGroupName: result.Name, CodePath11: result.Code });

    });
  }


  addFormRow() {
    // this.form.get('Code').setValidators(Validators.required);
    // this.form.patchValue({ Code: null,Name: null,Surname: null,PassDate:null,StartingDate:null });
  }

  checkEmployeeTypeDate(control: FormControl) {

    // console.log(control);
    return Validators.required;


  }

  applyFilter(filterValue: string) {

    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSourceArv.filter = filterValue;
  }


  getEnums(type,code) {

    this.definitionsService.GetEnums(type,code)
      .subscribe((res: any[]) => {

        if (type==='CollarColors')
        this.Collarcolors = res;        
        else if (type==='FeeTypes')
        this.Feetypes = res;
        else if (type==='LeaveReasons')
        this.ExitReasons = res;

        // console.log(this.ExitReasons);

      });

  }


  getReasons(type) {

    this.definitionsService.DefinitionGetConstants(type)
      .subscribe((res: any[]) => {

        this.ExitReasons = res;

        // console.log(this.ExitReasons);

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

  focusToFormControlName(name) {

    console.log(this.form.get(name));
    (<any>this.form.get(name)).nativeElement.focus();
  }



  save() {

    if (this.form.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    const form = this.form.value;
    this.personnelService.PostPersonnel(form)
      .subscribe((res: any[]) => {

        if (res[0]['ReturnCode'] === "202") {
          dialogRef.close();
          this.waitProgress(res[0]['ReturnDscr'], 3000);
          return;
        }

        this.form.patchValue({ ID: res[0].ID });
        this.isEdited = true;
        this.tabDisabled = false;
        dialogRef.close();
        this.saveEnabled = false;
        this.focusToFormControlName('Code');
      }, err => {
        dialogRef.close();
        console.log(err);
        this.saveEnabled = false;
      });


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


  definitionGetWorkingTypeEnums(type, code) {
    let data;
    this.definitionsService.DefinitionGetWorkingTypeEnums(type, code)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { kodu: res[key].Code, adi: res[key].Name };
          if (type === 'Country')
            this.workingTypesCountry.push(data);

        });

      }, err => {
        console.log(err);

      });

  }

  getPersonnelChief(Id) {
    this.saveEnabled = false;
    this.personnelService.GetPersonnelAmir(Id)
      .subscribe((res: any[]) => {

        this.userGroupSelection = new SelectionModel<Group>(true, []);
        this._alldata = res;
        this.dataSource.data = this.addGroups(this._alldata, this.groupByColumns);

        // this.dataSource.data = this.addGroups(res, this.groupByColumns);
        this.dataSource.filterPredicate = this.customFilterPredicate.bind(this);
        this.dataSource.filter = performance.now().toString();

      }, err => {
        console.log(err);

      });

  }



  getChiefPersonnels(ChiefEmployeeID) {
    this.saveEnabled = false;
    this.personnelService.GetAmirPersonnels(ChiefEmployeeID)
      .subscribe((res: any[]) => {

        this.perGroupSelection = new SelectionModel<Group>(true, []);
        this._alldataPer = res;
        this.dataSourcePer.data = this.addGroups(this._alldataPer, this.groupByColumnsPer);

        this.dataSourcePer.filterPredicate = this.customFilterPredicate.bind(this);
        this.dataSourcePer.filter = performance.now().toString();

      }, err => {
        console.log(err);

      });

  }

  closeDialog() {

    // console.log(this.saveEnabled);
    if (this.saveEnabled)
      this.openDialog(0, this.languageMap['Değişiklikler iptal edilecek.'].labelName, this.activeLinkIndex === 0 ? 'save' : 'saveChief');
    else
      this.dialogRef.close(this.isEdited);
  }


  getArchieve(ChiefEmployeeID) {
    this.saveEnabled = false;
    this.personnelService.GetArchieve(ChiefEmployeeID)
      .subscribe((res: any[]) => {

        console.log(res);
        this.arvGroupSelection = new SelectionModel<Group>(true, []);
        this._alldataArv = res;
        this.dataSourceArv.data = this.addGroups(this._alldataArv, this.groupByColumnsArv);

        // this.dataSourceArv.filterPredicate = this.customFilterPredicate.bind(this);
        // this.dataSourceArv.filter = performance.now().toString();

      }, err => {
        console.log(err);

      });

  }




  checkGroupByColumn(field, add, groupByColumns: string[]) {
    let found = null;
    for (const column of this.groupByColumns) {
      if (column === field) {
        found = this.groupByColumns.indexOf(column, 0);
      }
    }
    if (found != null && found >= 0) {
      if (!add) {
        this.groupByColumns.splice(found, 1);
      }
    } else {
      if (add) {
        this.groupByColumns.push(field);
      }
    }
  }

  // unGroupBy(event, column) {
  //   event.stopPropagation();
  //   this.checkGroupByColumn(column.field, false);
  //   this.dataSource.data = this.addGroups(this._alldata, this.groupByColumns);
  //   this.dataSource.filter = performance.now().toString();
  // }

  customFilterPredicate(data: any | Group, filter: string): boolean {
    return (data instanceof Group) ? data.visible : this.getDataRowVisible(data, this.groupByColumnsPer);
  }

  getDataRowVisible(data: any, groupByColumns: string[]): boolean {
    const groupRows = this.dataSource.data.filter(
      row => {
        if (!(row instanceof Group)) {
          return false;
        }
        let match = true;
        this.groupByColumns.forEach(column => {
          if (!row[column] || !data[column] || row[column] !== data[column]) {
            match = false;
          }
        });
        return match;
      }
    );

    if (groupRows.length === 0) {
      return true;
    }
    const parent = groupRows[0] as Group;
    return parent.visible && parent.expanded;
  }

  groupHeaderClick(row) {

    row.expanded = !row.expanded;
    this.dataSource.filter = performance.now().toString();  // bug here need to fix
  }

  groupPerHeaderClick(row) {


    row.expanded = !row.expanded;
    this.dataSourcePer.filter = performance.now().toString();  // bug here need to fix
  }

  groupArvHeaderClick(row) {


    row.expanded = !row.expanded;
    this.dataSourceArv.filter = performance.now().toString();  // bug here need to fix
  }



  addGroups(data: any[], groupByColumns: string[]): any[] {
    const rootGroup = new Group();
    rootGroup.expanded = true;
    return this.getSublevel(data, 0, groupByColumns, rootGroup);
  }

  getSublevel(data: any[], level: number, groupByColumns: string[], parent: Group): any[] {
    if (level >= groupByColumns.length) {
      return data;
    }
    const groups = this.uniqueBy(
      data.map(
        row => {
          const result = new Group();
          result.level = level + 1;
          result.parent = parent;
          for (let i = 0; i <= level; i++) {
            result[groupByColumns[i]] = row[groupByColumns[i]];
          }
          return result;
        }
      ),
      JSON.stringify);

    const currentColumn = groupByColumns[level];
    let subGroups = [];
    groups.forEach(group => {
      const rowsInGroup = data.filter(row => group[currentColumn] === row[currentColumn]);
      group.totalCounts = rowsInGroup.length;
      const subGroup = this.getSublevel(rowsInGroup, level + 1, groupByColumns, group);
      subGroup.unshift(group);
      subGroups = subGroups.concat(subGroup);
    });
    return subGroups;
  }

  uniqueBy(a, key) {
    const seen = {};
    return a.filter((item) => {
      const k = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
  }

  isGroup(index, item): boolean {
    return item.level;
  }

  userGroupMasterToggle(row) {

    this.userGroupSelection.clear();
    this.userGroupSelection.toggle(row);
    this.formChief.patchValue({ ID: row.ID, ChiefEmployeeID: row.ChiefEmployeeID, Degree: row.Degree, });
    this.saveEnabled = false;
  }



  perGroupMasterToggle(row) {

    this.perGroupSelection.clear();
    this.perGroupSelection.toggle(row);

  }


  arvGroupMasterToggle(row) {

    this.arvGroupSelection.clear();
    this.arvGroupSelection.toggle(row);

  }

  getID(Id) {

    this.personnelService.GetID(Id)
      .subscribe((res: any[]) => {

        if (res.length>0)
        this.formID.patchValue({ ID: res[0].ID, EmployeeID: res[0].EmployeeID, CitizenshipNo: res[0].CitizenshipNo, DateOfBirth: res[0].DateOfBirth, Gender: (res[0].Gender == 0 ? "Kadın" : "Erkek"), SerialNumber: res[0].SerialNumber, Nationality: res[0].Nationality, ValidUntil: res[0].ValidUntil, Mother: res[0].Mother, Father: res[0].Father });
        this.saveEnabled = false;
      }, err => {
        console.log(err);
      });
    this.saveEnabled = false;

  }


  getContact(Id) {

    this.personnelService.GetContact(Id)
      .subscribe((res:any[]) => {

        if (res.length>0)
        this.formContact.patchValue({ ID: res[0].ID, EmployeeID: res[0].EmployeeID, Phone1: res[0].Phone1, Phone2: res[0].Phone2, MobilePhone: res[0].MobilePhone, Email: res[0].Email, Address: res[0].Address, Province: res[0].Province, Country: res[0].Country, PostCode: res[0].PostCode });
        this.saveEnabled = false;
      }, err => {
        console.log(err);

      });

    this.saveEnabled = false;

  }

  saveID() {

    if (this.formID.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.formID.value.EmployeeID = this.form.value.ID;
    this.formID.value.Gender = (this.formID.value.Gender === 'Kadın' ? 0 : (this.formID.value.Gender === 'Erkek' ? 1 : null));
    const form = this.formID.value;

    this.personnelService.PostID(form)
      .subscribe((res) => {
        this.isEdited = true;
        dialogRef.close();
        this.saveEnabled = false;
      }, err => {
        dialogRef.close();
        console.log(err);
        this.saveEnabled = false;
      });


  }


  saveContact() {

    if (this.formContact.invalid) {
      // console.log("1");
      return;
    }


    // console.log("2");
    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    // this.waitProgress(this.languageMap['İşlem yapılıyor. Lütfen Bekleyiniz...'].labelName, undefined);
    this.formContact.value.EmployeeID = this.form.value.ID;
    const form = this.formContact.value;
    this.personnelService.PostContact(form)
      .subscribe((res) => {
        // this.contact=res[0];
        // this.form.patchValue(this.contact);
        // this.waitProgressDismiss();
        this.isEdited = true;
        dialogRef.close();
        this.saveEnabled = false;
      }, err => {
        dialogRef.close();
        console.log(err);
        this.saveEnabled = false;
        // this.waitProgress(err, 3000);
      });
  }


  deleteSelected(ID) {
    this.openDialog(ID, this.languageMap['Amir bilgisi silinecektir.'].labelName, 'deleteChief');

  }


  openDialog(ID, Temp, MethodName) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: Temp, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        if (MethodName == 'deleteChief')
          this.deleteChief(ID);
        else
          this.dialogRef.close(false);
      }
    });
  }


  saveChiefPersonnels() {


  }

  saveChief() {

    if (this.formChief.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    // this.waitProgress(this.languageMap['İşlem yapılıyor. Lütfen Bekleyiniz...'].labelName, undefined);
    // this.formContact.value.EmployeeID=this.form.value.ID;
    const form = this.formChief.value;
    form.EmployeeID = this.form.value.ID;
    this.personnelService.PostChief(form)
      .subscribe((res) => {
        // this.contact=res[0];
        // this.form.patchValue(this.contact);

        this.getPersonnelChief(this.form.value.ID == null ? 0 : this.form.value.ID);
        this.formChief.reset();
        this.isEdited = true;
        dialogRef.close();
        // this.waitProgressDismiss();
        this.saveEnabled = false;
      }, err => {
        dialogRef.close();
        console.log(err);
        this.saveEnabled = false;
        // this.waitProgress(err, 3000);
      });


  }



  deleteChief(Id) {

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    // this.waitProgress(this.languageMap['İşlem yapılıyor. Lütfen Bekleyiniz...'].labelName, undefined);

    this.personnelService.DeleteChief(Id)
      .subscribe((res) => {
        // this.formChief.patchValue( { ID:row.ID,ChiefEmployeeID:row.ChiefEmployeeID,Degree:row.Degree,});
        // this.formChief.patchValue( { ID:row.ID,ChiefEmployeeID:row.ChiefEmployeeID,Degree:row.Degree,});
        this.formChief.reset();
        this.getPersonnelChief(this.form.value.ID == null ? 0 : this.form.value.ID);
        // this.waitProgressDismiss();
        dialogRef.close();
      }, err => {

        dialogRef.close();
        console.log(err);
        // this.waitProgress(err, 3000);
      });


  }

  gotoTab(link) {


    console.log(link);

    this.form.patchValue({ Code: null, Name: null, Surname: null, PassDate: null, StartingDate: null });
    this.activeLinkIndex = link.index;

    if (this.activeLinkIndex == 0) {
      // if (this.data.contactId == null)
      //   // this.getPersonnel(null, null, 'Chief=1');
      // else
      //   this.getPersonnel(null, null, 'Chief=1 and e.ID<>' + this.data.contactId);
      // if (this.data.contactId) {
      if (this.data.contactId)
      this.getPersonnel({ ID: this.data.contactId });
      else
      this.getPersonnel({ ID: this.form.value.ID });
      // }
    }


    if (this.activeLinkIndex == 1) {
      this.getPersonnel({ ID:this.form.value.ID, Chief: true });
      this.getPersonnelChief(this.form.value.ID == null ? 0 : this.form.value.ID);
    }

    if (this.activeLinkIndex == 2)
      this.getChiefPersonnels(this.form.value.ID == null ? 0 : this.form.value.ID);


    if (this.activeLinkIndex == 3)
      this.getID(this.form.value.ID);

    if (this.activeLinkIndex == 4)
      this.getContact(this.form.value.ID);

    if (this.activeLinkIndex == 5)
      this.getArchieve(this.form.value.ID);

  }


  turkishCulture() {
    this.adapter.setLocale("tr");
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    this.save();
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }


  onFileSelected(event) {
    // this.selectedFile=event.target.files[0];

    this.processFile(event.target.files[0]);

    
  }

  processFile(imageInput: any) {


    // debugger;
    // const file: File = imageInput.files[0];
    const file: File = imageInput;
    const reader = new FileReader();


    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      this.personnelService.UploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.form.patchValue({ Photo: 'assets/img/avatars/' + file.name });
          this.onSuccess();
          
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
    this.pictureUpload=true;

    
    // setTimeout(()=>{
    //   this.form.patchValue({ Photo: 'assets/img/avatars/' + file.name }),2000
    // });
    
    


  }



  deleteContact(param) {

    console.log(param);
  }





  toggleStar() {
    // if (this.contact) {
    //   this.contact.starred = !this.contact.starred;
    // }
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