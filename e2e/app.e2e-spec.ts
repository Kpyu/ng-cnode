import { NgNoderPage } from './app.po';

describe('ng-noder App', function() {
  let page: NgNoderPage;

  beforeEach(() => {
    page = new NgNoderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
