///<reference types= "cypress"/>

describe('Funcionalidade: produto', () => {
 
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.click()
        //.eq(2)
        .contains('Abominable Hoodie')
        .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')

        
    });
});