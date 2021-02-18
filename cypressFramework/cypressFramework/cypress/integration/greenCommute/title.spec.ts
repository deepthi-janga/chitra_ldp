import { RobotEyes, Dependencies, RobotHands } from '../../robots/greenCommute/Robot1';
import { BaseHands } from '../../robots/BaseRobot';

const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();
let newData='';

describe('Test to check the title of the page', ()=>{
    beforeEach(() => {
        cy.fixture('example').then(function(data) {
             newData = data;
        })
    })

    it("navigate to GreenCommute page", () => {
        dependencies.visitGreenCommute();
    })

    it("check title of the page", () => {
        robotEyes.seesGreenCommutePageTitle(newData);
    })
        
    });
    



