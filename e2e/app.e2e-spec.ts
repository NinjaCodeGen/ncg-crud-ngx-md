import { NcgAppPageObject } from './app.po';

describe('ncg-crud-ngx-md App', () => {
  let page: NcgAppPageObject;

  beforeEach(() => {
    page = new NcgAppPageObject();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
