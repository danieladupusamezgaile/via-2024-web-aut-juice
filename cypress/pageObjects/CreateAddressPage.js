import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }

  static get addNewAddressButton() {
    return cy.get('[aria-label="Add a new address"]');
  }

  static get countryInputField() {
    return cy.get('[id="mat-input-1"]');
  }
  
  static get nameInputField() {
    return cy.get('[id="mat-input-2"]');
  }

  static get mobNumInputField() {
    return cy.get('[id="mat-input-3"]');
  }

  static get zipCodeInputField() {
    return cy.get('[id="mat-input-4"]');
  }

  static get addressInputField() {
    return cy.get('[id="address"]');
  }

  static get cityInputField() {
    return cy.get('[id="mat-input-6"]');
  }

  static get stateInputField() {
    return cy.get('[id="mat-input-7"]');
  }

  static get submitButton() {
    return cy.get('[id="submitButton"]');
  }
}