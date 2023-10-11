import 'cypress-iframe';

import {IframePage} from '../pages/index';

const iframePage = new IframePage;

describe('Test de iframe en W3Schools', () => {
  it('debería interactuar con el iframe', () => {

    //valida que el Iframe fué cargado
    iframePage.visit();

    //Muestra un iframe que contiene HTML Tutorial
    iframePage.getFrameTitle();
   

    //Ingresa al segundo iframe
    iframePage.goToCssPageInFrame();
   

    //Valida el contenido del segundo iframe
    cy.enter('iframe[src="default.asp"]').then(getBody => {
      getBody().find('.color_h1').should('be.visible').should('contain', 'Tutorial');
    });

    });
  });