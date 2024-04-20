import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }

  static get addNewCardButton() {
    return cy.get('[id="mat-expansion-panel-header-0"]');
  }

  static get nameInputField() {
    return cy.get('[id="mat-input-1"]');
  }

  static get cardNumberInputField() {
    return cy.get('[id="mat-input-2"]');
  }

  static get expiryMonthInputField() {
    return cy.get('[id="mat-input-3"]');
  }

  static get expiryYearInputField() {
    return cy.get('[id="mat-input-4"]');
  }

  static get submitButton() {
    return cy.get('[id="submitButton"]');
  }

  static get savedPaymentMethods() {
    return cy.get('[class="mat-table cdk-table"]');
  }
}