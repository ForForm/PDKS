import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonnelsEditComponent } from './personnels-edit.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: PersonnelsEditComponent,
    data: {
      toolbarShadowEnabled: true,
      containerEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnelsRoutingModule {
}
