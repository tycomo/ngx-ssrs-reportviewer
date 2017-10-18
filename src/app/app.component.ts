
import { Component } from '@angular/core';

@Component({
  selector: 'app-ssrs',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  reportServer: string = 'http://reportserver/reportserver';
  reportUrl: string = 'Departments/General Reports/SampleWithParameters';
  showParameters: string = "false"; //true, false, collapsed
  parameters: any = {
    "SampleStringParameter": "String",
    "SampleBooleanParameter": false,
    "SampleDateTimeParameter": "10/1/2017",
    "SampleIntParameter": 12345,
    "SampleFloatParameter": "123.1234",
    "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
  };
  language: string = "en-us";
  width: number = 50;
  height: number = 50;
  toolbar: string = "false";
}

