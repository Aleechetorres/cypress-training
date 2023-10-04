class CartPage{
  constructor(){
    this.navBarSelector = ".nav-link",
    this.cart = "Cart",
    this.cartValues = "table tbody tr td",
    this.cartTotal = "#totalp"
  }

  goToCart(elements){
    cy.get(this.navBarSelector).contains(this.cart).click();
    elements.forEach(element => {
      cy.get(this.cartValues).should("contain", element.name);
    });
  }
  
  addUpAllElementsValues(){
    cy.get(this.navBarSelector).contains(this.cart).click();
    let suma = 0;
  
    cy.get(this.cartValues).each((cell) => {
      const value = parseFloat(cell.text());
      if (!isNaN(value)) {
        suma += value;
      }
    });
  
    cy.get(this.cartValues).then(() => {
      cy.get(this.cartTotal).should("contain", suma);
    });
  }
}

export {CartPage};