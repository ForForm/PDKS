import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelsColumnsComponent,DemoDialogComponent } from './personnels-columns.component';
// import { DefinitionsComponent } from './../../../definitions/definitions.component';
// import { PersonnelsColumnsRoutingModule } from './personnels-columns-routing.module';
// import { DefinitionsModule } from './../../../definitions/definitions.module';
// import { ShiftGroupModule } from './../../../shiftgroup/shiftgroup.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { AngularSplitModule } from 'angular-split';
@NgModule({
  declarations: [PersonnelsColumnsComponent,DemoDialogComponent],
  imports: [
    DragDropModule,
    AngularSplitModule,
    MatRadioModule,
    // PersonnelsRoutingModule,
    FormsModule,
    MatTableModule,
    MatTooltipModule,
    PageLayoutModule,
    MatButtonToggleModule,
    BreadcrumbsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    CommonModule,
    MatDialogModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    IconModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    // DefinitionsModule,
    // ShiftGroupModule,
    MatRippleModule
  ],
  entryComponents: [PersonnelsColumnsComponent,DemoDialogComponent]
})
export class PersonnelsColumnsModule {
}
