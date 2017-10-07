import { NgxSsrsReportviewerPage } from './app.po';

describe('ngx-ssrs-reportviewer App', () => {
  let page: NgxSsrsReportviewerPage;

  beforeEach(() => {
    page = new NgxSsrsReportviewerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
