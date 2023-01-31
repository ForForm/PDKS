import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Personnel } from '../../interfaces/personnel.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import icClose1 from '@iconify/icons-ic/close';
import { stagger20ms } from '../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../@vex/animations/scale-fade-in.animation';
import { PersonnelService } from '../services/personnel.service';
import { AttendanceService } from '../services/attendance.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'vex-attendance-columns',
  templateUrl: './attendance-columns.component.html',
  styleUrls: ['./attendance.component.scss'],
  animations: [
    stagger20ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class AttendanceColumnsComponent implements OnInit {

  // @Input() contact: Personnel;
  // @Output() openContact = new EventEmitter<Personnel['ID']>();
  // @Output() toggleStar = new EventEmitter<Personnel['ID']>();

  // icBusiness = icBusiness;
  // icPhone = icPhone;
  // icMail = icMail;
  // icChat = icChat;
  // icStar = icStar;
  // icStarBorder = icStarBorder;
  icClose1 = icClose1;
  columns:any;
  isEdited=false;
  form: FormGroup;
  constructor(
    public personnelService: PersonnelService,
    public attendanceService: AttendanceService,
    private dialogRef: MatDialogRef<AttendanceColumnsComponent>,
    
  ) { }


  closeDialog() {
    this.dialogRef.close(this.isEdited);
  }


  getFilterColumns() {

    this.attendanceService.GetFilterColumns('BAS_Attendance')
      .subscribe((res) => {
        console.log(res);
        this.columns=res;

      }, err => {
        console.log(err);

      });
  }


  postFilterColumns(obj) {

    this.attendanceService.PostFilterColumns(obj)
      .subscribe((res) => {
        this.columns=res;
        this.getFilterColumns();

      }, err => {
        console.log(err);

      });
  }

  

  check(e)
  {
    this.columns.forEach(element => {
  
      if (element.ColumnName===e.value)
        element.Active=e.checked;

    }); 
}

  change(e)
  {
    this.columns.forEach(element => {
      if (element.ColumnName===e.target.name)
        element.Label=e.target.value;
    }); 
  }

  save()
  {

    this.isEdited=true;
    this.columns.forEach(element => {
      element.table='BAS_Attendance';
      element.Username=JSON.parse(sessionStorage.getItem('Username'));
      element.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    }); 

    this.postFilterColumns(this.columns);
  }

  ngOnInit() {
    this.getFilterColumns();
  }

 
}
  