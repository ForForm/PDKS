import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { YearlyLeaveComponent } from './yearlyleave.component';


const routes: VexRoutes = [
  {
    path: '',
    component: YearlyLeaveComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearlyLeaveRoutingModule {
}
