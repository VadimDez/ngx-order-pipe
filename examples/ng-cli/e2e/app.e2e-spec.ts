import { NgCliPage } from './app.po';

describe('ng-cli App', () => {
  let page: NgCliPage;

  beforeEach(() => {
    page = new NgCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
