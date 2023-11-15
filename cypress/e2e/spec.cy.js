    describe('QA Cypress Test - WCC90', () => {
    
    //Test Scenario 1
      it('Verify that user can submit noise report form (Yes option)', () => {
    
    //The user can navigate to the Report a noise problem page
    cy.visit('https://mywestminster.westminster.gov.uk/report-it/noise');
    cy.title().should('eq','Report a noise problem')

    //The user can click “Report a noise problem”
    cy.contains('Start now').click(); 
    cy.url().should('include', '/before-you-report');
    cy.contains('Report a noise problem').click();

    //The user can click “Can we contact you about your noise complaint”, and fill in the required details
    cy.url().should('include', '/your-details');
    cy.contains('Yes').click(); //If the user selects 'Yes' they should see a list of fields
    cy.contains('First name').type('michael');
    cy.contains('Last name').type('adeyemo');
    cy.contains('E-mail').type('mikes.adeyemo@gmail.com');
    cy.contains('Contact number').type('07906237814');
    cy.get('.square-checkbox[name="termsAndConditionsAccepted"]').check();

    //The user can click “Next” and move onto the next page of the form.
    cy.contains('Next').click(); 
    cy.url().should('include', '/noise/your-location'); //Verifying that the user is on the correct page after Clicking 'Next'
  });



  //Test Scenario 2
  it('Verify that user can submit noise report form (No option)', () => {
    //The user can navigate to the Report a noise problem page
    cy.visit('https://mywestminster.westminster.gov.uk/report-it/noise');
    cy.title().should('eq', 'Report a noise problem');

    //The user can click “Report a noise problem”
    cy.contains('Start now').click();
    cy.url().should('include', '/before-you-report');
    cy.contains('Report a noise problem').click();

    // The user can click “Can we contact you about your noise complaint”
    cy.url().should('include', '/your-details');
    cy.contains('No').click(); //If the user selects 'No' there should be no additional fields excpet terms & conditions checkbox 
    cy.get('.square-checkbox[name="termsAndConditionsAccepted"]').check();

    //The user can click “Next” and move onto the next page of the form.
    cy.contains('Next').click();
    cy.url().should('include', '/noise/your-location'); // Verifying that the user is on the correct page after clicking 'Next'
  
 });

    });