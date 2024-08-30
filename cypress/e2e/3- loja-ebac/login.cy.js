

///<reference types= "cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade:   Login' , () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
        
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {

        
        cy.get('#username').type('uelisonteste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
      //  cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, uelisonteste (não é uelisonteste? Sair)')
        
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
      // cy.get('.woocommerce-error > li') .should('contain', 'Erro: A senha fornecida para o e-mail uelison.teste@teste.com.br está incorreta. Perdeu a senha?') 
        cy.get ('.woocommerce-error ').should('exist')
    });
it('Deve fazer login com sucesso - usando massa de dados', () => {

    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
  //  cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, uelisonteste (não é uelisonteste? Sair)')
    
});

it('Deve fazer login com sucesso - usando fixture', () => {

    cy.fixture('perfil').then(dados => {

        cy.get('#username').type(dados.usuario)
    cy.get('#password').type(dados.senha, {log:false});
    
    cy.get('.woocommerce-form > .button').click()
  //  cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, uelisonteste (não é uelisonteste? Sair)')
    

    })
    
});
it.only('Deve fazer logincom sucesso usando comandos customizados', () => {
  cy.login('uelison.teste@teste.com.br', 'teste@123')
 // cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, uelisonteste (não é uelisonteste? Sair)')
  
});
    
}) 