/// <reference types='Cypress'/>
import { Before, After, BeforeAll, AfterAll } from "@badeball/cypress-cucumber-preprocessor";

// Runs once before all scenarios
BeforeAll(() => {
   return cy.visit("https://rahulshettyacademy.com/AutomationPractice/")   
});

// Runs once after all scenarios
AfterAll(() => {
  cy.log('This runs once after all scenarios');
});

// Runs before each scenario
Before(() => {
  cy.get('input[value="radio1"]').click();
});

// Runs after each scenario
After(() => {
  cy.log('This runs after each scenario');
});
