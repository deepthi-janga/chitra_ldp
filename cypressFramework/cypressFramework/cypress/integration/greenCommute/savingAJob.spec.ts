import { RobotEyes, Dependencies, RobotHands } from '../../robots/greenCommute/Robot1';

const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();
let newData ="";

context('LaunchWebsiteFillDataSaveJob', () => {
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

    it('Saving a job', () => {
        robotHands.clickOnJobCard()
        robotHands.clickOnSaveButton();
    });

    it('verifying if job is saved', () => {
        robotEyes.seesJobSavedSuccessMessage(newData)
    })

})