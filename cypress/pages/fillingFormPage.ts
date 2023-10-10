const userInfoForm = Cypress.env("UserInfoForm");

class FillingForm {

  private firstName
  private lastName
  private userEMail
  private userNumber
  private dateOfBirth
  private yearBirth
  private dayBith
  private subject
  private address
  private state
  private city


  constructor(){
    this.firstName = "#firstName",
    this.lastName = "#lastName",
    this.userEMail = "#userEmail",
    this.userNumber = "#userNumber",
    this.dateOfBirth = "#dateOfBirthInput",
    this.yearBirth = ".react-datepicker__year-select"
    this.dayBith = ".react-datepicker__day--024"
    this.subject = ".subjects-auto-complete__control.css-yk16xz-control",
    this.address = "#currentAddress",
    this.state = "#react-select-3-input",
    this.city = "#react-select-4-input"
  }

  fillingForm() {
    cy.get(this.firstName).type(userInfoForm.name ,{force:true});
    cy.get(this.lastName).type(userInfoForm.lastname ,{force:true});
    cy.get(this.userEMail).type(userInfoForm.email ,{force:true});
    cy.contains(userInfoForm.gender).click();
    cy.get(this.userNumber).type(userInfoForm.number ,{force:true});
    cy.get(this.dateOfBirth).click();
    cy.get(this.yearBirth).select(userInfoForm.year);
    cy.get(this.dayBith).click();
    cy.get(this.subject).type(userInfoForm.subject);
    cy.contains(userInfoForm.hobbies).click();
    cy.get(this.address).type(userInfoForm.address,{force:true});
    cy.get(this.state).type(userInfoForm.state,{force:true});
    cy.get(this.city).type(userInfoForm.city,{force:true});  
  }
}

export {FillingForm};