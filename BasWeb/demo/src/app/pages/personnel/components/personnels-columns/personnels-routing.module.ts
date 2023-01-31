import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonnelsColumnsComponent } from './personnels-columns.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: PersonnelsColumnsComponent,
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
