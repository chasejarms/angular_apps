import { GameControlPage } from './app.po';

describe('game-control App', () => {
  let page: GameControlPage;

  beforeEach(() => {
    page = new GameControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
