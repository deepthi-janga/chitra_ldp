/// <reference types="cypress" />

describe('Home page tests', function() {
    it('Navigates to php travels website', function() {
        cy.visit('https://example.cypress.io');
        cy.contains('Querying');
        //get element by id and assert
        cy.get('#utilities').should('contain', 'Commands')
        //get element by class and assert 
        cy.get('.col-xs-12').should('contain', 'Commands')
        //get element by attribute and assert
        cy.get('[data-toggle="dropdown"]').should('have.class', 'dropdown-toggle')
        //get value of a attribute
        cy.get('[data-toggle="dropdown"]').invoke('attr', 'role').should('equal', 'button')
        //get value of a css
        cy.get('[data-toggle="dropdown"]').invoke('css', 'position').should('equal', 'relative')
        //chain assertions directly to the cy.get() call.
        cy.get('[data-toggle="dropdown"]').should('have.attr', 'role', 'button').and('have.css', 'position', 'relative')
        //Finding elements using there content
        cy.get('.home-list').contains('within').click();
        //navigate back to previous page
        cy.go('back')
        //Finding element using within
        cy.get('.home-list').within(() => {
            cy.get('li:first').should('contain','Querying')
          })
        
    })
   
})