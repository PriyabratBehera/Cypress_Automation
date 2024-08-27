
import 'cypress-iframe';
// Approach same as 1 and 2 below
// const getIframeBody = () => {
//     return cy
//     .get('#mce_0_ifr')
//     .its('0.contentDocument.body').should('not.be.empty')
//     .then(cy.wrap)
//   }
  
//   it('gets the post using single its', () => {
//     cy.visit('index.html')
//     getIframeBody().find('#run-button').should('have.text', 'Try it').click()
//     getIframeBody().find('#result').should('include.text', '"delectus aut autem"')
//   })

it('Approach-1 handling iframe',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe');
    const iFrame=cy.get('#mce_0_ifr')
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);

    iFrame.clear().type('Welcome {cmd+a}')
    cy.get('[aria-label="Bold"]').click();
})

it('Approach-2 by using custom command',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe');
    getIframeBody().type('Welcome {cmd+a}');
    cy.get('[aria-label="Bold"]').click();
})

it('Approach-3 by using iframe plugin',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("welcome")
})

