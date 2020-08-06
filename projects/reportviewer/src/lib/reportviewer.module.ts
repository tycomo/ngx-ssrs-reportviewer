import { NgModule, Injector } from '@angular/core';
import { ReportViewerComponent } from './reportviewer.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ReportViewerComponent],
  imports: [CommonModule],
  entryComponents: [ReportViewerComponent]
})
export class ReportViewerModule {
  constructor(private injector: Injector) {
    const reportviewerElement = createCustomElement(ReportViewerComponent, { injector });
    if(!customElements.get('ssrs-reportviewer')){
      customElements.define('ssrs-reportviewer', reportviewerElement);
    }
  }
 }
