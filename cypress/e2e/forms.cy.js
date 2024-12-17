describe('Forms Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/forms')
    })
    it('test form successful submission', () => {
      cy.getDataTest('testing-forms-header').should('contain.text', 'Testing Forms')
      cy.getDataTest('subscribe-form').find('input').type('one@gmail.com')
      cy.contains(/successfully subbed/i).should('not.exist')
      cy.getDataTest('subscribe-submit').click()
      cy.contains(/successfully subbed/i).should('exist')
      cy.contains(/invalid email/i).should('not.exist')
    })
    it('test form failed submission', () => {
      cy.getDataTest('testing-forms-header').should('contain.text', 'Testing Forms')
      cy.getDataTest('subscribe-form').find('input').type('one@')
      cy.contains(/invalid email/i).should('not.exist')
      cy.getDataTest('subscribe-submit').click()
      cy.contains(/invalid email/i).should('exist')
      cy.contains(/successfully subbed/i).should('not.exist')
    })
})