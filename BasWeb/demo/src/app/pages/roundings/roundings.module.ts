import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundingsRoutingModule } from './roundings-routing.module';
import { RoundingsComponent,DemoDialogComponent } from './roundings.component';
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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RoundingsDefinitionsComponent } from '../roundings/roundings-definitions.component';
import { RoundingsTableComponent,DemoDialogComponent2 } from '../roundings/roundings-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HighlightModule } from '../../../@vex/components/highlight/highlight.module';
import { AngularSplitModule } from 'angular-split';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [RoundingsComponent,DemoDialogComponent,DemoDialogComponent2,RoundingsTableComponent,RoundingsDefinitionsComponent],
  imports: [
    DragDropModule,
    AngularSplitModule,
    SecondaryToolbarModule,
    HighlightModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatRadioModule,
    CommonModule,
    RoundingsRoutingModule,
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
    MatButtonToggleModule
  ],
   entryComponents: [RoundingsComponent,DemoDialogComponent,DemoDialogComponent,RoundingsTableComponent,RoundingsDefinitionsComponent],
   exports: [
    RoundingsComponent
  ]
})
export class RoundingsModule {
}
