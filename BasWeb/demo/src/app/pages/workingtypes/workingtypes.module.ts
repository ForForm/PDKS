import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingtypesRoutingModule } from './workingtypes-routing.module';
import { WorkingtypesComponent } from './workingtypes.component';
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
import {WorkingtypesDefinitionsComponent,DemoDialogComponent2 } from '../workingtypes/workingtypes-definitions.component';
import {SubWorkingtypesDefinitionsComponent } from '../workingtypes/subworkingtypes-definitions.component';
import { WorkingtypesTableComponent,DemoDialogComponent } from '../workingtypes/workingtypes-table.component';
import {WorkingtypesDefinitionsItemComponent,DemoDialogComponent3 } from '../workingtypes/workingtypes-definitions-item';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { TextMaskModule } from 'node_modules/angular2-text-mask';
import { AngularSplitModule } from 'angular-split';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [WorkingtypesDefinitionsItemComponent,SubWorkingtypesDefinitionsComponent,WorkingtypesComponent,DemoDialogComponent,WorkingtypesTableComponent,WorkingtypesDefinitionsComponent,DemoDialogComponent2,DemoDialogComponent3],
  imports: [
    AngularSplitModule,
    DragDropModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SecondaryToolbarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    CommonModule,
    WorkingtypesRoutingModule,
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
   entryComponents: [SubWorkingtypesDefinitionsComponent,WorkingtypesComponent,DemoDialogComponent,WorkingtypesTableComponent,WorkingtypesDefinitionsComponent,
    DemoDialogComponent2,DemoDialogComponent3]
})
export class WorkingtypesModule {
}
