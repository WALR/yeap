import { YeapPage } from './app.po';

describe('yeap App', function() {
  let page: YeapPage;

  beforeEach(() => {
    page = new YeapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
