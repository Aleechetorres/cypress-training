import 'cypress-iframe';
import { IframePage } from '../pages/index';

const iframePage = new IframePage();

describe('Test to Iframe Page', () => {
  beforeEach(() => {
    iframePage.visit();
  });

  it('Validate that the Iframe is displayed and contains the title: HTML Tutorial', () => {
    iframePage.getFrameTitle();
  });

  it('Validate that an Iframe is displayed in the CSS option', () => {
    iframePage.goToCssPageInFrame();
  });

  it('Validate CSS page content within the iframe', () => {
    cy.enter('iframe[src="default.asp"]').then(getBody => {
      getBody().find('.color_h1').should('be.visible').should('contain', 'Tutorial');
    });
  });
});