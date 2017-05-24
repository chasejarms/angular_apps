import { RemoveThisAppPage } from './app.po';

describe('remove-this-app App', () => {
  let page: RemoveThisAppPage;

  beforeEach(() => {
    page = new RemoveThisAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
