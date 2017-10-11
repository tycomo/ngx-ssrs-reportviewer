import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SSRSReportViewerModule } from './modules/reportviewer/reportviewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SSRSReportViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
