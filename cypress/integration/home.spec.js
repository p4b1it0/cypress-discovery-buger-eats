describe('home page', () => {
    it('app deve estar online', () => {
        cy.viewport(1280, 720)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home div h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})