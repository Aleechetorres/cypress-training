/* import LoginPage from '../pages/homePage';
import CategoriesPage from '../pages/shoppingPage';
import CartPage from '../pages/cartPage';
import PurchasePage from '../pages/purchasePage'
import Contact from '../pages/contactPage'; */

import {LoginPage, CategoriesPage, CartPage, PurchasePage, Contact} from '../pages/index'

const loginPage = new LoginPage();
const categoriesPage = new CategoriesPage();
const cartPage = new CartPage();
const purchasePage = new PurchasePage();
const contact = new Contact();

describe("Log in feature", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html");
    loginPage.verfifylogInOption();
  });

  it("Añadir celular al carrito y validar que el nombre corresponde al item seleccionado", () => {
    categoriesPage.addPhoneToCart();
  });

  it("Añadir Laptop al carrito y validar que el nombre corresponde al item seleccionado", () => {
    categoriesPage.addLaptopToCart();
  });

  it("Añadir Monitor al carrito y validar que el nombre corresponde al item seleccionado", () => {
    categoriesPage.addMonitorToCart();
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
