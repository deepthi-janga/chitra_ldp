import { RobotEyes, Dependencies, RobotHands } from '../../robots/greenCommute/Robot1';
import { BaseHands } from '../../robots/BaseRobot';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();
let newData='';

beforeEach(() => {
    cy.fixture('example').then(function(data) {
         newData = data;
    })
})

Given('I launch the green commute application', () => {
dependencies.visitGreenCommute();
});

When ('I enter location in upper case', () => {
robotHands.fillYourLocationFieldWithCaplitalLetters(newData);
});

Then('I should see the autosuggestions of entered data, in the dropdown', () => {
robotEyes.seesEnteredTextInAutoSuggestion(newData); 
});

When ('I enter a subString as location in Fill your location field', () => {
robotHands.fillYourLocationFieldAsSubstring(newData)
})

Then('I should see the autosuggestions containing the entered substring', ()=> {
    robotEyes.seesEnteredTextInAutoSuggestion(newData); 
})

When('I enter invalid location in Fill your location field', () => {
    robotHands.fillInvalidDataInYourLocationField(newData)
})

Then('should see "No Options"', () => {
    robotEyes.seesNoOptionsText(newData);  
})