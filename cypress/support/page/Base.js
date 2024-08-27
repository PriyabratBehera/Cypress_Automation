/// <reference types='Cypress'/>
class Base{
    b(){
    //  return cy.visit("https://duckduckgo.com/")   
    }

    shouldLength(element,length){
        return cy.get(element).should('have.length',length)
    }
    isVisible(element){
        return cy.get(element).should('be.visible');
    }
    verifyPartialText(element,text){
        return cy.get(element).should('include',text);
    }
    verifyText(){
        return cy.get(element).should('include',text);
    }

}
export default Base;