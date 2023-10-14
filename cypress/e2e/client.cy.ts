describe('Client page', () => {
  beforeEach(() => {
    cy.visit('/create-client');
  });

  describe('Page Title', () => {
    it("Has a Create Client page title", ()=>{
      cy.get('h2').contains('Create a Client');
    })
  });

  describe('Happy Path', () => {
    it('Shows a success message when the form is filled out', () => {
      cy.get('#name').type('Test Userson');
      cy.get('#email').type('test@nowhere.foo');
      cy.get('#address').type('1234 Nowhere St');
      cy.get('#password1').type('password');
      cy.get('#password2').type('password');

      cy.get('#submit').click();

      cy.contains('Thank you, your meeting has been scheduled!.');
    });
  });

  describe('Un Happy Path', () => {
    it('Shows an error message when the form is not completely filled out', () => {
      cy.get('#name').type('Test Userson');
      cy.get('#password2').type('password');

      cy.get('#submit').click();

      cy.contains('Please check the information and try submitting again.');
    });
  });
});
