import {LoginPage, ShoppingPage} from '../pages/index'

const loginPage = new LoginPage();
const shoppingPage = new ShoppingPage();

const products = Cypress.env("Products");
const placeOrder = Cypress.env("PlaceOrder");
const contactInfo = Cypress.env("ContactInfo");

const phoneElement = products.phoneElement;
const laptopElement = products.laptopElement;
const monitorElement = products.monitorElement;

describe("Log in feature", () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.visit("https://www.demoblaze.com/index.html");
    loginPage.verfifylogInOption();
  });

  it("Add products to cart and verify Title Product", () => {
    shoppingPage.addElementToCart(phoneElement);
    cy.get(".btn-lg").contains("Add to cart").click();
    cy.get(".nav-link").contains("Home").click();
    shoppingPage.addElementToCart(laptopElement);
    cy.get(".btn-lg").contains("Add to cart").click();
    cy.get(".nav-link").contains("Home").click();
    shoppingPage.addElementToCart(monitorElement);
    cy.get(".btn-lg").contains("Add to cart").click();
    cy.get(".nav-link").contains("Home").click();
  });

  it("Verify total products value", () => {
    cy.get(".nav-link").contains("Cart").click();

    let suma = 0;
    cy.get("table tbody tr td").each((cell) => {
      const value = parseFloat(cell.text());
      if (!isNaN(value)) {
        suma += value;
      }
    });

    cy.get("table tbody tr td").then(() => {
      cy.get("#totalp").should("contain", suma);
    });
  });
  
 it("Verify successful purchase", () =>{
    cy.get(".nav-link").contains("Cart").click();
    cy.get(".btn-success").contains("Place Order").click();
    cy.get("#name").type(placeOrder.name ,{force:true});
    cy.get("#country").type(placeOrder.country ,{force:true});
    cy.get("#city").type(placeOrder.city ,{force:true});
    cy.get("#card").type(placeOrder.creditCard ,{force:true});
    cy.get("#month").type(placeOrder.month ,{force:true});
    cy.get("#year").type(placeOrder.year ,{force:true});
    cy.get(".btn-primary").contains("Purchase").click();
    cy.get("h2").should("contain", "Thank you for your purchase!");
    cy.get(".btn-primary").contains("OK").click();
  });

  it("Send message through 'Contact'", () => {
    cy.get(".nav-link").contains("Contact").click();
    cy.get("#recipient-email").type(contactInfo.email ,{force:true});
    cy.get("#recipient-name").type(contactInfo.name ,{force:true});
    cy.get("#message-text").type(contactInfo.message ,{force:true});
    cy.get(".btn-primary").contains("Send message").click();
  });
});