
import { Component } from '@angular/core';

@Component({
  selector: 'app-ssrs',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  reportServer: string = 'http://myrpsvr/reportserver';
  reportUrl: string = 'Departments/General Reports/SampleWithParameters';
  showParameters: string = "false"; //true, false, collapsed
  parameters: any = {
    "SampleStringParameter": "String1",
    "SampleBooleanParameter": false,
    "SampleDateTimeParameter": "10/1/2017",
    "SampleIntParameter": 1234567,
    "SampleFloatParameter": "123.1234",
    "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
  };
  language: string = "en-us";
  width: number = 100;
  height: number = 100;
  toolbar: string = "true";
}

