import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitComponent } from './wait.component'; 
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { SecondaryToolbarModule } from '../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
// import { MatSliderModule,MatSlideToggleModule }from '@angular/material';
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
// import { AttendanceRecordComponent} from './../attendance/attendance-record.component';
// import { AttendanceDefinitionsComponent} from './../attendance/attendance-definitions.component';
// import { AttendanceModule} from './../attendance/attendance.module';
// import { LeaveModule} from './../leaves/leave.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatTableExporterModule } from 'mat-table-exporter';
// import { MatTableFilterModule } from 'mat-table-filter';s
import {MatProgressBar, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule,ProgressSpinnerMode,MatProgressSpinner} from '@angular/material/progress-spinner';
import { MatSliderModule }from '@angular/material/slider';
import { MatSlideToggleModule }from '@angular/material/slide-toggle';

@NgModule({
  declarations: [WaitComponent],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    // MatTableFilterModule,
    SecondaryToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatSliderModule,
    MatSlideToggleModule,
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
    // MatTableExporterModule,
    // AttendanceModule,
    // LeaveModule
  ] ,

   entryComponents: [WaitComponent]
})
export class WaitModule {
}
