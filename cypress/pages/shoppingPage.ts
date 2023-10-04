const products = Cypress.env("Products");

class CategoriesPage {
  constructor(){
    this.elementSelector = ".card-title",
    this.containerElement = "#tbodyid",
    this.addToCart = ".btn-lg",
    this.addToCartBtn = "Add to cart"
    this.navBarSelector = ".nav-link",
    this.home = "Home",
    this.categoriesSelector = ".list-group-item"
  }

  addElementsToCart(elements) {
    elements.forEach(element => {
      cy.get(this.navBarSelector).contains(this.home).click();
      cy.get(this.categoriesSelector).contains(element.category).click();
      cy.get(this.elementSelector).contains(element.name).click();
      cy.get(this.containerElement).should("contain", element.name);
      cy.get(this.addToCart).contains(this.addToCartBtn).click();
    });
  }
}

export {CategoriesPage};