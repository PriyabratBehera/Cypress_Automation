
it('Alert popup ',()=>{
// cypress handel alert automatically
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('#alertbtn').click();
cy.get('#confirmbtn').click();

//window alert or we create alert
cy.on('window:alert',(str)=>{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')  // mocha asseration
})
cy.on('window:confirm',(str)=>{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')  // mocha asseration
})

// click cancell button in alert
cy.on('window:confirm',()=>false)

})
