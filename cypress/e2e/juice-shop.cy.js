import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { BasketPage } from "../pageObjects/BasketPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethod.Page";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button 
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button 
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userEmailOutput.should("contain.text", "demo");

    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerButton.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      var randomEmail = "email_" + (Math.floor(Math.random() * (9000)) + 1000) + "@ebox.com";
      LoginPage.registerEmailField.type(randomEmail);
      // Fill in password field and repeat password field with same password
      LoginPage.registerPasswordField.type("MyPassword1!");
      LoginPage.registerRepeatPasswordField.type("MyPassword1!");
      // Click on Security Question menu
      LoginPage.securityQuestionMenu.click();
      // Select  "Name of your favorite pet?"
      LoginPage.selectNamOfFavPet.click();
      // Fill in answer
      LoginPage.answerField.type("Pērle");
      // Click Register button
      LoginPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.loginEmailField.type(randomEmail);
      // Set password value to previously used password value
      LoginPage.loginPasswordField.type("MyPassword1!");
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userEmailOutput.should("contain.text", randomEmail);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchBar.click();
      // Search for Lemon
      HomePage.searchInputField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCard.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.selectedProductCard.should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it('Search 500ml and validate Lemon, while having multiple cards', () => {
      // Click on search icon
      HomePage.searchBar.click();
      // Search for 500ml
      HomePage.searchInputField.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.selectedProductCard.should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate cards
    it('Search 500ml and validate cards', () => {
      // Click on search icon
      HomePage.searchBar.click();
      // Search for 500ml
      HomePage.searchInputField.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productCard.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.selectedProductCard.should("contain.text", "Now with even more exotic flavour.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.selectedProductCard.should("contain.text", "Sour but full of vitamins.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productCard.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.selectedProductCard.should("contain.text", "Sweet & tasty!");
    });

    // Create scenario - Read a review
    it('Read a review', () => {
      // Click on search icon
      HomePage.searchBar.click();
      // Search for King
      HomePage.searchInputField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productCard.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewsExpandButton.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.reviews.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    // Create scenario - Add a review
    it('Add a review', () => {
      // Click on search icon
      HomePage.searchBar.click();
      // Search for Raspberry
      HomePage.searchInputField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productCard.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      HomePage.reviewInputField.click().type("Tastes like metal");
      // Click Submit
      HomePage.submitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewsExpandButton.click();
      cy.wait(1000);
      // Validate review -  "Tastes like metal"
      HomePage.reviews.contains("Tastes like metal");
    });

    // Create scenario - Validate product card amount
    it('Validate product card amount', () => {
      // Validate that the default amount of cards is 12
      HomePage.cardsAmount.contains(12);
      // Change items per page (at the bottom of page) to 24
      HomePage.cardsAmountButton.click();
      HomePage.cardsAmountOption.contains(24).click();
      // Validate that the amount of cards is 24
      HomePage.cardsAmount.contains(24);
      // Change items per page (at the bottom of page) to 36
      HomePage.cardsAmountButton.click();
      HomePage.cardsAmountOption.contains(36).click();
      // Validate that the amount of cards is 35
      HomePage.productCard.should("have.length", 35);
    });

    // Create scenario - Buy Girlie T-shirt
    it('Buy Girlie T-shirt', () => {
      // Click on search icon
      HomePage.searchBar.click();
      // Search for Girlie
      HomePage.searchInputField.type("Girlie{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasketButton.click();
      // Click on "Your Basket" button
      HomePage.yourBasketButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressOption.contains("United Fakedom").get('[class="mat-radio-label"]').click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryMethodOption.contains("Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.paymentOption.contains("5678").get('[class="mat-radio-label"]').click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.checkoutButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.confirmationMessage.contains("Thank you for your purchase!");
    });

    // Create scenario - Add address
    it('Add address', () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPaymentButton.click();
      // Click on My saved addresses
      HomePage.mySavedAddressesButton.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAddressButton.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.countryInputField.type("United Kingdom");
      CreateAddressPage.nameInputField.type("Harry Potter");
      CreateAddressPage.mobNumInputField.type("28974567");
      CreateAddressPage.zipCodeInputField.type("S61QI");
      CreateAddressPage.addressInputField.type("Penistone Road 298-14");
      CreateAddressPage.cityInputField.type("Sheffield");
      CreateAddressPage.stateInputField.type("Hillsborogh");
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      HomePage.accountButton.click();
      HomePage.ordersAndPaymentButton.click();
      HomePage.mySavedAddressesButton.click();
      SavedAddressesPage.savedAddresses.should("contain.text", "Harry Potter").and("contain.text", "Penistone Road 298-14").and("contain.text", "S61QI");
    });

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
