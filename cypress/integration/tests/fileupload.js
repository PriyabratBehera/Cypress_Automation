import 'cypress-file-upload';


/*
it('file uoload',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile('test1.pdf')
    cy.get('#file-submit').click();
})
it('file upload and rename',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile({filePath:'test1.pdf',fileName:'myfile.pdf'})
    cy.get('#file-submit').click();
    cy.wait(5000)
})
    */
it('file upload drag and drop',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload').attachFile('test1.pdf',{subjectType:'drag-n-drop'})
    cy.get('div[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"] .dz-details .dz-filename span').contains('test1.pdf');
    cy.wait(5000)
})

it('upload multiple file',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload').attachFile(['test1.pdf','test2.pdf'])
    cy.get('div[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"] .dz-details .dz-filename span').contains('test1.pdf');
    cy.wait(5000)
})

it('file upload shadow dom',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload',{includeShadowDom:true}).attachFile('test1.pdf')
    cy.get('div[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"] .dz-details .dz-filename span').contains('test1.pdf');
    cy.wait(5000)
})

