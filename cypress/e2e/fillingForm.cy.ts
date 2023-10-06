import {FillingForm} from '../pages/index'

const userInfoForm = Cypress.env("UserInfoForm");


const fillingForm = new FillingForm;


describe("Test to Form Page: Fill form - Validate modal info ", () => {
  it("Fill form - Validate modal info", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    fillingForm.fillingForm();
    cy.get("#submit").click({force:true});
    //Validate that the modal appears
    cy.get("#example-modal-sizes-title-lg").should("contain", "Thanks for submitting the form");
    //Validate that the modal contains the information that was filled out in the form
    cy.get(".modal-body")
    .should("contain", userInfoForm.name)
    .and("contain", userInfoForm.email)
    .and("contain", userInfoForm.gender)
    .and("contain", userInfoForm.number)
    .and("contain", "24 October,1991")
    .and("contain", "Computer Science")
    .and("contain", userInfoForm.hobbies)
    .and("contain", userInfoForm.address)
    .and("contain", "Haryana Karnal");
    cy.get("#closeLargeModal").click({ force: true });
  });
});