describe('Homepage', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
      cy.get('h2').contains('Client Management System')
      cy.get('h2').contains('Make a selection to get started.')


      cy.get('#createClient').should('be.visible');
      cy.get('#scheduleMeeting').should('be.visible');
    })
  })
  