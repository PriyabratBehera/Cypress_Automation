
it('Checking check box and radio button ',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');

    // uncheck the check box
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    // Check multiple check box at a time
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //select all the check box
    cy.get('input[type="checkbox"]').check().should('be.checked');

    //select first checkbox
    cy.get('input[type="checkbox"]').first().check();
    cy.get('input[type="checkbox"]').last().check();


    // check radio button
    cy.get('input[value="radio1"]').check().should('be.checked');
    cy.get('input[value="radio2"]').check();
    cy.get('input[value="radio1"]').should('not.be.checked');
    
})