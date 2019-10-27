import { EvaluacionVAngularPage } from './app.po';

describe('evaluacion-v-angular App', function() {
  let page: EvaluacionVAngularPage;

  beforeEach(() => {
    page = new EvaluacionVAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
