import { LanguageMap } from '../../../app/pages/interfaces/language.interface';
import AppUtil from '../../../app/pages/interfaces/util';
import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  Inject, ViewChild, Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import icBookmarks from '@iconify/icons-ic/twotone-bookmarks';
import fabric from '@iconify/icons-emojione/factory';
import emojioneUS from '@iconify/icons-emojione/flag-for-flag-united-states';
import emojioneTR from '@iconify/icons-emojione/flag-for-flag-turkey';
import emojioneDE from '@iconify/icons-emojione/flag-for-flag-germany';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icClose from '@iconify/icons-ic/twotone-close';
import { ConfigService } from '../../services/config.service';
import { map } from 'rxjs/operators';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icAssignmentTurnedIn from '@iconify/icons-ic/twotone-assignment-turned-in';
import icBallot from '@iconify/icons-ic/twotone-ballot';
import icDescription from '@iconify/icons-ic/twotone-description';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import { NavigationService } from '../../services/navigation.service';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import { PopoverService } from '../../components/popover/popover.service';
import { MegaMenuComponent } from '../../components/mega-menu/mega-menu.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFavorite from '@iconify/icons-ic/favorite';
import icFavoriteBorder from '@iconify/icons-ic/favorite-border';
import { AuthorizationService } from './../../../../src/app/pages/services/authorization.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from './../../../../src/app/pages/services/login.service';
import { NavigationDropdown, NavigationItem, NavigationLink, NavigationSubheading } from '../../../@vex/interfaces/navigation-item.interface';
@Component({
  selector: 'vex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() mobileQuery: boolean;  
  language: any = []; languageMap: LanguageMap = {};
  @Input()
  @HostBinding('class.shadow-b')
  hasShadow: boolean;

  navigationItems = this.navigationService.items;
  
  isHorizontalLayout$ = this.configService.config$.pipe(map(config => config.layout === 'horizontal'));
  isVerticalLayout$ = this.configService.config$.pipe(map(config => config.layout === 'vertical'));
  isNavbarInToolbar$ = this.configService.config$.pipe(map(config => config.navbar.position === 'in-toolbar'));
  isNavbarBelowToolbar$ = this.configService.config$.pipe(map(config => config.navbar.position === 'below-toolbar'));

  icSearch = icSearch;
  fabric=fabric;
  icBookmarks = icBookmarks;
  emojioneUS = emojioneUS;
  icFavorite=icFavorite;
  icFavoriteBorder=icFavoriteBorder;
  emojioneTR=emojioneTR;
  icClose=icClose;
  emojioneDE = emojioneDE;
  icMenu = icMenu;
  icPersonAdd = icPersonAdd;
  icAssignmentTurnedIn = icAssignmentTurnedIn;
  icBallot = icBallot;
  icDescription = icDescription;
  icAssignment = icAssignment;
  icReceipt = icReceipt;
  icDoneAll = icDoneAll;
  icArrowDropDown = icArrowDropDown;
  result: {answer:string,value:any};
  companies: any = [];
  constructor(private layoutService: LayoutService,
              private configService: ConfigService,
              private navigationService: NavigationService,
              public authorizationService: AuthorizationService,
              public dialog: MatDialog,
              public loginService: LoginService,
              private popoverService: PopoverService
              ) { }

  ngOnInit() {
    this.language = sessionStorage.getItem('Lng');
    this.getCompanies();
    this.languageMap=AppUtil.getLabels();  
  }

  
  getCompanies() {
    let data;
    this.authorizationService.GetCompanies()
      .subscribe((res) => {
 
        Object.keys(res).forEach((key) => {
          let data = { kodu: res[key].ID, adi: res[key].Name };
          this.companies.push(data);

        });
 

      }, err => {
        console.log(err);

      });

  }

  
  openDialog() {


    console.log(this.companies);
    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: this.companies, temp2: JSON.parse(sessionStorage.getItem('CompanyId')), temp3:this.languageMap['Şirket Seçimi Yapınız'].labelName,temp4:this.languageMap['Şirket'].labelName,
         Evet:this.languageMap['Evet'].labelName,
        Hayir:this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result.answer === "Yes") {
        
        let firmName='';
        Object.keys(this.companies).forEach((key) => {
          if (this.companies[key].kodu==result.value)
          firmName= this.companies[key].adi;

        });
        
        console.log(firmName);
        sessionStorage.setItem('CompanyId', JSON.stringify(result.value));
        sessionStorage.setItem('Firmname',JSON.stringify(firmName));
        
        if (localStorage.getItem('Remember')) 
        {
        localStorage.setItem('CompanyId', JSON.stringify(result.value));     
         localStorage.setItem('Firmname', JSON.stringify(firmName));     
        }

        this.loginGetMenu();    
        // window.location.reload();   

      }
    });
  }

  loginGetMenu()
  {
    this.loginService.LoginGetMenu(localStorage.getItem('Lng')).subscribe(menuItems => {
      this.navigationService.items=<NavigationItem[]>(menuItems);
      sessionStorage.setItem('Menus',JSON.stringify(this.navigationService.items)); 
      // this.router.navigate(['/dashboards/analytics']);  
      // this.router.navigate(['/apps/personnel/table']);  

      // this.router.navigate(['/apps/personnel/table']);  
      window.location.reload();   
      
    })

  }

  openQuickpanel() {
    this.layoutService.openQuickpanel();
  }

  openSidenav() {
    this.layoutService.openSidenav();
  }

  openMegaMenu(origin: ElementRef | HTMLElement) {
    this.popoverService.open({
      content: MegaMenuComponent,
      origin,
      width: '800px',
      position: [
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });
  }

  openSearch() {
    this.layoutService.openSearch();
  }
}

@Component({
  selector: 'definitions',
  template: `
  <form [formGroup]="form">
       <div mat-dialog fxLayout="row" fxLayoutAlign="space-between center">
          <div><h3>{{data.temp3}}</h3></div>
          <button type="button" mat-icon-button (click)="close('No answer')" tabindex="-1">
              <mat-icon [icIcon]="icClose"></mat-icon>
          </button>
      </div>
      <mat-dialog-content>      
      <mat-form-field style="width: 100%;" appearance="outline">
      <mat-label>{{data.temp4}}</mat-label>

      <mat-select style="width: 100%;" formControlName="CompanyID"   [value]="data.temp2">
                   
      <mat-option *ngFor="let services of data.temp1"   [value]="services.kodu">
                      {{services.adi}}
                    </mat-option>   
      </mat-select>
       </mat-form-field>
      </mat-dialog-content>


      <mat-dialog-actions align="end">
      <button mat-button color="primary" (click)="close({answer:'Yes',value:form.value.CompanyID})">{{data.Evet}}</button>
      <button mat-button (click)="close({answer:'No',value:null})">{{data.Hayir}}</button>
      </mat-dialog-actions>
      </form>
  `
})

export class DemoDialogComponent {

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder) {
  }

  icClose = icClose;
  form = this.fb.group({
    CompanyID: this.data.temp2});



  close(answer: {}) {
    this.dialogRef.close(answer);
  }
}