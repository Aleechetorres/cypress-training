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
    this.laptopCategory = "Laptops",
    this.monitorCategory = "Monitors"
  }

  addPhoneToCart(){
    cy.get(this.elementSelector).contains(products.cellphone).click();
    cy.get(this.containerElement).should("contain", products.cellphone);
    cy.get(this.addToCart).contains(this.addToCartBtn ).click();
  }

  addLaptopToCart(){
    cy.get(this.navBarSelector).contains(this.home).click();
    cy.get(this.categoriesSelector).contains(this.laptopCategory).click();
    cy.get(this.elementSelector).contains(products.laptop).click();
    cy.get(this.containerElement).should("contain", products.laptop);
    cy.get(this.addToCart).contains(this.addToCartBtn ).click();
  }

  addMonitorToCart(){
    cy.get(this.navBarSelector).contains(this.home).click();
    cy.get(this.categoriesSelector).contains(this.monitorCategory).click();
    cy.get(this.elementSelector).contains(products.monitor).click();
    cy.get(this.containerElement).should("contain", products.monitor);
    cy.get(this.addToCart).contains(this.addToCartBtn ).click();
  }
}

export {CategoriesPage};