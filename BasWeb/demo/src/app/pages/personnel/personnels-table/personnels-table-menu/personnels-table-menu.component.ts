import { LanguageMap } from './../../../interfaces/language.interface';
import AppUtil from './../../../interfaces/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icon } from '@visurel/iconify-angular';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icColumns from '@iconify/icons-fa-solid/columns';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { PersonnelService } from '../../../services/personnel.service';
import { utils } from 'protractor';


export interface PersonnelsTableMenu {
  type: 'link' | 'subheading';
  id?: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: Icon;
  label: string;
  classes?: {
    icon?: string;
  };
}

@Component({
  selector: 'vex-personnels-table-menu',
  templateUrl: './personnels-table-menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class PersonnelsTableMenuComponent implements OnInit {

  @Input() items: PersonnelsTableMenu[] = [];
  @Output() createPersonnel = new EventEmitter<void>();
  @Output() createColumns = new EventEmitter<void>();
  @Output() personnelGetQuery = new EventEmitter<any>();

  icPersonAdd = icPersonAdd;
  icColumns = icColumns;
  usrData : PersonnelsTableMenu[] = [];
  // language: any = []; 
  languageMap: LanguageMap = {};

  constructor(public personnelService: PersonnelService) { }
 

  getFilterItems()
  {
       this.personnelService.GetPersonnelFilter()
      .subscribe((res) => {
        this.items =<PersonnelsTableMenu[]>(res);
       }, err => {
          console.log(err);
        });
  }


  ngOnInit() {
    this.getFilterItems();
    this.languageMap=AppUtil.getLabels();    
  }
  
}
