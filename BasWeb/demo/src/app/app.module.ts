// import { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import {WaitComponent } from './pages/wait/wait.component';
import { MatDialogModule,MatDialog } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MaterialModule} from './../material.module'; 

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [AppComponent],
  imports: [  
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,   
    VexModule,
    CustomLayoutModule
  ],
  entryComponents: [WaitComponent], 
  providers: [
    {provide: 'apiUrl', useValue: 'http://localhost/BasApp/' },
    // {provide: 'apiUrl', useValue: 'http://10.34.1.15:24996/BasApp/' }, 
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);