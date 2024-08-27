
import 'cypress-iframe'
import '@4tw/cypress-drag-drop'
/*
it('Approach-1 mouseHover',()=>{
    // mousehosver does not support in cypress we have to use jquery
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('div .mouse-hover-content').invoke('show');   // show method should be applied on immediate parent of hidden element
    cy.contains('Top').click({force: true});
    cy.url().should('include','top')


})
it('Approach-2 mouseHover',()=>{
    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('bootstrap is not defined')) {
          return false;
        }
        return true; // Let other exceptions fail the test
      });
    cy.visit('https://demo.opencart.com/');
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
    cy.contains('PC (0)').should('be.visible');
    cy.contains('PC (0)').click()
})

it('Right Click',()=>{
  //Approach-1
  cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
  cy.contains('right click me').trigger('contextmenu');
  cy.contains('Edit').should('be.visible');

  //Approach-2
  // cy.contains('right click me').rightclick();
})

it('Double Click',()=>{
  
  cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
  cy.wait(4000)
  cy.frameLoaded('#iframeResult') // load the frame

  //Approach-1 trigger()
  cy.iframe('#iframeResult').find("#field1").trigger('dbclick').type('{cmd+c}');
  cy.iframe('#iframeResult').find("#field2").type('{cmd+v}');

  //Approach-1 dblclick
  cy.iframe('#iframeResult').find("#field1").dblclick();
})

it('Drag and drop using plugin',()=>{
  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('bootstrap is not defined')) {
      return false;
    }
    return true; // Let other exceptions fail the test
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific errors
    if (err.message.includes('msie') || err.message.includes('Script error')) {
      return false; // Prevents Cypress from failing the test
    }
    return true; // Let other exceptions fail the test
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error is related to 'angular is not defined'
    if (err.message.includes('angular is not defined')) {
      return false; // Prevent Cypress from failing the test
    }
    return true; // Let other exceptions fail the test
  });
  cy.visit('https://demo.automationtesting.in/Static.html');
  // cy.get('#angular').drag('div[id="droparea"]');
  // we can do forcefully drag and drag
  cy.get('#angular').drag('div[id="droparea"]','{force:true}');
})
*/
it('Scrolling page',()=>{
  cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html', { failOnStatusCode: false });
  cy.wait(2000)
  cy.frameLoaded('#cf-chl-widget-fq6fn').cy.get('#qquD4 > .spacer > :nth-child(1) > div').click();
  // cy.get('#qquD4 > .spacer > :nth-child(1) > div').click();
cy.wait(10000)
cy.get('[class="two-column td-image"]:nth-child(1) tr:nth-child(86)').scrollIntoView('{duration:2000}');
})








