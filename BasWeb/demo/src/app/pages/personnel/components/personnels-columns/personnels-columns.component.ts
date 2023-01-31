import { LanguageMap } from './../../../interfaces/language.interface';
import AppUtil from './../../../interfaces/util';
import { Component, Inject, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Personnel } from '../../interfaces/personnel.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { PersonnelService } from '../../../services/personnel.service';
import icClose1 from '@iconify/icons-ic/close';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'vex-personnels-columns',
  templateUrl: './personnels-columns.component.html',
  styleUrls: ['./personnels-columns.component.scss']
})
export class PersonnelsColumnsComponent implements OnInit {

  // @Input() contact: Personnel;
  // @Output() openContact = new EventEmitter<Personnel['ID']>();
  @Output() toggleStar = new EventEmitter<{ id }>();

  // icBusiness = icBusiness;
  // icPhone = icPhone;
  // icMail = icMail;
  // icChat = icChat;
  // icStar = icStar;
  // icStarBorder = icStarBorder;

  result: string;
  columns: any;
  isEdited = false;
  icClose1 = icClose1;
  language: any = []; languageMap: LanguageMap = {};
  saveEnabled = false;
  constructor(
    private dialogRef: MatDialogRef<PersonnelsColumnsComponent>,
    public personnelService: PersonnelService,
    private dialog: MatDialog,
  ) { }


  personnelGetFilterColumns() {

    this.personnelService.PersonnelGetFilterColumns('BAS_Employee')
      .subscribe((res) => {
     
        this.columns = res;

      }, err => {
        console.log(err);

      });
  }

  closeDialog() {
    if (this.saveEnabled)
      this.openDialog(0, this.languageMap['Değişiklikler iptal edilecek.'].labelName, 'save');
    else
      this.dialogRef.close(this.isEdited);

    // this.dialogRef.close(this.isEdited);
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
          this.dialogRef.close(false);
      }
    });
  }

  personnelPostFilterColumns(obj) {

    obj[0].table = "BAS_Employee";
    this.personnelService.PersonnelPostFilterColumns(obj)
      .subscribe((res) => {
        this.columns = res;
        this.personnelGetFilterColumns();
        this.isEdited = true;
        this.saveEnabled = false;
      }, err => {
        console.log(err);

      });
  }



  check(e) {
    this.columns.forEach(element => {

      if (element.ColumnName === e.value)
        element.Active = e.checked;
      this.saveEnabled = true;
    });
  }

  change(e) {
    this.columns.forEach(element => {
      if (element.ColumnName === e.target.name)
        element.Label = e.target.value;
    });
  }

  change3(e) {
    this.columns.forEach(element => {
      if (element.ColumnName === e.target.name)
        element.Sort = e.target.value;
    });
  }

  change2(e) {
    this.saveEnabled = true;
  }

  save() {

    this.personnelPostFilterColumns(this.columns);
  }

  ngOnInit() {

    this.languageMap = AppUtil.getLabels();
    this.personnelGetFilterColumns();
  }

  emitToggleStar(event: MouseEvent, contactId) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
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

export class DemoDialogComponent {

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}