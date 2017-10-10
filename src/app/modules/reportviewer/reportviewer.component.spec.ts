import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportviewerComponent } from './reportviewer.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

describe('ReportviewerComponent', () => {
  let component: ReportviewerComponent;
  let fixture: ComponentFixture<ReportviewerComponent>;
  let sanitizer: DomSanitizer;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Report viewer component created', () => {
    expect(component).toBeTruthy();
  });

 it('Complex url built correctly', () => {
    
  component.reportserver = 'http://rpsvr02/reportserver';
  component.src = 'Departments/General Reports/SampleWithParameters';
  component.showparameters = "collapsed"; //true, false, collapsed
  component.parameters = {
   "SampleStringParameter": null,
   "SampleBooleanParameter" : false,
   "SampleDateTimeParameter" : "9/1/2017",
   "SampleIntParameter" : 1,
   "SampleFloatParameter" : "123.1234",
   "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
   };
  component.language = "en-us";
  component.width = 100;
  component.height = 100;
  fixture.detectChanges();

  var reportUrl = component.buildReportUrl();
  fixture.detectChanges();
  var safeResourceUrl = "http://rpsvr02/reportserver?/Departments/General Reports/SampleWithParameters&rs:Embed=true&rc:Parameters=collapsed&SampleStringParameter:isnull=true&SampleBooleanParameter=false&SampleDateTimeParameter=9/1/2017&SampleIntParameter=1&SampleFloatParameter=123.1234&SampleMultipleStringParameter=Parameter1&SampleMultipleStringParameter=Parameter2&rs:ParameterLanguage=en-us";
  expect(reportUrl).toEqual(safeResourceUrl);

  });
  

   it('Simple url built correctly (no parameters)', () => {
    
  component.reportserver = 'http://rpsvr02/reportserver';
  component.src = 'Departments/General Reports/Sample';
  component.showparameters = "false";
  fixture.detectChanges();

  var reportUrl = component.buildReportUrl();
  fixture.detectChanges();
  var safeResourceUrl = "http://rpsvr02/reportserver?/Departments/General Reports/Sample&rs:Embed=true&rc:Parameters=false&rs:ParameterLanguage=en-us";
  expect(reportUrl).toEqual(safeResourceUrl);
  });

  it('Throw error if src is null', () => {
    
  component.reportserver = null;
  component.src = null;
  component.showparameters = "false";
  fixture.detectChanges();

console.log(component.onError);

  expect(component.onError).toEqual("Src cannot be null");
  
  });

});

