import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent,DemoDialogComponent } from './toolbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { ToolbarNotificationsModule } from './toolbar-notifications/toolbar-notifications.module';
import { ToolbarUserModule } from './toolbar-user/toolbar-user.module';
import { ToolbarSearchModule } from './toolbar-search/toolbar-search.module';
import { IconModule } from '@visurel/iconify-angular';
import { NavigationModule } from '../navigation/navigation.module';
import { RouterModule } from '@angular/router';
import { NavigationItemModule } from '../../components/navigation-item/navigation-item.module';
import { MegaMenuModule } from '../../components/mega-menu/mega-menu.module';
import { ContainerModule } from '../../directives/container/container.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ToolbarComponent,DemoDialogComponent],
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatRippleModule,
    ToolbarNotificationsModule,
    ToolbarUserModule,
    ToolbarSearchModule,
    IconModule,
    NavigationModule,
    RouterModule,
    NavigationItemModule,
    MegaMenuModule,
    ContainerModule
  ],
  exports: [ToolbarComponent,DemoDialogComponent],
  entryComponents: [ToolbarComponent,DemoDialogComponent]
})
export class ToolbarModule {
}
