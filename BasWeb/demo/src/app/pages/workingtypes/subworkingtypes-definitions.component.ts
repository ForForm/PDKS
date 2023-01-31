import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';

// import { Component, Inject, OnInit } from '@angular/core';
import { NgModule,AfterViewInit,Inject,EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional,Output,SimpleChanges } from '@angular/core';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { filter } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icCancel from '@iconify/icons-ic/cancel';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import icAdd from '@iconify/icons-ic/twotone-add';
import { DefinitionsService } from '../services/definitions.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
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
import icClose1 from '@iconify/icons-ic/close';
 


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
  selector: 'vex-subworkingtypes-definitions',
  templateUrl: './subworkingtypes-definitions.component.html',
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



export class SubWorkingtypesDefinitionsComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};  
  public maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/];
  static id = 100;
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  icAdd = icAdd;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icClose1 = icClose1;
  icCancel = icCancel;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  visible=false;
  label='';
  workingTypesStatus: any = [];
  searchCtrl = new FormControl();
  workingTypesCode: any = [];
  workingDistTypes: any = [];
   

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
               private dialogRef: MatDialogRef<SubWorkingtypesDefinitionsComponent>,
              private fb: FormBuilder,
              public definitionsService: DefinitionsService ,       
              private snackbar: MatSnackBar) {
  }

 
 
  closeDialog() {
    this.dialogRef.close();
  }

  
  ngOnDestroy() {
  }
   

  definitionGetTypes(id) {    
    this.definitionsService.DefinitionGetWorkingTypes(id)
    .subscribe((res) => {
      Object.keys(res).forEach((key) => {
        let data = {kodu:res[key].Code, adi:res[key].Name};
        this.workingTypesCode.push(data);
      });
   
    }, err => {
        console.log(err);

    });

  }


  ngOnInit() {
    
    
    // console.log( this.defaults.def);
    const locale = 'en-US'; 
    this.languageMap=AppUtil.getLabels();       
    this.defaults.update?this.mode = 'update':this.mode = 'create';
    this.workingDistTypes=this.defaults.workingDistTypes; 
    console.log(this.defaults);
    

    const lowerLimits= this.defaults.def.LowerLimit!==undefined?formatDate(this.defaults.def.LowerLimit, 'HH:mm',locale):'00:00' ;
    const upperLimits= this.defaults.def.UpperLimit!==undefined?formatDate(this.defaults.def.UpperLimit, 'HH:mm',locale):'00:00' ;


    this.form = this.fb.group({
      ID:  [this.defaults.def.ID || 0],
      WorkingTypeID: [this.defaults.def.WorkingTypeID],
      Code: [this.defaults.def.Code || '',Validators.required],
      Type:[this.defaults.def.Type || '',Validators.required],
      Multiplier:[this.defaults.def.Multiplier || 0,Validators.required],
      LowerLimit:[lowerLimits],
      UpperLimit:[upperLimits]
  
    });
    
     this.definitionGetTypes(100);


  }

  waitProgress(message,timer) {
    this.snackbar.dismiss();
    let config = new MatSnackBarConfig();
    if (timer!==undefined)
    {
      config.duration = timer;
    }
    config.panelClass = ['message-position'];
    this.snackbar.open(message,"", config);

  }


  
  save() {
 
    if (this.form.invalid) {
      return;
   }
   
    if (this.mode === 'create') {
      this.createDefinition();
    } else if (this.mode === 'update') {
      this.updateDefinition();
    }
  }

  createDefinition() {
    const definition = this.form.value;        
     this.dialogRef.close(definition);
  }

  updateDefinition() {
    const definition = this.form.value;    
    this.dialogRef.close(definition);
    
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
