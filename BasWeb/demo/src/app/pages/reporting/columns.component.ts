import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Personnel } from '../../interfaces/personnel.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { ReportingService } from '../services/reporting.service';
import icClose1 from '@iconify/icons-ic/close';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'vex-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {

  // @Input() contact: Personnel;
  // @Output() openContact = new EventEmitter<Personnel['ID']>();
  @Output() toggleStar = new EventEmitter<{id}>();

  // icBusiness = icBusiness;
  // icPhone = icPhone;
  // icMail = icMail;
  // icChat = icChat;
  // icStar = icStar;
  // icStarBorder = icStarBorder;

  columns:any;
  isEdited=false;
  icClose1 = icClose1;

  constructor(
    private dialogRef: MatDialogRef<ColumnsComponent>,
    public reportingService: ReportingService
  ) { }


  personnelGetFilterColumns() {

    // this.personnelService.PersonnelGetFilterColumns('BAS_Employee')
    //   .subscribe((res) => {
    //     console.log(res);
    //     this.columns=res;

    //   }, err => {
    //     console.log(err);

    //   });
  }

  closeDialog() {
    this.dialogRef.close(this.isEdited);
  }


  personnelPostFilterColumns(obj) {

    // obj[0].table="BAS_Employee";
    // this.personnelService.PersonnelPostFilterColumns(obj)
    //   .subscribe((res) => {
    //     this.columns=res;
    //     this.personnelGetFilterColumns();
    //     this.isEdited=true;
    //   }, err => {
    //     console.log(err);

    //   });
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
    
    this.personnelPostFilterColumns(this.columns);
  }

  ngOnInit() {
    this.personnelGetFilterColumns();
  }

  emitToggleStar(event: MouseEvent, contactId) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
  