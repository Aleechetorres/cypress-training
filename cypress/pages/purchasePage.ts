const placeOrder = Cypress.env("PlaceOrder");

class PurchasePage {
  constructor() {
    this.navBarSelector = ".nav-link",
    this.cart = "Cart",
    this.btnSuccess = ".btn-success",
    this.nameBtnSuccess = "Place Order",
    this.nameInput = "#name",
    this.countryInput = "#country",
    this.cityInput = "#city",
    this.cardInput = "#card",
    this.monthInput = "#month",
    this.yearInput = "#year",
    this.btnPrimary = ".btn-primary",
    this.purchase = "Purchase",
    this.ok = "OK"

  }

  completePurchase(){
    cy.get(this.navBarSelector ).contains(this.cart).click();
    cy.get(this.btnSuccess).contains(this.nameBtnSuccess).click();
    cy.get("#name").type(placeOrder.name ,{force:true});
    cy.get("#country").type(placeOrder.country ,{force:true});
    cy.get("#city").type(placeOrder.city ,{force:true});
    cy.get("#card").type(placeOrder.creditCard ,{force:true});
    cy.get("#month").type(placeOrder.month ,{force:true});
    cy.get("#year").type(placeOrder.year ,{force:true});
    cy.get(".btn-primary").contains("Purchase").click();
    cy.get(".btn-primary").contains("OK").click();
  }
}

export {PurchasePage};
