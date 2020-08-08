import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportViewerModule } from 'reportviewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
