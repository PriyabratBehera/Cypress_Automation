

it('DropDown',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // static dropdown
    // cy.get('select[id="dropdown-class-example"]').select('option1').should('have.value','option1') // by using value


    // const d=cy.get('select[id="dropdown-class-example"]').select('option1');
    // cy.then(()=>{
        // d.should('have.value','option1').and('contain.text','Option1')
    // d.should('have.value','option1').and('have.text','Option1')
    
    // })

    //Dynamic dropdown
    cy.contains('Suggession Class Example')
  .siblings('input#autocomplete').type('Ind');
  
  cy.get('.ui-menu-item').each(($el,index,$list)=>{
    if($el.text()==='India'){
        cy.wrap($el).click();
    }
  })

})