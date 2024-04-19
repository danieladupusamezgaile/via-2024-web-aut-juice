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
    return cy.get("[class='mat-grid-tile-content']");
  }

  static get selectedProductCard(){
    return cy.get("[class='container mat-typography']");
  }
}
