import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
    static get url() {
        return "/#/address/select";
    }

    static get addressOption(){
        return cy.get('[class="mat-table cdk-table ng-star-inserted"]');
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to payment selection"]')
    }

    static get submitButton(){
        return cy.get('[id="submitButton"]')
    }
}