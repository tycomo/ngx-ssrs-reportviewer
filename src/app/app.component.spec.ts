import { TestBed, async } from '@angular/core/testing';
import { SSRSReportViewerModule } from './modules/reportviewer/reportviewer.module';
import { AppComponent } from './app.component';
import { ReportViewerComponent } from './modules/reportviewer/reportviewer.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SSRSReportViewerModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('Sample app created', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
