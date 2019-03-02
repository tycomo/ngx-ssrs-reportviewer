import { NgModule, Injector } from '@angular/core';
import { ReportViewerComponent } from './reportviewer.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ReportViewerComponent],
  imports: [CommonModule],
  exports: [ReportViewerComponent],
  entryComponents: [ReportViewerComponent]
})
export class ReportViewerModule {
  constructor(private injector: Injector) {
    const reportviewerElement = createCustomElement(ReportViewerComponent, { injector });
    customElements.define('ssrs-reportviewer', reportviewerElement);
  }
 }
