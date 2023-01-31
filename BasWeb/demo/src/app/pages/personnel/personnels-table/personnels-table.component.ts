import { LanguageMap } from './../../interfaces/language.interface';
import AppUtil from './../../interfaces/util';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Component, OnInit, Inject } from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icColumns from '@iconify/icons-fa-solid/columns';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { FormControl } from '@angular/forms';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonnelsEditComponent } from '../components/personnels-edit/personnels-edit.component';
import { PersonnelsColumnsComponent } from '../components/personnels-columns/personnels-columns.component';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { AuthorizationService } from '../../services/authorization.service';
import { PersonnelService } from '../../services/personnel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import icClose from '@iconify/icons-ic/twotone-close';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { WaitComponent } from '../../wait/wait.component';
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
  selector: 'vex-personnels-table',
  templateUrl: './personnels-table.component.html',
  styleUrls: ['./personnels-table.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})


export class PersonnelsTableComponent implements OnInit {

  searchCtrl = new FormControl();
  subFooter: boolean = false;
  menuOpen = false;
  activeCategory: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business' = 'all';
  tableData: any;
  tableColumns: any[] = [];
  breadcrumbs: string[];
  icAdd = icAdd;
  icStar = icStar;
  icSearch = icSearch;
  icContacts = icContacts;
  icMenu = icMenu;
  icPersonAdd = icPersonAdd;
  icColumns = icColumns;
  href: string;
  result: string;
  pageauth = { write: false, delete: false, update: false }
  tabAuth: any[];

  language: any = []; languageMap: LanguageMap = {};
  isMobileLayout = false;
  dialogRef: any;
  constructor(private dialog: MatDialog,
    private snackbar: MatSnackBar,
    public authorizationService: AuthorizationService,
    public personnelService: PersonnelService,
    private adapter: DateAdapter<any>,
    private route: ActivatedRoute,
    private router: Router) {

  }


  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.languageMap = AppUtil.getLabels();
      window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
      this.isMobileLayout = window.innerWidth <= 991;
      this.subFooter = JSON.parse(localStorage.getItem('SubFooter'));
      this.breadcrumbs = [this.languageMap['Personel'].labelName, this.languageMap['Personel Bilgileri'].labelName];
      this.adapter.setLocale("tr");
      this.href = this.router.url;
      this.getUser(JSON.parse(localStorage.getItem('Username')), this.href.replace(/\//g, '@'));
      const obj = { type: 'workType', code: 0 };
      let tabs = [
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Temel Bilgiler' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Amir Bilgileri' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Amir Bağlı Personeller' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Kimlik Bilgisi' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel İletişim Bilgisi' },
        { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), tabname: 'Personel Arşiv' }
      ]
      // this.getUserTabs(tabs);

      this.authorizationService.GetUserTabs(tabs)
        .subscribe((res: any[]) => {
          this.tabAuth = res;

          this.personnelGetFilterColumns();
          this.getPersonnel(null);

        }, err => {
          console.log(err);

        });

    })
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



  getPersonnel(obj) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    // var obj={FilterType:obj.Type, FilterCode:obj.Code}
    this.personnelService.GetPersonnel(obj)
      .subscribe((res) => {


        console.log(res);
        this.tableData = res;
        dialogRef.close();

      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }


  // personnelGetQuery(obj) {
  //   getPersonnel(obj);
  // const dialogRef = this.dialog.open(WaitComponent, {
  //   panelClass: 'transparent',
  //   disableClose: true
  // });

  // console.log(obj);

  // this.personnelService.PersonnelGetQuery(obj.type, obj.code)
  //   .subscribe((res: any[]) => {
  //     this.tableData = res;
  //     dialogRef.close();

  //   }, err => {
  //     dialogRef.close();
  //     console.log(err);
  //   });
  // }


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



  getUserTabs(tabs) {
    this.authorizationService.GetUserTabs(tabs)
      .subscribe((res: any[]) => {
        this.tabAuth = res;

        this.personnelGetFilterColumns();
        this.getPersonnel(null);

      }, err => {
        console.log(err);

      });
  }

  personnelGetFilterColumns() {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    let selectedColumns = [];
    this.personnelService.PersonnelGetFilterColumns('BAS_Employee')
      .subscribe((res) => {
        const arr: any = res;
        arr.forEach(element => {
          if (element.Active && element.ColumnName === 'Photo') {
            const dataType = 'image';
            const data = { label: element.Label, property: element.ColumnName, type: dataType, cssClasses: ['font-medium'] };
            selectedColumns.push(data);
          }
        });

        arr.forEach(element => {
          if (element.Active) {
            if (element.ColumnName === 'Photo') return;
            const dataType = (element.DATA_TYPE === 'datetime' ? 'date' : (element.ColumnName === 'Chief' ? 'button' : (element.ColumnName === 'Photo' ? 'image' : (element.DATA_TYPE === 'bit' ? 'checkbox' : 'text'))));
            const data = { label: element.Label, property: element.ColumnName, type: dataType, cssClasses: ['font-medium'] };
            selectedColumns.push(data);
          }
        });



        selectedColumns.push({ label: 'Aksiyon', property: 'menu', type: 'button', cssClasses: ['text-secondary', 'w-10'] });

        console.log(selectedColumns);
        this.tableColumns = selectedColumns;
        dialogRef.close();
      }, err => {

        dialogRef.close();


      });
  }




  openContact(row) {
    this.dialog.open(PersonnelsEditComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { type: 'open', contactId: row.ID || null, chief: row.Chief || null, auth: false, tabAuth: this.tabAuth },
      disableClose: true,
      width: this.isMobileLayout ? 'none' : '1100px',
      height: '770px',
      maxWidth: this.isMobileLayout ? '95vw' : '80vw'
      // panelClass: 'padding:0px'
    }).afterClosed().subscribe(result => {
      if (result)
        this.getPersonnel(null);
    });
  }

  createPersonnel(id, chief) {

    this.dialog.open(PersonnelsEditComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { type: 'create', contactId: id || null, chief: chief || null, auth: true, tabAuth: this.tabAuth },
      width: '1100px',
      height: '770px',
      disableClose: true,
      maxWidth: this.isMobileLayout ? '95vw' : '80vw'
      // panelClass: 'padding:0px'
    }).afterClosed().subscribe(result => {
      if (result)
        this.getPersonnel(null);
      const obj = { type: 'workType', code: 0 };
      this.personnelService.PersonnelGetQuery(obj.type, obj.code)

    })
  }



  editContact(row) {
    // debugger;
    this.dialog.open(PersonnelsEditComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { type: 'edit', contactId: row.ID || null, chief: row.Chief || null, auth: true, tabAuth: this.tabAuth },
      width: '1100px',
      height: '770px',
      disableClose: true,
      maxWidth: this.isMobileLayout ? '100vw' : '80vw'
      // panelClass: 'padding:0px'
    }).afterClosed().subscribe(result => {
      if (result)
        this.getPersonnel(null);
    });
  }




  createColumns() {


    this.dialog.open(PersonnelsColumnsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { contactId: null, auth: true, tabAuth: this.tabAuth },
      width: '450px',
      disableClose: true,
    }).afterClosed().subscribe(result => {
      if (result)
        this.ngOnInit();
    })


  }
  deleteContactWarning2(id) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: '', temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '50vh'
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {

        this.personnelService.DeletePersonnel(id)
          .subscribe((res) => {
            this.getPersonnel(null);
          }, err => {
            console.log(err);

          });

      }
    });
  }

  deleteContactWarning1(id) {
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: 'Seçilen Personele Ait Tüm Bilgiler Silinecektir.', temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '50vh'
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {

        this.deleteContactWarning2(id);

      }

    });

  }


  openSnackBar(message) {

    console.log(message);
    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'],
      duration: 2000,
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


  deleteContact(id) {


    const obj = this.tableData.find(x => x.ID == id);

    console.log(obj);
    if (obj !== undefined) {
      if (obj.LeavingDate == null) {
        this.openSnackBar(this.languageMap["İşten Çıkış Tarihi boş olamaz"].labelName);
        return;
      }
    }


    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: this.languageMap['Personel bilgisi silinecektir.'].labelName, temp2: '', Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '50vh'
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {
        this.deleteContactWarning1(id);
      }
    });
  }

  toggleStar(id) {
    const contact = this.tableData.find((c: { ID: any; }) => c.ID === id);

  }


  openMenu() {
    this.menuOpen = true;
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