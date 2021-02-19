import {Dependencies} from '../../robots/greenCommute/Robot1';
const dependencies = new Dependencies();
describe('API testing', () => {
    const base_url = Cypress.env('url');
    let newData: { API_EndPoints: { getAllJobs: any; }; };
    beforeEach(() => {
        
        cy.fixture('APIEndPoints').then(function(data) {
             newData = data;
             dependencies.visitGreenCommute();
        })
    })
    
    it('GET', () => {
        cy.request('GET',`${base_url}${newData.API_EndPoints.getAllJobs}`).
        then((response) => {
            expect(response).to.have.property('status',200)
        })
    })
})