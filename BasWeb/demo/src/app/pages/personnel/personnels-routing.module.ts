import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';
 

const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: 'grid',
        loadChildren: () => import('./personnels-grid/personnels-grid.module').then(m => m.PersonnelsGridModule)
      },      
      {
        path: 'table',
        loadChildren: () => import('./personnels-table/personnels-table.module').then(m => m.PersonnelsTableModule)
      }
      ,
      {
        path: 'transfer',
        loadChildren: () => import('./personnels-transfer/personnels-transfer.module').then(m => m.PersonnelsTransferModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnelsRoutingModule {
}
