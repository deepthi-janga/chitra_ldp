import { RobotEyes, Dependencies, RobotHands } from '../../robots/greenCommute/Robot1';
import { BaseHands } from '../../robots/BaseRobot';

const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();
let newData='';

context('LaunchWebsiteFillData', () => {
    beforeEach(() => {
    cy.fixture('example').then(function(data) {
         newData = data;
    })
})
    
    it('Filling details in the first page', () => {
     dependencies.visitGreenCommute();
     robotHands.fillsYourLocation(newData);
     robotHands.fillsYourJobLocation(newData);
     robotHands.fillsYourSkills(newData)
     robotEyes.seesFindJobsElement();
    });
})

