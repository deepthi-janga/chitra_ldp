/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://bc15-green-commute.dev-apps.io/')
      cy.get('[placeholder="Enter your location"]').type('hyderabad').type('{downarrow}').type('{enter}');
        cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click();
        cy.get('[placeholder="Enter your job location"]').type('Mumbai').type('{downarrow}').type('{enter}');
        cy.get('[data-testid="button"]').eq(1).find('span').eq(0).click()
        cy.get('[placeholder="Enter your skills"]').type('Product Manager').type('{downarrow}').type('{enter}');
        cy.get('[data-testid="button"]').eq(0).find('span').eq(0).click()
    })
    
    it('Checking the title of the page', () => {
         //using children
        cy.get('[data-testid="filterButton"]').children('span').children('h4').should('contain', 'Filter')
        //access ancestor of element
        cy.contains('Settings').closest('div').invoke('attr', 'data-testid')


    })
})
