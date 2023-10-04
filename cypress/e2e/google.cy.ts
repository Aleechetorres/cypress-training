import {LoginPage, CategoriesPage, CartPage, PurchasePage, Contact} from '../pages/index'

const loginPage = new LoginPage();
const categoriesPage = new CategoriesPage();
const cartPage = new CartPage();
const purchasePage = new PurchasePage();
const contact = new Contact();

const products = Cypress.env("Products");

const phoneElement = products.phoneElement;
const laptopElement = products.laptopElement;
const monitorElement = products.monitorElement;

const elementToAdd = [phoneElement, laptopElement, monitorElement];

describe("Log in feature", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html");
    loginPage.verfifylogInOption();
  });

  it("Add products to cart", () => {
    categoriesPage.addElementToCart(elementToAdd);
  });

  it("Verify that Product Tittle corresponds", () => {
    categoriesPage.verifyTitleElement(elementToAdd);
  });

  it("Verify the products in the cart", () => {
    cartPage.goToCart(elementToAdd);
  });

  it("Verify total products value", () => {
    cartPage.addUpAllElementsValues();
  });
  
  it("Complete the purchase", () =>{
    purchasePage.completePurchase();
  });

  it("Send message through 'Contact'", () => {
    contact.sendMessage();
  });
});
