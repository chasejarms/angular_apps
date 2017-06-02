import { AngularMaterialTwoAppPage } from './app.po';

describe('angular-material-two-app App', () => {
  let page: AngularMaterialTwoAppPage;

  beforeEach(() => {
    page = new AngularMaterialTwoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
