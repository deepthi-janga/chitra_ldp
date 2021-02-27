Feature: Fill your location field

    I want to fill "your location" field with different data with is a dropdown

@smokeTest
# Scenario: Fill your loaction with valid data
#     Given I launch the green commute application
#     When  I enter valid location in Fill your location field
#     Then  I should see the autosuggestions of entered data, in the dropdown

Scenario: Fill your loaction as substring data
    Given I launch the green commute application
    When  I enter a subString as location in Fill your location field
    Then  I should see the autosuggestions containing the entered substring

Scenario: Fill your loaction with invalid data
    Given  I launch the green commute application
    When   I enter invalid location in Fill your location field
    Then   should see "No Options"
    

Scenario: Fill your loaction as upper/ lower case 
    Given I launch the green commute application
    When I enter location in upper case
    Then I should see the autosuggestions of entered data, in the dropdown

 