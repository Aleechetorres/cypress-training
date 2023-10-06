const products = Cypress.env("Products");

class ShoppingPage {

  private elementSelector
  private navBarSelector
  private categoriesSelector
  private cartValues
  private cart

  constructor(){
    this.elementSelector = ".card-title",
    this.navBarSelector = ".nav-link",
    this.categoriesSelector = ".list-group-item",
    this.cartValues = "table tbody tr td",
    this.cart = "Cart"
  }

  addElementToCart(element) {
    cy.get(this.categoriesSelector).contains(element.category).click();
    cy.get(this.elementSelector).contains(element.name).click();
  }
  
  verifyElementAdded(element) {
    cy.get(this.navBarSelector).contains(this.cart).click();
    cy.get(this.cartValues).should("contain", element.name);
  }
}

export {ShoppingPage};