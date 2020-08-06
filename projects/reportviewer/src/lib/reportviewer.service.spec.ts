import { TestBed } from '@angular/core/testing';

import { ReportviewerService } from './reportviewer.service';

describe('ReportviewerService', () => {
  let service: ReportviewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportviewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
