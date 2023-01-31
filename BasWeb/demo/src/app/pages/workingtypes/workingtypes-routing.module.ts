import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { WorkingtypesComponent } from './workingtypes.component';


const routes: VexRoutes = [
  {
    path: '',
    component: WorkingtypesComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingtypesRoutingModule {
}
