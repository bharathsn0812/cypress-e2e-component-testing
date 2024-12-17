describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/fundamentals')
  })
  it('passes ', () => {
    cy.get('[data-test="fundamental-header"]').should('contain.text', 'Testing Fundamentals')
  })
  it('check Accordion Click', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})