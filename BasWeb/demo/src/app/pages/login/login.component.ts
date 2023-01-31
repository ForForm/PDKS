import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icPersonOutline from '@iconify/icons-ic/twotone-people-outline';
import icStyle from '@iconify/icons-ic/style';
import icScore from '@iconify/icons-ic/baseline-score';
import icHoliday from '@iconify/icons-ic/home';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icFavorite from '@iconify/icons-ic/favorite';
import icFavoriteBorder from '@iconify/icons-ic/favorite-border';
import icClose from '@iconify/icons-ic/twotone-close';
import icDescription from '@iconify/icons-ic/description';
import icReport from '@iconify/icons-ic/outline-table-chart';
import icSystem from '@iconify/icons-ic/personal-video';
import { ConfigService } from './../../../@vex/services/config.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Inject, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { LoginService } from '../services/login.service';
import { NavigationService } from '../../../@vex/services/navigation.service';
import { AuthorizationService } from '../services/authorization.service';
import { NavigationDropdown, NavigationItem, NavigationLink, NavigationSubheading } from '../../../@vex/interfaces/navigation-item.interface';
import { MAT_DIALOG_DATA,  MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import emojioneUS from '@iconify/icons-emojione/flag-for-flag-united-states';
import emojioneTR from '@iconify/icons-emojione/flag-for-flag-turkey';
import { WaitComponent } from '../wait/wait.component';
import * as _moment from "moment";
import { StyleService } from './../../../@vex/services/style.service';
const moment = _moment;
import { DatePipe } from '@angular/common';
import { PasswordStrengthValidator } from "./password-strength.validators";
import { ReactiveFormsModule, FormControlDirective, FormControlName } from '@angular/forms';




const originFormControlNameNgOnChanges = FormControlName.prototype.ngOnChanges;
FormControlName.prototype.ngOnChanges = function () {
  try {
    const result = originFormControlNameNgOnChanges.apply(this, arguments);
    this.control.nativeElement = this.valueAccessor._elementRef.nativeElement;
    return result;
  }
  catch (error) { }

};

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms]
})
export class LoginComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  form: FormGroup;
  formRe: FormGroup;
  inputType = 'password';
  visible = false;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icFavorite = icFavorite;
  icFavoriteBorder = icFavoriteBorder;
  companies: any = [];
  emojioneUS = emojioneUS;
  emojioneTR = emojioneTR;
  lng = 'tr-TR';
  newYear = false;
  loginAttempt = false;
  isExpired = false;
  Forgot = false;
  icClose = icClose;

  constructor(private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    public loginService: LoginService,
    private styleService: StyleService,
    public navigationService: NavigationService,
    public configService: ConfigService,
    public authorizationService: AuthorizationService
  ) { }


  ngOnInit() {

    let today = moment.utc(new Date());//moment(new Date());
    if (today.utc().date() === 31 && (today.utc().month() + 1 == 12)) this.newYear = true;
    else if (today.utc().date() === 2 && (today.utc().month() + 1 == 1)) this.newYear = true;
    else this.newYear = false;

    if (localStorage.getItem('Labels') == null) {
      this.loginGetLabels();
    } else { this.languageMap = AppUtil.getlocalStorageLabels(); }

    this.languageMap = AppUtil.getlocalStorageLabels();
    this.form = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      CompanyId: ['', Validators.required],
      Remember: [false]
    });

    this.formRe = this.fb.group({
      UserID: '',
      PasswordNew: ['', [Validators.required, Validators.minLength(8), PasswordStrengthValidator]],
      RePasswordNew: ['', [Validators.required, Validators.minLength(8), PasswordStrengthValidator]],

    });

    this.getCompanies();


  }



  openDialog() {


    if (this.form.value.Username=='' || this.form.value.CompanyId=='') return;

    this.dialog.open(DemoDialogComponent, {
      data: { temp1:this.languageMap['Yeni şifreniz mail adresinize iletilecektir.'].labelName, temp2:this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName,Evet:this.languageMap['Evet'].labelName,
      Hayir:this.languageMap['Hayır'].labelName  }, 
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      
      if (result==="Yes")
      {
         this.forgotPassword();
           
      }
    });
  }

  forgotPassword()
  {


    this.loginService.SendPassword(this.form.value.CompanyId, this.form.value.Username)
      .subscribe((res) => {



         if (res[0].ReturnCode!=="200")
        this.waitProgress(this.languageMap[res[0].ReturnDscr].labelName,2000);
        else
        this.waitProgress(this.languageMap['Yeni şifreniz tanımlı mail adresinize iletilmiştir.'].labelName,5000);
        // console.log(res);
        // Object.keys(res).forEach((key) => {
        //   let data = { kodu: res[key].ID, adi: res[key].Name };
        //   this.companies.push(data);

        // });

        // if (localStorage.getItem('Remember')) {
        //   this.form.patchValue({
        //     Username: JSON.parse(localStorage.getItem('Username')), Password: JSON.parse(localStorage.getItem('Password')), CompanyId: JSON.parse(localStorage.getItem('CompanyId')),
        //     Remember: JSON.parse(localStorage.getItem('Remember'))
        //   });
        //   this.lng = localStorage.getItem('Lng');
        // }

      }, err => {
        console.log(err);

      });

  }

  waitProgress(message, timer) {
    this.snackbar.dismiss();
    let config = new MatSnackBarConfig();
    if (timer !== undefined) {
      config.duration = timer;
      config.verticalPosition = 'top'; config.horizontalPosition = 'center' 

    }
    config.panelClass = ['mat-toolbar', 'mat-primary', 'success-snackbar']
    this.snackbar.open(message, "", config);

  }


  getCompanies() {
    let data;
    this.authorizationService.GetCompanies()
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { kodu: res[key].ID, adi: res[key].Name };
          this.companies.push(data);

        });

        if (localStorage.getItem('Remember')) {
          this.form.patchValue({
            Username: JSON.parse(localStorage.getItem('Username')), Password: JSON.parse(localStorage.getItem('Password')), CompanyId: JSON.parse(localStorage.getItem('CompanyId')),
            Remember: JSON.parse(localStorage.getItem('Remember'))
          });
          this.lng = localStorage.getItem('Lng');
        }

      }, err => {
        console.log(err);

      });

  }


  // getUserlog(UserId) {


  // }

  lngChange(lng) {
    this.lng = lng;
  }

  loginGetMenu() {
    this.loginService.LoginGetMenu(this.lng).subscribe(menuItems => {
      // this.navigationService.items=<NavigationItem[]>(menuItems);

      // this.getUserlog();



      let menuArray: any[] = <NavigationItem[]>(menuItems);
      if (menuArray !== null) {
        Object.keys(menuArray).forEach((key) => {
          if (menuArray[key].icon == "icContactSupport")
            menuArray[key].icon = icContactSupport;
          else if (menuArray[key].icon == "icPersonOutline")
            menuArray[key].icon = icPersonOutline;
          else if (menuArray[key].icon == "icStyle")
            menuArray[key].icon = icStyle;
          else if (menuArray[key].icon == "icScore")
            menuArray[key].icon = icScore;
          else if (menuArray[key].icon == "icHoliday")
            menuArray[key].icon = icHoliday;
          else if (menuArray[key].icon == "icSettings")
            menuArray[key].icon = icSettings;
          else if (menuArray[key].icon == "icDescription")
            menuArray[key].icon = icDescription;
          else if (menuArray[key].icon == "icReport")
            menuArray[key].icon = icReport;
          else if (menuArray[key].icon == "icSystem")
            menuArray[key].icon = icSystem;



          if (menuArray[key].children !== null) {
            Object.keys(menuArray[key].children).forEach((key2) => {
              if (menuArray[key].children[key2].icon == "icContactSupport")
                menuArray[key].children[key2].icon = icContactSupport;
              else if (menuArray[key].children[key2].icon == "icPersonOutline")
                menuArray[key].children[key2].icon = icPersonOutline;
              else if (menuArray[key].children[key2].icon == "icStyle")
                menuArray[key].children[key2].icon = icStyle;
              else if (menuArray[key].children[key2].icon == "icScore")
                menuArray[key].children[key2].icon = icScore;
              else if (menuArray[key].children[key2].icon == "icHoliday")
                menuArray[key].children[key2].icon = icHoliday;
              else if (menuArray[key].children[key2].icon == "icSettings")
                menuArray[key].children[key2].icon = icSettings;
              else if (menuArray[key].children[key2].icon == "icDescription")
                menuArray[key].children[key2].icon = icDescription;
              else if (menuArray[key].children[key2].icon == "icReport")
                menuArray[key].children[key2].icon = icReport;
              else if (menuArray[key].children[key2].icon == "icSystem")
                menuArray[key].children[key2].icon = icSystem;

              if (menuArray[key].children[key2].children !== null) {

                Object.keys(menuArray[key].children[key2].children).forEach((key3) => {

                  if (menuArray[key].children[key2].children[key3].icon == "icContactSupport")
                    menuArray[key].children[key2].children[key3] = icContactSupport;
                  else if (menuArray[key].children[key2].children[key3].icon == "icPersonOutline")
                    menuArray[key].children[key2].children[key3].icon = icPersonOutline;
                  else if (menuArray[key].children[key2].children[key3].icon == "icStyle")
                    menuArray[key].children[key2].children[key3].icon = icStyle;
                  else if (menuArray[key].children[key2].children[key3].icon == "icScore")
                    menuArray[key].children[key2].children[key3].icon = icScore;
                  else if (menuArray[key].children[key2].children[key3].icon == "icHoliday")
                    menuArray[key].children[key2].children[key3].icon = icHoliday;
                  else if (menuArray[key].children[key2].children[key3].icon == "icSettings")
                    menuArray[key].children[key2].children[key3].icon = icSettings;
                  else if (menuArray[key].children[key2].children[key3].icon == "icDescription")
                    menuArray[key].children[key2].children[key3].icon = icDescription;
                  else if (menuArray[key].children[key2].children[key3].icon == "icReport")
                    menuArray[key].children[key2].children[key3].icon = icReport;
                  else if (menuArray[key].children[key2].children[key3].icon == "icSystem")
                    menuArray[key].children[key2].children[key3].icon = icSystem;


                });



              }





            });
          }

          // menuArray[key].favorite = icFavoriteBorder;


        });
      }

      // this.menuList = menuArray;
      this.navigationService.items = menuArray;


      sessionStorage.setItem('Menus', JSON.stringify(this.navigationService.items));

      // this.router.navigate(['/dashboards/analytics']);  

      this.loginGetLabels();


    })

  }

  focusToFormControlName(name) {
    (<any>this.formRe.get(name)).nativeElement.focus();
  }

  loginGetLabels() {
    this.loginService.LoginGetLabels(this.lng).subscribe(res => {
      sessionStorage.setItem('Labels', JSON.stringify(res));
      localStorage.setItem('Labels', JSON.stringify(res));
      // if (this.form.value.Remember) {
      //   localStorage.setItem('Labels', JSON.stringify(res));
      // }
      this.languageMap = AppUtil.getlocalStorageLabels();

      if (this.loginAttempt && (!this.isExpired && !this.Forgot))
        this.router.navigate(['/dashboards/analytics']);
      else {this.form.patchValue({Password:null})}
      //  this.focusToFormControlName('PasswordOld');

    })

  }


  openSnackBar(message) {

    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'],
      duration: 3000,
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


  rePassword() {
    // this.isExpired = false;
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.authorizationService.PostUserLog(this.formRe.value)
      .subscribe((res) => {

        if (res === 409) {
          this.openSnackBar(this.languageMap['Yeni şifreniz son 3 şifrenizden farklı olmalıdır.'].labelName);
          dialogRef.close();
          return;
        }
        else {
          this.form.patchValue({ Password: null });
          if (localStorage.getItem('Remember')) {
            localStorage.setItem('Password', JSON.stringify(''));
          }

          this.formRe.reset();
          this.isExpired = false;
          this.Forgot = false;
          this.router.navigate(['/login']);
          dialogRef.close();
        }
      }
        , err => {
          console.log(err);
          this.waitProgress(err.message, 3000);
          dialogRef.close();

        });

  }


  login() {

    // this.isExpired=true;
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    if (window.innerWidth <= 991 || JSON.parse(localStorage.getItem('SubFooter')) == null) {
      localStorage.setItem('SubFooter', JSON.stringify(true));
      this.configService.updateConfig({
        footer: {
          visible: true
        }
      });
    }


    this.loginService.Login(this.form.value)
      .subscribe((res) => {
        this.formRe.patchValue({ UserID: res[0].ID });

        console.log(res);
        this.authorizationService.GetUserLog(res[0].ID)
          .subscribe((res1) => {

            
            console.log(res);

            if (res[0]['ReturnCode'] !== '200' && !res1[0].IsForced) {
              this.openSnackBar(res[0]['ReturnDscr']);
              this.loginAttempt = false;
              dialogRef.close();
            }
            else {

              this.isExpired = res1[0].IsExpired;
              this.Forgot = res[0].Forgot;
              if (res[0]['ReturnCode'] !== '200' && res1[0].IsForced) { this.isExpired = true;   }
              if (res[0]['ReturnCode'] == '200' && res[0].Forgot) { this.Forgot = true;   }

              if (this.form.value.Remember) {
                localStorage.setItem('Username', JSON.stringify(this.form.value.Username));
                localStorage.setItem('Password', JSON.stringify(this.form.value.Password));
                localStorage.setItem('CompanyId', JSON.stringify(this.form.value.CompanyId));
                localStorage.setItem('Firmname', JSON.stringify(this.form.value.Firmname));
                localStorage.setItem('Lng', this.lng);
                localStorage.setItem('Remember', JSON.stringify(true));
              } else {
                localStorage.removeItem('Username');
                localStorage.removeItem('Password');
                localStorage.removeItem('CompanyId');
                localStorage.removeItem('Remember');
                localStorage.removeItem('Firmname');
                localStorage.removeItem('Lng');
                localStorage.removeItem('Labels');
                localStorage.removeItem('SubFooter');
              }
              // localStorage.setItem('SubFooter', JSON.stringify(true));
              sessionStorage.setItem('CompanyId', JSON.stringify(this.form.value.CompanyId));
              sessionStorage.setItem('Username', JSON.stringify(res[0]['Username']));
              sessionStorage.setItem('Name', JSON.stringify(res[0]['Name']));
              sessionStorage.setItem('Firmname', JSON.stringify(res[0]['Firmname']));
              sessionStorage.setItem('Departmentname', JSON.stringify(res[0]['Departmentname']));
              sessionStorage.setItem('Cadrename', JSON.stringify(res[0]['Cadrename']));
              sessionStorage.setItem('Lng', this.lng);

 

              this.loginGetMenu();
              // this.setUserSession();

              let obj: any = {};
              obj.Username = res[0]['Username'];
              obj.CompanyId = JSON.stringify(this.form.value.CompanyId);
              obj.Active = true;
              this.authorizationService.PostUserSession(obj)
                .subscribe((res) => {
                  Object.keys(res).forEach((key) => { });
                }, err => {
                  console.log(err);

                });

              // this.loginGetLabels();
              //  this.router.navigate(['/apps/personnel/table']);  
              this.loginAttempt = true;
              dialogRef.close();
              // this.waitProgress("Lütfen Bekleyin...", 2000);
              // this.router.navigate(['/dashboards/analytics']);   
            }

          }, err => {
            console.log(err);
          });

      }
        , err => {
          console.log(err);
          this.waitProgress(err.message, 3000);
          dialogRef.close();

        });
  }


  setUserSession() {

    let obj: any;
    obj.Username = JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    obj.Active = true;
    this.authorizationService.PostUserSession(obj)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => { });
      }, err => {
        console.log(err);

      });
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }


  // toggleVisibilityRe() {
  //   if (this.visible) {
  //     this.inputType = 'password';
  //     this.visible = false;
  //     this.cd.markForCheck();
  //   } else {
  //     this.inputType = 'text';
  //     this.visible = true;
  //     this.cd.markForCheck();
  //   }
  // }
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



@Component({
  selector: 'roundings',
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