import { RobotEyes, Dependencies, RobotHands } from '../../robots/greenCommute/Robot1';

const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();
let newData ="";

context('LaunchWebsiteEnterDataNavigateBetweenPages', () => {
    beforeEach(() => {
        cy.fixture('example.json').then(function(data) {
             newData = data;
        })
    })
  
    it('Filling details in the first page and navigate to next page', () => {
     dependencies.visitGreenCommute();
     robotHands.fillsYourLocation(newData);
     robotHands.navigateToPreviousPage();
     cy.wait(3000)
     robotEyes.seesYourLocationField("Hyderabad, Telangana, India")

    });

   


})
