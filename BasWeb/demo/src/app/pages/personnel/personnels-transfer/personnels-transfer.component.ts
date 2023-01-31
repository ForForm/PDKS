import { LanguageMap } from './../../interfaces/language.interface';
import AppUtil from './../../interfaces/util';
import { LayoutService } from './../../../../@vex/services/layout.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import { MatDialog } from '@angular/material/dialog';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icSearch from '@iconify/icons-ic/twotone-search';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute, Router } from '@angular/router';
// import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../../services/authorization.service';
import icExcel from '@iconify/icons-fa-solid/file-excel';
import * as XLSX from 'xlsx';
// import { read, IWorkBook } from 'xlsx';
import { MatTableDataSource } from '@angular/material/table';
import { PersonnelService } from '../../services/personnel.service';
import { WaitComponent } from '../../wait/wait.component';
import { StyleService } from './../../../../@vex/services/style.service';
import * as _moment from "moment";
// import { Console } from 'console';
const moment = _moment;
import { Observable, of, ReplaySubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
export interface WorkingTypesCode { property: string; }

@Component({
  selector: 'vex-personnels-transfer',
  templateUrl: './personnels-transfer.component.html',
  styleUrls: ['./personnels-transfer.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class PersonnelsTransferComponent<T> implements OnInit {

  @ViewChild("usrPaginator", { static: false }) usrPaginator: MatPaginator;
  @ViewChild("viewPaginator", { static: false }) viewPaginator: MatPaginator;
  // contacts = contactsData;
  layoutCtrl = new FormControl('boxed');
  language: any = []; languageMap: LanguageMap = {};
  icSearch = icSearch;
  icPersonAdd = icPersonAdd;
  icCloudDownload = icCloudDownload;
  icFilterList = icFilterList;
  icContacts = icContacts;
  icExcel = icExcel;
  // XLSX=XLSX;
  // read=read;
  // IWorkBook=IWorkBook;
  isMobileLayout = false;
  subFooter: boolean;
  breadcrumbs: string[];
  links = [{ index: Number(0), name: 'Dosya Transfer Bilgileri' }, { index: Number(1), name: 'Geçici Tabloda Göster' }];
  activeLinkIndex: number = 0;
  tabDisabled = true;
  pageauth = { write: false, delete: false, update: false };
  href: string;
  selectedIndex = 0;
  form = this.fb.group({
    Code: null,
    Sheet: null,
    TemplateList: null,
    TemplateName: null

  });
  data: T[];
  data2: T[];
  visibleColumns: Array<keyof T | string>;
  visibleColumnsE: Array<keyof T | string>;
  columns: any[]; //TableColumn<T>[];
  columnsE: any[]; //TableColumn<T>[];
  dataSource = new MatTableDataSource<T>();
  dataSourceE = new MatTableDataSource<T>();
  Sheets = [];
  TemplatesList = [];
  transferTable: any;
  progresValue: number;
  calculateArray: number[];
  scoreLabel: string = 'Transfer';
  calculatingPersonel: string = '';
  bCalc = true;
  say = 0;
  errors = '';
  errorsLabel = '';
  response: any;
  selectedRow: any;
  filtredData: any;
  excelButtonDisabled = false;
  primaryNotSelected = true;
  response2: any;
  filteredOptions: Observable<WorkingTypesCode[]>;
  myControl = new FormControl('');
  Uploaded=false;

  //  workbook: IWorkBook;
  fileReader: FileReader;


  constructor(private dialog: MatDialog,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private styleService: StyleService,
    private router: Router,
    public authorizationService: AuthorizationService,
    public personnelService: PersonnelService,
    private fb: FormBuilder) { }

  arrayBuffer: any;
  file: File;



  ngOnInit() {

    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );


    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.route.paramMap.subscribe(params => {
      this.href = this.router.url;
      this.languageMap = AppUtil.getLabels();
      this.getUser(JSON.parse(sessionStorage.getItem('Username')), this.href.replace(/\//g, '@'));
      this.breadcrumbs = [this.languageMap['Personel'].labelName, this.languageMap['Personel Transfer'].labelName];
      this.getPersonnelTransfer();
      this.GetExcelTemplate(null);
    });
  }

  // private _filter(property: string): WorkingTypesCode[] {
  //   const filterValue = property.toLowerCase();    
  //   return this.columns.filter(option => option.toLowerCase().includes(filterValue));
  // }

  GetExcelTemplate(template) {
    this.TemplatesList = [];

    this.personnelService.GetPersonnelTransferTemplate(template)
      .subscribe((res) => {
        this.TemplatesList.push({ Name: null })
        Object.keys(res).forEach((key) => {
          this.TemplatesList.push({ Name: res[key].TemplateName })
        });


      }, err => {
        console.log(err);

      });
  }

  SetScreenExcelTemplate(templateName) {

    if (templateName.value == null)    
    {
      this.form.value.TemplateList=null;      
      this.form.value.TemplateName=null;      
      this.getPersonnelTransfer();
      
    }
    else {

      this.form.value.TemplateList=templateName.value;
      this.form.value.TemplateName=templateName.value;
      this.personnelService.GetPersonnelTransferTemplate(templateName.value)
        .subscribe((res) => {

          console.log(res);
          this.transferTable = [];
          Object.keys(res).forEach((key) => {
            this.transferTable.push({
              ID: res[key].RowID, CompanyID: res[key].CompanyID, TemplateName: res[key].TemplateName,
              SourceField: res[key].SourceField, DestinationField: res[key].DestinationField, DefaultValue: res[key].DefaultValue, Status: res[key].Status,
              Type: res[key].Type, Active: res[key].Active
            })
          });

          console.log(this.transferTable);
          this.controlPrimaryFields();

        }, err => {
          console.log(err);

        });
    }
  }

  PostExcelTemplate() {
    // console.log(this.form.value.TemplateName);
    // console.log(this.transferTable);


    if (this.form.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    // this.form.value.EmployeeID = this.form.value.ID;
    // this.form.value.Gender = (this.formID.value.Gender === 'Kadın' ? 0 : (this.formID.value.Gender === 'Erkek' ? 1 : null));
    // const form = this.formID.value;
    // obj[0].Username = JSON.parse(sessionStorage.getItem('Username'));
    // obj[0].CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));

    const obj = {
      CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), TemplateName: this.form.value.TemplateName,
      TransferExcelTemplate: this.transferTable
    };


    console.log(obj);
    this.personnelService.SetPersonnelTransferTemplate(obj)
      .subscribe((res) => {
        // this.isEdited = true;
        dialogRef.close();
        // this.saveEnabled = false;
      }, err => {
        dialogRef.close();
        // console.log(err);
        // this.saveEnabled = false;
      });

  }

  incomingfile(event) {

    this.dataSource.data = [];
    this.file = null;
    this.columns = [];
    this.visibleColumns = [];
    this.Sheets = [];
    this.arrayBuffer = null;
    this.excelButtonDisabled = false;
    this.file = event.target.files[0];
    this.excelButtonDisabled = false;
    this.Uploaded=false;
  }


  Upload() {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    this.fileReader = new FileReader();

    this.fileReader.onload = (e) => {
      try {

        let selectedColumns = [];
        this.columns = [];
        this.visibleColumns = [];
        this.arrayBuffer = this.fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
          // console.log(arr[i]);
        }

        // console.log(arr);
        // console.log(data);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, { type: "binary", cellDates: true, dateNF: 'YYYY-MM-DD HH:mm:ss' });
        this.Sheets = [];
        Object.keys(workbook.SheetNames).forEach((key) => {
          this.Sheets.push({ Code: key, Name: workbook.SheetNames[key] })
        });

        if (this.form.value.Sheet == undefined)
          this.form.patchValue({ Sheet: '0' });


        var worksheet = workbook.Sheets[this.Sheets[Number(this.form.value.Sheet)].Name];


        for (let index = 0; index < 58; index++) {
          if (index < 29)
            if (worksheet[this.getAlphabetIndex(index) + '1'] != undefined) {
              selectedColumns.push({
                label:
                  worksheet[this.getAlphabetIndex(index) + '1'].v,
                property:
                  worksheet[this.getAlphabetIndex(index) + '1'].v,
                type: 'text', cssClasses: ['text-secondary', 'w-10']
              });
            }

          if (index >= 29)
            if (worksheet['A' + this.getAlphabetIndex(index - 29) + '1'] != undefined) {
              selectedColumns.push({
                label:
                  worksheet['A' + this.getAlphabetIndex(index - 29) + '1'].v,
                property:
                  worksheet['A' + this.getAlphabetIndex(index - 29) + '1'].v,
                type: 'text', cssClasses: ['text-secondary', 'w-10']
              });
            }
        }

        this.columns = selectedColumns;
        this.visibleColumns = this.columns.map(column => column.property);
        this.data = XLSX.utils.sheet_to_json(worksheet, { raw: false });
        this.dataSource.data = this.data;
        this.dataSource.paginator = this.viewPaginator;
        dialogRef.close();
        this.tabDisabled = false;
        this.Uploaded=true;
      } catch (error) {
        dialogRef.close();
        this.excelButtonDisabled = true;
      }
    }


    try {
      const dialogRef = this.dialog.open(WaitComponent, {
        panelClass: 'transparent',
        disableClose: true
      });
      this.fileReader.readAsArrayBuffer(this.file);
      this.excelButtonDisabled = true;

      dialogRef.close();

    } catch (error) {
      dialogRef.close();
      console.log(error);

    }


  }

  personelTransfer(obj) {

    return this.personnelService.SetPersonnelTransfer(obj).toPromise().then(data => {
      this.response = <any>data;
    }).catch(error => { this.errors = error; }
    );
  }

  arrayRemove(arr, value) {

    return arr.filter(function (ele) {
      return ele["Rownum"] != value["Rownum"];
    });
  }


  deletePersonnelTransfer() {

    return this.personnelService.DeletePersonnelTransferControl().toPromise().then(data => {
      this.response = <any>data;
    }).catch(error => { this.errors = error; }
    );
  }

  async StartTransfer() {
    this.errors = '';
    this.errorsLabel = '';
    if (this.scoreLabel === this.languageMap['Transfer'].labelName) { this.scoreLabel = this.languageMap['Durdur'].labelName; this.bCalc = true; }
    else { this.scoreLabel = 'Transfer'; this.bCalc = false; };

    if (this.bCalc) {
      this.calculatingPersonel = this.languageMap['Transfer Başlıyor...'].labelName;
      this.progresValue = 0;
      this.calculateArray = new Array(this.dataSourceE.data.length);
      this.say = 0;
    }

    let aaArray: any[] = [];
    let say2 = 0;

    let response = await this.deletePersonnelTransfer();
    //  this.personnelService.DeletePersonnelTransferControl().subscribe((res) => {}, err => {console.log(err);});

    // if (this.response) {
    for (var key in this.dataSourceE.data) {
      const item = this.dataSourceE.data[key];
      aaArray.push(item);
      if (this.bCalc) {
        this.say++; say2++;
        let response;


        if (this.say === this.dataSourceE.data.length) {
          response = await this.personelTransfer(aaArray);
          say2 = 0;
        }

        if (say2 === 50) {
          response = await this.personelTransfer(aaArray);
          say2 = 0;
          aaArray = [];
        }

        this.calculatingPersonel = this.languageMap['Transfer yapılıyor...'].labelName + ' ' + ' ' + this.languageMap['Kayıt'].labelName + ': ( ' + this.say.toString() + '/' + this.dataSourceE.data.length.toString() + ' )';
        this.progresValue = this.progresValue + (100 / this.dataSourceE.data.length);
        // this.progresValue = this.say;
        if (this.errors) {
          this.errorsLabel = this.errors["statusText"] + ' ' + JSON.stringify(this.errors["error"]["errors"])
        }

        if (this.say === this.dataSourceE.data.length) {
          {
            let datas = this.dataSourceE.data;
            let datasCalc = this.dataSourceE.data;
            this.calculatingPersonel = this.languageMap['Transfer Tamamlandı'].labelName;
            this.say = 0;
            this.scoreLabel = 'Transfer';
            this.progresValue = 0;
            this.calculateArray = new Array(datas.length);


            var promise = new Promise((resolve, reject) => {

              this.dataSourceE.data.forEach(async (element, index, array) => {

                this.calculatingPersonel = this.languageMap['Amir Bilgileri oluştuluyor...'].labelName + ' ' + ' ' + this.languageMap['Kayıt'].labelName + ': ( ' + datasCalc.length + '/' + this.say.toString() + ' )';
                await this.personnelService.SetChiefTransfer(element).toPromise().then(res => {

                  this.calculatingPersonel = this.languageMap['Amir Bilgileri oluştuluyor...'].labelName + ' ' + ' ' + this.languageMap['Kayıt'].labelName + ': ( ' + datasCalc.length + '/' + this.say.toString() + ' )';
                  this.progresValue = this.progresValue + (100 / datasCalc.length);
                  // if (res[0]["ReturnCode"] == "200") {
                  //   datas = datas.filter(item => item["Rownum"] !== element["Rownum"]);
                  //   // datas = this.arrayRemove(datas, element);
                  // }
                  this.say++;

                }, err => {
                  this.say++; console.log(err);
                });

                if (this.say === datasCalc.length) {

                  resolve(1);
                }
              });

            });
            promise.then(() => {

              this.dataSourceE.data = [];
              this.dataSourceE.data = datas;
              this.dataSourceE.connect().next(datas);
              this.calculatingPersonel = this.languageMap['Amir Bilgileri oluşturuldu.'].labelName;
              this.scoreLabel = 'Transfer'
            });
          }
        }
      } else break;
    }
    // }
  }



  check(e) {
    this.transferTable.forEach(element => {
      if (element.DestinationField === e.value) {
        element.Active = e.checked;
        if (!e.checked) element.SourceField = '';
      }
    });
    this.controlPrimaryFields();
  }

  controlPrimaryFields() {

    this.primaryNotSelected = true;
    this.dataSource.data.forEach(element => {
      var jsonStr = '{}';
      var obj = JSON.parse(jsonStr);
      let say = 0;

      for (let index = 0; index < this.transferTable.length; index++) {

        if (element[this.transferTable[index]['SourceField']] != undefined || (this.transferTable[index]['DefaultValue'] !== null && this.transferTable[index]['DefaultValue'] !== '')) {
          {

            obj[this.transferTable[index]['DestinationField']] = (element[this.transferTable[index]['SourceField']]);
            if (this.transferTable[index]['DestinationField'] == 'CompanyCode') say++;
            if (this.transferTable[index]['DestinationField'] == 'Code') say++;
            if (this.transferTable[index]['DestinationField'] == 'Name') say++;
            if (this.transferTable[index]['DestinationField'] == 'Surname') say++;
            if (this.transferTable[index]['DestinationField'] == 'PassCode') say++;
            if (this.transferTable[index]['DestinationField'] == 'PassDate') say++;
            if (this.transferTable[index]['DestinationField'] == 'StartingDate') say++;
            if (this.transferTable[index]['DestinationField'] == 'ShiftGroupCode') say++;
            if (this.transferTable[index]['DestinationField'] == 'EmployeeTypeCode') say++;
            if (this.transferTable[index]['DestinationField'] == 'DepartmentCode') say++;
          }
        }
      }

      if (say == 10) this.primaryNotSelected = false;

    });
  }


  change(type, dest, e) {


    this.transferTable.forEach(element => {
      if (element.DestinationField === dest) {
        if (type == 'select') { element.SourceField = e.value; }
        if (type == 'text') element.DefaultValue = e.target.value;
        if (type == 'datetime') element.DefaultValue = e.target.value;
        if (type == 'check') element.DefaultValue = e.checked;
      }
      // this.saveEnabled = true;
    });


    this.controlPrimaryFields();

  }


  gotoTab(link) {
    this.activeLinkIndex = link.index;

    if (this.activeLinkIndex === 1) {

      this.primaryNotSelected = true;
      this.calculatingPersonel = '';
      const dialogRef = this.dialog.open(WaitComponent, {
        panelClass: 'transparent',
        disableClose: true
      });

      let arrayTransfer = [];
      this.dataSource.data.forEach(element => {
        var jsonStr = '{}';
        var obj = JSON.parse(jsonStr);
        let say = 0;
        for (let index = 0; index < this.transferTable.length; index++) {
          // element[this.transferTable[index]['SourceField']] != undefined
          if (element[this.transferTable[index]['SourceField']] != undefined)
            obj[this.transferTable[index]['DestinationField']] = (element[this.transferTable[index]['SourceField']]);
          if (this.transferTable[index]['DefaultValue'] !== null && this.transferTable[index]['DefaultValue'] !== '')
            obj[this.transferTable[index]['DestinationField']] = this.transferTable[index]['DefaultValue'];

        }

        obj.Rownum = element["__rowNum__"];
        arrayTransfer.push(obj);

      });

      this.dataSourceE.data = arrayTransfer;
      this.primaryNotSelected = false;
      dialogRef.close();
    }


  }

  getPersonnelTransfer() {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });


    this.personnelService.GetPersonnelTransfer()
      .subscribe((res: any[]) => {

        this.transferTable = res;
        let selectedColumnsE = [];
        for (let index2 = 0; index2 < this.transferTable.length; index2++) {

          selectedColumnsE.push({
            label: this.transferTable[index2].DestinationField,
            property: this.transferTable[index2].DestinationField,
            type: 'text', cssClasses: ['text-secondary', 'w-10']
          });
        }

        this.columnsE = selectedColumnsE;
        this.visibleColumnsE = this.columnsE.map(column => column.property);

        this.controlPrimaryFields();
        dialogRef.close();
      }, err => {

        dialogRef.close();
        console.log(err);

      });

  }



  getAlphabetIndex(Index) {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    return ALPHABET[Index];
  }



  onFileSelected(event) {
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
  onTabChanged($event) {
    this.selectedIndex = $event.index;



  }



  resize(type) {
    if (type == 'fullwidth')
      this.layoutService.collapseSidenav();
    else
      this.layoutService.expandSidenav();

  }

  ngAfterViewInit() {
    this.dataSourceE.paginator = this.usrPaginator;
    // this.dataSource.sort = this.sort;
  }

}
