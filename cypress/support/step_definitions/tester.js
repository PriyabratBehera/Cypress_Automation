const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const And = When;
import Home from "../page/Home";
When("I visit duckduckgo.com", () => {
    const h=new Home();
    h.g();
  });
  Then("I got error", () => {
    cy.get('input[id="autocomplete12ugyuggygg"]').click();
  });
  And("I go to next", () => {
    cy.get('input[id="autocomplete"]').should('be.visible')
  });
  
