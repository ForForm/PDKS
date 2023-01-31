import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelsTableRoutingModule } from './personnels-table-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
import { PersonnelsTableComponent,DemoDialogComponent} from './personnels-table.component';
import { PersonnelsDataTableComponent } from './personnels-data-table/personnels-data-table.component';
import { PersonnelsEditModule } from '../components/personnels-edit/personnels-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { PersonnelsTableMenuComponent } from './personnels-table-menu/personnels-table-menu.component';
import { PersonnelsColumnsModule } from '../components/personnels-columns/personnels-columns.module';
import { PersonnelsColumnsComponent } from '../components/personnels-columns/personnels-columns.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { SecondaryToolbarModule } from '../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
// import { DefinitionsComponent } from './../../definitions/definitions.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import { HighlightModule } from '../../../../@vex/components/highlight/highlight.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [  DemoDialogComponent,PersonnelsTableComponent, PersonnelsDataTableComponent, PersonnelsTableMenuComponent],
  imports: [
    
    DragDropModule,
    PageLayoutModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatToolbarModule,
    CommonModule,
    HighlightModule,
    MatDatepickerModule,
    PersonnelsTableRoutingModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatDialogModule,
    ScrollbarModule,
    BreadcrumbsModule,
    SecondaryToolbarModule,
    PersonnelsEditModule,
    PersonnelsColumnsModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule
  ]
  ,entryComponents: [DemoDialogComponent] 
})
export class PersonnelsTableModule {
}
