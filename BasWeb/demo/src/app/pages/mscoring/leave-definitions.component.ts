import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, Component, Input, OnDestroy, OnInit, ViewChild, Optional, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSave from '@iconify/icons-ic/save';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
// import { Definition,DefinitionHourDetail } from '../definitions/interfaces/definition.model'
import { formatDate, Time } from "@angular/common";
import { MatTableDataSource } from '@angular/material/table';
import { DefinitionsService } from '../services/definitions.service';
import { stagger20ms } from '../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../@vex/animations/scale-fade-in.animation';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'vex-leave-definitions',
  templateUrl: './leave-definitions.component.html',
  styleUrls: ['./leave-definitions.component.scss'],
  animations: [
    stagger20ms,
    fadeInUp400ms,
    scaleFadeIn400ms
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


export class LeaveDefinitionsComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  static id = 100;

  @Input() columns = ['ID', 'Code', 'Name','CardNo'];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  // dataSource: MatTableDataSource<any> | null;
  dataSource;
  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icSave = icSave;
  
  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  visible = false;
  label = '';

  // sub=false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<LeaveDefinitionsComponent>,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    public definitionsService: DefinitionsService,
    private adapter: DateAdapter<any>,
    private snackbar: MatSnackBar) {
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



  refresh() {
    this.cd.detectChanges();

  }

  getFlexGroupPersonelList(type) {

    if (type === "12") { 

      this.dataSource = new MatTableDataSource();
      this.dataSource.data = [{ Code: '0', Name: 'Beyaz' }, { Code: '1', Name: 'Mavi' }];
      this.refresh();


    }
    else {
      this.definitionsService.GetFlexGroupPersonelList(type)
        .subscribe((res: any[]) => {
          this.dataSource = new MatTableDataSource();
          this.dataSource.data = res;
          this.refresh();
          // this.searchCtrl.valueChanges.pipe(
          //   untilDestroyed(this)
          // ).subscribe(value => this.onFilterChange(value));

        });
    }
  }

  select(row) {

    // console.log(row);
    // if (this.defaults.Type != null) {
    this.defaults.Data.ID = row.ID;
    this.defaults.Data.Code = row.Code;
    this.defaults.Data.Name = row.Name;
    this.dialogRef.close(this.defaults.Data);
    // }

  }


  turkishCulture() {
    this.adapter.setLocale("tr");
  }


  ngOnInit() {


    this.turkishCulture();
    
    console.log(this.defaults);
    this.form = this.fb.group({});
    this.languageMap = AppUtil.getLabels();
    if (this.defaults.Type==="13")
    this.getReasons('defaults')
    else
    this.getFlexGroupPersonelList(this.defaults.Type)

  }

  getReasons(type) {

    this.definitionsService.DefinitionGetConstants(type)
      .subscribe((res: any[]) => {

        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        this.refresh();


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

  save() {
    if (this.mode === 'create') {
      this.createDefinition();
    } else if (this.mode === 'update') {
      this.updateDefinition();
    }
  }

  createDefinition() {
    const definition = this.form.value;

    if (this.defaults.modul === 'code' && (definition.code === '' || definition.name === '')) {
      this.waitProgress("Kod ve açıklama alanı zorunludur...", 1000);
      return;
    }


    if (!definition.imageSrc) {
      definition.imageSrc = 'assets/img/avatars/1.jpg';
    }

    this.dialogRef.close(definition);
  }

  updateDefinition() {
    const definition = this.form.value;
    if (this.defaults.sub && this.defaults.modul === 'code' && (definition.subcode === '' || definition.subname === '')) {
      this.waitProgress("Alt Kod ve açıklama alanı zorunludur...", 1000);
      return;
    }
    definition.id = this.defaults.def.id;
    console.log(definition);
    this.dialogRef.close(definition);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
