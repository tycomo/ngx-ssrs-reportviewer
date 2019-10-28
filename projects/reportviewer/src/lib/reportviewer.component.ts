import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges, ViewEncapsulation  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ssrs-reportviewer',
  template: `
  <div class="iframe-container">
    <iframe [src]="source" scrolling="no" sandbox="allow-top-navigation allow-forms"></iframe>
  </div>
  `,
  styles: [`
  .iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
  }

  .iframe-container iframe {
     border: 0;
     height: 100%;
     left: 0;
     position: absolute;
     top: 0;
     width: 100%;
  }

  /* 4x3 Aspect Ratio */
  .iframe-container-4x3 {
    padding-top: 75%;
  }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ReportViewerComponent implements OnChanges {

  @Input()
  reporturl: string;
  @Input()
  reportserver: string;
  @Input()
  showparameters?: string = "false";
  @Input()
  parameters?: any;
  @Input()
  language?: string = "en-us";
  @Input()
  width?: number = 100;
  @Input()
  height?: number = 100;
  @Input()
  toolbar?: string = "true";

  @Output('error') onError = new EventEmitter<any>();
  constructor(private sanitizer: DomSanitizer) { }


  source: SafeResourceUrl;

  ngOnChanges(changes: SimpleChanges) {
    if(!this.reporturl){
      this.onError.emit("Src cannot be null");
    }

    if ('reporturl' in changes) {
      this.source = this.sanitizer
      .bypassSecurityTrustResourceUrl(this.buildReportUrl());
    }
  }

  public buildParameterString(): string {

    var parameterString = "";

    for (var param in this.parameters) {
      if (param) {
        if (this.parameters[param] instanceof Array === true) {
          for (var arrayParam in this.parameters[param]) {
            if (arrayParam) {
              parameterString += "&" + param + "=" + this.parameters[param][arrayParam];
            }
          }
        }
        if (this.parameters[param] != null && this.parameters[param] instanceof Array === false) {
          parameterString += "&" + param + "=" + this.parameters[param];
        }
        if (this.parameters[param] == null) {
          parameterString += "&" + param + ":isnull=true";
        }
      }
    }
    return parameterString;
  }

  public buildReportUrl() : string {
    if (!this.reporturl) {
      return;
    }
    var parameters = this.buildParameterString();
    return this.reportserver + '?/'
      + this.reporturl + '&rs:Embed=true'
      + '&rc:Parameters=' + this.showparameters
      + parameters
      + '&rs:ParameterLanguage=' + this.language + "&rc:Toolbar=" + this.toolbar;
  }
}
