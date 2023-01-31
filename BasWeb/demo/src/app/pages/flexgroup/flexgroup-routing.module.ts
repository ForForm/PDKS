import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { FlexGroupComponent } from './flexgroup.component';


const routes: VexRoutes = [
  {
    path: '',
    component: FlexGroupComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexGroupRoutingModule {
}
