import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportViewerComponent } from './reportviewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportViewerComponent],
  exports: [
    ReportViewerComponent
  ]
})
export class SSRSReportViewerModule { }
