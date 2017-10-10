import { TestBed, async } from '@angular/core/testing';
import { ReportviewerModule } from './modules/reportviewer/reportviewer.module';
import { AppComponent } from './app.component';
import { ReportviewerComponent } from './modules/reportviewer/reportviewer.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReportviewerModule
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
