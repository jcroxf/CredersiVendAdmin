Feature: Login page functionality

    # Scenario:  Webpage has username box
    #     Given the login webpage
    #     Then webpage should have a username input

    Scenario: Webpage has a create customer button
        Given I have logged in
        When I click on create customer button
        And I enter new customer company name
        And  I click on ok
        Then you have the new customer company name displayed

    Scenario:  Webpage has title
        Given the webpage has loaded
        Then Webpage should have a title

    Scenario:  Webpage has username input
        Given the webpage has loaded
        Then Webpage should have a username inputbox

    Scenario:  Webpage has password input
        Given the webpage has loaded
        Then Webpage should have a password inputbox

    Scenario:  Webpage has login button
        Given the webpage has loaded
        Then Webpage should have a login button

    Scenario: Username label is shown
        Given the webpage has loaded
        Then Webpage should have a username label

    Scenario: Password label is shown
        Given the webpage has loaded
        Then Webpage should have a password label

    Scenario: login page Credersi Logo is visible
        Given the webpage has loaded
        Then Credersi logo has loaded

    Scenario: login page username element has correct placeholder text
        Given the webpage has loaded
        When username input element exists
        Then username input element placeholder text is "Enter Username"

    Scenario: login page password element has correct placeholder text
        Given the webpage has loaded
        When password input element exist
        Then password input element placeholder text is "Enter Password"

    Scenario: Verify user can create site.
        Given I have logged in
        When I click on Customer "Charlie ltd"
        And the site will be displayed
        And the create site button is displayed
        And I click on create site button
        And I input site name and site address
        And I click on ok
        Then the new site will be displayed

    # Scenario: verify user can create a new machine
    #     Given I have logged in
    #     When I click on Customer "Alec ltd"
    #     And the site will be displayed
    #     And I click on site "www.alec.co.uk"
    #     And the location will be displayed
    #     And click on "Lenova"
    #     And the create machine button is displayed
    #     And I click on create machine
    #     And I enter new machine details
    #     And I click on ok
    #     Then new machine is displayed