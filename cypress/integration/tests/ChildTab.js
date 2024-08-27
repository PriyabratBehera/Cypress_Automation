

it('child tab ',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    // one approach
    cy.get('#opentab').invoke('removeAttr','target').click();
    cy.origin("https://www.qaclickacademy.com/",()=>{
        cy.contains('Blog').click();
        cy.contains('Mindblown: a blog about philosophy.').should('be.visible');
        
        // go back to parent window
        cy.go('back');

    })
    it.only('Approach2',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then((e)=>{
           let url= e.prop('href');
           cy.visit(url);
           // If target tab is same domine we need not to do origin function
        //    like https://rahulshettyacademy.com/AutomationPractice/ and https://rahulshettyacademy.com/bookq/
           cy.origin(url,()=>{
            cy.contains('Blog').click();
            cy.contains('Mindblown: a blog about philosophy.').should('be.visible');
           })
           

        })
    })

})
