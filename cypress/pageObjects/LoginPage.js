import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailField() {
    return cy.get("[id='email']");
  }

  static get passwordField() {
    return cy.get("[id='password']");
  }

  static get loginButton(){
    return cy.get("[id='loginButton']");
  }

  static get notYetCustomerButton(){
    return cy.get("[id='newCustomerLink']");
  }

  static get registerEmailField() {
    return cy.get("[id='emailControl']");
  }

  static get registerPasswordField() {
    return cy.get("[id='passwordControl']");
  }

  static get registerRepeatPasswordField() {
    return cy.get("[id='repeatPasswordControl']");
  }

  static get securityQuestionMenu() {
    return cy.get("[name='securityQuestion']");
  }

  static get selectNamOfFavPet() {
    return cy.get("[id='mat-option-9']");
  }

  static get answerField() {
    return cy.get("[id='securityAnswerControl']");
  }

  static get registerButton() {
    return cy.get("[id='registerButton']");
  }

  static get loginEmailField() {
    return cy.get("[id='email']");
  }

  static get loginPasswordField() {
    return cy.get("[id='password']");
  }
}
