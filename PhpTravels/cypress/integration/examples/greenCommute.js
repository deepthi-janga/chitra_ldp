/// <reference types="cypress" />


context('Actions', () => {
    beforeEach(() => {
      //cy.visit('http://bc15-green-commute.dev-apps.io/')
      //importing the url from cypress.json
      cy.visit(Cypress.env('url'))
      cy.wait(1000)

    })
    
    it('Checking the title of the page', () => {
        cy.wait(1000)
        cy.title().should('include', 'Green Commute')
    })

    it('Filling details in the first page', () => {
        cy.get('[placeholder="Enter your location"]').type('hyderabad').type('{downarrow}').type('{enter}');
        cy.wait(1000)
        cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click();
        cy.wait(1000)
        cy.get('[placeholder="Enter your job location"]').type('Mumbai').type('{downarrow}').type('{enter}');
        cy.wait(1000)
        cy.get('[data-testid="button"]').eq(1).find('span').eq(0).click()
        cy.wait(1000)
        cy.get('[placeholder="Enter your skills"]').type('Product Manager').type('{downarrow}').type('{enter}');
        cy.wait(1000)
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
      cy.wait(1000)
      cy.get('[placeholder="Enter your location"]').type('hyderabad').type('{downarrow}').type('{enter}');
      cy.wait(1000)
      cy.reload();
      cy.wait(1000)
      cy.get('[placeholder="Enter your location"]').should('contain', '')
      })

      //Checking if data persists on old page when navigated back from next page
    it('Checking if data persists on old page when navigated back from new page', () => {
      cy.get('[placeholder="Enter your location"]').type('hyderabad').type('{downarrow}').type('{enter}');
      cy.wait(1000)
      cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click();
      cy.wait(1000)
      cy.get('[data-testid="back-button"]').click();
      //cy.get('[data-testid="input-field"]').find('div').find('div').eq(0).should('contain','Hyderabad, Telangana, India')
      cy.wait(1000)
      cy.get('[placeholder="Enter your location"]').invoke('attr', 'value').should('equal', 'Hyderabad, Telangana, India')
    })
    
    //Skip the your job screen and check if next screen navigater turns to green
    it('Skipping the page and checking if next screen navigater turns to green', ()=> {
      cy.wait(1000)
      cy.get('[data-testid="button"]').eq(1).find('span').eq(0).click();
      cy.wait(1000)
      cy.get('[data-testid="label-number"]').eq(1).should('have.class', 'MuiAvatar-root MuiAvatar-circle jss13 MuiAvatar-colorDefault')
      cy.wait(1000)
    })

    

    //Enter the location as sub string, check if auto suggestions are shown
    it('Checking if auto suggestions are shown when searched with substring', () => {
      cy.wait(1000)
      cy.get('[placeholder="Enter your location"]').type('MP')
      cy.wait(1000)
      let elmLen = cy.get('.MuiAutocomplete-listbox').eq(0).find('li').its('length');
      cy.wait(1000)
      for(let i=0 ;i < elmLen ;i++) {
        cy.get('.MuiAutocomplete-listbox').eq(0).find('li').eq(i).contains('MP')
        cy.wait(1500)
      }
    })

    //Enter the location as sub string, check if auto suggestions are shown
    it('Checking if search box is not case sensitive', () => {
        cy.wait(1500)
        cy.get('[placeholder="Enter your location"]').type('hyderabad, telangana, india')
        cy.wait(1000)
        let elmLen = cy.get('.MuiAutocomplete-listbox').eq(0).find('li').its('length');
        cy.wait(1000)
        for(let i=0 ;i < elmLen ;i++) {
          cy.wait(1000)
          cy.get('.MuiAutocomplete-listbox').eq(0).find('li').eq(i).contains('Hyderabad, Telangana, India')
          cy.wait(1000)
        }
      })

      //Enters other location which is not present in drop down, shall see 'no options' message
    it('Checking if no options is displayed when searched with invalid location', () => {
      cy.wait(1000)
      cy.get('[placeholder="Enter your location"]').type('dfsdsgdgP')
      cy.wait(1000)
      cy.contains('No options')
    })
     
     })

    


        
  
    
  
  