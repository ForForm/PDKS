import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelsGridRoutingModule } from './personnels-grid-routing.module';
import { PersonnelsGridComponent } from './personnels-grid.component';

import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonnelsEditModule } from '../components/personnels-edit/personnels-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { PersonnelsCardModule } from '../components/personnels-card/personnels-card.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
// import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';


@NgModule({
  declarations: [PersonnelsGridComponent],
  imports: [
    CommonModule,
    PersonnelsGridRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatDialogModule,
    PersonnelsEditModule,
    MatIconModule,
    MatTooltipModule,
    // PersonnelsCardModule,
    ContainerModule,
    // ColorFadeModule
  ]
})
export class PersonnelsGridModule {
}
