
it('Test1',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('input.search-keyword').type('ca');
    

    cy.get('button[class="search-button"]').then(($searchBtn)=>{
        cy.wrap($searchBtn).click();
        // cy.get('.products').find('.product-image').should('have.length',4);
        $searchBtn='.products';
        cy.get($searchBtn).should('have.length',4);
    })
})
