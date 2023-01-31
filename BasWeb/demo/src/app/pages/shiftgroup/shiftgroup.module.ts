import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftGroupRoutingModule } from './shiftgroup-routing.module';
import { ShiftGroupComponent,DemoDialogComponent4 } from './shiftgroup.component';
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
import { MatSelect, MatSelectModule } from '@angular/material/select';
// import { ColorFadeModule } from '../../../@vex/pipes/color/color-fade.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ShiftGroupDefinitionsComponent,DemoDialogComponent3 } from '../shiftgroup/shiftgroup-definitions.component';
import {SubShiftGroupDefinitionsComponent } from '../shiftgroup/subshiftgroup-definitions.component';
import { ShiftGroupTableComponent,DemoDialogComponent } from '../shiftgroup/shiftgroup-table.component';
import {ShiftGroupDefinitionsItemComponent,DemoDialogComponent2 } from '../shiftgroup/shiftgroup-definitions-item';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularSplitModule } from 'angular-split';
import {DragDropModule} from '@angular/cdk/drag-drop';
// import { TextMaskModule } from 'node_modules/angular2-text-mask';
import {MaterialModule} from './../../../material.module';
import { FormControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
 

@NgModule({
  declarations: [ DemoDialogComponent4,DemoDialogComponent,DemoDialogComponent2,DemoDialogComponent3,ShiftGroupDefinitionsItemComponent,SubShiftGroupDefinitionsComponent,ShiftGroupComponent,ShiftGroupTableComponent,ShiftGroupDefinitionsComponent],
  imports: [  
    DragDropModule,
    MaterialModule,
    MatInputModule,
    AngularSplitModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SecondaryToolbarModule,
    MatInputModule ,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule, 
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    CommonModule, 
    ShiftGroupRoutingModule,
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
    // ColorFadeModule,
    MatButtonToggleModule
  ],   
  bootstrap: [ DemoDialogComponent4,DemoDialogComponent,DemoDialogComponent2,DemoDialogComponent3,ShiftGroupDefinitionsItemComponent,SubShiftGroupDefinitionsComponent,ShiftGroupComponent,ShiftGroupTableComponent,ShiftGroupDefinitionsComponent],
})
export class ShiftGroupModule {
}
