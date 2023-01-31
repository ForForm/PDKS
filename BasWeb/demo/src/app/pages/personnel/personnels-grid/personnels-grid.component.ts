import { LanguageMap } from './../../interfaces/language.interface';
import AppUtil from './../../interfaces/util';

import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../@vex/interfaces/link.interface';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import { PersonnelsEditComponent } from '../components/personnels-edit/personnels-edit.component';
import { MatDialog } from '@angular/material/dialog';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { Personnel } from '../interfaces/personnel.interface';
// import { contactsData } from '../../../../static-data/personnels';
import { trackById } from '../../../../@vex/utils/track-by';
import icSearch from '@iconify/icons-ic/twotone-search';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
// import theme from '../../../../@vex/utils/tailwindcss';

@Component({
  selector: 'vex-personnels-grid',
  templateUrl: './personnels-grid.component.html',
  styleUrls: ['./personnels-grid.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class PersonnelsGridComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  // contacts = contactsData;
  // filteredContacts$ = this.route.paramMap.pipe(
  //   map(paramMap => paramMap.get('activeCategory')),
  //   map(activeCategory => {
  //     switch (activeCategory) {
  //       case 'all': {
  //         return contactsData;
  //       }

  //       case 'starred': {
  //         return contactsData.filter(c => c.starred);
  //       }

  //       default: {
  //         return [];
  //       }
  //     }
  //   })
  // );

  links: Link[] = [
    {
      label: 'ALL CONTACTS',
      route: '../all'
    },
    {
      label: 'FREQUENTLY CONTACTED',
      route: '../frequent'
    },
    {
      label: 'STARRED',
      route: '../starred'
    }
  ];

  icSearch = icSearch;
  icPersonAdd = icPersonAdd;
  icCloudDownload = icCloudDownload;
  icFilterList = icFilterList;
  icContacts = icContacts;


  trackById = trackById;
  // theme = theme;

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.languageMap=AppUtil.getLabels();  
  }

  openContact(id?: Personnel['ID']) {
    this.dialog.open(PersonnelsEditComponent, {
      data: id || null,
      width: '600px'
    });
  }

  toggleStar(id: Personnel['ID']) {
    // const contact = contactsData.find(c => c.id === id);

    // if (contact) {
    //   contact.starred = !contact.starred;
    // }
  }
}
