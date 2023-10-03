const user = Cypress.env("User");

class LoginPage {
  constructor() {
    this.logInOption = "Log in";
    this.logInSelector = "#login2";
    this.userNameInput = "#loginusername",
    this.passwordInput = "#loginpassword",
    this.nameOfUserSelector = "#nameofuser"
  }

  verfifylogInOption(){
    cy.get(this.logInSelector).should("contain", this.logInOption);
    cy.get(this.logInSelector).click();
    cy.get(this.userNameInput).type(user.userName ,{force:true});
    cy.get(this.passwordInput).type(user.password,{force:true});
    cy.get(".btn-primary").contains(this.logInOption).click();// cómo podria mejorar esto para llamarlo desde un basePage
    cy.get(this.nameOfUserSelector).should('contain.text', "Welcome aleechetorres");
  }
}

export {LoginPage};