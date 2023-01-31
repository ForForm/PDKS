import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonnelsTableComponent } from './personnels-table.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';


const routes: VexRoutes = [
  {
    path: '',
    component: PersonnelsTableComponent,
    data: {
      scrollDisabled: true,
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule
    ],
  exports: [RouterModule,MatSlideToggleModule]
})
export class PersonnelsTableRoutingModule {
}
