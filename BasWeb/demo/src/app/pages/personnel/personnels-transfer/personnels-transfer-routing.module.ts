import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonnelsTransferComponent } from './personnels-transfer.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';


const routes: VexRoutes = [
  {
    path: '' ,
    component: PersonnelsTransferComponent,
    data: {
      scrollDisabled: true,
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,MatSlideToggleModule]
})
export class PersonnelsTransferRoutingModule {
}
