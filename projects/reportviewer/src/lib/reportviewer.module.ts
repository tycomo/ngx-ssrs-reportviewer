import { NgModule, Injector } from '@angular/core';
import { ReportviewerComponent } from './reportviewer.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ReportviewerComponent],
  imports: [CommonModule],
  exports: [ReportviewerComponent]
})
export class ReportviewerModule {
  constructor(private injector: Injector) {
    const reportviewerElement = createCustomElement(ReportviewerComponent, { injector });
    customElements.define('ssrs-reportviewer', reportviewerElement);
  }
 }
