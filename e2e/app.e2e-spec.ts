import { GameApiPage } from './app.po';

describe('game-api App', function() {
  let page: GameApiPage;

  beforeEach(() => {
    page = new GameApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
