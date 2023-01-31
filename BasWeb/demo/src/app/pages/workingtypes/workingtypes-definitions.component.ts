import { LanguageMap } from './../interfaces/language.interface';
import {  Inject, Component, Input,  OnInit, } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icClose1 from '@iconify/icons-ic/close';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { MatSnackBar } from '@angular/material/snack-bar';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import { DefinitionsService } from '../services/definitions.service';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
 
import { Style,StyleService } from './../.../../../../@vex/services/style.service';



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
  selector: 'vex-workingtypes-definitions',
  templateUrl: './workingtypes-definitions.component.html',
  styleUrls: ['./workingtypes.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],

  providers: [
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})



export class WorkingtypesDefinitionsComponent implements OnInit {

  public maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/];
  @Input() languageMap: LanguageMap = {};
  @Input() roundingDays: any = [];;
  @Input() roundingHours: any = [];
  @Input() selectedIndex = 0;
  @Input() workingTypesType: any = [];
  @Input() workingDistTypes: any = [];

  tab = 0;
  form: FormGroup;
  icAdd = icAdd;
  icEdit = icEdit;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icMoreHoriz = icMoreHoriz;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  
  icPerson = icPerson;
  icClose1 = icClose1;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  isMobileLayout = false;
  saveClick = false;
  saveEnabled = false; isSaved=false;
  result: string;
  backgroundColor:string;
  selectedStyle$ = this.styleService.style$;
  Style = Style;
  
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<WorkingtypesDefinitionsComponent>,
    private fb: FormBuilder,
    private styleService: StyleService,
    private dialog: MatDialog,
    public definitionsService: DefinitionsService,
    private snackbar: MatSnackBar) {
  }

  closeDialog() {
    if (this.saveEnabled)
      this.openDialog(0, this.languageMap['Değişiklikler iptal edilecek.'].labelName,'save');
    else
      this.dialogRef.close(this.isSaved);
 
  }


  openDialog(ID, Temp, MethodName) {
    this.dialog.open(DemoDialogComponent2, {
      data: {
        temp1: Temp, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
          this.dialogRef.close(false);
      }
    });
  }

  changeDetectEvent(saveEnabled) {    
 
    this.saveEnabled = saveEnabled;
  }


  save() { this.saveClick = !this.saveClick; this.isSaved=true; }

  ngOnInit() {
 
    // console.log(this.selectedStyle$.Style.dark);
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    // this.backgroundColor=JSON.parse(sessionStorage.getItem('Color'));
    this.languageMap = this.defaults.languageMap;
    this.roundingDays = this.defaults.roundingDays;
    this.roundingHours = this.defaults.roundingHours;

    this.workingTypesType = this.defaults.workingTypesType;
    this.workingDistTypes = this.defaults.workingDistTypes;
 
    this.selectedIndex = (this.defaults.def === null ? 0 : this.defaults.def.Type);
  }


  onTabChanged($event) {
    this.selectedIndex = $event.index;
  }

  tabChanged(Index) {
    this.selectedIndex =Index;
  }


  ngOnDestroy() {
  }

}


@Component({
  selector: 'definitions',
  template: `
  <div mat-dialog fxLayout="row" fxLayoutAlign="space-between center"  >
  <div><h3>{{data.temp1}}</h3></div>
          <button type="button" mat-icon-button (click)="close('No answer')" tabindex="-1">
              <mat-icon [icIcon]="icClose"></mat-icon>
          </button>
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

export class DemoDialogComponent2 {

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent2>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}