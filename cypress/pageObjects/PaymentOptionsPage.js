import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }

    static get paymentOption(){
        return cy.get('[class="mat-table cdk-table"]');
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to review"]');
    }
}