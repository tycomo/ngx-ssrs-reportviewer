import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportviewerComponent } from './reportviewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportviewerComponent],
  exports: [
    ReportviewerComponent
  ]
})
export class SSRSReportViewerModule { }
