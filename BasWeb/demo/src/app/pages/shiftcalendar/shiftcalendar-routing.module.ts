import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
import { ShiftCalendarComponent } from './shiftcalendar.component';


const routes: VexRoutes = [
  {
    path: '',
    component: ShiftCalendarComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftCalendarRoutingModule {
}
