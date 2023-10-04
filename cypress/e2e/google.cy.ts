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

  it("Añadir elementos al carrito y validar que el nombre corresponde al item seleccionado", () => {
    categoriesPage.addElementsToCart(elementToAdd);
  });

  it("Validar lo que hay en el carrito y que el total corresponde", () => {
    cartPage.addUpAllElementsValues();
  });
  
  it("Completar la compra", () =>{
    purchasePage.completePurchase();
  })

  it("Enviar un mensaje a través de Contact", () => {
    contact.sendMessage();
  })
});
