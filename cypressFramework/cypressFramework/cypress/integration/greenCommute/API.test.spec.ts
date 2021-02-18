import {Dependencies} from '../../robots/greenCommute/Robot1';
const dependencies = new Dependencies();
describe('API testing', () => {
    const base_url = Cypress.env('url');
    let newData;
    beforeEach(() => {
        cy.server()
        cy.route('GET','http://bc15-green-commute.dev-apps.io:8080/api/skills','fixtures:users.json')
        cy.fixture('APIEndPoints').then(function(data) {
             newData = data;
             dependencies.visitGreenCommute();
        })
    })
    
    it('GET', () => {
        cy.request('GET',`${base_url}/api/jobs`).
        then((response) => {
            expect(response).to.have.property('status',200)
        })
    })
})