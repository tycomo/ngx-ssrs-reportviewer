import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportviewerModule } from './modules/reportviewer/reportviewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportviewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
