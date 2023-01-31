import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftCalendarRoutingModule } from './shiftcalendar-routing.module';
import { ShiftCalendarComponent,DemoDialogComponent } from './shiftcalendar.component';
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
import {ShiftCalendarDefinitionsComponent } from '../shiftcalendar/shiftcalendar-definitions.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [DemoDialogComponent,ShiftCalendarComponent,ShiftCalendarDefinitionsComponent],
  imports: [
    AngularSplitModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SecondaryToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatRadioModule,
    CommonModule,
    ShiftCalendarRoutingModule,
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
    MatButtonToggleModule
  ],
   entryComponents: [DemoDialogComponent,ShiftCalendarComponent,ShiftCalendarDefinitionsComponent]
})
export class ShiftCalendarModule {
}
