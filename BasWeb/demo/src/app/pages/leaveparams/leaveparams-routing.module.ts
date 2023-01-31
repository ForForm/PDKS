import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { LeaveParamsComponent } from './leaveparams.component';


const routes: VexRoutes = [
  {
    path: '',
    component: LeaveParamsComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveParamsRoutingModule {
}
