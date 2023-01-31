import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingComponent,DemoDialogComponent } from './reporting.component';
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { SecondaryToolbarModule } from '../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContainerModule } from '../../../@vex/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
// import { ColorFadeModule } from '../../../@vex/pipes/color/color-fade.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ReportingDefinitionsComponent } from '../reporting/reporting-definitions.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTreeModule} from '@angular/material/tree';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ColumnsComponent } from './columns.component';
// import {AttendanceDefinitionsComponent } from '../attendance/attendance-definitions.component';
import {AttendanceModule } from '../attendance/attendance.module';
import {StylePaginatorDirective} from './style-paginator.directive';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [ColumnsComponent,ReportingComponent,DemoDialogComponent,ReportingDefinitionsComponent,StylePaginatorDirective],
  imports: [
    AngularSplitModule,
    MatDatepickerModule,
    MatTreeModule,
    MatNativeDateModule,
    SecondaryToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatRadioModule,
    CommonModule,
    ReportingRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    // ColorFadeModule,
    MatButtonToggleModule,
    MatTableExporterModule,
     AttendanceModule
  ],
   entryComponents: [ColumnsComponent,ReportingComponent,DemoDialogComponent,ReportingDefinitionsComponent]
})
export class ReportingModule {
}
