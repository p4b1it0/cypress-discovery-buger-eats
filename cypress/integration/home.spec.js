// Aula de criação da primeira suíte de testes

describe('home page', () => {
    it('app deve estar online', () => {
        // cy.viewport(1280, 720) // Isto pode ser inserido no "cypress.json"
        cy.visit('/') // O endereço foi referenciado em "cypress.json"
        cy.get('#page-home div h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})