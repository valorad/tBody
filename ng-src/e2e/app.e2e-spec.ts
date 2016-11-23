import { TBodyPage } from './app.po';

describe('t-body App', function() {
  let page: TBodyPage;

  beforeEach(() => {
    page = new TBodyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
