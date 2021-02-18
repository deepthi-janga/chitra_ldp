Feature: Fill your location field

    I want to fill your location field with different data with is a dropdown

    Scenario: Fill your loaction with valid data
    Scenario Outline: Fill your location field with data present in the dropdown and check if auto suggestions are shown
    Given I have launched the green commute application
    When  I enter valid location in Fill your location field
    Then  I can see the autosuggestions of entered data, in the dropdown

Scenario: Fill your loaction as substring data
    Scenario Outline: Fill your location field as substring and check if respective autosuggestions are shown
    Given I have launched the green commute application
    When  I enter a subString as location in Fill your location field
    Then  I can see the autosuggestions containing the entered substring

Scenario: Fill your loaction with invalid data
    Scenario Outline: Fill your location field with data not present in the dropdown and check if "No options" message is shown
    Given  I have launched the green commute application
    When   I enter invalid location in Fill your location field
    Then   I cannot see the autosuggestions of entered data
    And    can see "No Options"
    