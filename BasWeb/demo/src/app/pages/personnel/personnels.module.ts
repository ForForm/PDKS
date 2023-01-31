import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelsRoutingModule } from './personnels-routing.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [
    MatButtonToggleModule,
    CommonModule,
    PersonnelsRoutingModule,
    
  ]
})
export class PersonnelsModule {
}
