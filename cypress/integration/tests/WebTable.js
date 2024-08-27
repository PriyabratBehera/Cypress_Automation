

it('handling web tables',()=>{
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // cy.get('table[name="courses"] tr td:nth-child(2)').each(($el,index,$list)=>{
    //     const text=$el.text();
    //     if(text.includes("Master Selenium Automation in simple Python Language")){
    //         cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
    //             const priceText=price.text()
    //             expect(priceText).to.equal('25');
    //         })
    //     }
    // })

    // read all the column and row
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // cy.get('table[name="courses"] tr').each(($row,index,$rows)=>{
    //     cy.wrap($row).within(()=>{
    //         cy.get('th').each(($col,index,$cols)=>{
    //             cy.log($col.text());
    //         })
    //     })
    })

        it('should print all table data', () => {
          cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); // Replace with your actual URL
      
          cy.get('table[name="courses"]').within(() => { // Replace 'table#table-id' with your actual table selector
            cy.get('tr').each(($row) => {
              cy.wrap($row).within(() => {
                cy.get('td, th').each(($cell) => {
                  console.log($cell.text()); // Print cell text to console
                });
              });
            });
          });
        
})