const products = Cypress.env("Products");

class CategoriesPage {
  constructor(){
    this.elementSelector = ".card-title",
    this.containerElement = "#tbodyid",
    this.addToCart = ".btn-lg",
    this.addToCartBtn = "Add to cart"
    this.navBarSelector = ".nav-link",
    this.home = "Home",
    this.categoriesSelector = ".list-group-item",
    this.cartValues = "table tbody tr td",
    this.cart = "Cart"
  }

  addElementToCart(elements){
    elements.forEach(element => {
      cy.get(this.categoriesSelector).contains(element.category).click();
      cy.get(this.elementSelector).contains(element.name).click();
      cy.get(this.addToCart).contains(this.addToCartBtn).click();
      cy.get(this.navBarSelector).contains(this.home).click();
    });
  }

  verifyTitleElement(elements) {
    cy.get(this.navBarSelector).contains(this.cart).click();
    elements.forEach(element => {
      cy.get(this.cartValues).should("contain", element.name);
    });
  }
}

export {CategoriesPage};