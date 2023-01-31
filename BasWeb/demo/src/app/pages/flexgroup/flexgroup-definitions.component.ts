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
import icClose1 from '@iconify/icons-ic/close';


@Component({
  selector: 'vex-flexgroup-definitions',
  templateUrl: './flexgroup-definitions.component.html',
  styleUrls: ['./flexgroup.component.scss']
})


export class FlexGroupDefinitionsComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  static id = 100;

  @Input() columns = ['ID', 'Code', 'Name'];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  dataSource: MatTableDataSource<any> | null;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icClose1 = icClose1;

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
    private dialogRef: MatDialogRef<FlexGroupDefinitionsComponent>,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    public definitionsService: DefinitionsService,
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

  closeDialog() {
    this.dialogRef.close();
  }

  getFlexGroupPersonelList(type) {

    this.dataSource=null;

      this.definitionsService.GetFlexGroupPersonelList(type)
        .subscribe((res: any[]) => {
          this.dataSource = new MatTableDataSource();
          this.dataSource.data = res;
          // this.refresh();
          // this.searchCtrl.valueChanges.pipe(
          //   untilDestroyed(this)
          // ).subscribe(value => this.onFilterChange(value));
        });
    
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


  ngOnInit() {

    const locale = 'en-US';
    this.form = this.fb.group({});
    this.languageMap = AppUtil.getLabels();
    this.getFlexGroupPersonelList(this.defaults.Type)

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
