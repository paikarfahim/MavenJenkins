Feature: Test login funtionality
  As a valid user, I should be able to login to the application

  Scenario: As a valid user I should be able to login to the application
    Given I open the browser
    When I go to the application
    Then I should see the logo
    Then I enter valid username
    Then I enter valid password
    And I click the login button
    Then I should see the logout link
