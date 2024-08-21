

///<reference types= "cypress"/>

describe('Funcionalidade:   Login' , () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {

        
        cy.get('#username').type('uelisonteste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, uelisonteste (não é uelisonteste? Sair)')
        
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {

        cy.get('#username').type('uelison@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li') .should('contain', 'Endereço de e-mail desconhecido.') 
        
    });
    it(' Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('uelison.teste@teste.com.br')
        cy.get('#password').type('errada@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li') .should('contain', 'Erro: A senha fornecida para o e-mail uelison.teste@teste.com.br está incorreta. Perdeu a senha?') 
        
        
    });
}
)   