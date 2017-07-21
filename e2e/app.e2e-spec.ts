import { TestStagePage } from './app.po';

describe('test-stage App', () => {
  let page: TestStagePage;

  beforeEach(() => {
    page = new TestStagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
