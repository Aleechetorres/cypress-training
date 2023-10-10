import 'cypress-iframe';
class IframePage {

  private iframeSelector
  

  constructor() {
    this.iframeSelector = 'iframe[src="default.asp"]';
  }

  visit(){
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    cy.visit('https://www.w3schools.com/html/html_iframe.asp')
    cy.frameLoaded(this.iframeSelector)
  }

  getFrameTitle(){
    cy.enter(this.iframeSelector).then(getBody => {
      getBody().find('h1').should('be.visible').should('contain', 'HTML');
      getBody().find('.color_h1').should('be.visible').should('contain', 'Tutorial');
    });
  }

  goToCssPageInFrame(){
    cy.enter(this.iframeSelector).then(getBody => {
      getBody().find('.ga-nav[title="CSS Tutorial"]').click();
      cy.frameLoaded('iframe[src="default.asp"]')
    });
  }
}

export {IframePage};