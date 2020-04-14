describe('User can se header', () => {
  it('enters page and views header', () => {
    cy.exec("yarn start");
    cy.visit("/")
    cy.get('#header').should('contain', 'Brillo')
  })
})
