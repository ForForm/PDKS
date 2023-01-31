import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { ShiftGroupComponent } from './shiftgroup.component';


const routes: VexRoutes = [
  {
    path: '',
    component: ShiftGroupComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftGroupRoutingModule {
}
