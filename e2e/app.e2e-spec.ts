import { ScoutingPage } from './app.po';

describe('scouting App', () => {
  let page: ScoutingPage;

  beforeEach(() => {
    page = new ScoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
