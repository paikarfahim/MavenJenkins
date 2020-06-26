Feature: Test login funtionality
  As a valid user, I should be able to login to the application
  Background: 
    Given I Open Chrome Browser
    When I go to Salesforce application
    Then I should see the Salesforce logo

 Scenario Outline: Test Using Valid Credentials
    And I enter "<username>" username
    And I enter "<password>" password
    When I click the login button
    Then I should see the logout link
    

    Examples: 
      | username                | password |
      | batch03@codegator.us.qa | Pa55word |
      | batch03@codegator.us.qa | Pa55word |
      | batch03@codegator.us.qa | Pa55word |
