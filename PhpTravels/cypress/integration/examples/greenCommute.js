/// <reference types="cypress" />


context('Actions', () => {
    beforeEach(() => {
      //cy.visit('http://bc15-green-commute.dev-apps.io/')
      //importing the url from cypress.json
      cy.visit(Cypress.env('url'))

    })
    
    it('Checking the title of the page', () => {
        cy.title().should('include', 'Green Commute')
    })

    it('Filling details in the first page', () => {
        cy.get('[placeholder="Enter your location"]').type('hyderabad').type('{downarrow}').type('{enter}');
        cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click();
        cy.get('[placeholder="Enter your job location"]').type('Mumbai').type('{downarrow}').type('{enter}');
        cy.get('[data-testid="button"]').eq(1).find('span').eq(0).click()
        cy.get('[placeholder="Enter your skills"]').type('Product Manager').type('{downarrow}').type('{enter}');
        cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click()
        cy.get('[data-testid="jobList-placeholder"]').find('div').find('div').find('h6').should('contain', 'Find Jobs');
    })

    it('Saving a job and checking if success message is displayed', () => {
      cy.get('[placeholder="Enter your location"]').type('hyderabad').type('{downarrow}').type('{enter}');
      cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click();
      cy.get('[placeholder="Enter your job location"]').type('Mumbai').type('{downarrow}').type('{enter}');
      cy.get('[data-testid="button"]').eq(1).find('span').eq(0).click()
      cy.get('[placeholder="Enter your skills"]').type('Product Manager').type('{downarrow}').type('{enter}');
      cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click()
      cy.get('[data-testid="jobCard-placeholder"]').eq(0).click()
      cy.get('[data-testid="button"]').eq(0).click()
      cy.contains('Job removed from saved jobs.'| 'Job saved' )
      })

      //Remove the saved job and check for success message
    it('Removing a saved job and checking if success message is displayed', () => {
        cy.get('[placeholder="Enter your location"]').type('hyderabad').type('{downarrow}').type('{enter}');
        cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click();
        cy.get('[placeholder="Enter your job location"]').type('Mumbai').type('{downarrow}').type('{enter}');
        cy.get('[data-testid="button"]').eq(1).find('span').eq(0).click()
        cy.get('[placeholder="Enter your skills"]').type('Product Manager').type('{downarrow}').type('{enter}');
        cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click()
        cy.get('[data-testid="jobCard-placeholder"]').eq(0).click()
        cy.get('[data-testid="button"]').eq(0).click()
        cy.contains('Job removed from saved jobs.'| 'Job saved' )
        cy.get('[data-testid="tab-item"]').eq(2).find('p').click()
        cy.get('[data-testid="jobCard-placeholder"]').eq(0).click()
        cy.get('[data-testid="button"]').eq(0).click()
        cy.contains('Job removed from saved jobs.')
        })
      
    //Enter your job and refresh the page
    it('Refreshing the page and checking if data entered is removed', () => {
      cy.get('[placeholder="Enter your location"]').type('hyderabad').type('{downarrow}').type('{enter}');
      cy.reload();
      cy.get('[placeholder="Enter your location"]').should('contain', '')
      })

      //Checking if data persists on old page when navigated back from next page
    it('Checking if data persists on old page when navigated back from new page', () => {
      cy.get('[placeholder="Enter your location"]').type('hyderabad').type('{downarrow}').type('{enter}');
      cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click();
      cy.get('[data-testid="back-button"]').click();
      //cy.get('[data-testid="input-field"]').find('div').find('div').eq(0).should('contain','Hyderabad, Telangana, India')
      cy.get('[placeholder="Enter your location"]').invoke('attr', 'value').should('equal', 'Hyderabad, Telangana, India')
    })
    
    //Skip the your job screen and check if next screen navigater turns to green
    it('Skipping the page and checking if next screen navigater turns to green', ()=> {
      cy.get('[data-testid="button"]').eq(1).find('span').eq(0).click();
      cy.get('[data-testid="label-number"]').eq(1).should('have.class', 'MuiAvatar-root MuiAvatar-circle jss13 MuiAvatar-colorDefault')
    })

    


  })
        
  
    
  
  