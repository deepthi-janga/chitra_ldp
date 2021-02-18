import { RobotEyes, Dependencies, RobotHands } from '../../robots/greenCommute/Robot1';

const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();
let newData ="";

context('LaunchWebsiteSearchWithInvalidDataReloadPage', () => {
    beforeEach(() => {
        cy.fixture('example').then(function(data) {
             newData = data;
        })
    })
  
    it('Enter data to your job field and reload the page ', () => {
     dependencies.visitGreenCommute();
     robotHands.fillInvalidDataInYourLocationField(newData)
     robotHands.reloadPage();
     robotEyes.seesYourLocationField("");
    });
})