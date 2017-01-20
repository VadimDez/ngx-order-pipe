import { NgCliPage } from './app.po';

describe('ng-cli App', function() {
  let page: NgCliPage;

  beforeEach(() => {
    page = new NgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
