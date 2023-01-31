// import { Component, Inject, OnInit } from '@angular/core';
import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional, Output, SimpleChange } from '@angular/core';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { SubWorkingtypesDefinitionsComponent } from './subworkingtypes-definitions.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { filter } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';
import { WaitComponent } from '../wait/wait.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
//  import { Definition,DefinitionHourDetail } from './../definitions/interfaces/definition.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import { DefinitionsService } from '../services/definitions.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { untilDestroyed } from 'ngx-take-until-destroy';
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
import { formatDate, Time } from "@angular/common";
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule, FormControlDirective, FormControlName } from '@angular/forms';
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
  selector: 'vex-workingtypes-definitions-item',
  templateUrl: './workingtypes-definitions-item.html',
  styleUrls: ['./workingtypes-definitions-item.scss'],
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



export class WorkingtypesDefinitionsItemComponent implements OnInit {
  language: any = []; languageMap: LanguageMap = {};
  tableData: any = { deneme: '' };
  public maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/];
  static id = 100;

  @Input() columns = ['ID', 'Code', 'Type', 'Multiplier', 'LowerLimit', 'UpperLimit', 'Actions'];
  @Input() tabSelected: boolean;
  @Input() saveClick: boolean;
  @Input() selectedIndex: number = 0;
  @Input() tab: number = 0;
  @Input() formOnay: boolean = false;
  @Input() roundingHours: any = [];
  @Input() roundingDays: any = [];
  @Input() workingTypesType: any = [];
  @Input() workingDistTypes: any = [];
  @Input() screenName: '';
  @Input() onTabChanged = new EventEmitter<any>();
  @Output() changeDetectEvent = new EventEmitter<boolean>();
  @Output() tabChanged = new EventEmitter<number>();


  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  icAdd = icAdd;
  icEdit = icEdit;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icMoreHoriz = icMoreHoriz;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  visible = false;
  label = '';
  codeV = false; nameV = false;
  firstDayValueV = false; finalDayValueV = false; plainDayValueV = false;
  firstHourValueV = false; finalHourValueV = false; plainHourValueV = false;
  searchCtrl = new FormControl();
  subcodeV = false; subnameV = false;
  update = false;
  isMobileLayout = false;
  saveClicked = false;
  saveEnabled = false;
  result: string;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<WorkingtypesDefinitionsItemComponent>,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public definitionsService: DefinitionsService,
    private snackbar: MatSnackBar) {



  }


  ngOnChanges(changes: { [property: string]: SimpleChange }) {

    try {
      let change: SimpleChange = changes['saveClick'];
      if (this.saveClicked !== change.currentValue)
        this.save();
      this.saveClicked = change.currentValue;
    } catch (error) {
      console.error(error);
    }
  }


  save() {
    const definition = this.form.value;
    // definition.Type = this.tab == 7 ? 99 : this.tab;
    // definition.Type = this.tab == 7 ? 99 : this.tab;
    // if (this.dataSource == undefined) {
    //   this.waitProgress(this.languageMap['Çalışma Türü Limit tablosu boş olamaz.'].labelName, 3000);
    //   return;
    // }
    // Çalışma Türü Limit tablosu boş olamaz
    // debugger;
    // console.log(this.dataSource);
    // return;
    // if (this.form.invalid) {
    //   console.log(this.form);
    //   return;
    // } 

    if (definition.Code == '' || definition.Name == '') {
      return;
    }
    this.definitionPostWorkingType(definition);
  }


  // onTabChanged($event) {
  // console.log("ahmetttt");

  // }

  // saveItemss($event)
  // {
  //   console.log("ahmetttt");
  // }

  //   onCancel(): void {
  //     this.passedData.cancel = true;
  //     this.dialogRef.close(this.passedData);
  // }

  ngOnInit() {

    // this.dialogRef.keydownEvents().subscribe(event => {
    //   if (event.key === "Escape") {
    //     // this.onCancel();
    //     return;
    //   }
    // });

    console.log(this.defaults);
    const locale = 'en-US';
    this.languageMap = AppUtil.getLabels();
    this.defaults.update ? this.mode = 'update' : this.mode = 'create';
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    this.route.paramMap.subscribe(params => {
      this.update = this.defaults.update;
      if (this.tabSelected === false || !this.defaults.update) {

        this.form = this.fb.group({
          ID: new FormControl({ value: 0, disabled: !this.defaults.auth }),
          Code: new FormControl({ value: '', disabled: !this.defaults.auth }, Validators.required),
          Name: new FormControl({ value: '', disabled: !this.defaults.auth }, Validators.required),
          // Type: new FormControl({value: 0, disabled: !this.defaults.auth},Validators.required),
          Type: new FormControl({ value: this.tab, disabled: !this.defaults.auth }),
          Multiplier: new FormControl({ value: 100, disabled: !this.defaults.auth }),
          Saturday: new FormControl({ value: false, disabled: !this.defaults.auth }),
          SaturdayDay: new FormControl({ value: false, disabled: !this.defaults.auth }),
          SaturdayHour: new FormControl({ value: false, disabled: !this.defaults.auth }),
          Weekend: new FormControl({ value: false, disabled: !this.defaults.auth }),
          WeekendDay: new FormControl({ value: false, disabled: !this.defaults.auth }),
          WeekendHour: new FormControl({ value: false, disabled: !this.defaults.auth }),
          GeneralHoliday: new FormControl({ value: false, disabled: !this.defaults.auth }),
          GeneralHolidayDay: new FormControl({ value: false, disabled: !this.defaults.auth }),
          GeneralHolidayHour: new FormControl({ value: false, disabled: !this.defaults.auth }),
          LowerLimit: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          UpperLimit: new FormControl({ value: '00:00', disabled: !this.defaults.auth }),
          Compulsory: new FormControl({ value: false, disabled: !this.defaults.auth }),
          Confirmation: new FormControl({ value: false, disabled: !this.defaults.auth }),
          WorkCalculator: new FormControl({ value: false, disabled: !this.defaults.auth }),
          LeaveContinued: new FormControl({ value: false, disabled: !this.defaults.auth }),
          ReportCode: new FormControl({ value: '', disabled: !this.defaults.auth }),
          IntegrationCode: new FormControl({ value: '', disabled: !this.defaults.auth }),
          EqualizationDegrees: new FormControl({ value: 0, disabled: !this.defaults.auth }),
          RoundingDayID: new FormControl({ value: 0, disabled: !this.defaults.auth }),
          RoundingHourID: new FormControl({ value: 0, disabled: !this.defaults.auth })
        });
      }
      else {

        const lowerLimits = this.defaults.def.LowerLimit !== undefined ? formatDate(this.defaults.def.LowerLimit, 'HH:mm', locale) : '00:00';
        const upperLimits = this.defaults.def.UpperLimit !== undefined ? formatDate(this.defaults.def.UpperLimit, 'HH:mm', locale) : '00:00';
        this.form = this.fb.group({
          ID: [this.defaults.def.ID || 0],
          Code: new FormControl({ value: this.defaults.def.Code || '', disabled: !this.defaults.auth }, Validators.required),
          Name: new FormControl({ value: this.defaults.def.Name || '', disabled: !this.defaults.auth }, Validators.required),
          Type: new FormControl({ value: this.defaults.def.Type || '', disabled: !this.defaults.auth }),
          RoundingDayID: new FormControl({ value: this.defaults.def.RoundingDayID || 0, disabled: !this.defaults.auth }),
          RoundingHourID: new FormControl({ value: this.defaults.def.RoundingHourID || 0, disabled: !this.defaults.auth }),
          Multiplier: new FormControl({ value: this.defaults.def.Multiplier || 100, disabled: !this.defaults.auth }),
          Saturday: new FormControl({ value: this.defaults.def.Saturday || false, disabled: !this.defaults.auth }),
          SaturdayDay: new FormControl({ value: this.defaults.def.SaturdayDay || false, disabled: !this.defaults.auth }),
          SaturdayHour: new FormControl({ value: this.defaults.def.SaturdayHour || false, disabled: !this.defaults.auth }),
          Weekend: new FormControl({ value: this.defaults.def.Weekend || false, disabled: !this.defaults.auth }),
          WeekendDay: new FormControl({ value: this.defaults.def.WeekendDay || false, disabled: !this.defaults.auth }),
          WeekendHour: new FormControl({ value: this.defaults.def.WeekendHour || false, disabled: !this.defaults.auth }),
          GeneralHoliday: new FormControl({ value: this.defaults.def.GeneralHoliday || false, disabled: !this.defaults.auth }),
          GeneralHolidayDay: new FormControl({ value: this.defaults.def.GeneralHolidayDay || false, disabled: !this.defaults.auth }),
          GeneralHolidayHour: new FormControl({ value: this.defaults.def.GeneralHolidayHour || false, disabled: !this.defaults.auth }),
          LowerLimit: new FormControl({ value: lowerLimits, disabled: !this.defaults.auth }),
          UpperLimit: new FormControl({ value: upperLimits, disabled: !this.defaults.auth }),
          Compulsory: new FormControl({ value: this.defaults.def.Compulsory || false, disabled: !this.defaults.auth }),
          Confirmation: new FormControl({ value: this.defaults.def.Confirmation || false, disabled: !this.defaults.auth }),
          WorkCalculator: new FormControl({ value: this.defaults.def.WorkCalculator || false, disabled: !this.defaults.auth }),
          LeaveContinued: new FormControl({ value: this.defaults.def.LeaveContinued || false, disabled: !this.defaults.auth }),
          ReportCode: new FormControl({ value: this.defaults.def.ReportCode || '', disabled: !this.defaults.auth }),
          IntegrationCode: new FormControl({ value: this.defaults.def.IntegrationCode || '', disabled: !this.defaults.auth }),
          EqualizationDegrees: new FormControl({ value: this.defaults.def.EqualizationDegrees || 0, disabled: !this.defaults.auth }),

        });

        if (this.defaults.def.ID !== undefined)
          this.definitionGetTypesDistibution(this.defaults.def.ID);

      }

      this.form.valueChanges.subscribe(
        result => {
          this.saveEnabled = true;
          this.changeDetectEvent.emit(this.saveEnabled && !this.form.invalid);
        });

      this.form.setValidators([
        this.oneOfControlRequired(
          this.form.get('RoundingDayID'),
          this.form.get('RoundingHourID'),
        )
      ]);



    })

  }

  onFocusOutCode(event: any) {
    // && !this.update

    if (event.target.value.length > 0 && !this.update)
      this.definitionGetTypesByCode(event.target.value);
    // console.log(event.target.value);
    // this.definitionGetTypesDistibution(null, event.target.value, null);
  }


  definitionGetRoundingTypes(type, row) {
    let data;
    let id = 0;
    if (row === null) id = 0; else id = row.ID;
    this.definitionsService.DefinitionGetType(type, id)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { kodu: res[key].id, adi: res[key].name };
          if (type === 'roundingHour')
            this.roundingHours.push(data);
          if (type === 'roundingDay')
            this.roundingDays.push(data);;
        });

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
          if (type === 'WorkingTypes')
            this.workingTypesType.push(data);
          if (type === 'WorkingDistTypes')
            this.workingDistTypes.push(data);;
        });

        // console.log(this.workingTypesType);
        // console.log(this.workingDistTypes);


      }, err => {
        console.log(err);

      });

  }

  focusToFormControlName(name) {
    (<any>this.form.get(name)).nativeElement.focus();
  }

  openSnackBar(message) {


    let configSuccess: MatSnackBarConfig = {
      panelClass: ['mat-toolbar', 'mat-primary', 'success-snackbar'],
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    };

    this.snackbar.openFromComponent(InfoComponent, {
      data: { temp: message, close: this.languageMap['Kapat'].labelName }, ...configSuccess
    });


  }


  definitionGetTypesByCode(code) {
    // let id=0;
    // if (row===null) id=0; else if (row.ID===undefined) id=0; else id=row.ID;

    console.log(code);
    this.definitionsService.DefinitionGetWorkingTypesByCode(code)
      .subscribe((res: any[]) => {

        if (res.length > 0) {
          // this.waitProgress("İlgili kod tanımlıdır, kullanılamaz.", 3000);
          this.openSnackBar("İlgili kod tanımlıdır, kullanılamaz.");
          this.form.reset();
          this.form.patchValue({ ID: 0, EqualizationDegrees: 0, Multiplier:100, RoundingDayID: 0, RoundingHourID: 0, LowerLimit: '00:00', UpperLimit: '00:00' });
          this.focusToFormControlName('Code');
          // this.form.patchValue(res[0]);
          // this.definitionGetTypesDistibution(res[0].ID);
        } else {
          this.form.reset();
          this.form.patchValue({ ID: 0, Code: code, EqualizationDegrees: 0,Multiplier:100, RoundingDayID: 0, RoundingHourID: 0, LowerLimit: '00:00', UpperLimit: '00:00' });
        }
        // this.tabChanged.emit(res[0].Type);
        // this.tabChanged.emit(res[0].Type);
        // this.form.value.Code=code;
        // this.form.patchValue(res[0]);      
        // this.definitionGetRoundingTypes('roundingHour',null);
        // this.definitionGetRoundingTypes('roundingDay',null);
        // this.definitionGetWorkingTypeEnums('WorkingTypes',null);
        // this.definitionGetWorkingTypeEnums('WorkingDistTypes',null);
      });


  }


  oneOfControlRequired(...controls: AbstractControl[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      for (const aControl of controls) {
        if ((aControl.value > 0)) {
          return null;
        }
      }
      return { oneOfRequired: true };
    };
  }


  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  definitionGetTypesDistibution(row) {
    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    let id = 0;
    if (row === null) id = 0; else id = row;
    this.definitionsService.DefinitionGetWorkingTypeDistribution(id)
      .subscribe((res: any[]) => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err);

      });

  }

  deleteDistibutionRow(row) {
    this.openDialog(row.ID);

  }


  openDialog(obj) {
    this.dialog.open(DemoDialogComponent3, {
      data: {
        temp1: this.languageMap['Kayıt silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'

    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {

        this.definitionsService.DefinitionDeleteWorkingTypeDist(obj)
          .subscribe((res) => {
            this.definitionGetTypesDistibution(this.defaults.def.ID);
          }, err => {
            console.log(err);

          });

      }
    });
  }

  ngOnDestroy() {
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


  definitionPostWorkingType(definition) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.definitionsService.DefinitionPostWorkingType(definition)
      .subscribe((res: any) => {
        this.form.patchValue({ ID: res[0].ID })
        this.update = true;
        this.saveEnabled = false;
        this.changeDetectEvent.emit(false);
        dialogRef.close();
      }, err => {
        dialogRef.close();
        console.log(err);

      });

  }


  definitionPostWorkingTypeDist(obj) {
    // const dialogRef = this.dialog.open(WaitComponent, {
    //   panelClass: 'transparent',
    //   disableClose: true
    // });

    obj.WorkingTypeID = this.form.value.ID;
    this.definitionsService.DefinitionPostWorkingTypeDist(obj)
      .subscribe((res) => {
        // debugger;
        this.definitionGetTypesDistibution(obj.WorkingTypeID);
        // dialogRef.close;
      }, err => {
        // dialogRef.close;
        console.log(err);

      });
  }

  createSubDefinition() {
    const definition = this.form.value;
    this.dialog.open(SubWorkingtypesDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: { ID: 0, workingTypeID: definition.ID, Code: '', State: '', Multiplier: 100 }, workingDistTypes: this.workingDistTypes, screenName: this.screenName, update: false, id: 0, lowerLimit: '00:00', upperLimit: '00:00', },
      disableClose: true

    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {
        this.definitionPostWorkingTypeDist(updatedDefinition);
      }
    });
  }


  updateDistibutionRow(row) {
    const definition = this.form.value;
    this.dialog.open(SubWorkingtypesDefinitionsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: { def: row, update: true, id: row.id, workingDistTypes: this.workingDistTypes },
      disableClose: true

    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {
        this.definitionPostWorkingTypeDist(updatedDefinition);
      }
    });
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

export class DemoDialogComponent3 {

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent3>,
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