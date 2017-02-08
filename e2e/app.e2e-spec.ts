import { NgCnodePage } from './app.po';

describe('ng-cnode App', function() {
  let page: NgCnodePage;

  beforeEach(() => {
    page = new NgCnodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
