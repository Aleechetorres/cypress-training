const contactInfo = Cypress.env("ContactInfo");

class Contact {
  constructor(){
    this.navBarSelector = ".nav-link",
    this.contact = "Contact"
    this.email = "#recipient-email",
    this.name = "#recipient-name",
    this.message = "#message-text",
    this.sendSelector = ".btn-primary",
    this.sendBtn = "Send message"
  }

  sendMessage(){
    cy.get(this.navBarSelector ).contains(this.contact).click();
    cy.get(this.email).type(contactInfo.email ,{force:true});
    cy.get("#recipient-name").type(contactInfo.name ,{force:true});
    cy.get("#message-text").type(contactInfo.message ,{force:true});
    cy.get(this.sendSelector).contains(this.sendBtn).click();
  }
}

export {Contact};