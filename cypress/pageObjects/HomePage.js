import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get("[id='navbarAccount']");
  }

  static get loginButton(){
    return cy.get("[id='navbarLoginButton']");
  }

  static get userEmailOutput(){
    return cy.get("[class='mat-menu-content ng-tns-c129-2']");
  }

  static get searchBar(){
    return cy.get("[id='searchQuery']");
  }

  static get searchInputField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-6']");
  }

  static get productCard(){
    return cy.get("[class='mat-tooltip-trigger product']");
  }

  static get selectedProductCard(){
    return cy.get("[class='container mat-typography']");
  }

  static get closeButton(){
    return cy.get("[aria-label='Close Dialog']");
  }

  static get reviewsExpandButton(){
    return cy.get('[aria-label="Expand for Reviews"]');
  }

  static get reviews(){
    return cy.get('[class="ng-star-inserted"]');
  }

  static get reviewInputField(){
    return cy.get('[data-placeholder="What did you like or dislike?"]');
  }

  static get submitButton(){
    return cy.get('[id="submitButton"]');
  }

  static get cardsAmount(){
    return cy.get('[id="mat-select-value-1"]');
  }

  static get cardsAmountButton(){
    return cy.get('[id="mat-select-0"]');
  }

  static get cardsAmountOption(){
    return cy.get('[role="option"]');
  }
}
