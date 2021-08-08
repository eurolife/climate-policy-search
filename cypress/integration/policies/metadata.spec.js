context('Metadata', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/policy');
  });
  it('Shows and hides the form to add or update a policy metadata when clicking the Metadata button', () => {
    cy.contains('View/Update Metadata').click()
    cy.get('.metadata-form')
      .should('be.visible')
    cy.contains('Hide Form').click()
    cy.get('.metadata-form')
      .should('not.exist')
  });
});